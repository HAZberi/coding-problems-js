const array = [99, 44, 23, 45, 646, 67, 98, 34, 45, 45];

const selectionSort = (array) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let lowestValueIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[lowestValueIndex] > array[j]) {
        lowestValueIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[lowestValueIndex];
    array[lowestValueIndex] = temp;
  }

  return array;
};

console.log(selectionSort(array));
