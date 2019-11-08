export function immutableObject<T>(object: T): T {
  return !object || !Object.keys(object).length ? null : { ...object };
}
