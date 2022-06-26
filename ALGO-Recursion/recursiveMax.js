const arr = [20, 9, 0, 30, -9, 849, 848];

/**
 * maxInArray() finds the maximum in an array recursively.
 * 
 * @param {number[]} arr 
 * @param {number} count 
 * @param {number} max 
 * @returns {number} 
 */
const maxInArray = (arr = [], count = 0, max = 0) => {
  if (!arr[count] && arr[count] !== 0) return max;

  if (arr[count] > max) return maxInArray(arr, count + 1, arr[count]);

  return maxInArray(arr, count + 1, max);
};

console.log(maxInArray(arr));