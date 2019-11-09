export function immutableObject<T>(object: T): T {
  return !object || !Object.keys(object).length ? null : { ...object };
}

export function immutableArray<T>(array: T[]): T[] {
  return !array || !array.length ? [] : [...array];
}
