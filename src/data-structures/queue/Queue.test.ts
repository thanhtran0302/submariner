import Queue from "./Queue";

describe("Queue", () => {
  it("should init queue with an empty array", () => {
    const queue = new Queue();

    expect(queue.getItems()).toEqual([]);
  });

  it("should init queue with array of number", () => {
    const queue = new Queue([1, 2, 3]);

    expect(queue.getItems()).toEqual([1, 2, 3]);
  });

  it("should return exact queue size", () => {
    const queue = new Queue([1, 2, 3]);

    expect(queue.length()).toEqual(3);
  });

  it("should return popped element", () => {
    const queue = new Queue([1, 2, 3]);

    expect(queue.pop()).toEqual(1);
  });

  it("should resized popped queue", () => {
    const queue = new Queue([1, 2, 3]);

    queue.pop();
    expect(queue.length()).toEqual(2);
  });

  it("should init queue with array of custom type", () => {
    type CustomType = boolean | number;
    const queue = new Queue<CustomType>([true, 1, false]);

    expect(queue.getItems()).toEqual([true, 1, false]);
  });
});
