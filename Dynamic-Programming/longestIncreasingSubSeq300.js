//0 1 2 3
//[1,2,4,3]

const longestIncreasingSubSequence = (nums = []) => {
  let LIS = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
      }
    }
  }
  console.log(LIS);
  return Math.max(...LIS);
};

console.log(longestIncreasingSubSequence([0, 1, 0, 3, 2, 3]));
