import { binarySearch } from '../../algorithms/binarySearch/BinarySearch';
import { insertionSort } from '../../algorithms/sort/insertionSort/InsertionSort';

export default class SortedArray {
  private _array: number[] = [];
  private _size: number = 0;

  constructor(values?: number[]) {
    if (values) {
      this._array = values;
      this._size = values.length;
      this._sort();
    }
  }

  public length(): number {
    return this._size;
  }

  public getByIdx(idx: number): number {
    return this._array[idx];
  }

  public get(): number[] {
    return this._array;
  }

  public find(value: number): number {
    return binarySearch(this._array, value, 0, this._array.length - 1);
  }

  // Why insertion sort ?
  // Insertion sort is one of the most simple and efficient
  // sort algorithm for nearest sorted array.
  // That's why we only apply insertion sort on an array that
  // already filled.
  // Because we know that this array is already sorted for the
  // first time.
  public push(...value: number[]): number {
    const isSorted: boolean = this._array.length > 0;

    this._array.push(...value);
    if (isSorted) {
      this._array = insertionSort(this._array);
    } else {
      this._sort();
    }
    this._size += value.length;
    return this._size;
  }

  private _sort() {
    this._array.sort((a: number, b: number) => a - b);
  }
}
