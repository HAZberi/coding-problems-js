// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that
// adjacent houses have security systems connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

const housesWithMoney = [5, 6, 5, 1, 100, 1, 200]; //test Case

const maxPossibleLoot = (houseArr) => {
  const lengthOfStreet = houseArr.length;

  if (lengthOfStreet === 0 || lengthOfStreet === 1)
    return houseArr[0] ? houseArr[0] : houseArr;

  if (lengthOfStreet === 2) return Math.max(houseArr[0], houseArr[1]);

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
