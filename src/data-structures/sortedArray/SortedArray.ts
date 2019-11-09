import { binarySearch } from '../../algorithms/binarySearch/BinarySearch';
import { insertionSort } from '../../algorithms/sort/insertionSort/InsertionSort';
import AbstractArray from '../abstractArray/AbstractArray';

export default class SortedArray extends AbstractArray {
  constructor(values?: number[]) {
    super(values);
    if (values) {
      this._items = values;
      this._size = values.length;
      this._sort();
    }
  }

  public getByIdx(idx: number): number {
    return this._items[idx] ? this._items[idx] : null;
  }

  public find(value: number): number {
    return binarySearch(this._items, value, 0, this._items.length - 1);
  }

  // Why insertion sort ?
  // Insertion sort is one of the most simple and efficient
  // sort algorithm for nearest sorted array.
  // That's why we only apply insertion sort on an array that
  // already filled.
  // Because we know that this array is already sorted for the
  // first time.
  public push(...value: number[]): number {
    const isSorted: boolean = this._items.length > 0;

    this._items.push(...value);
    if (isSorted) {
      this._items = insertionSort(this._items);
    } else {
      this._sort();
    }
    this._size += value.length;
    return this._size;
  }

  private _sort() {
    this._items.sort((a: number, b: number) => a - b);
  }
}
