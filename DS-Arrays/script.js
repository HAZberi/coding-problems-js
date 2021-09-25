//Simple Operations for Native Array DS

const randomStrings = ["a", "b", "c", "d"];

//Access value at any index O(1)

console.log(randomStrings[2]);

//Insert a value at the end of array O(1)

randomStrings.push("New Value");
console.log(randomStrings);

//Delete a value at the end of array O(1)

randomStrings.pop("New Value");
console.log(randomStrings);

//Add a value at the start of array 0(n)
//["a", "b", "c", "d"]
// 0    1     2    3
//["x", "a", "b", "c", "d"]
// 0    1    2     3    4
//We need to unshift all the indices when we insert at start
randomStrings.unshift("New Value");
console.log(randomStrings)

//Delete a value at the start of array 0(n)
//["a", "b", "c", "d"]
// 0    1     2    3
//["x", "a", "b", "c", "d"]
// 0    1    2     3    4
//We need to shift all the indices when we delete at start
randomStrings.shift();
console.log(randomStrings);

//Add a value at a known location 0(n)
randomStrings.splice(2, 1, "NewValue");
console.log(randomStrings);