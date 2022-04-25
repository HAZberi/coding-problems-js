//Given an integer array nums, return true if any value appears at least twice in the array,
//and return false if every element is distinct.

// const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const nums = [1, 2, 3, 4];

const containsDuplicate = (nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) return true;

    map[nums[i]] = i;
  }

  return false;
};

console.log(containsDuplicate(nums));
