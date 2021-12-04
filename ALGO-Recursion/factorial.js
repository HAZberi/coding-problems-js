const iterativeFactorial = (num) => {
  let answer = 1;
  //to minimize iterations, stop iteration after 2 
  for (let i = num; i >= 2; i--) {
    answer *= i;
  }
  return answer;
};

const recursiveFactorial = (num) => {
    //Base Case 1! = 1
    if(num < 2) return 1;
    //Recursive Case num! * num-1 * num-2 ....... * 1!
    //num * num-1!
    return num * recursiveFactorial(num - 1);
};

console.log(iterativeFactorial(7));
console.log(recursiveFactorial(6));
