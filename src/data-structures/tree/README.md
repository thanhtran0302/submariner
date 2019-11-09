# Basic Tree (not balanced)

In [computer science](https://en.wikipedia.org/wiki/Computer_science 'Computer science'), **binary search trees** (**BST**), sometimes called **ordered** or **sorted binary trees**, are a particular type of [container](<https://en.wikipedia.org/wiki/Collection_(abstract_data_type)> 'Collection (abstract data type)'): a [data structure](https://en.wikipedia.org/wiki/Data_structure 'Data structure') that stores "items" (such as numbers, names etc.) in [memory](https://en.wikipedia.org/wiki/Computer_memory 'Computer memory'). They allow fast lookup, addition and removal of items, and can be used to implement either [dynamic sets](<https://en.wikipedia.org/wiki/Set_(abstract_data_type)> 'Set (abstract data type)') of items, or [lookup tables](https://en.wikipedia.org/wiki/Lookup_table 'Lookup table') that allow finding an item by its _key_ (e.g., finding the phone number of a person by name).

Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of [binary search](https://en.wikipedia.org/wiki/Binary_search 'Binary search'): when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees. On average, this means that each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes [time proportional to](https://en.wikipedia.org/wiki/Time_complexity 'Time complexity') the [logarithm](https://en.wikipedia.org/wiki/Logarithm 'Logarithm') of the number of items stored in the tree. This is much better than the [linear time](https://en.wikipedia.org/wiki/Linear_time 'Linear time') required to find items by key in an (unsorted) array, but slower than the corresponding operations on [hash tables](https://en.wikipedia.org/wiki/Hash_table 'Hash table').

Several variants of the binary search tree have been studied in computer science; this article deals primarily with the basic type, making references to more advanced types when appropriate.

_Source: Wikipedia_

# API

### initialize

```typescript
const tree = new Tree(50);
```

### root

Property that returns root node.

```typescript
console.log(tree.root.value); // 50
```

### min

Returns the minimum value of the tree.

```typescript
console.log(tree.min); // 50
```

### max

Returns the maximum value of the tree.

```typescript
console.log(tree.max); // 50
```

### toJSON

Transform tree to JSON

```typescript
console.log(tree.toJSON); // { value: 50, left: null, right: null }
```

### insert

**parameters:** (value: number) => TreeNode

Returns immutable added TreeNode.

```typescript
tree.insert(55);

console.log(tree.root.right.value); // 55

// Since this is an ordered tree, this new value is greater than
// the root one. So the search the value in the right.
```

### findNode

**parameters:** (value: number) => TreeNode

Returns immutable found node.

```typescript
const found: TreeNode = tree.findNode(55);

console.log(found.value); // 55
```

### inOrderTraversal

**parameters:** (callback: (node: TreeNode) => void) => void

```typescript
const tree = new Tree(50);

tree.insert(55);
tree.insert(45);
tree.insert(60);
tree.insert(47);
tree.insert(54);
tree.insert(40);

tree.inOrderTraversal((node: TreeNode) => {
  console.log(node.value);
});
// 40, 45, 47, 50, 54, 55, 60
```

### preOrderTraversal

**parameters:** (callback: (node: TreeNode) => void) => void

```typescript
const tree = new Tree(50);

tree.insert(55);
tree.insert(45);
tree.insert(60);
tree.insert(47);
tree.insert(54);
tree.insert(40);

tree.preOrderTraversal((node: TreeNode) => {
  console.log(node.value);
});
// 50, 45, 40, 47, 55, 54, 60
```

### postOrderTraversal

**parameters:** (callback: (node: TreeNode) => void) => void

```typescript
const tree = new Tree(50);

tree.insert(55);
tree.insert(45);
tree.insert(60);
tree.insert(47);
tree.insert(54);
tree.insert(40);

tree.postOrderTraversal((node: TreeNode) => {
  console.log(node.value);
});
// 40, 47, 45, 54, 60, 55, 50
```

### deleteNode

**parameters:** (value: number) => TreeNode

Returns removed immutable TreeNode.

```typescript
const tree = new Tree(50);

tree.insert(55);
tree.insert(45);
tree.insert(60);
tree.insert(47);
tree.insert(54);
tree.insert(40);

const deleted: TreeNode = tree.deleteNode(45);

console.log(deleted.value); // 45
```

### findParent

**parameters:**(value: number) => TreeNode

Returns immutable parent `TreeNode`

```typescript
const tree = new Tree(50);

tree.insert(55);
tree.insert(45);
tree.insert(60);
tree.insert(47);
tree.insert(54);
tree.insert(40);

console.log(tree.findParent(40).value); // 45
```
