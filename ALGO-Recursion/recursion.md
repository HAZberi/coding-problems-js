### Recursion Basics

- Whenever a function calls itself.
- Recursion is good for tasks that have repeated subtasks to do.

## Practicle Example:

- `hasaaanzuberi@Hasaaans-MacBook-Pro coding-problems-js % ls` will print all the directories in coding-problems.js folder.
- `hasaaanzuberi@Hasaaans-MacBook-Pro coding-problems-js % ls -R` will print all the directories with all the files they contain.

## Code Example:

```js
function inception() {
  inception();
}
```

- Calling the above `inception();` function will result in stack overflow. Or Maximum call stack size exceeded in Chrome console.

## How to think when implementing recurision (A Basic 3 Step Process)

1. Identify the base case. A condition at which recursion should stop.
2. Identify the recursive case. The point where the function should call itself. (Hint: Whenever the task gets repeated.)
3. Get closer & closer and return when needed. Usually have 2 return statements, one for the base case and one for the recursive case.

_Note: To really cement the understanding of recursion implementation, checkout the example in recursion.js and debug the code in Chrome console or any other debugger of your choice._


