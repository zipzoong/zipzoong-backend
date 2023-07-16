import { ITerms } from "@APP/api/structures/ITerms";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { DateMapper, Result, isUnDeleted, pick } from "@APP/utils";
import { Prisma, TermsType } from "@PRISMA";
import { filter, isUndefined, map, pipe, toArray, unless } from "@fxts/core";
import { randomUUID } from "crypto";

export namespace Service {
    /**
     * 약관 유효성 검사
     * - 비정상적인 id가 포함되어있는지
     * - 필수 약관이 모두 존재하는지
     *
     * 성공시 `agreement_ids`를 리턴한다.
     */
    export const verify =
        (tx: Prisma.TransactionClient = prisma) =>
        (user_type: IUser.Type) =>
        (
            agreement_ids: string[],
        ): Promise<IResult<string[], "TERMS_INSUFFICIENT" | "TERMS_INVALID">> =>
            pipe(
                user_type,

                (user_type): TermsType[] => {
                    switch (user_type) {
                        case "client":
                            return ["all", "CL"];
                        case "real estate agent":
                            return ["all", "BIZ", "RE"];
                        case "home service provider":
                            return ["all", "BIZ", "HS"];
                    }
                },

                async (terms) =>
                    tx.termsModel.findMany({ where: { type: { in: terms } } }),

                filter(isUnDeleted),

                toArray,

                // 필수 id가 모두 있는가
                (terms) =>
                    terms
                        .filter((input) => input.is_required)
                        .map(pick("id"))
                        .every((terms_id) => agreement_ids.includes(terms_id))
                        ? Result.Ok.map(terms.map(pick("id")))
                        : Result.Error.map("TERMS_INSUFFICIENT" as const),

                // 존재하지 않는 id를 포함하는가
                unless(Result.Error.is, (terms_ids) =>
                    agreement_ids.every((agreement_id) =>
                        Result.Ok.flatten(terms_ids).includes(agreement_id),
                    )
                        ? Result.Ok.map(agreement_ids)
                        : Result.Error.map("TERMS_INVALID" as const),
                ),
            );

    const _agree =
        ({
            user_id,
            agreed_terms_ids,
        }: {
            agreed_terms_ids: string[];
            user_id: string;
        }) =>
        async (tx: Prisma.TransactionClient): Promise<void> => {
            const now = DateMapper.toISO();

            const agreements = await tx.termsAgreementModel.findMany({
                where: {
                    user_id,
                    terms_id: { in: agreed_terms_ids },
                    is_deleted: true,
                },
            });

            await tx.termsAgreementModel.updateMany({
                where: {
                    id: { in: agreements.map(pick("id")) },
                },
                data: {
                    is_deleted: false,
                    deleted_at: null,
                    updated_at: now,
                },
            });

            const alread_agreed_terms_ids = agreements.map(pick("terms_id"));

            await tx.termsAgreementModel.createMany({
                data: agreed_terms_ids
                    .filter(
                        (term_id) => !alread_agreed_terms_ids.includes(term_id),
                    )
                    .map((terms_id) => ({
                        id: randomUUID(),
                        user_id,
                        terms_id,
                        created_at: now,
                        updated_at: now,
                        is_deleted: false,
                        deleted_at: null,
                    })),
            });
        };

    /**
     * 존재하는 user_id인지, 존재하는 terms_id인지 확인하지 않는다.
     *
     * tx를 전달하면 자체적으로 transaction을 생성하고, tx를 전달 받으면 해당 transaction내에 포함된다.
     */
    export const agree = async ({
        tx,
        user_id,
        agreed_terms_ids,
    }: {
        tx?: Prisma.TransactionClient;
        user_id: string;
        agreed_terms_ids: string[];
    }) =>
        isUndefined(tx)
            ? prisma.$transaction(_agree({ user_id, agreed_terms_ids }))
            : _agree({ user_id, agreed_terms_ids })(tx);

    export const getList = (search: ITerms.ISearch): Promise<ITerms[]> =>
        pipe(
            search,

            async (input) =>
                prisma.termsModel.findMany({
                    where: { type: { in: input.type } },
                }),

            filter(isUnDeleted),

            map(
                (terms) =>
                    ({
                        id: terms.id,
                        title: terms.title,
                        url: terms.url,
                        type: terms.type,
                        version: terms.version,
                        is_required: terms.is_required,
                    }) satisfies ITerms,
            ),

            toArray,
        );
}
