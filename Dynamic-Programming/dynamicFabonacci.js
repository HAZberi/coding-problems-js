//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// Basic Fabonacci implementation using cache while tracking number of calculation.

let cache = {};
let calculations = 0
const fabonacci = (n) => {
    if (cache[n]) return cache[n];
    calculations++;
    if(n <= 1) return n;

    cache[n] = fabonacci(n - 1) + fabonacci(n - 2);

    return cache[n];
}

console.log(fabonacci(10));
console.log(calculations);
//console.log(cache);
