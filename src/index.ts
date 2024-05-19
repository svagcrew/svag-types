export type NiceRecord<T> = {
  [K in keyof T]: T[K]
}

export type Falsey = false | 0 | 0n | '' | null | undefined

export type Truthey<T> = T extends Falsey ? never : T
