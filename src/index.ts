export type NiceRecord<T> = {
  [K in keyof T]: T[K]
}

export type Falsey = false | 0 | 0n | '' | null | undefined

export type Truthey<T> = T extends Falsey ? never : T

export type Maybe<T> = T | Falsey

export type UnionToTuple<T> = T extends any ? Array<T extends any ? T : never> : never

export type ArrayToTuple<T extends string[]> = T extends Array<infer U> ? U : never

export type CheckIfArraySatisfies<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false
