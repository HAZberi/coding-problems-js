const letters = ["a", "l", "p", "r", "f", "m", "d", "q", "e"];

console.log(letters.sort());

const numbers = [1, 1, 34, 7, 51, 65, 8, 32, 90, 9];

console.log(numbers.sort());

//Numbers are sorted based on string character codes.
console.log("65".charCodeAt(0));
console.log("32".charCodeAt(0));
console.log("9".charCodeAt(0));

//Sorting numbers in ascending order

console.log(numbers.sort((a, b) => a - b));
