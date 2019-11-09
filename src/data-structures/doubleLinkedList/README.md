# Double Linked List

In [computer science](https://en.wikipedia.org/wiki/Computer_science 'Computer science'), a **doubly linked list** is a [linked data structure](https://en.wikipedia.org/wiki/Linked_data_structure 'Linked data structure') that consists of a set of sequentially linked [records](<https://en.wikipedia.org/wiki/Record_(computer_science)> 'Record (computer science)') called [nodes](<https://en.wikipedia.org/wiki/Node_(computer_science)> 'Node (computer science)'). Each node contains three [fields](<https://en.wikipedia.org/wiki/Field_(computer_science)> 'Field (computer science)'): two link fields ([references](<https://en.wikipedia.org/wiki/Reference_(computer_science)> 'Reference (computer science)') to the previous and to the next node in the sequence of nodes) and one data field. The beginning and ending nodes' **previous** and **next** links, respectively, point to some kind of terminator, typically a [sentinel node](https://en.wikipedia.org/wiki/Sentinel_node 'Sentinel node') or [null](https://en.wikipedia.org/wiki/Null_pointer 'Null pointer'), to facilitate traversal of the list. If there is only one sentinel node, then the list is circularly linked via the sentinel node. It can be conceptualized as two [singly linked lists](https://en.wikipedia.org/wiki/Linked_list 'Linked list') formed from the same data items, but in opposite sequential orders.

The two node links allow traversal of the list in either direction. While adding or removing a node in a doubly linked list requires changing more links than the same operations on a singly linked list, the operations are simpler and potentially more efficient (for nodes other than first nodes) because there is no need to keep track of the previous node during traversal or no need to traverse the list to find the previous node, so that its link can be modified.

_Source: Wikipedia_

# API

### initialize

```typescript
import { DoubleLinkedList } from 'submariner';

const list = new DoubleLinkedList<number>(2);
```

### pushHead

_`pushHead` returns immutable node_

```typescript
const addedNode: LinkNode<number> = list.pushHead(1);

console.log(list.toArray); // [1, 2]
```

### pushAt

**parameters:** (valueToSearch: T, valueToAdd: T): LinkNode<T>;

This method will return a `LinkNode` with the new value in case of success. Otherwise it returns `null`.

```typescript
const addedNode: LinkNode<number> = list.pushAt(1, 3);

console.log(addedNode.value); // 3

const newAddedNode: LinkNode<number> = list.pushAt(100, 4);

console.log(newAddedNode); // null
```

### push

**parameters:** (value: T): LinkNode<T>

This method will return a `LinkNode` with the new value in case of success. Otherwise it returns `null`.

```typescript
const addedNode: LinkNode<number> = list.push(4);

console.log(addedNode.value); // 4

console.log(list.toArray); // [1, 2, 3, 4]
```

### pop

**parameters:** (): LinkNode<T>

Returns immutable removed node

```typescript
const popped: LinkNode<number> = list.pop();

console.log(popped.value); // 4
```

### deleteHead

**parameters:** (): LinkNode<T>

Returns immutable removed node, `null` if list is empty.

```typescript
const deletedHead: LinkNode<number> = list.deleteHead();

console.log(deletedHead.value); // 1
```

### deleteValue

**parameters:** (value: T): LinkNode<T>

Returns immutable removed node, `null` if value not found.

```typescript
const list = new DoubleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

const deletedValue: LinkNode<number> = list.deletevalue(3);

console.log(deletedValue.value); // 3
console.log(list.toArray); // [1, 2, 4]
```

### isEmpty

Property returns a `boolean` whether the list is empty or not.

```typescript
console.log(list.isEmpty); // false
```

### length

Returns length of the list.

```typescript
console.log(list.length); // 3
```

### toArray

Put all node values into an array, and return it, with type of `T[]`

```typescript
console.log(list.toArray); // [1, 2, 4]
```
