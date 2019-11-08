import Tree from './Tree';

describe('Tree', () => {
  it('should initialize tree without default value', () => {
    const tree = new Tree();

    expect(tree.root).toEqual(null);
  });

  it('should return immutable root node', () => {
    const tree = new Tree(10);
    const root = tree.root;

    root.left = {
      value: 20,
      left: null,
      right: null
    };
    expect(JSON.stringify(tree.root)).toEqual(
      '{"value":10,"left":null,"right":null}'
    );
  });

  it('should initialize tree with default value', () => {
    const tree = new Tree(10);

    expect(tree.root.value).toEqual(10);
    expect(tree.root.left).toEqual(null);
    expect(tree.root.right).toEqual(null);
  });

  it('should insert with empty tree', () => {
    const tree = new Tree();

    tree.insert(10);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left).toEqual(null);
    expect(tree.root.right).toEqual(null);
  });

  it('should return immutable node on insert operation', () => {
    const tree = new Tree(10);
    const node = tree.insert(5);

    node.left = {
      value: 30,
      left: null,
      right: null
    };
    expect(JSON.stringify(tree.root)).toEqual(
      '{"value":10,"left":{"value":5,"left":null,"right":null},"right":null}'
    );
  });

  it('should return added node', () => {
    const tree = new Tree();

    expect(tree.insert(10)).toEqual({ value: 10, left: null, right: null });
  });

  it('should insert values to tree', () => {
    const tree = new Tree(10);

    tree.insert(5);
    expect(tree.root.left).toEqual({ value: 5, left: null, right: null });
    expect(tree.root.left.value).toEqual(5);
    expect(tree.root.left.left).toEqual(null);
    expect(tree.root.left.right).toEqual(null);

    tree.insert(20);
    expect(tree.root.right).toEqual({ value: 20, left: null, right: null });
    expect(tree.root.right.value).toEqual(20);
    expect(tree.root.right.left).toEqual(null);
    expect(tree.root.right.right).toEqual(null);
    expect(JSON.stringify(tree.root)).toEqual(
      '{"value":10,"left":{"value":5,"left":null,"right":null},"right":{"value":20,"left":null,"right":null}}'
    );
  });

  it('should insert recursion', () => {
    const tree = new Tree(10);

    tree.insert(5);
    expect(tree.root.left).toEqual({ value: 5, left: null, right: null });
    expect(tree.root.left.value).toEqual(5);
    expect(tree.root.left.left).toEqual(null);
    expect(tree.root.left.right).toEqual(null);

    tree.insert(20);
    expect(tree.root.right).toEqual({ value: 20, left: null, right: null });
    expect(tree.root.right.value).toEqual(20);
    expect(tree.root.right.left).toEqual(null);
    expect(tree.root.right.right).toEqual(null);

    tree.insert(4);
    expect(tree.root.left.left.value).toEqual(4);
    expect(tree.root.left.left.left).toEqual(null);
    expect(tree.root.left.left.right).toEqual(null);

    tree.insert(22);
    expect(tree.root.right.right.value).toEqual(22);
    expect(tree.root.right.right.right).toEqual(null);
    expect(tree.root.right.right.left).toEqual(null);

    expect(JSON.stringify(tree.root)).toEqual(
      '{"value":10,"left":{"value":5,"left":{"value":4,"left":null,"right":null},"right":null},"right":{"value":20,"left":null,"right":{"value":22,"left":null,"right":null}}}'
    );
  });

  it('should stringify tree', () => {
    const tree = new Tree(10);

    tree.insert(5);
    tree.insert(20);
    expect(tree.toJSON()).toEqual(
      '{"value":10,"left":{"value":5,"left":null,"right":null},"right":{"value":20,"left":null,"right":null}}'
    );
  });

  it('should return null on empty tree', () => {
    const tree = new Tree();

    expect(tree.findNode(10)).toEqual(null);
  });

  it('should find node', () => {
    const tree = new Tree(10);

    expect(tree.findNode(10)).toEqual({
      value: 10,
      left: null,
      right: null
    });
  });

  it('should left find node', () => {
    const tree = new Tree(10);

    tree.insert(5);
    expect(tree.findNode(5)).toEqual({
      value: 5,
      left: null,
      right: null
    });
  });

  it('should right find node', () => {
    const tree = new Tree(10);

    tree.insert(15);
    expect(tree.findNode(15)).toEqual({
      value: 15,
      left: null,
      right: null
    });
  });

  it('should return immutable node found', () => {
    const tree = new Tree(10);
    const node = tree.findNode(10);

    node.left = {
      value: 15,
      left: null,
      right: null
    };
    expect(JSON.stringify(tree.root)).toEqual(
      '{"value":10,"left":null,"right":null}'
    );
  });
});
