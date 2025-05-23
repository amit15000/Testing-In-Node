
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sum
 * 
 */
export type Sum = $Result.DefaultSelection<Prisma.$SumPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sums
 * const sums = await prisma.sum.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sums
   * const sums = await prisma.sum.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sum`: Exposes CRUD operations for the **Sum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sums
    * const sums = await prisma.sum.findMany()
    * ```
    */
  get sum(): Prisma.SumDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Sum: 'Sum'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sum"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sum: {
        payload: Prisma.$SumPayload<ExtArgs>
        fields: Prisma.SumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>
          }
          findFirst: {
            args: Prisma.SumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>
          }
          findMany: {
            args: Prisma.SumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>[]
          }
          create: {
            args: Prisma.SumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>
          }
          createMany: {
            args: Prisma.SumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>[]
          }
          delete: {
            args: Prisma.SumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>
          }
          update: {
            args: Prisma.SumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>
          }
          deleteMany: {
            args: Prisma.SumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>[]
          }
          upsert: {
            args: Prisma.SumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumPayload>
          }
          aggregate: {
            args: Prisma.SumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSum>
          }
          groupBy: {
            args: Prisma.SumGroupByArgs<ExtArgs>
            result: $Utils.Optional<SumGroupByOutputType>[]
          }
          count: {
            args: Prisma.SumCountArgs<ExtArgs>
            result: $Utils.Optional<SumCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sum?: SumOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Sum
   */

  export type AggregateSum = {
    _count: SumCountAggregateOutputType | null
    _avg: SumAvgAggregateOutputType | null
    _sum: SumSumAggregateOutputType | null
    _min: SumMinAggregateOutputType | null
    _max: SumMaxAggregateOutputType | null
  }

  export type SumAvgAggregateOutputType = {
    id: number | null
    a: number | null
    b: number | null
    result: number | null
  }

  export type SumSumAggregateOutputType = {
    id: number | null
    a: number | null
    b: number | null
    result: number | null
  }

  export type SumMinAggregateOutputType = {
    id: number | null
    a: number | null
    b: number | null
    result: number | null
  }

  export type SumMaxAggregateOutputType = {
    id: number | null
    a: number | null
    b: number | null
    result: number | null
  }

  export type SumCountAggregateOutputType = {
    id: number
    a: number
    b: number
    result: number
    _all: number
  }


  export type SumAvgAggregateInputType = {
    id?: true
    a?: true
    b?: true
    result?: true
  }

  export type SumSumAggregateInputType = {
    id?: true
    a?: true
    b?: true
    result?: true
  }

  export type SumMinAggregateInputType = {
    id?: true
    a?: true
    b?: true
    result?: true
  }

  export type SumMaxAggregateInputType = {
    id?: true
    a?: true
    b?: true
    result?: true
  }

  export type SumCountAggregateInputType = {
    id?: true
    a?: true
    b?: true
    result?: true
    _all?: true
  }

  export type SumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sum to aggregate.
     */
    where?: SumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sums to fetch.
     */
    orderBy?: SumOrderByWithRelationInput | SumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sums
    **/
    _count?: true | SumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SumMaxAggregateInputType
  }

  export type GetSumAggregateType<T extends SumAggregateArgs> = {
        [P in keyof T & keyof AggregateSum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSum[P]>
      : GetScalarType<T[P], AggregateSum[P]>
  }




  export type SumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SumWhereInput
    orderBy?: SumOrderByWithAggregationInput | SumOrderByWithAggregationInput[]
    by: SumScalarFieldEnum[] | SumScalarFieldEnum
    having?: SumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SumCountAggregateInputType | true
    _avg?: SumAvgAggregateInputType
    _sum?: SumSumAggregateInputType
    _min?: SumMinAggregateInputType
    _max?: SumMaxAggregateInputType
  }

  export type SumGroupByOutputType = {
    id: number
    a: number
    b: number
    result: number
    _count: SumCountAggregateOutputType | null
    _avg: SumAvgAggregateOutputType | null
    _sum: SumSumAggregateOutputType | null
    _min: SumMinAggregateOutputType | null
    _max: SumMaxAggregateOutputType | null
  }

  type GetSumGroupByPayload<T extends SumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SumGroupByOutputType[P]>
            : GetScalarType<T[P], SumGroupByOutputType[P]>
        }
      >
    >


  export type SumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    a?: boolean
    b?: boolean
    result?: boolean
  }, ExtArgs["result"]["sum"]>

  export type SumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    a?: boolean
    b?: boolean
    result?: boolean
  }, ExtArgs["result"]["sum"]>

  export type SumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    a?: boolean
    b?: boolean
    result?: boolean
  }, ExtArgs["result"]["sum"]>

  export type SumSelectScalar = {
    id?: boolean
    a?: boolean
    b?: boolean
    result?: boolean
  }

  export type SumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "a" | "b" | "result", ExtArgs["result"]["sum"]>

  export type $SumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sum"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      a: number
      b: number
      result: number
    }, ExtArgs["result"]["sum"]>
    composites: {}
  }

  type SumGetPayload<S extends boolean | null | undefined | SumDefaultArgs> = $Result.GetResult<Prisma.$SumPayload, S>

  type SumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SumCountAggregateInputType | true
    }

  export interface SumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sum'], meta: { name: 'Sum' } }
    /**
     * Find zero or one Sum that matches the filter.
     * @param {SumFindUniqueArgs} args - Arguments to find a Sum
     * @example
     * // Get one Sum
     * const sum = await prisma.sum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SumFindUniqueArgs>(args: SelectSubset<T, SumFindUniqueArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SumFindUniqueOrThrowArgs} args - Arguments to find a Sum
     * @example
     * // Get one Sum
     * const sum = await prisma.sum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SumFindUniqueOrThrowArgs>(args: SelectSubset<T, SumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumFindFirstArgs} args - Arguments to find a Sum
     * @example
     * // Get one Sum
     * const sum = await prisma.sum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SumFindFirstArgs>(args?: SelectSubset<T, SumFindFirstArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumFindFirstOrThrowArgs} args - Arguments to find a Sum
     * @example
     * // Get one Sum
     * const sum = await prisma.sum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SumFindFirstOrThrowArgs>(args?: SelectSubset<T, SumFindFirstOrThrowArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sums
     * const sums = await prisma.sum.findMany()
     * 
     * // Get first 10 Sums
     * const sums = await prisma.sum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sumWithIdOnly = await prisma.sum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SumFindManyArgs>(args?: SelectSubset<T, SumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sum.
     * @param {SumCreateArgs} args - Arguments to create a Sum.
     * @example
     * // Create one Sum
     * const Sum = await prisma.sum.create({
     *   data: {
     *     // ... data to create a Sum
     *   }
     * })
     * 
     */
    create<T extends SumCreateArgs>(args: SelectSubset<T, SumCreateArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sums.
     * @param {SumCreateManyArgs} args - Arguments to create many Sums.
     * @example
     * // Create many Sums
     * const sum = await prisma.sum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SumCreateManyArgs>(args?: SelectSubset<T, SumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sums and returns the data saved in the database.
     * @param {SumCreateManyAndReturnArgs} args - Arguments to create many Sums.
     * @example
     * // Create many Sums
     * const sum = await prisma.sum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sums and only return the `id`
     * const sumWithIdOnly = await prisma.sum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SumCreateManyAndReturnArgs>(args?: SelectSubset<T, SumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sum.
     * @param {SumDeleteArgs} args - Arguments to delete one Sum.
     * @example
     * // Delete one Sum
     * const Sum = await prisma.sum.delete({
     *   where: {
     *     // ... filter to delete one Sum
     *   }
     * })
     * 
     */
    delete<T extends SumDeleteArgs>(args: SelectSubset<T, SumDeleteArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sum.
     * @param {SumUpdateArgs} args - Arguments to update one Sum.
     * @example
     * // Update one Sum
     * const sum = await prisma.sum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SumUpdateArgs>(args: SelectSubset<T, SumUpdateArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sums.
     * @param {SumDeleteManyArgs} args - Arguments to filter Sums to delete.
     * @example
     * // Delete a few Sums
     * const { count } = await prisma.sum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SumDeleteManyArgs>(args?: SelectSubset<T, SumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sums
     * const sum = await prisma.sum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SumUpdateManyArgs>(args: SelectSubset<T, SumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sums and returns the data updated in the database.
     * @param {SumUpdateManyAndReturnArgs} args - Arguments to update many Sums.
     * @example
     * // Update many Sums
     * const sum = await prisma.sum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sums and only return the `id`
     * const sumWithIdOnly = await prisma.sum.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SumUpdateManyAndReturnArgs>(args: SelectSubset<T, SumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sum.
     * @param {SumUpsertArgs} args - Arguments to update or create a Sum.
     * @example
     * // Update or create a Sum
     * const sum = await prisma.sum.upsert({
     *   create: {
     *     // ... data to create a Sum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sum we want to update
     *   }
     * })
     */
    upsert<T extends SumUpsertArgs>(args: SelectSubset<T, SumUpsertArgs<ExtArgs>>): Prisma__SumClient<$Result.GetResult<Prisma.$SumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumCountArgs} args - Arguments to filter Sums to count.
     * @example
     * // Count the number of Sums
     * const count = await prisma.sum.count({
     *   where: {
     *     // ... the filter for the Sums we want to count
     *   }
     * })
    **/
    count<T extends SumCountArgs>(
      args?: Subset<T, SumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SumAggregateArgs>(args: Subset<T, SumAggregateArgs>): Prisma.PrismaPromise<GetSumAggregateType<T>>

    /**
     * Group by Sum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumGroupByArgs} args - Group by arguments.
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
      T extends SumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SumGroupByArgs['orderBy'] }
        : { orderBy?: SumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sum model
   */
  readonly fields: SumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sum model
   */
  interface SumFieldRefs {
    readonly id: FieldRef<"Sum", 'Int'>
    readonly a: FieldRef<"Sum", 'Int'>
    readonly b: FieldRef<"Sum", 'Int'>
    readonly result: FieldRef<"Sum", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sum findUnique
   */
  export type SumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * Filter, which Sum to fetch.
     */
    where: SumWhereUniqueInput
  }

  /**
   * Sum findUniqueOrThrow
   */
  export type SumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * Filter, which Sum to fetch.
     */
    where: SumWhereUniqueInput
  }

  /**
   * Sum findFirst
   */
  export type SumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * Filter, which Sum to fetch.
     */
    where?: SumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sums to fetch.
     */
    orderBy?: SumOrderByWithRelationInput | SumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sums.
     */
    cursor?: SumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sums.
     */
    distinct?: SumScalarFieldEnum | SumScalarFieldEnum[]
  }

  /**
   * Sum findFirstOrThrow
   */
  export type SumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * Filter, which Sum to fetch.
     */
    where?: SumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sums to fetch.
     */
    orderBy?: SumOrderByWithRelationInput | SumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sums.
     */
    cursor?: SumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sums.
     */
    distinct?: SumScalarFieldEnum | SumScalarFieldEnum[]
  }

  /**
   * Sum findMany
   */
  export type SumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * Filter, which Sums to fetch.
     */
    where?: SumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sums to fetch.
     */
    orderBy?: SumOrderByWithRelationInput | SumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sums.
     */
    cursor?: SumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sums.
     */
    skip?: number
    distinct?: SumScalarFieldEnum | SumScalarFieldEnum[]
  }

  /**
   * Sum create
   */
  export type SumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * The data needed to create a Sum.
     */
    data: XOR<SumCreateInput, SumUncheckedCreateInput>
  }

  /**
   * Sum createMany
   */
  export type SumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sums.
     */
    data: SumCreateManyInput | SumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sum createManyAndReturn
   */
  export type SumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * The data used to create many Sums.
     */
    data: SumCreateManyInput | SumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sum update
   */
  export type SumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * The data needed to update a Sum.
     */
    data: XOR<SumUpdateInput, SumUncheckedUpdateInput>
    /**
     * Choose, which Sum to update.
     */
    where: SumWhereUniqueInput
  }

  /**
   * Sum updateMany
   */
  export type SumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sums.
     */
    data: XOR<SumUpdateManyMutationInput, SumUncheckedUpdateManyInput>
    /**
     * Filter which Sums to update
     */
    where?: SumWhereInput
    /**
     * Limit how many Sums to update.
     */
    limit?: number
  }

  /**
   * Sum updateManyAndReturn
   */
  export type SumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * The data used to update Sums.
     */
    data: XOR<SumUpdateManyMutationInput, SumUncheckedUpdateManyInput>
    /**
     * Filter which Sums to update
     */
    where?: SumWhereInput
    /**
     * Limit how many Sums to update.
     */
    limit?: number
  }

  /**
   * Sum upsert
   */
  export type SumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * The filter to search for the Sum to update in case it exists.
     */
    where: SumWhereUniqueInput
    /**
     * In case the Sum found by the `where` argument doesn't exist, create a new Sum with this data.
     */
    create: XOR<SumCreateInput, SumUncheckedCreateInput>
    /**
     * In case the Sum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SumUpdateInput, SumUncheckedUpdateInput>
  }

  /**
   * Sum delete
   */
  export type SumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
    /**
     * Filter which Sum to delete.
     */
    where: SumWhereUniqueInput
  }

  /**
   * Sum deleteMany
   */
  export type SumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sums to delete
     */
    where?: SumWhereInput
    /**
     * Limit how many Sums to delete.
     */
    limit?: number
  }

  /**
   * Sum without action
   */
  export type SumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sum
     */
    select?: SumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sum
     */
    omit?: SumOmit<ExtArgs> | null
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


  export const SumScalarFieldEnum: {
    id: 'id',
    a: 'a',
    b: 'b',
    result: 'result'
  };

  export type SumScalarFieldEnum = (typeof SumScalarFieldEnum)[keyof typeof SumScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SumWhereInput = {
    AND?: SumWhereInput | SumWhereInput[]
    OR?: SumWhereInput[]
    NOT?: SumWhereInput | SumWhereInput[]
    id?: IntFilter<"Sum"> | number
    a?: IntFilter<"Sum"> | number
    b?: IntFilter<"Sum"> | number
    result?: IntFilter<"Sum"> | number
  }

  export type SumOrderByWithRelationInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    result?: SortOrder
  }

  export type SumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SumWhereInput | SumWhereInput[]
    OR?: SumWhereInput[]
    NOT?: SumWhereInput | SumWhereInput[]
    a?: IntFilter<"Sum"> | number
    b?: IntFilter<"Sum"> | number
    result?: IntFilter<"Sum"> | number
  }, "id">

  export type SumOrderByWithAggregationInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    result?: SortOrder
    _count?: SumCountOrderByAggregateInput
    _avg?: SumAvgOrderByAggregateInput
    _max?: SumMaxOrderByAggregateInput
    _min?: SumMinOrderByAggregateInput
    _sum?: SumSumOrderByAggregateInput
  }

  export type SumScalarWhereWithAggregatesInput = {
    AND?: SumScalarWhereWithAggregatesInput | SumScalarWhereWithAggregatesInput[]
    OR?: SumScalarWhereWithAggregatesInput[]
    NOT?: SumScalarWhereWithAggregatesInput | SumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sum"> | number
    a?: IntWithAggregatesFilter<"Sum"> | number
    b?: IntWithAggregatesFilter<"Sum"> | number
    result?: IntWithAggregatesFilter<"Sum"> | number
  }

  export type SumCreateInput = {
    a: number
    b: number
    result: number
  }

  export type SumUncheckedCreateInput = {
    id?: number
    a: number
    b: number
    result: number
  }

  export type SumUpdateInput = {
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type SumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type SumCreateManyInput = {
    id?: number
    a: number
    b: number
    result: number
  }

  export type SumUpdateManyMutationInput = {
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type SumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    result?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SumCountOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    result?: SortOrder
  }

  export type SumAvgOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    result?: SortOrder
  }

  export type SumMaxOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    result?: SortOrder
  }

  export type SumMinOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    result?: SortOrder
  }

  export type SumSumOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    result?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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