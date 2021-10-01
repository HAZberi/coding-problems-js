//Solution 0(n)
const reverseString = (str) => {
  const reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
      reversed.push(str[i])
  }
  return reversed.join("");

};

const reversedString = reverseString("Hi My name is Hassaan");

console.log(reversedString);
