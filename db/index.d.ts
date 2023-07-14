
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type TermsModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "TermsModel"
  objects: {
    agreements: TermsAgreementModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    title: string
    version: string
    url: string
    is_required: boolean
    type: TermsType
  }, ExtArgs["result"]["termsModel"]>
  composites: {}
}

/**
 * Model TermsModel
 * 
 */
export type TermsModel = runtime.Types.DefaultSelection<TermsModelPayload>
export type TermsAgreementModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "TermsAgreementModel"
  objects: {
    terms: TermsModelPayload<ExtArgs>
    user: UserModelPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    terms_id: string
    user_id: string
  }, ExtArgs["result"]["termsAgreementModel"]>
  composites: {}
}

/**
 * Model TermsAgreementModel
 * 
 */
export type TermsAgreementModel = runtime.Types.DefaultSelection<TermsAgreementModelPayload>
export type UserModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "UserModel"
  objects: {
    client: ClientModelPayload<ExtArgs> | null
    biz_user: BIZUserModelPayload<ExtArgs> | null
    terms_agreements: TermsAgreementModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    email: string | null
  }, ExtArgs["result"]["userModel"]>
  composites: {}
}

/**
 * Model UserModel
 * 
 */
export type UserModel = runtime.Types.DefaultSelection<UserModelPayload>
export type ClientModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ClientModel"
  objects: {
    base: UserModelPayload<ExtArgs>
    oauth_accounts: OauthAccountModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    birth: Date | null
    gender: GenderType | null
    phone: string | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
    profile_image_url: string | null
  }, ExtArgs["result"]["clientModel"]>
  composites: {}
}

/**
 * Model ClientModel
 * 
 */
export type ClientModel = runtime.Types.DefaultSelection<ClientModelPayload>
export type BIZUserModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "BIZUserModel"
  objects: {
    base: UserModelPayload<ExtArgs>
    re_agent: REAgentModelPayload<ExtArgs> | null
    hs_provider: HSProviderModelPayload<ExtArgs> | null
    oauth_accounts: OauthAccountModelPayload<ExtArgs>[]
    biz_certification_images: BIZCertificationImageModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
  }, ExtArgs["result"]["bIZUserModel"]>
  composites: {}
}

/**
 * Model BIZUserModel
 * 
 */
export type BIZUserModel = runtime.Types.DefaultSelection<BIZUserModelPayload>
export type BIZCertificationImageModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "BIZCertificationImageModel"
  objects: {
    biz_user: BIZUserModelPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    biz_user_id: string
    url: string
    access_type: ImageAccessType
  }, ExtArgs["result"]["bIZCertificationImageModel"]>
  composites: {}
}

/**
 * Model BIZCertificationImageModel
 * 
 */
export type BIZCertificationImageModel = runtime.Types.DefaultSelection<BIZCertificationImageModelPayload>
export type REAgentModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "REAgentModel"
  objects: {
    base: BIZUserModelPayload<ExtArgs>
    expertise: REExpertiseModelPayload<ExtArgs>
    portfolios: REPortfolioModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    is_licensed: boolean
    expertise_id: string
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail: string | null
    re_address_extra: string | null
    biz_open_date: Date
  }, ExtArgs["result"]["rEAgentModel"]>
  composites: {}
}

/**
 * Model REAgentModel
 * 
 */
export type REAgentModel = runtime.Types.DefaultSelection<REAgentModelPayload>
export type REExpertiseModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "REExpertiseModel"
  objects: {
    re_agents: REAgentModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
  }, ExtArgs["result"]["rEExpertiseModel"]>
  composites: {}
}

/**
 * Model REExpertiseModel
 * 
 */
export type REExpertiseModel = runtime.Types.DefaultSelection<REExpertiseModelPayload>
export type HSProviderModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "HSProviderModel"
  objects: {
    base: BIZUserModelPayload<ExtArgs>
    expertise_relation: HSSubExpertiseRelationModelPayload<ExtArgs>[]
    portfolios: HSPortfolioModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    address_zone_code: string
    address_road: string
    address_detail: string | null
    address_extra: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date
  }, ExtArgs["result"]["hSProviderModel"]>
  composites: {}
}

/**
 * Model HSProviderModel
 * 
 */
export type HSProviderModel = runtime.Types.DefaultSelection<HSProviderModelPayload>
export type HSSubExpertiseModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "HSSubExpertiseModel"
  objects: {
    relations: HSSubExpertiseRelationModelPayload<ExtArgs>[]
    super_expertise: HSSuperExpertiseModelPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    super_expertise_id: string
  }, ExtArgs["result"]["hSSubExpertiseModel"]>
  composites: {}
}

/**
 * Model HSSubExpertiseModel
 * 
 */
export type HSSubExpertiseModel = runtime.Types.DefaultSelection<HSSubExpertiseModelPayload>
export type HSSuperExpertiseModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "HSSuperExpertiseModel"
  objects: {
    sub_expertises: HSSubExpertiseModelPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
  }, ExtArgs["result"]["hSSuperExpertiseModel"]>
  composites: {}
}

/**
 * Model HSSuperExpertiseModel
 * 
 */
export type HSSuperExpertiseModel = runtime.Types.DefaultSelection<HSSuperExpertiseModelPayload>
export type HSSubExpertiseRelationModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "HSSubExpertiseRelationModel"
  objects: {
    hs_provider: HSProviderModelPayload<ExtArgs>
    sub_expertise: HSSubExpertiseModelPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    hs_provider_id: string
    sub_expertise_id: string
  }, ExtArgs["result"]["hSSubExpertiseRelationModel"]>
  composites: {}
}

/**
 * Model HSSubExpertiseRelationModel
 * 
 */
export type HSSubExpertiseRelationModel = runtime.Types.DefaultSelection<HSSubExpertiseRelationModelPayload>
export type REPortfolioModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "REPortfolioModel"
  objects: {
    re_agent: REAgentModelPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    re_agent_id: string
    title: string
    url: string
    is_visible: boolean
  }, ExtArgs["result"]["rEPortfolioModel"]>
  composites: {}
}

/**
 * Model REPortfolioModel
 * 
 */
export type REPortfolioModel = runtime.Types.DefaultSelection<REPortfolioModelPayload>
export type HSPortfolioModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "HSPortfolioModel"
  objects: {
    hs_provider: HSProviderModelPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    hs_provider_id: string
    title: string
    url: string
    is_visible: boolean
  }, ExtArgs["result"]["hSPortfolioModel"]>
  composites: {}
}

/**
 * Model HSPortfolioModel
 * 
 */
export type HSPortfolioModel = runtime.Types.DefaultSelection<HSPortfolioModelPayload>
export type OauthAccountModelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "OauthAccountModel"
  objects: {
    client: ClientModelPayload<ExtArgs> | null
    biz_user: BIZUserModelPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    oauth_type: OauthType
    oauth_sub: string
    biz_user_id: string | null
    client_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    profile_image_url: string | null
    birth: string | null
    gender: GenderType | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
  }, ExtArgs["result"]["oauthAccountModel"]>
  composites: {}
}

/**
 * Model OauthAccountModel
 * 
 */
export type OauthAccountModel = runtime.Types.DefaultSelection<OauthAccountModelPayload>

/**
 * Enums
 */

export const TermsType: {
  all: 'all',
  CL: 'CL',
  BIZ: 'BIZ',
  HS: 'HS',
  RE: 'RE'
};

export type TermsType = (typeof TermsType)[keyof typeof TermsType]


export const GenderType: {
  female: 'female',
  male: 'male'
};

export type GenderType = (typeof GenderType)[keyof typeof GenderType]


export const ImageAccessType: {
  public: 'public',
  zipzoong_s3: 'zipzoong_s3'
};

export type ImageAccessType = (typeof ImageAccessType)[keyof typeof ImageAccessType]


export const OauthType: {
  kakao: 'kakao',
  naver: 'naver',
  apple: 'apple'
};

export type OauthType = (typeof OauthType)[keyof typeof OauthType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TermsModels
 * const termsModels = await prisma.termsModel.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TermsModels
   * const termsModels = await prisma.termsModel.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.termsModel`: Exposes CRUD operations for the **TermsModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermsModels
    * const termsModels = await prisma.termsModel.findMany()
    * ```
    */
  get termsModel(): Prisma.TermsModelDelegate<ExtArgs>;

  /**
   * `prisma.termsAgreementModel`: Exposes CRUD operations for the **TermsAgreementModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermsAgreementModels
    * const termsAgreementModels = await prisma.termsAgreementModel.findMany()
    * ```
    */
  get termsAgreementModel(): Prisma.TermsAgreementModelDelegate<ExtArgs>;

  /**
   * `prisma.userModel`: Exposes CRUD operations for the **UserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModels
    * const userModels = await prisma.userModel.findMany()
    * ```
    */
  get userModel(): Prisma.UserModelDelegate<ExtArgs>;

  /**
   * `prisma.clientModel`: Exposes CRUD operations for the **ClientModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientModels
    * const clientModels = await prisma.clientModel.findMany()
    * ```
    */
  get clientModel(): Prisma.ClientModelDelegate<ExtArgs>;

  /**
   * `prisma.bIZUserModel`: Exposes CRUD operations for the **BIZUserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BIZUserModels
    * const bIZUserModels = await prisma.bIZUserModel.findMany()
    * ```
    */
  get bIZUserModel(): Prisma.BIZUserModelDelegate<ExtArgs>;

  /**
   * `prisma.bIZCertificationImageModel`: Exposes CRUD operations for the **BIZCertificationImageModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BIZCertificationImageModels
    * const bIZCertificationImageModels = await prisma.bIZCertificationImageModel.findMany()
    * ```
    */
  get bIZCertificationImageModel(): Prisma.BIZCertificationImageModelDelegate<ExtArgs>;

  /**
   * `prisma.rEAgentModel`: Exposes CRUD operations for the **REAgentModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REAgentModels
    * const rEAgentModels = await prisma.rEAgentModel.findMany()
    * ```
    */
  get rEAgentModel(): Prisma.REAgentModelDelegate<ExtArgs>;

  /**
   * `prisma.rEExpertiseModel`: Exposes CRUD operations for the **REExpertiseModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REExpertiseModels
    * const rEExpertiseModels = await prisma.rEExpertiseModel.findMany()
    * ```
    */
  get rEExpertiseModel(): Prisma.REExpertiseModelDelegate<ExtArgs>;

  /**
   * `prisma.hSProviderModel`: Exposes CRUD operations for the **HSProviderModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSProviderModels
    * const hSProviderModels = await prisma.hSProviderModel.findMany()
    * ```
    */
  get hSProviderModel(): Prisma.HSProviderModelDelegate<ExtArgs>;

  /**
   * `prisma.hSSubExpertiseModel`: Exposes CRUD operations for the **HSSubExpertiseModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSSubExpertiseModels
    * const hSSubExpertiseModels = await prisma.hSSubExpertiseModel.findMany()
    * ```
    */
  get hSSubExpertiseModel(): Prisma.HSSubExpertiseModelDelegate<ExtArgs>;

  /**
   * `prisma.hSSuperExpertiseModel`: Exposes CRUD operations for the **HSSuperExpertiseModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSSuperExpertiseModels
    * const hSSuperExpertiseModels = await prisma.hSSuperExpertiseModel.findMany()
    * ```
    */
  get hSSuperExpertiseModel(): Prisma.HSSuperExpertiseModelDelegate<ExtArgs>;

  /**
   * `prisma.hSSubExpertiseRelationModel`: Exposes CRUD operations for the **HSSubExpertiseRelationModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSSubExpertiseRelationModels
    * const hSSubExpertiseRelationModels = await prisma.hSSubExpertiseRelationModel.findMany()
    * ```
    */
  get hSSubExpertiseRelationModel(): Prisma.HSSubExpertiseRelationModelDelegate<ExtArgs>;

  /**
   * `prisma.rEPortfolioModel`: Exposes CRUD operations for the **REPortfolioModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REPortfolioModels
    * const rEPortfolioModels = await prisma.rEPortfolioModel.findMany()
    * ```
    */
  get rEPortfolioModel(): Prisma.REPortfolioModelDelegate<ExtArgs>;

  /**
   * `prisma.hSPortfolioModel`: Exposes CRUD operations for the **HSPortfolioModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSPortfolioModels
    * const hSPortfolioModels = await prisma.hSPortfolioModel.findMany()
    * ```
    */
  get hSPortfolioModel(): Prisma.HSPortfolioModelDelegate<ExtArgs>;

  /**
   * `prisma.oauthAccountModel`: Exposes CRUD operations for the **OauthAccountModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OauthAccountModels
    * const oauthAccountModels = await prisma.oauthAccountModel.findMany()
    * ```
    */
  get oauthAccountModel(): Prisma.OauthAccountModelDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TermsModel: 'TermsModel',
    TermsAgreementModel: 'TermsAgreementModel',
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
    OauthAccountModel: 'OauthAccountModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    database?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'termsModel' | 'termsAgreementModel' | 'userModel' | 'clientModel' | 'bIZUserModel' | 'bIZCertificationImageModel' | 'rEAgentModel' | 'rEExpertiseModel' | 'hSProviderModel' | 'hSSubExpertiseModel' | 'hSSuperExpertiseModel' | 'hSSubExpertiseRelationModel' | 'rEPortfolioModel' | 'hSPortfolioModel' | 'oauthAccountModel'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      TermsModel: {
        payload: TermsModelPayload<ExtArgs>
        fields: Prisma.TermsModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermsModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermsModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload>
          }
          findFirst: {
            args: Prisma.TermsModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermsModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload>
          }
          findMany: {
            args: Prisma.TermsModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload>[]
          }
          create: {
            args: Prisma.TermsModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload>
          }
          createMany: {
            args: Prisma.TermsModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TermsModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload>
          }
          update: {
            args: Prisma.TermsModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload>
          }
          deleteMany: {
            args: Prisma.TermsModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TermsModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TermsModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsModelPayload>
          }
          aggregate: {
            args: Prisma.TermsModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTermsModel>
          }
          groupBy: {
            args: Prisma.TermsModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TermsModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermsModelCountArgs<ExtArgs>,
            result: $Utils.Optional<TermsModelCountAggregateOutputType> | number
          }
        }
      }
      TermsAgreementModel: {
        payload: TermsAgreementModelPayload<ExtArgs>
        fields: Prisma.TermsAgreementModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermsAgreementModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermsAgreementModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload>
          }
          findFirst: {
            args: Prisma.TermsAgreementModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermsAgreementModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload>
          }
          findMany: {
            args: Prisma.TermsAgreementModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload>[]
          }
          create: {
            args: Prisma.TermsAgreementModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload>
          }
          createMany: {
            args: Prisma.TermsAgreementModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TermsAgreementModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload>
          }
          update: {
            args: Prisma.TermsAgreementModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload>
          }
          deleteMany: {
            args: Prisma.TermsAgreementModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TermsAgreementModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TermsAgreementModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TermsAgreementModelPayload>
          }
          aggregate: {
            args: Prisma.TermsAgreementModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTermsAgreementModel>
          }
          groupBy: {
            args: Prisma.TermsAgreementModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TermsAgreementModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermsAgreementModelCountArgs<ExtArgs>,
            result: $Utils.Optional<TermsAgreementModelCountAggregateOutputType> | number
          }
        }
      }
      UserModel: {
        payload: UserModelPayload<ExtArgs>
        fields: Prisma.UserModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload>
          }
          findFirst: {
            args: Prisma.UserModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload>
          }
          findMany: {
            args: Prisma.UserModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload>[]
          }
          create: {
            args: Prisma.UserModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload>
          }
          createMany: {
            args: Prisma.UserModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload>
          }
          update: {
            args: Prisma.UserModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload>
          }
          deleteMany: {
            args: Prisma.UserModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserModelPayload>
          }
          aggregate: {
            args: Prisma.UserModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserModel>
          }
          groupBy: {
            args: Prisma.UserModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserModelCountArgs<ExtArgs>,
            result: $Utils.Optional<UserModelCountAggregateOutputType> | number
          }
        }
      }
      ClientModel: {
        payload: ClientModelPayload<ExtArgs>
        fields: Prisma.ClientModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload>
          }
          findFirst: {
            args: Prisma.ClientModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload>
          }
          findMany: {
            args: Prisma.ClientModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload>[]
          }
          create: {
            args: Prisma.ClientModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload>
          }
          createMany: {
            args: Prisma.ClientModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload>
          }
          update: {
            args: Prisma.ClientModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload>
          }
          deleteMany: {
            args: Prisma.ClientModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClientModelPayload>
          }
          aggregate: {
            args: Prisma.ClientModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientModel>
          }
          groupBy: {
            args: Prisma.ClientModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientModelCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientModelCountAggregateOutputType> | number
          }
        }
      }
      BIZUserModel: {
        payload: BIZUserModelPayload<ExtArgs>
        fields: Prisma.BIZUserModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BIZUserModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BIZUserModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload>
          }
          findFirst: {
            args: Prisma.BIZUserModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BIZUserModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload>
          }
          findMany: {
            args: Prisma.BIZUserModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload>[]
          }
          create: {
            args: Prisma.BIZUserModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload>
          }
          createMany: {
            args: Prisma.BIZUserModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BIZUserModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload>
          }
          update: {
            args: Prisma.BIZUserModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload>
          }
          deleteMany: {
            args: Prisma.BIZUserModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BIZUserModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BIZUserModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZUserModelPayload>
          }
          aggregate: {
            args: Prisma.BIZUserModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBIZUserModel>
          }
          groupBy: {
            args: Prisma.BIZUserModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BIZUserModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.BIZUserModelCountArgs<ExtArgs>,
            result: $Utils.Optional<BIZUserModelCountAggregateOutputType> | number
          }
        }
      }
      BIZCertificationImageModel: {
        payload: BIZCertificationImageModelPayload<ExtArgs>
        fields: Prisma.BIZCertificationImageModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BIZCertificationImageModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BIZCertificationImageModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload>
          }
          findFirst: {
            args: Prisma.BIZCertificationImageModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BIZCertificationImageModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload>
          }
          findMany: {
            args: Prisma.BIZCertificationImageModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload>[]
          }
          create: {
            args: Prisma.BIZCertificationImageModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload>
          }
          createMany: {
            args: Prisma.BIZCertificationImageModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BIZCertificationImageModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload>
          }
          update: {
            args: Prisma.BIZCertificationImageModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload>
          }
          deleteMany: {
            args: Prisma.BIZCertificationImageModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BIZCertificationImageModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BIZCertificationImageModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BIZCertificationImageModelPayload>
          }
          aggregate: {
            args: Prisma.BIZCertificationImageModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBIZCertificationImageModel>
          }
          groupBy: {
            args: Prisma.BIZCertificationImageModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BIZCertificationImageModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.BIZCertificationImageModelCountArgs<ExtArgs>,
            result: $Utils.Optional<BIZCertificationImageModelCountAggregateOutputType> | number
          }
        }
      }
      REAgentModel: {
        payload: REAgentModelPayload<ExtArgs>
        fields: Prisma.REAgentModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.REAgentModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.REAgentModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload>
          }
          findFirst: {
            args: Prisma.REAgentModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.REAgentModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload>
          }
          findMany: {
            args: Prisma.REAgentModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload>[]
          }
          create: {
            args: Prisma.REAgentModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload>
          }
          createMany: {
            args: Prisma.REAgentModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.REAgentModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload>
          }
          update: {
            args: Prisma.REAgentModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload>
          }
          deleteMany: {
            args: Prisma.REAgentModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.REAgentModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.REAgentModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REAgentModelPayload>
          }
          aggregate: {
            args: Prisma.REAgentModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateREAgentModel>
          }
          groupBy: {
            args: Prisma.REAgentModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<REAgentModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.REAgentModelCountArgs<ExtArgs>,
            result: $Utils.Optional<REAgentModelCountAggregateOutputType> | number
          }
        }
      }
      REExpertiseModel: {
        payload: REExpertiseModelPayload<ExtArgs>
        fields: Prisma.REExpertiseModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.REExpertiseModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.REExpertiseModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload>
          }
          findFirst: {
            args: Prisma.REExpertiseModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.REExpertiseModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload>
          }
          findMany: {
            args: Prisma.REExpertiseModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload>[]
          }
          create: {
            args: Prisma.REExpertiseModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload>
          }
          createMany: {
            args: Prisma.REExpertiseModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.REExpertiseModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload>
          }
          update: {
            args: Prisma.REExpertiseModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload>
          }
          deleteMany: {
            args: Prisma.REExpertiseModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.REExpertiseModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.REExpertiseModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REExpertiseModelPayload>
          }
          aggregate: {
            args: Prisma.REExpertiseModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateREExpertiseModel>
          }
          groupBy: {
            args: Prisma.REExpertiseModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<REExpertiseModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.REExpertiseModelCountArgs<ExtArgs>,
            result: $Utils.Optional<REExpertiseModelCountAggregateOutputType> | number
          }
        }
      }
      HSProviderModel: {
        payload: HSProviderModelPayload<ExtArgs>
        fields: Prisma.HSProviderModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HSProviderModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HSProviderModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload>
          }
          findFirst: {
            args: Prisma.HSProviderModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HSProviderModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload>
          }
          findMany: {
            args: Prisma.HSProviderModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload>[]
          }
          create: {
            args: Prisma.HSProviderModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload>
          }
          createMany: {
            args: Prisma.HSProviderModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HSProviderModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload>
          }
          update: {
            args: Prisma.HSProviderModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload>
          }
          deleteMany: {
            args: Prisma.HSProviderModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HSProviderModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HSProviderModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSProviderModelPayload>
          }
          aggregate: {
            args: Prisma.HSProviderModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHSProviderModel>
          }
          groupBy: {
            args: Prisma.HSProviderModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HSProviderModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HSProviderModelCountArgs<ExtArgs>,
            result: $Utils.Optional<HSProviderModelCountAggregateOutputType> | number
          }
        }
      }
      HSSubExpertiseModel: {
        payload: HSSubExpertiseModelPayload<ExtArgs>
        fields: Prisma.HSSubExpertiseModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HSSubExpertiseModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HSSubExpertiseModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload>
          }
          findFirst: {
            args: Prisma.HSSubExpertiseModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HSSubExpertiseModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload>
          }
          findMany: {
            args: Prisma.HSSubExpertiseModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload>[]
          }
          create: {
            args: Prisma.HSSubExpertiseModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload>
          }
          createMany: {
            args: Prisma.HSSubExpertiseModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HSSubExpertiseModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload>
          }
          update: {
            args: Prisma.HSSubExpertiseModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload>
          }
          deleteMany: {
            args: Prisma.HSSubExpertiseModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HSSubExpertiseModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HSSubExpertiseModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseModelPayload>
          }
          aggregate: {
            args: Prisma.HSSubExpertiseModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHSSubExpertiseModel>
          }
          groupBy: {
            args: Prisma.HSSubExpertiseModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HSSubExpertiseModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HSSubExpertiseModelCountArgs<ExtArgs>,
            result: $Utils.Optional<HSSubExpertiseModelCountAggregateOutputType> | number
          }
        }
      }
      HSSuperExpertiseModel: {
        payload: HSSuperExpertiseModelPayload<ExtArgs>
        fields: Prisma.HSSuperExpertiseModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HSSuperExpertiseModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HSSuperExpertiseModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload>
          }
          findFirst: {
            args: Prisma.HSSuperExpertiseModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HSSuperExpertiseModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload>
          }
          findMany: {
            args: Prisma.HSSuperExpertiseModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload>[]
          }
          create: {
            args: Prisma.HSSuperExpertiseModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload>
          }
          createMany: {
            args: Prisma.HSSuperExpertiseModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HSSuperExpertiseModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload>
          }
          update: {
            args: Prisma.HSSuperExpertiseModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload>
          }
          deleteMany: {
            args: Prisma.HSSuperExpertiseModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HSSuperExpertiseModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HSSuperExpertiseModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSuperExpertiseModelPayload>
          }
          aggregate: {
            args: Prisma.HSSuperExpertiseModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHSSuperExpertiseModel>
          }
          groupBy: {
            args: Prisma.HSSuperExpertiseModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HSSuperExpertiseModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HSSuperExpertiseModelCountArgs<ExtArgs>,
            result: $Utils.Optional<HSSuperExpertiseModelCountAggregateOutputType> | number
          }
        }
      }
      HSSubExpertiseRelationModel: {
        payload: HSSubExpertiseRelationModelPayload<ExtArgs>
        fields: Prisma.HSSubExpertiseRelationModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HSSubExpertiseRelationModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HSSubExpertiseRelationModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload>
          }
          findFirst: {
            args: Prisma.HSSubExpertiseRelationModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HSSubExpertiseRelationModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload>
          }
          findMany: {
            args: Prisma.HSSubExpertiseRelationModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload>[]
          }
          create: {
            args: Prisma.HSSubExpertiseRelationModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload>
          }
          createMany: {
            args: Prisma.HSSubExpertiseRelationModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HSSubExpertiseRelationModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload>
          }
          update: {
            args: Prisma.HSSubExpertiseRelationModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload>
          }
          deleteMany: {
            args: Prisma.HSSubExpertiseRelationModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HSSubExpertiseRelationModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HSSubExpertiseRelationModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSSubExpertiseRelationModelPayload>
          }
          aggregate: {
            args: Prisma.HSSubExpertiseRelationModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHSSubExpertiseRelationModel>
          }
          groupBy: {
            args: Prisma.HSSubExpertiseRelationModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HSSubExpertiseRelationModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HSSubExpertiseRelationModelCountArgs<ExtArgs>,
            result: $Utils.Optional<HSSubExpertiseRelationModelCountAggregateOutputType> | number
          }
        }
      }
      REPortfolioModel: {
        payload: REPortfolioModelPayload<ExtArgs>
        fields: Prisma.REPortfolioModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.REPortfolioModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.REPortfolioModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload>
          }
          findFirst: {
            args: Prisma.REPortfolioModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.REPortfolioModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload>
          }
          findMany: {
            args: Prisma.REPortfolioModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload>[]
          }
          create: {
            args: Prisma.REPortfolioModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload>
          }
          createMany: {
            args: Prisma.REPortfolioModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.REPortfolioModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload>
          }
          update: {
            args: Prisma.REPortfolioModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload>
          }
          deleteMany: {
            args: Prisma.REPortfolioModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.REPortfolioModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.REPortfolioModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<REPortfolioModelPayload>
          }
          aggregate: {
            args: Prisma.REPortfolioModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateREPortfolioModel>
          }
          groupBy: {
            args: Prisma.REPortfolioModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<REPortfolioModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.REPortfolioModelCountArgs<ExtArgs>,
            result: $Utils.Optional<REPortfolioModelCountAggregateOutputType> | number
          }
        }
      }
      HSPortfolioModel: {
        payload: HSPortfolioModelPayload<ExtArgs>
        fields: Prisma.HSPortfolioModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HSPortfolioModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HSPortfolioModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload>
          }
          findFirst: {
            args: Prisma.HSPortfolioModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HSPortfolioModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload>
          }
          findMany: {
            args: Prisma.HSPortfolioModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload>[]
          }
          create: {
            args: Prisma.HSPortfolioModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload>
          }
          createMany: {
            args: Prisma.HSPortfolioModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HSPortfolioModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload>
          }
          update: {
            args: Prisma.HSPortfolioModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload>
          }
          deleteMany: {
            args: Prisma.HSPortfolioModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HSPortfolioModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HSPortfolioModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HSPortfolioModelPayload>
          }
          aggregate: {
            args: Prisma.HSPortfolioModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHSPortfolioModel>
          }
          groupBy: {
            args: Prisma.HSPortfolioModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HSPortfolioModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HSPortfolioModelCountArgs<ExtArgs>,
            result: $Utils.Optional<HSPortfolioModelCountAggregateOutputType> | number
          }
        }
      }
      OauthAccountModel: {
        payload: OauthAccountModelPayload<ExtArgs>
        fields: Prisma.OauthAccountModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OauthAccountModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OauthAccountModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload>
          }
          findFirst: {
            args: Prisma.OauthAccountModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OauthAccountModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload>
          }
          findMany: {
            args: Prisma.OauthAccountModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload>[]
          }
          create: {
            args: Prisma.OauthAccountModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload>
          }
          createMany: {
            args: Prisma.OauthAccountModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OauthAccountModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload>
          }
          update: {
            args: Prisma.OauthAccountModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload>
          }
          deleteMany: {
            args: Prisma.OauthAccountModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OauthAccountModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OauthAccountModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OauthAccountModelPayload>
          }
          aggregate: {
            args: Prisma.OauthAccountModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOauthAccountModel>
          }
          groupBy: {
            args: Prisma.OauthAccountModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OauthAccountModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.OauthAccountModelCountArgs<ExtArgs>,
            result: $Utils.Optional<OauthAccountModelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TermsModelCountOutputType
   */


  export type TermsModelCountOutputType = {
    agreements: number
  }

  export type TermsModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    agreements?: boolean | TermsModelCountOutputTypeCountAgreementsArgs
  }

  // Custom InputTypes

  /**
   * TermsModelCountOutputType without action
   */
  export type TermsModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModelCountOutputType
     */
    select?: TermsModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TermsModelCountOutputType without action
   */
  export type TermsModelCountOutputTypeCountAgreementsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TermsAgreementModelWhereInput
  }



  /**
   * Count Type UserModelCountOutputType
   */


  export type UserModelCountOutputType = {
    terms_agreements: number
  }

  export type UserModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    terms_agreements?: boolean | UserModelCountOutputTypeCountTerms_agreementsArgs
  }

  // Custom InputTypes

  /**
   * UserModelCountOutputType without action
   */
  export type UserModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelCountOutputType
     */
    select?: UserModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserModelCountOutputType without action
   */
  export type UserModelCountOutputTypeCountTerms_agreementsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TermsAgreementModelWhereInput
  }



  /**
   * Count Type ClientModelCountOutputType
   */


  export type ClientModelCountOutputType = {
    oauth_accounts: number
  }

  export type ClientModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    oauth_accounts?: boolean | ClientModelCountOutputTypeCountOauth_accountsArgs
  }

  // Custom InputTypes

  /**
   * ClientModelCountOutputType without action
   */
  export type ClientModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModelCountOutputType
     */
    select?: ClientModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClientModelCountOutputType without action
   */
  export type ClientModelCountOutputTypeCountOauth_accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OauthAccountModelWhereInput
  }



  /**
   * Count Type BIZUserModelCountOutputType
   */


  export type BIZUserModelCountOutputType = {
    oauth_accounts: number
    biz_certification_images: number
  }

  export type BIZUserModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    oauth_accounts?: boolean | BIZUserModelCountOutputTypeCountOauth_accountsArgs
    biz_certification_images?: boolean | BIZUserModelCountOutputTypeCountBiz_certification_imagesArgs
  }

  // Custom InputTypes

  /**
   * BIZUserModelCountOutputType without action
   */
  export type BIZUserModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModelCountOutputType
     */
    select?: BIZUserModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BIZUserModelCountOutputType without action
   */
  export type BIZUserModelCountOutputTypeCountOauth_accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OauthAccountModelWhereInput
  }


  /**
   * BIZUserModelCountOutputType without action
   */
  export type BIZUserModelCountOutputTypeCountBiz_certification_imagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BIZCertificationImageModelWhereInput
  }



  /**
   * Count Type REAgentModelCountOutputType
   */


  export type REAgentModelCountOutputType = {
    portfolios: number
  }

  export type REAgentModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    portfolios?: boolean | REAgentModelCountOutputTypeCountPortfoliosArgs
  }

  // Custom InputTypes

  /**
   * REAgentModelCountOutputType without action
   */
  export type REAgentModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModelCountOutputType
     */
    select?: REAgentModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * REAgentModelCountOutputType without action
   */
  export type REAgentModelCountOutputTypeCountPortfoliosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: REPortfolioModelWhereInput
  }



  /**
   * Count Type REExpertiseModelCountOutputType
   */


  export type REExpertiseModelCountOutputType = {
    re_agents: number
  }

  export type REExpertiseModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    re_agents?: boolean | REExpertiseModelCountOutputTypeCountRe_agentsArgs
  }

  // Custom InputTypes

  /**
   * REExpertiseModelCountOutputType without action
   */
  export type REExpertiseModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModelCountOutputType
     */
    select?: REExpertiseModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * REExpertiseModelCountOutputType without action
   */
  export type REExpertiseModelCountOutputTypeCountRe_agentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: REAgentModelWhereInput
  }



  /**
   * Count Type HSProviderModelCountOutputType
   */


  export type HSProviderModelCountOutputType = {
    expertise_relation: number
    portfolios: number
  }

  export type HSProviderModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    expertise_relation?: boolean | HSProviderModelCountOutputTypeCountExpertise_relationArgs
    portfolios?: boolean | HSProviderModelCountOutputTypeCountPortfoliosArgs
  }

  // Custom InputTypes

  /**
   * HSProviderModelCountOutputType without action
   */
  export type HSProviderModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModelCountOutputType
     */
    select?: HSProviderModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HSProviderModelCountOutputType without action
   */
  export type HSProviderModelCountOutputTypeCountExpertise_relationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSSubExpertiseRelationModelWhereInput
  }


  /**
   * HSProviderModelCountOutputType without action
   */
  export type HSProviderModelCountOutputTypeCountPortfoliosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSPortfolioModelWhereInput
  }



  /**
   * Count Type HSSubExpertiseModelCountOutputType
   */


  export type HSSubExpertiseModelCountOutputType = {
    relations: number
  }

  export type HSSubExpertiseModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    relations?: boolean | HSSubExpertiseModelCountOutputTypeCountRelationsArgs
  }

  // Custom InputTypes

  /**
   * HSSubExpertiseModelCountOutputType without action
   */
  export type HSSubExpertiseModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModelCountOutputType
     */
    select?: HSSubExpertiseModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HSSubExpertiseModelCountOutputType without action
   */
  export type HSSubExpertiseModelCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSSubExpertiseRelationModelWhereInput
  }



  /**
   * Count Type HSSuperExpertiseModelCountOutputType
   */


  export type HSSuperExpertiseModelCountOutputType = {
    sub_expertises: number
  }

  export type HSSuperExpertiseModelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sub_expertises?: boolean | HSSuperExpertiseModelCountOutputTypeCountSub_expertisesArgs
  }

  // Custom InputTypes

  /**
   * HSSuperExpertiseModelCountOutputType without action
   */
  export type HSSuperExpertiseModelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModelCountOutputType
     */
    select?: HSSuperExpertiseModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HSSuperExpertiseModelCountOutputType without action
   */
  export type HSSuperExpertiseModelCountOutputTypeCountSub_expertisesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSSubExpertiseModelWhereInput
  }



  /**
   * Models
   */

  /**
   * Model TermsModel
   */


  export type AggregateTermsModel = {
    _count: TermsModelCountAggregateOutputType | null
    _min: TermsModelMinAggregateOutputType | null
    _max: TermsModelMaxAggregateOutputType | null
  }

  export type TermsModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    title: string | null
    version: string | null
    url: string | null
    is_required: boolean | null
    type: TermsType | null
  }

  export type TermsModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    title: string | null
    version: string | null
    url: string | null
    is_required: boolean | null
    type: TermsType | null
  }

  export type TermsModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    title: number
    version: number
    url: number
    is_required: number
    type: number
    _all: number
  }


  export type TermsModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    title?: true
    version?: true
    url?: true
    is_required?: true
    type?: true
  }

  export type TermsModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    title?: true
    version?: true
    url?: true
    is_required?: true
    type?: true
  }

  export type TermsModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    title?: true
    version?: true
    url?: true
    is_required?: true
    type?: true
    _all?: true
  }

  export type TermsModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsModel to aggregate.
     */
    where?: TermsModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsModels to fetch.
     */
    orderBy?: TermsModelOrderByWithRelationInput | TermsModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermsModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermsModels
    **/
    _count?: true | TermsModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsModelMaxAggregateInputType
  }

  export type GetTermsModelAggregateType<T extends TermsModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTermsModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermsModel[P]>
      : GetScalarType<T[P], AggregateTermsModel[P]>
  }




  export type TermsModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TermsModelWhereInput
    orderBy?: TermsModelOrderByWithAggregationInput | TermsModelOrderByWithAggregationInput[]
    by: TermsModelScalarFieldEnum[] | TermsModelScalarFieldEnum
    having?: TermsModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsModelCountAggregateInputType | true
    _min?: TermsModelMinAggregateInputType
    _max?: TermsModelMaxAggregateInputType
  }


  export type TermsModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    title: string
    version: string
    url: string
    is_required: boolean
    type: TermsType
    _count: TermsModelCountAggregateOutputType | null
    _min: TermsModelMinAggregateOutputType | null
    _max: TermsModelMaxAggregateOutputType | null
  }

  type GetTermsModelGroupByPayload<T extends TermsModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermsModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsModelGroupByOutputType[P]>
            : GetScalarType<T[P], TermsModelGroupByOutputType[P]>
        }
      >
    >


  export type TermsModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    title?: boolean
    version?: boolean
    url?: boolean
    is_required?: boolean
    type?: boolean
    agreements?: boolean | TermsModel$agreementsArgs<ExtArgs>
    _count?: boolean | TermsModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["termsModel"]>

  export type TermsModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    title?: boolean
    version?: boolean
    url?: boolean
    is_required?: boolean
    type?: boolean
  }

  export type TermsModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    agreements?: boolean | TermsModel$agreementsArgs<ExtArgs>
    _count?: boolean | TermsModelCountOutputTypeArgs<ExtArgs>
  }


  type TermsModelGetPayload<S extends boolean | null | undefined | TermsModelArgs> = $Types.GetResult<TermsModelPayload, S>

  type TermsModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TermsModelFindManyArgs, 'select' | 'include'> & {
      select?: TermsModelCountAggregateInputType | true
    }

  export interface TermsModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermsModel'], meta: { name: 'TermsModel' } }
    /**
     * Find zero or one TermsModel that matches the filter.
     * @param {TermsModelFindUniqueArgs} args - Arguments to find a TermsModel
     * @example
     * // Get one TermsModel
     * const termsModel = await prisma.termsModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TermsModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TermsModelFindUniqueArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TermsModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TermsModelFindUniqueOrThrowArgs} args - Arguments to find a TermsModel
     * @example
     * // Get one TermsModel
     * const termsModel = await prisma.termsModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TermsModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TermsModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsModelFindFirstArgs} args - Arguments to find a TermsModel
     * @example
     * // Get one TermsModel
     * const termsModel = await prisma.termsModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TermsModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsModelFindFirstArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TermsModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsModelFindFirstOrThrowArgs} args - Arguments to find a TermsModel
     * @example
     * // Get one TermsModel
     * const termsModel = await prisma.termsModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TermsModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TermsModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermsModels
     * const termsModels = await prisma.termsModel.findMany()
     * 
     * // Get first 10 TermsModels
     * const termsModels = await prisma.termsModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsModelWithIdOnly = await prisma.termsModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TermsModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TermsModel.
     * @param {TermsModelCreateArgs} args - Arguments to create a TermsModel.
     * @example
     * // Create one TermsModel
     * const TermsModel = await prisma.termsModel.create({
     *   data: {
     *     // ... data to create a TermsModel
     *   }
     * })
     * 
    **/
    create<T extends TermsModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TermsModelCreateArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TermsModels.
     *     @param {TermsModelCreateManyArgs} args - Arguments to create many TermsModels.
     *     @example
     *     // Create many TermsModels
     *     const termsModel = await prisma.termsModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TermsModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TermsModel.
     * @param {TermsModelDeleteArgs} args - Arguments to delete one TermsModel.
     * @example
     * // Delete one TermsModel
     * const TermsModel = await prisma.termsModel.delete({
     *   where: {
     *     // ... filter to delete one TermsModel
     *   }
     * })
     * 
    **/
    delete<T extends TermsModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TermsModelDeleteArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TermsModel.
     * @param {TermsModelUpdateArgs} args - Arguments to update one TermsModel.
     * @example
     * // Update one TermsModel
     * const termsModel = await prisma.termsModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TermsModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TermsModelUpdateArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TermsModels.
     * @param {TermsModelDeleteManyArgs} args - Arguments to filter TermsModels to delete.
     * @example
     * // Delete a few TermsModels
     * const { count } = await prisma.termsModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TermsModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermsModels
     * const termsModel = await prisma.termsModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TermsModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TermsModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TermsModel.
     * @param {TermsModelUpsertArgs} args - Arguments to update or create a TermsModel.
     * @example
     * // Update or create a TermsModel
     * const termsModel = await prisma.termsModel.upsert({
     *   create: {
     *     // ... data to create a TermsModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermsModel we want to update
     *   }
     * })
    **/
    upsert<T extends TermsModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TermsModelUpsertArgs<ExtArgs>>
    ): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TermsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsModelCountArgs} args - Arguments to filter TermsModels to count.
     * @example
     * // Count the number of TermsModels
     * const count = await prisma.termsModel.count({
     *   where: {
     *     // ... the filter for the TermsModels we want to count
     *   }
     * })
    **/
    count<T extends TermsModelCountArgs>(
      args?: Subset<T, TermsModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermsModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TermsModelAggregateArgs>(args: Subset<T, TermsModelAggregateArgs>): Prisma.PrismaPromise<GetTermsModelAggregateType<T>>

    /**
     * Group by TermsModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TermsModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermsModelGroupByArgs['orderBy'] }
        : { orderBy?: TermsModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TermsModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermsModel model
   */
  readonly fields: TermsModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermsModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TermsModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    agreements<T extends TermsModel$agreementsArgs<ExtArgs> = {}>(args?: Subset<T, TermsModel$agreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the TermsModel model
   */ 
  interface TermsModelFieldRefs {
    readonly id: FieldRef<"TermsModel", 'String'>
    readonly created_at: FieldRef<"TermsModel", 'DateTime'>
    readonly updated_at: FieldRef<"TermsModel", 'DateTime'>
    readonly is_deleted: FieldRef<"TermsModel", 'Boolean'>
    readonly deleted_at: FieldRef<"TermsModel", 'DateTime'>
    readonly title: FieldRef<"TermsModel", 'String'>
    readonly version: FieldRef<"TermsModel", 'String'>
    readonly url: FieldRef<"TermsModel", 'String'>
    readonly is_required: FieldRef<"TermsModel", 'Boolean'>
    readonly type: FieldRef<"TermsModel", 'TermsType'>
  }
    

  // Custom InputTypes

  /**
   * TermsModel findUnique
   */
  export type TermsModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsModel to fetch.
     */
    where: TermsModelWhereUniqueInput
  }


  /**
   * TermsModel findUniqueOrThrow
   */
  export type TermsModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsModel to fetch.
     */
    where: TermsModelWhereUniqueInput
  }


  /**
   * TermsModel findFirst
   */
  export type TermsModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsModel to fetch.
     */
    where?: TermsModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsModels to fetch.
     */
    orderBy?: TermsModelOrderByWithRelationInput | TermsModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsModels.
     */
    cursor?: TermsModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsModels.
     */
    distinct?: TermsModelScalarFieldEnum | TermsModelScalarFieldEnum[]
  }


  /**
   * TermsModel findFirstOrThrow
   */
  export type TermsModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsModel to fetch.
     */
    where?: TermsModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsModels to fetch.
     */
    orderBy?: TermsModelOrderByWithRelationInput | TermsModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsModels.
     */
    cursor?: TermsModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsModels.
     */
    distinct?: TermsModelScalarFieldEnum | TermsModelScalarFieldEnum[]
  }


  /**
   * TermsModel findMany
   */
  export type TermsModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsModels to fetch.
     */
    where?: TermsModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsModels to fetch.
     */
    orderBy?: TermsModelOrderByWithRelationInput | TermsModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermsModels.
     */
    cursor?: TermsModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsModels.
     */
    skip?: number
    distinct?: TermsModelScalarFieldEnum | TermsModelScalarFieldEnum[]
  }


  /**
   * TermsModel create
   */
  export type TermsModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * The data needed to create a TermsModel.
     */
    data: XOR<TermsModelCreateInput, TermsModelUncheckedCreateInput>
  }


  /**
   * TermsModel createMany
   */
  export type TermsModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermsModels.
     */
    data: TermsModelCreateManyInput | TermsModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TermsModel update
   */
  export type TermsModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * The data needed to update a TermsModel.
     */
    data: XOR<TermsModelUpdateInput, TermsModelUncheckedUpdateInput>
    /**
     * Choose, which TermsModel to update.
     */
    where: TermsModelWhereUniqueInput
  }


  /**
   * TermsModel updateMany
   */
  export type TermsModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermsModels.
     */
    data: XOR<TermsModelUpdateManyMutationInput, TermsModelUncheckedUpdateManyInput>
    /**
     * Filter which TermsModels to update
     */
    where?: TermsModelWhereInput
  }


  /**
   * TermsModel upsert
   */
  export type TermsModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * The filter to search for the TermsModel to update in case it exists.
     */
    where: TermsModelWhereUniqueInput
    /**
     * In case the TermsModel found by the `where` argument doesn't exist, create a new TermsModel with this data.
     */
    create: XOR<TermsModelCreateInput, TermsModelUncheckedCreateInput>
    /**
     * In case the TermsModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermsModelUpdateInput, TermsModelUncheckedUpdateInput>
  }


  /**
   * TermsModel delete
   */
  export type TermsModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
    /**
     * Filter which TermsModel to delete.
     */
    where: TermsModelWhereUniqueInput
  }


  /**
   * TermsModel deleteMany
   */
  export type TermsModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsModels to delete
     */
    where?: TermsModelWhereInput
  }


  /**
   * TermsModel.agreements
   */
  export type TermsModel$agreementsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    where?: TermsAgreementModelWhereInput
    orderBy?: TermsAgreementModelOrderByWithRelationInput | TermsAgreementModelOrderByWithRelationInput[]
    cursor?: TermsAgreementModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermsAgreementModelScalarFieldEnum | TermsAgreementModelScalarFieldEnum[]
  }


  /**
   * TermsModel without action
   */
  export type TermsModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsModel
     */
    select?: TermsModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsModelInclude<ExtArgs> | null
  }



  /**
   * Model TermsAgreementModel
   */


  export type AggregateTermsAgreementModel = {
    _count: TermsAgreementModelCountAggregateOutputType | null
    _min: TermsAgreementModelMinAggregateOutputType | null
    _max: TermsAgreementModelMaxAggregateOutputType | null
  }

  export type TermsAgreementModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    terms_id: string | null
    user_id: string | null
  }

  export type TermsAgreementModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    terms_id: string | null
    user_id: string | null
  }

  export type TermsAgreementModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    terms_id: number
    user_id: number
    _all: number
  }


  export type TermsAgreementModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    terms_id?: true
    user_id?: true
  }

  export type TermsAgreementModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    terms_id?: true
    user_id?: true
  }

  export type TermsAgreementModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    terms_id?: true
    user_id?: true
    _all?: true
  }

  export type TermsAgreementModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsAgreementModel to aggregate.
     */
    where?: TermsAgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsAgreementModels to fetch.
     */
    orderBy?: TermsAgreementModelOrderByWithRelationInput | TermsAgreementModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermsAgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsAgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsAgreementModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermsAgreementModels
    **/
    _count?: true | TermsAgreementModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsAgreementModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsAgreementModelMaxAggregateInputType
  }

  export type GetTermsAgreementModelAggregateType<T extends TermsAgreementModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTermsAgreementModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermsAgreementModel[P]>
      : GetScalarType<T[P], AggregateTermsAgreementModel[P]>
  }




  export type TermsAgreementModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TermsAgreementModelWhereInput
    orderBy?: TermsAgreementModelOrderByWithAggregationInput | TermsAgreementModelOrderByWithAggregationInput[]
    by: TermsAgreementModelScalarFieldEnum[] | TermsAgreementModelScalarFieldEnum
    having?: TermsAgreementModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsAgreementModelCountAggregateInputType | true
    _min?: TermsAgreementModelMinAggregateInputType
    _max?: TermsAgreementModelMaxAggregateInputType
  }


  export type TermsAgreementModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    terms_id: string
    user_id: string
    _count: TermsAgreementModelCountAggregateOutputType | null
    _min: TermsAgreementModelMinAggregateOutputType | null
    _max: TermsAgreementModelMaxAggregateOutputType | null
  }

  type GetTermsAgreementModelGroupByPayload<T extends TermsAgreementModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermsAgreementModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsAgreementModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsAgreementModelGroupByOutputType[P]>
            : GetScalarType<T[P], TermsAgreementModelGroupByOutputType[P]>
        }
      >
    >


  export type TermsAgreementModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    terms_id?: boolean
    user_id?: boolean
    terms?: boolean | TermsModelArgs<ExtArgs>
    user?: boolean | UserModelArgs<ExtArgs>
  }, ExtArgs["result"]["termsAgreementModel"]>

  export type TermsAgreementModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    terms_id?: boolean
    user_id?: boolean
  }

  export type TermsAgreementModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    terms?: boolean | TermsModelArgs<ExtArgs>
    user?: boolean | UserModelArgs<ExtArgs>
  }


  type TermsAgreementModelGetPayload<S extends boolean | null | undefined | TermsAgreementModelArgs> = $Types.GetResult<TermsAgreementModelPayload, S>

  type TermsAgreementModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TermsAgreementModelFindManyArgs, 'select' | 'include'> & {
      select?: TermsAgreementModelCountAggregateInputType | true
    }

  export interface TermsAgreementModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermsAgreementModel'], meta: { name: 'TermsAgreementModel' } }
    /**
     * Find zero or one TermsAgreementModel that matches the filter.
     * @param {TermsAgreementModelFindUniqueArgs} args - Arguments to find a TermsAgreementModel
     * @example
     * // Get one TermsAgreementModel
     * const termsAgreementModel = await prisma.termsAgreementModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TermsAgreementModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TermsAgreementModelFindUniqueArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TermsAgreementModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TermsAgreementModelFindUniqueOrThrowArgs} args - Arguments to find a TermsAgreementModel
     * @example
     * // Get one TermsAgreementModel
     * const termsAgreementModel = await prisma.termsAgreementModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TermsAgreementModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsAgreementModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TermsAgreementModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAgreementModelFindFirstArgs} args - Arguments to find a TermsAgreementModel
     * @example
     * // Get one TermsAgreementModel
     * const termsAgreementModel = await prisma.termsAgreementModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TermsAgreementModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsAgreementModelFindFirstArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TermsAgreementModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAgreementModelFindFirstOrThrowArgs} args - Arguments to find a TermsAgreementModel
     * @example
     * // Get one TermsAgreementModel
     * const termsAgreementModel = await prisma.termsAgreementModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TermsAgreementModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsAgreementModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TermsAgreementModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAgreementModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermsAgreementModels
     * const termsAgreementModels = await prisma.termsAgreementModel.findMany()
     * 
     * // Get first 10 TermsAgreementModels
     * const termsAgreementModels = await prisma.termsAgreementModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsAgreementModelWithIdOnly = await prisma.termsAgreementModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TermsAgreementModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsAgreementModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TermsAgreementModel.
     * @param {TermsAgreementModelCreateArgs} args - Arguments to create a TermsAgreementModel.
     * @example
     * // Create one TermsAgreementModel
     * const TermsAgreementModel = await prisma.termsAgreementModel.create({
     *   data: {
     *     // ... data to create a TermsAgreementModel
     *   }
     * })
     * 
    **/
    create<T extends TermsAgreementModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TermsAgreementModelCreateArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TermsAgreementModels.
     *     @param {TermsAgreementModelCreateManyArgs} args - Arguments to create many TermsAgreementModels.
     *     @example
     *     // Create many TermsAgreementModels
     *     const termsAgreementModel = await prisma.termsAgreementModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TermsAgreementModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsAgreementModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TermsAgreementModel.
     * @param {TermsAgreementModelDeleteArgs} args - Arguments to delete one TermsAgreementModel.
     * @example
     * // Delete one TermsAgreementModel
     * const TermsAgreementModel = await prisma.termsAgreementModel.delete({
     *   where: {
     *     // ... filter to delete one TermsAgreementModel
     *   }
     * })
     * 
    **/
    delete<T extends TermsAgreementModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TermsAgreementModelDeleteArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TermsAgreementModel.
     * @param {TermsAgreementModelUpdateArgs} args - Arguments to update one TermsAgreementModel.
     * @example
     * // Update one TermsAgreementModel
     * const termsAgreementModel = await prisma.termsAgreementModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TermsAgreementModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TermsAgreementModelUpdateArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TermsAgreementModels.
     * @param {TermsAgreementModelDeleteManyArgs} args - Arguments to filter TermsAgreementModels to delete.
     * @example
     * // Delete a few TermsAgreementModels
     * const { count } = await prisma.termsAgreementModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TermsAgreementModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TermsAgreementModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsAgreementModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAgreementModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermsAgreementModels
     * const termsAgreementModel = await prisma.termsAgreementModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TermsAgreementModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TermsAgreementModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TermsAgreementModel.
     * @param {TermsAgreementModelUpsertArgs} args - Arguments to update or create a TermsAgreementModel.
     * @example
     * // Update or create a TermsAgreementModel
     * const termsAgreementModel = await prisma.termsAgreementModel.upsert({
     *   create: {
     *     // ... data to create a TermsAgreementModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermsAgreementModel we want to update
     *   }
     * })
    **/
    upsert<T extends TermsAgreementModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TermsAgreementModelUpsertArgs<ExtArgs>>
    ): Prisma__TermsAgreementModelClient<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TermsAgreementModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAgreementModelCountArgs} args - Arguments to filter TermsAgreementModels to count.
     * @example
     * // Count the number of TermsAgreementModels
     * const count = await prisma.termsAgreementModel.count({
     *   where: {
     *     // ... the filter for the TermsAgreementModels we want to count
     *   }
     * })
    **/
    count<T extends TermsAgreementModelCountArgs>(
      args?: Subset<T, TermsAgreementModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsAgreementModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermsAgreementModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAgreementModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TermsAgreementModelAggregateArgs>(args: Subset<T, TermsAgreementModelAggregateArgs>): Prisma.PrismaPromise<GetTermsAgreementModelAggregateType<T>>

    /**
     * Group by TermsAgreementModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsAgreementModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TermsAgreementModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermsAgreementModelGroupByArgs['orderBy'] }
        : { orderBy?: TermsAgreementModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TermsAgreementModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsAgreementModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermsAgreementModel model
   */
  readonly fields: TermsAgreementModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermsAgreementModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TermsAgreementModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    terms<T extends TermsModelArgs<ExtArgs> = {}>(args?: Subset<T, TermsModelArgs<ExtArgs>>): Prisma__TermsModelClient<$Types.GetResult<TermsModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    user<T extends UserModelArgs<ExtArgs> = {}>(args?: Subset<T, UserModelArgs<ExtArgs>>): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the TermsAgreementModel model
   */ 
  interface TermsAgreementModelFieldRefs {
    readonly id: FieldRef<"TermsAgreementModel", 'String'>
    readonly created_at: FieldRef<"TermsAgreementModel", 'DateTime'>
    readonly updated_at: FieldRef<"TermsAgreementModel", 'DateTime'>
    readonly is_deleted: FieldRef<"TermsAgreementModel", 'Boolean'>
    readonly deleted_at: FieldRef<"TermsAgreementModel", 'DateTime'>
    readonly terms_id: FieldRef<"TermsAgreementModel", 'String'>
    readonly user_id: FieldRef<"TermsAgreementModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TermsAgreementModel findUnique
   */
  export type TermsAgreementModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsAgreementModel to fetch.
     */
    where: TermsAgreementModelWhereUniqueInput
  }


  /**
   * TermsAgreementModel findUniqueOrThrow
   */
  export type TermsAgreementModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsAgreementModel to fetch.
     */
    where: TermsAgreementModelWhereUniqueInput
  }


  /**
   * TermsAgreementModel findFirst
   */
  export type TermsAgreementModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsAgreementModel to fetch.
     */
    where?: TermsAgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsAgreementModels to fetch.
     */
    orderBy?: TermsAgreementModelOrderByWithRelationInput | TermsAgreementModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsAgreementModels.
     */
    cursor?: TermsAgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsAgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsAgreementModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsAgreementModels.
     */
    distinct?: TermsAgreementModelScalarFieldEnum | TermsAgreementModelScalarFieldEnum[]
  }


  /**
   * TermsAgreementModel findFirstOrThrow
   */
  export type TermsAgreementModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsAgreementModel to fetch.
     */
    where?: TermsAgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsAgreementModels to fetch.
     */
    orderBy?: TermsAgreementModelOrderByWithRelationInput | TermsAgreementModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsAgreementModels.
     */
    cursor?: TermsAgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsAgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsAgreementModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsAgreementModels.
     */
    distinct?: TermsAgreementModelScalarFieldEnum | TermsAgreementModelScalarFieldEnum[]
  }


  /**
   * TermsAgreementModel findMany
   */
  export type TermsAgreementModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * Filter, which TermsAgreementModels to fetch.
     */
    where?: TermsAgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsAgreementModels to fetch.
     */
    orderBy?: TermsAgreementModelOrderByWithRelationInput | TermsAgreementModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermsAgreementModels.
     */
    cursor?: TermsAgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsAgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsAgreementModels.
     */
    skip?: number
    distinct?: TermsAgreementModelScalarFieldEnum | TermsAgreementModelScalarFieldEnum[]
  }


  /**
   * TermsAgreementModel create
   */
  export type TermsAgreementModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * The data needed to create a TermsAgreementModel.
     */
    data: XOR<TermsAgreementModelCreateInput, TermsAgreementModelUncheckedCreateInput>
  }


  /**
   * TermsAgreementModel createMany
   */
  export type TermsAgreementModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermsAgreementModels.
     */
    data: TermsAgreementModelCreateManyInput | TermsAgreementModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TermsAgreementModel update
   */
  export type TermsAgreementModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * The data needed to update a TermsAgreementModel.
     */
    data: XOR<TermsAgreementModelUpdateInput, TermsAgreementModelUncheckedUpdateInput>
    /**
     * Choose, which TermsAgreementModel to update.
     */
    where: TermsAgreementModelWhereUniqueInput
  }


  /**
   * TermsAgreementModel updateMany
   */
  export type TermsAgreementModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermsAgreementModels.
     */
    data: XOR<TermsAgreementModelUpdateManyMutationInput, TermsAgreementModelUncheckedUpdateManyInput>
    /**
     * Filter which TermsAgreementModels to update
     */
    where?: TermsAgreementModelWhereInput
  }


  /**
   * TermsAgreementModel upsert
   */
  export type TermsAgreementModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * The filter to search for the TermsAgreementModel to update in case it exists.
     */
    where: TermsAgreementModelWhereUniqueInput
    /**
     * In case the TermsAgreementModel found by the `where` argument doesn't exist, create a new TermsAgreementModel with this data.
     */
    create: XOR<TermsAgreementModelCreateInput, TermsAgreementModelUncheckedCreateInput>
    /**
     * In case the TermsAgreementModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermsAgreementModelUpdateInput, TermsAgreementModelUncheckedUpdateInput>
  }


  /**
   * TermsAgreementModel delete
   */
  export type TermsAgreementModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    /**
     * Filter which TermsAgreementModel to delete.
     */
    where: TermsAgreementModelWhereUniqueInput
  }


  /**
   * TermsAgreementModel deleteMany
   */
  export type TermsAgreementModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsAgreementModels to delete
     */
    where?: TermsAgreementModelWhereInput
  }


  /**
   * TermsAgreementModel without action
   */
  export type TermsAgreementModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
  }



  /**
   * Model UserModel
   */


  export type AggregateUserModel = {
    _count: UserModelCountAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  export type UserModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    email: string | null
  }

  export type UserModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    email: string | null
  }

  export type UserModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    email: number
    _all: number
  }


  export type UserModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    email?: true
  }

  export type UserModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    email?: true
  }

  export type UserModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModel to aggregate.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModels
    **/
    _count?: true | UserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModelMaxAggregateInputType
  }

  export type GetUserModelAggregateType<T extends UserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModel[P]>
      : GetScalarType<T[P], AggregateUserModel[P]>
  }




  export type UserModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserModelWhereInput
    orderBy?: UserModelOrderByWithAggregationInput | UserModelOrderByWithAggregationInput[]
    by: UserModelScalarFieldEnum[] | UserModelScalarFieldEnum
    having?: UserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModelCountAggregateInputType | true
    _min?: UserModelMinAggregateInputType
    _max?: UserModelMaxAggregateInputType
  }


  export type UserModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    email: string | null
    _count: UserModelCountAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  type GetUserModelGroupByPayload<T extends UserModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModelGroupByOutputType[P]>
            : GetScalarType<T[P], UserModelGroupByOutputType[P]>
        }
      >
    >


  export type UserModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    email?: boolean
    client?: boolean | UserModel$clientArgs<ExtArgs>
    biz_user?: boolean | UserModel$biz_userArgs<ExtArgs>
    terms_agreements?: boolean | UserModel$terms_agreementsArgs<ExtArgs>
    _count?: boolean | UserModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["userModel"]>

  export type UserModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    client?: boolean | UserModel$clientArgs<ExtArgs>
    biz_user?: boolean | UserModel$biz_userArgs<ExtArgs>
    terms_agreements?: boolean | UserModel$terms_agreementsArgs<ExtArgs>
    _count?: boolean | UserModelCountOutputTypeArgs<ExtArgs>
  }


  type UserModelGetPayload<S extends boolean | null | undefined | UserModelArgs> = $Types.GetResult<UserModelPayload, S>

  type UserModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserModelFindManyArgs, 'select' | 'include'> & {
      select?: UserModelCountAggregateInputType | true
    }

  export interface UserModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModel'], meta: { name: 'UserModel' } }
    /**
     * Find zero or one UserModel that matches the filter.
     * @param {UserModelFindUniqueArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserModelFindUniqueArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserModelFindUniqueOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserModelFindFirstArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModels
     * const userModels = await prisma.userModel.findMany()
     * 
     * // Get first 10 UserModels
     * const userModels = await prisma.userModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModelWithIdOnly = await prisma.userModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserModel.
     * @param {UserModelCreateArgs} args - Arguments to create a UserModel.
     * @example
     * // Create one UserModel
     * const UserModel = await prisma.userModel.create({
     *   data: {
     *     // ... data to create a UserModel
     *   }
     * })
     * 
    **/
    create<T extends UserModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserModelCreateArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserModels.
     *     @param {UserModelCreateManyArgs} args - Arguments to create many UserModels.
     *     @example
     *     // Create many UserModels
     *     const userModel = await prisma.userModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserModel.
     * @param {UserModelDeleteArgs} args - Arguments to delete one UserModel.
     * @example
     * // Delete one UserModel
     * const UserModel = await prisma.userModel.delete({
     *   where: {
     *     // ... filter to delete one UserModel
     *   }
     * })
     * 
    **/
    delete<T extends UserModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserModelDeleteArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserModel.
     * @param {UserModelUpdateArgs} args - Arguments to update one UserModel.
     * @example
     * // Update one UserModel
     * const userModel = await prisma.userModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserModelUpdateArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserModels.
     * @param {UserModelDeleteManyArgs} args - Arguments to filter UserModels to delete.
     * @example
     * // Delete a few UserModels
     * const { count } = await prisma.userModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModels
     * const userModel = await prisma.userModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserModel.
     * @param {UserModelUpsertArgs} args - Arguments to update or create a UserModel.
     * @example
     * // Update or create a UserModel
     * const userModel = await prisma.userModel.upsert({
     *   create: {
     *     // ... data to create a UserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModel we want to update
     *   }
     * })
    **/
    upsert<T extends UserModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserModelUpsertArgs<ExtArgs>>
    ): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelCountArgs} args - Arguments to filter UserModels to count.
     * @example
     * // Count the number of UserModels
     * const count = await prisma.userModel.count({
     *   where: {
     *     // ... the filter for the UserModels we want to count
     *   }
     * })
    **/
    count<T extends UserModelCountArgs>(
      args?: Subset<T, UserModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserModelAggregateArgs>(args: Subset<T, UserModelAggregateArgs>): Prisma.PrismaPromise<GetUserModelAggregateType<T>>

    /**
     * Group by UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModelGroupByArgs['orderBy'] }
        : { orderBy?: UserModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModel model
   */
  readonly fields: UserModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    client<T extends UserModel$clientArgs<ExtArgs> = {}>(args?: Subset<T, UserModel$clientArgs<ExtArgs>>): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    biz_user<T extends UserModel$biz_userArgs<ExtArgs> = {}>(args?: Subset<T, UserModel$biz_userArgs<ExtArgs>>): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    terms_agreements<T extends UserModel$terms_agreementsArgs<ExtArgs> = {}>(args?: Subset<T, UserModel$terms_agreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TermsAgreementModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the UserModel model
   */ 
  interface UserModelFieldRefs {
    readonly id: FieldRef<"UserModel", 'String'>
    readonly created_at: FieldRef<"UserModel", 'DateTime'>
    readonly updated_at: FieldRef<"UserModel", 'DateTime'>
    readonly is_deleted: FieldRef<"UserModel", 'Boolean'>
    readonly deleted_at: FieldRef<"UserModel", 'DateTime'>
    readonly name: FieldRef<"UserModel", 'String'>
    readonly email: FieldRef<"UserModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserModel findUnique
   */
  export type UserModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel findUniqueOrThrow
   */
  export type UserModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel findFirst
   */
  export type UserModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     */
    distinct?: UserModelScalarFieldEnum | UserModelScalarFieldEnum[]
  }


  /**
   * UserModel findFirstOrThrow
   */
  export type UserModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     */
    distinct?: UserModelScalarFieldEnum | UserModelScalarFieldEnum[]
  }


  /**
   * UserModel findMany
   */
  export type UserModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModels to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    distinct?: UserModelScalarFieldEnum | UserModelScalarFieldEnum[]
  }


  /**
   * UserModel create
   */
  export type UserModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModel.
     */
    data: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
  }


  /**
   * UserModel createMany
   */
  export type UserModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModels.
     */
    data: UserModelCreateManyInput | UserModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserModel update
   */
  export type UserModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModel.
     */
    data: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
    /**
     * Choose, which UserModel to update.
     */
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel updateMany
   */
  export type UserModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModels.
     */
    data: XOR<UserModelUpdateManyMutationInput, UserModelUncheckedUpdateManyInput>
    /**
     * Filter which UserModels to update
     */
    where?: UserModelWhereInput
  }


  /**
   * UserModel upsert
   */
  export type UserModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModel to update in case it exists.
     */
    where: UserModelWhereUniqueInput
    /**
     * In case the UserModel found by the `where` argument doesn't exist, create a new UserModel with this data.
     */
    create: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
    /**
     * In case the UserModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
  }


  /**
   * UserModel delete
   */
  export type UserModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter which UserModel to delete.
     */
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel deleteMany
   */
  export type UserModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModels to delete
     */
    where?: UserModelWhereInput
  }


  /**
   * UserModel.client
   */
  export type UserModel$clientArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    where?: ClientModelWhereInput
  }


  /**
   * UserModel.biz_user
   */
  export type UserModel$biz_userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    where?: BIZUserModelWhereInput
  }


  /**
   * UserModel.terms_agreements
   */
  export type UserModel$terms_agreementsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsAgreementModel
     */
    select?: TermsAgreementModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsAgreementModelInclude<ExtArgs> | null
    where?: TermsAgreementModelWhereInput
    orderBy?: TermsAgreementModelOrderByWithRelationInput | TermsAgreementModelOrderByWithRelationInput[]
    cursor?: TermsAgreementModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermsAgreementModelScalarFieldEnum | TermsAgreementModelScalarFieldEnum[]
  }


  /**
   * UserModel without action
   */
  export type UserModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude<ExtArgs> | null
  }



  /**
   * Model ClientModel
   */


  export type AggregateClientModel = {
    _count: ClientModelCountAggregateOutputType | null
    _min: ClientModelMinAggregateOutputType | null
    _max: ClientModelMaxAggregateOutputType | null
  }

  export type ClientModelMinAggregateOutputType = {
    id: string | null
    birth: Date | null
    gender: GenderType | null
    phone: string | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
    profile_image_url: string | null
  }

  export type ClientModelMaxAggregateOutputType = {
    id: string | null
    birth: Date | null
    gender: GenderType | null
    phone: string | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
    profile_image_url: string | null
  }

  export type ClientModelCountAggregateOutputType = {
    id: number
    birth: number
    gender: number
    phone: number
    address_zone_code: number
    address_road: number
    address_detail: number
    address_extra: number
    profile_image_url: number
    _all: number
  }


  export type ClientModelMinAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
    phone?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
    profile_image_url?: true
  }

  export type ClientModelMaxAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
    phone?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
    profile_image_url?: true
  }

  export type ClientModelCountAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
    phone?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
    profile_image_url?: true
    _all?: true
  }

  export type ClientModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientModel to aggregate.
     */
    where?: ClientModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientModels to fetch.
     */
    orderBy?: ClientModelOrderByWithRelationInput | ClientModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientModels
    **/
    _count?: true | ClientModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientModelMaxAggregateInputType
  }

  export type GetClientModelAggregateType<T extends ClientModelAggregateArgs> = {
        [P in keyof T & keyof AggregateClientModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientModel[P]>
      : GetScalarType<T[P], AggregateClientModel[P]>
  }




  export type ClientModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClientModelWhereInput
    orderBy?: ClientModelOrderByWithAggregationInput | ClientModelOrderByWithAggregationInput[]
    by: ClientModelScalarFieldEnum[] | ClientModelScalarFieldEnum
    having?: ClientModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientModelCountAggregateInputType | true
    _min?: ClientModelMinAggregateInputType
    _max?: ClientModelMaxAggregateInputType
  }


  export type ClientModelGroupByOutputType = {
    id: string
    birth: Date | null
    gender: GenderType | null
    phone: string | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
    profile_image_url: string | null
    _count: ClientModelCountAggregateOutputType | null
    _min: ClientModelMinAggregateOutputType | null
    _max: ClientModelMaxAggregateOutputType | null
  }

  type GetClientModelGroupByPayload<T extends ClientModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientModelGroupByOutputType[P]>
            : GetScalarType<T[P], ClientModelGroupByOutputType[P]>
        }
      >
    >


  export type ClientModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birth?: boolean
    gender?: boolean
    phone?: boolean
    address_zone_code?: boolean
    address_road?: boolean
    address_detail?: boolean
    address_extra?: boolean
    profile_image_url?: boolean
    base?: boolean | UserModelArgs<ExtArgs>
    oauth_accounts?: boolean | ClientModel$oauth_accountsArgs<ExtArgs>
    _count?: boolean | ClientModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["clientModel"]>

  export type ClientModelSelectScalar = {
    id?: boolean
    birth?: boolean
    gender?: boolean
    phone?: boolean
    address_zone_code?: boolean
    address_road?: boolean
    address_detail?: boolean
    address_extra?: boolean
    profile_image_url?: boolean
  }

  export type ClientModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    base?: boolean | UserModelArgs<ExtArgs>
    oauth_accounts?: boolean | ClientModel$oauth_accountsArgs<ExtArgs>
    _count?: boolean | ClientModelCountOutputTypeArgs<ExtArgs>
  }


  type ClientModelGetPayload<S extends boolean | null | undefined | ClientModelArgs> = $Types.GetResult<ClientModelPayload, S>

  type ClientModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClientModelFindManyArgs, 'select' | 'include'> & {
      select?: ClientModelCountAggregateInputType | true
    }

  export interface ClientModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientModel'], meta: { name: 'ClientModel' } }
    /**
     * Find zero or one ClientModel that matches the filter.
     * @param {ClientModelFindUniqueArgs} args - Arguments to find a ClientModel
     * @example
     * // Get one ClientModel
     * const clientModel = await prisma.clientModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientModelFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ClientModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientModelFindUniqueOrThrowArgs} args - Arguments to find a ClientModel
     * @example
     * // Get one ClientModel
     * const clientModel = await prisma.clientModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ClientModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientModelFindFirstArgs} args - Arguments to find a ClientModel
     * @example
     * // Get one ClientModel
     * const clientModel = await prisma.clientModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientModelFindFirstArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ClientModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientModelFindFirstOrThrowArgs} args - Arguments to find a ClientModel
     * @example
     * // Get one ClientModel
     * const clientModel = await prisma.clientModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ClientModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientModels
     * const clientModels = await prisma.clientModel.findMany()
     * 
     * // Get first 10 ClientModels
     * const clientModels = await prisma.clientModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientModelWithIdOnly = await prisma.clientModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ClientModel.
     * @param {ClientModelCreateArgs} args - Arguments to create a ClientModel.
     * @example
     * // Create one ClientModel
     * const ClientModel = await prisma.clientModel.create({
     *   data: {
     *     // ... data to create a ClientModel
     *   }
     * })
     * 
    **/
    create<T extends ClientModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientModelCreateArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ClientModels.
     *     @param {ClientModelCreateManyArgs} args - Arguments to create many ClientModels.
     *     @example
     *     // Create many ClientModels
     *     const clientModel = await prisma.clientModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClientModel.
     * @param {ClientModelDeleteArgs} args - Arguments to delete one ClientModel.
     * @example
     * // Delete one ClientModel
     * const ClientModel = await prisma.clientModel.delete({
     *   where: {
     *     // ... filter to delete one ClientModel
     *   }
     * })
     * 
    **/
    delete<T extends ClientModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientModelDeleteArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ClientModel.
     * @param {ClientModelUpdateArgs} args - Arguments to update one ClientModel.
     * @example
     * // Update one ClientModel
     * const clientModel = await prisma.clientModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientModelUpdateArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ClientModels.
     * @param {ClientModelDeleteManyArgs} args - Arguments to filter ClientModels to delete.
     * @example
     * // Delete a few ClientModels
     * const { count } = await prisma.clientModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientModels
     * const clientModel = await prisma.clientModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientModel.
     * @param {ClientModelUpsertArgs} args - Arguments to update or create a ClientModel.
     * @example
     * // Update or create a ClientModel
     * const clientModel = await prisma.clientModel.upsert({
     *   create: {
     *     // ... data to create a ClientModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientModel we want to update
     *   }
     * })
    **/
    upsert<T extends ClientModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientModelUpsertArgs<ExtArgs>>
    ): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ClientModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientModelCountArgs} args - Arguments to filter ClientModels to count.
     * @example
     * // Count the number of ClientModels
     * const count = await prisma.clientModel.count({
     *   where: {
     *     // ... the filter for the ClientModels we want to count
     *   }
     * })
    **/
    count<T extends ClientModelCountArgs>(
      args?: Subset<T, ClientModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientModelAggregateArgs>(args: Subset<T, ClientModelAggregateArgs>): Prisma.PrismaPromise<GetClientModelAggregateType<T>>

    /**
     * Group by ClientModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientModelGroupByArgs['orderBy'] }
        : { orderBy?: ClientModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientModel model
   */
  readonly fields: ClientModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    base<T extends UserModelArgs<ExtArgs> = {}>(args?: Subset<T, UserModelArgs<ExtArgs>>): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    oauth_accounts<T extends ClientModel$oauth_accountsArgs<ExtArgs> = {}>(args?: Subset<T, ClientModel$oauth_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the ClientModel model
   */ 
  interface ClientModelFieldRefs {
    readonly id: FieldRef<"ClientModel", 'String'>
    readonly birth: FieldRef<"ClientModel", 'DateTime'>
    readonly gender: FieldRef<"ClientModel", 'GenderType'>
    readonly phone: FieldRef<"ClientModel", 'String'>
    readonly address_zone_code: FieldRef<"ClientModel", 'String'>
    readonly address_road: FieldRef<"ClientModel", 'String'>
    readonly address_detail: FieldRef<"ClientModel", 'String'>
    readonly address_extra: FieldRef<"ClientModel", 'String'>
    readonly profile_image_url: FieldRef<"ClientModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ClientModel findUnique
   */
  export type ClientModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * Filter, which ClientModel to fetch.
     */
    where: ClientModelWhereUniqueInput
  }


  /**
   * ClientModel findUniqueOrThrow
   */
  export type ClientModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * Filter, which ClientModel to fetch.
     */
    where: ClientModelWhereUniqueInput
  }


  /**
   * ClientModel findFirst
   */
  export type ClientModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * Filter, which ClientModel to fetch.
     */
    where?: ClientModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientModels to fetch.
     */
    orderBy?: ClientModelOrderByWithRelationInput | ClientModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientModels.
     */
    cursor?: ClientModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientModels.
     */
    distinct?: ClientModelScalarFieldEnum | ClientModelScalarFieldEnum[]
  }


  /**
   * ClientModel findFirstOrThrow
   */
  export type ClientModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * Filter, which ClientModel to fetch.
     */
    where?: ClientModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientModels to fetch.
     */
    orderBy?: ClientModelOrderByWithRelationInput | ClientModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientModels.
     */
    cursor?: ClientModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientModels.
     */
    distinct?: ClientModelScalarFieldEnum | ClientModelScalarFieldEnum[]
  }


  /**
   * ClientModel findMany
   */
  export type ClientModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * Filter, which ClientModels to fetch.
     */
    where?: ClientModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientModels to fetch.
     */
    orderBy?: ClientModelOrderByWithRelationInput | ClientModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientModels.
     */
    cursor?: ClientModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientModels.
     */
    skip?: number
    distinct?: ClientModelScalarFieldEnum | ClientModelScalarFieldEnum[]
  }


  /**
   * ClientModel create
   */
  export type ClientModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientModel.
     */
    data: XOR<ClientModelCreateInput, ClientModelUncheckedCreateInput>
  }


  /**
   * ClientModel createMany
   */
  export type ClientModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientModels.
     */
    data: ClientModelCreateManyInput | ClientModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ClientModel update
   */
  export type ClientModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientModel.
     */
    data: XOR<ClientModelUpdateInput, ClientModelUncheckedUpdateInput>
    /**
     * Choose, which ClientModel to update.
     */
    where: ClientModelWhereUniqueInput
  }


  /**
   * ClientModel updateMany
   */
  export type ClientModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientModels.
     */
    data: XOR<ClientModelUpdateManyMutationInput, ClientModelUncheckedUpdateManyInput>
    /**
     * Filter which ClientModels to update
     */
    where?: ClientModelWhereInput
  }


  /**
   * ClientModel upsert
   */
  export type ClientModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientModel to update in case it exists.
     */
    where: ClientModelWhereUniqueInput
    /**
     * In case the ClientModel found by the `where` argument doesn't exist, create a new ClientModel with this data.
     */
    create: XOR<ClientModelCreateInput, ClientModelUncheckedCreateInput>
    /**
     * In case the ClientModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientModelUpdateInput, ClientModelUncheckedUpdateInput>
  }


  /**
   * ClientModel delete
   */
  export type ClientModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    /**
     * Filter which ClientModel to delete.
     */
    where: ClientModelWhereUniqueInput
  }


  /**
   * ClientModel deleteMany
   */
  export type ClientModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientModels to delete
     */
    where?: ClientModelWhereInput
  }


  /**
   * ClientModel.oauth_accounts
   */
  export type ClientModel$oauth_accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    where?: OauthAccountModelWhereInput
    orderBy?: OauthAccountModelOrderByWithRelationInput | OauthAccountModelOrderByWithRelationInput[]
    cursor?: OauthAccountModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthAccountModelScalarFieldEnum | OauthAccountModelScalarFieldEnum[]
  }


  /**
   * ClientModel without action
   */
  export type ClientModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
  }



  /**
   * Model BIZUserModel
   */


  export type AggregateBIZUserModel = {
    _count: BIZUserModelCountAggregateOutputType | null
    _min: BIZUserModelMinAggregateOutputType | null
    _max: BIZUserModelMaxAggregateOutputType | null
  }

  export type BIZUserModelMinAggregateOutputType = {
    id: string | null
    is_verified: boolean | null
    introduction_title: string | null
    introduction_content: string | null
    phone: string | null
    profile_image_url: string | null
  }

  export type BIZUserModelMaxAggregateOutputType = {
    id: string | null
    is_verified: boolean | null
    introduction_title: string | null
    introduction_content: string | null
    phone: string | null
    profile_image_url: string | null
  }

  export type BIZUserModelCountAggregateOutputType = {
    id: number
    is_verified: number
    introduction_title: number
    introduction_content: number
    phone: number
    profile_image_url: number
    _all: number
  }


  export type BIZUserModelMinAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    profile_image_url?: true
  }

  export type BIZUserModelMaxAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    profile_image_url?: true
  }

  export type BIZUserModelCountAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    profile_image_url?: true
    _all?: true
  }

  export type BIZUserModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BIZUserModel to aggregate.
     */
    where?: BIZUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZUserModels to fetch.
     */
    orderBy?: BIZUserModelOrderByWithRelationInput | BIZUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BIZUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BIZUserModels
    **/
    _count?: true | BIZUserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BIZUserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BIZUserModelMaxAggregateInputType
  }

  export type GetBIZUserModelAggregateType<T extends BIZUserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateBIZUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBIZUserModel[P]>
      : GetScalarType<T[P], AggregateBIZUserModel[P]>
  }




  export type BIZUserModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BIZUserModelWhereInput
    orderBy?: BIZUserModelOrderByWithAggregationInput | BIZUserModelOrderByWithAggregationInput[]
    by: BIZUserModelScalarFieldEnum[] | BIZUserModelScalarFieldEnum
    having?: BIZUserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BIZUserModelCountAggregateInputType | true
    _min?: BIZUserModelMinAggregateInputType
    _max?: BIZUserModelMaxAggregateInputType
  }


  export type BIZUserModelGroupByOutputType = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    _count: BIZUserModelCountAggregateOutputType | null
    _min: BIZUserModelMinAggregateOutputType | null
    _max: BIZUserModelMaxAggregateOutputType | null
  }

  type GetBIZUserModelGroupByPayload<T extends BIZUserModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BIZUserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BIZUserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BIZUserModelGroupByOutputType[P]>
            : GetScalarType<T[P], BIZUserModelGroupByOutputType[P]>
        }
      >
    >


  export type BIZUserModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_verified?: boolean
    introduction_title?: boolean
    introduction_content?: boolean
    phone?: boolean
    profile_image_url?: boolean
    base?: boolean | UserModelArgs<ExtArgs>
    re_agent?: boolean | BIZUserModel$re_agentArgs<ExtArgs>
    hs_provider?: boolean | BIZUserModel$hs_providerArgs<ExtArgs>
    oauth_accounts?: boolean | BIZUserModel$oauth_accountsArgs<ExtArgs>
    biz_certification_images?: boolean | BIZUserModel$biz_certification_imagesArgs<ExtArgs>
    _count?: boolean | BIZUserModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["bIZUserModel"]>

  export type BIZUserModelSelectScalar = {
    id?: boolean
    is_verified?: boolean
    introduction_title?: boolean
    introduction_content?: boolean
    phone?: boolean
    profile_image_url?: boolean
  }

  export type BIZUserModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    base?: boolean | UserModelArgs<ExtArgs>
    re_agent?: boolean | BIZUserModel$re_agentArgs<ExtArgs>
    hs_provider?: boolean | BIZUserModel$hs_providerArgs<ExtArgs>
    oauth_accounts?: boolean | BIZUserModel$oauth_accountsArgs<ExtArgs>
    biz_certification_images?: boolean | BIZUserModel$biz_certification_imagesArgs<ExtArgs>
    _count?: boolean | BIZUserModelCountOutputTypeArgs<ExtArgs>
  }


  type BIZUserModelGetPayload<S extends boolean | null | undefined | BIZUserModelArgs> = $Types.GetResult<BIZUserModelPayload, S>

  type BIZUserModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BIZUserModelFindManyArgs, 'select' | 'include'> & {
      select?: BIZUserModelCountAggregateInputType | true
    }

  export interface BIZUserModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BIZUserModel'], meta: { name: 'BIZUserModel' } }
    /**
     * Find zero or one BIZUserModel that matches the filter.
     * @param {BIZUserModelFindUniqueArgs} args - Arguments to find a BIZUserModel
     * @example
     * // Get one BIZUserModel
     * const bIZUserModel = await prisma.bIZUserModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BIZUserModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BIZUserModelFindUniqueArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BIZUserModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BIZUserModelFindUniqueOrThrowArgs} args - Arguments to find a BIZUserModel
     * @example
     * // Get one BIZUserModel
     * const bIZUserModel = await prisma.bIZUserModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BIZUserModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZUserModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BIZUserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZUserModelFindFirstArgs} args - Arguments to find a BIZUserModel
     * @example
     * // Get one BIZUserModel
     * const bIZUserModel = await prisma.bIZUserModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BIZUserModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZUserModelFindFirstArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BIZUserModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZUserModelFindFirstOrThrowArgs} args - Arguments to find a BIZUserModel
     * @example
     * // Get one BIZUserModel
     * const bIZUserModel = await prisma.bIZUserModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BIZUserModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZUserModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BIZUserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZUserModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BIZUserModels
     * const bIZUserModels = await prisma.bIZUserModel.findMany()
     * 
     * // Get first 10 BIZUserModels
     * const bIZUserModels = await prisma.bIZUserModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bIZUserModelWithIdOnly = await prisma.bIZUserModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BIZUserModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZUserModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BIZUserModel.
     * @param {BIZUserModelCreateArgs} args - Arguments to create a BIZUserModel.
     * @example
     * // Create one BIZUserModel
     * const BIZUserModel = await prisma.bIZUserModel.create({
     *   data: {
     *     // ... data to create a BIZUserModel
     *   }
     * })
     * 
    **/
    create<T extends BIZUserModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BIZUserModelCreateArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BIZUserModels.
     *     @param {BIZUserModelCreateManyArgs} args - Arguments to create many BIZUserModels.
     *     @example
     *     // Create many BIZUserModels
     *     const bIZUserModel = await prisma.bIZUserModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BIZUserModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZUserModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BIZUserModel.
     * @param {BIZUserModelDeleteArgs} args - Arguments to delete one BIZUserModel.
     * @example
     * // Delete one BIZUserModel
     * const BIZUserModel = await prisma.bIZUserModel.delete({
     *   where: {
     *     // ... filter to delete one BIZUserModel
     *   }
     * })
     * 
    **/
    delete<T extends BIZUserModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BIZUserModelDeleteArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BIZUserModel.
     * @param {BIZUserModelUpdateArgs} args - Arguments to update one BIZUserModel.
     * @example
     * // Update one BIZUserModel
     * const bIZUserModel = await prisma.bIZUserModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BIZUserModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BIZUserModelUpdateArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BIZUserModels.
     * @param {BIZUserModelDeleteManyArgs} args - Arguments to filter BIZUserModels to delete.
     * @example
     * // Delete a few BIZUserModels
     * const { count } = await prisma.bIZUserModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BIZUserModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZUserModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BIZUserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZUserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BIZUserModels
     * const bIZUserModel = await prisma.bIZUserModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BIZUserModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BIZUserModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BIZUserModel.
     * @param {BIZUserModelUpsertArgs} args - Arguments to update or create a BIZUserModel.
     * @example
     * // Update or create a BIZUserModel
     * const bIZUserModel = await prisma.bIZUserModel.upsert({
     *   create: {
     *     // ... data to create a BIZUserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BIZUserModel we want to update
     *   }
     * })
    **/
    upsert<T extends BIZUserModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BIZUserModelUpsertArgs<ExtArgs>>
    ): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BIZUserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZUserModelCountArgs} args - Arguments to filter BIZUserModels to count.
     * @example
     * // Count the number of BIZUserModels
     * const count = await prisma.bIZUserModel.count({
     *   where: {
     *     // ... the filter for the BIZUserModels we want to count
     *   }
     * })
    **/
    count<T extends BIZUserModelCountArgs>(
      args?: Subset<T, BIZUserModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BIZUserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BIZUserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZUserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BIZUserModelAggregateArgs>(args: Subset<T, BIZUserModelAggregateArgs>): Prisma.PrismaPromise<GetBIZUserModelAggregateType<T>>

    /**
     * Group by BIZUserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZUserModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BIZUserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BIZUserModelGroupByArgs['orderBy'] }
        : { orderBy?: BIZUserModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BIZUserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBIZUserModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BIZUserModel model
   */
  readonly fields: BIZUserModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BIZUserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BIZUserModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    base<T extends UserModelArgs<ExtArgs> = {}>(args?: Subset<T, UserModelArgs<ExtArgs>>): Prisma__UserModelClient<$Types.GetResult<UserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    re_agent<T extends BIZUserModel$re_agentArgs<ExtArgs> = {}>(args?: Subset<T, BIZUserModel$re_agentArgs<ExtArgs>>): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    hs_provider<T extends BIZUserModel$hs_providerArgs<ExtArgs> = {}>(args?: Subset<T, BIZUserModel$hs_providerArgs<ExtArgs>>): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    oauth_accounts<T extends BIZUserModel$oauth_accountsArgs<ExtArgs> = {}>(args?: Subset<T, BIZUserModel$oauth_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    biz_certification_images<T extends BIZUserModel$biz_certification_imagesArgs<ExtArgs> = {}>(args?: Subset<T, BIZUserModel$biz_certification_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the BIZUserModel model
   */ 
  interface BIZUserModelFieldRefs {
    readonly id: FieldRef<"BIZUserModel", 'String'>
    readonly is_verified: FieldRef<"BIZUserModel", 'Boolean'>
    readonly introduction_title: FieldRef<"BIZUserModel", 'String'>
    readonly introduction_content: FieldRef<"BIZUserModel", 'String'>
    readonly phone: FieldRef<"BIZUserModel", 'String'>
    readonly profile_image_url: FieldRef<"BIZUserModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BIZUserModel findUnique
   */
  export type BIZUserModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZUserModel to fetch.
     */
    where: BIZUserModelWhereUniqueInput
  }


  /**
   * BIZUserModel findUniqueOrThrow
   */
  export type BIZUserModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZUserModel to fetch.
     */
    where: BIZUserModelWhereUniqueInput
  }


  /**
   * BIZUserModel findFirst
   */
  export type BIZUserModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZUserModel to fetch.
     */
    where?: BIZUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZUserModels to fetch.
     */
    orderBy?: BIZUserModelOrderByWithRelationInput | BIZUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BIZUserModels.
     */
    cursor?: BIZUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BIZUserModels.
     */
    distinct?: BIZUserModelScalarFieldEnum | BIZUserModelScalarFieldEnum[]
  }


  /**
   * BIZUserModel findFirstOrThrow
   */
  export type BIZUserModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZUserModel to fetch.
     */
    where?: BIZUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZUserModels to fetch.
     */
    orderBy?: BIZUserModelOrderByWithRelationInput | BIZUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BIZUserModels.
     */
    cursor?: BIZUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BIZUserModels.
     */
    distinct?: BIZUserModelScalarFieldEnum | BIZUserModelScalarFieldEnum[]
  }


  /**
   * BIZUserModel findMany
   */
  export type BIZUserModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZUserModels to fetch.
     */
    where?: BIZUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZUserModels to fetch.
     */
    orderBy?: BIZUserModelOrderByWithRelationInput | BIZUserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BIZUserModels.
     */
    cursor?: BIZUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZUserModels.
     */
    skip?: number
    distinct?: BIZUserModelScalarFieldEnum | BIZUserModelScalarFieldEnum[]
  }


  /**
   * BIZUserModel create
   */
  export type BIZUserModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * The data needed to create a BIZUserModel.
     */
    data: XOR<BIZUserModelCreateInput, BIZUserModelUncheckedCreateInput>
  }


  /**
   * BIZUserModel createMany
   */
  export type BIZUserModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BIZUserModels.
     */
    data: BIZUserModelCreateManyInput | BIZUserModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BIZUserModel update
   */
  export type BIZUserModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * The data needed to update a BIZUserModel.
     */
    data: XOR<BIZUserModelUpdateInput, BIZUserModelUncheckedUpdateInput>
    /**
     * Choose, which BIZUserModel to update.
     */
    where: BIZUserModelWhereUniqueInput
  }


  /**
   * BIZUserModel updateMany
   */
  export type BIZUserModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BIZUserModels.
     */
    data: XOR<BIZUserModelUpdateManyMutationInput, BIZUserModelUncheckedUpdateManyInput>
    /**
     * Filter which BIZUserModels to update
     */
    where?: BIZUserModelWhereInput
  }


  /**
   * BIZUserModel upsert
   */
  export type BIZUserModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * The filter to search for the BIZUserModel to update in case it exists.
     */
    where: BIZUserModelWhereUniqueInput
    /**
     * In case the BIZUserModel found by the `where` argument doesn't exist, create a new BIZUserModel with this data.
     */
    create: XOR<BIZUserModelCreateInput, BIZUserModelUncheckedCreateInput>
    /**
     * In case the BIZUserModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BIZUserModelUpdateInput, BIZUserModelUncheckedUpdateInput>
  }


  /**
   * BIZUserModel delete
   */
  export type BIZUserModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    /**
     * Filter which BIZUserModel to delete.
     */
    where: BIZUserModelWhereUniqueInput
  }


  /**
   * BIZUserModel deleteMany
   */
  export type BIZUserModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BIZUserModels to delete
     */
    where?: BIZUserModelWhereInput
  }


  /**
   * BIZUserModel.re_agent
   */
  export type BIZUserModel$re_agentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    where?: REAgentModelWhereInput
  }


  /**
   * BIZUserModel.hs_provider
   */
  export type BIZUserModel$hs_providerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    where?: HSProviderModelWhereInput
  }


  /**
   * BIZUserModel.oauth_accounts
   */
  export type BIZUserModel$oauth_accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    where?: OauthAccountModelWhereInput
    orderBy?: OauthAccountModelOrderByWithRelationInput | OauthAccountModelOrderByWithRelationInput[]
    cursor?: OauthAccountModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthAccountModelScalarFieldEnum | OauthAccountModelScalarFieldEnum[]
  }


  /**
   * BIZUserModel.biz_certification_images
   */
  export type BIZUserModel$biz_certification_imagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    where?: BIZCertificationImageModelWhereInput
    orderBy?: BIZCertificationImageModelOrderByWithRelationInput | BIZCertificationImageModelOrderByWithRelationInput[]
    cursor?: BIZCertificationImageModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BIZCertificationImageModelScalarFieldEnum | BIZCertificationImageModelScalarFieldEnum[]
  }


  /**
   * BIZUserModel without action
   */
  export type BIZUserModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
  }



  /**
   * Model BIZCertificationImageModel
   */


  export type AggregateBIZCertificationImageModel = {
    _count: BIZCertificationImageModelCountAggregateOutputType | null
    _min: BIZCertificationImageModelMinAggregateOutputType | null
    _max: BIZCertificationImageModelMaxAggregateOutputType | null
  }

  export type BIZCertificationImageModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    biz_user_id: string | null
    url: string | null
    access_type: ImageAccessType | null
  }

  export type BIZCertificationImageModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    biz_user_id: string | null
    url: string | null
    access_type: ImageAccessType | null
  }

  export type BIZCertificationImageModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    biz_user_id: number
    url: number
    access_type: number
    _all: number
  }


  export type BIZCertificationImageModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    biz_user_id?: true
    url?: true
    access_type?: true
  }

  export type BIZCertificationImageModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    biz_user_id?: true
    url?: true
    access_type?: true
  }

  export type BIZCertificationImageModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    biz_user_id?: true
    url?: true
    access_type?: true
    _all?: true
  }

  export type BIZCertificationImageModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BIZCertificationImageModel to aggregate.
     */
    where?: BIZCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZCertificationImageModels to fetch.
     */
    orderBy?: BIZCertificationImageModelOrderByWithRelationInput | BIZCertificationImageModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BIZCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZCertificationImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BIZCertificationImageModels
    **/
    _count?: true | BIZCertificationImageModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BIZCertificationImageModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BIZCertificationImageModelMaxAggregateInputType
  }

  export type GetBIZCertificationImageModelAggregateType<T extends BIZCertificationImageModelAggregateArgs> = {
        [P in keyof T & keyof AggregateBIZCertificationImageModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBIZCertificationImageModel[P]>
      : GetScalarType<T[P], AggregateBIZCertificationImageModel[P]>
  }




  export type BIZCertificationImageModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BIZCertificationImageModelWhereInput
    orderBy?: BIZCertificationImageModelOrderByWithAggregationInput | BIZCertificationImageModelOrderByWithAggregationInput[]
    by: BIZCertificationImageModelScalarFieldEnum[] | BIZCertificationImageModelScalarFieldEnum
    having?: BIZCertificationImageModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BIZCertificationImageModelCountAggregateInputType | true
    _min?: BIZCertificationImageModelMinAggregateInputType
    _max?: BIZCertificationImageModelMaxAggregateInputType
  }


  export type BIZCertificationImageModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    biz_user_id: string
    url: string
    access_type: ImageAccessType
    _count: BIZCertificationImageModelCountAggregateOutputType | null
    _min: BIZCertificationImageModelMinAggregateOutputType | null
    _max: BIZCertificationImageModelMaxAggregateOutputType | null
  }

  type GetBIZCertificationImageModelGroupByPayload<T extends BIZCertificationImageModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BIZCertificationImageModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BIZCertificationImageModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BIZCertificationImageModelGroupByOutputType[P]>
            : GetScalarType<T[P], BIZCertificationImageModelGroupByOutputType[P]>
        }
      >
    >


  export type BIZCertificationImageModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    biz_user_id?: boolean
    url?: boolean
    access_type?: boolean
    biz_user?: boolean | BIZUserModelArgs<ExtArgs>
  }, ExtArgs["result"]["bIZCertificationImageModel"]>

  export type BIZCertificationImageModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    biz_user_id?: boolean
    url?: boolean
    access_type?: boolean
  }

  export type BIZCertificationImageModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    biz_user?: boolean | BIZUserModelArgs<ExtArgs>
  }


  type BIZCertificationImageModelGetPayload<S extends boolean | null | undefined | BIZCertificationImageModelArgs> = $Types.GetResult<BIZCertificationImageModelPayload, S>

  type BIZCertificationImageModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BIZCertificationImageModelFindManyArgs, 'select' | 'include'> & {
      select?: BIZCertificationImageModelCountAggregateInputType | true
    }

  export interface BIZCertificationImageModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BIZCertificationImageModel'], meta: { name: 'BIZCertificationImageModel' } }
    /**
     * Find zero or one BIZCertificationImageModel that matches the filter.
     * @param {BIZCertificationImageModelFindUniqueArgs} args - Arguments to find a BIZCertificationImageModel
     * @example
     * // Get one BIZCertificationImageModel
     * const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BIZCertificationImageModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BIZCertificationImageModelFindUniqueArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BIZCertificationImageModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BIZCertificationImageModelFindUniqueOrThrowArgs} args - Arguments to find a BIZCertificationImageModel
     * @example
     * // Get one BIZCertificationImageModel
     * const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BIZCertificationImageModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZCertificationImageModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BIZCertificationImageModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZCertificationImageModelFindFirstArgs} args - Arguments to find a BIZCertificationImageModel
     * @example
     * // Get one BIZCertificationImageModel
     * const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BIZCertificationImageModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZCertificationImageModelFindFirstArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BIZCertificationImageModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZCertificationImageModelFindFirstOrThrowArgs} args - Arguments to find a BIZCertificationImageModel
     * @example
     * // Get one BIZCertificationImageModel
     * const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BIZCertificationImageModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZCertificationImageModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BIZCertificationImageModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZCertificationImageModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BIZCertificationImageModels
     * const bIZCertificationImageModels = await prisma.bIZCertificationImageModel.findMany()
     * 
     * // Get first 10 BIZCertificationImageModels
     * const bIZCertificationImageModels = await prisma.bIZCertificationImageModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bIZCertificationImageModelWithIdOnly = await prisma.bIZCertificationImageModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BIZCertificationImageModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZCertificationImageModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BIZCertificationImageModel.
     * @param {BIZCertificationImageModelCreateArgs} args - Arguments to create a BIZCertificationImageModel.
     * @example
     * // Create one BIZCertificationImageModel
     * const BIZCertificationImageModel = await prisma.bIZCertificationImageModel.create({
     *   data: {
     *     // ... data to create a BIZCertificationImageModel
     *   }
     * })
     * 
    **/
    create<T extends BIZCertificationImageModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BIZCertificationImageModelCreateArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BIZCertificationImageModels.
     *     @param {BIZCertificationImageModelCreateManyArgs} args - Arguments to create many BIZCertificationImageModels.
     *     @example
     *     // Create many BIZCertificationImageModels
     *     const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BIZCertificationImageModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZCertificationImageModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BIZCertificationImageModel.
     * @param {BIZCertificationImageModelDeleteArgs} args - Arguments to delete one BIZCertificationImageModel.
     * @example
     * // Delete one BIZCertificationImageModel
     * const BIZCertificationImageModel = await prisma.bIZCertificationImageModel.delete({
     *   where: {
     *     // ... filter to delete one BIZCertificationImageModel
     *   }
     * })
     * 
    **/
    delete<T extends BIZCertificationImageModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BIZCertificationImageModelDeleteArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BIZCertificationImageModel.
     * @param {BIZCertificationImageModelUpdateArgs} args - Arguments to update one BIZCertificationImageModel.
     * @example
     * // Update one BIZCertificationImageModel
     * const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BIZCertificationImageModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BIZCertificationImageModelUpdateArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BIZCertificationImageModels.
     * @param {BIZCertificationImageModelDeleteManyArgs} args - Arguments to filter BIZCertificationImageModels to delete.
     * @example
     * // Delete a few BIZCertificationImageModels
     * const { count } = await prisma.bIZCertificationImageModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BIZCertificationImageModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BIZCertificationImageModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BIZCertificationImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZCertificationImageModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BIZCertificationImageModels
     * const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BIZCertificationImageModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BIZCertificationImageModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BIZCertificationImageModel.
     * @param {BIZCertificationImageModelUpsertArgs} args - Arguments to update or create a BIZCertificationImageModel.
     * @example
     * // Update or create a BIZCertificationImageModel
     * const bIZCertificationImageModel = await prisma.bIZCertificationImageModel.upsert({
     *   create: {
     *     // ... data to create a BIZCertificationImageModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BIZCertificationImageModel we want to update
     *   }
     * })
    **/
    upsert<T extends BIZCertificationImageModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BIZCertificationImageModelUpsertArgs<ExtArgs>>
    ): Prisma__BIZCertificationImageModelClient<$Types.GetResult<BIZCertificationImageModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BIZCertificationImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZCertificationImageModelCountArgs} args - Arguments to filter BIZCertificationImageModels to count.
     * @example
     * // Count the number of BIZCertificationImageModels
     * const count = await prisma.bIZCertificationImageModel.count({
     *   where: {
     *     // ... the filter for the BIZCertificationImageModels we want to count
     *   }
     * })
    **/
    count<T extends BIZCertificationImageModelCountArgs>(
      args?: Subset<T, BIZCertificationImageModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BIZCertificationImageModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BIZCertificationImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZCertificationImageModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BIZCertificationImageModelAggregateArgs>(args: Subset<T, BIZCertificationImageModelAggregateArgs>): Prisma.PrismaPromise<GetBIZCertificationImageModelAggregateType<T>>

    /**
     * Group by BIZCertificationImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BIZCertificationImageModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BIZCertificationImageModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BIZCertificationImageModelGroupByArgs['orderBy'] }
        : { orderBy?: BIZCertificationImageModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BIZCertificationImageModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBIZCertificationImageModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BIZCertificationImageModel model
   */
  readonly fields: BIZCertificationImageModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BIZCertificationImageModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BIZCertificationImageModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    biz_user<T extends BIZUserModelArgs<ExtArgs> = {}>(args?: Subset<T, BIZUserModelArgs<ExtArgs>>): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the BIZCertificationImageModel model
   */ 
  interface BIZCertificationImageModelFieldRefs {
    readonly id: FieldRef<"BIZCertificationImageModel", 'String'>
    readonly created_at: FieldRef<"BIZCertificationImageModel", 'DateTime'>
    readonly updated_at: FieldRef<"BIZCertificationImageModel", 'DateTime'>
    readonly is_deleted: FieldRef<"BIZCertificationImageModel", 'Boolean'>
    readonly deleted_at: FieldRef<"BIZCertificationImageModel", 'DateTime'>
    readonly biz_user_id: FieldRef<"BIZCertificationImageModel", 'String'>
    readonly url: FieldRef<"BIZCertificationImageModel", 'String'>
    readonly access_type: FieldRef<"BIZCertificationImageModel", 'ImageAccessType'>
  }
    

  // Custom InputTypes

  /**
   * BIZCertificationImageModel findUnique
   */
  export type BIZCertificationImageModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZCertificationImageModel to fetch.
     */
    where: BIZCertificationImageModelWhereUniqueInput
  }


  /**
   * BIZCertificationImageModel findUniqueOrThrow
   */
  export type BIZCertificationImageModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZCertificationImageModel to fetch.
     */
    where: BIZCertificationImageModelWhereUniqueInput
  }


  /**
   * BIZCertificationImageModel findFirst
   */
  export type BIZCertificationImageModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZCertificationImageModel to fetch.
     */
    where?: BIZCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZCertificationImageModels to fetch.
     */
    orderBy?: BIZCertificationImageModelOrderByWithRelationInput | BIZCertificationImageModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BIZCertificationImageModels.
     */
    cursor?: BIZCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZCertificationImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BIZCertificationImageModels.
     */
    distinct?: BIZCertificationImageModelScalarFieldEnum | BIZCertificationImageModelScalarFieldEnum[]
  }


  /**
   * BIZCertificationImageModel findFirstOrThrow
   */
  export type BIZCertificationImageModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZCertificationImageModel to fetch.
     */
    where?: BIZCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZCertificationImageModels to fetch.
     */
    orderBy?: BIZCertificationImageModelOrderByWithRelationInput | BIZCertificationImageModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BIZCertificationImageModels.
     */
    cursor?: BIZCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZCertificationImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BIZCertificationImageModels.
     */
    distinct?: BIZCertificationImageModelScalarFieldEnum | BIZCertificationImageModelScalarFieldEnum[]
  }


  /**
   * BIZCertificationImageModel findMany
   */
  export type BIZCertificationImageModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * Filter, which BIZCertificationImageModels to fetch.
     */
    where?: BIZCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BIZCertificationImageModels to fetch.
     */
    orderBy?: BIZCertificationImageModelOrderByWithRelationInput | BIZCertificationImageModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BIZCertificationImageModels.
     */
    cursor?: BIZCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BIZCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BIZCertificationImageModels.
     */
    skip?: number
    distinct?: BIZCertificationImageModelScalarFieldEnum | BIZCertificationImageModelScalarFieldEnum[]
  }


  /**
   * BIZCertificationImageModel create
   */
  export type BIZCertificationImageModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * The data needed to create a BIZCertificationImageModel.
     */
    data: XOR<BIZCertificationImageModelCreateInput, BIZCertificationImageModelUncheckedCreateInput>
  }


  /**
   * BIZCertificationImageModel createMany
   */
  export type BIZCertificationImageModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BIZCertificationImageModels.
     */
    data: BIZCertificationImageModelCreateManyInput | BIZCertificationImageModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BIZCertificationImageModel update
   */
  export type BIZCertificationImageModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * The data needed to update a BIZCertificationImageModel.
     */
    data: XOR<BIZCertificationImageModelUpdateInput, BIZCertificationImageModelUncheckedUpdateInput>
    /**
     * Choose, which BIZCertificationImageModel to update.
     */
    where: BIZCertificationImageModelWhereUniqueInput
  }


  /**
   * BIZCertificationImageModel updateMany
   */
  export type BIZCertificationImageModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BIZCertificationImageModels.
     */
    data: XOR<BIZCertificationImageModelUpdateManyMutationInput, BIZCertificationImageModelUncheckedUpdateManyInput>
    /**
     * Filter which BIZCertificationImageModels to update
     */
    where?: BIZCertificationImageModelWhereInput
  }


  /**
   * BIZCertificationImageModel upsert
   */
  export type BIZCertificationImageModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * The filter to search for the BIZCertificationImageModel to update in case it exists.
     */
    where: BIZCertificationImageModelWhereUniqueInput
    /**
     * In case the BIZCertificationImageModel found by the `where` argument doesn't exist, create a new BIZCertificationImageModel with this data.
     */
    create: XOR<BIZCertificationImageModelCreateInput, BIZCertificationImageModelUncheckedCreateInput>
    /**
     * In case the BIZCertificationImageModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BIZCertificationImageModelUpdateInput, BIZCertificationImageModelUncheckedUpdateInput>
  }


  /**
   * BIZCertificationImageModel delete
   */
  export type BIZCertificationImageModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
    /**
     * Filter which BIZCertificationImageModel to delete.
     */
    where: BIZCertificationImageModelWhereUniqueInput
  }


  /**
   * BIZCertificationImageModel deleteMany
   */
  export type BIZCertificationImageModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BIZCertificationImageModels to delete
     */
    where?: BIZCertificationImageModelWhereInput
  }


  /**
   * BIZCertificationImageModel without action
   */
  export type BIZCertificationImageModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZCertificationImageModel
     */
    select?: BIZCertificationImageModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZCertificationImageModelInclude<ExtArgs> | null
  }



  /**
   * Model REAgentModel
   */


  export type AggregateREAgentModel = {
    _count: REAgentModelCountAggregateOutputType | null
    _min: REAgentModelMinAggregateOutputType | null
    _max: REAgentModelMaxAggregateOutputType | null
  }

  export type REAgentModelMinAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    expertise_id: string | null
    re_number: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
    re_address_zone_code: string | null
    re_address_road: string | null
    re_address_detail: string | null
    re_address_extra: string | null
    biz_open_date: Date | null
  }

  export type REAgentModelMaxAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    expertise_id: string | null
    re_number: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
    re_address_zone_code: string | null
    re_address_road: string | null
    re_address_detail: string | null
    re_address_extra: string | null
    biz_open_date: Date | null
  }

  export type REAgentModelCountAggregateOutputType = {
    id: number
    is_licensed: number
    expertise_id: number
    re_number: number
    re_name: number
    re_phone: number
    re_licensed_agent_name: number
    re_address_zone_code: number
    re_address_road: number
    re_address_detail: number
    re_address_extra: number
    biz_open_date: number
    _all: number
  }


  export type REAgentModelMinAggregateInputType = {
    id?: true
    is_licensed?: true
    expertise_id?: true
    re_number?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    re_address_zone_code?: true
    re_address_road?: true
    re_address_detail?: true
    re_address_extra?: true
    biz_open_date?: true
  }

  export type REAgentModelMaxAggregateInputType = {
    id?: true
    is_licensed?: true
    expertise_id?: true
    re_number?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    re_address_zone_code?: true
    re_address_road?: true
    re_address_detail?: true
    re_address_extra?: true
    biz_open_date?: true
  }

  export type REAgentModelCountAggregateInputType = {
    id?: true
    is_licensed?: true
    expertise_id?: true
    re_number?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    re_address_zone_code?: true
    re_address_road?: true
    re_address_detail?: true
    re_address_extra?: true
    biz_open_date?: true
    _all?: true
  }

  export type REAgentModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which REAgentModel to aggregate.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: REAgentModelOrderByWithRelationInput | REAgentModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REAgentModels
    **/
    _count?: true | REAgentModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REAgentModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REAgentModelMaxAggregateInputType
  }

  export type GetREAgentModelAggregateType<T extends REAgentModelAggregateArgs> = {
        [P in keyof T & keyof AggregateREAgentModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREAgentModel[P]>
      : GetScalarType<T[P], AggregateREAgentModel[P]>
  }




  export type REAgentModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: REAgentModelWhereInput
    orderBy?: REAgentModelOrderByWithAggregationInput | REAgentModelOrderByWithAggregationInput[]
    by: REAgentModelScalarFieldEnum[] | REAgentModelScalarFieldEnum
    having?: REAgentModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REAgentModelCountAggregateInputType | true
    _min?: REAgentModelMinAggregateInputType
    _max?: REAgentModelMaxAggregateInputType
  }


  export type REAgentModelGroupByOutputType = {
    id: string
    is_licensed: boolean
    expertise_id: string
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail: string | null
    re_address_extra: string | null
    biz_open_date: Date
    _count: REAgentModelCountAggregateOutputType | null
    _min: REAgentModelMinAggregateOutputType | null
    _max: REAgentModelMaxAggregateOutputType | null
  }

  type GetREAgentModelGroupByPayload<T extends REAgentModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<REAgentModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REAgentModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REAgentModelGroupByOutputType[P]>
            : GetScalarType<T[P], REAgentModelGroupByOutputType[P]>
        }
      >
    >


  export type REAgentModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_licensed?: boolean
    expertise_id?: boolean
    re_number?: boolean
    re_name?: boolean
    re_phone?: boolean
    re_licensed_agent_name?: boolean
    re_address_zone_code?: boolean
    re_address_road?: boolean
    re_address_detail?: boolean
    re_address_extra?: boolean
    biz_open_date?: boolean
    base?: boolean | BIZUserModelArgs<ExtArgs>
    expertise?: boolean | REExpertiseModelArgs<ExtArgs>
    portfolios?: boolean | REAgentModel$portfoliosArgs<ExtArgs>
    _count?: boolean | REAgentModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["rEAgentModel"]>

  export type REAgentModelSelectScalar = {
    id?: boolean
    is_licensed?: boolean
    expertise_id?: boolean
    re_number?: boolean
    re_name?: boolean
    re_phone?: boolean
    re_licensed_agent_name?: boolean
    re_address_zone_code?: boolean
    re_address_road?: boolean
    re_address_detail?: boolean
    re_address_extra?: boolean
    biz_open_date?: boolean
  }

  export type REAgentModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    base?: boolean | BIZUserModelArgs<ExtArgs>
    expertise?: boolean | REExpertiseModelArgs<ExtArgs>
    portfolios?: boolean | REAgentModel$portfoliosArgs<ExtArgs>
    _count?: boolean | REAgentModelCountOutputTypeArgs<ExtArgs>
  }


  type REAgentModelGetPayload<S extends boolean | null | undefined | REAgentModelArgs> = $Types.GetResult<REAgentModelPayload, S>

  type REAgentModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<REAgentModelFindManyArgs, 'select' | 'include'> & {
      select?: REAgentModelCountAggregateInputType | true
    }

  export interface REAgentModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['REAgentModel'], meta: { name: 'REAgentModel' } }
    /**
     * Find zero or one REAgentModel that matches the filter.
     * @param {REAgentModelFindUniqueArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REAgentModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, REAgentModelFindUniqueArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one REAgentModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REAgentModelFindUniqueOrThrowArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REAgentModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, REAgentModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first REAgentModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelFindFirstArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REAgentModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, REAgentModelFindFirstArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first REAgentModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelFindFirstOrThrowArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REAgentModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, REAgentModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more REAgentModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REAgentModels
     * const rEAgentModels = await prisma.rEAgentModel.findMany()
     * 
     * // Get first 10 REAgentModels
     * const rEAgentModels = await prisma.rEAgentModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rEAgentModelWithIdOnly = await prisma.rEAgentModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends REAgentModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REAgentModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a REAgentModel.
     * @param {REAgentModelCreateArgs} args - Arguments to create a REAgentModel.
     * @example
     * // Create one REAgentModel
     * const REAgentModel = await prisma.rEAgentModel.create({
     *   data: {
     *     // ... data to create a REAgentModel
     *   }
     * })
     * 
    **/
    create<T extends REAgentModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, REAgentModelCreateArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many REAgentModels.
     *     @param {REAgentModelCreateManyArgs} args - Arguments to create many REAgentModels.
     *     @example
     *     // Create many REAgentModels
     *     const rEAgentModel = await prisma.rEAgentModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends REAgentModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REAgentModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REAgentModel.
     * @param {REAgentModelDeleteArgs} args - Arguments to delete one REAgentModel.
     * @example
     * // Delete one REAgentModel
     * const REAgentModel = await prisma.rEAgentModel.delete({
     *   where: {
     *     // ... filter to delete one REAgentModel
     *   }
     * })
     * 
    **/
    delete<T extends REAgentModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, REAgentModelDeleteArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one REAgentModel.
     * @param {REAgentModelUpdateArgs} args - Arguments to update one REAgentModel.
     * @example
     * // Update one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REAgentModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, REAgentModelUpdateArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more REAgentModels.
     * @param {REAgentModelDeleteManyArgs} args - Arguments to filter REAgentModels to delete.
     * @example
     * // Delete a few REAgentModels
     * const { count } = await prisma.rEAgentModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REAgentModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REAgentModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REAgentModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REAgentModels
     * const rEAgentModel = await prisma.rEAgentModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REAgentModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, REAgentModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REAgentModel.
     * @param {REAgentModelUpsertArgs} args - Arguments to update or create a REAgentModel.
     * @example
     * // Update or create a REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.upsert({
     *   create: {
     *     // ... data to create a REAgentModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REAgentModel we want to update
     *   }
     * })
    **/
    upsert<T extends REAgentModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, REAgentModelUpsertArgs<ExtArgs>>
    ): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of REAgentModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelCountArgs} args - Arguments to filter REAgentModels to count.
     * @example
     * // Count the number of REAgentModels
     * const count = await prisma.rEAgentModel.count({
     *   where: {
     *     // ... the filter for the REAgentModels we want to count
     *   }
     * })
    **/
    count<T extends REAgentModelCountArgs>(
      args?: Subset<T, REAgentModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REAgentModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REAgentModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends REAgentModelAggregateArgs>(args: Subset<T, REAgentModelAggregateArgs>): Prisma.PrismaPromise<GetREAgentModelAggregateType<T>>

    /**
     * Group by REAgentModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends REAgentModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REAgentModelGroupByArgs['orderBy'] }
        : { orderBy?: REAgentModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, REAgentModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREAgentModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the REAgentModel model
   */
  readonly fields: REAgentModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for REAgentModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REAgentModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    base<T extends BIZUserModelArgs<ExtArgs> = {}>(args?: Subset<T, BIZUserModelArgs<ExtArgs>>): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    expertise<T extends REExpertiseModelArgs<ExtArgs> = {}>(args?: Subset<T, REExpertiseModelArgs<ExtArgs>>): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    portfolios<T extends REAgentModel$portfoliosArgs<ExtArgs> = {}>(args?: Subset<T, REAgentModel$portfoliosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the REAgentModel model
   */ 
  interface REAgentModelFieldRefs {
    readonly id: FieldRef<"REAgentModel", 'String'>
    readonly is_licensed: FieldRef<"REAgentModel", 'Boolean'>
    readonly expertise_id: FieldRef<"REAgentModel", 'String'>
    readonly re_number: FieldRef<"REAgentModel", 'String'>
    readonly re_name: FieldRef<"REAgentModel", 'String'>
    readonly re_phone: FieldRef<"REAgentModel", 'String'>
    readonly re_licensed_agent_name: FieldRef<"REAgentModel", 'String'>
    readonly re_address_zone_code: FieldRef<"REAgentModel", 'String'>
    readonly re_address_road: FieldRef<"REAgentModel", 'String'>
    readonly re_address_detail: FieldRef<"REAgentModel", 'String'>
    readonly re_address_extra: FieldRef<"REAgentModel", 'String'>
    readonly biz_open_date: FieldRef<"REAgentModel", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * REAgentModel findUnique
   */
  export type REAgentModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where: REAgentModelWhereUniqueInput
  }


  /**
   * REAgentModel findUniqueOrThrow
   */
  export type REAgentModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where: REAgentModelWhereUniqueInput
  }


  /**
   * REAgentModel findFirst
   */
  export type REAgentModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: REAgentModelOrderByWithRelationInput | REAgentModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REAgentModels.
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REAgentModels.
     */
    distinct?: REAgentModelScalarFieldEnum | REAgentModelScalarFieldEnum[]
  }


  /**
   * REAgentModel findFirstOrThrow
   */
  export type REAgentModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: REAgentModelOrderByWithRelationInput | REAgentModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REAgentModels.
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REAgentModels.
     */
    distinct?: REAgentModelScalarFieldEnum | REAgentModelScalarFieldEnum[]
  }


  /**
   * REAgentModel findMany
   */
  export type REAgentModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * Filter, which REAgentModels to fetch.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: REAgentModelOrderByWithRelationInput | REAgentModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REAgentModels.
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    distinct?: REAgentModelScalarFieldEnum | REAgentModelScalarFieldEnum[]
  }


  /**
   * REAgentModel create
   */
  export type REAgentModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * The data needed to create a REAgentModel.
     */
    data: XOR<REAgentModelCreateInput, REAgentModelUncheckedCreateInput>
  }


  /**
   * REAgentModel createMany
   */
  export type REAgentModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many REAgentModels.
     */
    data: REAgentModelCreateManyInput | REAgentModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * REAgentModel update
   */
  export type REAgentModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * The data needed to update a REAgentModel.
     */
    data: XOR<REAgentModelUpdateInput, REAgentModelUncheckedUpdateInput>
    /**
     * Choose, which REAgentModel to update.
     */
    where: REAgentModelWhereUniqueInput
  }


  /**
   * REAgentModel updateMany
   */
  export type REAgentModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update REAgentModels.
     */
    data: XOR<REAgentModelUpdateManyMutationInput, REAgentModelUncheckedUpdateManyInput>
    /**
     * Filter which REAgentModels to update
     */
    where?: REAgentModelWhereInput
  }


  /**
   * REAgentModel upsert
   */
  export type REAgentModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * The filter to search for the REAgentModel to update in case it exists.
     */
    where: REAgentModelWhereUniqueInput
    /**
     * In case the REAgentModel found by the `where` argument doesn't exist, create a new REAgentModel with this data.
     */
    create: XOR<REAgentModelCreateInput, REAgentModelUncheckedCreateInput>
    /**
     * In case the REAgentModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REAgentModelUpdateInput, REAgentModelUncheckedUpdateInput>
  }


  /**
   * REAgentModel delete
   */
  export type REAgentModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    /**
     * Filter which REAgentModel to delete.
     */
    where: REAgentModelWhereUniqueInput
  }


  /**
   * REAgentModel deleteMany
   */
  export type REAgentModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which REAgentModels to delete
     */
    where?: REAgentModelWhereInput
  }


  /**
   * REAgentModel.portfolios
   */
  export type REAgentModel$portfoliosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    where?: REPortfolioModelWhereInput
    orderBy?: REPortfolioModelOrderByWithRelationInput | REPortfolioModelOrderByWithRelationInput[]
    cursor?: REPortfolioModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: REPortfolioModelScalarFieldEnum | REPortfolioModelScalarFieldEnum[]
  }


  /**
   * REAgentModel without action
   */
  export type REAgentModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
  }



  /**
   * Model REExpertiseModel
   */


  export type AggregateREExpertiseModel = {
    _count: REExpertiseModelCountAggregateOutputType | null
    _min: REExpertiseModelMinAggregateOutputType | null
    _max: REExpertiseModelMaxAggregateOutputType | null
  }

  export type REExpertiseModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
  }

  export type REExpertiseModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
  }

  export type REExpertiseModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    _all: number
  }


  export type REExpertiseModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
  }

  export type REExpertiseModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
  }

  export type REExpertiseModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    _all?: true
  }

  export type REExpertiseModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which REExpertiseModel to aggregate.
     */
    where?: REExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REExpertiseModels to fetch.
     */
    orderBy?: REExpertiseModelOrderByWithRelationInput | REExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REExpertiseModels
    **/
    _count?: true | REExpertiseModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REExpertiseModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REExpertiseModelMaxAggregateInputType
  }

  export type GetREExpertiseModelAggregateType<T extends REExpertiseModelAggregateArgs> = {
        [P in keyof T & keyof AggregateREExpertiseModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREExpertiseModel[P]>
      : GetScalarType<T[P], AggregateREExpertiseModel[P]>
  }




  export type REExpertiseModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: REExpertiseModelWhereInput
    orderBy?: REExpertiseModelOrderByWithAggregationInput | REExpertiseModelOrderByWithAggregationInput[]
    by: REExpertiseModelScalarFieldEnum[] | REExpertiseModelScalarFieldEnum
    having?: REExpertiseModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REExpertiseModelCountAggregateInputType | true
    _min?: REExpertiseModelMinAggregateInputType
    _max?: REExpertiseModelMaxAggregateInputType
  }


  export type REExpertiseModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    _count: REExpertiseModelCountAggregateOutputType | null
    _min: REExpertiseModelMinAggregateOutputType | null
    _max: REExpertiseModelMaxAggregateOutputType | null
  }

  type GetREExpertiseModelGroupByPayload<T extends REExpertiseModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<REExpertiseModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REExpertiseModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REExpertiseModelGroupByOutputType[P]>
            : GetScalarType<T[P], REExpertiseModelGroupByOutputType[P]>
        }
      >
    >


  export type REExpertiseModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    re_agents?: boolean | REExpertiseModel$re_agentsArgs<ExtArgs>
    _count?: boolean | REExpertiseModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["rEExpertiseModel"]>

  export type REExpertiseModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
  }

  export type REExpertiseModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    re_agents?: boolean | REExpertiseModel$re_agentsArgs<ExtArgs>
    _count?: boolean | REExpertiseModelCountOutputTypeArgs<ExtArgs>
  }


  type REExpertiseModelGetPayload<S extends boolean | null | undefined | REExpertiseModelArgs> = $Types.GetResult<REExpertiseModelPayload, S>

  type REExpertiseModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<REExpertiseModelFindManyArgs, 'select' | 'include'> & {
      select?: REExpertiseModelCountAggregateInputType | true
    }

  export interface REExpertiseModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['REExpertiseModel'], meta: { name: 'REExpertiseModel' } }
    /**
     * Find zero or one REExpertiseModel that matches the filter.
     * @param {REExpertiseModelFindUniqueArgs} args - Arguments to find a REExpertiseModel
     * @example
     * // Get one REExpertiseModel
     * const rEExpertiseModel = await prisma.rEExpertiseModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REExpertiseModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, REExpertiseModelFindUniqueArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one REExpertiseModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REExpertiseModelFindUniqueOrThrowArgs} args - Arguments to find a REExpertiseModel
     * @example
     * // Get one REExpertiseModel
     * const rEExpertiseModel = await prisma.rEExpertiseModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REExpertiseModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, REExpertiseModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first REExpertiseModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REExpertiseModelFindFirstArgs} args - Arguments to find a REExpertiseModel
     * @example
     * // Get one REExpertiseModel
     * const rEExpertiseModel = await prisma.rEExpertiseModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REExpertiseModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, REExpertiseModelFindFirstArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first REExpertiseModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REExpertiseModelFindFirstOrThrowArgs} args - Arguments to find a REExpertiseModel
     * @example
     * // Get one REExpertiseModel
     * const rEExpertiseModel = await prisma.rEExpertiseModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REExpertiseModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, REExpertiseModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more REExpertiseModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REExpertiseModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REExpertiseModels
     * const rEExpertiseModels = await prisma.rEExpertiseModel.findMany()
     * 
     * // Get first 10 REExpertiseModels
     * const rEExpertiseModels = await prisma.rEExpertiseModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rEExpertiseModelWithIdOnly = await prisma.rEExpertiseModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends REExpertiseModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REExpertiseModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a REExpertiseModel.
     * @param {REExpertiseModelCreateArgs} args - Arguments to create a REExpertiseModel.
     * @example
     * // Create one REExpertiseModel
     * const REExpertiseModel = await prisma.rEExpertiseModel.create({
     *   data: {
     *     // ... data to create a REExpertiseModel
     *   }
     * })
     * 
    **/
    create<T extends REExpertiseModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, REExpertiseModelCreateArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many REExpertiseModels.
     *     @param {REExpertiseModelCreateManyArgs} args - Arguments to create many REExpertiseModels.
     *     @example
     *     // Create many REExpertiseModels
     *     const rEExpertiseModel = await prisma.rEExpertiseModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends REExpertiseModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REExpertiseModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REExpertiseModel.
     * @param {REExpertiseModelDeleteArgs} args - Arguments to delete one REExpertiseModel.
     * @example
     * // Delete one REExpertiseModel
     * const REExpertiseModel = await prisma.rEExpertiseModel.delete({
     *   where: {
     *     // ... filter to delete one REExpertiseModel
     *   }
     * })
     * 
    **/
    delete<T extends REExpertiseModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, REExpertiseModelDeleteArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one REExpertiseModel.
     * @param {REExpertiseModelUpdateArgs} args - Arguments to update one REExpertiseModel.
     * @example
     * // Update one REExpertiseModel
     * const rEExpertiseModel = await prisma.rEExpertiseModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REExpertiseModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, REExpertiseModelUpdateArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more REExpertiseModels.
     * @param {REExpertiseModelDeleteManyArgs} args - Arguments to filter REExpertiseModels to delete.
     * @example
     * // Delete a few REExpertiseModels
     * const { count } = await prisma.rEExpertiseModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REExpertiseModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REExpertiseModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REExpertiseModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REExpertiseModels
     * const rEExpertiseModel = await prisma.rEExpertiseModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REExpertiseModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, REExpertiseModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REExpertiseModel.
     * @param {REExpertiseModelUpsertArgs} args - Arguments to update or create a REExpertiseModel.
     * @example
     * // Update or create a REExpertiseModel
     * const rEExpertiseModel = await prisma.rEExpertiseModel.upsert({
     *   create: {
     *     // ... data to create a REExpertiseModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REExpertiseModel we want to update
     *   }
     * })
    **/
    upsert<T extends REExpertiseModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, REExpertiseModelUpsertArgs<ExtArgs>>
    ): Prisma__REExpertiseModelClient<$Types.GetResult<REExpertiseModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of REExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REExpertiseModelCountArgs} args - Arguments to filter REExpertiseModels to count.
     * @example
     * // Count the number of REExpertiseModels
     * const count = await prisma.rEExpertiseModel.count({
     *   where: {
     *     // ... the filter for the REExpertiseModels we want to count
     *   }
     * })
    **/
    count<T extends REExpertiseModelCountArgs>(
      args?: Subset<T, REExpertiseModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REExpertiseModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REExpertiseModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends REExpertiseModelAggregateArgs>(args: Subset<T, REExpertiseModelAggregateArgs>): Prisma.PrismaPromise<GetREExpertiseModelAggregateType<T>>

    /**
     * Group by REExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REExpertiseModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends REExpertiseModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REExpertiseModelGroupByArgs['orderBy'] }
        : { orderBy?: REExpertiseModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, REExpertiseModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREExpertiseModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the REExpertiseModel model
   */
  readonly fields: REExpertiseModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for REExpertiseModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REExpertiseModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    re_agents<T extends REExpertiseModel$re_agentsArgs<ExtArgs> = {}>(args?: Subset<T, REExpertiseModel$re_agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the REExpertiseModel model
   */ 
  interface REExpertiseModelFieldRefs {
    readonly id: FieldRef<"REExpertiseModel", 'String'>
    readonly created_at: FieldRef<"REExpertiseModel", 'DateTime'>
    readonly updated_at: FieldRef<"REExpertiseModel", 'DateTime'>
    readonly is_deleted: FieldRef<"REExpertiseModel", 'Boolean'>
    readonly deleted_at: FieldRef<"REExpertiseModel", 'DateTime'>
    readonly name: FieldRef<"REExpertiseModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * REExpertiseModel findUnique
   */
  export type REExpertiseModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which REExpertiseModel to fetch.
     */
    where: REExpertiseModelWhereUniqueInput
  }


  /**
   * REExpertiseModel findUniqueOrThrow
   */
  export type REExpertiseModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which REExpertiseModel to fetch.
     */
    where: REExpertiseModelWhereUniqueInput
  }


  /**
   * REExpertiseModel findFirst
   */
  export type REExpertiseModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which REExpertiseModel to fetch.
     */
    where?: REExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REExpertiseModels to fetch.
     */
    orderBy?: REExpertiseModelOrderByWithRelationInput | REExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REExpertiseModels.
     */
    cursor?: REExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REExpertiseModels.
     */
    distinct?: REExpertiseModelScalarFieldEnum | REExpertiseModelScalarFieldEnum[]
  }


  /**
   * REExpertiseModel findFirstOrThrow
   */
  export type REExpertiseModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which REExpertiseModel to fetch.
     */
    where?: REExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REExpertiseModels to fetch.
     */
    orderBy?: REExpertiseModelOrderByWithRelationInput | REExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REExpertiseModels.
     */
    cursor?: REExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REExpertiseModels.
     */
    distinct?: REExpertiseModelScalarFieldEnum | REExpertiseModelScalarFieldEnum[]
  }


  /**
   * REExpertiseModel findMany
   */
  export type REExpertiseModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which REExpertiseModels to fetch.
     */
    where?: REExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REExpertiseModels to fetch.
     */
    orderBy?: REExpertiseModelOrderByWithRelationInput | REExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REExpertiseModels.
     */
    cursor?: REExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REExpertiseModels.
     */
    skip?: number
    distinct?: REExpertiseModelScalarFieldEnum | REExpertiseModelScalarFieldEnum[]
  }


  /**
   * REExpertiseModel create
   */
  export type REExpertiseModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * The data needed to create a REExpertiseModel.
     */
    data: XOR<REExpertiseModelCreateInput, REExpertiseModelUncheckedCreateInput>
  }


  /**
   * REExpertiseModel createMany
   */
  export type REExpertiseModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many REExpertiseModels.
     */
    data: REExpertiseModelCreateManyInput | REExpertiseModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * REExpertiseModel update
   */
  export type REExpertiseModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * The data needed to update a REExpertiseModel.
     */
    data: XOR<REExpertiseModelUpdateInput, REExpertiseModelUncheckedUpdateInput>
    /**
     * Choose, which REExpertiseModel to update.
     */
    where: REExpertiseModelWhereUniqueInput
  }


  /**
   * REExpertiseModel updateMany
   */
  export type REExpertiseModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update REExpertiseModels.
     */
    data: XOR<REExpertiseModelUpdateManyMutationInput, REExpertiseModelUncheckedUpdateManyInput>
    /**
     * Filter which REExpertiseModels to update
     */
    where?: REExpertiseModelWhereInput
  }


  /**
   * REExpertiseModel upsert
   */
  export type REExpertiseModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * The filter to search for the REExpertiseModel to update in case it exists.
     */
    where: REExpertiseModelWhereUniqueInput
    /**
     * In case the REExpertiseModel found by the `where` argument doesn't exist, create a new REExpertiseModel with this data.
     */
    create: XOR<REExpertiseModelCreateInput, REExpertiseModelUncheckedCreateInput>
    /**
     * In case the REExpertiseModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REExpertiseModelUpdateInput, REExpertiseModelUncheckedUpdateInput>
  }


  /**
   * REExpertiseModel delete
   */
  export type REExpertiseModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter which REExpertiseModel to delete.
     */
    where: REExpertiseModelWhereUniqueInput
  }


  /**
   * REExpertiseModel deleteMany
   */
  export type REExpertiseModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which REExpertiseModels to delete
     */
    where?: REExpertiseModelWhereInput
  }


  /**
   * REExpertiseModel.re_agents
   */
  export type REExpertiseModel$re_agentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude<ExtArgs> | null
    where?: REAgentModelWhereInput
    orderBy?: REAgentModelOrderByWithRelationInput | REAgentModelOrderByWithRelationInput[]
    cursor?: REAgentModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: REAgentModelScalarFieldEnum | REAgentModelScalarFieldEnum[]
  }


  /**
   * REExpertiseModel without action
   */
  export type REExpertiseModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REExpertiseModel
     */
    select?: REExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REExpertiseModelInclude<ExtArgs> | null
  }



  /**
   * Model HSProviderModel
   */


  export type AggregateHSProviderModel = {
    _count: HSProviderModelCountAggregateOutputType | null
    _min: HSProviderModelMinAggregateOutputType | null
    _max: HSProviderModelMaxAggregateOutputType | null
  }

  export type HSProviderModelMinAggregateOutputType = {
    id: string | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
    biz_phone: string | null
    biz_registration_number: string | null
    biz_open_date: Date | null
  }

  export type HSProviderModelMaxAggregateOutputType = {
    id: string | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
    biz_phone: string | null
    biz_registration_number: string | null
    biz_open_date: Date | null
  }

  export type HSProviderModelCountAggregateOutputType = {
    id: number
    address_zone_code: number
    address_road: number
    address_detail: number
    address_extra: number
    biz_phone: number
    biz_registration_number: number
    biz_open_date: number
    _all: number
  }


  export type HSProviderModelMinAggregateInputType = {
    id?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
    biz_phone?: true
    biz_registration_number?: true
    biz_open_date?: true
  }

  export type HSProviderModelMaxAggregateInputType = {
    id?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
    biz_phone?: true
    biz_registration_number?: true
    biz_open_date?: true
  }

  export type HSProviderModelCountAggregateInputType = {
    id?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
    biz_phone?: true
    biz_registration_number?: true
    biz_open_date?: true
    _all?: true
  }

  export type HSProviderModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSProviderModel to aggregate.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: HSProviderModelOrderByWithRelationInput | HSProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSProviderModels
    **/
    _count?: true | HSProviderModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSProviderModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSProviderModelMaxAggregateInputType
  }

  export type GetHSProviderModelAggregateType<T extends HSProviderModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSProviderModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSProviderModel[P]>
      : GetScalarType<T[P], AggregateHSProviderModel[P]>
  }




  export type HSProviderModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSProviderModelWhereInput
    orderBy?: HSProviderModelOrderByWithAggregationInput | HSProviderModelOrderByWithAggregationInput[]
    by: HSProviderModelScalarFieldEnum[] | HSProviderModelScalarFieldEnum
    having?: HSProviderModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSProviderModelCountAggregateInputType | true
    _min?: HSProviderModelMinAggregateInputType
    _max?: HSProviderModelMaxAggregateInputType
  }


  export type HSProviderModelGroupByOutputType = {
    id: string
    address_zone_code: string
    address_road: string
    address_detail: string | null
    address_extra: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date
    _count: HSProviderModelCountAggregateOutputType | null
    _min: HSProviderModelMinAggregateOutputType | null
    _max: HSProviderModelMaxAggregateOutputType | null
  }

  type GetHSProviderModelGroupByPayload<T extends HSProviderModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HSProviderModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSProviderModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSProviderModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSProviderModelGroupByOutputType[P]>
        }
      >
    >


  export type HSProviderModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_zone_code?: boolean
    address_road?: boolean
    address_detail?: boolean
    address_extra?: boolean
    biz_phone?: boolean
    biz_registration_number?: boolean
    biz_open_date?: boolean
    base?: boolean | BIZUserModelArgs<ExtArgs>
    expertise_relation?: boolean | HSProviderModel$expertise_relationArgs<ExtArgs>
    portfolios?: boolean | HSProviderModel$portfoliosArgs<ExtArgs>
    _count?: boolean | HSProviderModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["hSProviderModel"]>

  export type HSProviderModelSelectScalar = {
    id?: boolean
    address_zone_code?: boolean
    address_road?: boolean
    address_detail?: boolean
    address_extra?: boolean
    biz_phone?: boolean
    biz_registration_number?: boolean
    biz_open_date?: boolean
  }

  export type HSProviderModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    base?: boolean | BIZUserModelArgs<ExtArgs>
    expertise_relation?: boolean | HSProviderModel$expertise_relationArgs<ExtArgs>
    portfolios?: boolean | HSProviderModel$portfoliosArgs<ExtArgs>
    _count?: boolean | HSProviderModelCountOutputTypeArgs<ExtArgs>
  }


  type HSProviderModelGetPayload<S extends boolean | null | undefined | HSProviderModelArgs> = $Types.GetResult<HSProviderModelPayload, S>

  type HSProviderModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HSProviderModelFindManyArgs, 'select' | 'include'> & {
      select?: HSProviderModelCountAggregateInputType | true
    }

  export interface HSProviderModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HSProviderModel'], meta: { name: 'HSProviderModel' } }
    /**
     * Find zero or one HSProviderModel that matches the filter.
     * @param {HSProviderModelFindUniqueArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSProviderModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HSProviderModelFindUniqueArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HSProviderModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSProviderModelFindUniqueOrThrowArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSProviderModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSProviderModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HSProviderModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelFindFirstArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSProviderModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HSProviderModelFindFirstArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HSProviderModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelFindFirstOrThrowArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSProviderModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSProviderModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HSProviderModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSProviderModels
     * const hSProviderModels = await prisma.hSProviderModel.findMany()
     * 
     * // Get first 10 HSProviderModels
     * const hSProviderModels = await prisma.hSProviderModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSProviderModelWithIdOnly = await prisma.hSProviderModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSProviderModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSProviderModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HSProviderModel.
     * @param {HSProviderModelCreateArgs} args - Arguments to create a HSProviderModel.
     * @example
     * // Create one HSProviderModel
     * const HSProviderModel = await prisma.hSProviderModel.create({
     *   data: {
     *     // ... data to create a HSProviderModel
     *   }
     * })
     * 
    **/
    create<T extends HSProviderModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HSProviderModelCreateArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HSProviderModels.
     *     @param {HSProviderModelCreateManyArgs} args - Arguments to create many HSProviderModels.
     *     @example
     *     // Create many HSProviderModels
     *     const hSProviderModel = await prisma.hSProviderModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSProviderModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSProviderModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSProviderModel.
     * @param {HSProviderModelDeleteArgs} args - Arguments to delete one HSProviderModel.
     * @example
     * // Delete one HSProviderModel
     * const HSProviderModel = await prisma.hSProviderModel.delete({
     *   where: {
     *     // ... filter to delete one HSProviderModel
     *   }
     * })
     * 
    **/
    delete<T extends HSProviderModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HSProviderModelDeleteArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HSProviderModel.
     * @param {HSProviderModelUpdateArgs} args - Arguments to update one HSProviderModel.
     * @example
     * // Update one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSProviderModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HSProviderModelUpdateArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HSProviderModels.
     * @param {HSProviderModelDeleteManyArgs} args - Arguments to filter HSProviderModels to delete.
     * @example
     * // Delete a few HSProviderModels
     * const { count } = await prisma.hSProviderModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSProviderModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSProviderModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSProviderModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSProviderModels
     * const hSProviderModel = await prisma.hSProviderModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSProviderModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HSProviderModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSProviderModel.
     * @param {HSProviderModelUpsertArgs} args - Arguments to update or create a HSProviderModel.
     * @example
     * // Update or create a HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.upsert({
     *   create: {
     *     // ... data to create a HSProviderModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSProviderModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSProviderModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HSProviderModelUpsertArgs<ExtArgs>>
    ): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HSProviderModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelCountArgs} args - Arguments to filter HSProviderModels to count.
     * @example
     * // Count the number of HSProviderModels
     * const count = await prisma.hSProviderModel.count({
     *   where: {
     *     // ... the filter for the HSProviderModels we want to count
     *   }
     * })
    **/
    count<T extends HSProviderModelCountArgs>(
      args?: Subset<T, HSProviderModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSProviderModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSProviderModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HSProviderModelAggregateArgs>(args: Subset<T, HSProviderModelAggregateArgs>): Prisma.PrismaPromise<GetHSProviderModelAggregateType<T>>

    /**
     * Group by HSProviderModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HSProviderModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSProviderModelGroupByArgs['orderBy'] }
        : { orderBy?: HSProviderModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HSProviderModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSProviderModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HSProviderModel model
   */
  readonly fields: HSProviderModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HSProviderModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSProviderModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    base<T extends BIZUserModelArgs<ExtArgs> = {}>(args?: Subset<T, BIZUserModelArgs<ExtArgs>>): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    expertise_relation<T extends HSProviderModel$expertise_relationArgs<ExtArgs> = {}>(args?: Subset<T, HSProviderModel$expertise_relationArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    portfolios<T extends HSProviderModel$portfoliosArgs<ExtArgs> = {}>(args?: Subset<T, HSProviderModel$portfoliosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the HSProviderModel model
   */ 
  interface HSProviderModelFieldRefs {
    readonly id: FieldRef<"HSProviderModel", 'String'>
    readonly address_zone_code: FieldRef<"HSProviderModel", 'String'>
    readonly address_road: FieldRef<"HSProviderModel", 'String'>
    readonly address_detail: FieldRef<"HSProviderModel", 'String'>
    readonly address_extra: FieldRef<"HSProviderModel", 'String'>
    readonly biz_phone: FieldRef<"HSProviderModel", 'String'>
    readonly biz_registration_number: FieldRef<"HSProviderModel", 'String'>
    readonly biz_open_date: FieldRef<"HSProviderModel", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * HSProviderModel findUnique
   */
  export type HSProviderModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where: HSProviderModelWhereUniqueInput
  }


  /**
   * HSProviderModel findUniqueOrThrow
   */
  export type HSProviderModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where: HSProviderModelWhereUniqueInput
  }


  /**
   * HSProviderModel findFirst
   */
  export type HSProviderModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: HSProviderModelOrderByWithRelationInput | HSProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSProviderModels.
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSProviderModels.
     */
    distinct?: HSProviderModelScalarFieldEnum | HSProviderModelScalarFieldEnum[]
  }


  /**
   * HSProviderModel findFirstOrThrow
   */
  export type HSProviderModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: HSProviderModelOrderByWithRelationInput | HSProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSProviderModels.
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSProviderModels.
     */
    distinct?: HSProviderModelScalarFieldEnum | HSProviderModelScalarFieldEnum[]
  }


  /**
   * HSProviderModel findMany
   */
  export type HSProviderModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which HSProviderModels to fetch.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: HSProviderModelOrderByWithRelationInput | HSProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSProviderModels.
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    distinct?: HSProviderModelScalarFieldEnum | HSProviderModelScalarFieldEnum[]
  }


  /**
   * HSProviderModel create
   */
  export type HSProviderModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * The data needed to create a HSProviderModel.
     */
    data: XOR<HSProviderModelCreateInput, HSProviderModelUncheckedCreateInput>
  }


  /**
   * HSProviderModel createMany
   */
  export type HSProviderModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HSProviderModels.
     */
    data: HSProviderModelCreateManyInput | HSProviderModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HSProviderModel update
   */
  export type HSProviderModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * The data needed to update a HSProviderModel.
     */
    data: XOR<HSProviderModelUpdateInput, HSProviderModelUncheckedUpdateInput>
    /**
     * Choose, which HSProviderModel to update.
     */
    where: HSProviderModelWhereUniqueInput
  }


  /**
   * HSProviderModel updateMany
   */
  export type HSProviderModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HSProviderModels.
     */
    data: XOR<HSProviderModelUpdateManyMutationInput, HSProviderModelUncheckedUpdateManyInput>
    /**
     * Filter which HSProviderModels to update
     */
    where?: HSProviderModelWhereInput
  }


  /**
   * HSProviderModel upsert
   */
  export type HSProviderModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * The filter to search for the HSProviderModel to update in case it exists.
     */
    where: HSProviderModelWhereUniqueInput
    /**
     * In case the HSProviderModel found by the `where` argument doesn't exist, create a new HSProviderModel with this data.
     */
    create: XOR<HSProviderModelCreateInput, HSProviderModelUncheckedCreateInput>
    /**
     * In case the HSProviderModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSProviderModelUpdateInput, HSProviderModelUncheckedUpdateInput>
  }


  /**
   * HSProviderModel delete
   */
  export type HSProviderModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
    /**
     * Filter which HSProviderModel to delete.
     */
    where: HSProviderModelWhereUniqueInput
  }


  /**
   * HSProviderModel deleteMany
   */
  export type HSProviderModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSProviderModels to delete
     */
    where?: HSProviderModelWhereInput
  }


  /**
   * HSProviderModel.expertise_relation
   */
  export type HSProviderModel$expertise_relationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    where?: HSSubExpertiseRelationModelWhereInput
    orderBy?: HSSubExpertiseRelationModelOrderByWithRelationInput | HSSubExpertiseRelationModelOrderByWithRelationInput[]
    cursor?: HSSubExpertiseRelationModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HSSubExpertiseRelationModelScalarFieldEnum | HSSubExpertiseRelationModelScalarFieldEnum[]
  }


  /**
   * HSProviderModel.portfolios
   */
  export type HSProviderModel$portfoliosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    where?: HSPortfolioModelWhereInput
    orderBy?: HSPortfolioModelOrderByWithRelationInput | HSPortfolioModelOrderByWithRelationInput[]
    cursor?: HSPortfolioModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HSPortfolioModelScalarFieldEnum | HSPortfolioModelScalarFieldEnum[]
  }


  /**
   * HSProviderModel without action
   */
  export type HSProviderModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude<ExtArgs> | null
  }



  /**
   * Model HSSubExpertiseModel
   */


  export type AggregateHSSubExpertiseModel = {
    _count: HSSubExpertiseModelCountAggregateOutputType | null
    _min: HSSubExpertiseModelMinAggregateOutputType | null
    _max: HSSubExpertiseModelMaxAggregateOutputType | null
  }

  export type HSSubExpertiseModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    super_expertise_id: string | null
  }

  export type HSSubExpertiseModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    super_expertise_id: string | null
  }

  export type HSSubExpertiseModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    super_expertise_id: number
    _all: number
  }


  export type HSSubExpertiseModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_expertise_id?: true
  }

  export type HSSubExpertiseModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_expertise_id?: true
  }

  export type HSSubExpertiseModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_expertise_id?: true
    _all?: true
  }

  export type HSSubExpertiseModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSSubExpertiseModel to aggregate.
     */
    where?: HSSubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseModels to fetch.
     */
    orderBy?: HSSubExpertiseModelOrderByWithRelationInput | HSSubExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSSubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSSubExpertiseModels
    **/
    _count?: true | HSSubExpertiseModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSSubExpertiseModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSSubExpertiseModelMaxAggregateInputType
  }

  export type GetHSSubExpertiseModelAggregateType<T extends HSSubExpertiseModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSSubExpertiseModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSSubExpertiseModel[P]>
      : GetScalarType<T[P], AggregateHSSubExpertiseModel[P]>
  }




  export type HSSubExpertiseModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSSubExpertiseModelWhereInput
    orderBy?: HSSubExpertiseModelOrderByWithAggregationInput | HSSubExpertiseModelOrderByWithAggregationInput[]
    by: HSSubExpertiseModelScalarFieldEnum[] | HSSubExpertiseModelScalarFieldEnum
    having?: HSSubExpertiseModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSSubExpertiseModelCountAggregateInputType | true
    _min?: HSSubExpertiseModelMinAggregateInputType
    _max?: HSSubExpertiseModelMaxAggregateInputType
  }


  export type HSSubExpertiseModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    super_expertise_id: string
    _count: HSSubExpertiseModelCountAggregateOutputType | null
    _min: HSSubExpertiseModelMinAggregateOutputType | null
    _max: HSSubExpertiseModelMaxAggregateOutputType | null
  }

  type GetHSSubExpertiseModelGroupByPayload<T extends HSSubExpertiseModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HSSubExpertiseModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSSubExpertiseModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSSubExpertiseModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSSubExpertiseModelGroupByOutputType[P]>
        }
      >
    >


  export type HSSubExpertiseModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    super_expertise_id?: boolean
    relations?: boolean | HSSubExpertiseModel$relationsArgs<ExtArgs>
    super_expertise?: boolean | HSSuperExpertiseModelArgs<ExtArgs>
    _count?: boolean | HSSubExpertiseModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["hSSubExpertiseModel"]>

  export type HSSubExpertiseModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    super_expertise_id?: boolean
  }

  export type HSSubExpertiseModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    relations?: boolean | HSSubExpertiseModel$relationsArgs<ExtArgs>
    super_expertise?: boolean | HSSuperExpertiseModelArgs<ExtArgs>
    _count?: boolean | HSSubExpertiseModelCountOutputTypeArgs<ExtArgs>
  }


  type HSSubExpertiseModelGetPayload<S extends boolean | null | undefined | HSSubExpertiseModelArgs> = $Types.GetResult<HSSubExpertiseModelPayload, S>

  type HSSubExpertiseModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HSSubExpertiseModelFindManyArgs, 'select' | 'include'> & {
      select?: HSSubExpertiseModelCountAggregateInputType | true
    }

  export interface HSSubExpertiseModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HSSubExpertiseModel'], meta: { name: 'HSSubExpertiseModel' } }
    /**
     * Find zero or one HSSubExpertiseModel that matches the filter.
     * @param {HSSubExpertiseModelFindUniqueArgs} args - Arguments to find a HSSubExpertiseModel
     * @example
     * // Get one HSSubExpertiseModel
     * const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSSubExpertiseModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseModelFindUniqueArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HSSubExpertiseModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSSubExpertiseModelFindUniqueOrThrowArgs} args - Arguments to find a HSSubExpertiseModel
     * @example
     * // Get one HSSubExpertiseModel
     * const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSSubExpertiseModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HSSubExpertiseModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseModelFindFirstArgs} args - Arguments to find a HSSubExpertiseModel
     * @example
     * // Get one HSSubExpertiseModel
     * const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSSubExpertiseModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseModelFindFirstArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HSSubExpertiseModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseModelFindFirstOrThrowArgs} args - Arguments to find a HSSubExpertiseModel
     * @example
     * // Get one HSSubExpertiseModel
     * const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSSubExpertiseModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HSSubExpertiseModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSSubExpertiseModels
     * const hSSubExpertiseModels = await prisma.hSSubExpertiseModel.findMany()
     * 
     * // Get first 10 HSSubExpertiseModels
     * const hSSubExpertiseModels = await prisma.hSSubExpertiseModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSSubExpertiseModelWithIdOnly = await prisma.hSSubExpertiseModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSSubExpertiseModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HSSubExpertiseModel.
     * @param {HSSubExpertiseModelCreateArgs} args - Arguments to create a HSSubExpertiseModel.
     * @example
     * // Create one HSSubExpertiseModel
     * const HSSubExpertiseModel = await prisma.hSSubExpertiseModel.create({
     *   data: {
     *     // ... data to create a HSSubExpertiseModel
     *   }
     * })
     * 
    **/
    create<T extends HSSubExpertiseModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseModelCreateArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HSSubExpertiseModels.
     *     @param {HSSubExpertiseModelCreateManyArgs} args - Arguments to create many HSSubExpertiseModels.
     *     @example
     *     // Create many HSSubExpertiseModels
     *     const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSSubExpertiseModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSSubExpertiseModel.
     * @param {HSSubExpertiseModelDeleteArgs} args - Arguments to delete one HSSubExpertiseModel.
     * @example
     * // Delete one HSSubExpertiseModel
     * const HSSubExpertiseModel = await prisma.hSSubExpertiseModel.delete({
     *   where: {
     *     // ... filter to delete one HSSubExpertiseModel
     *   }
     * })
     * 
    **/
    delete<T extends HSSubExpertiseModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseModelDeleteArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HSSubExpertiseModel.
     * @param {HSSubExpertiseModelUpdateArgs} args - Arguments to update one HSSubExpertiseModel.
     * @example
     * // Update one HSSubExpertiseModel
     * const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSSubExpertiseModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseModelUpdateArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HSSubExpertiseModels.
     * @param {HSSubExpertiseModelDeleteManyArgs} args - Arguments to filter HSSubExpertiseModels to delete.
     * @example
     * // Delete a few HSSubExpertiseModels
     * const { count } = await prisma.hSSubExpertiseModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSSubExpertiseModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSSubExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSSubExpertiseModels
     * const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSSubExpertiseModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSSubExpertiseModel.
     * @param {HSSubExpertiseModelUpsertArgs} args - Arguments to update or create a HSSubExpertiseModel.
     * @example
     * // Update or create a HSSubExpertiseModel
     * const hSSubExpertiseModel = await prisma.hSSubExpertiseModel.upsert({
     *   create: {
     *     // ... data to create a HSSubExpertiseModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSSubExpertiseModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSSubExpertiseModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseModelUpsertArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HSSubExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseModelCountArgs} args - Arguments to filter HSSubExpertiseModels to count.
     * @example
     * // Count the number of HSSubExpertiseModels
     * const count = await prisma.hSSubExpertiseModel.count({
     *   where: {
     *     // ... the filter for the HSSubExpertiseModels we want to count
     *   }
     * })
    **/
    count<T extends HSSubExpertiseModelCountArgs>(
      args?: Subset<T, HSSubExpertiseModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSSubExpertiseModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSSubExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HSSubExpertiseModelAggregateArgs>(args: Subset<T, HSSubExpertiseModelAggregateArgs>): Prisma.PrismaPromise<GetHSSubExpertiseModelAggregateType<T>>

    /**
     * Group by HSSubExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HSSubExpertiseModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSSubExpertiseModelGroupByArgs['orderBy'] }
        : { orderBy?: HSSubExpertiseModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HSSubExpertiseModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSSubExpertiseModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HSSubExpertiseModel model
   */
  readonly fields: HSSubExpertiseModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HSSubExpertiseModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSSubExpertiseModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    relations<T extends HSSubExpertiseModel$relationsArgs<ExtArgs> = {}>(args?: Subset<T, HSSubExpertiseModel$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    super_expertise<T extends HSSuperExpertiseModelArgs<ExtArgs> = {}>(args?: Subset<T, HSSuperExpertiseModelArgs<ExtArgs>>): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the HSSubExpertiseModel model
   */ 
  interface HSSubExpertiseModelFieldRefs {
    readonly id: FieldRef<"HSSubExpertiseModel", 'String'>
    readonly created_at: FieldRef<"HSSubExpertiseModel", 'DateTime'>
    readonly updated_at: FieldRef<"HSSubExpertiseModel", 'DateTime'>
    readonly is_deleted: FieldRef<"HSSubExpertiseModel", 'Boolean'>
    readonly deleted_at: FieldRef<"HSSubExpertiseModel", 'DateTime'>
    readonly name: FieldRef<"HSSubExpertiseModel", 'String'>
    readonly super_expertise_id: FieldRef<"HSSubExpertiseModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HSSubExpertiseModel findUnique
   */
  export type HSSubExpertiseModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseModel to fetch.
     */
    where: HSSubExpertiseModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseModel findUniqueOrThrow
   */
  export type HSSubExpertiseModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseModel to fetch.
     */
    where: HSSubExpertiseModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseModel findFirst
   */
  export type HSSubExpertiseModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseModel to fetch.
     */
    where?: HSSubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseModels to fetch.
     */
    orderBy?: HSSubExpertiseModelOrderByWithRelationInput | HSSubExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSSubExpertiseModels.
     */
    cursor?: HSSubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSSubExpertiseModels.
     */
    distinct?: HSSubExpertiseModelScalarFieldEnum | HSSubExpertiseModelScalarFieldEnum[]
  }


  /**
   * HSSubExpertiseModel findFirstOrThrow
   */
  export type HSSubExpertiseModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseModel to fetch.
     */
    where?: HSSubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseModels to fetch.
     */
    orderBy?: HSSubExpertiseModelOrderByWithRelationInput | HSSubExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSSubExpertiseModels.
     */
    cursor?: HSSubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSSubExpertiseModels.
     */
    distinct?: HSSubExpertiseModelScalarFieldEnum | HSSubExpertiseModelScalarFieldEnum[]
  }


  /**
   * HSSubExpertiseModel findMany
   */
  export type HSSubExpertiseModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseModels to fetch.
     */
    where?: HSSubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseModels to fetch.
     */
    orderBy?: HSSubExpertiseModelOrderByWithRelationInput | HSSubExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSSubExpertiseModels.
     */
    cursor?: HSSubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseModels.
     */
    skip?: number
    distinct?: HSSubExpertiseModelScalarFieldEnum | HSSubExpertiseModelScalarFieldEnum[]
  }


  /**
   * HSSubExpertiseModel create
   */
  export type HSSubExpertiseModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * The data needed to create a HSSubExpertiseModel.
     */
    data: XOR<HSSubExpertiseModelCreateInput, HSSubExpertiseModelUncheckedCreateInput>
  }


  /**
   * HSSubExpertiseModel createMany
   */
  export type HSSubExpertiseModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HSSubExpertiseModels.
     */
    data: HSSubExpertiseModelCreateManyInput | HSSubExpertiseModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HSSubExpertiseModel update
   */
  export type HSSubExpertiseModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * The data needed to update a HSSubExpertiseModel.
     */
    data: XOR<HSSubExpertiseModelUpdateInput, HSSubExpertiseModelUncheckedUpdateInput>
    /**
     * Choose, which HSSubExpertiseModel to update.
     */
    where: HSSubExpertiseModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseModel updateMany
   */
  export type HSSubExpertiseModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HSSubExpertiseModels.
     */
    data: XOR<HSSubExpertiseModelUpdateManyMutationInput, HSSubExpertiseModelUncheckedUpdateManyInput>
    /**
     * Filter which HSSubExpertiseModels to update
     */
    where?: HSSubExpertiseModelWhereInput
  }


  /**
   * HSSubExpertiseModel upsert
   */
  export type HSSubExpertiseModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * The filter to search for the HSSubExpertiseModel to update in case it exists.
     */
    where: HSSubExpertiseModelWhereUniqueInput
    /**
     * In case the HSSubExpertiseModel found by the `where` argument doesn't exist, create a new HSSubExpertiseModel with this data.
     */
    create: XOR<HSSubExpertiseModelCreateInput, HSSubExpertiseModelUncheckedCreateInput>
    /**
     * In case the HSSubExpertiseModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSSubExpertiseModelUpdateInput, HSSubExpertiseModelUncheckedUpdateInput>
  }


  /**
   * HSSubExpertiseModel delete
   */
  export type HSSubExpertiseModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter which HSSubExpertiseModel to delete.
     */
    where: HSSubExpertiseModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseModel deleteMany
   */
  export type HSSubExpertiseModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSSubExpertiseModels to delete
     */
    where?: HSSubExpertiseModelWhereInput
  }


  /**
   * HSSubExpertiseModel.relations
   */
  export type HSSubExpertiseModel$relationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    where?: HSSubExpertiseRelationModelWhereInput
    orderBy?: HSSubExpertiseRelationModelOrderByWithRelationInput | HSSubExpertiseRelationModelOrderByWithRelationInput[]
    cursor?: HSSubExpertiseRelationModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HSSubExpertiseRelationModelScalarFieldEnum | HSSubExpertiseRelationModelScalarFieldEnum[]
  }


  /**
   * HSSubExpertiseModel without action
   */
  export type HSSubExpertiseModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
  }



  /**
   * Model HSSuperExpertiseModel
   */


  export type AggregateHSSuperExpertiseModel = {
    _count: HSSuperExpertiseModelCountAggregateOutputType | null
    _min: HSSuperExpertiseModelMinAggregateOutputType | null
    _max: HSSuperExpertiseModelMaxAggregateOutputType | null
  }

  export type HSSuperExpertiseModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
  }

  export type HSSuperExpertiseModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
  }

  export type HSSuperExpertiseModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    _all: number
  }


  export type HSSuperExpertiseModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
  }

  export type HSSuperExpertiseModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
  }

  export type HSSuperExpertiseModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    _all?: true
  }

  export type HSSuperExpertiseModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSSuperExpertiseModel to aggregate.
     */
    where?: HSSuperExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSuperExpertiseModels to fetch.
     */
    orderBy?: HSSuperExpertiseModelOrderByWithRelationInput | HSSuperExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSSuperExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSuperExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSuperExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSSuperExpertiseModels
    **/
    _count?: true | HSSuperExpertiseModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSSuperExpertiseModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSSuperExpertiseModelMaxAggregateInputType
  }

  export type GetHSSuperExpertiseModelAggregateType<T extends HSSuperExpertiseModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSSuperExpertiseModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSSuperExpertiseModel[P]>
      : GetScalarType<T[P], AggregateHSSuperExpertiseModel[P]>
  }




  export type HSSuperExpertiseModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSSuperExpertiseModelWhereInput
    orderBy?: HSSuperExpertiseModelOrderByWithAggregationInput | HSSuperExpertiseModelOrderByWithAggregationInput[]
    by: HSSuperExpertiseModelScalarFieldEnum[] | HSSuperExpertiseModelScalarFieldEnum
    having?: HSSuperExpertiseModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSSuperExpertiseModelCountAggregateInputType | true
    _min?: HSSuperExpertiseModelMinAggregateInputType
    _max?: HSSuperExpertiseModelMaxAggregateInputType
  }


  export type HSSuperExpertiseModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    _count: HSSuperExpertiseModelCountAggregateOutputType | null
    _min: HSSuperExpertiseModelMinAggregateOutputType | null
    _max: HSSuperExpertiseModelMaxAggregateOutputType | null
  }

  type GetHSSuperExpertiseModelGroupByPayload<T extends HSSuperExpertiseModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HSSuperExpertiseModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSSuperExpertiseModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSSuperExpertiseModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSSuperExpertiseModelGroupByOutputType[P]>
        }
      >
    >


  export type HSSuperExpertiseModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    sub_expertises?: boolean | HSSuperExpertiseModel$sub_expertisesArgs<ExtArgs>
    _count?: boolean | HSSuperExpertiseModelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["hSSuperExpertiseModel"]>

  export type HSSuperExpertiseModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
  }

  export type HSSuperExpertiseModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sub_expertises?: boolean | HSSuperExpertiseModel$sub_expertisesArgs<ExtArgs>
    _count?: boolean | HSSuperExpertiseModelCountOutputTypeArgs<ExtArgs>
  }


  type HSSuperExpertiseModelGetPayload<S extends boolean | null | undefined | HSSuperExpertiseModelArgs> = $Types.GetResult<HSSuperExpertiseModelPayload, S>

  type HSSuperExpertiseModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HSSuperExpertiseModelFindManyArgs, 'select' | 'include'> & {
      select?: HSSuperExpertiseModelCountAggregateInputType | true
    }

  export interface HSSuperExpertiseModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HSSuperExpertiseModel'], meta: { name: 'HSSuperExpertiseModel' } }
    /**
     * Find zero or one HSSuperExpertiseModel that matches the filter.
     * @param {HSSuperExpertiseModelFindUniqueArgs} args - Arguments to find a HSSuperExpertiseModel
     * @example
     * // Get one HSSuperExpertiseModel
     * const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSSuperExpertiseModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HSSuperExpertiseModelFindUniqueArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HSSuperExpertiseModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSSuperExpertiseModelFindUniqueOrThrowArgs} args - Arguments to find a HSSuperExpertiseModel
     * @example
     * // Get one HSSuperExpertiseModel
     * const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSSuperExpertiseModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSuperExpertiseModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HSSuperExpertiseModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSuperExpertiseModelFindFirstArgs} args - Arguments to find a HSSuperExpertiseModel
     * @example
     * // Get one HSSuperExpertiseModel
     * const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSSuperExpertiseModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSuperExpertiseModelFindFirstArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HSSuperExpertiseModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSuperExpertiseModelFindFirstOrThrowArgs} args - Arguments to find a HSSuperExpertiseModel
     * @example
     * // Get one HSSuperExpertiseModel
     * const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSSuperExpertiseModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSuperExpertiseModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HSSuperExpertiseModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSuperExpertiseModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSSuperExpertiseModels
     * const hSSuperExpertiseModels = await prisma.hSSuperExpertiseModel.findMany()
     * 
     * // Get first 10 HSSuperExpertiseModels
     * const hSSuperExpertiseModels = await prisma.hSSuperExpertiseModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSSuperExpertiseModelWithIdOnly = await prisma.hSSuperExpertiseModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSSuperExpertiseModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSuperExpertiseModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HSSuperExpertiseModel.
     * @param {HSSuperExpertiseModelCreateArgs} args - Arguments to create a HSSuperExpertiseModel.
     * @example
     * // Create one HSSuperExpertiseModel
     * const HSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.create({
     *   data: {
     *     // ... data to create a HSSuperExpertiseModel
     *   }
     * })
     * 
    **/
    create<T extends HSSuperExpertiseModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HSSuperExpertiseModelCreateArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HSSuperExpertiseModels.
     *     @param {HSSuperExpertiseModelCreateManyArgs} args - Arguments to create many HSSuperExpertiseModels.
     *     @example
     *     // Create many HSSuperExpertiseModels
     *     const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSSuperExpertiseModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSuperExpertiseModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSSuperExpertiseModel.
     * @param {HSSuperExpertiseModelDeleteArgs} args - Arguments to delete one HSSuperExpertiseModel.
     * @example
     * // Delete one HSSuperExpertiseModel
     * const HSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.delete({
     *   where: {
     *     // ... filter to delete one HSSuperExpertiseModel
     *   }
     * })
     * 
    **/
    delete<T extends HSSuperExpertiseModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HSSuperExpertiseModelDeleteArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HSSuperExpertiseModel.
     * @param {HSSuperExpertiseModelUpdateArgs} args - Arguments to update one HSSuperExpertiseModel.
     * @example
     * // Update one HSSuperExpertiseModel
     * const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSSuperExpertiseModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HSSuperExpertiseModelUpdateArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HSSuperExpertiseModels.
     * @param {HSSuperExpertiseModelDeleteManyArgs} args - Arguments to filter HSSuperExpertiseModels to delete.
     * @example
     * // Delete a few HSSuperExpertiseModels
     * const { count } = await prisma.hSSuperExpertiseModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSSuperExpertiseModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSuperExpertiseModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSSuperExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSuperExpertiseModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSSuperExpertiseModels
     * const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSSuperExpertiseModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HSSuperExpertiseModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSSuperExpertiseModel.
     * @param {HSSuperExpertiseModelUpsertArgs} args - Arguments to update or create a HSSuperExpertiseModel.
     * @example
     * // Update or create a HSSuperExpertiseModel
     * const hSSuperExpertiseModel = await prisma.hSSuperExpertiseModel.upsert({
     *   create: {
     *     // ... data to create a HSSuperExpertiseModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSSuperExpertiseModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSSuperExpertiseModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HSSuperExpertiseModelUpsertArgs<ExtArgs>>
    ): Prisma__HSSuperExpertiseModelClient<$Types.GetResult<HSSuperExpertiseModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HSSuperExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSuperExpertiseModelCountArgs} args - Arguments to filter HSSuperExpertiseModels to count.
     * @example
     * // Count the number of HSSuperExpertiseModels
     * const count = await prisma.hSSuperExpertiseModel.count({
     *   where: {
     *     // ... the filter for the HSSuperExpertiseModels we want to count
     *   }
     * })
    **/
    count<T extends HSSuperExpertiseModelCountArgs>(
      args?: Subset<T, HSSuperExpertiseModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSSuperExpertiseModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSSuperExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSuperExpertiseModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HSSuperExpertiseModelAggregateArgs>(args: Subset<T, HSSuperExpertiseModelAggregateArgs>): Prisma.PrismaPromise<GetHSSuperExpertiseModelAggregateType<T>>

    /**
     * Group by HSSuperExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSuperExpertiseModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HSSuperExpertiseModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSSuperExpertiseModelGroupByArgs['orderBy'] }
        : { orderBy?: HSSuperExpertiseModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HSSuperExpertiseModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSSuperExpertiseModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HSSuperExpertiseModel model
   */
  readonly fields: HSSuperExpertiseModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HSSuperExpertiseModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSSuperExpertiseModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sub_expertises<T extends HSSuperExpertiseModel$sub_expertisesArgs<ExtArgs> = {}>(args?: Subset<T, HSSuperExpertiseModel$sub_expertisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the HSSuperExpertiseModel model
   */ 
  interface HSSuperExpertiseModelFieldRefs {
    readonly id: FieldRef<"HSSuperExpertiseModel", 'String'>
    readonly created_at: FieldRef<"HSSuperExpertiseModel", 'DateTime'>
    readonly updated_at: FieldRef<"HSSuperExpertiseModel", 'DateTime'>
    readonly is_deleted: FieldRef<"HSSuperExpertiseModel", 'Boolean'>
    readonly deleted_at: FieldRef<"HSSuperExpertiseModel", 'DateTime'>
    readonly name: FieldRef<"HSSuperExpertiseModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HSSuperExpertiseModel findUnique
   */
  export type HSSuperExpertiseModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSuperExpertiseModel to fetch.
     */
    where: HSSuperExpertiseModelWhereUniqueInput
  }


  /**
   * HSSuperExpertiseModel findUniqueOrThrow
   */
  export type HSSuperExpertiseModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSuperExpertiseModel to fetch.
     */
    where: HSSuperExpertiseModelWhereUniqueInput
  }


  /**
   * HSSuperExpertiseModel findFirst
   */
  export type HSSuperExpertiseModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSuperExpertiseModel to fetch.
     */
    where?: HSSuperExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSuperExpertiseModels to fetch.
     */
    orderBy?: HSSuperExpertiseModelOrderByWithRelationInput | HSSuperExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSSuperExpertiseModels.
     */
    cursor?: HSSuperExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSuperExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSuperExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSSuperExpertiseModels.
     */
    distinct?: HSSuperExpertiseModelScalarFieldEnum | HSSuperExpertiseModelScalarFieldEnum[]
  }


  /**
   * HSSuperExpertiseModel findFirstOrThrow
   */
  export type HSSuperExpertiseModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSuperExpertiseModel to fetch.
     */
    where?: HSSuperExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSuperExpertiseModels to fetch.
     */
    orderBy?: HSSuperExpertiseModelOrderByWithRelationInput | HSSuperExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSSuperExpertiseModels.
     */
    cursor?: HSSuperExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSuperExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSuperExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSSuperExpertiseModels.
     */
    distinct?: HSSuperExpertiseModelScalarFieldEnum | HSSuperExpertiseModelScalarFieldEnum[]
  }


  /**
   * HSSuperExpertiseModel findMany
   */
  export type HSSuperExpertiseModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSuperExpertiseModels to fetch.
     */
    where?: HSSuperExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSuperExpertiseModels to fetch.
     */
    orderBy?: HSSuperExpertiseModelOrderByWithRelationInput | HSSuperExpertiseModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSSuperExpertiseModels.
     */
    cursor?: HSSuperExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSuperExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSuperExpertiseModels.
     */
    skip?: number
    distinct?: HSSuperExpertiseModelScalarFieldEnum | HSSuperExpertiseModelScalarFieldEnum[]
  }


  /**
   * HSSuperExpertiseModel create
   */
  export type HSSuperExpertiseModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * The data needed to create a HSSuperExpertiseModel.
     */
    data: XOR<HSSuperExpertiseModelCreateInput, HSSuperExpertiseModelUncheckedCreateInput>
  }


  /**
   * HSSuperExpertiseModel createMany
   */
  export type HSSuperExpertiseModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HSSuperExpertiseModels.
     */
    data: HSSuperExpertiseModelCreateManyInput | HSSuperExpertiseModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HSSuperExpertiseModel update
   */
  export type HSSuperExpertiseModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * The data needed to update a HSSuperExpertiseModel.
     */
    data: XOR<HSSuperExpertiseModelUpdateInput, HSSuperExpertiseModelUncheckedUpdateInput>
    /**
     * Choose, which HSSuperExpertiseModel to update.
     */
    where: HSSuperExpertiseModelWhereUniqueInput
  }


  /**
   * HSSuperExpertiseModel updateMany
   */
  export type HSSuperExpertiseModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HSSuperExpertiseModels.
     */
    data: XOR<HSSuperExpertiseModelUpdateManyMutationInput, HSSuperExpertiseModelUncheckedUpdateManyInput>
    /**
     * Filter which HSSuperExpertiseModels to update
     */
    where?: HSSuperExpertiseModelWhereInput
  }


  /**
   * HSSuperExpertiseModel upsert
   */
  export type HSSuperExpertiseModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * The filter to search for the HSSuperExpertiseModel to update in case it exists.
     */
    where: HSSuperExpertiseModelWhereUniqueInput
    /**
     * In case the HSSuperExpertiseModel found by the `where` argument doesn't exist, create a new HSSuperExpertiseModel with this data.
     */
    create: XOR<HSSuperExpertiseModelCreateInput, HSSuperExpertiseModelUncheckedCreateInput>
    /**
     * In case the HSSuperExpertiseModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSSuperExpertiseModelUpdateInput, HSSuperExpertiseModelUncheckedUpdateInput>
  }


  /**
   * HSSuperExpertiseModel delete
   */
  export type HSSuperExpertiseModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
    /**
     * Filter which HSSuperExpertiseModel to delete.
     */
    where: HSSuperExpertiseModelWhereUniqueInput
  }


  /**
   * HSSuperExpertiseModel deleteMany
   */
  export type HSSuperExpertiseModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSSuperExpertiseModels to delete
     */
    where?: HSSuperExpertiseModelWhereInput
  }


  /**
   * HSSuperExpertiseModel.sub_expertises
   */
  export type HSSuperExpertiseModel$sub_expertisesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseModel
     */
    select?: HSSubExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseModelInclude<ExtArgs> | null
    where?: HSSubExpertiseModelWhereInput
    orderBy?: HSSubExpertiseModelOrderByWithRelationInput | HSSubExpertiseModelOrderByWithRelationInput[]
    cursor?: HSSubExpertiseModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HSSubExpertiseModelScalarFieldEnum | HSSubExpertiseModelScalarFieldEnum[]
  }


  /**
   * HSSuperExpertiseModel without action
   */
  export type HSSuperExpertiseModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSuperExpertiseModel
     */
    select?: HSSuperExpertiseModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSuperExpertiseModelInclude<ExtArgs> | null
  }



  /**
   * Model HSSubExpertiseRelationModel
   */


  export type AggregateHSSubExpertiseRelationModel = {
    _count: HSSubExpertiseRelationModelCountAggregateOutputType | null
    _min: HSSubExpertiseRelationModelMinAggregateOutputType | null
    _max: HSSubExpertiseRelationModelMaxAggregateOutputType | null
  }

  export type HSSubExpertiseRelationModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    hs_provider_id: string | null
    sub_expertise_id: string | null
  }

  export type HSSubExpertiseRelationModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    hs_provider_id: string | null
    sub_expertise_id: string | null
  }

  export type HSSubExpertiseRelationModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    hs_provider_id: number
    sub_expertise_id: number
    _all: number
  }


  export type HSSubExpertiseRelationModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    sub_expertise_id?: true
  }

  export type HSSubExpertiseRelationModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    sub_expertise_id?: true
  }

  export type HSSubExpertiseRelationModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    sub_expertise_id?: true
    _all?: true
  }

  export type HSSubExpertiseRelationModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSSubExpertiseRelationModel to aggregate.
     */
    where?: HSSubExpertiseRelationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseRelationModels to fetch.
     */
    orderBy?: HSSubExpertiseRelationModelOrderByWithRelationInput | HSSubExpertiseRelationModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSSubExpertiseRelationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseRelationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseRelationModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSSubExpertiseRelationModels
    **/
    _count?: true | HSSubExpertiseRelationModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSSubExpertiseRelationModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSSubExpertiseRelationModelMaxAggregateInputType
  }

  export type GetHSSubExpertiseRelationModelAggregateType<T extends HSSubExpertiseRelationModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSSubExpertiseRelationModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSSubExpertiseRelationModel[P]>
      : GetScalarType<T[P], AggregateHSSubExpertiseRelationModel[P]>
  }




  export type HSSubExpertiseRelationModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSSubExpertiseRelationModelWhereInput
    orderBy?: HSSubExpertiseRelationModelOrderByWithAggregationInput | HSSubExpertiseRelationModelOrderByWithAggregationInput[]
    by: HSSubExpertiseRelationModelScalarFieldEnum[] | HSSubExpertiseRelationModelScalarFieldEnum
    having?: HSSubExpertiseRelationModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSSubExpertiseRelationModelCountAggregateInputType | true
    _min?: HSSubExpertiseRelationModelMinAggregateInputType
    _max?: HSSubExpertiseRelationModelMaxAggregateInputType
  }


  export type HSSubExpertiseRelationModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    hs_provider_id: string
    sub_expertise_id: string
    _count: HSSubExpertiseRelationModelCountAggregateOutputType | null
    _min: HSSubExpertiseRelationModelMinAggregateOutputType | null
    _max: HSSubExpertiseRelationModelMaxAggregateOutputType | null
  }

  type GetHSSubExpertiseRelationModelGroupByPayload<T extends HSSubExpertiseRelationModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HSSubExpertiseRelationModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSSubExpertiseRelationModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSSubExpertiseRelationModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSSubExpertiseRelationModelGroupByOutputType[P]>
        }
      >
    >


  export type HSSubExpertiseRelationModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    hs_provider_id?: boolean
    sub_expertise_id?: boolean
    hs_provider?: boolean | HSProviderModelArgs<ExtArgs>
    sub_expertise?: boolean | HSSubExpertiseModelArgs<ExtArgs>
  }, ExtArgs["result"]["hSSubExpertiseRelationModel"]>

  export type HSSubExpertiseRelationModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    hs_provider_id?: boolean
    sub_expertise_id?: boolean
  }

  export type HSSubExpertiseRelationModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    hs_provider?: boolean | HSProviderModelArgs<ExtArgs>
    sub_expertise?: boolean | HSSubExpertiseModelArgs<ExtArgs>
  }


  type HSSubExpertiseRelationModelGetPayload<S extends boolean | null | undefined | HSSubExpertiseRelationModelArgs> = $Types.GetResult<HSSubExpertiseRelationModelPayload, S>

  type HSSubExpertiseRelationModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HSSubExpertiseRelationModelFindManyArgs, 'select' | 'include'> & {
      select?: HSSubExpertiseRelationModelCountAggregateInputType | true
    }

  export interface HSSubExpertiseRelationModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HSSubExpertiseRelationModel'], meta: { name: 'HSSubExpertiseRelationModel' } }
    /**
     * Find zero or one HSSubExpertiseRelationModel that matches the filter.
     * @param {HSSubExpertiseRelationModelFindUniqueArgs} args - Arguments to find a HSSubExpertiseRelationModel
     * @example
     * // Get one HSSubExpertiseRelationModel
     * const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSSubExpertiseRelationModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseRelationModelFindUniqueArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HSSubExpertiseRelationModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSSubExpertiseRelationModelFindUniqueOrThrowArgs} args - Arguments to find a HSSubExpertiseRelationModel
     * @example
     * // Get one HSSubExpertiseRelationModel
     * const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSSubExpertiseRelationModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseRelationModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HSSubExpertiseRelationModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseRelationModelFindFirstArgs} args - Arguments to find a HSSubExpertiseRelationModel
     * @example
     * // Get one HSSubExpertiseRelationModel
     * const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSSubExpertiseRelationModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseRelationModelFindFirstArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HSSubExpertiseRelationModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseRelationModelFindFirstOrThrowArgs} args - Arguments to find a HSSubExpertiseRelationModel
     * @example
     * // Get one HSSubExpertiseRelationModel
     * const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSSubExpertiseRelationModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseRelationModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HSSubExpertiseRelationModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseRelationModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSSubExpertiseRelationModels
     * const hSSubExpertiseRelationModels = await prisma.hSSubExpertiseRelationModel.findMany()
     * 
     * // Get first 10 HSSubExpertiseRelationModels
     * const hSSubExpertiseRelationModels = await prisma.hSSubExpertiseRelationModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSSubExpertiseRelationModelWithIdOnly = await prisma.hSSubExpertiseRelationModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSSubExpertiseRelationModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseRelationModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HSSubExpertiseRelationModel.
     * @param {HSSubExpertiseRelationModelCreateArgs} args - Arguments to create a HSSubExpertiseRelationModel.
     * @example
     * // Create one HSSubExpertiseRelationModel
     * const HSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.create({
     *   data: {
     *     // ... data to create a HSSubExpertiseRelationModel
     *   }
     * })
     * 
    **/
    create<T extends HSSubExpertiseRelationModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseRelationModelCreateArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HSSubExpertiseRelationModels.
     *     @param {HSSubExpertiseRelationModelCreateManyArgs} args - Arguments to create many HSSubExpertiseRelationModels.
     *     @example
     *     // Create many HSSubExpertiseRelationModels
     *     const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSSubExpertiseRelationModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseRelationModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSSubExpertiseRelationModel.
     * @param {HSSubExpertiseRelationModelDeleteArgs} args - Arguments to delete one HSSubExpertiseRelationModel.
     * @example
     * // Delete one HSSubExpertiseRelationModel
     * const HSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.delete({
     *   where: {
     *     // ... filter to delete one HSSubExpertiseRelationModel
     *   }
     * })
     * 
    **/
    delete<T extends HSSubExpertiseRelationModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseRelationModelDeleteArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HSSubExpertiseRelationModel.
     * @param {HSSubExpertiseRelationModelUpdateArgs} args - Arguments to update one HSSubExpertiseRelationModel.
     * @example
     * // Update one HSSubExpertiseRelationModel
     * const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSSubExpertiseRelationModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseRelationModelUpdateArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HSSubExpertiseRelationModels.
     * @param {HSSubExpertiseRelationModelDeleteManyArgs} args - Arguments to filter HSSubExpertiseRelationModels to delete.
     * @example
     * // Delete a few HSSubExpertiseRelationModels
     * const { count } = await prisma.hSSubExpertiseRelationModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSSubExpertiseRelationModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSSubExpertiseRelationModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSSubExpertiseRelationModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseRelationModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSSubExpertiseRelationModels
     * const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSSubExpertiseRelationModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseRelationModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSSubExpertiseRelationModel.
     * @param {HSSubExpertiseRelationModelUpsertArgs} args - Arguments to update or create a HSSubExpertiseRelationModel.
     * @example
     * // Update or create a HSSubExpertiseRelationModel
     * const hSSubExpertiseRelationModel = await prisma.hSSubExpertiseRelationModel.upsert({
     *   create: {
     *     // ... data to create a HSSubExpertiseRelationModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSSubExpertiseRelationModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSSubExpertiseRelationModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HSSubExpertiseRelationModelUpsertArgs<ExtArgs>>
    ): Prisma__HSSubExpertiseRelationModelClient<$Types.GetResult<HSSubExpertiseRelationModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HSSubExpertiseRelationModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseRelationModelCountArgs} args - Arguments to filter HSSubExpertiseRelationModels to count.
     * @example
     * // Count the number of HSSubExpertiseRelationModels
     * const count = await prisma.hSSubExpertiseRelationModel.count({
     *   where: {
     *     // ... the filter for the HSSubExpertiseRelationModels we want to count
     *   }
     * })
    **/
    count<T extends HSSubExpertiseRelationModelCountArgs>(
      args?: Subset<T, HSSubExpertiseRelationModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSSubExpertiseRelationModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSSubExpertiseRelationModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseRelationModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HSSubExpertiseRelationModelAggregateArgs>(args: Subset<T, HSSubExpertiseRelationModelAggregateArgs>): Prisma.PrismaPromise<GetHSSubExpertiseRelationModelAggregateType<T>>

    /**
     * Group by HSSubExpertiseRelationModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSSubExpertiseRelationModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HSSubExpertiseRelationModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSSubExpertiseRelationModelGroupByArgs['orderBy'] }
        : { orderBy?: HSSubExpertiseRelationModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HSSubExpertiseRelationModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSSubExpertiseRelationModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HSSubExpertiseRelationModel model
   */
  readonly fields: HSSubExpertiseRelationModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HSSubExpertiseRelationModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSSubExpertiseRelationModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    hs_provider<T extends HSProviderModelArgs<ExtArgs> = {}>(args?: Subset<T, HSProviderModelArgs<ExtArgs>>): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    sub_expertise<T extends HSSubExpertiseModelArgs<ExtArgs> = {}>(args?: Subset<T, HSSubExpertiseModelArgs<ExtArgs>>): Prisma__HSSubExpertiseModelClient<$Types.GetResult<HSSubExpertiseModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the HSSubExpertiseRelationModel model
   */ 
  interface HSSubExpertiseRelationModelFieldRefs {
    readonly id: FieldRef<"HSSubExpertiseRelationModel", 'String'>
    readonly created_at: FieldRef<"HSSubExpertiseRelationModel", 'DateTime'>
    readonly updated_at: FieldRef<"HSSubExpertiseRelationModel", 'DateTime'>
    readonly is_deleted: FieldRef<"HSSubExpertiseRelationModel", 'Boolean'>
    readonly deleted_at: FieldRef<"HSSubExpertiseRelationModel", 'DateTime'>
    readonly hs_provider_id: FieldRef<"HSSubExpertiseRelationModel", 'String'>
    readonly sub_expertise_id: FieldRef<"HSSubExpertiseRelationModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HSSubExpertiseRelationModel findUnique
   */
  export type HSSubExpertiseRelationModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseRelationModel to fetch.
     */
    where: HSSubExpertiseRelationModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseRelationModel findUniqueOrThrow
   */
  export type HSSubExpertiseRelationModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseRelationModel to fetch.
     */
    where: HSSubExpertiseRelationModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseRelationModel findFirst
   */
  export type HSSubExpertiseRelationModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseRelationModel to fetch.
     */
    where?: HSSubExpertiseRelationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseRelationModels to fetch.
     */
    orderBy?: HSSubExpertiseRelationModelOrderByWithRelationInput | HSSubExpertiseRelationModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSSubExpertiseRelationModels.
     */
    cursor?: HSSubExpertiseRelationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseRelationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseRelationModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSSubExpertiseRelationModels.
     */
    distinct?: HSSubExpertiseRelationModelScalarFieldEnum | HSSubExpertiseRelationModelScalarFieldEnum[]
  }


  /**
   * HSSubExpertiseRelationModel findFirstOrThrow
   */
  export type HSSubExpertiseRelationModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseRelationModel to fetch.
     */
    where?: HSSubExpertiseRelationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseRelationModels to fetch.
     */
    orderBy?: HSSubExpertiseRelationModelOrderByWithRelationInput | HSSubExpertiseRelationModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSSubExpertiseRelationModels.
     */
    cursor?: HSSubExpertiseRelationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseRelationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseRelationModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSSubExpertiseRelationModels.
     */
    distinct?: HSSubExpertiseRelationModelScalarFieldEnum | HSSubExpertiseRelationModelScalarFieldEnum[]
  }


  /**
   * HSSubExpertiseRelationModel findMany
   */
  export type HSSubExpertiseRelationModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * Filter, which HSSubExpertiseRelationModels to fetch.
     */
    where?: HSSubExpertiseRelationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSSubExpertiseRelationModels to fetch.
     */
    orderBy?: HSSubExpertiseRelationModelOrderByWithRelationInput | HSSubExpertiseRelationModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSSubExpertiseRelationModels.
     */
    cursor?: HSSubExpertiseRelationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSSubExpertiseRelationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSSubExpertiseRelationModels.
     */
    skip?: number
    distinct?: HSSubExpertiseRelationModelScalarFieldEnum | HSSubExpertiseRelationModelScalarFieldEnum[]
  }


  /**
   * HSSubExpertiseRelationModel create
   */
  export type HSSubExpertiseRelationModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * The data needed to create a HSSubExpertiseRelationModel.
     */
    data: XOR<HSSubExpertiseRelationModelCreateInput, HSSubExpertiseRelationModelUncheckedCreateInput>
  }


  /**
   * HSSubExpertiseRelationModel createMany
   */
  export type HSSubExpertiseRelationModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HSSubExpertiseRelationModels.
     */
    data: HSSubExpertiseRelationModelCreateManyInput | HSSubExpertiseRelationModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HSSubExpertiseRelationModel update
   */
  export type HSSubExpertiseRelationModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * The data needed to update a HSSubExpertiseRelationModel.
     */
    data: XOR<HSSubExpertiseRelationModelUpdateInput, HSSubExpertiseRelationModelUncheckedUpdateInput>
    /**
     * Choose, which HSSubExpertiseRelationModel to update.
     */
    where: HSSubExpertiseRelationModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseRelationModel updateMany
   */
  export type HSSubExpertiseRelationModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HSSubExpertiseRelationModels.
     */
    data: XOR<HSSubExpertiseRelationModelUpdateManyMutationInput, HSSubExpertiseRelationModelUncheckedUpdateManyInput>
    /**
     * Filter which HSSubExpertiseRelationModels to update
     */
    where?: HSSubExpertiseRelationModelWhereInput
  }


  /**
   * HSSubExpertiseRelationModel upsert
   */
  export type HSSubExpertiseRelationModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * The filter to search for the HSSubExpertiseRelationModel to update in case it exists.
     */
    where: HSSubExpertiseRelationModelWhereUniqueInput
    /**
     * In case the HSSubExpertiseRelationModel found by the `where` argument doesn't exist, create a new HSSubExpertiseRelationModel with this data.
     */
    create: XOR<HSSubExpertiseRelationModelCreateInput, HSSubExpertiseRelationModelUncheckedCreateInput>
    /**
     * In case the HSSubExpertiseRelationModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSSubExpertiseRelationModelUpdateInput, HSSubExpertiseRelationModelUncheckedUpdateInput>
  }


  /**
   * HSSubExpertiseRelationModel delete
   */
  export type HSSubExpertiseRelationModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
    /**
     * Filter which HSSubExpertiseRelationModel to delete.
     */
    where: HSSubExpertiseRelationModelWhereUniqueInput
  }


  /**
   * HSSubExpertiseRelationModel deleteMany
   */
  export type HSSubExpertiseRelationModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSSubExpertiseRelationModels to delete
     */
    where?: HSSubExpertiseRelationModelWhereInput
  }


  /**
   * HSSubExpertiseRelationModel without action
   */
  export type HSSubExpertiseRelationModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSSubExpertiseRelationModel
     */
    select?: HSSubExpertiseRelationModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSSubExpertiseRelationModelInclude<ExtArgs> | null
  }



  /**
   * Model REPortfolioModel
   */


  export type AggregateREPortfolioModel = {
    _count: REPortfolioModelCountAggregateOutputType | null
    _min: REPortfolioModelMinAggregateOutputType | null
    _max: REPortfolioModelMaxAggregateOutputType | null
  }

  export type REPortfolioModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    re_agent_id: string | null
    title: string | null
    url: string | null
    is_visible: boolean | null
  }

  export type REPortfolioModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    re_agent_id: string | null
    title: string | null
    url: string | null
    is_visible: boolean | null
  }

  export type REPortfolioModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    re_agent_id: number
    title: number
    url: number
    is_visible: number
    _all: number
  }


  export type REPortfolioModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    re_agent_id?: true
    title?: true
    url?: true
    is_visible?: true
  }

  export type REPortfolioModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    re_agent_id?: true
    title?: true
    url?: true
    is_visible?: true
  }

  export type REPortfolioModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    re_agent_id?: true
    title?: true
    url?: true
    is_visible?: true
    _all?: true
  }

  export type REPortfolioModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which REPortfolioModel to aggregate.
     */
    where?: REPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPortfolioModels to fetch.
     */
    orderBy?: REPortfolioModelOrderByWithRelationInput | REPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPortfolioModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REPortfolioModels
    **/
    _count?: true | REPortfolioModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REPortfolioModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REPortfolioModelMaxAggregateInputType
  }

  export type GetREPortfolioModelAggregateType<T extends REPortfolioModelAggregateArgs> = {
        [P in keyof T & keyof AggregateREPortfolioModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREPortfolioModel[P]>
      : GetScalarType<T[P], AggregateREPortfolioModel[P]>
  }




  export type REPortfolioModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: REPortfolioModelWhereInput
    orderBy?: REPortfolioModelOrderByWithAggregationInput | REPortfolioModelOrderByWithAggregationInput[]
    by: REPortfolioModelScalarFieldEnum[] | REPortfolioModelScalarFieldEnum
    having?: REPortfolioModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REPortfolioModelCountAggregateInputType | true
    _min?: REPortfolioModelMinAggregateInputType
    _max?: REPortfolioModelMaxAggregateInputType
  }


  export type REPortfolioModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    re_agent_id: string
    title: string
    url: string
    is_visible: boolean
    _count: REPortfolioModelCountAggregateOutputType | null
    _min: REPortfolioModelMinAggregateOutputType | null
    _max: REPortfolioModelMaxAggregateOutputType | null
  }

  type GetREPortfolioModelGroupByPayload<T extends REPortfolioModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<REPortfolioModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REPortfolioModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REPortfolioModelGroupByOutputType[P]>
            : GetScalarType<T[P], REPortfolioModelGroupByOutputType[P]>
        }
      >
    >


  export type REPortfolioModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    re_agent_id?: boolean
    title?: boolean
    url?: boolean
    is_visible?: boolean
    re_agent?: boolean | REAgentModelArgs<ExtArgs>
  }, ExtArgs["result"]["rEPortfolioModel"]>

  export type REPortfolioModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    re_agent_id?: boolean
    title?: boolean
    url?: boolean
    is_visible?: boolean
  }

  export type REPortfolioModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    re_agent?: boolean | REAgentModelArgs<ExtArgs>
  }


  type REPortfolioModelGetPayload<S extends boolean | null | undefined | REPortfolioModelArgs> = $Types.GetResult<REPortfolioModelPayload, S>

  type REPortfolioModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<REPortfolioModelFindManyArgs, 'select' | 'include'> & {
      select?: REPortfolioModelCountAggregateInputType | true
    }

  export interface REPortfolioModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['REPortfolioModel'], meta: { name: 'REPortfolioModel' } }
    /**
     * Find zero or one REPortfolioModel that matches the filter.
     * @param {REPortfolioModelFindUniqueArgs} args - Arguments to find a REPortfolioModel
     * @example
     * // Get one REPortfolioModel
     * const rEPortfolioModel = await prisma.rEPortfolioModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REPortfolioModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, REPortfolioModelFindUniqueArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one REPortfolioModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REPortfolioModelFindUniqueOrThrowArgs} args - Arguments to find a REPortfolioModel
     * @example
     * // Get one REPortfolioModel
     * const rEPortfolioModel = await prisma.rEPortfolioModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REPortfolioModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, REPortfolioModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first REPortfolioModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPortfolioModelFindFirstArgs} args - Arguments to find a REPortfolioModel
     * @example
     * // Get one REPortfolioModel
     * const rEPortfolioModel = await prisma.rEPortfolioModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REPortfolioModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, REPortfolioModelFindFirstArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first REPortfolioModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPortfolioModelFindFirstOrThrowArgs} args - Arguments to find a REPortfolioModel
     * @example
     * // Get one REPortfolioModel
     * const rEPortfolioModel = await prisma.rEPortfolioModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REPortfolioModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, REPortfolioModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more REPortfolioModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPortfolioModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REPortfolioModels
     * const rEPortfolioModels = await prisma.rEPortfolioModel.findMany()
     * 
     * // Get first 10 REPortfolioModels
     * const rEPortfolioModels = await prisma.rEPortfolioModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rEPortfolioModelWithIdOnly = await prisma.rEPortfolioModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends REPortfolioModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REPortfolioModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a REPortfolioModel.
     * @param {REPortfolioModelCreateArgs} args - Arguments to create a REPortfolioModel.
     * @example
     * // Create one REPortfolioModel
     * const REPortfolioModel = await prisma.rEPortfolioModel.create({
     *   data: {
     *     // ... data to create a REPortfolioModel
     *   }
     * })
     * 
    **/
    create<T extends REPortfolioModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, REPortfolioModelCreateArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many REPortfolioModels.
     *     @param {REPortfolioModelCreateManyArgs} args - Arguments to create many REPortfolioModels.
     *     @example
     *     // Create many REPortfolioModels
     *     const rEPortfolioModel = await prisma.rEPortfolioModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends REPortfolioModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REPortfolioModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REPortfolioModel.
     * @param {REPortfolioModelDeleteArgs} args - Arguments to delete one REPortfolioModel.
     * @example
     * // Delete one REPortfolioModel
     * const REPortfolioModel = await prisma.rEPortfolioModel.delete({
     *   where: {
     *     // ... filter to delete one REPortfolioModel
     *   }
     * })
     * 
    **/
    delete<T extends REPortfolioModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, REPortfolioModelDeleteArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one REPortfolioModel.
     * @param {REPortfolioModelUpdateArgs} args - Arguments to update one REPortfolioModel.
     * @example
     * // Update one REPortfolioModel
     * const rEPortfolioModel = await prisma.rEPortfolioModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REPortfolioModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, REPortfolioModelUpdateArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more REPortfolioModels.
     * @param {REPortfolioModelDeleteManyArgs} args - Arguments to filter REPortfolioModels to delete.
     * @example
     * // Delete a few REPortfolioModels
     * const { count } = await prisma.rEPortfolioModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REPortfolioModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, REPortfolioModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REPortfolioModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPortfolioModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REPortfolioModels
     * const rEPortfolioModel = await prisma.rEPortfolioModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REPortfolioModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, REPortfolioModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REPortfolioModel.
     * @param {REPortfolioModelUpsertArgs} args - Arguments to update or create a REPortfolioModel.
     * @example
     * // Update or create a REPortfolioModel
     * const rEPortfolioModel = await prisma.rEPortfolioModel.upsert({
     *   create: {
     *     // ... data to create a REPortfolioModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REPortfolioModel we want to update
     *   }
     * })
    **/
    upsert<T extends REPortfolioModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, REPortfolioModelUpsertArgs<ExtArgs>>
    ): Prisma__REPortfolioModelClient<$Types.GetResult<REPortfolioModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of REPortfolioModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPortfolioModelCountArgs} args - Arguments to filter REPortfolioModels to count.
     * @example
     * // Count the number of REPortfolioModels
     * const count = await prisma.rEPortfolioModel.count({
     *   where: {
     *     // ... the filter for the REPortfolioModels we want to count
     *   }
     * })
    **/
    count<T extends REPortfolioModelCountArgs>(
      args?: Subset<T, REPortfolioModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REPortfolioModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REPortfolioModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPortfolioModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends REPortfolioModelAggregateArgs>(args: Subset<T, REPortfolioModelAggregateArgs>): Prisma.PrismaPromise<GetREPortfolioModelAggregateType<T>>

    /**
     * Group by REPortfolioModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPortfolioModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends REPortfolioModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REPortfolioModelGroupByArgs['orderBy'] }
        : { orderBy?: REPortfolioModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, REPortfolioModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREPortfolioModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the REPortfolioModel model
   */
  readonly fields: REPortfolioModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for REPortfolioModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REPortfolioModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    re_agent<T extends REAgentModelArgs<ExtArgs> = {}>(args?: Subset<T, REAgentModelArgs<ExtArgs>>): Prisma__REAgentModelClient<$Types.GetResult<REAgentModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the REPortfolioModel model
   */ 
  interface REPortfolioModelFieldRefs {
    readonly id: FieldRef<"REPortfolioModel", 'String'>
    readonly created_at: FieldRef<"REPortfolioModel", 'DateTime'>
    readonly updated_at: FieldRef<"REPortfolioModel", 'DateTime'>
    readonly is_deleted: FieldRef<"REPortfolioModel", 'Boolean'>
    readonly deleted_at: FieldRef<"REPortfolioModel", 'DateTime'>
    readonly re_agent_id: FieldRef<"REPortfolioModel", 'String'>
    readonly title: FieldRef<"REPortfolioModel", 'String'>
    readonly url: FieldRef<"REPortfolioModel", 'String'>
    readonly is_visible: FieldRef<"REPortfolioModel", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * REPortfolioModel findUnique
   */
  export type REPortfolioModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which REPortfolioModel to fetch.
     */
    where: REPortfolioModelWhereUniqueInput
  }


  /**
   * REPortfolioModel findUniqueOrThrow
   */
  export type REPortfolioModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which REPortfolioModel to fetch.
     */
    where: REPortfolioModelWhereUniqueInput
  }


  /**
   * REPortfolioModel findFirst
   */
  export type REPortfolioModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which REPortfolioModel to fetch.
     */
    where?: REPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPortfolioModels to fetch.
     */
    orderBy?: REPortfolioModelOrderByWithRelationInput | REPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REPortfolioModels.
     */
    cursor?: REPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPortfolioModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REPortfolioModels.
     */
    distinct?: REPortfolioModelScalarFieldEnum | REPortfolioModelScalarFieldEnum[]
  }


  /**
   * REPortfolioModel findFirstOrThrow
   */
  export type REPortfolioModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which REPortfolioModel to fetch.
     */
    where?: REPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPortfolioModels to fetch.
     */
    orderBy?: REPortfolioModelOrderByWithRelationInput | REPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REPortfolioModels.
     */
    cursor?: REPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPortfolioModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REPortfolioModels.
     */
    distinct?: REPortfolioModelScalarFieldEnum | REPortfolioModelScalarFieldEnum[]
  }


  /**
   * REPortfolioModel findMany
   */
  export type REPortfolioModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which REPortfolioModels to fetch.
     */
    where?: REPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPortfolioModels to fetch.
     */
    orderBy?: REPortfolioModelOrderByWithRelationInput | REPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REPortfolioModels.
     */
    cursor?: REPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPortfolioModels.
     */
    skip?: number
    distinct?: REPortfolioModelScalarFieldEnum | REPortfolioModelScalarFieldEnum[]
  }


  /**
   * REPortfolioModel create
   */
  export type REPortfolioModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * The data needed to create a REPortfolioModel.
     */
    data: XOR<REPortfolioModelCreateInput, REPortfolioModelUncheckedCreateInput>
  }


  /**
   * REPortfolioModel createMany
   */
  export type REPortfolioModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many REPortfolioModels.
     */
    data: REPortfolioModelCreateManyInput | REPortfolioModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * REPortfolioModel update
   */
  export type REPortfolioModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * The data needed to update a REPortfolioModel.
     */
    data: XOR<REPortfolioModelUpdateInput, REPortfolioModelUncheckedUpdateInput>
    /**
     * Choose, which REPortfolioModel to update.
     */
    where: REPortfolioModelWhereUniqueInput
  }


  /**
   * REPortfolioModel updateMany
   */
  export type REPortfolioModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update REPortfolioModels.
     */
    data: XOR<REPortfolioModelUpdateManyMutationInput, REPortfolioModelUncheckedUpdateManyInput>
    /**
     * Filter which REPortfolioModels to update
     */
    where?: REPortfolioModelWhereInput
  }


  /**
   * REPortfolioModel upsert
   */
  export type REPortfolioModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * The filter to search for the REPortfolioModel to update in case it exists.
     */
    where: REPortfolioModelWhereUniqueInput
    /**
     * In case the REPortfolioModel found by the `where` argument doesn't exist, create a new REPortfolioModel with this data.
     */
    create: XOR<REPortfolioModelCreateInput, REPortfolioModelUncheckedCreateInput>
    /**
     * In case the REPortfolioModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REPortfolioModelUpdateInput, REPortfolioModelUncheckedUpdateInput>
  }


  /**
   * REPortfolioModel delete
   */
  export type REPortfolioModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter which REPortfolioModel to delete.
     */
    where: REPortfolioModelWhereUniqueInput
  }


  /**
   * REPortfolioModel deleteMany
   */
  export type REPortfolioModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which REPortfolioModels to delete
     */
    where?: REPortfolioModelWhereInput
  }


  /**
   * REPortfolioModel without action
   */
  export type REPortfolioModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REPortfolioModel
     */
    select?: REPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPortfolioModelInclude<ExtArgs> | null
  }



  /**
   * Model HSPortfolioModel
   */


  export type AggregateHSPortfolioModel = {
    _count: HSPortfolioModelCountAggregateOutputType | null
    _min: HSPortfolioModelMinAggregateOutputType | null
    _max: HSPortfolioModelMaxAggregateOutputType | null
  }

  export type HSPortfolioModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    hs_provider_id: string | null
    title: string | null
    url: string | null
    is_visible: boolean | null
  }

  export type HSPortfolioModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    hs_provider_id: string | null
    title: string | null
    url: string | null
    is_visible: boolean | null
  }

  export type HSPortfolioModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    hs_provider_id: number
    title: number
    url: number
    is_visible: number
    _all: number
  }


  export type HSPortfolioModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    title?: true
    url?: true
    is_visible?: true
  }

  export type HSPortfolioModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    title?: true
    url?: true
    is_visible?: true
  }

  export type HSPortfolioModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    title?: true
    url?: true
    is_visible?: true
    _all?: true
  }

  export type HSPortfolioModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSPortfolioModel to aggregate.
     */
    where?: HSPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSPortfolioModels to fetch.
     */
    orderBy?: HSPortfolioModelOrderByWithRelationInput | HSPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSPortfolioModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSPortfolioModels
    **/
    _count?: true | HSPortfolioModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSPortfolioModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSPortfolioModelMaxAggregateInputType
  }

  export type GetHSPortfolioModelAggregateType<T extends HSPortfolioModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSPortfolioModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSPortfolioModel[P]>
      : GetScalarType<T[P], AggregateHSPortfolioModel[P]>
  }




  export type HSPortfolioModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HSPortfolioModelWhereInput
    orderBy?: HSPortfolioModelOrderByWithAggregationInput | HSPortfolioModelOrderByWithAggregationInput[]
    by: HSPortfolioModelScalarFieldEnum[] | HSPortfolioModelScalarFieldEnum
    having?: HSPortfolioModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSPortfolioModelCountAggregateInputType | true
    _min?: HSPortfolioModelMinAggregateInputType
    _max?: HSPortfolioModelMaxAggregateInputType
  }


  export type HSPortfolioModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    hs_provider_id: string
    title: string
    url: string
    is_visible: boolean
    _count: HSPortfolioModelCountAggregateOutputType | null
    _min: HSPortfolioModelMinAggregateOutputType | null
    _max: HSPortfolioModelMaxAggregateOutputType | null
  }

  type GetHSPortfolioModelGroupByPayload<T extends HSPortfolioModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HSPortfolioModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSPortfolioModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSPortfolioModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSPortfolioModelGroupByOutputType[P]>
        }
      >
    >


  export type HSPortfolioModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    hs_provider_id?: boolean
    title?: boolean
    url?: boolean
    is_visible?: boolean
    hs_provider?: boolean | HSProviderModelArgs<ExtArgs>
  }, ExtArgs["result"]["hSPortfolioModel"]>

  export type HSPortfolioModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    hs_provider_id?: boolean
    title?: boolean
    url?: boolean
    is_visible?: boolean
  }

  export type HSPortfolioModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    hs_provider?: boolean | HSProviderModelArgs<ExtArgs>
  }


  type HSPortfolioModelGetPayload<S extends boolean | null | undefined | HSPortfolioModelArgs> = $Types.GetResult<HSPortfolioModelPayload, S>

  type HSPortfolioModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HSPortfolioModelFindManyArgs, 'select' | 'include'> & {
      select?: HSPortfolioModelCountAggregateInputType | true
    }

  export interface HSPortfolioModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HSPortfolioModel'], meta: { name: 'HSPortfolioModel' } }
    /**
     * Find zero or one HSPortfolioModel that matches the filter.
     * @param {HSPortfolioModelFindUniqueArgs} args - Arguments to find a HSPortfolioModel
     * @example
     * // Get one HSPortfolioModel
     * const hSPortfolioModel = await prisma.hSPortfolioModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSPortfolioModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HSPortfolioModelFindUniqueArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HSPortfolioModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSPortfolioModelFindUniqueOrThrowArgs} args - Arguments to find a HSPortfolioModel
     * @example
     * // Get one HSPortfolioModel
     * const hSPortfolioModel = await prisma.hSPortfolioModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSPortfolioModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSPortfolioModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HSPortfolioModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSPortfolioModelFindFirstArgs} args - Arguments to find a HSPortfolioModel
     * @example
     * // Get one HSPortfolioModel
     * const hSPortfolioModel = await prisma.hSPortfolioModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSPortfolioModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HSPortfolioModelFindFirstArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HSPortfolioModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSPortfolioModelFindFirstOrThrowArgs} args - Arguments to find a HSPortfolioModel
     * @example
     * // Get one HSPortfolioModel
     * const hSPortfolioModel = await prisma.hSPortfolioModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSPortfolioModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HSPortfolioModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HSPortfolioModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSPortfolioModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSPortfolioModels
     * const hSPortfolioModels = await prisma.hSPortfolioModel.findMany()
     * 
     * // Get first 10 HSPortfolioModels
     * const hSPortfolioModels = await prisma.hSPortfolioModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSPortfolioModelWithIdOnly = await prisma.hSPortfolioModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSPortfolioModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSPortfolioModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HSPortfolioModel.
     * @param {HSPortfolioModelCreateArgs} args - Arguments to create a HSPortfolioModel.
     * @example
     * // Create one HSPortfolioModel
     * const HSPortfolioModel = await prisma.hSPortfolioModel.create({
     *   data: {
     *     // ... data to create a HSPortfolioModel
     *   }
     * })
     * 
    **/
    create<T extends HSPortfolioModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HSPortfolioModelCreateArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HSPortfolioModels.
     *     @param {HSPortfolioModelCreateManyArgs} args - Arguments to create many HSPortfolioModels.
     *     @example
     *     // Create many HSPortfolioModels
     *     const hSPortfolioModel = await prisma.hSPortfolioModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSPortfolioModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSPortfolioModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSPortfolioModel.
     * @param {HSPortfolioModelDeleteArgs} args - Arguments to delete one HSPortfolioModel.
     * @example
     * // Delete one HSPortfolioModel
     * const HSPortfolioModel = await prisma.hSPortfolioModel.delete({
     *   where: {
     *     // ... filter to delete one HSPortfolioModel
     *   }
     * })
     * 
    **/
    delete<T extends HSPortfolioModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HSPortfolioModelDeleteArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HSPortfolioModel.
     * @param {HSPortfolioModelUpdateArgs} args - Arguments to update one HSPortfolioModel.
     * @example
     * // Update one HSPortfolioModel
     * const hSPortfolioModel = await prisma.hSPortfolioModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSPortfolioModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HSPortfolioModelUpdateArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HSPortfolioModels.
     * @param {HSPortfolioModelDeleteManyArgs} args - Arguments to filter HSPortfolioModels to delete.
     * @example
     * // Delete a few HSPortfolioModels
     * const { count } = await prisma.hSPortfolioModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSPortfolioModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HSPortfolioModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSPortfolioModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSPortfolioModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSPortfolioModels
     * const hSPortfolioModel = await prisma.hSPortfolioModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSPortfolioModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HSPortfolioModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSPortfolioModel.
     * @param {HSPortfolioModelUpsertArgs} args - Arguments to update or create a HSPortfolioModel.
     * @example
     * // Update or create a HSPortfolioModel
     * const hSPortfolioModel = await prisma.hSPortfolioModel.upsert({
     *   create: {
     *     // ... data to create a HSPortfolioModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSPortfolioModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSPortfolioModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HSPortfolioModelUpsertArgs<ExtArgs>>
    ): Prisma__HSPortfolioModelClient<$Types.GetResult<HSPortfolioModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HSPortfolioModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSPortfolioModelCountArgs} args - Arguments to filter HSPortfolioModels to count.
     * @example
     * // Count the number of HSPortfolioModels
     * const count = await prisma.hSPortfolioModel.count({
     *   where: {
     *     // ... the filter for the HSPortfolioModels we want to count
     *   }
     * })
    **/
    count<T extends HSPortfolioModelCountArgs>(
      args?: Subset<T, HSPortfolioModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSPortfolioModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSPortfolioModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSPortfolioModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HSPortfolioModelAggregateArgs>(args: Subset<T, HSPortfolioModelAggregateArgs>): Prisma.PrismaPromise<GetHSPortfolioModelAggregateType<T>>

    /**
     * Group by HSPortfolioModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSPortfolioModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HSPortfolioModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSPortfolioModelGroupByArgs['orderBy'] }
        : { orderBy?: HSPortfolioModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HSPortfolioModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSPortfolioModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HSPortfolioModel model
   */
  readonly fields: HSPortfolioModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HSPortfolioModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSPortfolioModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    hs_provider<T extends HSProviderModelArgs<ExtArgs> = {}>(args?: Subset<T, HSProviderModelArgs<ExtArgs>>): Prisma__HSProviderModelClient<$Types.GetResult<HSProviderModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the HSPortfolioModel model
   */ 
  interface HSPortfolioModelFieldRefs {
    readonly id: FieldRef<"HSPortfolioModel", 'String'>
    readonly created_at: FieldRef<"HSPortfolioModel", 'DateTime'>
    readonly updated_at: FieldRef<"HSPortfolioModel", 'DateTime'>
    readonly is_deleted: FieldRef<"HSPortfolioModel", 'Boolean'>
    readonly deleted_at: FieldRef<"HSPortfolioModel", 'DateTime'>
    readonly hs_provider_id: FieldRef<"HSPortfolioModel", 'String'>
    readonly title: FieldRef<"HSPortfolioModel", 'String'>
    readonly url: FieldRef<"HSPortfolioModel", 'String'>
    readonly is_visible: FieldRef<"HSPortfolioModel", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * HSPortfolioModel findUnique
   */
  export type HSPortfolioModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which HSPortfolioModel to fetch.
     */
    where: HSPortfolioModelWhereUniqueInput
  }


  /**
   * HSPortfolioModel findUniqueOrThrow
   */
  export type HSPortfolioModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which HSPortfolioModel to fetch.
     */
    where: HSPortfolioModelWhereUniqueInput
  }


  /**
   * HSPortfolioModel findFirst
   */
  export type HSPortfolioModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which HSPortfolioModel to fetch.
     */
    where?: HSPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSPortfolioModels to fetch.
     */
    orderBy?: HSPortfolioModelOrderByWithRelationInput | HSPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSPortfolioModels.
     */
    cursor?: HSPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSPortfolioModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSPortfolioModels.
     */
    distinct?: HSPortfolioModelScalarFieldEnum | HSPortfolioModelScalarFieldEnum[]
  }


  /**
   * HSPortfolioModel findFirstOrThrow
   */
  export type HSPortfolioModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which HSPortfolioModel to fetch.
     */
    where?: HSPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSPortfolioModels to fetch.
     */
    orderBy?: HSPortfolioModelOrderByWithRelationInput | HSPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSPortfolioModels.
     */
    cursor?: HSPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSPortfolioModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSPortfolioModels.
     */
    distinct?: HSPortfolioModelScalarFieldEnum | HSPortfolioModelScalarFieldEnum[]
  }


  /**
   * HSPortfolioModel findMany
   */
  export type HSPortfolioModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter, which HSPortfolioModels to fetch.
     */
    where?: HSPortfolioModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSPortfolioModels to fetch.
     */
    orderBy?: HSPortfolioModelOrderByWithRelationInput | HSPortfolioModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSPortfolioModels.
     */
    cursor?: HSPortfolioModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSPortfolioModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSPortfolioModels.
     */
    skip?: number
    distinct?: HSPortfolioModelScalarFieldEnum | HSPortfolioModelScalarFieldEnum[]
  }


  /**
   * HSPortfolioModel create
   */
  export type HSPortfolioModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * The data needed to create a HSPortfolioModel.
     */
    data: XOR<HSPortfolioModelCreateInput, HSPortfolioModelUncheckedCreateInput>
  }


  /**
   * HSPortfolioModel createMany
   */
  export type HSPortfolioModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HSPortfolioModels.
     */
    data: HSPortfolioModelCreateManyInput | HSPortfolioModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HSPortfolioModel update
   */
  export type HSPortfolioModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * The data needed to update a HSPortfolioModel.
     */
    data: XOR<HSPortfolioModelUpdateInput, HSPortfolioModelUncheckedUpdateInput>
    /**
     * Choose, which HSPortfolioModel to update.
     */
    where: HSPortfolioModelWhereUniqueInput
  }


  /**
   * HSPortfolioModel updateMany
   */
  export type HSPortfolioModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HSPortfolioModels.
     */
    data: XOR<HSPortfolioModelUpdateManyMutationInput, HSPortfolioModelUncheckedUpdateManyInput>
    /**
     * Filter which HSPortfolioModels to update
     */
    where?: HSPortfolioModelWhereInput
  }


  /**
   * HSPortfolioModel upsert
   */
  export type HSPortfolioModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * The filter to search for the HSPortfolioModel to update in case it exists.
     */
    where: HSPortfolioModelWhereUniqueInput
    /**
     * In case the HSPortfolioModel found by the `where` argument doesn't exist, create a new HSPortfolioModel with this data.
     */
    create: XOR<HSPortfolioModelCreateInput, HSPortfolioModelUncheckedCreateInput>
    /**
     * In case the HSPortfolioModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSPortfolioModelUpdateInput, HSPortfolioModelUncheckedUpdateInput>
  }


  /**
   * HSPortfolioModel delete
   */
  export type HSPortfolioModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
    /**
     * Filter which HSPortfolioModel to delete.
     */
    where: HSPortfolioModelWhereUniqueInput
  }


  /**
   * HSPortfolioModel deleteMany
   */
  export type HSPortfolioModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HSPortfolioModels to delete
     */
    where?: HSPortfolioModelWhereInput
  }


  /**
   * HSPortfolioModel without action
   */
  export type HSPortfolioModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HSPortfolioModel
     */
    select?: HSPortfolioModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSPortfolioModelInclude<ExtArgs> | null
  }



  /**
   * Model OauthAccountModel
   */


  export type AggregateOauthAccountModel = {
    _count: OauthAccountModelCountAggregateOutputType | null
    _min: OauthAccountModelMinAggregateOutputType | null
    _max: OauthAccountModelMaxAggregateOutputType | null
  }

  export type OauthAccountModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    oauth_type: OauthType | null
    oauth_sub: string | null
    biz_user_id: string | null
    client_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    profile_image_url: string | null
    birth: string | null
    gender: GenderType | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
  }

  export type OauthAccountModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    oauth_type: OauthType | null
    oauth_sub: string | null
    biz_user_id: string | null
    client_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    profile_image_url: string | null
    birth: string | null
    gender: GenderType | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
  }

  export type OauthAccountModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    oauth_type: number
    oauth_sub: number
    biz_user_id: number
    client_id: number
    name: number
    email: number
    phone: number
    profile_image_url: number
    birth: number
    gender: number
    address_zone_code: number
    address_road: number
    address_detail: number
    address_extra: number
    _all: number
  }


  export type OauthAccountModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    oauth_type?: true
    oauth_sub?: true
    biz_user_id?: true
    client_id?: true
    name?: true
    email?: true
    phone?: true
    profile_image_url?: true
    birth?: true
    gender?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
  }

  export type OauthAccountModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    oauth_type?: true
    oauth_sub?: true
    biz_user_id?: true
    client_id?: true
    name?: true
    email?: true
    phone?: true
    profile_image_url?: true
    birth?: true
    gender?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
  }

  export type OauthAccountModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    oauth_type?: true
    oauth_sub?: true
    biz_user_id?: true
    client_id?: true
    name?: true
    email?: true
    phone?: true
    profile_image_url?: true
    birth?: true
    gender?: true
    address_zone_code?: true
    address_road?: true
    address_detail?: true
    address_extra?: true
    _all?: true
  }

  export type OauthAccountModelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthAccountModel to aggregate.
     */
    where?: OauthAccountModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccountModels to fetch.
     */
    orderBy?: OauthAccountModelOrderByWithRelationInput | OauthAccountModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OauthAccountModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccountModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccountModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OauthAccountModels
    **/
    _count?: true | OauthAccountModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OauthAccountModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OauthAccountModelMaxAggregateInputType
  }

  export type GetOauthAccountModelAggregateType<T extends OauthAccountModelAggregateArgs> = {
        [P in keyof T & keyof AggregateOauthAccountModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauthAccountModel[P]>
      : GetScalarType<T[P], AggregateOauthAccountModel[P]>
  }




  export type OauthAccountModelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OauthAccountModelWhereInput
    orderBy?: OauthAccountModelOrderByWithAggregationInput | OauthAccountModelOrderByWithAggregationInput[]
    by: OauthAccountModelScalarFieldEnum[] | OauthAccountModelScalarFieldEnum
    having?: OauthAccountModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OauthAccountModelCountAggregateInputType | true
    _min?: OauthAccountModelMinAggregateInputType
    _max?: OauthAccountModelMaxAggregateInputType
  }


  export type OauthAccountModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    oauth_type: OauthType
    oauth_sub: string
    biz_user_id: string | null
    client_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    profile_image_url: string | null
    birth: string | null
    gender: GenderType | null
    address_zone_code: string | null
    address_road: string | null
    address_detail: string | null
    address_extra: string | null
    _count: OauthAccountModelCountAggregateOutputType | null
    _min: OauthAccountModelMinAggregateOutputType | null
    _max: OauthAccountModelMaxAggregateOutputType | null
  }

  type GetOauthAccountModelGroupByPayload<T extends OauthAccountModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OauthAccountModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OauthAccountModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OauthAccountModelGroupByOutputType[P]>
            : GetScalarType<T[P], OauthAccountModelGroupByOutputType[P]>
        }
      >
    >


  export type OauthAccountModelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    oauth_type?: boolean
    oauth_sub?: boolean
    biz_user_id?: boolean
    client_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    profile_image_url?: boolean
    birth?: boolean
    gender?: boolean
    address_zone_code?: boolean
    address_road?: boolean
    address_detail?: boolean
    address_extra?: boolean
    client?: boolean | OauthAccountModel$clientArgs<ExtArgs>
    biz_user?: boolean | OauthAccountModel$biz_userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthAccountModel"]>

  export type OauthAccountModelSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    oauth_type?: boolean
    oauth_sub?: boolean
    biz_user_id?: boolean
    client_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    profile_image_url?: boolean
    birth?: boolean
    gender?: boolean
    address_zone_code?: boolean
    address_road?: boolean
    address_detail?: boolean
    address_extra?: boolean
  }

  export type OauthAccountModelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    client?: boolean | OauthAccountModel$clientArgs<ExtArgs>
    biz_user?: boolean | OauthAccountModel$biz_userArgs<ExtArgs>
  }


  type OauthAccountModelGetPayload<S extends boolean | null | undefined | OauthAccountModelArgs> = $Types.GetResult<OauthAccountModelPayload, S>

  type OauthAccountModelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OauthAccountModelFindManyArgs, 'select' | 'include'> & {
      select?: OauthAccountModelCountAggregateInputType | true
    }

  export interface OauthAccountModelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OauthAccountModel'], meta: { name: 'OauthAccountModel' } }
    /**
     * Find zero or one OauthAccountModel that matches the filter.
     * @param {OauthAccountModelFindUniqueArgs} args - Arguments to find a OauthAccountModel
     * @example
     * // Get one OauthAccountModel
     * const oauthAccountModel = await prisma.oauthAccountModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OauthAccountModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OauthAccountModelFindUniqueArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OauthAccountModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OauthAccountModelFindUniqueOrThrowArgs} args - Arguments to find a OauthAccountModel
     * @example
     * // Get one OauthAccountModel
     * const oauthAccountModel = await prisma.oauthAccountModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OauthAccountModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OauthAccountModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OauthAccountModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountModelFindFirstArgs} args - Arguments to find a OauthAccountModel
     * @example
     * // Get one OauthAccountModel
     * const oauthAccountModel = await prisma.oauthAccountModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OauthAccountModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OauthAccountModelFindFirstArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OauthAccountModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountModelFindFirstOrThrowArgs} args - Arguments to find a OauthAccountModel
     * @example
     * // Get one OauthAccountModel
     * const oauthAccountModel = await prisma.oauthAccountModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OauthAccountModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OauthAccountModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OauthAccountModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OauthAccountModels
     * const oauthAccountModels = await prisma.oauthAccountModel.findMany()
     * 
     * // Get first 10 OauthAccountModels
     * const oauthAccountModels = await prisma.oauthAccountModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oauthAccountModelWithIdOnly = await prisma.oauthAccountModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OauthAccountModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OauthAccountModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OauthAccountModel.
     * @param {OauthAccountModelCreateArgs} args - Arguments to create a OauthAccountModel.
     * @example
     * // Create one OauthAccountModel
     * const OauthAccountModel = await prisma.oauthAccountModel.create({
     *   data: {
     *     // ... data to create a OauthAccountModel
     *   }
     * })
     * 
    **/
    create<T extends OauthAccountModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OauthAccountModelCreateArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OauthAccountModels.
     *     @param {OauthAccountModelCreateManyArgs} args - Arguments to create many OauthAccountModels.
     *     @example
     *     // Create many OauthAccountModels
     *     const oauthAccountModel = await prisma.oauthAccountModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OauthAccountModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OauthAccountModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OauthAccountModel.
     * @param {OauthAccountModelDeleteArgs} args - Arguments to delete one OauthAccountModel.
     * @example
     * // Delete one OauthAccountModel
     * const OauthAccountModel = await prisma.oauthAccountModel.delete({
     *   where: {
     *     // ... filter to delete one OauthAccountModel
     *   }
     * })
     * 
    **/
    delete<T extends OauthAccountModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OauthAccountModelDeleteArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OauthAccountModel.
     * @param {OauthAccountModelUpdateArgs} args - Arguments to update one OauthAccountModel.
     * @example
     * // Update one OauthAccountModel
     * const oauthAccountModel = await prisma.oauthAccountModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OauthAccountModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OauthAccountModelUpdateArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OauthAccountModels.
     * @param {OauthAccountModelDeleteManyArgs} args - Arguments to filter OauthAccountModels to delete.
     * @example
     * // Delete a few OauthAccountModels
     * const { count } = await prisma.oauthAccountModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OauthAccountModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OauthAccountModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthAccountModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OauthAccountModels
     * const oauthAccountModel = await prisma.oauthAccountModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OauthAccountModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OauthAccountModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OauthAccountModel.
     * @param {OauthAccountModelUpsertArgs} args - Arguments to update or create a OauthAccountModel.
     * @example
     * // Update or create a OauthAccountModel
     * const oauthAccountModel = await prisma.oauthAccountModel.upsert({
     *   create: {
     *     // ... data to create a OauthAccountModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OauthAccountModel we want to update
     *   }
     * })
    **/
    upsert<T extends OauthAccountModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OauthAccountModelUpsertArgs<ExtArgs>>
    ): Prisma__OauthAccountModelClient<$Types.GetResult<OauthAccountModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OauthAccountModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountModelCountArgs} args - Arguments to filter OauthAccountModels to count.
     * @example
     * // Count the number of OauthAccountModels
     * const count = await prisma.oauthAccountModel.count({
     *   where: {
     *     // ... the filter for the OauthAccountModels we want to count
     *   }
     * })
    **/
    count<T extends OauthAccountModelCountArgs>(
      args?: Subset<T, OauthAccountModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OauthAccountModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OauthAccountModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OauthAccountModelAggregateArgs>(args: Subset<T, OauthAccountModelAggregateArgs>): Prisma.PrismaPromise<GetOauthAccountModelAggregateType<T>>

    /**
     * Group by OauthAccountModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OauthAccountModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OauthAccountModelGroupByArgs['orderBy'] }
        : { orderBy?: OauthAccountModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OauthAccountModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthAccountModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OauthAccountModel model
   */
  readonly fields: OauthAccountModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OauthAccountModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OauthAccountModelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    client<T extends OauthAccountModel$clientArgs<ExtArgs> = {}>(args?: Subset<T, OauthAccountModel$clientArgs<ExtArgs>>): Prisma__ClientModelClient<$Types.GetResult<ClientModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    biz_user<T extends OauthAccountModel$biz_userArgs<ExtArgs> = {}>(args?: Subset<T, OauthAccountModel$biz_userArgs<ExtArgs>>): Prisma__BIZUserModelClient<$Types.GetResult<BIZUserModelPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the OauthAccountModel model
   */ 
  interface OauthAccountModelFieldRefs {
    readonly id: FieldRef<"OauthAccountModel", 'String'>
    readonly created_at: FieldRef<"OauthAccountModel", 'DateTime'>
    readonly updated_at: FieldRef<"OauthAccountModel", 'DateTime'>
    readonly is_deleted: FieldRef<"OauthAccountModel", 'Boolean'>
    readonly deleted_at: FieldRef<"OauthAccountModel", 'DateTime'>
    readonly oauth_type: FieldRef<"OauthAccountModel", 'OauthType'>
    readonly oauth_sub: FieldRef<"OauthAccountModel", 'String'>
    readonly biz_user_id: FieldRef<"OauthAccountModel", 'String'>
    readonly client_id: FieldRef<"OauthAccountModel", 'String'>
    readonly name: FieldRef<"OauthAccountModel", 'String'>
    readonly email: FieldRef<"OauthAccountModel", 'String'>
    readonly phone: FieldRef<"OauthAccountModel", 'String'>
    readonly profile_image_url: FieldRef<"OauthAccountModel", 'String'>
    readonly birth: FieldRef<"OauthAccountModel", 'String'>
    readonly gender: FieldRef<"OauthAccountModel", 'GenderType'>
    readonly address_zone_code: FieldRef<"OauthAccountModel", 'String'>
    readonly address_road: FieldRef<"OauthAccountModel", 'String'>
    readonly address_detail: FieldRef<"OauthAccountModel", 'String'>
    readonly address_extra: FieldRef<"OauthAccountModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * OauthAccountModel findUnique
   */
  export type OauthAccountModelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccountModel to fetch.
     */
    where: OauthAccountModelWhereUniqueInput
  }


  /**
   * OauthAccountModel findUniqueOrThrow
   */
  export type OauthAccountModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccountModel to fetch.
     */
    where: OauthAccountModelWhereUniqueInput
  }


  /**
   * OauthAccountModel findFirst
   */
  export type OauthAccountModelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccountModel to fetch.
     */
    where?: OauthAccountModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccountModels to fetch.
     */
    orderBy?: OauthAccountModelOrderByWithRelationInput | OauthAccountModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccountModels.
     */
    cursor?: OauthAccountModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccountModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccountModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccountModels.
     */
    distinct?: OauthAccountModelScalarFieldEnum | OauthAccountModelScalarFieldEnum[]
  }


  /**
   * OauthAccountModel findFirstOrThrow
   */
  export type OauthAccountModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccountModel to fetch.
     */
    where?: OauthAccountModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccountModels to fetch.
     */
    orderBy?: OauthAccountModelOrderByWithRelationInput | OauthAccountModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccountModels.
     */
    cursor?: OauthAccountModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccountModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccountModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccountModels.
     */
    distinct?: OauthAccountModelScalarFieldEnum | OauthAccountModelScalarFieldEnum[]
  }


  /**
   * OauthAccountModel findMany
   */
  export type OauthAccountModelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccountModels to fetch.
     */
    where?: OauthAccountModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccountModels to fetch.
     */
    orderBy?: OauthAccountModelOrderByWithRelationInput | OauthAccountModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OauthAccountModels.
     */
    cursor?: OauthAccountModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccountModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccountModels.
     */
    skip?: number
    distinct?: OauthAccountModelScalarFieldEnum | OauthAccountModelScalarFieldEnum[]
  }


  /**
   * OauthAccountModel create
   */
  export type OauthAccountModelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * The data needed to create a OauthAccountModel.
     */
    data: XOR<OauthAccountModelCreateInput, OauthAccountModelUncheckedCreateInput>
  }


  /**
   * OauthAccountModel createMany
   */
  export type OauthAccountModelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OauthAccountModels.
     */
    data: OauthAccountModelCreateManyInput | OauthAccountModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OauthAccountModel update
   */
  export type OauthAccountModelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * The data needed to update a OauthAccountModel.
     */
    data: XOR<OauthAccountModelUpdateInput, OauthAccountModelUncheckedUpdateInput>
    /**
     * Choose, which OauthAccountModel to update.
     */
    where: OauthAccountModelWhereUniqueInput
  }


  /**
   * OauthAccountModel updateMany
   */
  export type OauthAccountModelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OauthAccountModels.
     */
    data: XOR<OauthAccountModelUpdateManyMutationInput, OauthAccountModelUncheckedUpdateManyInput>
    /**
     * Filter which OauthAccountModels to update
     */
    where?: OauthAccountModelWhereInput
  }


  /**
   * OauthAccountModel upsert
   */
  export type OauthAccountModelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * The filter to search for the OauthAccountModel to update in case it exists.
     */
    where: OauthAccountModelWhereUniqueInput
    /**
     * In case the OauthAccountModel found by the `where` argument doesn't exist, create a new OauthAccountModel with this data.
     */
    create: XOR<OauthAccountModelCreateInput, OauthAccountModelUncheckedCreateInput>
    /**
     * In case the OauthAccountModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OauthAccountModelUpdateInput, OauthAccountModelUncheckedUpdateInput>
  }


  /**
   * OauthAccountModel delete
   */
  export type OauthAccountModelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
    /**
     * Filter which OauthAccountModel to delete.
     */
    where: OauthAccountModelWhereUniqueInput
  }


  /**
   * OauthAccountModel deleteMany
   */
  export type OauthAccountModelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthAccountModels to delete
     */
    where?: OauthAccountModelWhereInput
  }


  /**
   * OauthAccountModel.client
   */
  export type OauthAccountModel$clientArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientModel
     */
    select?: ClientModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientModelInclude<ExtArgs> | null
    where?: ClientModelWhereInput
  }


  /**
   * OauthAccountModel.biz_user
   */
  export type OauthAccountModel$biz_userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BIZUserModel
     */
    select?: BIZUserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BIZUserModelInclude<ExtArgs> | null
    where?: BIZUserModelWhereInput
  }


  /**
   * OauthAccountModel without action
   */
  export type OauthAccountModelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccountModel
     */
    select?: OauthAccountModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccountModelInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TermsModelScalarFieldEnum: {
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

  export type TermsModelScalarFieldEnum = (typeof TermsModelScalarFieldEnum)[keyof typeof TermsModelScalarFieldEnum]


  export const TermsAgreementModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    terms_id: 'terms_id',
    user_id: 'user_id'
  };

  export type TermsAgreementModelScalarFieldEnum = (typeof TermsAgreementModelScalarFieldEnum)[keyof typeof TermsAgreementModelScalarFieldEnum]


  export const UserModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name',
    email: 'email'
  };

  export type UserModelScalarFieldEnum = (typeof UserModelScalarFieldEnum)[keyof typeof UserModelScalarFieldEnum]


  export const ClientModelScalarFieldEnum: {
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

  export type ClientModelScalarFieldEnum = (typeof ClientModelScalarFieldEnum)[keyof typeof ClientModelScalarFieldEnum]


  export const BIZUserModelScalarFieldEnum: {
    id: 'id',
    is_verified: 'is_verified',
    introduction_title: 'introduction_title',
    introduction_content: 'introduction_content',
    phone: 'phone',
    profile_image_url: 'profile_image_url'
  };

  export type BIZUserModelScalarFieldEnum = (typeof BIZUserModelScalarFieldEnum)[keyof typeof BIZUserModelScalarFieldEnum]


  export const BIZCertificationImageModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    biz_user_id: 'biz_user_id',
    url: 'url',
    access_type: 'access_type'
  };

  export type BIZCertificationImageModelScalarFieldEnum = (typeof BIZCertificationImageModelScalarFieldEnum)[keyof typeof BIZCertificationImageModelScalarFieldEnum]


  export const REAgentModelScalarFieldEnum: {
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

  export type REAgentModelScalarFieldEnum = (typeof REAgentModelScalarFieldEnum)[keyof typeof REAgentModelScalarFieldEnum]


  export const REExpertiseModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name'
  };

  export type REExpertiseModelScalarFieldEnum = (typeof REExpertiseModelScalarFieldEnum)[keyof typeof REExpertiseModelScalarFieldEnum]


  export const HSProviderModelScalarFieldEnum: {
    id: 'id',
    address_zone_code: 'address_zone_code',
    address_road: 'address_road',
    address_detail: 'address_detail',
    address_extra: 'address_extra',
    biz_phone: 'biz_phone',
    biz_registration_number: 'biz_registration_number',
    biz_open_date: 'biz_open_date'
  };

  export type HSProviderModelScalarFieldEnum = (typeof HSProviderModelScalarFieldEnum)[keyof typeof HSProviderModelScalarFieldEnum]


  export const HSSubExpertiseModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name',
    super_expertise_id: 'super_expertise_id'
  };

  export type HSSubExpertiseModelScalarFieldEnum = (typeof HSSubExpertiseModelScalarFieldEnum)[keyof typeof HSSubExpertiseModelScalarFieldEnum]


  export const HSSuperExpertiseModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name'
  };

  export type HSSuperExpertiseModelScalarFieldEnum = (typeof HSSuperExpertiseModelScalarFieldEnum)[keyof typeof HSSuperExpertiseModelScalarFieldEnum]


  export const HSSubExpertiseRelationModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    hs_provider_id: 'hs_provider_id',
    sub_expertise_id: 'sub_expertise_id'
  };

  export type HSSubExpertiseRelationModelScalarFieldEnum = (typeof HSSubExpertiseRelationModelScalarFieldEnum)[keyof typeof HSSubExpertiseRelationModelScalarFieldEnum]


  export const REPortfolioModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    re_agent_id: 're_agent_id',
    title: 'title',
    url: 'url',
    is_visible: 'is_visible'
  };

  export type REPortfolioModelScalarFieldEnum = (typeof REPortfolioModelScalarFieldEnum)[keyof typeof REPortfolioModelScalarFieldEnum]


  export const HSPortfolioModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    hs_provider_id: 'hs_provider_id',
    title: 'title',
    url: 'url',
    is_visible: 'is_visible'
  };

  export type HSPortfolioModelScalarFieldEnum = (typeof HSPortfolioModelScalarFieldEnum)[keyof typeof HSPortfolioModelScalarFieldEnum]


  export const OauthAccountModelScalarFieldEnum: {
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

  export type OauthAccountModelScalarFieldEnum = (typeof OauthAccountModelScalarFieldEnum)[keyof typeof OauthAccountModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TermsType'
   */
  export type EnumTermsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermsType'>
    


  /**
   * Reference to a field of type 'TermsType[]'
   */
  export type ListEnumTermsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermsType[]'>
    


  /**
   * Reference to a field of type 'GenderType'
   */
  export type EnumGenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderType'>
    


  /**
   * Reference to a field of type 'GenderType[]'
   */
  export type ListEnumGenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderType[]'>
    


  /**
   * Reference to a field of type 'ImageAccessType'
   */
  export type EnumImageAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageAccessType'>
    


  /**
   * Reference to a field of type 'ImageAccessType[]'
   */
  export type ListEnumImageAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageAccessType[]'>
    


  /**
   * Reference to a field of type 'OauthType'
   */
  export type EnumOauthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OauthType'>
    


  /**
   * Reference to a field of type 'OauthType[]'
   */
  export type ListEnumOauthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OauthType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TermsModelWhereInput = {
    AND?: TermsModelWhereInput | TermsModelWhereInput[]
    OR?: TermsModelWhereInput[]
    NOT?: TermsModelWhereInput | TermsModelWhereInput[]
    id?: StringFilter<"TermsModel"> | string
    created_at?: DateTimeFilter<"TermsModel"> | Date | string
    updated_at?: DateTimeFilter<"TermsModel"> | Date | string
    is_deleted?: BoolFilter<"TermsModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"TermsModel"> | Date | string | null
    title?: StringFilter<"TermsModel"> | string
    version?: StringFilter<"TermsModel"> | string
    url?: StringFilter<"TermsModel"> | string
    is_required?: BoolFilter<"TermsModel"> | boolean
    type?: EnumTermsTypeFilter<"TermsModel"> | TermsType
    agreements?: TermsAgreementModelListRelationFilter
  }

  export type TermsModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    title?: SortOrder
    version?: SortOrder
    url?: SortOrder
    is_required?: SortOrder
    type?: SortOrder
    agreements?: TermsAgreementModelOrderByRelationAggregateInput
  }

  export type TermsModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TermsModelWhereInput | TermsModelWhereInput[]
    OR?: TermsModelWhereInput[]
    NOT?: TermsModelWhereInput | TermsModelWhereInput[]
    created_at?: DateTimeFilter<"TermsModel"> | Date | string
    updated_at?: DateTimeFilter<"TermsModel"> | Date | string
    is_deleted?: BoolFilter<"TermsModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"TermsModel"> | Date | string | null
    title?: StringFilter<"TermsModel"> | string
    version?: StringFilter<"TermsModel"> | string
    url?: StringFilter<"TermsModel"> | string
    is_required?: BoolFilter<"TermsModel"> | boolean
    type?: EnumTermsTypeFilter<"TermsModel"> | TermsType
    agreements?: TermsAgreementModelListRelationFilter
  }, "id">

  export type TermsModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    title?: SortOrder
    version?: SortOrder
    url?: SortOrder
    is_required?: SortOrder
    type?: SortOrder
    _count?: TermsModelCountOrderByAggregateInput
    _max?: TermsModelMaxOrderByAggregateInput
    _min?: TermsModelMinOrderByAggregateInput
  }

  export type TermsModelScalarWhereWithAggregatesInput = {
    AND?: TermsModelScalarWhereWithAggregatesInput | TermsModelScalarWhereWithAggregatesInput[]
    OR?: TermsModelScalarWhereWithAggregatesInput[]
    NOT?: TermsModelScalarWhereWithAggregatesInput | TermsModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TermsModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"TermsModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TermsModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"TermsModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"TermsModel"> | Date | string | null
    title?: StringWithAggregatesFilter<"TermsModel"> | string
    version?: StringWithAggregatesFilter<"TermsModel"> | string
    url?: StringWithAggregatesFilter<"TermsModel"> | string
    is_required?: BoolWithAggregatesFilter<"TermsModel"> | boolean
    type?: EnumTermsTypeWithAggregatesFilter<"TermsModel"> | TermsType
  }

  export type TermsAgreementModelWhereInput = {
    AND?: TermsAgreementModelWhereInput | TermsAgreementModelWhereInput[]
    OR?: TermsAgreementModelWhereInput[]
    NOT?: TermsAgreementModelWhereInput | TermsAgreementModelWhereInput[]
    id?: StringFilter<"TermsAgreementModel"> | string
    created_at?: DateTimeFilter<"TermsAgreementModel"> | Date | string
    updated_at?: DateTimeFilter<"TermsAgreementModel"> | Date | string
    is_deleted?: BoolFilter<"TermsAgreementModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"TermsAgreementModel"> | Date | string | null
    terms_id?: StringFilter<"TermsAgreementModel"> | string
    user_id?: StringFilter<"TermsAgreementModel"> | string
    terms?: XOR<TermsModelRelationFilter, TermsModelWhereInput>
    user?: XOR<UserModelRelationFilter, UserModelWhereInput>
  }

  export type TermsAgreementModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    terms_id?: SortOrder
    user_id?: SortOrder
    terms?: TermsModelOrderByWithRelationInput
    user?: UserModelOrderByWithRelationInput
  }

  export type TermsAgreementModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_terms_id?: TermsAgreementModelUser_idTerms_idCompoundUniqueInput
    AND?: TermsAgreementModelWhereInput | TermsAgreementModelWhereInput[]
    OR?: TermsAgreementModelWhereInput[]
    NOT?: TermsAgreementModelWhereInput | TermsAgreementModelWhereInput[]
    created_at?: DateTimeFilter<"TermsAgreementModel"> | Date | string
    updated_at?: DateTimeFilter<"TermsAgreementModel"> | Date | string
    is_deleted?: BoolFilter<"TermsAgreementModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"TermsAgreementModel"> | Date | string | null
    terms_id?: StringFilter<"TermsAgreementModel"> | string
    user_id?: StringFilter<"TermsAgreementModel"> | string
    terms?: XOR<TermsModelRelationFilter, TermsModelWhereInput>
    user?: XOR<UserModelRelationFilter, UserModelWhereInput>
  }, "id" | "user_id_terms_id">

  export type TermsAgreementModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    terms_id?: SortOrder
    user_id?: SortOrder
    _count?: TermsAgreementModelCountOrderByAggregateInput
    _max?: TermsAgreementModelMaxOrderByAggregateInput
    _min?: TermsAgreementModelMinOrderByAggregateInput
  }

  export type TermsAgreementModelScalarWhereWithAggregatesInput = {
    AND?: TermsAgreementModelScalarWhereWithAggregatesInput | TermsAgreementModelScalarWhereWithAggregatesInput[]
    OR?: TermsAgreementModelScalarWhereWithAggregatesInput[]
    NOT?: TermsAgreementModelScalarWhereWithAggregatesInput | TermsAgreementModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TermsAgreementModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"TermsAgreementModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TermsAgreementModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"TermsAgreementModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"TermsAgreementModel"> | Date | string | null
    terms_id?: StringWithAggregatesFilter<"TermsAgreementModel"> | string
    user_id?: StringWithAggregatesFilter<"TermsAgreementModel"> | string
  }

  export type UserModelWhereInput = {
    AND?: UserModelWhereInput | UserModelWhereInput[]
    OR?: UserModelWhereInput[]
    NOT?: UserModelWhereInput | UserModelWhereInput[]
    id?: StringFilter<"UserModel"> | string
    created_at?: DateTimeFilter<"UserModel"> | Date | string
    updated_at?: DateTimeFilter<"UserModel"> | Date | string
    is_deleted?: BoolFilter<"UserModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"UserModel"> | Date | string | null
    name?: StringFilter<"UserModel"> | string
    email?: StringNullableFilter<"UserModel"> | string | null
    client?: XOR<ClientModelNullableRelationFilter, ClientModelWhereInput> | null
    biz_user?: XOR<BIZUserModelNullableRelationFilter, BIZUserModelWhereInput> | null
    terms_agreements?: TermsAgreementModelListRelationFilter
  }

  export type UserModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    client?: ClientModelOrderByWithRelationInput
    biz_user?: BIZUserModelOrderByWithRelationInput
    terms_agreements?: TermsAgreementModelOrderByRelationAggregateInput
  }

  export type UserModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserModelWhereInput | UserModelWhereInput[]
    OR?: UserModelWhereInput[]
    NOT?: UserModelWhereInput | UserModelWhereInput[]
    created_at?: DateTimeFilter<"UserModel"> | Date | string
    updated_at?: DateTimeFilter<"UserModel"> | Date | string
    is_deleted?: BoolFilter<"UserModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"UserModel"> | Date | string | null
    name?: StringFilter<"UserModel"> | string
    email?: StringNullableFilter<"UserModel"> | string | null
    client?: XOR<ClientModelNullableRelationFilter, ClientModelWhereInput> | null
    biz_user?: XOR<BIZUserModelNullableRelationFilter, BIZUserModelWhereInput> | null
    terms_agreements?: TermsAgreementModelListRelationFilter
  }, "id">

  export type UserModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: UserModelCountOrderByAggregateInput
    _max?: UserModelMaxOrderByAggregateInput
    _min?: UserModelMinOrderByAggregateInput
  }

  export type UserModelScalarWhereWithAggregatesInput = {
    AND?: UserModelScalarWhereWithAggregatesInput | UserModelScalarWhereWithAggregatesInput[]
    OR?: UserModelScalarWhereWithAggregatesInput[]
    NOT?: UserModelScalarWhereWithAggregatesInput | UserModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"UserModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"UserModel"> | Date | string | null
    name?: StringWithAggregatesFilter<"UserModel"> | string
    email?: StringNullableWithAggregatesFilter<"UserModel"> | string | null
  }

  export type ClientModelWhereInput = {
    AND?: ClientModelWhereInput | ClientModelWhereInput[]
    OR?: ClientModelWhereInput[]
    NOT?: ClientModelWhereInput | ClientModelWhereInput[]
    id?: StringFilter<"ClientModel"> | string
    birth?: DateTimeNullableFilter<"ClientModel"> | Date | string | null
    gender?: EnumGenderTypeNullableFilter<"ClientModel"> | GenderType | null
    phone?: StringNullableFilter<"ClientModel"> | string | null
    address_zone_code?: StringNullableFilter<"ClientModel"> | string | null
    address_road?: StringNullableFilter<"ClientModel"> | string | null
    address_detail?: StringNullableFilter<"ClientModel"> | string | null
    address_extra?: StringNullableFilter<"ClientModel"> | string | null
    profile_image_url?: StringNullableFilter<"ClientModel"> | string | null
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    oauth_accounts?: OauthAccountModelListRelationFilter
  }

  export type ClientModelOrderByWithRelationInput = {
    id?: SortOrder
    birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address_zone_code?: SortOrderInput | SortOrder
    address_road?: SortOrderInput | SortOrder
    address_detail?: SortOrderInput | SortOrder
    address_extra?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    base?: UserModelOrderByWithRelationInput
    oauth_accounts?: OauthAccountModelOrderByRelationAggregateInput
  }

  export type ClientModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientModelWhereInput | ClientModelWhereInput[]
    OR?: ClientModelWhereInput[]
    NOT?: ClientModelWhereInput | ClientModelWhereInput[]
    birth?: DateTimeNullableFilter<"ClientModel"> | Date | string | null
    gender?: EnumGenderTypeNullableFilter<"ClientModel"> | GenderType | null
    phone?: StringNullableFilter<"ClientModel"> | string | null
    address_zone_code?: StringNullableFilter<"ClientModel"> | string | null
    address_road?: StringNullableFilter<"ClientModel"> | string | null
    address_detail?: StringNullableFilter<"ClientModel"> | string | null
    address_extra?: StringNullableFilter<"ClientModel"> | string | null
    profile_image_url?: StringNullableFilter<"ClientModel"> | string | null
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    oauth_accounts?: OauthAccountModelListRelationFilter
  }, "id">

  export type ClientModelOrderByWithAggregationInput = {
    id?: SortOrder
    birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address_zone_code?: SortOrderInput | SortOrder
    address_road?: SortOrderInput | SortOrder
    address_detail?: SortOrderInput | SortOrder
    address_extra?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    _count?: ClientModelCountOrderByAggregateInput
    _max?: ClientModelMaxOrderByAggregateInput
    _min?: ClientModelMinOrderByAggregateInput
  }

  export type ClientModelScalarWhereWithAggregatesInput = {
    AND?: ClientModelScalarWhereWithAggregatesInput | ClientModelScalarWhereWithAggregatesInput[]
    OR?: ClientModelScalarWhereWithAggregatesInput[]
    NOT?: ClientModelScalarWhereWithAggregatesInput | ClientModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientModel"> | string
    birth?: DateTimeNullableWithAggregatesFilter<"ClientModel"> | Date | string | null
    gender?: EnumGenderTypeNullableWithAggregatesFilter<"ClientModel"> | GenderType | null
    phone?: StringNullableWithAggregatesFilter<"ClientModel"> | string | null
    address_zone_code?: StringNullableWithAggregatesFilter<"ClientModel"> | string | null
    address_road?: StringNullableWithAggregatesFilter<"ClientModel"> | string | null
    address_detail?: StringNullableWithAggregatesFilter<"ClientModel"> | string | null
    address_extra?: StringNullableWithAggregatesFilter<"ClientModel"> | string | null
    profile_image_url?: StringNullableWithAggregatesFilter<"ClientModel"> | string | null
  }

  export type BIZUserModelWhereInput = {
    AND?: BIZUserModelWhereInput | BIZUserModelWhereInput[]
    OR?: BIZUserModelWhereInput[]
    NOT?: BIZUserModelWhereInput | BIZUserModelWhereInput[]
    id?: StringFilter<"BIZUserModel"> | string
    is_verified?: BoolFilter<"BIZUserModel"> | boolean
    introduction_title?: StringFilter<"BIZUserModel"> | string
    introduction_content?: StringFilter<"BIZUserModel"> | string
    phone?: StringFilter<"BIZUserModel"> | string
    profile_image_url?: StringFilter<"BIZUserModel"> | string
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    re_agent?: XOR<REAgentModelNullableRelationFilter, REAgentModelWhereInput> | null
    hs_provider?: XOR<HSProviderModelNullableRelationFilter, HSProviderModelWhereInput> | null
    oauth_accounts?: OauthAccountModelListRelationFilter
    biz_certification_images?: BIZCertificationImageModelListRelationFilter
  }

  export type BIZUserModelOrderByWithRelationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    base?: UserModelOrderByWithRelationInput
    re_agent?: REAgentModelOrderByWithRelationInput
    hs_provider?: HSProviderModelOrderByWithRelationInput
    oauth_accounts?: OauthAccountModelOrderByRelationAggregateInput
    biz_certification_images?: BIZCertificationImageModelOrderByRelationAggregateInput
  }

  export type BIZUserModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BIZUserModelWhereInput | BIZUserModelWhereInput[]
    OR?: BIZUserModelWhereInput[]
    NOT?: BIZUserModelWhereInput | BIZUserModelWhereInput[]
    is_verified?: BoolFilter<"BIZUserModel"> | boolean
    introduction_title?: StringFilter<"BIZUserModel"> | string
    introduction_content?: StringFilter<"BIZUserModel"> | string
    phone?: StringFilter<"BIZUserModel"> | string
    profile_image_url?: StringFilter<"BIZUserModel"> | string
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    re_agent?: XOR<REAgentModelNullableRelationFilter, REAgentModelWhereInput> | null
    hs_provider?: XOR<HSProviderModelNullableRelationFilter, HSProviderModelWhereInput> | null
    oauth_accounts?: OauthAccountModelListRelationFilter
    biz_certification_images?: BIZCertificationImageModelListRelationFilter
  }, "id">

  export type BIZUserModelOrderByWithAggregationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    _count?: BIZUserModelCountOrderByAggregateInput
    _max?: BIZUserModelMaxOrderByAggregateInput
    _min?: BIZUserModelMinOrderByAggregateInput
  }

  export type BIZUserModelScalarWhereWithAggregatesInput = {
    AND?: BIZUserModelScalarWhereWithAggregatesInput | BIZUserModelScalarWhereWithAggregatesInput[]
    OR?: BIZUserModelScalarWhereWithAggregatesInput[]
    NOT?: BIZUserModelScalarWhereWithAggregatesInput | BIZUserModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BIZUserModel"> | string
    is_verified?: BoolWithAggregatesFilter<"BIZUserModel"> | boolean
    introduction_title?: StringWithAggregatesFilter<"BIZUserModel"> | string
    introduction_content?: StringWithAggregatesFilter<"BIZUserModel"> | string
    phone?: StringWithAggregatesFilter<"BIZUserModel"> | string
    profile_image_url?: StringWithAggregatesFilter<"BIZUserModel"> | string
  }

  export type BIZCertificationImageModelWhereInput = {
    AND?: BIZCertificationImageModelWhereInput | BIZCertificationImageModelWhereInput[]
    OR?: BIZCertificationImageModelWhereInput[]
    NOT?: BIZCertificationImageModelWhereInput | BIZCertificationImageModelWhereInput[]
    id?: StringFilter<"BIZCertificationImageModel"> | string
    created_at?: DateTimeFilter<"BIZCertificationImageModel"> | Date | string
    updated_at?: DateTimeFilter<"BIZCertificationImageModel"> | Date | string
    is_deleted?: BoolFilter<"BIZCertificationImageModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"BIZCertificationImageModel"> | Date | string | null
    biz_user_id?: StringFilter<"BIZCertificationImageModel"> | string
    url?: StringFilter<"BIZCertificationImageModel"> | string
    access_type?: EnumImageAccessTypeFilter<"BIZCertificationImageModel"> | ImageAccessType
    biz_user?: XOR<BIZUserModelRelationFilter, BIZUserModelWhereInput>
  }

  export type BIZCertificationImageModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    biz_user_id?: SortOrder
    url?: SortOrder
    access_type?: SortOrder
    biz_user?: BIZUserModelOrderByWithRelationInput
  }

  export type BIZCertificationImageModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BIZCertificationImageModelWhereInput | BIZCertificationImageModelWhereInput[]
    OR?: BIZCertificationImageModelWhereInput[]
    NOT?: BIZCertificationImageModelWhereInput | BIZCertificationImageModelWhereInput[]
    created_at?: DateTimeFilter<"BIZCertificationImageModel"> | Date | string
    updated_at?: DateTimeFilter<"BIZCertificationImageModel"> | Date | string
    is_deleted?: BoolFilter<"BIZCertificationImageModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"BIZCertificationImageModel"> | Date | string | null
    biz_user_id?: StringFilter<"BIZCertificationImageModel"> | string
    url?: StringFilter<"BIZCertificationImageModel"> | string
    access_type?: EnumImageAccessTypeFilter<"BIZCertificationImageModel"> | ImageAccessType
    biz_user?: XOR<BIZUserModelRelationFilter, BIZUserModelWhereInput>
  }, "id">

  export type BIZCertificationImageModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    biz_user_id?: SortOrder
    url?: SortOrder
    access_type?: SortOrder
    _count?: BIZCertificationImageModelCountOrderByAggregateInput
    _max?: BIZCertificationImageModelMaxOrderByAggregateInput
    _min?: BIZCertificationImageModelMinOrderByAggregateInput
  }

  export type BIZCertificationImageModelScalarWhereWithAggregatesInput = {
    AND?: BIZCertificationImageModelScalarWhereWithAggregatesInput | BIZCertificationImageModelScalarWhereWithAggregatesInput[]
    OR?: BIZCertificationImageModelScalarWhereWithAggregatesInput[]
    NOT?: BIZCertificationImageModelScalarWhereWithAggregatesInput | BIZCertificationImageModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BIZCertificationImageModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"BIZCertificationImageModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BIZCertificationImageModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"BIZCertificationImageModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"BIZCertificationImageModel"> | Date | string | null
    biz_user_id?: StringWithAggregatesFilter<"BIZCertificationImageModel"> | string
    url?: StringWithAggregatesFilter<"BIZCertificationImageModel"> | string
    access_type?: EnumImageAccessTypeWithAggregatesFilter<"BIZCertificationImageModel"> | ImageAccessType
  }

  export type REAgentModelWhereInput = {
    AND?: REAgentModelWhereInput | REAgentModelWhereInput[]
    OR?: REAgentModelWhereInput[]
    NOT?: REAgentModelWhereInput | REAgentModelWhereInput[]
    id?: StringFilter<"REAgentModel"> | string
    is_licensed?: BoolFilter<"REAgentModel"> | boolean
    expertise_id?: StringFilter<"REAgentModel"> | string
    re_number?: StringFilter<"REAgentModel"> | string
    re_name?: StringFilter<"REAgentModel"> | string
    re_phone?: StringFilter<"REAgentModel"> | string
    re_licensed_agent_name?: StringFilter<"REAgentModel"> | string
    re_address_zone_code?: StringFilter<"REAgentModel"> | string
    re_address_road?: StringFilter<"REAgentModel"> | string
    re_address_detail?: StringNullableFilter<"REAgentModel"> | string | null
    re_address_extra?: StringNullableFilter<"REAgentModel"> | string | null
    biz_open_date?: DateTimeFilter<"REAgentModel"> | Date | string
    base?: XOR<BIZUserModelRelationFilter, BIZUserModelWhereInput>
    expertise?: XOR<REExpertiseModelRelationFilter, REExpertiseModelWhereInput>
    portfolios?: REPortfolioModelListRelationFilter
  }

  export type REAgentModelOrderByWithRelationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    expertise_id?: SortOrder
    re_number?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_zone_code?: SortOrder
    re_address_road?: SortOrder
    re_address_detail?: SortOrderInput | SortOrder
    re_address_extra?: SortOrderInput | SortOrder
    biz_open_date?: SortOrder
    base?: BIZUserModelOrderByWithRelationInput
    expertise?: REExpertiseModelOrderByWithRelationInput
    portfolios?: REPortfolioModelOrderByRelationAggregateInput
  }

  export type REAgentModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: REAgentModelWhereInput | REAgentModelWhereInput[]
    OR?: REAgentModelWhereInput[]
    NOT?: REAgentModelWhereInput | REAgentModelWhereInput[]
    is_licensed?: BoolFilter<"REAgentModel"> | boolean
    expertise_id?: StringFilter<"REAgentModel"> | string
    re_number?: StringFilter<"REAgentModel"> | string
    re_name?: StringFilter<"REAgentModel"> | string
    re_phone?: StringFilter<"REAgentModel"> | string
    re_licensed_agent_name?: StringFilter<"REAgentModel"> | string
    re_address_zone_code?: StringFilter<"REAgentModel"> | string
    re_address_road?: StringFilter<"REAgentModel"> | string
    re_address_detail?: StringNullableFilter<"REAgentModel"> | string | null
    re_address_extra?: StringNullableFilter<"REAgentModel"> | string | null
    biz_open_date?: DateTimeFilter<"REAgentModel"> | Date | string
    base?: XOR<BIZUserModelRelationFilter, BIZUserModelWhereInput>
    expertise?: XOR<REExpertiseModelRelationFilter, REExpertiseModelWhereInput>
    portfolios?: REPortfolioModelListRelationFilter
  }, "id">

  export type REAgentModelOrderByWithAggregationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    expertise_id?: SortOrder
    re_number?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_zone_code?: SortOrder
    re_address_road?: SortOrder
    re_address_detail?: SortOrderInput | SortOrder
    re_address_extra?: SortOrderInput | SortOrder
    biz_open_date?: SortOrder
    _count?: REAgentModelCountOrderByAggregateInput
    _max?: REAgentModelMaxOrderByAggregateInput
    _min?: REAgentModelMinOrderByAggregateInput
  }

  export type REAgentModelScalarWhereWithAggregatesInput = {
    AND?: REAgentModelScalarWhereWithAggregatesInput | REAgentModelScalarWhereWithAggregatesInput[]
    OR?: REAgentModelScalarWhereWithAggregatesInput[]
    NOT?: REAgentModelScalarWhereWithAggregatesInput | REAgentModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"REAgentModel"> | string
    is_licensed?: BoolWithAggregatesFilter<"REAgentModel"> | boolean
    expertise_id?: StringWithAggregatesFilter<"REAgentModel"> | string
    re_number?: StringWithAggregatesFilter<"REAgentModel"> | string
    re_name?: StringWithAggregatesFilter<"REAgentModel"> | string
    re_phone?: StringWithAggregatesFilter<"REAgentModel"> | string
    re_licensed_agent_name?: StringWithAggregatesFilter<"REAgentModel"> | string
    re_address_zone_code?: StringWithAggregatesFilter<"REAgentModel"> | string
    re_address_road?: StringWithAggregatesFilter<"REAgentModel"> | string
    re_address_detail?: StringNullableWithAggregatesFilter<"REAgentModel"> | string | null
    re_address_extra?: StringNullableWithAggregatesFilter<"REAgentModel"> | string | null
    biz_open_date?: DateTimeWithAggregatesFilter<"REAgentModel"> | Date | string
  }

  export type REExpertiseModelWhereInput = {
    AND?: REExpertiseModelWhereInput | REExpertiseModelWhereInput[]
    OR?: REExpertiseModelWhereInput[]
    NOT?: REExpertiseModelWhereInput | REExpertiseModelWhereInput[]
    id?: StringFilter<"REExpertiseModel"> | string
    created_at?: DateTimeFilter<"REExpertiseModel"> | Date | string
    updated_at?: DateTimeFilter<"REExpertiseModel"> | Date | string
    is_deleted?: BoolFilter<"REExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"REExpertiseModel"> | Date | string | null
    name?: StringFilter<"REExpertiseModel"> | string
    re_agents?: REAgentModelListRelationFilter
  }

  export type REExpertiseModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    re_agents?: REAgentModelOrderByRelationAggregateInput
  }

  export type REExpertiseModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: REExpertiseModelWhereInput | REExpertiseModelWhereInput[]
    OR?: REExpertiseModelWhereInput[]
    NOT?: REExpertiseModelWhereInput | REExpertiseModelWhereInput[]
    created_at?: DateTimeFilter<"REExpertiseModel"> | Date | string
    updated_at?: DateTimeFilter<"REExpertiseModel"> | Date | string
    is_deleted?: BoolFilter<"REExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"REExpertiseModel"> | Date | string | null
    re_agents?: REAgentModelListRelationFilter
  }, "id" | "name">

  export type REExpertiseModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: REExpertiseModelCountOrderByAggregateInput
    _max?: REExpertiseModelMaxOrderByAggregateInput
    _min?: REExpertiseModelMinOrderByAggregateInput
  }

  export type REExpertiseModelScalarWhereWithAggregatesInput = {
    AND?: REExpertiseModelScalarWhereWithAggregatesInput | REExpertiseModelScalarWhereWithAggregatesInput[]
    OR?: REExpertiseModelScalarWhereWithAggregatesInput[]
    NOT?: REExpertiseModelScalarWhereWithAggregatesInput | REExpertiseModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"REExpertiseModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"REExpertiseModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"REExpertiseModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"REExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"REExpertiseModel"> | Date | string | null
    name?: StringWithAggregatesFilter<"REExpertiseModel"> | string
  }

  export type HSProviderModelWhereInput = {
    AND?: HSProviderModelWhereInput | HSProviderModelWhereInput[]
    OR?: HSProviderModelWhereInput[]
    NOT?: HSProviderModelWhereInput | HSProviderModelWhereInput[]
    id?: StringFilter<"HSProviderModel"> | string
    address_zone_code?: StringFilter<"HSProviderModel"> | string
    address_road?: StringFilter<"HSProviderModel"> | string
    address_detail?: StringNullableFilter<"HSProviderModel"> | string | null
    address_extra?: StringNullableFilter<"HSProviderModel"> | string | null
    biz_phone?: StringFilter<"HSProviderModel"> | string
    biz_registration_number?: StringFilter<"HSProviderModel"> | string
    biz_open_date?: DateTimeFilter<"HSProviderModel"> | Date | string
    base?: XOR<BIZUserModelRelationFilter, BIZUserModelWhereInput>
    expertise_relation?: HSSubExpertiseRelationModelListRelationFilter
    portfolios?: HSPortfolioModelListRelationFilter
  }

  export type HSProviderModelOrderByWithRelationInput = {
    id?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrderInput | SortOrder
    address_extra?: SortOrderInput | SortOrder
    biz_phone?: SortOrder
    biz_registration_number?: SortOrder
    biz_open_date?: SortOrder
    base?: BIZUserModelOrderByWithRelationInput
    expertise_relation?: HSSubExpertiseRelationModelOrderByRelationAggregateInput
    portfolios?: HSPortfolioModelOrderByRelationAggregateInput
  }

  export type HSProviderModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HSProviderModelWhereInput | HSProviderModelWhereInput[]
    OR?: HSProviderModelWhereInput[]
    NOT?: HSProviderModelWhereInput | HSProviderModelWhereInput[]
    address_zone_code?: StringFilter<"HSProviderModel"> | string
    address_road?: StringFilter<"HSProviderModel"> | string
    address_detail?: StringNullableFilter<"HSProviderModel"> | string | null
    address_extra?: StringNullableFilter<"HSProviderModel"> | string | null
    biz_phone?: StringFilter<"HSProviderModel"> | string
    biz_registration_number?: StringFilter<"HSProviderModel"> | string
    biz_open_date?: DateTimeFilter<"HSProviderModel"> | Date | string
    base?: XOR<BIZUserModelRelationFilter, BIZUserModelWhereInput>
    expertise_relation?: HSSubExpertiseRelationModelListRelationFilter
    portfolios?: HSPortfolioModelListRelationFilter
  }, "id">

  export type HSProviderModelOrderByWithAggregationInput = {
    id?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrderInput | SortOrder
    address_extra?: SortOrderInput | SortOrder
    biz_phone?: SortOrder
    biz_registration_number?: SortOrder
    biz_open_date?: SortOrder
    _count?: HSProviderModelCountOrderByAggregateInput
    _max?: HSProviderModelMaxOrderByAggregateInput
    _min?: HSProviderModelMinOrderByAggregateInput
  }

  export type HSProviderModelScalarWhereWithAggregatesInput = {
    AND?: HSProviderModelScalarWhereWithAggregatesInput | HSProviderModelScalarWhereWithAggregatesInput[]
    OR?: HSProviderModelScalarWhereWithAggregatesInput[]
    NOT?: HSProviderModelScalarWhereWithAggregatesInput | HSProviderModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HSProviderModel"> | string
    address_zone_code?: StringWithAggregatesFilter<"HSProviderModel"> | string
    address_road?: StringWithAggregatesFilter<"HSProviderModel"> | string
    address_detail?: StringNullableWithAggregatesFilter<"HSProviderModel"> | string | null
    address_extra?: StringNullableWithAggregatesFilter<"HSProviderModel"> | string | null
    biz_phone?: StringWithAggregatesFilter<"HSProviderModel"> | string
    biz_registration_number?: StringWithAggregatesFilter<"HSProviderModel"> | string
    biz_open_date?: DateTimeWithAggregatesFilter<"HSProviderModel"> | Date | string
  }

  export type HSSubExpertiseModelWhereInput = {
    AND?: HSSubExpertiseModelWhereInput | HSSubExpertiseModelWhereInput[]
    OR?: HSSubExpertiseModelWhereInput[]
    NOT?: HSSubExpertiseModelWhereInput | HSSubExpertiseModelWhereInput[]
    id?: StringFilter<"HSSubExpertiseModel"> | string
    created_at?: DateTimeFilter<"HSSubExpertiseModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSubExpertiseModel"> | Date | string
    is_deleted?: BoolFilter<"HSSubExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSubExpertiseModel"> | Date | string | null
    name?: StringFilter<"HSSubExpertiseModel"> | string
    super_expertise_id?: StringFilter<"HSSubExpertiseModel"> | string
    relations?: HSSubExpertiseRelationModelListRelationFilter
    super_expertise?: XOR<HSSuperExpertiseModelRelationFilter, HSSuperExpertiseModelWhereInput>
  }

  export type HSSubExpertiseModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    super_expertise_id?: SortOrder
    relations?: HSSubExpertiseRelationModelOrderByRelationAggregateInput
    super_expertise?: HSSuperExpertiseModelOrderByWithRelationInput
  }

  export type HSSubExpertiseModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HSSubExpertiseModelWhereInput | HSSubExpertiseModelWhereInput[]
    OR?: HSSubExpertiseModelWhereInput[]
    NOT?: HSSubExpertiseModelWhereInput | HSSubExpertiseModelWhereInput[]
    created_at?: DateTimeFilter<"HSSubExpertiseModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSubExpertiseModel"> | Date | string
    is_deleted?: BoolFilter<"HSSubExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSubExpertiseModel"> | Date | string | null
    name?: StringFilter<"HSSubExpertiseModel"> | string
    super_expertise_id?: StringFilter<"HSSubExpertiseModel"> | string
    relations?: HSSubExpertiseRelationModelListRelationFilter
    super_expertise?: XOR<HSSuperExpertiseModelRelationFilter, HSSuperExpertiseModelWhereInput>
  }, "id">

  export type HSSubExpertiseModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    super_expertise_id?: SortOrder
    _count?: HSSubExpertiseModelCountOrderByAggregateInput
    _max?: HSSubExpertiseModelMaxOrderByAggregateInput
    _min?: HSSubExpertiseModelMinOrderByAggregateInput
  }

  export type HSSubExpertiseModelScalarWhereWithAggregatesInput = {
    AND?: HSSubExpertiseModelScalarWhereWithAggregatesInput | HSSubExpertiseModelScalarWhereWithAggregatesInput[]
    OR?: HSSubExpertiseModelScalarWhereWithAggregatesInput[]
    NOT?: HSSubExpertiseModelScalarWhereWithAggregatesInput | HSSubExpertiseModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HSSubExpertiseModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"HSSubExpertiseModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HSSubExpertiseModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"HSSubExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"HSSubExpertiseModel"> | Date | string | null
    name?: StringWithAggregatesFilter<"HSSubExpertiseModel"> | string
    super_expertise_id?: StringWithAggregatesFilter<"HSSubExpertiseModel"> | string
  }

  export type HSSuperExpertiseModelWhereInput = {
    AND?: HSSuperExpertiseModelWhereInput | HSSuperExpertiseModelWhereInput[]
    OR?: HSSuperExpertiseModelWhereInput[]
    NOT?: HSSuperExpertiseModelWhereInput | HSSuperExpertiseModelWhereInput[]
    id?: StringFilter<"HSSuperExpertiseModel"> | string
    created_at?: DateTimeFilter<"HSSuperExpertiseModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSuperExpertiseModel"> | Date | string
    is_deleted?: BoolFilter<"HSSuperExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSuperExpertiseModel"> | Date | string | null
    name?: StringFilter<"HSSuperExpertiseModel"> | string
    sub_expertises?: HSSubExpertiseModelListRelationFilter
  }

  export type HSSuperExpertiseModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    sub_expertises?: HSSubExpertiseModelOrderByRelationAggregateInput
  }

  export type HSSuperExpertiseModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: HSSuperExpertiseModelWhereInput | HSSuperExpertiseModelWhereInput[]
    OR?: HSSuperExpertiseModelWhereInput[]
    NOT?: HSSuperExpertiseModelWhereInput | HSSuperExpertiseModelWhereInput[]
    created_at?: DateTimeFilter<"HSSuperExpertiseModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSuperExpertiseModel"> | Date | string
    is_deleted?: BoolFilter<"HSSuperExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSuperExpertiseModel"> | Date | string | null
    sub_expertises?: HSSubExpertiseModelListRelationFilter
  }, "id" | "name">

  export type HSSuperExpertiseModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: HSSuperExpertiseModelCountOrderByAggregateInput
    _max?: HSSuperExpertiseModelMaxOrderByAggregateInput
    _min?: HSSuperExpertiseModelMinOrderByAggregateInput
  }

  export type HSSuperExpertiseModelScalarWhereWithAggregatesInput = {
    AND?: HSSuperExpertiseModelScalarWhereWithAggregatesInput | HSSuperExpertiseModelScalarWhereWithAggregatesInput[]
    OR?: HSSuperExpertiseModelScalarWhereWithAggregatesInput[]
    NOT?: HSSuperExpertiseModelScalarWhereWithAggregatesInput | HSSuperExpertiseModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HSSuperExpertiseModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"HSSuperExpertiseModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HSSuperExpertiseModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"HSSuperExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"HSSuperExpertiseModel"> | Date | string | null
    name?: StringWithAggregatesFilter<"HSSuperExpertiseModel"> | string
  }

  export type HSSubExpertiseRelationModelWhereInput = {
    AND?: HSSubExpertiseRelationModelWhereInput | HSSubExpertiseRelationModelWhereInput[]
    OR?: HSSubExpertiseRelationModelWhereInput[]
    NOT?: HSSubExpertiseRelationModelWhereInput | HSSubExpertiseRelationModelWhereInput[]
    id?: StringFilter<"HSSubExpertiseRelationModel"> | string
    created_at?: DateTimeFilter<"HSSubExpertiseRelationModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSubExpertiseRelationModel"> | Date | string
    is_deleted?: BoolFilter<"HSSubExpertiseRelationModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSubExpertiseRelationModel"> | Date | string | null
    hs_provider_id?: StringFilter<"HSSubExpertiseRelationModel"> | string
    sub_expertise_id?: StringFilter<"HSSubExpertiseRelationModel"> | string
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput>
    sub_expertise?: XOR<HSSubExpertiseModelRelationFilter, HSSubExpertiseModelWhereInput>
  }

  export type HSSubExpertiseRelationModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    hs_provider_id?: SortOrder
    sub_expertise_id?: SortOrder
    hs_provider?: HSProviderModelOrderByWithRelationInput
    sub_expertise?: HSSubExpertiseModelOrderByWithRelationInput
  }

  export type HSSubExpertiseRelationModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hs_provider_id_sub_expertise_id?: HSSubExpertiseRelationModelHs_provider_idSub_expertise_idCompoundUniqueInput
    AND?: HSSubExpertiseRelationModelWhereInput | HSSubExpertiseRelationModelWhereInput[]
    OR?: HSSubExpertiseRelationModelWhereInput[]
    NOT?: HSSubExpertiseRelationModelWhereInput | HSSubExpertiseRelationModelWhereInput[]
    created_at?: DateTimeFilter<"HSSubExpertiseRelationModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSubExpertiseRelationModel"> | Date | string
    is_deleted?: BoolFilter<"HSSubExpertiseRelationModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSubExpertiseRelationModel"> | Date | string | null
    hs_provider_id?: StringFilter<"HSSubExpertiseRelationModel"> | string
    sub_expertise_id?: StringFilter<"HSSubExpertiseRelationModel"> | string
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput>
    sub_expertise?: XOR<HSSubExpertiseModelRelationFilter, HSSubExpertiseModelWhereInput>
  }, "id" | "hs_provider_id_sub_expertise_id">

  export type HSSubExpertiseRelationModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    hs_provider_id?: SortOrder
    sub_expertise_id?: SortOrder
    _count?: HSSubExpertiseRelationModelCountOrderByAggregateInput
    _max?: HSSubExpertiseRelationModelMaxOrderByAggregateInput
    _min?: HSSubExpertiseRelationModelMinOrderByAggregateInput
  }

  export type HSSubExpertiseRelationModelScalarWhereWithAggregatesInput = {
    AND?: HSSubExpertiseRelationModelScalarWhereWithAggregatesInput | HSSubExpertiseRelationModelScalarWhereWithAggregatesInput[]
    OR?: HSSubExpertiseRelationModelScalarWhereWithAggregatesInput[]
    NOT?: HSSubExpertiseRelationModelScalarWhereWithAggregatesInput | HSSubExpertiseRelationModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HSSubExpertiseRelationModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"HSSubExpertiseRelationModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HSSubExpertiseRelationModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"HSSubExpertiseRelationModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"HSSubExpertiseRelationModel"> | Date | string | null
    hs_provider_id?: StringWithAggregatesFilter<"HSSubExpertiseRelationModel"> | string
    sub_expertise_id?: StringWithAggregatesFilter<"HSSubExpertiseRelationModel"> | string
  }

  export type REPortfolioModelWhereInput = {
    AND?: REPortfolioModelWhereInput | REPortfolioModelWhereInput[]
    OR?: REPortfolioModelWhereInput[]
    NOT?: REPortfolioModelWhereInput | REPortfolioModelWhereInput[]
    id?: StringFilter<"REPortfolioModel"> | string
    created_at?: DateTimeFilter<"REPortfolioModel"> | Date | string
    updated_at?: DateTimeFilter<"REPortfolioModel"> | Date | string
    is_deleted?: BoolFilter<"REPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"REPortfolioModel"> | Date | string | null
    re_agent_id?: StringFilter<"REPortfolioModel"> | string
    title?: StringFilter<"REPortfolioModel"> | string
    url?: StringFilter<"REPortfolioModel"> | string
    is_visible?: BoolFilter<"REPortfolioModel"> | boolean
    re_agent?: XOR<REAgentModelRelationFilter, REAgentModelWhereInput>
  }

  export type REPortfolioModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    re_agent_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
    re_agent?: REAgentModelOrderByWithRelationInput
  }

  export type REPortfolioModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: REPortfolioModelWhereInput | REPortfolioModelWhereInput[]
    OR?: REPortfolioModelWhereInput[]
    NOT?: REPortfolioModelWhereInput | REPortfolioModelWhereInput[]
    created_at?: DateTimeFilter<"REPortfolioModel"> | Date | string
    updated_at?: DateTimeFilter<"REPortfolioModel"> | Date | string
    is_deleted?: BoolFilter<"REPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"REPortfolioModel"> | Date | string | null
    re_agent_id?: StringFilter<"REPortfolioModel"> | string
    title?: StringFilter<"REPortfolioModel"> | string
    url?: StringFilter<"REPortfolioModel"> | string
    is_visible?: BoolFilter<"REPortfolioModel"> | boolean
    re_agent?: XOR<REAgentModelRelationFilter, REAgentModelWhereInput>
  }, "id">

  export type REPortfolioModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    re_agent_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
    _count?: REPortfolioModelCountOrderByAggregateInput
    _max?: REPortfolioModelMaxOrderByAggregateInput
    _min?: REPortfolioModelMinOrderByAggregateInput
  }

  export type REPortfolioModelScalarWhereWithAggregatesInput = {
    AND?: REPortfolioModelScalarWhereWithAggregatesInput | REPortfolioModelScalarWhereWithAggregatesInput[]
    OR?: REPortfolioModelScalarWhereWithAggregatesInput[]
    NOT?: REPortfolioModelScalarWhereWithAggregatesInput | REPortfolioModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"REPortfolioModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"REPortfolioModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"REPortfolioModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"REPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"REPortfolioModel"> | Date | string | null
    re_agent_id?: StringWithAggregatesFilter<"REPortfolioModel"> | string
    title?: StringWithAggregatesFilter<"REPortfolioModel"> | string
    url?: StringWithAggregatesFilter<"REPortfolioModel"> | string
    is_visible?: BoolWithAggregatesFilter<"REPortfolioModel"> | boolean
  }

  export type HSPortfolioModelWhereInput = {
    AND?: HSPortfolioModelWhereInput | HSPortfolioModelWhereInput[]
    OR?: HSPortfolioModelWhereInput[]
    NOT?: HSPortfolioModelWhereInput | HSPortfolioModelWhereInput[]
    id?: StringFilter<"HSPortfolioModel"> | string
    created_at?: DateTimeFilter<"HSPortfolioModel"> | Date | string
    updated_at?: DateTimeFilter<"HSPortfolioModel"> | Date | string
    is_deleted?: BoolFilter<"HSPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSPortfolioModel"> | Date | string | null
    hs_provider_id?: StringFilter<"HSPortfolioModel"> | string
    title?: StringFilter<"HSPortfolioModel"> | string
    url?: StringFilter<"HSPortfolioModel"> | string
    is_visible?: BoolFilter<"HSPortfolioModel"> | boolean
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput>
  }

  export type HSPortfolioModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    hs_provider_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
    hs_provider?: HSProviderModelOrderByWithRelationInput
  }

  export type HSPortfolioModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HSPortfolioModelWhereInput | HSPortfolioModelWhereInput[]
    OR?: HSPortfolioModelWhereInput[]
    NOT?: HSPortfolioModelWhereInput | HSPortfolioModelWhereInput[]
    created_at?: DateTimeFilter<"HSPortfolioModel"> | Date | string
    updated_at?: DateTimeFilter<"HSPortfolioModel"> | Date | string
    is_deleted?: BoolFilter<"HSPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSPortfolioModel"> | Date | string | null
    hs_provider_id?: StringFilter<"HSPortfolioModel"> | string
    title?: StringFilter<"HSPortfolioModel"> | string
    url?: StringFilter<"HSPortfolioModel"> | string
    is_visible?: BoolFilter<"HSPortfolioModel"> | boolean
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput>
  }, "id">

  export type HSPortfolioModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    hs_provider_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
    _count?: HSPortfolioModelCountOrderByAggregateInput
    _max?: HSPortfolioModelMaxOrderByAggregateInput
    _min?: HSPortfolioModelMinOrderByAggregateInput
  }

  export type HSPortfolioModelScalarWhereWithAggregatesInput = {
    AND?: HSPortfolioModelScalarWhereWithAggregatesInput | HSPortfolioModelScalarWhereWithAggregatesInput[]
    OR?: HSPortfolioModelScalarWhereWithAggregatesInput[]
    NOT?: HSPortfolioModelScalarWhereWithAggregatesInput | HSPortfolioModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HSPortfolioModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"HSPortfolioModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HSPortfolioModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"HSPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"HSPortfolioModel"> | Date | string | null
    hs_provider_id?: StringWithAggregatesFilter<"HSPortfolioModel"> | string
    title?: StringWithAggregatesFilter<"HSPortfolioModel"> | string
    url?: StringWithAggregatesFilter<"HSPortfolioModel"> | string
    is_visible?: BoolWithAggregatesFilter<"HSPortfolioModel"> | boolean
  }

  export type OauthAccountModelWhereInput = {
    AND?: OauthAccountModelWhereInput | OauthAccountModelWhereInput[]
    OR?: OauthAccountModelWhereInput[]
    NOT?: OauthAccountModelWhereInput | OauthAccountModelWhereInput[]
    id?: StringFilter<"OauthAccountModel"> | string
    created_at?: DateTimeFilter<"OauthAccountModel"> | Date | string
    updated_at?: DateTimeFilter<"OauthAccountModel"> | Date | string
    is_deleted?: BoolFilter<"OauthAccountModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"OauthAccountModel"> | Date | string | null
    oauth_type?: EnumOauthTypeFilter<"OauthAccountModel"> | OauthType
    oauth_sub?: StringFilter<"OauthAccountModel"> | string
    biz_user_id?: StringNullableFilter<"OauthAccountModel"> | string | null
    client_id?: StringNullableFilter<"OauthAccountModel"> | string | null
    name?: StringNullableFilter<"OauthAccountModel"> | string | null
    email?: StringNullableFilter<"OauthAccountModel"> | string | null
    phone?: StringNullableFilter<"OauthAccountModel"> | string | null
    profile_image_url?: StringNullableFilter<"OauthAccountModel"> | string | null
    birth?: StringNullableFilter<"OauthAccountModel"> | string | null
    gender?: EnumGenderTypeNullableFilter<"OauthAccountModel"> | GenderType | null
    address_zone_code?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_road?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_detail?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_extra?: StringNullableFilter<"OauthAccountModel"> | string | null
    client?: XOR<ClientModelNullableRelationFilter, ClientModelWhereInput> | null
    biz_user?: XOR<BIZUserModelNullableRelationFilter, BIZUserModelWhereInput> | null
  }

  export type OauthAccountModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    biz_user_id?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address_zone_code?: SortOrderInput | SortOrder
    address_road?: SortOrderInput | SortOrder
    address_detail?: SortOrderInput | SortOrder
    address_extra?: SortOrderInput | SortOrder
    client?: ClientModelOrderByWithRelationInput
    biz_user?: BIZUserModelOrderByWithRelationInput
  }

  export type OauthAccountModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OauthAccountModelWhereInput | OauthAccountModelWhereInput[]
    OR?: OauthAccountModelWhereInput[]
    NOT?: OauthAccountModelWhereInput | OauthAccountModelWhereInput[]
    created_at?: DateTimeFilter<"OauthAccountModel"> | Date | string
    updated_at?: DateTimeFilter<"OauthAccountModel"> | Date | string
    is_deleted?: BoolFilter<"OauthAccountModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"OauthAccountModel"> | Date | string | null
    oauth_type?: EnumOauthTypeFilter<"OauthAccountModel"> | OauthType
    oauth_sub?: StringFilter<"OauthAccountModel"> | string
    biz_user_id?: StringNullableFilter<"OauthAccountModel"> | string | null
    client_id?: StringNullableFilter<"OauthAccountModel"> | string | null
    name?: StringNullableFilter<"OauthAccountModel"> | string | null
    email?: StringNullableFilter<"OauthAccountModel"> | string | null
    phone?: StringNullableFilter<"OauthAccountModel"> | string | null
    profile_image_url?: StringNullableFilter<"OauthAccountModel"> | string | null
    birth?: StringNullableFilter<"OauthAccountModel"> | string | null
    gender?: EnumGenderTypeNullableFilter<"OauthAccountModel"> | GenderType | null
    address_zone_code?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_road?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_detail?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_extra?: StringNullableFilter<"OauthAccountModel"> | string | null
    client?: XOR<ClientModelNullableRelationFilter, ClientModelWhereInput> | null
    biz_user?: XOR<BIZUserModelNullableRelationFilter, BIZUserModelWhereInput> | null
  }, "id">

  export type OauthAccountModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    biz_user_id?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address_zone_code?: SortOrderInput | SortOrder
    address_road?: SortOrderInput | SortOrder
    address_detail?: SortOrderInput | SortOrder
    address_extra?: SortOrderInput | SortOrder
    _count?: OauthAccountModelCountOrderByAggregateInput
    _max?: OauthAccountModelMaxOrderByAggregateInput
    _min?: OauthAccountModelMinOrderByAggregateInput
  }

  export type OauthAccountModelScalarWhereWithAggregatesInput = {
    AND?: OauthAccountModelScalarWhereWithAggregatesInput | OauthAccountModelScalarWhereWithAggregatesInput[]
    OR?: OauthAccountModelScalarWhereWithAggregatesInput[]
    NOT?: OauthAccountModelScalarWhereWithAggregatesInput | OauthAccountModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OauthAccountModel"> | string
    created_at?: DateTimeWithAggregatesFilter<"OauthAccountModel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OauthAccountModel"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"OauthAccountModel"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"OauthAccountModel"> | Date | string | null
    oauth_type?: EnumOauthTypeWithAggregatesFilter<"OauthAccountModel"> | OauthType
    oauth_sub?: StringWithAggregatesFilter<"OauthAccountModel"> | string
    biz_user_id?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    client_id?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    name?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    email?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    phone?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    profile_image_url?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    birth?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    gender?: EnumGenderTypeNullableWithAggregatesFilter<"OauthAccountModel"> | GenderType | null
    address_zone_code?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    address_road?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    address_detail?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
    address_extra?: StringNullableWithAggregatesFilter<"OauthAccountModel"> | string | null
  }

  export type TermsModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    version: string
    url: string
    is_required: boolean
    type: TermsType
    agreements?: TermsAgreementModelCreateNestedManyWithoutTermsInput
  }

  export type TermsModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    version: string
    url: string
    is_required: boolean
    type: TermsType
    agreements?: TermsAgreementModelUncheckedCreateNestedManyWithoutTermsInput
  }

  export type TermsModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTermsTypeFieldUpdateOperationsInput | TermsType
    agreements?: TermsAgreementModelUpdateManyWithoutTermsNestedInput
  }

  export type TermsModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTermsTypeFieldUpdateOperationsInput | TermsType
    agreements?: TermsAgreementModelUncheckedUpdateManyWithoutTermsNestedInput
  }

  export type TermsModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    version: string
    url: string
    is_required: boolean
    type: TermsType
  }

  export type TermsModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTermsTypeFieldUpdateOperationsInput | TermsType
  }

  export type TermsModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTermsTypeFieldUpdateOperationsInput | TermsType
  }

  export type TermsAgreementModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    terms: TermsModelCreateNestedOneWithoutAgreementsInput
    user: UserModelCreateNestedOneWithoutTerms_agreementsInput
  }

  export type TermsAgreementModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    terms_id: string
    user_id: string
  }

  export type TermsAgreementModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terms?: TermsModelUpdateOneRequiredWithoutAgreementsNestedInput
    user?: UserModelUpdateOneRequiredWithoutTerms_agreementsNestedInput
  }

  export type TermsAgreementModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terms_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TermsAgreementModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    terms_id: string
    user_id: string
  }

  export type TermsAgreementModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TermsAgreementModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terms_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    client?: ClientModelCreateNestedOneWithoutBaseInput
    biz_user?: BIZUserModelCreateNestedOneWithoutBaseInput
    terms_agreements?: TermsAgreementModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    client?: ClientModelUncheckedCreateNestedOneWithoutBaseInput
    biz_user?: BIZUserModelUncheckedCreateNestedOneWithoutBaseInput
    terms_agreements?: TermsAgreementModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUpdateOneWithoutBaseNestedInput
    biz_user?: BIZUserModelUpdateOneWithoutBaseNestedInput
    terms_agreements?: TermsAgreementModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUncheckedUpdateOneWithoutBaseNestedInput
    biz_user?: BIZUserModelUncheckedUpdateOneWithoutBaseNestedInput
    terms_agreements?: TermsAgreementModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
  }

  export type UserModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientModelCreateInput = {
    birth?: Date | string | null
    gender?: GenderType | null
    phone?: string | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    profile_image_url?: string | null
    base: UserModelCreateNestedOneWithoutClientInput
    oauth_accounts?: OauthAccountModelCreateNestedManyWithoutClientInput
  }

  export type ClientModelUncheckedCreateInput = {
    id: string
    birth?: Date | string | null
    gender?: GenderType | null
    phone?: string | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    profile_image_url?: string | null
    oauth_accounts?: OauthAccountModelUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientModelUpdateInput = {
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    base?: UserModelUpdateOneRequiredWithoutClientNestedInput
    oauth_accounts?: OauthAccountModelUpdateManyWithoutClientNestedInput
  }

  export type ClientModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accounts?: OauthAccountModelUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientModelCreateManyInput = {
    id: string
    birth?: Date | string | null
    gender?: GenderType | null
    phone?: string | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    profile_image_url?: string | null
  }

  export type ClientModelUpdateManyMutationInput = {
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BIZUserModelCreateInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBiz_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelUncheckedCreateInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelUncheckedCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelUncheckedCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelUpdateInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBiz_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUncheckedUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelCreateManyInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
  }

  export type BIZUserModelUpdateManyMutationInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BIZUserModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BIZCertificationImageModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
    access_type: ImageAccessType
    biz_user: BIZUserModelCreateNestedOneWithoutBiz_certification_imagesInput
  }

  export type BIZCertificationImageModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    biz_user_id: string
    url: string
    access_type: ImageAccessType
  }

  export type BIZCertificationImageModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    access_type?: EnumImageAccessTypeFieldUpdateOperationsInput | ImageAccessType
    biz_user?: BIZUserModelUpdateOneRequiredWithoutBiz_certification_imagesNestedInput
  }

  export type BIZCertificationImageModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biz_user_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    access_type?: EnumImageAccessTypeFieldUpdateOperationsInput | ImageAccessType
  }

  export type BIZCertificationImageModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    biz_user_id: string
    url: string
    access_type: ImageAccessType
  }

  export type BIZCertificationImageModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    access_type?: EnumImageAccessTypeFieldUpdateOperationsInput | ImageAccessType
  }

  export type BIZCertificationImageModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biz_user_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    access_type?: EnumImageAccessTypeFieldUpdateOperationsInput | ImageAccessType
  }

  export type REAgentModelCreateInput = {
    is_licensed: boolean
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
    base: BIZUserModelCreateNestedOneWithoutRe_agentInput
    expertise: REExpertiseModelCreateNestedOneWithoutRe_agentsInput
    portfolios?: REPortfolioModelCreateNestedManyWithoutRe_agentInput
  }

  export type REAgentModelUncheckedCreateInput = {
    id: string
    is_licensed: boolean
    expertise_id: string
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
    portfolios?: REPortfolioModelUncheckedCreateNestedManyWithoutRe_agentInput
  }

  export type REAgentModelUpdateInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BIZUserModelUpdateOneRequiredWithoutRe_agentNestedInput
    expertise?: REExpertiseModelUpdateOneRequiredWithoutRe_agentsNestedInput
    portfolios?: REPortfolioModelUpdateManyWithoutRe_agentNestedInput
  }

  export type REAgentModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    expertise_id?: StringFieldUpdateOperationsInput | string
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: REPortfolioModelUncheckedUpdateManyWithoutRe_agentNestedInput
  }

  export type REAgentModelCreateManyInput = {
    id: string
    is_licensed: boolean
    expertise_id: string
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
  }

  export type REAgentModelUpdateManyMutationInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type REAgentModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    expertise_id?: StringFieldUpdateOperationsInput | string
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type REExpertiseModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    re_agents?: REAgentModelCreateNestedManyWithoutExpertiseInput
  }

  export type REExpertiseModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    re_agents?: REAgentModelUncheckedCreateNestedManyWithoutExpertiseInput
  }

  export type REExpertiseModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    re_agents?: REAgentModelUpdateManyWithoutExpertiseNestedInput
  }

  export type REExpertiseModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    re_agents?: REAgentModelUncheckedUpdateManyWithoutExpertiseNestedInput
  }

  export type REExpertiseModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type REExpertiseModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REExpertiseModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HSProviderModelCreateInput = {
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    base: BIZUserModelCreateNestedOneWithoutHs_providerInput
    expertise_relation?: HSSubExpertiseRelationModelCreateNestedManyWithoutHs_providerInput
    portfolios?: HSPortfolioModelCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateInput = {
    id: string
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    expertise_relation?: HSSubExpertiseRelationModelUncheckedCreateNestedManyWithoutHs_providerInput
    portfolios?: HSPortfolioModelUncheckedCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUpdateInput = {
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BIZUserModelUpdateOneRequiredWithoutHs_providerNestedInput
    expertise_relation?: HSSubExpertiseRelationModelUpdateManyWithoutHs_providerNestedInput
    portfolios?: HSPortfolioModelUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise_relation?: HSSubExpertiseRelationModelUncheckedUpdateManyWithoutHs_providerNestedInput
    portfolios?: HSPortfolioModelUncheckedUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelCreateManyInput = {
    id: string
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
  }

  export type HSProviderModelUpdateManyMutationInput = {
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HSProviderModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HSSubExpertiseModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    relations?: HSSubExpertiseRelationModelCreateNestedManyWithoutSub_expertiseInput
    super_expertise: HSSuperExpertiseModelCreateNestedOneWithoutSub_expertisesInput
  }

  export type HSSubExpertiseModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_expertise_id: string
    relations?: HSSubExpertiseRelationModelUncheckedCreateNestedManyWithoutSub_expertiseInput
  }

  export type HSSubExpertiseModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    relations?: HSSubExpertiseRelationModelUpdateManyWithoutSub_expertiseNestedInput
    super_expertise?: HSSuperExpertiseModelUpdateOneRequiredWithoutSub_expertisesNestedInput
  }

  export type HSSubExpertiseModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    relations?: HSSubExpertiseRelationModelUncheckedUpdateManyWithoutSub_expertiseNestedInput
  }

  export type HSSubExpertiseModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_expertise_id: string
  }

  export type HSSubExpertiseModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HSSubExpertiseModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSSuperExpertiseModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    sub_expertises?: HSSubExpertiseModelCreateNestedManyWithoutSuper_expertiseInput
  }

  export type HSSuperExpertiseModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    sub_expertises?: HSSubExpertiseModelUncheckedCreateNestedManyWithoutSuper_expertiseInput
  }

  export type HSSuperExpertiseModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    sub_expertises?: HSSubExpertiseModelUpdateManyWithoutSuper_expertiseNestedInput
  }

  export type HSSuperExpertiseModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    sub_expertises?: HSSubExpertiseModelUncheckedUpdateManyWithoutSuper_expertiseNestedInput
  }

  export type HSSuperExpertiseModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type HSSuperExpertiseModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HSSuperExpertiseModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HSSubExpertiseRelationModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider: HSProviderModelCreateNestedOneWithoutExpertise_relationInput
    sub_expertise: HSSubExpertiseModelCreateNestedOneWithoutRelationsInput
  }

  export type HSSubExpertiseRelationModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
    sub_expertise_id: string
  }

  export type HSSubExpertiseRelationModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider?: HSProviderModelUpdateOneRequiredWithoutExpertise_relationNestedInput
    sub_expertise?: HSSubExpertiseModelUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    sub_expertise_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSSubExpertiseRelationModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
    sub_expertise_id: string
  }

  export type HSSubExpertiseRelationModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    sub_expertise_id?: StringFieldUpdateOperationsInput | string
  }

  export type REPortfolioModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
    re_agent: REAgentModelCreateNestedOneWithoutPortfoliosInput
  }

  export type REPortfolioModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    re_agent_id: string
    title: string
    url: string
    is_visible: boolean
  }

  export type REPortfolioModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    re_agent?: REAgentModelUpdateOneRequiredWithoutPortfoliosNestedInput
  }

  export type REPortfolioModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    re_agent_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type REPortfolioModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    re_agent_id: string
    title: string
    url: string
    is_visible: boolean
  }

  export type REPortfolioModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type REPortfolioModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    re_agent_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HSPortfolioModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
    hs_provider: HSProviderModelCreateNestedOneWithoutPortfoliosInput
  }

  export type HSPortfolioModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
    title: string
    url: string
    is_visible: boolean
  }

  export type HSPortfolioModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    hs_provider?: HSProviderModelUpdateOneRequiredWithoutPortfoliosNestedInput
  }

  export type HSPortfolioModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HSPortfolioModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
    title: string
    url: string
    is_visible: boolean
  }

  export type HSPortfolioModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HSPortfolioModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OauthAccountModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    client?: ClientModelCreateNestedOneWithoutOauth_accountsInput
    biz_user?: BIZUserModelCreateNestedOneWithoutOauth_accountsInput
  }

  export type OauthAccountModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    biz_user_id?: string | null
    client_id?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
  }

  export type OauthAccountModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUpdateOneWithoutOauth_accountsNestedInput
    biz_user?: BIZUserModelUpdateOneWithoutOauth_accountsNestedInput
  }

  export type OauthAccountModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    biz_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccountModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    biz_user_id?: string | null
    client_id?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
  }

  export type OauthAccountModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccountModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    biz_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumTermsTypeFilter<$PrismaModel = never> = {
    equals?: TermsType | EnumTermsTypeFieldRefInput<$PrismaModel>
    in?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    notIn?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTermsTypeFilter<$PrismaModel> | TermsType
  }

  export type TermsAgreementModelListRelationFilter = {
    every?: TermsAgreementModelWhereInput
    some?: TermsAgreementModelWhereInput
    none?: TermsAgreementModelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TermsAgreementModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TermsModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    version?: SortOrder
    url?: SortOrder
    is_required?: SortOrder
    type?: SortOrder
  }

  export type TermsModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    version?: SortOrder
    url?: SortOrder
    is_required?: SortOrder
    type?: SortOrder
  }

  export type TermsModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    version?: SortOrder
    url?: SortOrder
    is_required?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTermsTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: TermsType | EnumTermsTypeFieldRefInput<$PrismaModel>
    in?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    notIn?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTermsTypeWithAggregatesFilter<$PrismaModel> | TermsType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermsTypeFilter<$PrismaModel>
    _max?: NestedEnumTermsTypeFilter<$PrismaModel>
  }

  export type TermsModelRelationFilter = {
    is?: TermsModelWhereInput
    isNot?: TermsModelWhereInput
  }

  export type UserModelRelationFilter = {
    is?: UserModelWhereInput
    isNot?: UserModelWhereInput
  }

  export type TermsAgreementModelUser_idTerms_idCompoundUniqueInput = {
    user_id: string
    terms_id: string
  }

  export type TermsAgreementModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    terms_id?: SortOrder
    user_id?: SortOrder
  }

  export type TermsAgreementModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    terms_id?: SortOrder
    user_id?: SortOrder
  }

  export type TermsAgreementModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    terms_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClientModelNullableRelationFilter = {
    is?: ClientModelWhereInput | null
    isNot?: ClientModelWhereInput | null
  }

  export type BIZUserModelNullableRelationFilter = {
    is?: BIZUserModelWhereInput | null
    isNot?: BIZUserModelWhereInput | null
  }

  export type UserModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderTypeNullableFilter<$PrismaModel = never> = {
    equals?: GenderType | EnumGenderTypeFieldRefInput<$PrismaModel> | null
    in?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    notIn?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderTypeNullableFilter<$PrismaModel> | GenderType | null
  }

  export type OauthAccountModelListRelationFilter = {
    every?: OauthAccountModelWhereInput
    some?: OauthAccountModelWhereInput
    none?: OauthAccountModelWhereInput
  }

  export type OauthAccountModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientModelCountOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
    profile_image_url?: SortOrder
  }

  export type ClientModelMaxOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
    profile_image_url?: SortOrder
  }

  export type ClientModelMinOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
    profile_image_url?: SortOrder
  }

  export type EnumGenderTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: GenderType | EnumGenderTypeFieldRefInput<$PrismaModel> | null
    in?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    notIn?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderTypeNullableWithAggregatesFilter<$PrismaModel> | GenderType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderTypeNullableFilter<$PrismaModel>
  }

  export type REAgentModelNullableRelationFilter = {
    is?: REAgentModelWhereInput | null
    isNot?: REAgentModelWhereInput | null
  }

  export type HSProviderModelNullableRelationFilter = {
    is?: HSProviderModelWhereInput | null
    isNot?: HSProviderModelWhereInput | null
  }

  export type BIZCertificationImageModelListRelationFilter = {
    every?: BIZCertificationImageModelWhereInput
    some?: BIZCertificationImageModelWhereInput
    none?: BIZCertificationImageModelWhereInput
  }

  export type BIZCertificationImageModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BIZUserModelCountOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
  }

  export type BIZUserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
  }

  export type BIZUserModelMinOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
  }

  export type EnumImageAccessTypeFilter<$PrismaModel = never> = {
    equals?: ImageAccessType | EnumImageAccessTypeFieldRefInput<$PrismaModel>
    in?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    notIn?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageAccessTypeFilter<$PrismaModel> | ImageAccessType
  }

  export type BIZUserModelRelationFilter = {
    is?: BIZUserModelWhereInput
    isNot?: BIZUserModelWhereInput
  }

  export type BIZCertificationImageModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    biz_user_id?: SortOrder
    url?: SortOrder
    access_type?: SortOrder
  }

  export type BIZCertificationImageModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    biz_user_id?: SortOrder
    url?: SortOrder
    access_type?: SortOrder
  }

  export type BIZCertificationImageModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    biz_user_id?: SortOrder
    url?: SortOrder
    access_type?: SortOrder
  }

  export type EnumImageAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: ImageAccessType | EnumImageAccessTypeFieldRefInput<$PrismaModel>
    in?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    notIn?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageAccessTypeWithAggregatesFilter<$PrismaModel> | ImageAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumImageAccessTypeFilter<$PrismaModel>
  }

  export type REExpertiseModelRelationFilter = {
    is?: REExpertiseModelWhereInput
    isNot?: REExpertiseModelWhereInput
  }

  export type REPortfolioModelListRelationFilter = {
    every?: REPortfolioModelWhereInput
    some?: REPortfolioModelWhereInput
    none?: REPortfolioModelWhereInput
  }

  export type REPortfolioModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type REAgentModelCountOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    expertise_id?: SortOrder
    re_number?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_zone_code?: SortOrder
    re_address_road?: SortOrder
    re_address_detail?: SortOrder
    re_address_extra?: SortOrder
    biz_open_date?: SortOrder
  }

  export type REAgentModelMaxOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    expertise_id?: SortOrder
    re_number?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_zone_code?: SortOrder
    re_address_road?: SortOrder
    re_address_detail?: SortOrder
    re_address_extra?: SortOrder
    biz_open_date?: SortOrder
  }

  export type REAgentModelMinOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    expertise_id?: SortOrder
    re_number?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_zone_code?: SortOrder
    re_address_road?: SortOrder
    re_address_detail?: SortOrder
    re_address_extra?: SortOrder
    biz_open_date?: SortOrder
  }

  export type REAgentModelListRelationFilter = {
    every?: REAgentModelWhereInput
    some?: REAgentModelWhereInput
    none?: REAgentModelWhereInput
  }

  export type REAgentModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type REExpertiseModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type REExpertiseModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type REExpertiseModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type HSSubExpertiseRelationModelListRelationFilter = {
    every?: HSSubExpertiseRelationModelWhereInput
    some?: HSSubExpertiseRelationModelWhereInput
    none?: HSSubExpertiseRelationModelWhereInput
  }

  export type HSPortfolioModelListRelationFilter = {
    every?: HSPortfolioModelWhereInput
    some?: HSPortfolioModelWhereInput
    none?: HSPortfolioModelWhereInput
  }

  export type HSSubExpertiseRelationModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HSPortfolioModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HSProviderModelCountOrderByAggregateInput = {
    id?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
    biz_phone?: SortOrder
    biz_registration_number?: SortOrder
    biz_open_date?: SortOrder
  }

  export type HSProviderModelMaxOrderByAggregateInput = {
    id?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
    biz_phone?: SortOrder
    biz_registration_number?: SortOrder
    biz_open_date?: SortOrder
  }

  export type HSProviderModelMinOrderByAggregateInput = {
    id?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
    biz_phone?: SortOrder
    biz_registration_number?: SortOrder
    biz_open_date?: SortOrder
  }

  export type HSSuperExpertiseModelRelationFilter = {
    is?: HSSuperExpertiseModelWhereInput
    isNot?: HSSuperExpertiseModelWhereInput
  }

  export type HSSubExpertiseModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_expertise_id?: SortOrder
  }

  export type HSSubExpertiseModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_expertise_id?: SortOrder
  }

  export type HSSubExpertiseModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_expertise_id?: SortOrder
  }

  export type HSSubExpertiseModelListRelationFilter = {
    every?: HSSubExpertiseModelWhereInput
    some?: HSSubExpertiseModelWhereInput
    none?: HSSubExpertiseModelWhereInput
  }

  export type HSSubExpertiseModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HSSuperExpertiseModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type HSSuperExpertiseModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type HSSuperExpertiseModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type HSProviderModelRelationFilter = {
    is?: HSProviderModelWhereInput
    isNot?: HSProviderModelWhereInput
  }

  export type HSSubExpertiseModelRelationFilter = {
    is?: HSSubExpertiseModelWhereInput
    isNot?: HSSubExpertiseModelWhereInput
  }

  export type HSSubExpertiseRelationModelHs_provider_idSub_expertise_idCompoundUniqueInput = {
    hs_provider_id: string
    sub_expertise_id: string
  }

  export type HSSubExpertiseRelationModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    sub_expertise_id?: SortOrder
  }

  export type HSSubExpertiseRelationModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    sub_expertise_id?: SortOrder
  }

  export type HSSubExpertiseRelationModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    sub_expertise_id?: SortOrder
  }

  export type REAgentModelRelationFilter = {
    is?: REAgentModelWhereInput
    isNot?: REAgentModelWhereInput
  }

  export type REPortfolioModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    re_agent_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
  }

  export type REPortfolioModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    re_agent_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
  }

  export type REPortfolioModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    re_agent_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
  }

  export type HSPortfolioModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
  }

  export type HSPortfolioModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
  }

  export type HSPortfolioModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    is_visible?: SortOrder
  }

  export type EnumOauthTypeFilter<$PrismaModel = never> = {
    equals?: OauthType | EnumOauthTypeFieldRefInput<$PrismaModel>
    in?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    notIn?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOauthTypeFilter<$PrismaModel> | OauthType
  }

  export type OauthAccountModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    biz_user_id?: SortOrder
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
  }

  export type OauthAccountModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    biz_user_id?: SortOrder
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
  }

  export type OauthAccountModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    biz_user_id?: SortOrder
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_zone_code?: SortOrder
    address_road?: SortOrder
    address_detail?: SortOrder
    address_extra?: SortOrder
  }

  export type EnumOauthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: OauthType | EnumOauthTypeFieldRefInput<$PrismaModel>
    in?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    notIn?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOauthTypeWithAggregatesFilter<$PrismaModel> | OauthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOauthTypeFilter<$PrismaModel>
    _max?: NestedEnumOauthTypeFilter<$PrismaModel>
  }

  export type TermsAgreementModelCreateNestedManyWithoutTermsInput = {
    create?: XOR<TermsAgreementModelCreateWithoutTermsInput, TermsAgreementModelUncheckedCreateWithoutTermsInput> | TermsAgreementModelCreateWithoutTermsInput[] | TermsAgreementModelUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutTermsInput | TermsAgreementModelCreateOrConnectWithoutTermsInput[]
    createMany?: TermsAgreementModelCreateManyTermsInputEnvelope
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
  }

  export type TermsAgreementModelUncheckedCreateNestedManyWithoutTermsInput = {
    create?: XOR<TermsAgreementModelCreateWithoutTermsInput, TermsAgreementModelUncheckedCreateWithoutTermsInput> | TermsAgreementModelCreateWithoutTermsInput[] | TermsAgreementModelUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutTermsInput | TermsAgreementModelCreateOrConnectWithoutTermsInput[]
    createMany?: TermsAgreementModelCreateManyTermsInputEnvelope
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumTermsTypeFieldUpdateOperationsInput = {
    set?: TermsType
  }

  export type TermsAgreementModelUpdateManyWithoutTermsNestedInput = {
    create?: XOR<TermsAgreementModelCreateWithoutTermsInput, TermsAgreementModelUncheckedCreateWithoutTermsInput> | TermsAgreementModelCreateWithoutTermsInput[] | TermsAgreementModelUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutTermsInput | TermsAgreementModelCreateOrConnectWithoutTermsInput[]
    upsert?: TermsAgreementModelUpsertWithWhereUniqueWithoutTermsInput | TermsAgreementModelUpsertWithWhereUniqueWithoutTermsInput[]
    createMany?: TermsAgreementModelCreateManyTermsInputEnvelope
    set?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    disconnect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    delete?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    update?: TermsAgreementModelUpdateWithWhereUniqueWithoutTermsInput | TermsAgreementModelUpdateWithWhereUniqueWithoutTermsInput[]
    updateMany?: TermsAgreementModelUpdateManyWithWhereWithoutTermsInput | TermsAgreementModelUpdateManyWithWhereWithoutTermsInput[]
    deleteMany?: TermsAgreementModelScalarWhereInput | TermsAgreementModelScalarWhereInput[]
  }

  export type TermsAgreementModelUncheckedUpdateManyWithoutTermsNestedInput = {
    create?: XOR<TermsAgreementModelCreateWithoutTermsInput, TermsAgreementModelUncheckedCreateWithoutTermsInput> | TermsAgreementModelCreateWithoutTermsInput[] | TermsAgreementModelUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutTermsInput | TermsAgreementModelCreateOrConnectWithoutTermsInput[]
    upsert?: TermsAgreementModelUpsertWithWhereUniqueWithoutTermsInput | TermsAgreementModelUpsertWithWhereUniqueWithoutTermsInput[]
    createMany?: TermsAgreementModelCreateManyTermsInputEnvelope
    set?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    disconnect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    delete?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    update?: TermsAgreementModelUpdateWithWhereUniqueWithoutTermsInput | TermsAgreementModelUpdateWithWhereUniqueWithoutTermsInput[]
    updateMany?: TermsAgreementModelUpdateManyWithWhereWithoutTermsInput | TermsAgreementModelUpdateManyWithWhereWithoutTermsInput[]
    deleteMany?: TermsAgreementModelScalarWhereInput | TermsAgreementModelScalarWhereInput[]
  }

  export type TermsModelCreateNestedOneWithoutAgreementsInput = {
    create?: XOR<TermsModelCreateWithoutAgreementsInput, TermsModelUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: TermsModelCreateOrConnectWithoutAgreementsInput
    connect?: TermsModelWhereUniqueInput
  }

  export type UserModelCreateNestedOneWithoutTerms_agreementsInput = {
    create?: XOR<UserModelCreateWithoutTerms_agreementsInput, UserModelUncheckedCreateWithoutTerms_agreementsInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutTerms_agreementsInput
    connect?: UserModelWhereUniqueInput
  }

  export type TermsModelUpdateOneRequiredWithoutAgreementsNestedInput = {
    create?: XOR<TermsModelCreateWithoutAgreementsInput, TermsModelUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: TermsModelCreateOrConnectWithoutAgreementsInput
    upsert?: TermsModelUpsertWithoutAgreementsInput
    connect?: TermsModelWhereUniqueInput
    update?: XOR<XOR<TermsModelUpdateToOneWithWhereWithoutAgreementsInput, TermsModelUpdateWithoutAgreementsInput>, TermsModelUncheckedUpdateWithoutAgreementsInput>
  }

  export type UserModelUpdateOneRequiredWithoutTerms_agreementsNestedInput = {
    create?: XOR<UserModelCreateWithoutTerms_agreementsInput, UserModelUncheckedCreateWithoutTerms_agreementsInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutTerms_agreementsInput
    upsert?: UserModelUpsertWithoutTerms_agreementsInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<XOR<UserModelUpdateToOneWithWhereWithoutTerms_agreementsInput, UserModelUpdateWithoutTerms_agreementsInput>, UserModelUncheckedUpdateWithoutTerms_agreementsInput>
  }

  export type ClientModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<ClientModelCreateWithoutBaseInput, ClientModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: ClientModelCreateOrConnectWithoutBaseInput
    connect?: ClientModelWhereUniqueInput
  }

  export type BIZUserModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<BIZUserModelCreateWithoutBaseInput, BIZUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutBaseInput
    connect?: BIZUserModelWhereUniqueInput
  }

  export type TermsAgreementModelCreateNestedManyWithoutUserInput = {
    create?: XOR<TermsAgreementModelCreateWithoutUserInput, TermsAgreementModelUncheckedCreateWithoutUserInput> | TermsAgreementModelCreateWithoutUserInput[] | TermsAgreementModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutUserInput | TermsAgreementModelCreateOrConnectWithoutUserInput[]
    createMany?: TermsAgreementModelCreateManyUserInputEnvelope
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
  }

  export type ClientModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<ClientModelCreateWithoutBaseInput, ClientModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: ClientModelCreateOrConnectWithoutBaseInput
    connect?: ClientModelWhereUniqueInput
  }

  export type BIZUserModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<BIZUserModelCreateWithoutBaseInput, BIZUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutBaseInput
    connect?: BIZUserModelWhereUniqueInput
  }

  export type TermsAgreementModelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TermsAgreementModelCreateWithoutUserInput, TermsAgreementModelUncheckedCreateWithoutUserInput> | TermsAgreementModelCreateWithoutUserInput[] | TermsAgreementModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutUserInput | TermsAgreementModelCreateOrConnectWithoutUserInput[]
    createMany?: TermsAgreementModelCreateManyUserInputEnvelope
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<ClientModelCreateWithoutBaseInput, ClientModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: ClientModelCreateOrConnectWithoutBaseInput
    upsert?: ClientModelUpsertWithoutBaseInput
    disconnect?: ClientModelWhereInput | boolean
    delete?: ClientModelWhereInput | boolean
    connect?: ClientModelWhereUniqueInput
    update?: XOR<XOR<ClientModelUpdateToOneWithWhereWithoutBaseInput, ClientModelUpdateWithoutBaseInput>, ClientModelUncheckedUpdateWithoutBaseInput>
  }

  export type BIZUserModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<BIZUserModelCreateWithoutBaseInput, BIZUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutBaseInput
    upsert?: BIZUserModelUpsertWithoutBaseInput
    disconnect?: BIZUserModelWhereInput | boolean
    delete?: BIZUserModelWhereInput | boolean
    connect?: BIZUserModelWhereUniqueInput
    update?: XOR<XOR<BIZUserModelUpdateToOneWithWhereWithoutBaseInput, BIZUserModelUpdateWithoutBaseInput>, BIZUserModelUncheckedUpdateWithoutBaseInput>
  }

  export type TermsAgreementModelUpdateManyWithoutUserNestedInput = {
    create?: XOR<TermsAgreementModelCreateWithoutUserInput, TermsAgreementModelUncheckedCreateWithoutUserInput> | TermsAgreementModelCreateWithoutUserInput[] | TermsAgreementModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutUserInput | TermsAgreementModelCreateOrConnectWithoutUserInput[]
    upsert?: TermsAgreementModelUpsertWithWhereUniqueWithoutUserInput | TermsAgreementModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TermsAgreementModelCreateManyUserInputEnvelope
    set?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    disconnect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    delete?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    update?: TermsAgreementModelUpdateWithWhereUniqueWithoutUserInput | TermsAgreementModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TermsAgreementModelUpdateManyWithWhereWithoutUserInput | TermsAgreementModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TermsAgreementModelScalarWhereInput | TermsAgreementModelScalarWhereInput[]
  }

  export type ClientModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<ClientModelCreateWithoutBaseInput, ClientModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: ClientModelCreateOrConnectWithoutBaseInput
    upsert?: ClientModelUpsertWithoutBaseInput
    disconnect?: ClientModelWhereInput | boolean
    delete?: ClientModelWhereInput | boolean
    connect?: ClientModelWhereUniqueInput
    update?: XOR<XOR<ClientModelUpdateToOneWithWhereWithoutBaseInput, ClientModelUpdateWithoutBaseInput>, ClientModelUncheckedUpdateWithoutBaseInput>
  }

  export type BIZUserModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<BIZUserModelCreateWithoutBaseInput, BIZUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutBaseInput
    upsert?: BIZUserModelUpsertWithoutBaseInput
    disconnect?: BIZUserModelWhereInput | boolean
    delete?: BIZUserModelWhereInput | boolean
    connect?: BIZUserModelWhereUniqueInput
    update?: XOR<XOR<BIZUserModelUpdateToOneWithWhereWithoutBaseInput, BIZUserModelUpdateWithoutBaseInput>, BIZUserModelUncheckedUpdateWithoutBaseInput>
  }

  export type TermsAgreementModelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TermsAgreementModelCreateWithoutUserInput, TermsAgreementModelUncheckedCreateWithoutUserInput> | TermsAgreementModelCreateWithoutUserInput[] | TermsAgreementModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TermsAgreementModelCreateOrConnectWithoutUserInput | TermsAgreementModelCreateOrConnectWithoutUserInput[]
    upsert?: TermsAgreementModelUpsertWithWhereUniqueWithoutUserInput | TermsAgreementModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TermsAgreementModelCreateManyUserInputEnvelope
    set?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    disconnect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    delete?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    connect?: TermsAgreementModelWhereUniqueInput | TermsAgreementModelWhereUniqueInput[]
    update?: TermsAgreementModelUpdateWithWhereUniqueWithoutUserInput | TermsAgreementModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TermsAgreementModelUpdateManyWithWhereWithoutUserInput | TermsAgreementModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TermsAgreementModelScalarWhereInput | TermsAgreementModelScalarWhereInput[]
  }

  export type UserModelCreateNestedOneWithoutClientInput = {
    create?: XOR<UserModelCreateWithoutClientInput, UserModelUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutClientInput
    connect?: UserModelWhereUniqueInput
  }

  export type OauthAccountModelCreateNestedManyWithoutClientInput = {
    create?: XOR<OauthAccountModelCreateWithoutClientInput, OauthAccountModelUncheckedCreateWithoutClientInput> | OauthAccountModelCreateWithoutClientInput[] | OauthAccountModelUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutClientInput | OauthAccountModelCreateOrConnectWithoutClientInput[]
    createMany?: OauthAccountModelCreateManyClientInputEnvelope
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
  }

  export type OauthAccountModelUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OauthAccountModelCreateWithoutClientInput, OauthAccountModelUncheckedCreateWithoutClientInput> | OauthAccountModelCreateWithoutClientInput[] | OauthAccountModelUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutClientInput | OauthAccountModelCreateOrConnectWithoutClientInput[]
    createMany?: OauthAccountModelCreateManyClientInputEnvelope
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
  }

  export type NullableEnumGenderTypeFieldUpdateOperationsInput = {
    set?: GenderType | null
  }

  export type UserModelUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<UserModelCreateWithoutClientInput, UserModelUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutClientInput
    upsert?: UserModelUpsertWithoutClientInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<XOR<UserModelUpdateToOneWithWhereWithoutClientInput, UserModelUpdateWithoutClientInput>, UserModelUncheckedUpdateWithoutClientInput>
  }

  export type OauthAccountModelUpdateManyWithoutClientNestedInput = {
    create?: XOR<OauthAccountModelCreateWithoutClientInput, OauthAccountModelUncheckedCreateWithoutClientInput> | OauthAccountModelCreateWithoutClientInput[] | OauthAccountModelUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutClientInput | OauthAccountModelCreateOrConnectWithoutClientInput[]
    upsert?: OauthAccountModelUpsertWithWhereUniqueWithoutClientInput | OauthAccountModelUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OauthAccountModelCreateManyClientInputEnvelope
    set?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    disconnect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    delete?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    update?: OauthAccountModelUpdateWithWhereUniqueWithoutClientInput | OauthAccountModelUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OauthAccountModelUpdateManyWithWhereWithoutClientInput | OauthAccountModelUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OauthAccountModelScalarWhereInput | OauthAccountModelScalarWhereInput[]
  }

  export type OauthAccountModelUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OauthAccountModelCreateWithoutClientInput, OauthAccountModelUncheckedCreateWithoutClientInput> | OauthAccountModelCreateWithoutClientInput[] | OauthAccountModelUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutClientInput | OauthAccountModelCreateOrConnectWithoutClientInput[]
    upsert?: OauthAccountModelUpsertWithWhereUniqueWithoutClientInput | OauthAccountModelUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OauthAccountModelCreateManyClientInputEnvelope
    set?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    disconnect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    delete?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    update?: OauthAccountModelUpdateWithWhereUniqueWithoutClientInput | OauthAccountModelUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OauthAccountModelUpdateManyWithWhereWithoutClientInput | OauthAccountModelUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OauthAccountModelScalarWhereInput | OauthAccountModelScalarWhereInput[]
  }

  export type UserModelCreateNestedOneWithoutBiz_userInput = {
    create?: XOR<UserModelCreateWithoutBiz_userInput, UserModelUncheckedCreateWithoutBiz_userInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutBiz_userInput
    connect?: UserModelWhereUniqueInput
  }

  export type REAgentModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    connect?: REAgentModelWhereUniqueInput
  }

  export type HSProviderModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    connect?: HSProviderModelWhereUniqueInput
  }

  export type OauthAccountModelCreateNestedManyWithoutBiz_userInput = {
    create?: XOR<OauthAccountModelCreateWithoutBiz_userInput, OauthAccountModelUncheckedCreateWithoutBiz_userInput> | OauthAccountModelCreateWithoutBiz_userInput[] | OauthAccountModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutBiz_userInput | OauthAccountModelCreateOrConnectWithoutBiz_userInput[]
    createMany?: OauthAccountModelCreateManyBiz_userInputEnvelope
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
  }

  export type BIZCertificationImageModelCreateNestedManyWithoutBiz_userInput = {
    create?: XOR<BIZCertificationImageModelCreateWithoutBiz_userInput, BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput> | BIZCertificationImageModelCreateWithoutBiz_userInput[] | BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput | BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput[]
    createMany?: BIZCertificationImageModelCreateManyBiz_userInputEnvelope
    connect?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
  }

  export type REAgentModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    connect?: REAgentModelWhereUniqueInput
  }

  export type HSProviderModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    connect?: HSProviderModelWhereUniqueInput
  }

  export type OauthAccountModelUncheckedCreateNestedManyWithoutBiz_userInput = {
    create?: XOR<OauthAccountModelCreateWithoutBiz_userInput, OauthAccountModelUncheckedCreateWithoutBiz_userInput> | OauthAccountModelCreateWithoutBiz_userInput[] | OauthAccountModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutBiz_userInput | OauthAccountModelCreateOrConnectWithoutBiz_userInput[]
    createMany?: OauthAccountModelCreateManyBiz_userInputEnvelope
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
  }

  export type BIZCertificationImageModelUncheckedCreateNestedManyWithoutBiz_userInput = {
    create?: XOR<BIZCertificationImageModelCreateWithoutBiz_userInput, BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput> | BIZCertificationImageModelCreateWithoutBiz_userInput[] | BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput | BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput[]
    createMany?: BIZCertificationImageModelCreateManyBiz_userInputEnvelope
    connect?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
  }

  export type UserModelUpdateOneRequiredWithoutBiz_userNestedInput = {
    create?: XOR<UserModelCreateWithoutBiz_userInput, UserModelUncheckedCreateWithoutBiz_userInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutBiz_userInput
    upsert?: UserModelUpsertWithoutBiz_userInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<XOR<UserModelUpdateToOneWithWhereWithoutBiz_userInput, UserModelUpdateWithoutBiz_userInput>, UserModelUncheckedUpdateWithoutBiz_userInput>
  }

  export type REAgentModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    upsert?: REAgentModelUpsertWithoutBaseInput
    disconnect?: REAgentModelWhereInput | boolean
    delete?: REAgentModelWhereInput | boolean
    connect?: REAgentModelWhereUniqueInput
    update?: XOR<XOR<REAgentModelUpdateToOneWithWhereWithoutBaseInput, REAgentModelUpdateWithoutBaseInput>, REAgentModelUncheckedUpdateWithoutBaseInput>
  }

  export type HSProviderModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    upsert?: HSProviderModelUpsertWithoutBaseInput
    disconnect?: HSProviderModelWhereInput | boolean
    delete?: HSProviderModelWhereInput | boolean
    connect?: HSProviderModelWhereUniqueInput
    update?: XOR<XOR<HSProviderModelUpdateToOneWithWhereWithoutBaseInput, HSProviderModelUpdateWithoutBaseInput>, HSProviderModelUncheckedUpdateWithoutBaseInput>
  }

  export type OauthAccountModelUpdateManyWithoutBiz_userNestedInput = {
    create?: XOR<OauthAccountModelCreateWithoutBiz_userInput, OauthAccountModelUncheckedCreateWithoutBiz_userInput> | OauthAccountModelCreateWithoutBiz_userInput[] | OauthAccountModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutBiz_userInput | OauthAccountModelCreateOrConnectWithoutBiz_userInput[]
    upsert?: OauthAccountModelUpsertWithWhereUniqueWithoutBiz_userInput | OauthAccountModelUpsertWithWhereUniqueWithoutBiz_userInput[]
    createMany?: OauthAccountModelCreateManyBiz_userInputEnvelope
    set?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    disconnect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    delete?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    update?: OauthAccountModelUpdateWithWhereUniqueWithoutBiz_userInput | OauthAccountModelUpdateWithWhereUniqueWithoutBiz_userInput[]
    updateMany?: OauthAccountModelUpdateManyWithWhereWithoutBiz_userInput | OauthAccountModelUpdateManyWithWhereWithoutBiz_userInput[]
    deleteMany?: OauthAccountModelScalarWhereInput | OauthAccountModelScalarWhereInput[]
  }

  export type BIZCertificationImageModelUpdateManyWithoutBiz_userNestedInput = {
    create?: XOR<BIZCertificationImageModelCreateWithoutBiz_userInput, BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput> | BIZCertificationImageModelCreateWithoutBiz_userInput[] | BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput | BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput[]
    upsert?: BIZCertificationImageModelUpsertWithWhereUniqueWithoutBiz_userInput | BIZCertificationImageModelUpsertWithWhereUniqueWithoutBiz_userInput[]
    createMany?: BIZCertificationImageModelCreateManyBiz_userInputEnvelope
    set?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    disconnect?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    delete?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    connect?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    update?: BIZCertificationImageModelUpdateWithWhereUniqueWithoutBiz_userInput | BIZCertificationImageModelUpdateWithWhereUniqueWithoutBiz_userInput[]
    updateMany?: BIZCertificationImageModelUpdateManyWithWhereWithoutBiz_userInput | BIZCertificationImageModelUpdateManyWithWhereWithoutBiz_userInput[]
    deleteMany?: BIZCertificationImageModelScalarWhereInput | BIZCertificationImageModelScalarWhereInput[]
  }

  export type REAgentModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    upsert?: REAgentModelUpsertWithoutBaseInput
    disconnect?: REAgentModelWhereInput | boolean
    delete?: REAgentModelWhereInput | boolean
    connect?: REAgentModelWhereUniqueInput
    update?: XOR<XOR<REAgentModelUpdateToOneWithWhereWithoutBaseInput, REAgentModelUpdateWithoutBaseInput>, REAgentModelUncheckedUpdateWithoutBaseInput>
  }

  export type HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    upsert?: HSProviderModelUpsertWithoutBaseInput
    disconnect?: HSProviderModelWhereInput | boolean
    delete?: HSProviderModelWhereInput | boolean
    connect?: HSProviderModelWhereUniqueInput
    update?: XOR<XOR<HSProviderModelUpdateToOneWithWhereWithoutBaseInput, HSProviderModelUpdateWithoutBaseInput>, HSProviderModelUncheckedUpdateWithoutBaseInput>
  }

  export type OauthAccountModelUncheckedUpdateManyWithoutBiz_userNestedInput = {
    create?: XOR<OauthAccountModelCreateWithoutBiz_userInput, OauthAccountModelUncheckedCreateWithoutBiz_userInput> | OauthAccountModelCreateWithoutBiz_userInput[] | OauthAccountModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: OauthAccountModelCreateOrConnectWithoutBiz_userInput | OauthAccountModelCreateOrConnectWithoutBiz_userInput[]
    upsert?: OauthAccountModelUpsertWithWhereUniqueWithoutBiz_userInput | OauthAccountModelUpsertWithWhereUniqueWithoutBiz_userInput[]
    createMany?: OauthAccountModelCreateManyBiz_userInputEnvelope
    set?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    disconnect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    delete?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    connect?: OauthAccountModelWhereUniqueInput | OauthAccountModelWhereUniqueInput[]
    update?: OauthAccountModelUpdateWithWhereUniqueWithoutBiz_userInput | OauthAccountModelUpdateWithWhereUniqueWithoutBiz_userInput[]
    updateMany?: OauthAccountModelUpdateManyWithWhereWithoutBiz_userInput | OauthAccountModelUpdateManyWithWhereWithoutBiz_userInput[]
    deleteMany?: OauthAccountModelScalarWhereInput | OauthAccountModelScalarWhereInput[]
  }

  export type BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userNestedInput = {
    create?: XOR<BIZCertificationImageModelCreateWithoutBiz_userInput, BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput> | BIZCertificationImageModelCreateWithoutBiz_userInput[] | BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput[]
    connectOrCreate?: BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput | BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput[]
    upsert?: BIZCertificationImageModelUpsertWithWhereUniqueWithoutBiz_userInput | BIZCertificationImageModelUpsertWithWhereUniqueWithoutBiz_userInput[]
    createMany?: BIZCertificationImageModelCreateManyBiz_userInputEnvelope
    set?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    disconnect?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    delete?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    connect?: BIZCertificationImageModelWhereUniqueInput | BIZCertificationImageModelWhereUniqueInput[]
    update?: BIZCertificationImageModelUpdateWithWhereUniqueWithoutBiz_userInput | BIZCertificationImageModelUpdateWithWhereUniqueWithoutBiz_userInput[]
    updateMany?: BIZCertificationImageModelUpdateManyWithWhereWithoutBiz_userInput | BIZCertificationImageModelUpdateManyWithWhereWithoutBiz_userInput[]
    deleteMany?: BIZCertificationImageModelScalarWhereInput | BIZCertificationImageModelScalarWhereInput[]
  }

  export type BIZUserModelCreateNestedOneWithoutBiz_certification_imagesInput = {
    create?: XOR<BIZUserModelCreateWithoutBiz_certification_imagesInput, BIZUserModelUncheckedCreateWithoutBiz_certification_imagesInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutBiz_certification_imagesInput
    connect?: BIZUserModelWhereUniqueInput
  }

  export type EnumImageAccessTypeFieldUpdateOperationsInput = {
    set?: ImageAccessType
  }

  export type BIZUserModelUpdateOneRequiredWithoutBiz_certification_imagesNestedInput = {
    create?: XOR<BIZUserModelCreateWithoutBiz_certification_imagesInput, BIZUserModelUncheckedCreateWithoutBiz_certification_imagesInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutBiz_certification_imagesInput
    upsert?: BIZUserModelUpsertWithoutBiz_certification_imagesInput
    connect?: BIZUserModelWhereUniqueInput
    update?: XOR<XOR<BIZUserModelUpdateToOneWithWhereWithoutBiz_certification_imagesInput, BIZUserModelUpdateWithoutBiz_certification_imagesInput>, BIZUserModelUncheckedUpdateWithoutBiz_certification_imagesInput>
  }

  export type BIZUserModelCreateNestedOneWithoutRe_agentInput = {
    create?: XOR<BIZUserModelCreateWithoutRe_agentInput, BIZUserModelUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutRe_agentInput
    connect?: BIZUserModelWhereUniqueInput
  }

  export type REExpertiseModelCreateNestedOneWithoutRe_agentsInput = {
    create?: XOR<REExpertiseModelCreateWithoutRe_agentsInput, REExpertiseModelUncheckedCreateWithoutRe_agentsInput>
    connectOrCreate?: REExpertiseModelCreateOrConnectWithoutRe_agentsInput
    connect?: REExpertiseModelWhereUniqueInput
  }

  export type REPortfolioModelCreateNestedManyWithoutRe_agentInput = {
    create?: XOR<REPortfolioModelCreateWithoutRe_agentInput, REPortfolioModelUncheckedCreateWithoutRe_agentInput> | REPortfolioModelCreateWithoutRe_agentInput[] | REPortfolioModelUncheckedCreateWithoutRe_agentInput[]
    connectOrCreate?: REPortfolioModelCreateOrConnectWithoutRe_agentInput | REPortfolioModelCreateOrConnectWithoutRe_agentInput[]
    createMany?: REPortfolioModelCreateManyRe_agentInputEnvelope
    connect?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
  }

  export type REPortfolioModelUncheckedCreateNestedManyWithoutRe_agentInput = {
    create?: XOR<REPortfolioModelCreateWithoutRe_agentInput, REPortfolioModelUncheckedCreateWithoutRe_agentInput> | REPortfolioModelCreateWithoutRe_agentInput[] | REPortfolioModelUncheckedCreateWithoutRe_agentInput[]
    connectOrCreate?: REPortfolioModelCreateOrConnectWithoutRe_agentInput | REPortfolioModelCreateOrConnectWithoutRe_agentInput[]
    createMany?: REPortfolioModelCreateManyRe_agentInputEnvelope
    connect?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
  }

  export type BIZUserModelUpdateOneRequiredWithoutRe_agentNestedInput = {
    create?: XOR<BIZUserModelCreateWithoutRe_agentInput, BIZUserModelUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutRe_agentInput
    upsert?: BIZUserModelUpsertWithoutRe_agentInput
    connect?: BIZUserModelWhereUniqueInput
    update?: XOR<XOR<BIZUserModelUpdateToOneWithWhereWithoutRe_agentInput, BIZUserModelUpdateWithoutRe_agentInput>, BIZUserModelUncheckedUpdateWithoutRe_agentInput>
  }

  export type REExpertiseModelUpdateOneRequiredWithoutRe_agentsNestedInput = {
    create?: XOR<REExpertiseModelCreateWithoutRe_agentsInput, REExpertiseModelUncheckedCreateWithoutRe_agentsInput>
    connectOrCreate?: REExpertiseModelCreateOrConnectWithoutRe_agentsInput
    upsert?: REExpertiseModelUpsertWithoutRe_agentsInput
    connect?: REExpertiseModelWhereUniqueInput
    update?: XOR<XOR<REExpertiseModelUpdateToOneWithWhereWithoutRe_agentsInput, REExpertiseModelUpdateWithoutRe_agentsInput>, REExpertiseModelUncheckedUpdateWithoutRe_agentsInput>
  }

  export type REPortfolioModelUpdateManyWithoutRe_agentNestedInput = {
    create?: XOR<REPortfolioModelCreateWithoutRe_agentInput, REPortfolioModelUncheckedCreateWithoutRe_agentInput> | REPortfolioModelCreateWithoutRe_agentInput[] | REPortfolioModelUncheckedCreateWithoutRe_agentInput[]
    connectOrCreate?: REPortfolioModelCreateOrConnectWithoutRe_agentInput | REPortfolioModelCreateOrConnectWithoutRe_agentInput[]
    upsert?: REPortfolioModelUpsertWithWhereUniqueWithoutRe_agentInput | REPortfolioModelUpsertWithWhereUniqueWithoutRe_agentInput[]
    createMany?: REPortfolioModelCreateManyRe_agentInputEnvelope
    set?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    disconnect?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    delete?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    connect?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    update?: REPortfolioModelUpdateWithWhereUniqueWithoutRe_agentInput | REPortfolioModelUpdateWithWhereUniqueWithoutRe_agentInput[]
    updateMany?: REPortfolioModelUpdateManyWithWhereWithoutRe_agentInput | REPortfolioModelUpdateManyWithWhereWithoutRe_agentInput[]
    deleteMany?: REPortfolioModelScalarWhereInput | REPortfolioModelScalarWhereInput[]
  }

  export type REPortfolioModelUncheckedUpdateManyWithoutRe_agentNestedInput = {
    create?: XOR<REPortfolioModelCreateWithoutRe_agentInput, REPortfolioModelUncheckedCreateWithoutRe_agentInput> | REPortfolioModelCreateWithoutRe_agentInput[] | REPortfolioModelUncheckedCreateWithoutRe_agentInput[]
    connectOrCreate?: REPortfolioModelCreateOrConnectWithoutRe_agentInput | REPortfolioModelCreateOrConnectWithoutRe_agentInput[]
    upsert?: REPortfolioModelUpsertWithWhereUniqueWithoutRe_agentInput | REPortfolioModelUpsertWithWhereUniqueWithoutRe_agentInput[]
    createMany?: REPortfolioModelCreateManyRe_agentInputEnvelope
    set?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    disconnect?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    delete?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    connect?: REPortfolioModelWhereUniqueInput | REPortfolioModelWhereUniqueInput[]
    update?: REPortfolioModelUpdateWithWhereUniqueWithoutRe_agentInput | REPortfolioModelUpdateWithWhereUniqueWithoutRe_agentInput[]
    updateMany?: REPortfolioModelUpdateManyWithWhereWithoutRe_agentInput | REPortfolioModelUpdateManyWithWhereWithoutRe_agentInput[]
    deleteMany?: REPortfolioModelScalarWhereInput | REPortfolioModelScalarWhereInput[]
  }

  export type REAgentModelCreateNestedManyWithoutExpertiseInput = {
    create?: XOR<REAgentModelCreateWithoutExpertiseInput, REAgentModelUncheckedCreateWithoutExpertiseInput> | REAgentModelCreateWithoutExpertiseInput[] | REAgentModelUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: REAgentModelCreateOrConnectWithoutExpertiseInput | REAgentModelCreateOrConnectWithoutExpertiseInput[]
    createMany?: REAgentModelCreateManyExpertiseInputEnvelope
    connect?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
  }

  export type REAgentModelUncheckedCreateNestedManyWithoutExpertiseInput = {
    create?: XOR<REAgentModelCreateWithoutExpertiseInput, REAgentModelUncheckedCreateWithoutExpertiseInput> | REAgentModelCreateWithoutExpertiseInput[] | REAgentModelUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: REAgentModelCreateOrConnectWithoutExpertiseInput | REAgentModelCreateOrConnectWithoutExpertiseInput[]
    createMany?: REAgentModelCreateManyExpertiseInputEnvelope
    connect?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
  }

  export type REAgentModelUpdateManyWithoutExpertiseNestedInput = {
    create?: XOR<REAgentModelCreateWithoutExpertiseInput, REAgentModelUncheckedCreateWithoutExpertiseInput> | REAgentModelCreateWithoutExpertiseInput[] | REAgentModelUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: REAgentModelCreateOrConnectWithoutExpertiseInput | REAgentModelCreateOrConnectWithoutExpertiseInput[]
    upsert?: REAgentModelUpsertWithWhereUniqueWithoutExpertiseInput | REAgentModelUpsertWithWhereUniqueWithoutExpertiseInput[]
    createMany?: REAgentModelCreateManyExpertiseInputEnvelope
    set?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    disconnect?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    delete?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    connect?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    update?: REAgentModelUpdateWithWhereUniqueWithoutExpertiseInput | REAgentModelUpdateWithWhereUniqueWithoutExpertiseInput[]
    updateMany?: REAgentModelUpdateManyWithWhereWithoutExpertiseInput | REAgentModelUpdateManyWithWhereWithoutExpertiseInput[]
    deleteMany?: REAgentModelScalarWhereInput | REAgentModelScalarWhereInput[]
  }

  export type REAgentModelUncheckedUpdateManyWithoutExpertiseNestedInput = {
    create?: XOR<REAgentModelCreateWithoutExpertiseInput, REAgentModelUncheckedCreateWithoutExpertiseInput> | REAgentModelCreateWithoutExpertiseInput[] | REAgentModelUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: REAgentModelCreateOrConnectWithoutExpertiseInput | REAgentModelCreateOrConnectWithoutExpertiseInput[]
    upsert?: REAgentModelUpsertWithWhereUniqueWithoutExpertiseInput | REAgentModelUpsertWithWhereUniqueWithoutExpertiseInput[]
    createMany?: REAgentModelCreateManyExpertiseInputEnvelope
    set?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    disconnect?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    delete?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    connect?: REAgentModelWhereUniqueInput | REAgentModelWhereUniqueInput[]
    update?: REAgentModelUpdateWithWhereUniqueWithoutExpertiseInput | REAgentModelUpdateWithWhereUniqueWithoutExpertiseInput[]
    updateMany?: REAgentModelUpdateManyWithWhereWithoutExpertiseInput | REAgentModelUpdateManyWithWhereWithoutExpertiseInput[]
    deleteMany?: REAgentModelScalarWhereInput | REAgentModelScalarWhereInput[]
  }

  export type BIZUserModelCreateNestedOneWithoutHs_providerInput = {
    create?: XOR<BIZUserModelCreateWithoutHs_providerInput, BIZUserModelUncheckedCreateWithoutHs_providerInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutHs_providerInput
    connect?: BIZUserModelWhereUniqueInput
  }

  export type HSSubExpertiseRelationModelCreateNestedManyWithoutHs_providerInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput> | HSSubExpertiseRelationModelCreateWithoutHs_providerInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput | HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput[]
    createMany?: HSSubExpertiseRelationModelCreateManyHs_providerInputEnvelope
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
  }

  export type HSPortfolioModelCreateNestedManyWithoutHs_providerInput = {
    create?: XOR<HSPortfolioModelCreateWithoutHs_providerInput, HSPortfolioModelUncheckedCreateWithoutHs_providerInput> | HSPortfolioModelCreateWithoutHs_providerInput[] | HSPortfolioModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSPortfolioModelCreateOrConnectWithoutHs_providerInput | HSPortfolioModelCreateOrConnectWithoutHs_providerInput[]
    createMany?: HSPortfolioModelCreateManyHs_providerInputEnvelope
    connect?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
  }

  export type HSSubExpertiseRelationModelUncheckedCreateNestedManyWithoutHs_providerInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput> | HSSubExpertiseRelationModelCreateWithoutHs_providerInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput | HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput[]
    createMany?: HSSubExpertiseRelationModelCreateManyHs_providerInputEnvelope
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
  }

  export type HSPortfolioModelUncheckedCreateNestedManyWithoutHs_providerInput = {
    create?: XOR<HSPortfolioModelCreateWithoutHs_providerInput, HSPortfolioModelUncheckedCreateWithoutHs_providerInput> | HSPortfolioModelCreateWithoutHs_providerInput[] | HSPortfolioModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSPortfolioModelCreateOrConnectWithoutHs_providerInput | HSPortfolioModelCreateOrConnectWithoutHs_providerInput[]
    createMany?: HSPortfolioModelCreateManyHs_providerInputEnvelope
    connect?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
  }

  export type BIZUserModelUpdateOneRequiredWithoutHs_providerNestedInput = {
    create?: XOR<BIZUserModelCreateWithoutHs_providerInput, BIZUserModelUncheckedCreateWithoutHs_providerInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutHs_providerInput
    upsert?: BIZUserModelUpsertWithoutHs_providerInput
    connect?: BIZUserModelWhereUniqueInput
    update?: XOR<XOR<BIZUserModelUpdateToOneWithWhereWithoutHs_providerInput, BIZUserModelUpdateWithoutHs_providerInput>, BIZUserModelUncheckedUpdateWithoutHs_providerInput>
  }

  export type HSSubExpertiseRelationModelUpdateManyWithoutHs_providerNestedInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput> | HSSubExpertiseRelationModelCreateWithoutHs_providerInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput | HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput[]
    upsert?: HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutHs_providerInput | HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutHs_providerInput[]
    createMany?: HSSubExpertiseRelationModelCreateManyHs_providerInputEnvelope
    set?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    disconnect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    delete?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    update?: HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutHs_providerInput | HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutHs_providerInput[]
    updateMany?: HSSubExpertiseRelationModelUpdateManyWithWhereWithoutHs_providerInput | HSSubExpertiseRelationModelUpdateManyWithWhereWithoutHs_providerInput[]
    deleteMany?: HSSubExpertiseRelationModelScalarWhereInput | HSSubExpertiseRelationModelScalarWhereInput[]
  }

  export type HSPortfolioModelUpdateManyWithoutHs_providerNestedInput = {
    create?: XOR<HSPortfolioModelCreateWithoutHs_providerInput, HSPortfolioModelUncheckedCreateWithoutHs_providerInput> | HSPortfolioModelCreateWithoutHs_providerInput[] | HSPortfolioModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSPortfolioModelCreateOrConnectWithoutHs_providerInput | HSPortfolioModelCreateOrConnectWithoutHs_providerInput[]
    upsert?: HSPortfolioModelUpsertWithWhereUniqueWithoutHs_providerInput | HSPortfolioModelUpsertWithWhereUniqueWithoutHs_providerInput[]
    createMany?: HSPortfolioModelCreateManyHs_providerInputEnvelope
    set?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    disconnect?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    delete?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    connect?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    update?: HSPortfolioModelUpdateWithWhereUniqueWithoutHs_providerInput | HSPortfolioModelUpdateWithWhereUniqueWithoutHs_providerInput[]
    updateMany?: HSPortfolioModelUpdateManyWithWhereWithoutHs_providerInput | HSPortfolioModelUpdateManyWithWhereWithoutHs_providerInput[]
    deleteMany?: HSPortfolioModelScalarWhereInput | HSPortfolioModelScalarWhereInput[]
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateManyWithoutHs_providerNestedInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput> | HSSubExpertiseRelationModelCreateWithoutHs_providerInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput | HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput[]
    upsert?: HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutHs_providerInput | HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutHs_providerInput[]
    createMany?: HSSubExpertiseRelationModelCreateManyHs_providerInputEnvelope
    set?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    disconnect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    delete?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    update?: HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutHs_providerInput | HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutHs_providerInput[]
    updateMany?: HSSubExpertiseRelationModelUpdateManyWithWhereWithoutHs_providerInput | HSSubExpertiseRelationModelUpdateManyWithWhereWithoutHs_providerInput[]
    deleteMany?: HSSubExpertiseRelationModelScalarWhereInput | HSSubExpertiseRelationModelScalarWhereInput[]
  }

  export type HSPortfolioModelUncheckedUpdateManyWithoutHs_providerNestedInput = {
    create?: XOR<HSPortfolioModelCreateWithoutHs_providerInput, HSPortfolioModelUncheckedCreateWithoutHs_providerInput> | HSPortfolioModelCreateWithoutHs_providerInput[] | HSPortfolioModelUncheckedCreateWithoutHs_providerInput[]
    connectOrCreate?: HSPortfolioModelCreateOrConnectWithoutHs_providerInput | HSPortfolioModelCreateOrConnectWithoutHs_providerInput[]
    upsert?: HSPortfolioModelUpsertWithWhereUniqueWithoutHs_providerInput | HSPortfolioModelUpsertWithWhereUniqueWithoutHs_providerInput[]
    createMany?: HSPortfolioModelCreateManyHs_providerInputEnvelope
    set?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    disconnect?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    delete?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    connect?: HSPortfolioModelWhereUniqueInput | HSPortfolioModelWhereUniqueInput[]
    update?: HSPortfolioModelUpdateWithWhereUniqueWithoutHs_providerInput | HSPortfolioModelUpdateWithWhereUniqueWithoutHs_providerInput[]
    updateMany?: HSPortfolioModelUpdateManyWithWhereWithoutHs_providerInput | HSPortfolioModelUpdateManyWithWhereWithoutHs_providerInput[]
    deleteMany?: HSPortfolioModelScalarWhereInput | HSPortfolioModelScalarWhereInput[]
  }

  export type HSSubExpertiseRelationModelCreateNestedManyWithoutSub_expertiseInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput> | HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput | HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput[]
    createMany?: HSSubExpertiseRelationModelCreateManySub_expertiseInputEnvelope
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
  }

  export type HSSuperExpertiseModelCreateNestedOneWithoutSub_expertisesInput = {
    create?: XOR<HSSuperExpertiseModelCreateWithoutSub_expertisesInput, HSSuperExpertiseModelUncheckedCreateWithoutSub_expertisesInput>
    connectOrCreate?: HSSuperExpertiseModelCreateOrConnectWithoutSub_expertisesInput
    connect?: HSSuperExpertiseModelWhereUniqueInput
  }

  export type HSSubExpertiseRelationModelUncheckedCreateNestedManyWithoutSub_expertiseInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput> | HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput | HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput[]
    createMany?: HSSubExpertiseRelationModelCreateManySub_expertiseInputEnvelope
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
  }

  export type HSSubExpertiseRelationModelUpdateManyWithoutSub_expertiseNestedInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput> | HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput | HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput[]
    upsert?: HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutSub_expertiseInput | HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutSub_expertiseInput[]
    createMany?: HSSubExpertiseRelationModelCreateManySub_expertiseInputEnvelope
    set?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    disconnect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    delete?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    update?: HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutSub_expertiseInput | HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutSub_expertiseInput[]
    updateMany?: HSSubExpertiseRelationModelUpdateManyWithWhereWithoutSub_expertiseInput | HSSubExpertiseRelationModelUpdateManyWithWhereWithoutSub_expertiseInput[]
    deleteMany?: HSSubExpertiseRelationModelScalarWhereInput | HSSubExpertiseRelationModelScalarWhereInput[]
  }

  export type HSSuperExpertiseModelUpdateOneRequiredWithoutSub_expertisesNestedInput = {
    create?: XOR<HSSuperExpertiseModelCreateWithoutSub_expertisesInput, HSSuperExpertiseModelUncheckedCreateWithoutSub_expertisesInput>
    connectOrCreate?: HSSuperExpertiseModelCreateOrConnectWithoutSub_expertisesInput
    upsert?: HSSuperExpertiseModelUpsertWithoutSub_expertisesInput
    connect?: HSSuperExpertiseModelWhereUniqueInput
    update?: XOR<XOR<HSSuperExpertiseModelUpdateToOneWithWhereWithoutSub_expertisesInput, HSSuperExpertiseModelUpdateWithoutSub_expertisesInput>, HSSuperExpertiseModelUncheckedUpdateWithoutSub_expertisesInput>
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateManyWithoutSub_expertiseNestedInput = {
    create?: XOR<HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput> | HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput[] | HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput[]
    connectOrCreate?: HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput | HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput[]
    upsert?: HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutSub_expertiseInput | HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutSub_expertiseInput[]
    createMany?: HSSubExpertiseRelationModelCreateManySub_expertiseInputEnvelope
    set?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    disconnect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    delete?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    connect?: HSSubExpertiseRelationModelWhereUniqueInput | HSSubExpertiseRelationModelWhereUniqueInput[]
    update?: HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutSub_expertiseInput | HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutSub_expertiseInput[]
    updateMany?: HSSubExpertiseRelationModelUpdateManyWithWhereWithoutSub_expertiseInput | HSSubExpertiseRelationModelUpdateManyWithWhereWithoutSub_expertiseInput[]
    deleteMany?: HSSubExpertiseRelationModelScalarWhereInput | HSSubExpertiseRelationModelScalarWhereInput[]
  }

  export type HSSubExpertiseModelCreateNestedManyWithoutSuper_expertiseInput = {
    create?: XOR<HSSubExpertiseModelCreateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput> | HSSubExpertiseModelCreateWithoutSuper_expertiseInput[] | HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput[]
    connectOrCreate?: HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput | HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput[]
    createMany?: HSSubExpertiseModelCreateManySuper_expertiseInputEnvelope
    connect?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
  }

  export type HSSubExpertiseModelUncheckedCreateNestedManyWithoutSuper_expertiseInput = {
    create?: XOR<HSSubExpertiseModelCreateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput> | HSSubExpertiseModelCreateWithoutSuper_expertiseInput[] | HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput[]
    connectOrCreate?: HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput | HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput[]
    createMany?: HSSubExpertiseModelCreateManySuper_expertiseInputEnvelope
    connect?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
  }

  export type HSSubExpertiseModelUpdateManyWithoutSuper_expertiseNestedInput = {
    create?: XOR<HSSubExpertiseModelCreateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput> | HSSubExpertiseModelCreateWithoutSuper_expertiseInput[] | HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput[]
    connectOrCreate?: HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput | HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput[]
    upsert?: HSSubExpertiseModelUpsertWithWhereUniqueWithoutSuper_expertiseInput | HSSubExpertiseModelUpsertWithWhereUniqueWithoutSuper_expertiseInput[]
    createMany?: HSSubExpertiseModelCreateManySuper_expertiseInputEnvelope
    set?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    disconnect?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    delete?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    connect?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    update?: HSSubExpertiseModelUpdateWithWhereUniqueWithoutSuper_expertiseInput | HSSubExpertiseModelUpdateWithWhereUniqueWithoutSuper_expertiseInput[]
    updateMany?: HSSubExpertiseModelUpdateManyWithWhereWithoutSuper_expertiseInput | HSSubExpertiseModelUpdateManyWithWhereWithoutSuper_expertiseInput[]
    deleteMany?: HSSubExpertiseModelScalarWhereInput | HSSubExpertiseModelScalarWhereInput[]
  }

  export type HSSubExpertiseModelUncheckedUpdateManyWithoutSuper_expertiseNestedInput = {
    create?: XOR<HSSubExpertiseModelCreateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput> | HSSubExpertiseModelCreateWithoutSuper_expertiseInput[] | HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput[]
    connectOrCreate?: HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput | HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput[]
    upsert?: HSSubExpertiseModelUpsertWithWhereUniqueWithoutSuper_expertiseInput | HSSubExpertiseModelUpsertWithWhereUniqueWithoutSuper_expertiseInput[]
    createMany?: HSSubExpertiseModelCreateManySuper_expertiseInputEnvelope
    set?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    disconnect?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    delete?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    connect?: HSSubExpertiseModelWhereUniqueInput | HSSubExpertiseModelWhereUniqueInput[]
    update?: HSSubExpertiseModelUpdateWithWhereUniqueWithoutSuper_expertiseInput | HSSubExpertiseModelUpdateWithWhereUniqueWithoutSuper_expertiseInput[]
    updateMany?: HSSubExpertiseModelUpdateManyWithWhereWithoutSuper_expertiseInput | HSSubExpertiseModelUpdateManyWithWhereWithoutSuper_expertiseInput[]
    deleteMany?: HSSubExpertiseModelScalarWhereInput | HSSubExpertiseModelScalarWhereInput[]
  }

  export type HSProviderModelCreateNestedOneWithoutExpertise_relationInput = {
    create?: XOR<HSProviderModelCreateWithoutExpertise_relationInput, HSProviderModelUncheckedCreateWithoutExpertise_relationInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutExpertise_relationInput
    connect?: HSProviderModelWhereUniqueInput
  }

  export type HSSubExpertiseModelCreateNestedOneWithoutRelationsInput = {
    create?: XOR<HSSubExpertiseModelCreateWithoutRelationsInput, HSSubExpertiseModelUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: HSSubExpertiseModelCreateOrConnectWithoutRelationsInput
    connect?: HSSubExpertiseModelWhereUniqueInput
  }

  export type HSProviderModelUpdateOneRequiredWithoutExpertise_relationNestedInput = {
    create?: XOR<HSProviderModelCreateWithoutExpertise_relationInput, HSProviderModelUncheckedCreateWithoutExpertise_relationInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutExpertise_relationInput
    upsert?: HSProviderModelUpsertWithoutExpertise_relationInput
    connect?: HSProviderModelWhereUniqueInput
    update?: XOR<XOR<HSProviderModelUpdateToOneWithWhereWithoutExpertise_relationInput, HSProviderModelUpdateWithoutExpertise_relationInput>, HSProviderModelUncheckedUpdateWithoutExpertise_relationInput>
  }

  export type HSSubExpertiseModelUpdateOneRequiredWithoutRelationsNestedInput = {
    create?: XOR<HSSubExpertiseModelCreateWithoutRelationsInput, HSSubExpertiseModelUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: HSSubExpertiseModelCreateOrConnectWithoutRelationsInput
    upsert?: HSSubExpertiseModelUpsertWithoutRelationsInput
    connect?: HSSubExpertiseModelWhereUniqueInput
    update?: XOR<XOR<HSSubExpertiseModelUpdateToOneWithWhereWithoutRelationsInput, HSSubExpertiseModelUpdateWithoutRelationsInput>, HSSubExpertiseModelUncheckedUpdateWithoutRelationsInput>
  }

  export type REAgentModelCreateNestedOneWithoutPortfoliosInput = {
    create?: XOR<REAgentModelCreateWithoutPortfoliosInput, REAgentModelUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutPortfoliosInput
    connect?: REAgentModelWhereUniqueInput
  }

  export type REAgentModelUpdateOneRequiredWithoutPortfoliosNestedInput = {
    create?: XOR<REAgentModelCreateWithoutPortfoliosInput, REAgentModelUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutPortfoliosInput
    upsert?: REAgentModelUpsertWithoutPortfoliosInput
    connect?: REAgentModelWhereUniqueInput
    update?: XOR<XOR<REAgentModelUpdateToOneWithWhereWithoutPortfoliosInput, REAgentModelUpdateWithoutPortfoliosInput>, REAgentModelUncheckedUpdateWithoutPortfoliosInput>
  }

  export type HSProviderModelCreateNestedOneWithoutPortfoliosInput = {
    create?: XOR<HSProviderModelCreateWithoutPortfoliosInput, HSProviderModelUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutPortfoliosInput
    connect?: HSProviderModelWhereUniqueInput
  }

  export type HSProviderModelUpdateOneRequiredWithoutPortfoliosNestedInput = {
    create?: XOR<HSProviderModelCreateWithoutPortfoliosInput, HSProviderModelUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutPortfoliosInput
    upsert?: HSProviderModelUpsertWithoutPortfoliosInput
    connect?: HSProviderModelWhereUniqueInput
    update?: XOR<XOR<HSProviderModelUpdateToOneWithWhereWithoutPortfoliosInput, HSProviderModelUpdateWithoutPortfoliosInput>, HSProviderModelUncheckedUpdateWithoutPortfoliosInput>
  }

  export type ClientModelCreateNestedOneWithoutOauth_accountsInput = {
    create?: XOR<ClientModelCreateWithoutOauth_accountsInput, ClientModelUncheckedCreateWithoutOauth_accountsInput>
    connectOrCreate?: ClientModelCreateOrConnectWithoutOauth_accountsInput
    connect?: ClientModelWhereUniqueInput
  }

  export type BIZUserModelCreateNestedOneWithoutOauth_accountsInput = {
    create?: XOR<BIZUserModelCreateWithoutOauth_accountsInput, BIZUserModelUncheckedCreateWithoutOauth_accountsInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutOauth_accountsInput
    connect?: BIZUserModelWhereUniqueInput
  }

  export type EnumOauthTypeFieldUpdateOperationsInput = {
    set?: OauthType
  }

  export type ClientModelUpdateOneWithoutOauth_accountsNestedInput = {
    create?: XOR<ClientModelCreateWithoutOauth_accountsInput, ClientModelUncheckedCreateWithoutOauth_accountsInput>
    connectOrCreate?: ClientModelCreateOrConnectWithoutOauth_accountsInput
    upsert?: ClientModelUpsertWithoutOauth_accountsInput
    disconnect?: ClientModelWhereInput | boolean
    delete?: ClientModelWhereInput | boolean
    connect?: ClientModelWhereUniqueInput
    update?: XOR<XOR<ClientModelUpdateToOneWithWhereWithoutOauth_accountsInput, ClientModelUpdateWithoutOauth_accountsInput>, ClientModelUncheckedUpdateWithoutOauth_accountsInput>
  }

  export type BIZUserModelUpdateOneWithoutOauth_accountsNestedInput = {
    create?: XOR<BIZUserModelCreateWithoutOauth_accountsInput, BIZUserModelUncheckedCreateWithoutOauth_accountsInput>
    connectOrCreate?: BIZUserModelCreateOrConnectWithoutOauth_accountsInput
    upsert?: BIZUserModelUpsertWithoutOauth_accountsInput
    disconnect?: BIZUserModelWhereInput | boolean
    delete?: BIZUserModelWhereInput | boolean
    connect?: BIZUserModelWhereUniqueInput
    update?: XOR<XOR<BIZUserModelUpdateToOneWithWhereWithoutOauth_accountsInput, BIZUserModelUpdateWithoutOauth_accountsInput>, BIZUserModelUncheckedUpdateWithoutOauth_accountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTermsTypeFilter<$PrismaModel = never> = {
    equals?: TermsType | EnumTermsTypeFieldRefInput<$PrismaModel>
    in?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    notIn?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTermsTypeFilter<$PrismaModel> | TermsType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTermsTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: TermsType | EnumTermsTypeFieldRefInput<$PrismaModel>
    in?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    notIn?: TermsType[] | ListEnumTermsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTermsTypeWithAggregatesFilter<$PrismaModel> | TermsType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermsTypeFilter<$PrismaModel>
    _max?: NestedEnumTermsTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderTypeNullableFilter<$PrismaModel = never> = {
    equals?: GenderType | EnumGenderTypeFieldRefInput<$PrismaModel> | null
    in?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    notIn?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderTypeNullableFilter<$PrismaModel> | GenderType | null
  }

  export type NestedEnumGenderTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: GenderType | EnumGenderTypeFieldRefInput<$PrismaModel> | null
    in?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    notIn?: GenderType[] | ListEnumGenderTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderTypeNullableWithAggregatesFilter<$PrismaModel> | GenderType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumImageAccessTypeFilter<$PrismaModel = never> = {
    equals?: ImageAccessType | EnumImageAccessTypeFieldRefInput<$PrismaModel>
    in?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    notIn?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageAccessTypeFilter<$PrismaModel> | ImageAccessType
  }

  export type NestedEnumImageAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: ImageAccessType | EnumImageAccessTypeFieldRefInput<$PrismaModel>
    in?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    notIn?: ImageAccessType[] | ListEnumImageAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageAccessTypeWithAggregatesFilter<$PrismaModel> | ImageAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumImageAccessTypeFilter<$PrismaModel>
  }

  export type NestedEnumOauthTypeFilter<$PrismaModel = never> = {
    equals?: OauthType | EnumOauthTypeFieldRefInput<$PrismaModel>
    in?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    notIn?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOauthTypeFilter<$PrismaModel> | OauthType
  }

  export type NestedEnumOauthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: OauthType | EnumOauthTypeFieldRefInput<$PrismaModel>
    in?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    notIn?: OauthType[] | ListEnumOauthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOauthTypeWithAggregatesFilter<$PrismaModel> | OauthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOauthTypeFilter<$PrismaModel>
    _max?: NestedEnumOauthTypeFilter<$PrismaModel>
  }

  export type TermsAgreementModelCreateWithoutTermsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user: UserModelCreateNestedOneWithoutTerms_agreementsInput
  }

  export type TermsAgreementModelUncheckedCreateWithoutTermsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user_id: string
  }

  export type TermsAgreementModelCreateOrConnectWithoutTermsInput = {
    where: TermsAgreementModelWhereUniqueInput
    create: XOR<TermsAgreementModelCreateWithoutTermsInput, TermsAgreementModelUncheckedCreateWithoutTermsInput>
  }

  export type TermsAgreementModelCreateManyTermsInputEnvelope = {
    data: TermsAgreementModelCreateManyTermsInput | TermsAgreementModelCreateManyTermsInput[]
    skipDuplicates?: boolean
  }

  export type TermsAgreementModelUpsertWithWhereUniqueWithoutTermsInput = {
    where: TermsAgreementModelWhereUniqueInput
    update: XOR<TermsAgreementModelUpdateWithoutTermsInput, TermsAgreementModelUncheckedUpdateWithoutTermsInput>
    create: XOR<TermsAgreementModelCreateWithoutTermsInput, TermsAgreementModelUncheckedCreateWithoutTermsInput>
  }

  export type TermsAgreementModelUpdateWithWhereUniqueWithoutTermsInput = {
    where: TermsAgreementModelWhereUniqueInput
    data: XOR<TermsAgreementModelUpdateWithoutTermsInput, TermsAgreementModelUncheckedUpdateWithoutTermsInput>
  }

  export type TermsAgreementModelUpdateManyWithWhereWithoutTermsInput = {
    where: TermsAgreementModelScalarWhereInput
    data: XOR<TermsAgreementModelUpdateManyMutationInput, TermsAgreementModelUncheckedUpdateManyWithoutTermsInput>
  }

  export type TermsAgreementModelScalarWhereInput = {
    AND?: TermsAgreementModelScalarWhereInput | TermsAgreementModelScalarWhereInput[]
    OR?: TermsAgreementModelScalarWhereInput[]
    NOT?: TermsAgreementModelScalarWhereInput | TermsAgreementModelScalarWhereInput[]
    id?: StringFilter<"TermsAgreementModel"> | string
    created_at?: DateTimeFilter<"TermsAgreementModel"> | Date | string
    updated_at?: DateTimeFilter<"TermsAgreementModel"> | Date | string
    is_deleted?: BoolFilter<"TermsAgreementModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"TermsAgreementModel"> | Date | string | null
    terms_id?: StringFilter<"TermsAgreementModel"> | string
    user_id?: StringFilter<"TermsAgreementModel"> | string
  }

  export type TermsModelCreateWithoutAgreementsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    version: string
    url: string
    is_required: boolean
    type: TermsType
  }

  export type TermsModelUncheckedCreateWithoutAgreementsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    version: string
    url: string
    is_required: boolean
    type: TermsType
  }

  export type TermsModelCreateOrConnectWithoutAgreementsInput = {
    where: TermsModelWhereUniqueInput
    create: XOR<TermsModelCreateWithoutAgreementsInput, TermsModelUncheckedCreateWithoutAgreementsInput>
  }

  export type UserModelCreateWithoutTerms_agreementsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    client?: ClientModelCreateNestedOneWithoutBaseInput
    biz_user?: BIZUserModelCreateNestedOneWithoutBaseInput
  }

  export type UserModelUncheckedCreateWithoutTerms_agreementsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    client?: ClientModelUncheckedCreateNestedOneWithoutBaseInput
    biz_user?: BIZUserModelUncheckedCreateNestedOneWithoutBaseInput
  }

  export type UserModelCreateOrConnectWithoutTerms_agreementsInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutTerms_agreementsInput, UserModelUncheckedCreateWithoutTerms_agreementsInput>
  }

  export type TermsModelUpsertWithoutAgreementsInput = {
    update: XOR<TermsModelUpdateWithoutAgreementsInput, TermsModelUncheckedUpdateWithoutAgreementsInput>
    create: XOR<TermsModelCreateWithoutAgreementsInput, TermsModelUncheckedCreateWithoutAgreementsInput>
    where?: TermsModelWhereInput
  }

  export type TermsModelUpdateToOneWithWhereWithoutAgreementsInput = {
    where?: TermsModelWhereInput
    data: XOR<TermsModelUpdateWithoutAgreementsInput, TermsModelUncheckedUpdateWithoutAgreementsInput>
  }

  export type TermsModelUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTermsTypeFieldUpdateOperationsInput | TermsType
  }

  export type TermsModelUncheckedUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTermsTypeFieldUpdateOperationsInput | TermsType
  }

  export type UserModelUpsertWithoutTerms_agreementsInput = {
    update: XOR<UserModelUpdateWithoutTerms_agreementsInput, UserModelUncheckedUpdateWithoutTerms_agreementsInput>
    create: XOR<UserModelCreateWithoutTerms_agreementsInput, UserModelUncheckedCreateWithoutTerms_agreementsInput>
    where?: UserModelWhereInput
  }

  export type UserModelUpdateToOneWithWhereWithoutTerms_agreementsInput = {
    where?: UserModelWhereInput
    data: XOR<UserModelUpdateWithoutTerms_agreementsInput, UserModelUncheckedUpdateWithoutTerms_agreementsInput>
  }

  export type UserModelUpdateWithoutTerms_agreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUpdateOneWithoutBaseNestedInput
    biz_user?: BIZUserModelUpdateOneWithoutBaseNestedInput
  }

  export type UserModelUncheckedUpdateWithoutTerms_agreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUncheckedUpdateOneWithoutBaseNestedInput
    biz_user?: BIZUserModelUncheckedUpdateOneWithoutBaseNestedInput
  }

  export type ClientModelCreateWithoutBaseInput = {
    birth?: Date | string | null
    gender?: GenderType | null
    phone?: string | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    profile_image_url?: string | null
    oauth_accounts?: OauthAccountModelCreateNestedManyWithoutClientInput
  }

  export type ClientModelUncheckedCreateWithoutBaseInput = {
    birth?: Date | string | null
    gender?: GenderType | null
    phone?: string | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    profile_image_url?: string | null
    oauth_accounts?: OauthAccountModelUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientModelCreateOrConnectWithoutBaseInput = {
    where: ClientModelWhereUniqueInput
    create: XOR<ClientModelCreateWithoutBaseInput, ClientModelUncheckedCreateWithoutBaseInput>
  }

  export type BIZUserModelCreateWithoutBaseInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelUncheckedCreateWithoutBaseInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelUncheckedCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelUncheckedCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelCreateOrConnectWithoutBaseInput = {
    where: BIZUserModelWhereUniqueInput
    create: XOR<BIZUserModelCreateWithoutBaseInput, BIZUserModelUncheckedCreateWithoutBaseInput>
  }

  export type TermsAgreementModelCreateWithoutUserInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    terms: TermsModelCreateNestedOneWithoutAgreementsInput
  }

  export type TermsAgreementModelUncheckedCreateWithoutUserInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    terms_id: string
  }

  export type TermsAgreementModelCreateOrConnectWithoutUserInput = {
    where: TermsAgreementModelWhereUniqueInput
    create: XOR<TermsAgreementModelCreateWithoutUserInput, TermsAgreementModelUncheckedCreateWithoutUserInput>
  }

  export type TermsAgreementModelCreateManyUserInputEnvelope = {
    data: TermsAgreementModelCreateManyUserInput | TermsAgreementModelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientModelUpsertWithoutBaseInput = {
    update: XOR<ClientModelUpdateWithoutBaseInput, ClientModelUncheckedUpdateWithoutBaseInput>
    create: XOR<ClientModelCreateWithoutBaseInput, ClientModelUncheckedCreateWithoutBaseInput>
    where?: ClientModelWhereInput
  }

  export type ClientModelUpdateToOneWithWhereWithoutBaseInput = {
    where?: ClientModelWhereInput
    data: XOR<ClientModelUpdateWithoutBaseInput, ClientModelUncheckedUpdateWithoutBaseInput>
  }

  export type ClientModelUpdateWithoutBaseInput = {
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accounts?: OauthAccountModelUpdateManyWithoutClientNestedInput
  }

  export type ClientModelUncheckedUpdateWithoutBaseInput = {
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accounts?: OauthAccountModelUncheckedUpdateManyWithoutClientNestedInput
  }

  export type BIZUserModelUpsertWithoutBaseInput = {
    update: XOR<BIZUserModelUpdateWithoutBaseInput, BIZUserModelUncheckedUpdateWithoutBaseInput>
    create: XOR<BIZUserModelCreateWithoutBaseInput, BIZUserModelUncheckedCreateWithoutBaseInput>
    where?: BIZUserModelWhereInput
  }

  export type BIZUserModelUpdateToOneWithWhereWithoutBaseInput = {
    where?: BIZUserModelWhereInput
    data: XOR<BIZUserModelUpdateWithoutBaseInput, BIZUserModelUncheckedUpdateWithoutBaseInput>
  }

  export type BIZUserModelUpdateWithoutBaseInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelUncheckedUpdateWithoutBaseInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUncheckedUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userNestedInput
  }

  export type TermsAgreementModelUpsertWithWhereUniqueWithoutUserInput = {
    where: TermsAgreementModelWhereUniqueInput
    update: XOR<TermsAgreementModelUpdateWithoutUserInput, TermsAgreementModelUncheckedUpdateWithoutUserInput>
    create: XOR<TermsAgreementModelCreateWithoutUserInput, TermsAgreementModelUncheckedCreateWithoutUserInput>
  }

  export type TermsAgreementModelUpdateWithWhereUniqueWithoutUserInput = {
    where: TermsAgreementModelWhereUniqueInput
    data: XOR<TermsAgreementModelUpdateWithoutUserInput, TermsAgreementModelUncheckedUpdateWithoutUserInput>
  }

  export type TermsAgreementModelUpdateManyWithWhereWithoutUserInput = {
    where: TermsAgreementModelScalarWhereInput
    data: XOR<TermsAgreementModelUpdateManyMutationInput, TermsAgreementModelUncheckedUpdateManyWithoutUserInput>
  }

  export type UserModelCreateWithoutClientInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    biz_user?: BIZUserModelCreateNestedOneWithoutBaseInput
    terms_agreements?: TermsAgreementModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateWithoutClientInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    biz_user?: BIZUserModelUncheckedCreateNestedOneWithoutBaseInput
    terms_agreements?: TermsAgreementModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelCreateOrConnectWithoutClientInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutClientInput, UserModelUncheckedCreateWithoutClientInput>
  }

  export type OauthAccountModelCreateWithoutClientInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    biz_user?: BIZUserModelCreateNestedOneWithoutOauth_accountsInput
  }

  export type OauthAccountModelUncheckedCreateWithoutClientInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    biz_user_id?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
  }

  export type OauthAccountModelCreateOrConnectWithoutClientInput = {
    where: OauthAccountModelWhereUniqueInput
    create: XOR<OauthAccountModelCreateWithoutClientInput, OauthAccountModelUncheckedCreateWithoutClientInput>
  }

  export type OauthAccountModelCreateManyClientInputEnvelope = {
    data: OauthAccountModelCreateManyClientInput | OauthAccountModelCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserModelUpsertWithoutClientInput = {
    update: XOR<UserModelUpdateWithoutClientInput, UserModelUncheckedUpdateWithoutClientInput>
    create: XOR<UserModelCreateWithoutClientInput, UserModelUncheckedCreateWithoutClientInput>
    where?: UserModelWhereInput
  }

  export type UserModelUpdateToOneWithWhereWithoutClientInput = {
    where?: UserModelWhereInput
    data: XOR<UserModelUpdateWithoutClientInput, UserModelUncheckedUpdateWithoutClientInput>
  }

  export type UserModelUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biz_user?: BIZUserModelUpdateOneWithoutBaseNestedInput
    terms_agreements?: TermsAgreementModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biz_user?: BIZUserModelUncheckedUpdateOneWithoutBaseNestedInput
    terms_agreements?: TermsAgreementModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OauthAccountModelUpsertWithWhereUniqueWithoutClientInput = {
    where: OauthAccountModelWhereUniqueInput
    update: XOR<OauthAccountModelUpdateWithoutClientInput, OauthAccountModelUncheckedUpdateWithoutClientInput>
    create: XOR<OauthAccountModelCreateWithoutClientInput, OauthAccountModelUncheckedCreateWithoutClientInput>
  }

  export type OauthAccountModelUpdateWithWhereUniqueWithoutClientInput = {
    where: OauthAccountModelWhereUniqueInput
    data: XOR<OauthAccountModelUpdateWithoutClientInput, OauthAccountModelUncheckedUpdateWithoutClientInput>
  }

  export type OauthAccountModelUpdateManyWithWhereWithoutClientInput = {
    where: OauthAccountModelScalarWhereInput
    data: XOR<OauthAccountModelUpdateManyMutationInput, OauthAccountModelUncheckedUpdateManyWithoutClientInput>
  }

  export type OauthAccountModelScalarWhereInput = {
    AND?: OauthAccountModelScalarWhereInput | OauthAccountModelScalarWhereInput[]
    OR?: OauthAccountModelScalarWhereInput[]
    NOT?: OauthAccountModelScalarWhereInput | OauthAccountModelScalarWhereInput[]
    id?: StringFilter<"OauthAccountModel"> | string
    created_at?: DateTimeFilter<"OauthAccountModel"> | Date | string
    updated_at?: DateTimeFilter<"OauthAccountModel"> | Date | string
    is_deleted?: BoolFilter<"OauthAccountModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"OauthAccountModel"> | Date | string | null
    oauth_type?: EnumOauthTypeFilter<"OauthAccountModel"> | OauthType
    oauth_sub?: StringFilter<"OauthAccountModel"> | string
    biz_user_id?: StringNullableFilter<"OauthAccountModel"> | string | null
    client_id?: StringNullableFilter<"OauthAccountModel"> | string | null
    name?: StringNullableFilter<"OauthAccountModel"> | string | null
    email?: StringNullableFilter<"OauthAccountModel"> | string | null
    phone?: StringNullableFilter<"OauthAccountModel"> | string | null
    profile_image_url?: StringNullableFilter<"OauthAccountModel"> | string | null
    birth?: StringNullableFilter<"OauthAccountModel"> | string | null
    gender?: EnumGenderTypeNullableFilter<"OauthAccountModel"> | GenderType | null
    address_zone_code?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_road?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_detail?: StringNullableFilter<"OauthAccountModel"> | string | null
    address_extra?: StringNullableFilter<"OauthAccountModel"> | string | null
  }

  export type UserModelCreateWithoutBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    client?: ClientModelCreateNestedOneWithoutBaseInput
    terms_agreements?: TermsAgreementModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateWithoutBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    client?: ClientModelUncheckedCreateNestedOneWithoutBaseInput
    terms_agreements?: TermsAgreementModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelCreateOrConnectWithoutBiz_userInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutBiz_userInput, UserModelUncheckedCreateWithoutBiz_userInput>
  }

  export type REAgentModelCreateWithoutBaseInput = {
    is_licensed: boolean
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
    expertise: REExpertiseModelCreateNestedOneWithoutRe_agentsInput
    portfolios?: REPortfolioModelCreateNestedManyWithoutRe_agentInput
  }

  export type REAgentModelUncheckedCreateWithoutBaseInput = {
    is_licensed: boolean
    expertise_id: string
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
    portfolios?: REPortfolioModelUncheckedCreateNestedManyWithoutRe_agentInput
  }

  export type REAgentModelCreateOrConnectWithoutBaseInput = {
    where: REAgentModelWhereUniqueInput
    create: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
  }

  export type HSProviderModelCreateWithoutBaseInput = {
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    expertise_relation?: HSSubExpertiseRelationModelCreateNestedManyWithoutHs_providerInput
    portfolios?: HSPortfolioModelCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateWithoutBaseInput = {
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    expertise_relation?: HSSubExpertiseRelationModelUncheckedCreateNestedManyWithoutHs_providerInput
    portfolios?: HSPortfolioModelUncheckedCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelCreateOrConnectWithoutBaseInput = {
    where: HSProviderModelWhereUniqueInput
    create: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
  }

  export type OauthAccountModelCreateWithoutBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    client?: ClientModelCreateNestedOneWithoutOauth_accountsInput
  }

  export type OauthAccountModelUncheckedCreateWithoutBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    client_id?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
  }

  export type OauthAccountModelCreateOrConnectWithoutBiz_userInput = {
    where: OauthAccountModelWhereUniqueInput
    create: XOR<OauthAccountModelCreateWithoutBiz_userInput, OauthAccountModelUncheckedCreateWithoutBiz_userInput>
  }

  export type OauthAccountModelCreateManyBiz_userInputEnvelope = {
    data: OauthAccountModelCreateManyBiz_userInput | OauthAccountModelCreateManyBiz_userInput[]
    skipDuplicates?: boolean
  }

  export type BIZCertificationImageModelCreateWithoutBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
    access_type: ImageAccessType
  }

  export type BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
    access_type: ImageAccessType
  }

  export type BIZCertificationImageModelCreateOrConnectWithoutBiz_userInput = {
    where: BIZCertificationImageModelWhereUniqueInput
    create: XOR<BIZCertificationImageModelCreateWithoutBiz_userInput, BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput>
  }

  export type BIZCertificationImageModelCreateManyBiz_userInputEnvelope = {
    data: BIZCertificationImageModelCreateManyBiz_userInput | BIZCertificationImageModelCreateManyBiz_userInput[]
    skipDuplicates?: boolean
  }

  export type UserModelUpsertWithoutBiz_userInput = {
    update: XOR<UserModelUpdateWithoutBiz_userInput, UserModelUncheckedUpdateWithoutBiz_userInput>
    create: XOR<UserModelCreateWithoutBiz_userInput, UserModelUncheckedCreateWithoutBiz_userInput>
    where?: UserModelWhereInput
  }

  export type UserModelUpdateToOneWithWhereWithoutBiz_userInput = {
    where?: UserModelWhereInput
    data: XOR<UserModelUpdateWithoutBiz_userInput, UserModelUncheckedUpdateWithoutBiz_userInput>
  }

  export type UserModelUpdateWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUpdateOneWithoutBaseNestedInput
    terms_agreements?: TermsAgreementModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUncheckedUpdateOneWithoutBaseNestedInput
    terms_agreements?: TermsAgreementModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type REAgentModelUpsertWithoutBaseInput = {
    update: XOR<REAgentModelUpdateWithoutBaseInput, REAgentModelUncheckedUpdateWithoutBaseInput>
    create: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    where?: REAgentModelWhereInput
  }

  export type REAgentModelUpdateToOneWithWhereWithoutBaseInput = {
    where?: REAgentModelWhereInput
    data: XOR<REAgentModelUpdateWithoutBaseInput, REAgentModelUncheckedUpdateWithoutBaseInput>
  }

  export type REAgentModelUpdateWithoutBaseInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise?: REExpertiseModelUpdateOneRequiredWithoutRe_agentsNestedInput
    portfolios?: REPortfolioModelUpdateManyWithoutRe_agentNestedInput
  }

  export type REAgentModelUncheckedUpdateWithoutBaseInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    expertise_id?: StringFieldUpdateOperationsInput | string
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: REPortfolioModelUncheckedUpdateManyWithoutRe_agentNestedInput
  }

  export type HSProviderModelUpsertWithoutBaseInput = {
    update: XOR<HSProviderModelUpdateWithoutBaseInput, HSProviderModelUncheckedUpdateWithoutBaseInput>
    create: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    where?: HSProviderModelWhereInput
  }

  export type HSProviderModelUpdateToOneWithWhereWithoutBaseInput = {
    where?: HSProviderModelWhereInput
    data: XOR<HSProviderModelUpdateWithoutBaseInput, HSProviderModelUncheckedUpdateWithoutBaseInput>
  }

  export type HSProviderModelUpdateWithoutBaseInput = {
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise_relation?: HSSubExpertiseRelationModelUpdateManyWithoutHs_providerNestedInput
    portfolios?: HSPortfolioModelUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateWithoutBaseInput = {
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise_relation?: HSSubExpertiseRelationModelUncheckedUpdateManyWithoutHs_providerNestedInput
    portfolios?: HSPortfolioModelUncheckedUpdateManyWithoutHs_providerNestedInput
  }

  export type OauthAccountModelUpsertWithWhereUniqueWithoutBiz_userInput = {
    where: OauthAccountModelWhereUniqueInput
    update: XOR<OauthAccountModelUpdateWithoutBiz_userInput, OauthAccountModelUncheckedUpdateWithoutBiz_userInput>
    create: XOR<OauthAccountModelCreateWithoutBiz_userInput, OauthAccountModelUncheckedCreateWithoutBiz_userInput>
  }

  export type OauthAccountModelUpdateWithWhereUniqueWithoutBiz_userInput = {
    where: OauthAccountModelWhereUniqueInput
    data: XOR<OauthAccountModelUpdateWithoutBiz_userInput, OauthAccountModelUncheckedUpdateWithoutBiz_userInput>
  }

  export type OauthAccountModelUpdateManyWithWhereWithoutBiz_userInput = {
    where: OauthAccountModelScalarWhereInput
    data: XOR<OauthAccountModelUpdateManyMutationInput, OauthAccountModelUncheckedUpdateManyWithoutBiz_userInput>
  }

  export type BIZCertificationImageModelUpsertWithWhereUniqueWithoutBiz_userInput = {
    where: BIZCertificationImageModelWhereUniqueInput
    update: XOR<BIZCertificationImageModelUpdateWithoutBiz_userInput, BIZCertificationImageModelUncheckedUpdateWithoutBiz_userInput>
    create: XOR<BIZCertificationImageModelCreateWithoutBiz_userInput, BIZCertificationImageModelUncheckedCreateWithoutBiz_userInput>
  }

  export type BIZCertificationImageModelUpdateWithWhereUniqueWithoutBiz_userInput = {
    where: BIZCertificationImageModelWhereUniqueInput
    data: XOR<BIZCertificationImageModelUpdateWithoutBiz_userInput, BIZCertificationImageModelUncheckedUpdateWithoutBiz_userInput>
  }

  export type BIZCertificationImageModelUpdateManyWithWhereWithoutBiz_userInput = {
    where: BIZCertificationImageModelScalarWhereInput
    data: XOR<BIZCertificationImageModelUpdateManyMutationInput, BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userInput>
  }

  export type BIZCertificationImageModelScalarWhereInput = {
    AND?: BIZCertificationImageModelScalarWhereInput | BIZCertificationImageModelScalarWhereInput[]
    OR?: BIZCertificationImageModelScalarWhereInput[]
    NOT?: BIZCertificationImageModelScalarWhereInput | BIZCertificationImageModelScalarWhereInput[]
    id?: StringFilter<"BIZCertificationImageModel"> | string
    created_at?: DateTimeFilter<"BIZCertificationImageModel"> | Date | string
    updated_at?: DateTimeFilter<"BIZCertificationImageModel"> | Date | string
    is_deleted?: BoolFilter<"BIZCertificationImageModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"BIZCertificationImageModel"> | Date | string | null
    biz_user_id?: StringFilter<"BIZCertificationImageModel"> | string
    url?: StringFilter<"BIZCertificationImageModel"> | string
    access_type?: EnumImageAccessTypeFilter<"BIZCertificationImageModel"> | ImageAccessType
  }

  export type BIZUserModelCreateWithoutBiz_certification_imagesInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBiz_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelUncheckedCreateWithoutBiz_certification_imagesInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelUncheckedCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelCreateOrConnectWithoutBiz_certification_imagesInput = {
    where: BIZUserModelWhereUniqueInput
    create: XOR<BIZUserModelCreateWithoutBiz_certification_imagesInput, BIZUserModelUncheckedCreateWithoutBiz_certification_imagesInput>
  }

  export type BIZUserModelUpsertWithoutBiz_certification_imagesInput = {
    update: XOR<BIZUserModelUpdateWithoutBiz_certification_imagesInput, BIZUserModelUncheckedUpdateWithoutBiz_certification_imagesInput>
    create: XOR<BIZUserModelCreateWithoutBiz_certification_imagesInput, BIZUserModelUncheckedCreateWithoutBiz_certification_imagesInput>
    where?: BIZUserModelWhereInput
  }

  export type BIZUserModelUpdateToOneWithWhereWithoutBiz_certification_imagesInput = {
    where?: BIZUserModelWhereInput
    data: XOR<BIZUserModelUpdateWithoutBiz_certification_imagesInput, BIZUserModelUncheckedUpdateWithoutBiz_certification_imagesInput>
  }

  export type BIZUserModelUpdateWithoutBiz_certification_imagesInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBiz_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelUncheckedUpdateWithoutBiz_certification_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUncheckedUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelCreateWithoutRe_agentInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBiz_userInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelUncheckedCreateWithoutRe_agentInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelUncheckedCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelUncheckedCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelCreateOrConnectWithoutRe_agentInput = {
    where: BIZUserModelWhereUniqueInput
    create: XOR<BIZUserModelCreateWithoutRe_agentInput, BIZUserModelUncheckedCreateWithoutRe_agentInput>
  }

  export type REExpertiseModelCreateWithoutRe_agentsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type REExpertiseModelUncheckedCreateWithoutRe_agentsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type REExpertiseModelCreateOrConnectWithoutRe_agentsInput = {
    where: REExpertiseModelWhereUniqueInput
    create: XOR<REExpertiseModelCreateWithoutRe_agentsInput, REExpertiseModelUncheckedCreateWithoutRe_agentsInput>
  }

  export type REPortfolioModelCreateWithoutRe_agentInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
  }

  export type REPortfolioModelUncheckedCreateWithoutRe_agentInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
  }

  export type REPortfolioModelCreateOrConnectWithoutRe_agentInput = {
    where: REPortfolioModelWhereUniqueInput
    create: XOR<REPortfolioModelCreateWithoutRe_agentInput, REPortfolioModelUncheckedCreateWithoutRe_agentInput>
  }

  export type REPortfolioModelCreateManyRe_agentInputEnvelope = {
    data: REPortfolioModelCreateManyRe_agentInput | REPortfolioModelCreateManyRe_agentInput[]
    skipDuplicates?: boolean
  }

  export type BIZUserModelUpsertWithoutRe_agentInput = {
    update: XOR<BIZUserModelUpdateWithoutRe_agentInput, BIZUserModelUncheckedUpdateWithoutRe_agentInput>
    create: XOR<BIZUserModelCreateWithoutRe_agentInput, BIZUserModelUncheckedCreateWithoutRe_agentInput>
    where?: BIZUserModelWhereInput
  }

  export type BIZUserModelUpdateToOneWithWhereWithoutRe_agentInput = {
    where?: BIZUserModelWhereInput
    data: XOR<BIZUserModelUpdateWithoutRe_agentInput, BIZUserModelUncheckedUpdateWithoutRe_agentInput>
  }

  export type BIZUserModelUpdateWithoutRe_agentInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBiz_userNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelUncheckedUpdateWithoutRe_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUncheckedUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userNestedInput
  }

  export type REExpertiseModelUpsertWithoutRe_agentsInput = {
    update: XOR<REExpertiseModelUpdateWithoutRe_agentsInput, REExpertiseModelUncheckedUpdateWithoutRe_agentsInput>
    create: XOR<REExpertiseModelCreateWithoutRe_agentsInput, REExpertiseModelUncheckedCreateWithoutRe_agentsInput>
    where?: REExpertiseModelWhereInput
  }

  export type REExpertiseModelUpdateToOneWithWhereWithoutRe_agentsInput = {
    where?: REExpertiseModelWhereInput
    data: XOR<REExpertiseModelUpdateWithoutRe_agentsInput, REExpertiseModelUncheckedUpdateWithoutRe_agentsInput>
  }

  export type REExpertiseModelUpdateWithoutRe_agentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REExpertiseModelUncheckedUpdateWithoutRe_agentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REPortfolioModelUpsertWithWhereUniqueWithoutRe_agentInput = {
    where: REPortfolioModelWhereUniqueInput
    update: XOR<REPortfolioModelUpdateWithoutRe_agentInput, REPortfolioModelUncheckedUpdateWithoutRe_agentInput>
    create: XOR<REPortfolioModelCreateWithoutRe_agentInput, REPortfolioModelUncheckedCreateWithoutRe_agentInput>
  }

  export type REPortfolioModelUpdateWithWhereUniqueWithoutRe_agentInput = {
    where: REPortfolioModelWhereUniqueInput
    data: XOR<REPortfolioModelUpdateWithoutRe_agentInput, REPortfolioModelUncheckedUpdateWithoutRe_agentInput>
  }

  export type REPortfolioModelUpdateManyWithWhereWithoutRe_agentInput = {
    where: REPortfolioModelScalarWhereInput
    data: XOR<REPortfolioModelUpdateManyMutationInput, REPortfolioModelUncheckedUpdateManyWithoutRe_agentInput>
  }

  export type REPortfolioModelScalarWhereInput = {
    AND?: REPortfolioModelScalarWhereInput | REPortfolioModelScalarWhereInput[]
    OR?: REPortfolioModelScalarWhereInput[]
    NOT?: REPortfolioModelScalarWhereInput | REPortfolioModelScalarWhereInput[]
    id?: StringFilter<"REPortfolioModel"> | string
    created_at?: DateTimeFilter<"REPortfolioModel"> | Date | string
    updated_at?: DateTimeFilter<"REPortfolioModel"> | Date | string
    is_deleted?: BoolFilter<"REPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"REPortfolioModel"> | Date | string | null
    re_agent_id?: StringFilter<"REPortfolioModel"> | string
    title?: StringFilter<"REPortfolioModel"> | string
    url?: StringFilter<"REPortfolioModel"> | string
    is_visible?: BoolFilter<"REPortfolioModel"> | boolean
  }

  export type REAgentModelCreateWithoutExpertiseInput = {
    is_licensed: boolean
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
    base: BIZUserModelCreateNestedOneWithoutRe_agentInput
    portfolios?: REPortfolioModelCreateNestedManyWithoutRe_agentInput
  }

  export type REAgentModelUncheckedCreateWithoutExpertiseInput = {
    id: string
    is_licensed: boolean
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
    portfolios?: REPortfolioModelUncheckedCreateNestedManyWithoutRe_agentInput
  }

  export type REAgentModelCreateOrConnectWithoutExpertiseInput = {
    where: REAgentModelWhereUniqueInput
    create: XOR<REAgentModelCreateWithoutExpertiseInput, REAgentModelUncheckedCreateWithoutExpertiseInput>
  }

  export type REAgentModelCreateManyExpertiseInputEnvelope = {
    data: REAgentModelCreateManyExpertiseInput | REAgentModelCreateManyExpertiseInput[]
    skipDuplicates?: boolean
  }

  export type REAgentModelUpsertWithWhereUniqueWithoutExpertiseInput = {
    where: REAgentModelWhereUniqueInput
    update: XOR<REAgentModelUpdateWithoutExpertiseInput, REAgentModelUncheckedUpdateWithoutExpertiseInput>
    create: XOR<REAgentModelCreateWithoutExpertiseInput, REAgentModelUncheckedCreateWithoutExpertiseInput>
  }

  export type REAgentModelUpdateWithWhereUniqueWithoutExpertiseInput = {
    where: REAgentModelWhereUniqueInput
    data: XOR<REAgentModelUpdateWithoutExpertiseInput, REAgentModelUncheckedUpdateWithoutExpertiseInput>
  }

  export type REAgentModelUpdateManyWithWhereWithoutExpertiseInput = {
    where: REAgentModelScalarWhereInput
    data: XOR<REAgentModelUpdateManyMutationInput, REAgentModelUncheckedUpdateManyWithoutExpertiseInput>
  }

  export type REAgentModelScalarWhereInput = {
    AND?: REAgentModelScalarWhereInput | REAgentModelScalarWhereInput[]
    OR?: REAgentModelScalarWhereInput[]
    NOT?: REAgentModelScalarWhereInput | REAgentModelScalarWhereInput[]
    id?: StringFilter<"REAgentModel"> | string
    is_licensed?: BoolFilter<"REAgentModel"> | boolean
    expertise_id?: StringFilter<"REAgentModel"> | string
    re_number?: StringFilter<"REAgentModel"> | string
    re_name?: StringFilter<"REAgentModel"> | string
    re_phone?: StringFilter<"REAgentModel"> | string
    re_licensed_agent_name?: StringFilter<"REAgentModel"> | string
    re_address_zone_code?: StringFilter<"REAgentModel"> | string
    re_address_road?: StringFilter<"REAgentModel"> | string
    re_address_detail?: StringNullableFilter<"REAgentModel"> | string | null
    re_address_extra?: StringNullableFilter<"REAgentModel"> | string | null
    biz_open_date?: DateTimeFilter<"REAgentModel"> | Date | string
  }

  export type BIZUserModelCreateWithoutHs_providerInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBiz_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelUncheckedCreateWithoutHs_providerInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accounts?: OauthAccountModelUncheckedCreateNestedManyWithoutBiz_userInput
    biz_certification_images?: BIZCertificationImageModelUncheckedCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelCreateOrConnectWithoutHs_providerInput = {
    where: BIZUserModelWhereUniqueInput
    create: XOR<BIZUserModelCreateWithoutHs_providerInput, BIZUserModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSSubExpertiseRelationModelCreateWithoutHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    sub_expertise: HSSubExpertiseModelCreateNestedOneWithoutRelationsInput
  }

  export type HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    sub_expertise_id: string
  }

  export type HSSubExpertiseRelationModelCreateOrConnectWithoutHs_providerInput = {
    where: HSSubExpertiseRelationModelWhereUniqueInput
    create: XOR<HSSubExpertiseRelationModelCreateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSSubExpertiseRelationModelCreateManyHs_providerInputEnvelope = {
    data: HSSubExpertiseRelationModelCreateManyHs_providerInput | HSSubExpertiseRelationModelCreateManyHs_providerInput[]
    skipDuplicates?: boolean
  }

  export type HSPortfolioModelCreateWithoutHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
  }

  export type HSPortfolioModelUncheckedCreateWithoutHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
  }

  export type HSPortfolioModelCreateOrConnectWithoutHs_providerInput = {
    where: HSPortfolioModelWhereUniqueInput
    create: XOR<HSPortfolioModelCreateWithoutHs_providerInput, HSPortfolioModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSPortfolioModelCreateManyHs_providerInputEnvelope = {
    data: HSPortfolioModelCreateManyHs_providerInput | HSPortfolioModelCreateManyHs_providerInput[]
    skipDuplicates?: boolean
  }

  export type BIZUserModelUpsertWithoutHs_providerInput = {
    update: XOR<BIZUserModelUpdateWithoutHs_providerInput, BIZUserModelUncheckedUpdateWithoutHs_providerInput>
    create: XOR<BIZUserModelCreateWithoutHs_providerInput, BIZUserModelUncheckedCreateWithoutHs_providerInput>
    where?: BIZUserModelWhereInput
  }

  export type BIZUserModelUpdateToOneWithWhereWithoutHs_providerInput = {
    where?: BIZUserModelWhereInput
    data: XOR<BIZUserModelUpdateWithoutHs_providerInput, BIZUserModelUncheckedUpdateWithoutHs_providerInput>
  }

  export type BIZUserModelUpdateWithoutHs_providerInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBiz_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelUncheckedUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accounts?: OauthAccountModelUncheckedUpdateManyWithoutBiz_userNestedInput
    biz_certification_images?: BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userNestedInput
  }

  export type HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutHs_providerInput = {
    where: HSSubExpertiseRelationModelWhereUniqueInput
    update: XOR<HSSubExpertiseRelationModelUpdateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedUpdateWithoutHs_providerInput>
    create: XOR<HSSubExpertiseRelationModelCreateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutHs_providerInput = {
    where: HSSubExpertiseRelationModelWhereUniqueInput
    data: XOR<HSSubExpertiseRelationModelUpdateWithoutHs_providerInput, HSSubExpertiseRelationModelUncheckedUpdateWithoutHs_providerInput>
  }

  export type HSSubExpertiseRelationModelUpdateManyWithWhereWithoutHs_providerInput = {
    where: HSSubExpertiseRelationModelScalarWhereInput
    data: XOR<HSSubExpertiseRelationModelUpdateManyMutationInput, HSSubExpertiseRelationModelUncheckedUpdateManyWithoutHs_providerInput>
  }

  export type HSSubExpertiseRelationModelScalarWhereInput = {
    AND?: HSSubExpertiseRelationModelScalarWhereInput | HSSubExpertiseRelationModelScalarWhereInput[]
    OR?: HSSubExpertiseRelationModelScalarWhereInput[]
    NOT?: HSSubExpertiseRelationModelScalarWhereInput | HSSubExpertiseRelationModelScalarWhereInput[]
    id?: StringFilter<"HSSubExpertiseRelationModel"> | string
    created_at?: DateTimeFilter<"HSSubExpertiseRelationModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSubExpertiseRelationModel"> | Date | string
    is_deleted?: BoolFilter<"HSSubExpertiseRelationModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSubExpertiseRelationModel"> | Date | string | null
    hs_provider_id?: StringFilter<"HSSubExpertiseRelationModel"> | string
    sub_expertise_id?: StringFilter<"HSSubExpertiseRelationModel"> | string
  }

  export type HSPortfolioModelUpsertWithWhereUniqueWithoutHs_providerInput = {
    where: HSPortfolioModelWhereUniqueInput
    update: XOR<HSPortfolioModelUpdateWithoutHs_providerInput, HSPortfolioModelUncheckedUpdateWithoutHs_providerInput>
    create: XOR<HSPortfolioModelCreateWithoutHs_providerInput, HSPortfolioModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSPortfolioModelUpdateWithWhereUniqueWithoutHs_providerInput = {
    where: HSPortfolioModelWhereUniqueInput
    data: XOR<HSPortfolioModelUpdateWithoutHs_providerInput, HSPortfolioModelUncheckedUpdateWithoutHs_providerInput>
  }

  export type HSPortfolioModelUpdateManyWithWhereWithoutHs_providerInput = {
    where: HSPortfolioModelScalarWhereInput
    data: XOR<HSPortfolioModelUpdateManyMutationInput, HSPortfolioModelUncheckedUpdateManyWithoutHs_providerInput>
  }

  export type HSPortfolioModelScalarWhereInput = {
    AND?: HSPortfolioModelScalarWhereInput | HSPortfolioModelScalarWhereInput[]
    OR?: HSPortfolioModelScalarWhereInput[]
    NOT?: HSPortfolioModelScalarWhereInput | HSPortfolioModelScalarWhereInput[]
    id?: StringFilter<"HSPortfolioModel"> | string
    created_at?: DateTimeFilter<"HSPortfolioModel"> | Date | string
    updated_at?: DateTimeFilter<"HSPortfolioModel"> | Date | string
    is_deleted?: BoolFilter<"HSPortfolioModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSPortfolioModel"> | Date | string | null
    hs_provider_id?: StringFilter<"HSPortfolioModel"> | string
    title?: StringFilter<"HSPortfolioModel"> | string
    url?: StringFilter<"HSPortfolioModel"> | string
    is_visible?: BoolFilter<"HSPortfolioModel"> | boolean
  }

  export type HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider: HSProviderModelCreateNestedOneWithoutExpertise_relationInput
  }

  export type HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
  }

  export type HSSubExpertiseRelationModelCreateOrConnectWithoutSub_expertiseInput = {
    where: HSSubExpertiseRelationModelWhereUniqueInput
    create: XOR<HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput>
  }

  export type HSSubExpertiseRelationModelCreateManySub_expertiseInputEnvelope = {
    data: HSSubExpertiseRelationModelCreateManySub_expertiseInput | HSSubExpertiseRelationModelCreateManySub_expertiseInput[]
    skipDuplicates?: boolean
  }

  export type HSSuperExpertiseModelCreateWithoutSub_expertisesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type HSSuperExpertiseModelUncheckedCreateWithoutSub_expertisesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type HSSuperExpertiseModelCreateOrConnectWithoutSub_expertisesInput = {
    where: HSSuperExpertiseModelWhereUniqueInput
    create: XOR<HSSuperExpertiseModelCreateWithoutSub_expertisesInput, HSSuperExpertiseModelUncheckedCreateWithoutSub_expertisesInput>
  }

  export type HSSubExpertiseRelationModelUpsertWithWhereUniqueWithoutSub_expertiseInput = {
    where: HSSubExpertiseRelationModelWhereUniqueInput
    update: XOR<HSSubExpertiseRelationModelUpdateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedUpdateWithoutSub_expertiseInput>
    create: XOR<HSSubExpertiseRelationModelCreateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedCreateWithoutSub_expertiseInput>
  }

  export type HSSubExpertiseRelationModelUpdateWithWhereUniqueWithoutSub_expertiseInput = {
    where: HSSubExpertiseRelationModelWhereUniqueInput
    data: XOR<HSSubExpertiseRelationModelUpdateWithoutSub_expertiseInput, HSSubExpertiseRelationModelUncheckedUpdateWithoutSub_expertiseInput>
  }

  export type HSSubExpertiseRelationModelUpdateManyWithWhereWithoutSub_expertiseInput = {
    where: HSSubExpertiseRelationModelScalarWhereInput
    data: XOR<HSSubExpertiseRelationModelUpdateManyMutationInput, HSSubExpertiseRelationModelUncheckedUpdateManyWithoutSub_expertiseInput>
  }

  export type HSSuperExpertiseModelUpsertWithoutSub_expertisesInput = {
    update: XOR<HSSuperExpertiseModelUpdateWithoutSub_expertisesInput, HSSuperExpertiseModelUncheckedUpdateWithoutSub_expertisesInput>
    create: XOR<HSSuperExpertiseModelCreateWithoutSub_expertisesInput, HSSuperExpertiseModelUncheckedCreateWithoutSub_expertisesInput>
    where?: HSSuperExpertiseModelWhereInput
  }

  export type HSSuperExpertiseModelUpdateToOneWithWhereWithoutSub_expertisesInput = {
    where?: HSSuperExpertiseModelWhereInput
    data: XOR<HSSuperExpertiseModelUpdateWithoutSub_expertisesInput, HSSuperExpertiseModelUncheckedUpdateWithoutSub_expertisesInput>
  }

  export type HSSuperExpertiseModelUpdateWithoutSub_expertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HSSuperExpertiseModelUncheckedUpdateWithoutSub_expertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HSSubExpertiseModelCreateWithoutSuper_expertiseInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    relations?: HSSubExpertiseRelationModelCreateNestedManyWithoutSub_expertiseInput
  }

  export type HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    relations?: HSSubExpertiseRelationModelUncheckedCreateNestedManyWithoutSub_expertiseInput
  }

  export type HSSubExpertiseModelCreateOrConnectWithoutSuper_expertiseInput = {
    where: HSSubExpertiseModelWhereUniqueInput
    create: XOR<HSSubExpertiseModelCreateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput>
  }

  export type HSSubExpertiseModelCreateManySuper_expertiseInputEnvelope = {
    data: HSSubExpertiseModelCreateManySuper_expertiseInput | HSSubExpertiseModelCreateManySuper_expertiseInput[]
    skipDuplicates?: boolean
  }

  export type HSSubExpertiseModelUpsertWithWhereUniqueWithoutSuper_expertiseInput = {
    where: HSSubExpertiseModelWhereUniqueInput
    update: XOR<HSSubExpertiseModelUpdateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedUpdateWithoutSuper_expertiseInput>
    create: XOR<HSSubExpertiseModelCreateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedCreateWithoutSuper_expertiseInput>
  }

  export type HSSubExpertiseModelUpdateWithWhereUniqueWithoutSuper_expertiseInput = {
    where: HSSubExpertiseModelWhereUniqueInput
    data: XOR<HSSubExpertiseModelUpdateWithoutSuper_expertiseInput, HSSubExpertiseModelUncheckedUpdateWithoutSuper_expertiseInput>
  }

  export type HSSubExpertiseModelUpdateManyWithWhereWithoutSuper_expertiseInput = {
    where: HSSubExpertiseModelScalarWhereInput
    data: XOR<HSSubExpertiseModelUpdateManyMutationInput, HSSubExpertiseModelUncheckedUpdateManyWithoutSuper_expertiseInput>
  }

  export type HSSubExpertiseModelScalarWhereInput = {
    AND?: HSSubExpertiseModelScalarWhereInput | HSSubExpertiseModelScalarWhereInput[]
    OR?: HSSubExpertiseModelScalarWhereInput[]
    NOT?: HSSubExpertiseModelScalarWhereInput | HSSubExpertiseModelScalarWhereInput[]
    id?: StringFilter<"HSSubExpertiseModel"> | string
    created_at?: DateTimeFilter<"HSSubExpertiseModel"> | Date | string
    updated_at?: DateTimeFilter<"HSSubExpertiseModel"> | Date | string
    is_deleted?: BoolFilter<"HSSubExpertiseModel"> | boolean
    deleted_at?: DateTimeNullableFilter<"HSSubExpertiseModel"> | Date | string | null
    name?: StringFilter<"HSSubExpertiseModel"> | string
    super_expertise_id?: StringFilter<"HSSubExpertiseModel"> | string
  }

  export type HSProviderModelCreateWithoutExpertise_relationInput = {
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    base: BIZUserModelCreateNestedOneWithoutHs_providerInput
    portfolios?: HSPortfolioModelCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateWithoutExpertise_relationInput = {
    id: string
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    portfolios?: HSPortfolioModelUncheckedCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelCreateOrConnectWithoutExpertise_relationInput = {
    where: HSProviderModelWhereUniqueInput
    create: XOR<HSProviderModelCreateWithoutExpertise_relationInput, HSProviderModelUncheckedCreateWithoutExpertise_relationInput>
  }

  export type HSSubExpertiseModelCreateWithoutRelationsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_expertise: HSSuperExpertiseModelCreateNestedOneWithoutSub_expertisesInput
  }

  export type HSSubExpertiseModelUncheckedCreateWithoutRelationsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_expertise_id: string
  }

  export type HSSubExpertiseModelCreateOrConnectWithoutRelationsInput = {
    where: HSSubExpertiseModelWhereUniqueInput
    create: XOR<HSSubExpertiseModelCreateWithoutRelationsInput, HSSubExpertiseModelUncheckedCreateWithoutRelationsInput>
  }

  export type HSProviderModelUpsertWithoutExpertise_relationInput = {
    update: XOR<HSProviderModelUpdateWithoutExpertise_relationInput, HSProviderModelUncheckedUpdateWithoutExpertise_relationInput>
    create: XOR<HSProviderModelCreateWithoutExpertise_relationInput, HSProviderModelUncheckedCreateWithoutExpertise_relationInput>
    where?: HSProviderModelWhereInput
  }

  export type HSProviderModelUpdateToOneWithWhereWithoutExpertise_relationInput = {
    where?: HSProviderModelWhereInput
    data: XOR<HSProviderModelUpdateWithoutExpertise_relationInput, HSProviderModelUncheckedUpdateWithoutExpertise_relationInput>
  }

  export type HSProviderModelUpdateWithoutExpertise_relationInput = {
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BIZUserModelUpdateOneRequiredWithoutHs_providerNestedInput
    portfolios?: HSPortfolioModelUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateWithoutExpertise_relationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: HSPortfolioModelUncheckedUpdateManyWithoutHs_providerNestedInput
  }

  export type HSSubExpertiseModelUpsertWithoutRelationsInput = {
    update: XOR<HSSubExpertiseModelUpdateWithoutRelationsInput, HSSubExpertiseModelUncheckedUpdateWithoutRelationsInput>
    create: XOR<HSSubExpertiseModelCreateWithoutRelationsInput, HSSubExpertiseModelUncheckedCreateWithoutRelationsInput>
    where?: HSSubExpertiseModelWhereInput
  }

  export type HSSubExpertiseModelUpdateToOneWithWhereWithoutRelationsInput = {
    where?: HSSubExpertiseModelWhereInput
    data: XOR<HSSubExpertiseModelUpdateWithoutRelationsInput, HSSubExpertiseModelUncheckedUpdateWithoutRelationsInput>
  }

  export type HSSubExpertiseModelUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_expertise?: HSSuperExpertiseModelUpdateOneRequiredWithoutSub_expertisesNestedInput
  }

  export type HSSubExpertiseModelUncheckedUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
  }

  export type REAgentModelCreateWithoutPortfoliosInput = {
    is_licensed: boolean
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
    base: BIZUserModelCreateNestedOneWithoutRe_agentInput
    expertise: REExpertiseModelCreateNestedOneWithoutRe_agentsInput
  }

  export type REAgentModelUncheckedCreateWithoutPortfoliosInput = {
    id: string
    is_licensed: boolean
    expertise_id: string
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
  }

  export type REAgentModelCreateOrConnectWithoutPortfoliosInput = {
    where: REAgentModelWhereUniqueInput
    create: XOR<REAgentModelCreateWithoutPortfoliosInput, REAgentModelUncheckedCreateWithoutPortfoliosInput>
  }

  export type REAgentModelUpsertWithoutPortfoliosInput = {
    update: XOR<REAgentModelUpdateWithoutPortfoliosInput, REAgentModelUncheckedUpdateWithoutPortfoliosInput>
    create: XOR<REAgentModelCreateWithoutPortfoliosInput, REAgentModelUncheckedCreateWithoutPortfoliosInput>
    where?: REAgentModelWhereInput
  }

  export type REAgentModelUpdateToOneWithWhereWithoutPortfoliosInput = {
    where?: REAgentModelWhereInput
    data: XOR<REAgentModelUpdateWithoutPortfoliosInput, REAgentModelUncheckedUpdateWithoutPortfoliosInput>
  }

  export type REAgentModelUpdateWithoutPortfoliosInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BIZUserModelUpdateOneRequiredWithoutRe_agentNestedInput
    expertise?: REExpertiseModelUpdateOneRequiredWithoutRe_agentsNestedInput
  }

  export type REAgentModelUncheckedUpdateWithoutPortfoliosInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    expertise_id?: StringFieldUpdateOperationsInput | string
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HSProviderModelCreateWithoutPortfoliosInput = {
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    base: BIZUserModelCreateNestedOneWithoutHs_providerInput
    expertise_relation?: HSSubExpertiseRelationModelCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateWithoutPortfoliosInput = {
    id: string
    address_zone_code: string
    address_road: string
    address_detail?: string | null
    address_extra?: string | null
    biz_phone: string
    biz_registration_number: string
    biz_open_date: Date | string
    expertise_relation?: HSSubExpertiseRelationModelUncheckedCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelCreateOrConnectWithoutPortfoliosInput = {
    where: HSProviderModelWhereUniqueInput
    create: XOR<HSProviderModelCreateWithoutPortfoliosInput, HSProviderModelUncheckedCreateWithoutPortfoliosInput>
  }

  export type HSProviderModelUpsertWithoutPortfoliosInput = {
    update: XOR<HSProviderModelUpdateWithoutPortfoliosInput, HSProviderModelUncheckedUpdateWithoutPortfoliosInput>
    create: XOR<HSProviderModelCreateWithoutPortfoliosInput, HSProviderModelUncheckedCreateWithoutPortfoliosInput>
    where?: HSProviderModelWhereInput
  }

  export type HSProviderModelUpdateToOneWithWhereWithoutPortfoliosInput = {
    where?: HSProviderModelWhereInput
    data: XOR<HSProviderModelUpdateWithoutPortfoliosInput, HSProviderModelUncheckedUpdateWithoutPortfoliosInput>
  }

  export type HSProviderModelUpdateWithoutPortfoliosInput = {
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BIZUserModelUpdateOneRequiredWithoutHs_providerNestedInput
    expertise_relation?: HSSubExpertiseRelationModelUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateWithoutPortfoliosInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_zone_code?: StringFieldUpdateOperationsInput | string
    address_road?: StringFieldUpdateOperationsInput | string
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_phone?: StringFieldUpdateOperationsInput | string
    biz_registration_number?: StringFieldUpdateOperationsInput | string
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expertise_relation?: HSSubExpertiseRelationModelUncheckedUpdateManyWithoutHs_providerNestedInput
  }

  export type ClientModelCreateWithoutOauth_accountsInput = {
    birth?: Date | string | null
    gender?: GenderType | null
    phone?: string | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    profile_image_url?: string | null
    base: UserModelCreateNestedOneWithoutClientInput
  }

  export type ClientModelUncheckedCreateWithoutOauth_accountsInput = {
    id: string
    birth?: Date | string | null
    gender?: GenderType | null
    phone?: string | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
    profile_image_url?: string | null
  }

  export type ClientModelCreateOrConnectWithoutOauth_accountsInput = {
    where: ClientModelWhereUniqueInput
    create: XOR<ClientModelCreateWithoutOauth_accountsInput, ClientModelUncheckedCreateWithoutOauth_accountsInput>
  }

  export type BIZUserModelCreateWithoutOauth_accountsInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBiz_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    biz_certification_images?: BIZCertificationImageModelCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelUncheckedCreateWithoutOauth_accountsInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    biz_certification_images?: BIZCertificationImageModelUncheckedCreateNestedManyWithoutBiz_userInput
  }

  export type BIZUserModelCreateOrConnectWithoutOauth_accountsInput = {
    where: BIZUserModelWhereUniqueInput
    create: XOR<BIZUserModelCreateWithoutOauth_accountsInput, BIZUserModelUncheckedCreateWithoutOauth_accountsInput>
  }

  export type ClientModelUpsertWithoutOauth_accountsInput = {
    update: XOR<ClientModelUpdateWithoutOauth_accountsInput, ClientModelUncheckedUpdateWithoutOauth_accountsInput>
    create: XOR<ClientModelCreateWithoutOauth_accountsInput, ClientModelUncheckedCreateWithoutOauth_accountsInput>
    where?: ClientModelWhereInput
  }

  export type ClientModelUpdateToOneWithWhereWithoutOauth_accountsInput = {
    where?: ClientModelWhereInput
    data: XOR<ClientModelUpdateWithoutOauth_accountsInput, ClientModelUncheckedUpdateWithoutOauth_accountsInput>
  }

  export type ClientModelUpdateWithoutOauth_accountsInput = {
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    base?: UserModelUpdateOneRequiredWithoutClientNestedInput
  }

  export type ClientModelUncheckedUpdateWithoutOauth_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BIZUserModelUpsertWithoutOauth_accountsInput = {
    update: XOR<BIZUserModelUpdateWithoutOauth_accountsInput, BIZUserModelUncheckedUpdateWithoutOauth_accountsInput>
    create: XOR<BIZUserModelCreateWithoutOauth_accountsInput, BIZUserModelUncheckedCreateWithoutOauth_accountsInput>
    where?: BIZUserModelWhereInput
  }

  export type BIZUserModelUpdateToOneWithWhereWithoutOauth_accountsInput = {
    where?: BIZUserModelWhereInput
    data: XOR<BIZUserModelUpdateWithoutOauth_accountsInput, BIZUserModelUncheckedUpdateWithoutOauth_accountsInput>
  }

  export type BIZUserModelUpdateWithoutOauth_accountsInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBiz_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    biz_certification_images?: BIZCertificationImageModelUpdateManyWithoutBiz_userNestedInput
  }

  export type BIZUserModelUncheckedUpdateWithoutOauth_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    biz_certification_images?: BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userNestedInput
  }

  export type TermsAgreementModelCreateManyTermsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user_id: string
  }

  export type TermsAgreementModelUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserModelUpdateOneRequiredWithoutTerms_agreementsNestedInput
  }

  export type TermsAgreementModelUncheckedUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TermsAgreementModelUncheckedUpdateManyWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TermsAgreementModelCreateManyUserInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    terms_id: string
  }

  export type TermsAgreementModelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terms?: TermsModelUpdateOneRequiredWithoutAgreementsNestedInput
  }

  export type TermsAgreementModelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terms_id?: StringFieldUpdateOperationsInput | string
  }

  export type TermsAgreementModelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terms_id?: StringFieldUpdateOperationsInput | string
  }

  export type OauthAccountModelCreateManyClientInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    biz_user_id?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
  }

  export type OauthAccountModelUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_user?: BIZUserModelUpdateOneWithoutOauth_accountsNestedInput
  }

  export type OauthAccountModelUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    biz_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccountModelUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    biz_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccountModelCreateManyBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    client_id?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_zone_code?: string | null
    address_road?: string | null
    address_detail?: string | null
    address_extra?: string | null
  }

  export type BIZCertificationImageModelCreateManyBiz_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
    access_type: ImageAccessType
  }

  export type OauthAccountModelUpdateWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientModelUpdateOneWithoutOauth_accountsNestedInput
  }

  export type OauthAccountModelUncheckedUpdateWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccountModelUncheckedUpdateManyWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_zone_code?: NullableStringFieldUpdateOperationsInput | string | null
    address_road?: NullableStringFieldUpdateOperationsInput | string | null
    address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    address_extra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BIZCertificationImageModelUpdateWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    access_type?: EnumImageAccessTypeFieldUpdateOperationsInput | ImageAccessType
  }

  export type BIZCertificationImageModelUncheckedUpdateWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    access_type?: EnumImageAccessTypeFieldUpdateOperationsInput | ImageAccessType
  }

  export type BIZCertificationImageModelUncheckedUpdateManyWithoutBiz_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    access_type?: EnumImageAccessTypeFieldUpdateOperationsInput | ImageAccessType
  }

  export type REPortfolioModelCreateManyRe_agentInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
  }

  export type REPortfolioModelUpdateWithoutRe_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type REPortfolioModelUncheckedUpdateWithoutRe_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type REPortfolioModelUncheckedUpdateManyWithoutRe_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type REAgentModelCreateManyExpertiseInput = {
    id: string
    is_licensed: boolean
    re_number: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_zone_code: string
    re_address_road: string
    re_address_detail?: string | null
    re_address_extra?: string | null
    biz_open_date: Date | string
  }

  export type REAgentModelUpdateWithoutExpertiseInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BIZUserModelUpdateOneRequiredWithoutRe_agentNestedInput
    portfolios?: REPortfolioModelUpdateManyWithoutRe_agentNestedInput
  }

  export type REAgentModelUncheckedUpdateWithoutExpertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: REPortfolioModelUncheckedUpdateManyWithoutRe_agentNestedInput
  }

  export type REAgentModelUncheckedUpdateManyWithoutExpertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_number?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_zone_code?: StringFieldUpdateOperationsInput | string
    re_address_road?: StringFieldUpdateOperationsInput | string
    re_address_detail?: NullableStringFieldUpdateOperationsInput | string | null
    re_address_extra?: NullableStringFieldUpdateOperationsInput | string | null
    biz_open_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HSSubExpertiseRelationModelCreateManyHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    sub_expertise_id: string
  }

  export type HSPortfolioModelCreateManyHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    url: string
    is_visible: boolean
  }

  export type HSSubExpertiseRelationModelUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sub_expertise?: HSSubExpertiseModelUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sub_expertise_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateManyWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sub_expertise_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSPortfolioModelUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HSPortfolioModelUncheckedUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HSPortfolioModelUncheckedUpdateManyWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HSSubExpertiseRelationModelCreateManySub_expertiseInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
  }

  export type HSSubExpertiseRelationModelUpdateWithoutSub_expertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider?: HSProviderModelUpdateOneRequiredWithoutExpertise_relationNestedInput
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateWithoutSub_expertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSSubExpertiseRelationModelUncheckedUpdateManyWithoutSub_expertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSSubExpertiseModelCreateManySuper_expertiseInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type HSSubExpertiseModelUpdateWithoutSuper_expertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    relations?: HSSubExpertiseRelationModelUpdateManyWithoutSub_expertiseNestedInput
  }

  export type HSSubExpertiseModelUncheckedUpdateWithoutSuper_expertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    relations?: HSSubExpertiseRelationModelUncheckedUpdateManyWithoutSub_expertiseNestedInput
  }

  export type HSSubExpertiseModelUncheckedUpdateManyWithoutSuper_expertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}