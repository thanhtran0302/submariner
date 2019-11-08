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

  public inOrderTraversel(callback: (node: TreeNode) => void) {
    this._inOrderTraversal(this._tree, callback);
  }

  public preOrderTraversel(callback: (node: TreeNode) => void) {
    this._preOrderTraversel(this._tree, callback);
  }

  public postOrderTraversal(callback: (node: TreeNode) => void) {
    this._postOrderTraversal(this._tree, callback);
  }

  public deleteNode(value: number): TreeNode {
    if (!this._tree.right && !this._tree.left) {
      if (value === this._tree.value) {
        const node: TreeNode = immutableObject(this._tree);
        this._tree = null;
        return node;
      }
      return null;
    }
    return null;
  }

  private _preOrderTraversel(
    node: TreeNode,
    callback: (node: TreeNode) => void
  ) {
    if (node) {
      callback(immutableObject(node));
      this._preOrderTraversel(node.left, callback);
      this._preOrderTraversel(node.right, callback);
    }
  }

  private _postOrderTraversal(
    node: TreeNode,
    callback: (node: TreeNode) => void
  ) {
    if (node) {
      this._postOrderTraversal(node.left, callback);
      this._postOrderTraversal(node.right, callback);
      callback(immutableObject(node));
    }
  }

  private _inOrderTraversal(
    node: TreeNode,
    callback: (node: TreeNode) => void
  ) {
    if (node) {
      this._inOrderTraversal(node.left, callback);
      callback(immutableObject(node));
      this._inOrderTraversal(node.right, callback);
    }
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
