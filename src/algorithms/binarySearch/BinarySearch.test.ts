import { binarySearch } from './BinarySearch';

describe('binarySearch', () => {
  const arr: number[] = [2, 3, 23, 34, 45, 59, 100];
  const rIdx: number = arr.length - 1;
  const lIdx: number = 0;

  it('should find first value', () => {
    expect(binarySearch(arr, 2, lIdx, rIdx)).toEqual(0);
  });

  it('should find last value', () => {
    expect(binarySearch(arr, 100, lIdx, rIdx)).toEqual(6);
  });

  it('should find value in left part of array', () => {
    expect(binarySearch(arr, 3, lIdx, rIdx)).toEqual(1);
  });

  it('should find value in right part of array', () => {
    expect(binarySearch(arr, 34, lIdx, rIdx)).toEqual(3);
  });

  it('should find value that in middle of array', () => {
    expect(binarySearch(arr, 3, lIdx, rIdx)).toEqual(1);
  });

  it('should return null on non found value', () => {
    expect(binarySearch(arr, 1000, lIdx, rIdx)).toEqual(null);
  });
});
