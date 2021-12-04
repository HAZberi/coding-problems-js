//global variable to keep track of function calls
let counter = 0;

function inception() {
  //Uncomment the following line to enable debugging in chrome console.
  //debugger;
  console.log(counter);
  //Base case
  if (counter > 3) {
    return "done";
  }

  //increment counter to keep track of the number of recursive steps.
  counter++;
  //Recursive case - Notice and investigate the differnce by toggling return keyword.
  //   inception();
  return inception();
}

console.log(inception());

//not returning the recurisive case will result in undefined. Here's how

//inception(inception(inception(inception(inception())))) - populating or filling stack
//inception(inception(inception(inception(returns done)))) - popping off or emptying stack - step 1
//inception(inception(inception(returns undefined))) - popping off or emptying stack - step 2
//inception(inception(returns undefined)) - popping off or emptying stack - step 3
//inception(returns undefined) - popping off or emptying stack - step 4
//returns undefined - popping off or emptying stack - final
 
