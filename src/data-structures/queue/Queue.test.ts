import Queue from './Queue';

describe('Queue', () => {
  it('should init queue with an empty array', () => {
    const queue = new Queue();

    expect(queue.items).toEqual([]);
  });

  it('should init queue with array of number', () => {
    const queue = new Queue([1, 2, 3]);

    expect(queue.items).toEqual([1, 2, 3]);
  });

  it('should return exact queue size', () => {
    const queue = new Queue([1, 2, 3]);

    expect(queue.length).toEqual(3);
  });

  it('should return popped element', () => {
    const queue = new Queue([1, 2, 3]);

    expect(queue.pop()).toEqual(1);
  });

  it('should resized popped queue', () => {
    const queue = new Queue([1, 2, 3]);

    queue.pop();
    expect(queue.length).toEqual(2);
  });

  it('should init queue with array of custom type', () => {
    type CustomType = boolean | number;
    const queue = new Queue<CustomType>([true, 1, false]);

    expect(queue.items).toEqual([true, 1, false]);
  });

  it('should push element to queue', () => {
    const queue = new Queue([1, 2, 3]);

    queue.push(4);
    expect(queue.items[queue.length - 1]).toEqual(4);
  });
});
