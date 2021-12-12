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
  let sortedArray = [];
  const sortedArrayLength = left.length + right.length;
  //combine left and right array to the sorted array
  let leftPointer = 0;
  let rightPointer = 0;
  for (let i = 0; i < sortedArrayLength; i++) {
    if (leftPointer !== left.length && rightPointer !== right.length) {
      if (left[leftPointer] <= right[rightPointer]) {
        sortedArray.push(left[leftPointer]);
        leftPointer++;
      } else {
        sortedArray.push(right[rightPointer]);
        rightPointer++;
      }
    } else {
      break;
    }
  }

  if (leftPointer === left.length) {
    sortedArray = [...sortedArray, ...right.slice(rightPointer)];
  }
  if (rightPointer === right.length) {
    sortedArray = [...sortedArray, ...left.slice(leftPointer)];
  }
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

// console.log(merge([0,3,9], [2,6]));

console.log(mergeSort(array));
