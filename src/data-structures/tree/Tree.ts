import { immutableObject } from '../../utils/Obj';

export interface TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;
}

export default class Tree {
  get root() {
    return immutableObject(this._tree);
  }
  private _tree: TreeNode = null;

  constructor(value?: number) {
    if (value) {
      const node: TreeNode = {
        value,
        left: null,
        right: null
      };
      this._tree = node;
    }
  }

  public insert(value: number): TreeNode {
    const node: TreeNode = {
      value,
      left: null,
      right: null
    };
    return immutableObject(this._insert(this._tree, node));
  }

  public findNode(value: number): TreeNode {
    const node = this._findNode(this._tree, value);
    return immutableObject(node);
  }

  public toJSON() {
    return JSON.stringify(this._tree);
  }

  private _findNode(node: TreeNode, value: number): TreeNode {
    if (!node) {
      return null;
    }
    if (value === node.value) {
      return node;
    }
    if (value > node.value) {
      return this._findNode(node.right, value);
    }
    return this._findNode(node.left, value);
  }

  private _insert(tree: TreeNode, node: TreeNode) {
    if (!tree) {
      tree = node;
    }
    if (node.value > tree.value) {
      if (!tree.right) {
        tree.right = node;
        return node;
      }
      this._insert(tree.right, node);
    } else if (node.value < tree.value) {
      if (!tree.left) {
        tree.left = node;
        return node;
      }
      this._insert(tree.left, node);
    }
    this._tree = tree;
    return node;
  }
}
