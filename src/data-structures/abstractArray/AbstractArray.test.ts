import AbstractArray from './AbstractArray';

describe('AbstractArray', () => {
  it('should init array', () => {
    const arr = new AbstractArray([1, 2, 3]);
    expect(arr.items).toEqual([1, 2, 3]);
  });

  it('should return array length', () => {
    const arr = new AbstractArray([1, 2, 3]);
    expect(arr.length).toEqual(3);
  });
});
