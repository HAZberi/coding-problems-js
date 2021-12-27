const friends = ["Camilo", "Adam", "David", "Geralt", "Leonardo", "Harry"];

const findByIndexSimple = friends.indexOf("Geralt");

const findByIndex = friends.findIndex((item) => item === "David");

const findByValue = friends.find((item) => item === "Adam");

const ifValueExists = friends.includes("Harry");

console.log(findByIndexSimple);
console.log(findByIndex);
console.log(findByValue);
console.log(ifValueExists);
