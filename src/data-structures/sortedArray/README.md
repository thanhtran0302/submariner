# Sorted Array

Sorted arrays are the most space-efficient data structure with the best [locality of reference](https://en.wikipedia.org/wiki/Locality_of_reference 'Locality of reference') for sequentially stored data.[_[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed 'Wikipedia:Citation needed')_]

Elements within a sorted array are found using a [binary search](https://en.wikipedia.org/wiki/Binary_search 'Binary search'), in O(log _n_); thus sorted arrays are suited for cases when one needs to be able to look up elements quickly, e.g. as a [set](<https://en.wikipedia.org/wiki/Set_(computer_science)> 'Set (computer science)') or [multiset](<https://en.wikipedia.org/wiki/Set_(computer_science)#Multiset> 'Set (computer science)') [data structure](https://en.wikipedia.org/wiki/Data_structure 'Data structure'). This complexity for lookups is the same as for [self-balancing binary search trees](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree 'Self-balancing binary search tree').

In some data structures, an array of structures is used. In such cases, the same sorting methods can be used to sort the structures according to some key as a structure element; for example, sorting records of students according to roll numbers or names or grades.

If one is using a sorted [dynamic array](https://en.wikipedia.org/wiki/Dynamic_array 'Dynamic array'), then it is possible to insert and delete elements. The insertion and deletion of elements in a sorted array executes at O(_n_), due to the need to shift all the elements following the element to be inserted or deleted; in comparison a self-balancing binary search tree inserts and deletes at O(log _n_). In the case where elements are deleted or inserted at the end, a sorted dynamic array can do this in [amortized](https://en.wikipedia.org/wiki/Amortized_analysis 'Amortized analysis') O(1) time while a self-balancing binary search tree always operates at O(log _n_).

Elements in a sorted array can be looked up by their index ([random access](https://en.wikipedia.org/wiki/Random_access 'Random access')) at O(1) time, an operation taking O(log _n_) or O(_n_) time for more complex data structures.

_Source: Wikipedia_

# API

### initialize

```typescript
import { SortedArray } from 'submariner';

const sortedArray = new SortedArray();
```

### push

```typescript
sortedArray.push(5);
sortedArray.push(1, 9, 4, 6);
```

### find

```typescript
console.log(sortedArray.find(5)); // 5

console.log(sortedArray.find(100)); // null
```

### getByIdx

```typescript
console.log(sortedArray.getByIdx(4)); // 9

console.log(sortedArray.getByIdx(100)); // null
```

### length

```typescript
console.log(sortedArray.length); // 5
```

### items

_`items` returns an immutable array_

```typescript
console.log(sortedArray.items); // [1, 4, 5, 6, 9]
```
