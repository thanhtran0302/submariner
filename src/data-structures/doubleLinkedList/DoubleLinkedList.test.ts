import DoubleLinkedList from './DoubleLinkedList';

describe('DoubleLinkedList', () => {
  it('should init empty list', () => {
    const list = new DoubleLinkedList();
    expect(list.toArray()).toEqual([]);
  });

  it('should return empty length list', () => {
    const list = new DoubleLinkedList();
    expect(list.length()).toEqual(0);
  });

  it('should return empty length', () => {
    const list = new DoubleLinkedList(1);
    expect(list.length()).toEqual(1);
  });

  it('should return true on empty list', () => {
    const list = new DoubleLinkedList();
    expect(list.isEmpty()).toEqual(true);
  });

  it('should return false on non empty list', () => {
    const list = new DoubleLinkedList(1);
    expect(list.isEmpty()).toEqual(false);
  });

  it('should push element to the end', () => {
    const list = new DoubleLinkedList(1);
    list.push(2);
    expect(list.getTail().value).toEqual(2);
    expect(list.length()).toEqual(2);
    expect(list.getTail().prev.value).toEqual(1);
  });

  it('should push to an empty list', () => {
    const list = new DoubleLinkedList();
    list.push(2);
    expect(list.getHead().value).toEqual(2);
    expect(list.getTail().value).toEqual(2);
  });

  it('should get head and tail element', () => {
    const list = new DoubleLinkedList(1);
    list.push(2);
    expect(list.getHead().value).toEqual(1);
    expect(list.getTail().value).toEqual(2);
  });

  it('should transform list to array', () => {
    const list = new DoubleLinkedList(1);
    list.push(2);
    expect(list.toArray()).toEqual([1, 2]);
  });

  it('should connect next and previous element', () => {
    const list = new DoubleLinkedList(1);

    list.push(2);
    list.push(3);
    expect(list.getHead().value).toEqual(1);
    expect(list.getHead().next.value).toEqual(2);
    expect(list.getHead().next.next.value).toEqual(3);
    expect(list.getHead().next.next.next).toEqual(null);
    expect(list.getHead().next.next.prev.value).toEqual(2);
    expect(list.getHead().next.next.prev.prev.value).toEqual(1);
    expect(list.getHead().next.next.prev.prev.prev).toEqual(null);
    expect(list.length()).toEqual(3);
  });

  it('should pushAt after head value', () => {
    const list = new DoubleLinkedList(1);

    list.push(3);
    list.push(4);
    expect(list.toArray()).toEqual([1, 3, 4]);
    list.pushAt(1, 2);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  it('should pushAt after tail value', () => {
    const list = new DoubleLinkedList(1);

    list.push(2);
    list.push(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
    list.pushAt(3, 4);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  it('should pushAt in middle', () => {
    const list = new DoubleLinkedList(1);

    list.push(2);
    list.push(3);
    list.push(5);
    expect(list.toArray()).toEqual([1, 2, 3, 5]);
    list.pushAt(3, 4);
    expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should not push element in list', () => {
    const list = new DoubleLinkedList(1);

    list.push(2);
    list.push(3);
    list.push(5);
    expect(list.toArray()).toEqual([1, 2, 3, 5]);
    expect(list.pushAt(30, 4)).toEqual(null);
    expect(list.toArray()).toEqual([1, 2, 3, 5]);
  });
});
