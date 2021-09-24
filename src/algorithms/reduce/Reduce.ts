export function reduce<A, B>(
  array: A[],
  callback: (
    previousValue: B,
    currentValue: A,
    currentIndex?: number,
    array?: A[]
  ) => B,
  initialValue?: B
) {
  if (!array.length && initialValue === undefined) {
    throw new Error('Reduce of empty array with no initial value');
  }
  let sum: A | B = initialValue !== undefined ? initialValue : array[0];

  for (let i: number = initialValue ? 0 : 1; i < array.length; ++i) {
    sum = callback(sum as unknown as B, array[i], i, array);
  }
  return sum;
}
