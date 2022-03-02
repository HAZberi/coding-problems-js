// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

//Test Case
const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums, target) => {
  let dictionary = {};

  for (let i = 0; i < nums.length; i++) {
    if (dictionary[nums[i]]) return nums[i], i;
    //Use Equation target = nums[a] + nums[b] => nums[a] = target - nums[b]
    else dictionary[target - nums[i]] = i;
  }
  //If target not found
  return null;
};

console.log(twoSum(nums, target));