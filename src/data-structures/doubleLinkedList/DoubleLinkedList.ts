export interface LinkNode<T = number> {
  value: T;
  next: LinkNode<T>;
  prev: LinkNode<T>;
}

export default class DoubleLinkedList<T> {
  private _head: LinkNode<T> = null;
  private _size: number = 0;
  private _tail: LinkNode<T> = null;

  constructor(value?: T) {
    if (value) {
      const node: LinkNode<T> = {
        value,
        next: null,
        prev: null
      };
      this._head = node;
      this._tail = node;
      this._size = 1;
    }
  }

  public getHead(): LinkNode<T> {
    return this._head;
  }

  public getTail(): LinkNode<T> {
    return this._tail;
  }

  public push(value: T): LinkNode<T> {
    const node: LinkNode<T> = {
      value,
      next: null,
      prev: null
    };
    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
      this._size += 1;
      return node;
    }
    node.prev = this._tail;
    this._tail.next = node;
    this._tail = node;
    this._size += 1;
    return node;
  }

  public pushAt(value: T, newVal: T): LinkNode<T> {
    const node: LinkNode<T> = {
      value: newVal,
      next: null,
      prev: null
    };
    if (this._tail.value === value) {
      return this.push(newVal);
    }
    if (this._head.value === value && this._head.next === null) {
      return this.push(newVal);
    }

    let tmpNode: LinkNode<T> = this._head;
    while (tmpNode !== null) {
      if (tmpNode.value === value) {
        node.prev = tmpNode;
        node.next = tmpNode.next;
        tmpNode.next = node;
        this._size += 1;
        return node;
      }
      tmpNode = tmpNode.next;
    }
    return null;
  }

  public isEmpty(): boolean {
    return !this._head;
  }

  public length(): number {
    return this._size;
  }

  public toArray(): T[] {
    const array: T[] = [];
    let tmpNode: LinkNode<T> = this._head;

    while (tmpNode !== null) {
      array.push(tmpNode.value);
      tmpNode = tmpNode.next;
    }
    return array;
  }
}

// const list = new DoubleLinkedList(1);

// list.push(2);
// list.push(4);
// list.pushAt(2, 3);
// console.log(list.toArray());
// console.log(list.length());
// console.log(list.getHead().value);
// console.log(list.getHead().next.value);
// console.log(list.getHead().next.next.value);
// console.log(list.getHead().next.next.prev.value);
// console.log(list.getHead().next.next.prev.prev.value);