export function immutableObject<T>(object: T): T {
  return object !== null ? { ...object } : null;
}
