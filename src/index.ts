export type NiceRecord<T> = {
  [K in keyof T]: T[K]
}

export type Falsy = false | 0 | '' | null | undefined

export type Truthy<T> = T extends Falsy ? never : NonNullable<T>
