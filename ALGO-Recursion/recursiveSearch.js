const arr = [34, 75, 95, 102, 197, 200]; //sorted array

/**
 * binarySearch() takes a sorted array, a number to search in array,
 * an upper and lower bounds of indices.
 * Returns the index where the element is found. 
 * @param {number[]} arr 
 * @param {number} num 
 * @param {number} low 
 * @param {number} high 
 * @returns {number}
 */
const binarySearch = (arr = [], num, low = 0, high = 0) => {
  if (low > high) return -1; //whenever low high crosses

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] > num) return binarySearch(arr, num, low, mid - 1);

  if (arr[mid] < num) return binarySearch(arr, num, mid + 1, high);

  return mid;
};

console.log(binarySearch(arr, 2, 0, arr.length));
