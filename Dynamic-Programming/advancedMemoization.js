//using closures to hanlde scope pollution and optimize code 

const memoizedAddTo50 = () => {
  let cache = {};

  return function (n) {
    if (n in cache) return cache[n];

    console.log("Now the hypothetical calculation will take a long time.");
    cache[n] = 50 + n;
    return cache[n];
  };
};

//use currying to efficiently handle the process of memoization and implement clean code practices.

const addTo50 = memoizedAddTo50();

console.log("1", addTo50(4));
console.log("2", addTo50(4));
console.log("1", addTo50(47));
console.log("1", addTo50(97));
console.log("1", addTo50(77));
console.log("3", addTo50(4));
console.log("2", addTo50(47));
console.log("4", addTo50(4));
