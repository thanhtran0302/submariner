import { binarySearch } from '../../algorithms/binarySearch/BinarySearch';

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

  public push(...value: number[]): number {
    this._size += value.length;
    this._array.push(...value);
    this._sort();
    return this._size;
  }

  private _sort() {
    this._array.sort((a: number, b: number) => a - b);
  }
}
