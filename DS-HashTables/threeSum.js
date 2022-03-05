// Given an integer array nums, return all the triplets
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

const nums = [-1, 0, 1, 2, -1, -4]; //test case

//----------------------Solution In Progress, Not Solved Yet-----------------------------

const threeSum = (nums) => {
  const dictionary = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] in dictionary) {
        if (
          i !== j &&
          i !== dictionary[nums[j]] &&
          j !== dictionary[nums[j]] &&
          nums[i] + nums[j] + dictionary[nums[j]] === 0
        ) {
          console.log(i, j, dictionary[nums[j]]);
          result.push([nums[i], nums[j], nums[dictionary[nums[j]]]]);
        }
      } else {
        // console.log([0 - nums[i] - nums[j], j, nums[j]]);
        dictionary[0 - nums[i] - nums[j]] = j;
      }
    }
  }

  return result;
};

console.log(threeSum(nums));
