// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbingStairs = (n) => {
  let stepOne = 1,
    stepTwo = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = stepOne;
    stepOne = stepOne + stepTwo;
    stepTwo = temp;
  }

  return stepOne;
};

console.log(climbingStairs(5));
