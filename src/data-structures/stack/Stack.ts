import AbstractArray from '../abstractArray/AbstractArray';

export default class Stack<T = number> extends AbstractArray<T> {
  constructor(items?: T[]) {
    super(items);
  }

  public push(item: T) {
    this._items.push(item);
    this._size += 1;
  }

  public pop() {
    this._size -= 1;
    return this._items.pop();
  }
}
