//Logic - First duplication found
const firstRecurringChar = (arr) => {
  const hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashmap[arr[i]] >= 0) return arr[i];
    hashmap[arr[i]] = i;
  }
  return undefined;
};

//Logic - First repeating item found

const firstRepeatingChar = (arr) => {
  const hashmap = {};
  let minimumIndex = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (hashmap[arr[i]] >= 0) {
      minimumIndex = i;
    }
    hashmap[arr[i]] = i;
  }
  if (minimumIndex >= 0) return arr[minimumIndex];
  return undefined;
};

console.log(firstRecurringChar([2, 5, 5, 2, 3, 5, 1, 20, 4]));
console.log(firstRepeatingChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(firstRepeatingChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 3, 4, 5]));
