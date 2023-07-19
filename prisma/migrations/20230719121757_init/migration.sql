-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('female', 'male');

-- CreateEnum
CREATE TYPE "OauthType" AS ENUM ('kakao', 'naver', 'apple');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('HS', 'RE');

-- CreateEnum
CREATE TYPE "TermsType" AS ENUM ('all', 'CL', 'BIZ', 'HS', 'RE');

-- CreateEnum
CREATE TYPE "ZipzoongCareStatus" AS ENUM ('pending', 'caring', 'cared', 'cancelled');

-- CreateEnum
CREATE TYPE "ImageAccessType" AS ENUM ('public', 'zipzoong_s3');

-- CreateTable
CREATE TABLE "terms" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "title" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "is_required" BOOLEAN NOT NULL,
    "type" "TermsType" NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terms_agreements" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "terms_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "terms_agreements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "birth" DATE,
    "gender" "GenderType",
    "phone" TEXT,
    "address_zone_code" TEXT,
    "address_road" TEXT,
    "address_detail" TEXT,
    "address_extra" TEXT,
    "profile_image_url" TEXT,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "biz_users" (
    "id" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "introduction_title" TEXT NOT NULL,
    "introduction_content" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "profile_image_url" TEXT NOT NULL,

    CONSTRAINT "biz_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "biz_certification_images" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "biz_user_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "access_type" "ImageAccessType" NOT NULL,

    CONSTRAINT "biz_certification_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_agents" (
    "id" TEXT NOT NULL,
    "is_licensed" BOOLEAN NOT NULL,
    "expertise_id" TEXT NOT NULL,
    "re_number" TEXT NOT NULL,
    "re_name" TEXT NOT NULL,
    "re_phone" TEXT NOT NULL,
    "re_licensed_agent_name" TEXT NOT NULL,
    "re_address_zone_code" TEXT NOT NULL,
    "re_address_road" TEXT NOT NULL,
    "re_address_detail" TEXT,
    "re_address_extra" TEXT,
    "biz_open_date" DATE NOT NULL,

    CONSTRAINT "re_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_expertises" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,

    CONSTRAINT "re_expertises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_providers" (
    "id" TEXT NOT NULL,
    "address_zone_code" TEXT NOT NULL,
    "address_road" TEXT NOT NULL,
    "address_detail" TEXT,
    "address_extra" TEXT,
    "biz_phone" TEXT NOT NULL,
    "biz_registration_number" TEXT NOT NULL,
    "biz_open_date" DATE NOT NULL,

    CONSTRAINT "hs_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_sub_expertises" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,
    "super_expertise_id" TEXT NOT NULL,

    CONSTRAINT "hs_sub_expertises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_super_expertises" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "name" TEXT NOT NULL,

    CONSTRAINT "hs_super_expertises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_sub_expertise_relations" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "hs_provider_id" TEXT NOT NULL,
    "sub_expertise_id" TEXT NOT NULL,

    CONSTRAINT "hs_sub_expertise_relations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "re_portfolios" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "re_agent_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "main_url" TEXT NOT NULL,
    "is_visible" BOOLEAN NOT NULL,

    CONSTRAINT "re_portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hs_portfolios" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "hs_provider_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "main_url" TEXT NOT NULL,
    "is_visible" BOOLEAN NOT NULL,

    CONSTRAINT "hs_portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_accounts" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "oauth_type" "OauthType" NOT NULL,
    "oauth_sub" TEXT NOT NULL,
    "biz_user_id" TEXT,
    "client_id" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "profile_image_url" TEXT,
    "birth" TEXT,
    "gender" "GenderType",
    "address_zone_code" TEXT,
    "address_road" TEXT,
    "address_detail" TEXT,
    "address_extra" TEXT,

    CONSTRAINT "oauth_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone_verifications" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMPTZ,
    "phone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,

    CONSTRAINT "phone_verifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "terms_agreements_user_id_terms_id_key" ON "terms_agreements"("user_id", "terms_id");

-- CreateIndex
CREATE UNIQUE INDEX "re_expertises_name_key" ON "re_expertises"("name");

-- CreateIndex
CREATE UNIQUE INDEX "hs_super_expertises_name_key" ON "hs_super_expertises"("name");

-- CreateIndex
CREATE UNIQUE INDEX "hs_sub_expertise_relations_hs_provider_id_sub_expertise_id_key" ON "hs_sub_expertise_relations"("hs_provider_id", "sub_expertise_id");

-- AddForeignKey
ALTER TABLE "terms_agreements" ADD CONSTRAINT "terms_agreements_terms_id_fkey" FOREIGN KEY ("terms_id") REFERENCES "terms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_agreements" ADD CONSTRAINT "terms_agreements_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biz_users" ADD CONSTRAINT "biz_users_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biz_certification_images" ADD CONSTRAINT "biz_certification_images_biz_user_id_fkey" FOREIGN KEY ("biz_user_id") REFERENCES "biz_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "re_agents" ADD CONSTRAINT "re_agents_id_fkey" FOREIGN KEY ("id") REFERENCES "biz_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "re_agents" ADD CONSTRAINT "re_agents_expertise_id_fkey" FOREIGN KEY ("expertise_id") REFERENCES "re_expertises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hs_providers" ADD CONSTRAINT "hs_providers_id_fkey" FOREIGN KEY ("id") REFERENCES "biz_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hs_sub_expertises" ADD CONSTRAINT "hs_sub_expertises_super_expertise_id_fkey" FOREIGN KEY ("super_expertise_id") REFERENCES "hs_super_expertises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hs_sub_expertise_relations" ADD CONSTRAINT "hs_sub_expertise_relations_hs_provider_id_fkey" FOREIGN KEY ("hs_provider_id") REFERENCES "hs_providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hs_sub_expertise_relations" ADD CONSTRAINT "hs_sub_expertise_relations_sub_expertise_id_fkey" FOREIGN KEY ("sub_expertise_id") REFERENCES "hs_sub_expertises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "re_portfolios" ADD CONSTRAINT "re_portfolios_re_agent_id_fkey" FOREIGN KEY ("re_agent_id") REFERENCES "re_agents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hs_portfolios" ADD CONSTRAINT "hs_portfolios_hs_provider_id_fkey" FOREIGN KEY ("hs_provider_id") REFERENCES "hs_providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oauth_accounts" ADD CONSTRAINT "oauth_accounts_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oauth_accounts" ADD CONSTRAINT "oauth_accounts_biz_user_id_fkey" FOREIGN KEY ("biz_user_id") REFERENCES "biz_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
