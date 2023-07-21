import { HSPortfolioModel } from "@PRISMA";
import { IHSPortfolio } from "@APP/api/structures/IHSPortfolio";
import { DateMapper } from "@APP/utils";

export namespace PrismaMapper {
    export const toPublic = (
        model: HSPortfolioModel,
    ): IHSPortfolio.IPublic => ({
        id: model.id,
        title: model.title,
        main_url: model.main_url,
        created_at: DateMapper.toISO(model.created_at),
        updated_at: DateMapper.toISO(model.updated_at),
    });
    export const toPrivate = (
        model: HSPortfolioModel,
    ): IHSPortfolio.IPrivate => ({
        id: model.id,
        title: model.title,
        main_url: model.main_url,
        is_visible: model.is_visible,
        created_at: DateMapper.toISO(model.created_at),
        updated_at: DateMapper.toISO(model.updated_at),
    });
}
