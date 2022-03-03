// You are a professional robber planning to rob houses along a street.
//Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
//That means the first house is the neighbor of the last one.
// Meanwhile, adjacent houses have a security system connected,
// and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

const housesWithMoney = [5, 6, 5, 1, 100, 1, 200]; //test Case

const maxPossibleLoot = (houseArr) => {
  const lengthOfStreet = houseArr.length;

  if (lengthOfStreet === 0) return;

  return Math.max(
    houseArr[0],
    maxLootHelper(houseArr.slice(0, -1)),
    maxLootHelper(houseArr.slice(1))
  );
};

const maxLootHelper = (houseArr) => {
  let secondLastloot = 0;
  let lastLoot = 0;

  for (let i = 0; i < houseArr.length; i++) {
    newLoot = Math.max(houseArr[i] + secondLastloot, lastLoot);
    secondLastloot = lastLoot;
    lastLoot = newLoot;
  }
  return lastLoot;
};

console.log(maxPossibleLoot(housesWithMoney));
