const array = [99, 44, 23, 45, 646, 679, 98, 34, 45, 45, 87, 29];

const mergeSort = (array) => {
  //Base Case
  if (array.length === 1) return array;

  //Split the array into two halves

  const subArrayLength = Math.floor(array.length / 2);

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
  } else {
    sortedArray = [...sortedArray, ...left.slice(leftPointer)];
  }
  return sortedArray;
};

console.log(mergeSort(array));
