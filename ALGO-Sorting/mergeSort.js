const array = [99, 44, 23, 45, 646, 67, 98, 34, 45, 45];

const mergeSort = (array) => {
  //Base Case
  if (array.length === 1) return array;

  //Split the array into two halves

  const subArrayLength = lengthOfSubArray(array);

  const left = array.slice(0, subArrayLength);
  const right = array.slice(subArrayLength, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sortedArray = [];
  //combine left and right array to the sorted array
  return sortedArray;
};

const lengthOfSubArray = (array) => {
  let length = 0;
  if (array.length % 2 === 0) {
    length = array.length / 2;
  } else {
    length = Math.floor(array.length / 2);
  }
  return length;
};

// const subArrayLength = lengthOfSubArray(array);
// console.log(subArrayLength);

// const left = array.slice(0, subArrayLength);
// const right = array.slice(subArrayLength, array.length);

// console.log(left, right);
