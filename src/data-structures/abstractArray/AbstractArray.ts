export default class AbstractArray<T = number> {
  protected _size: number = 0;
  protected _items: T[] = [];

  constructor(items?: T[]) {
    if (items) {
      this._items = items;
      this._size = items.length;
    }
  }

  public length() {
    return this._size;
  }

  public getItems(): T[] {
    return this._items;
  }
}
