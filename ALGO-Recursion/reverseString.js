const reverseStringIterative = (string) => {
  const stringArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    stringArray.push(string[i]);
  }
  return stringArray.join("");
};

console.log(reverseStringIterative("Yoyo Honey Singh's civic"));

const reverseStringRecursive = (string) => {

  //Base Case  
  if (string.length === 1) return string[0];

  //Recursive Case
  const char = string[string.length - 1];
  string = string.slice(0, -1);
  return  `${char}${reverseStringRecursive(string)}`;
};

console.log(reverseStringRecursive("Badshah's civic lambo"));
