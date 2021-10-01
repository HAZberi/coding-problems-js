//Solution 0(n)
const reverseString = (str) => {
  //Check Input
  if (!str || str.length < 2) return console.log("No String Found");

  const reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
};

const reversedString = reverseString("Hi My name is Hassaan");

console.log(reversedString);

//Solution Smarter ES6 way of reversing a String
const reverseAString = (str) =>
  !str || str.length < 2
    ? "No String Found"
    : [...str].reverse().join("");

console.log(reverseAString("Hi My name is Hassaan"));
