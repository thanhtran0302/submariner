export default class AbstractArray<T = number> {
  protected _size: number = 0;
  protected _items: T[] = [];

  constructor(items?: T[]) {
    if (items) {
      this._items = items;
      this._size = items.length;
    }
  }

  get length(): number {
    return this._size;
  }

  get items(): T[] {
    return this._items;
  }
}
