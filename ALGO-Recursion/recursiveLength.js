const arr = [99, 44, 23, 45, 646, 67, 98, 34, 45, 45];

/**
 * calclengthOfArray() returns the arrays length.
 * 
 * @param {number[]} arr 
 * @param {number} count 
 * @returns {number}
 */
const calclengthOfArray = (arr = [], count = 0) => {
    if (!arr[count]) return count;
  
    return calclengthOfArray(arr, count + 1);
  };
  

console.log(calclengthOfArray(arr));