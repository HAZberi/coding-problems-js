const array = [99, 44, 23, 45, 646, 67, 98, 34, 45, 45];

const insertionSort = (array) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    //Pick the first elemnt in array and compare it every current element.
    if (array[i] <= array[0]) {
      //move the element to the first position in the array.
      array.unshift(array.splice(i, 1)[0]);
    } else {
      //check the left side of current index(sorted part of the array) and move the current element to the correct position
      for (let j = 1; j < i; j++) {
        //to find exact location current element should be greater than sorted previous and lesser than current sorted.
        if (array[i] <= array[j] && array[i] >= array[j - 1]) {
          //insert the current element to the current sorted index
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
};

console.log(insertionSort(array));