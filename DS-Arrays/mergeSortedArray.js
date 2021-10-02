console.log("MergeSorted");

const mergeSorted = (arr1, arr2) => {
  //Check Input
  if (!arr1) return arr2;
  if (!arr2) return arr1;

  const finalArray = [];

  //To keep track which values are added.
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[j] && arr2[k]) {
      if (arr1[j] < arr2[k]) {
        finalArray.push(arr1[j]);
        //once added increment or point to the next value in array.
        j++;
      } else {
        finalArray.push(arr2[k]);
        k++;
      }
    } else if (arr1[j]) {
      finalArray.push(arr1[j]);
      j++;
    } else {
      finalArray.push(arr2[k]);
      k++;
    }
  }
  return finalArray;
};

console.log(mergeSorted([4, 6, 7, 10], [1, 3, 8, 10, 19, 21]));
