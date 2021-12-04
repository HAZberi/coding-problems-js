const reverseStringIterative = (string) => {
  const stringArray = [];
  for (let i = string.length-1; i >= 0; i--) {
    stringArray.push(string[i]);
  }
  return stringArray.join("");
};

console.log(reverseStringIterative("Hassaan"));

