//Fibonacci Sequence Challenge
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 .......

function fibonacciIterative(index) {
  const fibonacciSequence = [0, 1];
  if (index < 2) return `Cannot create fibonacci sequence with ${index}`;

  for (let i = 1; i <= index; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i]);
  }

  return fibonacciSequence[index];
}

console.log(fibonacciIterative(11));


