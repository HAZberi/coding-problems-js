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

//2nd Approach Climbing Stair Problem Bottom up approach

const climbingStairs2 = (n) => {
  if(n === 0) return 0;

  //Intialize stair with ways to climb step 0
  const stair = [0];
  //possible ways to climb one step -- sub problem
  stair[1] = 1;
  //possible ways to climb second step -- sub problem
  stair[2] = 2;
  //summing up subproblem to get the value for original problem.
  for(let i = 3; i<=n; i++){
    stair[i] = stair[i-1] + stair[i-2];
  } 
  return stair[n];
}

console.log(climbingStairs2(5));