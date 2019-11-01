export function insertionSort(
  array: number[],
  muttable: boolean = true
): number[] {
  const newArr: number[] = muttable ? array.slice(0) : array;

  for (let i: number = 0; i < array.length; ++i) {
    for (let j: number = i; j >= 0 && newArr[j - 1] > newArr[j]; --j) {
      const tmp = newArr[j];
      newArr[j] = newArr[j - 1];
      newArr[j - 1] = tmp;
    }
  }
  return newArr;
}
