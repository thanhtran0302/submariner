# Stack

In [computer science](https://en.wikipedia.org/wiki/Computer_science 'Computer science'), a _stack_ is an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type 'Abstract data type') that serves as a [collection](<https://en.wikipedia.org/wiki/Collection_(computing)> 'Collection (computing)') of elements, with two principal operations:

- **push**, which adds an element to the collection, and
- **pop**, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, **LIFO** (**last in, first out**). Additionally, a [peek](<https://en.wikipedia.org/wiki/Peek_(data_type_operation)> 'Peek (data type operation)') operation may give access to the top without modifying the stack.[[1]](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)#cite_note-1>) The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.[[2]](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)#cite_note-clrs-2>)

Considered as a [linear data structure](https://en.wikipedia.org/wiki/Linear_data_structure 'Linear data structure'), or more abstractly a sequential collection, the push and pop operations occur only at one end of the structure, referred to as the _top_ of the stack. This makes it possible to implement a stack as a [singly linked list](https://en.wikipedia.org/wiki/Singly_linked_list 'Singly linked list') and a pointer to the top element. A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to accept an entity to be pushed, the stack is then considered to be in an [overflow](https://en.wikipedia.org/wiki/Stack_overflow 'Stack overflow') state. The pop operation removes an item from the top of the stack.

A stack is needed to implement [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search 'Depth-first search').

_Source: Wikipedia_

# API

### initialize

```typescript
import { Stack } from 'submariner';

const stack = new Stack<number>([1, 2]);
```

### push

```typescript
stack.push(3).push(4);
```

### pop

```typescript
const popped: number = stack.pop();

console.log(popped); // 4
```

### length

```typescript
console.log(stack.length); // 3
```

### items

_`items` returns an immutable array._

```typescript
console.log(stack.items); // [1, 2, 3]
```
