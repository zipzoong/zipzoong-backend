
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TermsModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  title: 'title',
  version: 'version',
  url: 'url',
  is_required: 'is_required',
  type: 'type'
};

exports.Prisma.TermsAgreementModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  terms_id: 'terms_id',
  user_id: 'user_id'
};

exports.Prisma.ZipzoongCareRequestModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  client_id: 'client_id',
  url: 'url'
};

exports.Prisma.ZipzoongCareModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  biz_user_id: 'biz_user_id',
  url: 'url'
};

exports.Prisma.UserModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  email: 'email'
};

exports.Prisma.ClientModelScalarFieldEnum = {
  id: 'id',
  birth: 'birth',
  gender: 'gender',
  phone: 'phone',
  address_zone_code: 'address_zone_code',
  address_road: 'address_road',
  address_detail: 'address_detail',
  address_extra: 'address_extra',
  profile_image_url: 'profile_image_url'
};

exports.Prisma.BIZUserModelScalarFieldEnum = {
  id: 'id',
  is_verified: 'is_verified',
  introduction_title: 'introduction_title',
  introduction_content: 'introduction_content',
  phone: 'phone',
  profile_image_url: 'profile_image_url'
};

exports.Prisma.BIZCertificationImageModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  biz_user_id: 'biz_user_id',
  url: 'url',
  access_type: 'access_type'
};

exports.Prisma.REAgentModelScalarFieldEnum = {
  id: 'id',
  is_licensed: 'is_licensed',
  expertise_id: 'expertise_id',
  re_number: 're_number',
  re_name: 're_name',
  re_phone: 're_phone',
  re_licensed_agent_name: 're_licensed_agent_name',
  re_address_zone_code: 're_address_zone_code',
  re_address_road: 're_address_road',
  re_address_detail: 're_address_detail',
  re_address_extra: 're_address_extra',
  biz_open_date: 'biz_open_date'
};

exports.Prisma.REExpertiseModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name'
};

exports.Prisma.HSProviderModelScalarFieldEnum = {
  id: 'id',
  address_zone_code: 'address_zone_code',
  address_road: 'address_road',
  address_detail: 'address_detail',
  address_extra: 'address_extra',
  biz_phone: 'biz_phone',
  biz_registration_number: 'biz_registration_number',
  biz_open_date: 'biz_open_date'
};

exports.Prisma.HSSubExpertiseModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  super_expertise_id: 'super_expertise_id'
};

exports.Prisma.HSSuperExpertiseModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name'
};

exports.Prisma.HSSubExpertiseRelationModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  hs_provider_id: 'hs_provider_id',
  sub_expertise_id: 'sub_expertise_id'
};

exports.Prisma.REPortfolioModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  re_agent_id: 're_agent_id',
  title: 'title',
  main_url: 'main_url',
  is_visible: 'is_visible'
};

exports.Prisma.HSPortfolioModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  hs_provider_id: 'hs_provider_id',
  title: 'title',
  main_url: 'main_url',
  is_visible: 'is_visible'
};

exports.Prisma.OauthAccountModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  oauth_type: 'oauth_type',
  oauth_sub: 'oauth_sub',
  biz_user_id: 'biz_user_id',
  client_id: 'client_id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  profile_image_url: 'profile_image_url',
  birth: 'birth',
  gender: 'gender',
  address_zone_code: 'address_zone_code',
  address_road: 'address_road',
  address_detail: 'address_detail',
  address_extra: 'address_extra'
};

exports.Prisma.PhoneVerificationModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  phone: 'phone',
  code: 'code',
  transaction_id: 'transaction_id',
  is_verified: 'is_verified'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TermsType = exports.$Enums.TermsType = {
  all: 'all',
  CL: 'CL',
  BIZ: 'BIZ',
  HS: 'HS',
  RE: 'RE'
};

exports.GenderType = exports.$Enums.GenderType = {
  female: 'female',
  male: 'male'
};

exports.ResourceAccessType = exports.$Enums.ResourceAccessType = {
  public: 'public',
  zipzoong_s3: 'zipzoong_s3'
};

exports.OauthType = exports.$Enums.OauthType = {
  kakao: 'kakao',
  naver: 'naver',
  apple: 'apple'
};

exports.Prisma.ModelName = {
  TermsModel: 'TermsModel',
  TermsAgreementModel: 'TermsAgreementModel',
  ZipzoongCareRequestModel: 'ZipzoongCareRequestModel',
  ZipzoongCareModel: 'ZipzoongCareModel',
  UserModel: 'UserModel',
  ClientModel: 'ClientModel',
  BIZUserModel: 'BIZUserModel',
  BIZCertificationImageModel: 'BIZCertificationImageModel',
  REAgentModel: 'REAgentModel',
  REExpertiseModel: 'REExpertiseModel',
  HSProviderModel: 'HSProviderModel',
  HSSubExpertiseModel: 'HSSubExpertiseModel',
  HSSuperExpertiseModel: 'HSSuperExpertiseModel',
  HSSubExpertiseRelationModel: 'HSSubExpertiseRelationModel',
  REPortfolioModel: 'REPortfolioModel',
  HSPortfolioModel: 'HSPortfolioModel',
  OauthAccountModel: 'OauthAccountModel',
  PhoneVerificationModel: 'PhoneVerificationModel'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
