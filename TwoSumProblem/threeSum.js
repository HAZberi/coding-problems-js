// Given an integer array nums, return all the triplets
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

const nums = [-1, 0, 1, 2, -1, -4]; //test case

//----------------------Solution In Progress, Partial solved-----------------------------//
//Problem at hand: Remove Duplicates.

const threeSum = (nums) => {
  let result = [];

  //first sort the array
  const sortedNums = nums.sort((a, b) => a - b);

  //first pick an element
  for (let i = 0; i < sortedNums.length; i++) {
    //if element is a duplicate then skip
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    //set left and right pointers for rest of the elements
    let l = i + 1;
    let r = sortedNums.length - 1;

    while (l < r) {
      //sum of fixed and left and right elements
      const threeSum = sortedNums[i] + sortedNums[l] + sortedNums[r];

      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        result.push([sortedNums[i], sortedNums[l], sortedNums[r]]);

        //for next iteration we need to update the pointers
        //consider edge case of sortedNums input for l and r only [-2, -2, 0, 0, 2, 2]
        l++;
        while (sortedNums[l] === sortedNums[l - 1] && l < r) l++;
      }
    }
  }

  return result;
};

console.log(threeSum(nums));
