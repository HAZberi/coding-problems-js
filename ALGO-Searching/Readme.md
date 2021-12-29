## Searching Data

### Types of Searching and Traversals

- Linear Search
- Binary Search
- Breadth First Search
- Depth First Search

### Linear Search

- Sequentially checks each element in the list until the target element/value is found.
- Looping over the list and compare each value with searching element.
- In best case its O(1) and in worst case its O(n).
- Most languages provide this basic searching mechanism.

### Bianry Search

- In this type of search its crucial to make sure that the data is sorted.
- Array/List is not an optimal data structure for this type of searching. So use a binary tree instead.
- In a binary tree or more so a balanced binary tree, data is storted to begin with.
- Only one node is accessed at each level (Divide and conquer approach) to find the searching element.
- Its very easy to find information if data is properly organized. The opposite is true for random data.
- The Time Complexity of Binary Search = O(logn).
- Code Example: Checkout the lookup(value) method in this repository @ /DS-Trees/BST.js

### Graph + Tree Traversals

- Traversals are required when we need to update each and evert node in a tree or graph.
- So why one might not just use array and list to store data for traversal? Because we will not O(logn) when searching.
- What about Hashtables? Accessiblity is O(1) but data is not sorted and address locations are random. Not optimal for traversals.
- For Graph + Tree Traversals Breadth First OR Depth First are used in practice.
- All types of traversals has a Big(O) = O(n). _You have to visit all the nodes_

### Breadth First Search (BFS)

- In BFS, start from the root node and then move left to the right node in the second level, then move left to right node accross the third level and so on and so forth.
- BFS uses additional memory to keep track of the child nodes to traverse in order.

```js
//A Balanced Binary Tree
//          9
//   4              20
//1     6       15      170

const breathFirstInAList = [9, 4, 20, 1, 6, 15, 170];
```

### Depth First Search (DFS)

- In DFS, start from the root node and keep going to the left until you reach the leaf node. Then come back to the leaf's node parent and check if it has a right child, so on and so forth.
- DFS has a lower memory requirement than BFS.

```js
//A Balanced Binary Tree
//          9
//   4              20
//1     6       15      170

const depthFirstInAList = [9, 4, 1, 6, 20, 15, 170];
```

### BFS vs DFS

- BFS provides the shortest path to the closest nodes. Or it can be said that shortest path to all the child nodes.
- The downside to BFS that it requires more memory to traverse in order.
- The upside to DFS that it requires less memory to traverse. _No need for tracking nodes_
- DFS provides the answer if a path does exist to a node?
- DFS can get really slow if the tree size is large. Not efficient to provide shortest path.
- [What is the time and space complexity of a breadth first and depth first tree traversal?](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)
- Real Life Situations
  - If you know the solution is not far from the root of the tree.
    - BFS
  - If the tree is very deep and solutions are rare.
    - BFS (DFS will be very very slow)
  - If the tree is very wide.
    - DFS (counter intutive approach - BFS will use a lot of memory)
  - If solutions are frequent but are located very deep in the tree.
    - DFS
  - Determinig whether a path exist between the two nodes.
    - DFS
  - Finding the shortest path.
    - BFS

### Depth First Search Different Implementations

```js
//Our Balanced Binary Tree
//          9
//   4              20
//1     6       15      170
```

- Inorder
  - Returns a list by visiting the lowest values first. Assuming a binary search tree. 
  ```js
  const inorderDFS = [1, 4, 6, 9, 15, 20, 170];
  ```
- Pre-order
  - Returns a list by traversing the depth of the tree.
  ```js
  const preorderDFS = [1, 4, 6, 9, 15, 20, 170];
  ```
- Post-order
    - Returns a list by visiting children before parent. Left child first and then right child. 
  ```js
  const postorderDFS = [1, 6, 4, 15, 170, 20, 9];
  ```
