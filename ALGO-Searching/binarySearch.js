const randomList = (size) => {
  let map = {};
  let arr = new Array(size);
  for (let i = 0; i < arr.length; i++) {
    while (true) {
      rand = Math.floor(Math.random() * 1000);
      if (!map[rand]){
          map[rand] = 1;
          arr[i] = rand;
          break;
      } 
      map[rand]++;
    }
  }
  return arr.sort((a, b) => a - b);
};

const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  let iterations = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    console.log(mid);
    iterations++;
    if (guess === item) return [mid, iterations];
    if (guess < item) low = mid + 1;
    else {
        high = mid - 1;
    }
  }

  return null;
};

const list = randomList(16);
console.log(list)
console.log(binarySearch(list, list[Math.floor(Math.random() * list.length)]));
