import { insertionSort } from './InsertionSort';

describe('insertionSort', () => {
  it('should return sorted immutable array', () => {
    const array: number[] = [9, 1, 3, 8, 4, 6, 7, 3, 0];

    expect(insertionSort(array)).toEqual([0, 1, 3, 3, 4, 6, 7, 8, 9]);
    expect(array).toEqual([9, 1, 3, 8, 4, 6, 7, 3, 0]);
  });

  it('should return sorted array and mutate original array', () => {
    const array: number[] = [9, 1, 3, 8, 4, 6, 7, 3, 0];

    expect(insertionSort(array, false)).toEqual([0, 1, 3, 3, 4, 6, 7, 8, 9]);
    expect(array).toEqual([0, 1, 3, 3, 4, 6, 7, 8, 9]);
  });
});
