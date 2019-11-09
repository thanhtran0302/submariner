# Queue

In [computer science](https://en.wikipedia.org/wiki/Computer_science 'Computer science'), a **queue** is a [collection](<https://en.wikipedia.org/wiki/Collection_(abstract_data_type)> 'Collection (abstract data type)') in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as _enqueue_, and removal of entities from the front terminal position, known as _dequeue_. This makes the queue a [First-In-First-Out (FIFO) data structure](<https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)> 'FIFO (computing and electronics)'). In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a _[peek](<https://en.wikipedia.org/wiki/Peek_(data*type_operation)> 'Peek (data type operation)')* or _front_ operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a [linear data structure](https://en.wikipedia.org/wiki/Linear_data_structure 'Linear data structure'), or more abstractly a sequential collection.

Queues provide services in [computer science](https://en.wikipedia.org/wiki/Computer_science 'Computer science'), [transport](https://en.wikipedia.org/wiki/Transport 'Transport'), and [operations research](https://en.wikipedia.org/wiki/Operations_research 'Operations research') where various entities such as data, objects, persons, or events are stored and held to be processed later. In these contexts, the queue performs the function of a [buffer](<https://en.wikipedia.org/wiki/Buffer_(computer_science)> 'Buffer (computer science)').

Queues are common in computer programs, where they are implemented as data structures coupled with access routines, as an [abstract data structure](https://en.wikipedia.org/wiki/Abstract_data_structure 'Abstract data structure') or in object-oriented languages as classes. Common implementations are [circular buffers](https://en.wikipedia.org/wiki/Circular_buffer 'Circular buffer') and [linked lists](https://en.wikipedia.org/wiki/Linked_list 'Linked list').

_Source: Wikipedia_

# API

### initialize

```typescript
import { Queue } from 'submariner';

const queue = new Queue([1, 2]);
```

### push

```typescript
queue.push(3).push(4);
```

### pop

```typescript
const popped: number = queue.pop();

console.log(popped); // 1
```

### length

```typescript
console.log(queue.length); // 3
```

### items

_`items` returns an immutable array_

```typescript
console.log(queue.items); // [1, 2, 3]
```
