const array = [99, 44, 23, 45, 646, 67, 98, 34];

const selectionSort = (array) => {
  const length = array.length;
  let lowestVal = array[0];
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (lowestVal > array[j]) {
        lowestVal = array[j];
      }
    }
    const temp = array[i];
    array[array.indexOf(lowestVal)] = temp;
    array[i] = lowestVal;
    lowestVal = array[i + 1];
}
  return array;
};

console.log(selectionSort(array));
