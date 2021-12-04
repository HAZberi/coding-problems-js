# Recursion Basics

- Whenever a function calls itself.
- Recursion is good for tasks that have repeated subtasks to do.

### Practicle Example:

- `hasaaanzuberi@Hasaaans-MacBook-Pro coding-problems-js % ls` will print all the directories in coding-problems.js folder.
- `hasaaanzuberi@Hasaaans-MacBook-Pro coding-problems-js % ls -R` will print all the directories with all the files they contain.

### Code Example:

```js
function inception() {
  inception();
}
```

- Calling the above `inception();` function will result in stack overflow. Or Maximum call stack size exceeded in Chrome console.

### How to think when implementing recurision (A Basic 3 Step Process)

1. Identify the base case. A condition at which recursion should stop.
2. Identify the recursive case. The point where the function should call itself. (Hint: Whenever the task gets repeated.)
3. Get closer & closer and return when needed. Usually have 2 return statements, one for the base case and one for the recursive case.

_Note: To really cement the understanding of recursion implementation, checkout the example in recursion.js and debug the code in Chrome console or any other debugger of your choice._

### More pointers on recursion

- Anything you do with recursion CAN also be done with loops or iteratively.
- With respect to developer community, recursion is a solid technique but it's usually not the best approach.
- Recursion can make the code DRY and Readable but can possibily cause stack overflow and performance related issues.

### When to use Recursion

- Every time you are using a tree or converting something into a tree, consider recursion.
- Divided into a number of subproblems that are instances of the same problem.
- Every instance of the subproblem is identical in nature.
- The solution of subproblem can be combined to solve the problem at hand.
- Recursion can be used in divide and conquer approaches.

[Real world recursion examples & discussion on Stack Overflow][(https://stackoverflow.com/questions/105838/real-world-examples-of-recursion)]
