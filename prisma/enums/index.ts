import { createEnum } from "schemix";

export const GenderType = createEnum("GenderType", (Enum) => {
    Enum.addValue("female").addValue("male");
});

export const OauthType = createEnum("OauthType", (Enum) => {
    Enum.addValue("kakao").addValue("naver").addValue("apple");
});

export const ServiceType = createEnum("ServiceType", (Enum) => {
    Enum.addValue("HS").addValue("RE");
});

export const TermsType = createEnum("TermsType", (Enum) => {
    Enum.addValue("all")
        .addValue("CL")
        .addValue("BIZ")
        .addValue("HS")
        .addValue("RE");
});

export const ZipzoongCareStatus = createEnum("ZipzoongCareStatus", (Enum) => {
    Enum.addValue("pending")
        .addValue("caring")
        .addValue("cared")
        .addValue("cancelled");
});

/**
 * public - 그냥 접근 가능한 이미지 url
 * zipzoong_s3 - "zipzoong" s3에 private으로 저장된 리소스, sign 작업 필요
 */
export const ImageAccessType = createEnum("ImageAccessType", (Enum) => {
    Enum.addValue("public").addValue("zipzoong_s3");
});
