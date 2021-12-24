## Data Structures, Algorithms and Coding Problems

- A comprehensive set of various data structure implementations, popular algorithms and related coding problems. 
- Find key information about a certain data structure and algorithm in markdown files before diving into code.
- Its recommended to use your personal dev environment and run files with NodeJS.
- Feel free to clone or fork and create a pull request to add and improve. 

### Time and Space Complexity Guide 

- [Access a Comprehesive BigO CheatSheet](https://www.bigocheatsheet.com/)

### BigO Notation *(Advanced Pointers)*

- Any operation that divides the length of input or form a binary tree **like** structure, in most cases we will have BigO = log(n)
- You will eventually come across a linearithmic time O(n log(n)) algorithm. The rule of thumb above applies again, but this time the logarithmic function has to run n times e.g. reducing the size of a list n times, which occurs in algorithms like a mergesort.
- You can easily identify if the algorithmic time is n log n. Look for an outer loop which iterates through a list (O(n)). Then look to see if there is an inner loop. If the inner loop is cutting/reducing the data set on each iteration, that loop is (O(log n)), and so the overall algorithm is = O(n log n). 
- O(log(n)) **vs** O(sqrt(n))?
    - [When can an algorithm have square root(n) time complexity?](https://stackoverflow.com/questions/33194931/when-can-an-algorithm-have-square-rootn-time-complexity/39764235)
    - [Is complexity O(log(n)) equivalent to O(sqrt(n))?](https://stackoverflow.com/questions/42038294/is-complexity-ologn-equivalent-to-osqrtn/42038398)
- If a binary search tree is not balanced, how long might it take (worst case) to find an element in it?
    - O(n); where n is the number of nodes in the tree. The max time to find an element is the depth tree. The tree could be a straight linked list with length = n.
- You are looking for a specific value in a binary tree, but the tree is not a binary search tree. What would be the time complexity then?
    - O(n); Without any ordering property on the nodes, we might have to search through all the nodes.