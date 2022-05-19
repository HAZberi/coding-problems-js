//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// Basic Fabonacci implementation using cache while tracking number of calculation.

let cache = {};
let calculations = 0;
const fabonacci = (n) => {
  //Uncomment the line below to enable caching.
  //if (cache[n]) return cache[n];

  calculations++;
  if (n <= 1) {
    cache[n] = n;
    return cache[n];
  }

  cache[n] = fabonacci(n - 1) + fabonacci(n - 2);

  return cache[n];
};

console.log(fabonacci(8));
console.log(
  `It took ${calculations} calculations if we are not caching the results.`
);
//console.log(cache);

//reset calculations to track the number of operations for memoized
calculations = 0;

const memoizedFabonacci = () => {
  let cache = {};
  return function calcFabonacci(n) {
    calculations++;
    if (n in cache) return cache[n];

    if (n <= 1) {
      cache[n] = n;
      return cache[n];
    }

    cache[n] = calcFabonacci(n - 1) + calcFabonacci(n - 2);

    return cache[n];
  };
};

const fabonacciNumber = memoizedFabonacci();

console.log(fabonacciNumber(8));
//console.log(cached);
console.log(`It took ${calculations} calculations if caching is implemented.`);

//Bottom Up Approach
const fabonacciBottomUp = (n) => {
  let solution = [0, 1];

  if (n < 0) return "Not valid for negative integers.";

  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      solution.push(solution[i - 1] + solution[i - 2]);
    }
  }

  return solution.pop();
};

console.log(fabonacciBottomUp(8));

const anotherFabonacci = (n) => {
  let val1 = 0;
  let val2 = 1;

  for (let i = 0; i < n; i++) {
    const temp = val1;
    val1 = val1 + val2;
    val2 = temp;
  }

  return val1;
};

console.log(anotherFabonacci(8));
