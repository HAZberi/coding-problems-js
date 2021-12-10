const array = [99, 44, 23, 45, 646, 67, 98, 34, 45, 45];

const selectionSort = (array) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let lowestVal = array[i];

    for (let j = i + 1; j < length; j++) {
      if (lowestVal > array[j]) {
        lowestVal = array[j];
      }
    }

    const temp = array[i];
    array[array.indexOf(lowestVal)] = temp;
    array[i] = lowestVal;
  }

  return array;
};

console.log(selectionSort(array));
