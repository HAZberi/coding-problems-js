// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2,
// added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution.
// You may not use the same element twice.

// Your solution must use only constant extra space.

const nums = [2,3,4];
const target = 6;

const twoSumSorted = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (l > r) return;
    if (nums[l] + nums[r] > target) {
      r--;
    } else if (nums[l] + nums[r] < target) {
      l++;
    } else {
      return [l + 1, r + 1]; //to convert 0-indexed(usual array starting with 0 index) to 1-indexed array of integers
    }
  }
};

console.log(twoSumSorted(nums, target));
