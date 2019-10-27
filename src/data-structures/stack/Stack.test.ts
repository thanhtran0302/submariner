import Stack from './Stack';

describe('Stack', () => {
  it('should init stack with an empty array', () => {
    const stack = new Stack();

    expect(stack.getItems()).toEqual([]);
  });

  it('should init stack with array of number', () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.getItems()).toEqual([1, 2, 3]);
  });

  it('should return exact stack size', () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.length()).toEqual(3);
  });

  it('should return popped element', () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.pop()).toEqual(3);
  });

  it('should resized popped stack', () => {
    const stack = new Stack([1, 2, 3]);

    stack.pop();
    expect(stack.length()).toEqual(2);
  });

  it('should init stack with array of custom type', () => {
    type CustomType = boolean | number;
    const stack = new Stack<CustomType>([true, 1, false]);

    expect(stack.getItems()).toEqual([true, 1, false]);
  });
});
