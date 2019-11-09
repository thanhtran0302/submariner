import { TreeNode } from '../data-structures/tree/Tree';
import { immutableArray, immutableObject } from './Obj';

describe('immutableObject', () => {
  it('should return null on empty or null object', () => {
    expect(immutableObject({})).toEqual(null);
    expect(immutableObject(null)).toEqual(null);
  });

  it('should return new object', () => {
    const obj: TreeNode = {
      value: 5,
      left: null,
      right: null
    };
    const newObj: TreeNode = immutableObject(obj);

    newObj.left = {
      value: 10,
      left: null,
      right: null
    };
    expect(obj).toEqual({
      value: 5,
      left: null,
      right: null
    });
  });
});

describe('immutableArray', () => {
  it('should return an empty array', () => {
    expect(immutableArray([])).toEqual([]);
  });

  it('should return new object', () => {
    const arr: number[] = [4, 5];
    const newArr: number[] = immutableArray(arr);

    newArr.push(6);
    expect(arr).toEqual([4, 5]);
  });
});
