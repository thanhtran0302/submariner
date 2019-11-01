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
    return this._find(value, 0, this._array.length - 1);
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

  private _find(value: number, lIdx: number, rIdx: number): number {
    const midIdx: number = Math.round((rIdx - lIdx) / 2 + lIdx);

    if (this._array[lIdx] === value) {
      return lIdx;
    }
    if (this._array[rIdx] === value) {
      return rIdx;
    }
    if (rIdx > lIdx) {
      if (this._array[midIdx] === value) {
        return midIdx;
      } else if (this._array[midIdx] > value) {
        return this._find(value, lIdx, midIdx);
      }
      return this._find(value, midIdx, rIdx);
    }
    return -1;
  }
}
