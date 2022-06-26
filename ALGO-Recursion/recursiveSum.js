const arr = [2, 4, 60, 12];

/**
 * Calculate sum of the array
 * @param {number[]} arr 
 * @param {number} arrayLength 
 * @returns {number}
 */
const sum = (arr = [], arrayLength) => {
  if (arrayLength === 0) return 0;

  return arr[arrayLength - 1] + sum(arr, arrayLength - 1);
};

console.log(sum(arr, arr.length));