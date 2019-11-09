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

  get min(): TreeNode {
    return immutableObject(this._findMin(this._tree));
  }

  get max(): TreeNode {
    return immutableObject(this._findMax(this._tree));
  }

  get toJSON(): string {
    return JSON.stringify(this._tree);
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

  public inOrderTraversal(callback: (node: TreeNode) => void): void {
    this._inOrderTraversal(this._tree, callback);
  }

  public preOrderTraversal(callback: (node: TreeNode) => void): void {
    this._preOrderTraversal(this._tree, callback);
  }

  public postOrderTraversal(callback: (node: TreeNode) => void): void {
    this._postOrderTraversal(this._tree, callback);
  }

  // @TODO: Possibility to delete root node.
  public deleteNode(value: number): TreeNode {
    if (!this._tree.right && !this._tree.left) {
      if (value === this._tree.value) {
        const node: TreeNode = immutableObject(this._tree);
        this._tree = null;
        return node;
      }
      return null;
    }
    const toRemoveNode: TreeNode = this._findNode(this._tree, value);
    const toRemoveNodeRight: TreeNode = toRemoveNode.right;
    const toRemoveNodeLeft: TreeNode = toRemoveNode.left;
    const min: TreeNode = this._findMin(toRemoveNode.right);
    const minParent: TreeNode = this._findParent(this._tree, min.value);
    const parentNode: TreeNode = this._findParent(
      this._tree,
      toRemoveNode.value
    );

    min.left = toRemoveNodeLeft;
    min.right = toRemoveNodeRight;
    minParent.left = null;
    if (toRemoveNode.value < parentNode.value) {
      parentNode.left = min;
    } else if (toRemoveNode.value > parentNode.value) {
      parentNode.right = min;
    }
    return immutableObject(toRemoveNode);
  }

  public findParent(value: number): TreeNode {
    return immutableObject(this._findParent(this._tree, value));
  }

  private _findParent(node: TreeNode, value: number): TreeNode {
    if (!node) {
      return null;
    }

    if (value > node.value) {
      if (node.right && node.right.value === value) {
        return node;
      }
      return this._findParent(node.right, value);
    }
    if (node.left && node.left.value === value) {
      return node;
    }
    return this._findParent(node.left, value);
  }

  private _findMin(node: TreeNode): TreeNode {
    if (node.left) {
      return this._findMin(node.left);
    }
    return node;
  }

  private _findMax(node: TreeNode): TreeNode {
    if (node.right) {
      return this._findMax(node.right);
    }
    return node;
  }

  private _preOrderTraversal(
    node: TreeNode,
    callback: (node: TreeNode) => void
  ) {
    if (node) {
      callback(immutableObject(node));
      this._preOrderTraversal(node.left, callback);
      this._preOrderTraversal(node.right, callback);
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
