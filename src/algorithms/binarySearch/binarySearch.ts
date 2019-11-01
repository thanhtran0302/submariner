export function binarySearch(
  array: number[],
  value: number,
  lIdx: number,
  rIdx: number
) {
  const midIdx: number = Math.round((rIdx - lIdx) / 2 + lIdx);

  if (array[lIdx] === value) {
    return lIdx;
  }
  if (array[rIdx] === value) {
    return rIdx;
  }
  if (rIdx > lIdx) {
    if (array[midIdx] === value) {
      return midIdx;
    } else if (array[midIdx] > value) {
      return binarySearch(array, value, lIdx, midIdx);
    }
    return binarySearch(array, value, midIdx, rIdx);
  }
  return -1;
}
