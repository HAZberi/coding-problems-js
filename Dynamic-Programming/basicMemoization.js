const addTo50 = (n) => {
    return n + 50;
}

let cache = {};
const memoizedAddTo50 = (n) => {
    if(n in cache) return cache[n];

    console.log('Now the hypothetical calculation will take a long time.');
    cache[n] = 50 + n;
    return cache[n];
}

console.log(addTo50(4));
console.log('1', memoizedAddTo50(4));
console.log('2', memoizedAddTo50(4));
console.log('1', memoizedAddTo50(47));
console.log('1', memoizedAddTo50(97));
console.log('1', memoizedAddTo50(77));
console.log('3', memoizedAddTo50(4));
console.log('2', memoizedAddTo50(47));
console.log('4', memoizedAddTo50(4));