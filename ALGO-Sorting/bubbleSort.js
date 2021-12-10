const array = [99, 44, 23, 45, 646, 67, 98, 34, 45, 45, 45];
// const array2 = [34, 23, 44, 45, 67, 98, 99, 646];

const bubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    console.log(`Entered Outer Loop with current value: ${array[i]}`);
    for (let j = i + 1; j < length; j++) {
      console.log(
        `Entered inner Loop with current outer value: ${array[i]} and inner value ${array[j]}`
      );
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      console.log(
        `Exited inner Loop with current outer value: ${array[i]} and inner value ${array[j]}`
      );
    }
    console.log(`Exited Outer Loop with current value: ${array[i]}`);
  }
  return array;
};

console.log(bubbleSort(array));
