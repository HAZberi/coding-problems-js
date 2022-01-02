## Binary Search Trees Pointers!!

- A node in the tree represents a value, a pointer to the left node and a pointer to the right node.

  ```js
  class Node { 
    constructor(value) { 
      this.value = value; 
      this.left = null; 
      this.right = null; 
    } 
  }
  ```

- BigO => log n

## Perfect Binary Tree

- A tree that doesnt have a parent with only one child. This tree has all the parents with
  either two or zero children.
- Leaf nodes/Terminating nodes contain half + 1 of all the nodes in the tree. Thats why is
  super effecient to store data in a Perfect Binary Tree.
- BigO is usually is a factor of log n.

  **Calculation of Number of Node in a perfect binary tree.**
  Level1 = 2^0 = 1 ==> step 1
  Level2 = 2^1 = 2 ==> step 2
  Level3 = 2^2 = 4 ==> step 3
  Level4 = 2^3 = 8 ==> step 4

  Height of the tree = Total number of steps.

  Number of Nodes = 2^_height of the tree_ - 1;

## Binary Search Trees Rules:

- Each node in a BST can have up to 2 children nodes.
- Left node store the value that is LESS THAN the current node.
- Rigth node store the value that is MORE THAN the current node.
- Lookups, Insert and Delete are of logn complexity.

[Head over to Visual Playground and cement your knowledge.](https://visualgo.net/en/bst)

## Binary Search Trees Gotchas!

- If we keep adding the greatest value to BST we will end up with right-skewed tree
- If we keep adding the smallest value to BST we will end up with left-skewed tree
- In above mentioned worst case scinarios the BST will behave as a LinkedList
- BigO complexity is O(n) in worst case.
- Its not the fastest DS but it can provide an effecient solution in certain conditions or with
  some optimization.
- Trees can never be optimized to provide O(1) like Hashtables which has insertion, deletion
  and lookups at O(1).
