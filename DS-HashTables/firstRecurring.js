const firstRecurringChar = (arr) => {
  const hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashmap[arr[i]] >= 0) return arr[i];
    hashmap[arr[i]] = i;
  }
};

console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([2,3,4,5]));
