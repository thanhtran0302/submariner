import AbstractArray from '../abstractArray/AbstractArray';

export default class Queue<T = number> extends AbstractArray<T> {
  constructor(items?: T[]) {
    super(items);
  }

  public push(item: T) {
    this._items.push(item);
    this._size += 1;
    return this;
  }

  public pop() {
    this._size -= 1;
    return this._items.shift();
  }
}
