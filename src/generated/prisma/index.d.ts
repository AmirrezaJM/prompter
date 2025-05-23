
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
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model Variables
 * 
 */
export type Variables = $Result.DefaultSelection<Prisma.$VariablesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Mood: {
  CHILL: 'CHILL',
  HAPPY: 'HAPPY',
  SAD: 'SAD',
  STUDENT: 'STUDENT'
};

export type Mood = (typeof Mood)[keyof typeof Mood]

}

export type Mood = $Enums.Mood

export const Mood: typeof $Enums.Mood

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prompts
 * const prompts = await prisma.prompt.findMany()
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
   * // Fetch zero or more Prompts
   * const prompts = await prisma.prompt.findMany()
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
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variables`: Exposes CRUD operations for the **Variables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variables
    * const variables = await prisma.variables.findMany()
    * ```
    */
  get variables(): Prisma.VariablesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Prompt: 'Prompt',
    Variables: 'Variables'
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
      modelProps: "prompt" | "variables"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      Variables: {
        payload: Prisma.$VariablesPayload<ExtArgs>
        fields: Prisma.VariablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          findFirst: {
            args: Prisma.VariablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          findMany: {
            args: Prisma.VariablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>[]
          }
          create: {
            args: Prisma.VariablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          createMany: {
            args: Prisma.VariablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>[]
          }
          delete: {
            args: Prisma.VariablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          update: {
            args: Prisma.VariablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          deleteMany: {
            args: Prisma.VariablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariablesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>[]
          }
          upsert: {
            args: Prisma.VariablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          aggregate: {
            args: Prisma.VariablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariables>
          }
          groupBy: {
            args: Prisma.VariablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariablesCountArgs<ExtArgs>
            result: $Utils.Optional<VariablesCountAggregateOutputType> | number
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
    prompt?: PromptOmit
    variables?: VariablesOmit
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
   * Count Type PromptCountOutputType
   */

  export type PromptCountOutputType = {
    template: number
  }

  export type PromptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | PromptCountOutputTypeCountTemplateArgs
  }

  // Custom InputTypes
  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptCountOutputType
     */
    select?: PromptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariablesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptAvgAggregateOutputType = {
    id: number | null
  }

  export type PromptSumAggregateOutputType = {
    id: number | null
  }

  export type PromptMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    mood: $Enums.Mood | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type PromptMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    mood: $Enums.Mood | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    title: number
    description: number
    mood: number
    isFavorite: number
    createdAt: number
    _all: number
  }


  export type PromptAvgAggregateInputType = {
    id?: true
  }

  export type PromptSumAggregateInputType = {
    id?: true
  }

  export type PromptMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mood?: true
    isFavorite?: true
    createdAt?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mood?: true
    isFavorite?: true
    createdAt?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mood?: true
    isFavorite?: true
    createdAt?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _avg?: PromptAvgAggregateInputType
    _sum?: PromptSumAggregateInputType
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: number
    title: string
    description: string
    mood: $Enums.Mood
    isFavorite: boolean
    createdAt: Date
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mood?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    template?: boolean | Prompt$templateArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mood?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mood?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    mood?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }

  export type PromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "mood" | "isFavorite" | "createdAt", ExtArgs["result"]["prompt"]>
  export type PromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | Prompt$templateArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {
      template: Prisma.$VariablesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      mood: $Enums.Mood
      isFavorite: boolean
      createdAt: Date
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }

  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFindUniqueArgs>(args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFindFirstArgs>(args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFindManyArgs>(args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
     */
    create<T extends PromptCreateArgs>(args: SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptCreateManyArgs>(args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
     */
    delete<T extends PromptDeleteArgs>(args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptUpdateArgs>(args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptDeleteManyArgs>(args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptUpdateManyArgs>(args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     */
    upsert<T extends PromptUpsertArgs>(args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
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
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends Prompt$templateArgs<ExtArgs> = {}>(args?: Subset<T, Prompt$templateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prompt model
   */
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'Int'>
    readonly title: FieldRef<"Prompt", 'String'>
    readonly description: FieldRef<"Prompt", 'String'>
    readonly mood: FieldRef<"Prompt", 'Mood'>
    readonly isFavorite: FieldRef<"Prompt", 'Boolean'>
    readonly createdAt: FieldRef<"Prompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }

  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt createManyAndReturn
   */
  export type PromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt updateManyAndReturn
   */
  export type PromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }

  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompt.template
   */
  export type Prompt$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    where?: VariablesWhereInput
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    cursor?: VariablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariablesScalarFieldEnum | VariablesScalarFieldEnum[]
  }

  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
  }


  /**
   * Model Variables
   */

  export type AggregateVariables = {
    _count: VariablesCountAggregateOutputType | null
    _avg: VariablesAvgAggregateOutputType | null
    _sum: VariablesSumAggregateOutputType | null
    _min: VariablesMinAggregateOutputType | null
    _max: VariablesMaxAggregateOutputType | null
  }

  export type VariablesAvgAggregateOutputType = {
    promptId: number | null
  }

  export type VariablesSumAggregateOutputType = {
    promptId: number | null
  }

  export type VariablesMinAggregateOutputType = {
    id: string | null
    name: string | null
    promptId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariablesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    promptId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariablesCountAggregateOutputType = {
    id: number
    name: number
    promptId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariablesAvgAggregateInputType = {
    promptId?: true
  }

  export type VariablesSumAggregateInputType = {
    promptId?: true
  }

  export type VariablesMinAggregateInputType = {
    id?: true
    name?: true
    promptId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariablesMaxAggregateInputType = {
    id?: true
    name?: true
    promptId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariablesCountAggregateInputType = {
    id?: true
    name?: true
    promptId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variables to aggregate.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variables
    **/
    _count?: true | VariablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariablesMaxAggregateInputType
  }

  export type GetVariablesAggregateType<T extends VariablesAggregateArgs> = {
        [P in keyof T & keyof AggregateVariables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariables[P]>
      : GetScalarType<T[P], AggregateVariables[P]>
  }




  export type VariablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariablesWhereInput
    orderBy?: VariablesOrderByWithAggregationInput | VariablesOrderByWithAggregationInput[]
    by: VariablesScalarFieldEnum[] | VariablesScalarFieldEnum
    having?: VariablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariablesCountAggregateInputType | true
    _avg?: VariablesAvgAggregateInputType
    _sum?: VariablesSumAggregateInputType
    _min?: VariablesMinAggregateInputType
    _max?: VariablesMaxAggregateInputType
  }

  export type VariablesGroupByOutputType = {
    id: string
    name: string
    promptId: number
    createdAt: Date
    updatedAt: Date
    _count: VariablesCountAggregateOutputType | null
    _avg: VariablesAvgAggregateOutputType | null
    _sum: VariablesSumAggregateOutputType | null
    _min: VariablesMinAggregateOutputType | null
    _max: VariablesMaxAggregateOutputType | null
  }

  type GetVariablesGroupByPayload<T extends VariablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariablesGroupByOutputType[P]>
            : GetScalarType<T[P], VariablesGroupByOutputType[P]>
        }
      >
    >


  export type VariablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    promptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variables"]>

  export type VariablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    promptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variables"]>

  export type VariablesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    promptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variables"]>

  export type VariablesSelectScalar = {
    id?: boolean
    name?: boolean
    promptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VariablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "promptId" | "createdAt" | "updatedAt", ExtArgs["result"]["variables"]>
  export type VariablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type VariablesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type VariablesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }

  export type $VariablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variables"
    objects: {
      prompt: Prisma.$PromptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      promptId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variables"]>
    composites: {}
  }

  type VariablesGetPayload<S extends boolean | null | undefined | VariablesDefaultArgs> = $Result.GetResult<Prisma.$VariablesPayload, S>

  type VariablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariablesCountAggregateInputType | true
    }

  export interface VariablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variables'], meta: { name: 'Variables' } }
    /**
     * Find zero or one Variables that matches the filter.
     * @param {VariablesFindUniqueArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariablesFindUniqueArgs>(args: SelectSubset<T, VariablesFindUniqueArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariablesFindUniqueOrThrowArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariablesFindUniqueOrThrowArgs>(args: SelectSubset<T, VariablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesFindFirstArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariablesFindFirstArgs>(args?: SelectSubset<T, VariablesFindFirstArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesFindFirstOrThrowArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariablesFindFirstOrThrowArgs>(args?: SelectSubset<T, VariablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variables
     * const variables = await prisma.variables.findMany()
     * 
     * // Get first 10 Variables
     * const variables = await prisma.variables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variablesWithIdOnly = await prisma.variables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariablesFindManyArgs>(args?: SelectSubset<T, VariablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variables.
     * @param {VariablesCreateArgs} args - Arguments to create a Variables.
     * @example
     * // Create one Variables
     * const Variables = await prisma.variables.create({
     *   data: {
     *     // ... data to create a Variables
     *   }
     * })
     * 
     */
    create<T extends VariablesCreateArgs>(args: SelectSubset<T, VariablesCreateArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variables.
     * @param {VariablesCreateManyArgs} args - Arguments to create many Variables.
     * @example
     * // Create many Variables
     * const variables = await prisma.variables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariablesCreateManyArgs>(args?: SelectSubset<T, VariablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variables and returns the data saved in the database.
     * @param {VariablesCreateManyAndReturnArgs} args - Arguments to create many Variables.
     * @example
     * // Create many Variables
     * const variables = await prisma.variables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variables and only return the `id`
     * const variablesWithIdOnly = await prisma.variables.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariablesCreateManyAndReturnArgs>(args?: SelectSubset<T, VariablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variables.
     * @param {VariablesDeleteArgs} args - Arguments to delete one Variables.
     * @example
     * // Delete one Variables
     * const Variables = await prisma.variables.delete({
     *   where: {
     *     // ... filter to delete one Variables
     *   }
     * })
     * 
     */
    delete<T extends VariablesDeleteArgs>(args: SelectSubset<T, VariablesDeleteArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variables.
     * @param {VariablesUpdateArgs} args - Arguments to update one Variables.
     * @example
     * // Update one Variables
     * const variables = await prisma.variables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariablesUpdateArgs>(args: SelectSubset<T, VariablesUpdateArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variables.
     * @param {VariablesDeleteManyArgs} args - Arguments to filter Variables to delete.
     * @example
     * // Delete a few Variables
     * const { count } = await prisma.variables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariablesDeleteManyArgs>(args?: SelectSubset<T, VariablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variables
     * const variables = await prisma.variables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariablesUpdateManyArgs>(args: SelectSubset<T, VariablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variables and returns the data updated in the database.
     * @param {VariablesUpdateManyAndReturnArgs} args - Arguments to update many Variables.
     * @example
     * // Update many Variables
     * const variables = await prisma.variables.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variables and only return the `id`
     * const variablesWithIdOnly = await prisma.variables.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariablesUpdateManyAndReturnArgs>(args: SelectSubset<T, VariablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variables.
     * @param {VariablesUpsertArgs} args - Arguments to update or create a Variables.
     * @example
     * // Update or create a Variables
     * const variables = await prisma.variables.upsert({
     *   create: {
     *     // ... data to create a Variables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variables we want to update
     *   }
     * })
     */
    upsert<T extends VariablesUpsertArgs>(args: SelectSubset<T, VariablesUpsertArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesCountArgs} args - Arguments to filter Variables to count.
     * @example
     * // Count the number of Variables
     * const count = await prisma.variables.count({
     *   where: {
     *     // ... the filter for the Variables we want to count
     *   }
     * })
    **/
    count<T extends VariablesCountArgs>(
      args?: Subset<T, VariablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariablesAggregateArgs>(args: Subset<T, VariablesAggregateArgs>): Prisma.PrismaPromise<GetVariablesAggregateType<T>>

    /**
     * Group by Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesGroupByArgs} args - Group by arguments.
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
      T extends VariablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariablesGroupByArgs['orderBy'] }
        : { orderBy?: VariablesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variables model
   */
  readonly fields: VariablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompt<T extends PromptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptDefaultArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Variables model
   */
  interface VariablesFieldRefs {
    readonly id: FieldRef<"Variables", 'String'>
    readonly name: FieldRef<"Variables", 'String'>
    readonly promptId: FieldRef<"Variables", 'Int'>
    readonly createdAt: FieldRef<"Variables", 'DateTime'>
    readonly updatedAt: FieldRef<"Variables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Variables findUnique
   */
  export type VariablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables findUniqueOrThrow
   */
  export type VariablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables findFirst
   */
  export type VariablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variables.
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variables.
     */
    distinct?: VariablesScalarFieldEnum | VariablesScalarFieldEnum[]
  }

  /**
   * Variables findFirstOrThrow
   */
  export type VariablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variables.
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variables.
     */
    distinct?: VariablesScalarFieldEnum | VariablesScalarFieldEnum[]
  }

  /**
   * Variables findMany
   */
  export type VariablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variables.
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    distinct?: VariablesScalarFieldEnum | VariablesScalarFieldEnum[]
  }

  /**
   * Variables create
   */
  export type VariablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * The data needed to create a Variables.
     */
    data: XOR<VariablesCreateInput, VariablesUncheckedCreateInput>
  }

  /**
   * Variables createMany
   */
  export type VariablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variables.
     */
    data: VariablesCreateManyInput | VariablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variables createManyAndReturn
   */
  export type VariablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * The data used to create many Variables.
     */
    data: VariablesCreateManyInput | VariablesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variables update
   */
  export type VariablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * The data needed to update a Variables.
     */
    data: XOR<VariablesUpdateInput, VariablesUncheckedUpdateInput>
    /**
     * Choose, which Variables to update.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables updateMany
   */
  export type VariablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variables.
     */
    data: XOR<VariablesUpdateManyMutationInput, VariablesUncheckedUpdateManyInput>
    /**
     * Filter which Variables to update
     */
    where?: VariablesWhereInput
    /**
     * Limit how many Variables to update.
     */
    limit?: number
  }

  /**
   * Variables updateManyAndReturn
   */
  export type VariablesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * The data used to update Variables.
     */
    data: XOR<VariablesUpdateManyMutationInput, VariablesUncheckedUpdateManyInput>
    /**
     * Filter which Variables to update
     */
    where?: VariablesWhereInput
    /**
     * Limit how many Variables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variables upsert
   */
  export type VariablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * The filter to search for the Variables to update in case it exists.
     */
    where: VariablesWhereUniqueInput
    /**
     * In case the Variables found by the `where` argument doesn't exist, create a new Variables with this data.
     */
    create: XOR<VariablesCreateInput, VariablesUncheckedCreateInput>
    /**
     * In case the Variables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariablesUpdateInput, VariablesUncheckedUpdateInput>
  }

  /**
   * Variables delete
   */
  export type VariablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
    /**
     * Filter which Variables to delete.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables deleteMany
   */
  export type VariablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variables to delete
     */
    where?: VariablesWhereInput
    /**
     * Limit how many Variables to delete.
     */
    limit?: number
  }

  /**
   * Variables without action
   */
  export type VariablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariablesInclude<ExtArgs> | null
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


  export const PromptScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    mood: 'mood',
    isFavorite: 'isFavorite',
    createdAt: 'createdAt'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const VariablesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    promptId: 'promptId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariablesScalarFieldEnum = (typeof VariablesScalarFieldEnum)[keyof typeof VariablesScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Mood'
   */
  export type EnumMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mood'>
    


  /**
   * Reference to a field of type 'Mood[]'
   */
  export type ListEnumMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mood[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: IntFilter<"Prompt"> | number
    title?: StringFilter<"Prompt"> | string
    description?: StringFilter<"Prompt"> | string
    mood?: EnumMoodFilter<"Prompt"> | $Enums.Mood
    isFavorite?: BoolFilter<"Prompt"> | boolean
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    template?: VariablesListRelationFilter
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    template?: VariablesOrderByRelationAggregateInput
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    title?: StringFilter<"Prompt"> | string
    description?: StringFilter<"Prompt"> | string
    mood?: EnumMoodFilter<"Prompt"> | $Enums.Mood
    isFavorite?: BoolFilter<"Prompt"> | boolean
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    template?: VariablesListRelationFilter
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    _count?: PromptCountOrderByAggregateInput
    _avg?: PromptAvgOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
    _sum?: PromptSumOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prompt"> | number
    title?: StringWithAggregatesFilter<"Prompt"> | string
    description?: StringWithAggregatesFilter<"Prompt"> | string
    mood?: EnumMoodWithAggregatesFilter<"Prompt"> | $Enums.Mood
    isFavorite?: BoolWithAggregatesFilter<"Prompt"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
  }

  export type VariablesWhereInput = {
    AND?: VariablesWhereInput | VariablesWhereInput[]
    OR?: VariablesWhereInput[]
    NOT?: VariablesWhereInput | VariablesWhereInput[]
    id?: StringFilter<"Variables"> | string
    name?: StringFilter<"Variables"> | string
    promptId?: IntFilter<"Variables"> | number
    createdAt?: DateTimeFilter<"Variables"> | Date | string
    updatedAt?: DateTimeFilter<"Variables"> | Date | string
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }

  export type VariablesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    promptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompt?: PromptOrderByWithRelationInput
  }

  export type VariablesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VariablesWhereInput | VariablesWhereInput[]
    OR?: VariablesWhereInput[]
    NOT?: VariablesWhereInput | VariablesWhereInput[]
    name?: StringFilter<"Variables"> | string
    promptId?: IntFilter<"Variables"> | number
    createdAt?: DateTimeFilter<"Variables"> | Date | string
    updatedAt?: DateTimeFilter<"Variables"> | Date | string
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }, "id">

  export type VariablesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    promptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VariablesCountOrderByAggregateInput
    _avg?: VariablesAvgOrderByAggregateInput
    _max?: VariablesMaxOrderByAggregateInput
    _min?: VariablesMinOrderByAggregateInput
    _sum?: VariablesSumOrderByAggregateInput
  }

  export type VariablesScalarWhereWithAggregatesInput = {
    AND?: VariablesScalarWhereWithAggregatesInput | VariablesScalarWhereWithAggregatesInput[]
    OR?: VariablesScalarWhereWithAggregatesInput[]
    NOT?: VariablesScalarWhereWithAggregatesInput | VariablesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Variables"> | string
    name?: StringWithAggregatesFilter<"Variables"> | string
    promptId?: IntWithAggregatesFilter<"Variables"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Variables"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Variables"> | Date | string
  }

  export type PromptCreateInput = {
    title: string
    description: string
    mood: $Enums.Mood
    isFavorite?: boolean
    createdAt?: Date | string
    template?: VariablesCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    mood: $Enums.Mood
    isFavorite?: boolean
    createdAt?: Date | string
    template?: VariablesUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: VariablesUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: VariablesUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptCreateManyInput = {
    id?: number
    title: string
    description: string
    mood: $Enums.Mood
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type PromptUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt: PromptCreateNestedOneWithoutTemplateInput
  }

  export type VariablesUncheckedCreateInput = {
    id?: string
    name: string
    promptId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutTemplateNestedInput
  }

  export type VariablesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    promptId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesCreateManyInput = {
    id?: string
    name: string
    promptId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    promptId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type VariablesListRelationFilter = {
    every?: VariablesWhereInput
    some?: VariablesWhereInput
    none?: VariablesWhereInput
  }

  export type VariablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PromptScalarRelationFilter = {
    is?: PromptWhereInput
    isNot?: PromptWhereInput
  }

  export type VariablesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    promptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariablesAvgOrderByAggregateInput = {
    promptId?: SortOrder
  }

  export type VariablesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    promptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariablesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    promptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariablesSumOrderByAggregateInput = {
    promptId?: SortOrder
  }

  export type VariablesCreateNestedManyWithoutPromptInput = {
    create?: XOR<VariablesCreateWithoutPromptInput, VariablesUncheckedCreateWithoutPromptInput> | VariablesCreateWithoutPromptInput[] | VariablesUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: VariablesCreateOrConnectWithoutPromptInput | VariablesCreateOrConnectWithoutPromptInput[]
    createMany?: VariablesCreateManyPromptInputEnvelope
    connect?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
  }

  export type VariablesUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<VariablesCreateWithoutPromptInput, VariablesUncheckedCreateWithoutPromptInput> | VariablesCreateWithoutPromptInput[] | VariablesUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: VariablesCreateOrConnectWithoutPromptInput | VariablesCreateOrConnectWithoutPromptInput[]
    createMany?: VariablesCreateManyPromptInputEnvelope
    connect?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumMoodFieldUpdateOperationsInput = {
    set?: $Enums.Mood
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VariablesUpdateManyWithoutPromptNestedInput = {
    create?: XOR<VariablesCreateWithoutPromptInput, VariablesUncheckedCreateWithoutPromptInput> | VariablesCreateWithoutPromptInput[] | VariablesUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: VariablesCreateOrConnectWithoutPromptInput | VariablesCreateOrConnectWithoutPromptInput[]
    upsert?: VariablesUpsertWithWhereUniqueWithoutPromptInput | VariablesUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: VariablesCreateManyPromptInputEnvelope
    set?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    disconnect?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    delete?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    connect?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    update?: VariablesUpdateWithWhereUniqueWithoutPromptInput | VariablesUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: VariablesUpdateManyWithWhereWithoutPromptInput | VariablesUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: VariablesScalarWhereInput | VariablesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VariablesUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<VariablesCreateWithoutPromptInput, VariablesUncheckedCreateWithoutPromptInput> | VariablesCreateWithoutPromptInput[] | VariablesUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: VariablesCreateOrConnectWithoutPromptInput | VariablesCreateOrConnectWithoutPromptInput[]
    upsert?: VariablesUpsertWithWhereUniqueWithoutPromptInput | VariablesUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: VariablesCreateManyPromptInputEnvelope
    set?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    disconnect?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    delete?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    connect?: VariablesWhereUniqueInput | VariablesWhereUniqueInput[]
    update?: VariablesUpdateWithWhereUniqueWithoutPromptInput | VariablesUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: VariablesUpdateManyWithWhereWithoutPromptInput | VariablesUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: VariablesScalarWhereInput | VariablesScalarWhereInput[]
  }

  export type PromptCreateNestedOneWithoutTemplateInput = {
    create?: XOR<PromptCreateWithoutTemplateInput, PromptUncheckedCreateWithoutTemplateInput>
    connectOrCreate?: PromptCreateOrConnectWithoutTemplateInput
    connect?: PromptWhereUniqueInput
  }

  export type PromptUpdateOneRequiredWithoutTemplateNestedInput = {
    create?: XOR<PromptCreateWithoutTemplateInput, PromptUncheckedCreateWithoutTemplateInput>
    connectOrCreate?: PromptCreateOrConnectWithoutTemplateInput
    upsert?: PromptUpsertWithoutTemplateInput
    connect?: PromptWhereUniqueInput
    update?: XOR<XOR<PromptUpdateToOneWithWhereWithoutTemplateInput, PromptUpdateWithoutTemplateInput>, PromptUncheckedUpdateWithoutTemplateInput>
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

  export type NestedEnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VariablesCreateWithoutPromptInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesUncheckedCreateWithoutPromptInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesCreateOrConnectWithoutPromptInput = {
    where: VariablesWhereUniqueInput
    create: XOR<VariablesCreateWithoutPromptInput, VariablesUncheckedCreateWithoutPromptInput>
  }

  export type VariablesCreateManyPromptInputEnvelope = {
    data: VariablesCreateManyPromptInput | VariablesCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type VariablesUpsertWithWhereUniqueWithoutPromptInput = {
    where: VariablesWhereUniqueInput
    update: XOR<VariablesUpdateWithoutPromptInput, VariablesUncheckedUpdateWithoutPromptInput>
    create: XOR<VariablesCreateWithoutPromptInput, VariablesUncheckedCreateWithoutPromptInput>
  }

  export type VariablesUpdateWithWhereUniqueWithoutPromptInput = {
    where: VariablesWhereUniqueInput
    data: XOR<VariablesUpdateWithoutPromptInput, VariablesUncheckedUpdateWithoutPromptInput>
  }

  export type VariablesUpdateManyWithWhereWithoutPromptInput = {
    where: VariablesScalarWhereInput
    data: XOR<VariablesUpdateManyMutationInput, VariablesUncheckedUpdateManyWithoutPromptInput>
  }

  export type VariablesScalarWhereInput = {
    AND?: VariablesScalarWhereInput | VariablesScalarWhereInput[]
    OR?: VariablesScalarWhereInput[]
    NOT?: VariablesScalarWhereInput | VariablesScalarWhereInput[]
    id?: StringFilter<"Variables"> | string
    name?: StringFilter<"Variables"> | string
    promptId?: IntFilter<"Variables"> | number
    createdAt?: DateTimeFilter<"Variables"> | Date | string
    updatedAt?: DateTimeFilter<"Variables"> | Date | string
  }

  export type PromptCreateWithoutTemplateInput = {
    title: string
    description: string
    mood: $Enums.Mood
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type PromptUncheckedCreateWithoutTemplateInput = {
    id?: number
    title: string
    description: string
    mood: $Enums.Mood
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type PromptCreateOrConnectWithoutTemplateInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutTemplateInput, PromptUncheckedCreateWithoutTemplateInput>
  }

  export type PromptUpsertWithoutTemplateInput = {
    update: XOR<PromptUpdateWithoutTemplateInput, PromptUncheckedUpdateWithoutTemplateInput>
    create: XOR<PromptCreateWithoutTemplateInput, PromptUncheckedCreateWithoutTemplateInput>
    where?: PromptWhereInput
  }

  export type PromptUpdateToOneWithWhereWithoutTemplateInput = {
    where?: PromptWhereInput
    data: XOR<PromptUpdateWithoutTemplateInput, PromptUncheckedUpdateWithoutTemplateInput>
  }

  export type PromptUpdateWithoutTemplateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesCreateManyPromptInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesUncheckedUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesUncheckedUpdateManyWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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