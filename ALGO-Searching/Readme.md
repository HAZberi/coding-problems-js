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
