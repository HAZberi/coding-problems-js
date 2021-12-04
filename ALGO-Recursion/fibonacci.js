//Fibonacci Sequence Challenge
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 .......

//BigO for the iterative approach is O(n)
function fibonacciIterative(index) {
  if (index <= 1) return index;

  const fibonacciSequence = [0, 1];

  for (let i = 1; i <= index; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i]);
  }

  return fibonacciSequence[index];
}

console.log(fibonacciIterative(11));

//BigO of the recursive approach is O(2^n) ===> Exponential
//Test the functions using a value between 41-44 to see the difference

function fibonacciRecursive(index) {
  //Base Case
  if (index <= 1) return index;

  //Recursive Case
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

console.log(fibonacciRecursive(4));
