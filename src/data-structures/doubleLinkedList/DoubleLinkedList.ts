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

  public pushHead(value: T): LinkNode<T> {
    const node: LinkNode<T> = {
      value,
      next: this._head,
      prev: null
    };
    this._head = node;
    this._size += 1;
    return node;
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
    if (
      this._tail.value === value ||
      (this._head.value === value && this._head.next === null)
    ) {
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

  public pop(): LinkNode<T> {
    if (!this._size) {
      return null;
    }
    const node: LinkNode<T> = this._tail;

    if (this._size === 1) {
      this._head = null;
      this._tail = null;
      this._size = 0;
      return node;
    }
    this._tail.prev.next = null;
    this._tail = this._tail.prev;
    this._size -= 1;
    return node;
  }

  public deleteHead(): LinkNode<T> {
    if (!this._size) {
      return null;
    }
    const node: LinkNode<T> = this._head;

    if (this._size === 1) {
      this._head = null;
      this._tail = null;
      this._size = 0;
      return node;
    }
    this._head = node.next;
    this._size -= 1;
    return node;
  }

  public deleteValue(value: T): LinkNode<T> {
    const node: LinkNode<T> = {
      value,
      next: null,
      prev: null
    };

    if (
      this._head.value === value ||
      (this._head.value === value && this._size <= 1)
    ) {
      return this.deleteHead();
    }
    if (
      this._tail.value === value ||
      (this._tail.value === value && this._size <= 1)
    ) {
      return this.pop();
    }

    let tmpNode: LinkNode<T> = this._head;
    while (tmpNode !== null) {
      if (tmpNode.value === value) {
        tmpNode.prev.next = tmpNode.next;
        node.prev = tmpNode.prev;
        node.next = tmpNode.next;
        this._size -= 1;
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
