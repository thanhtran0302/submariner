export default class Queue<T = number> {
  private _size: number = 0;
  private _items: T[] = [];

  constructor(items?: T[]) {
    if (items) {
      this._items = items;
      this._size = items.length;
    }
  }

  public length() {
    return this._size;
  }

  public push(item: T) {
    this._items.push(item);
    this._size += 1;
  }

  public pop() {
    this._size -= 1;
    return this._items.shift();
  }

  public getItems(): T[] {
    return this._items;
  }
}
