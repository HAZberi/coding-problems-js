console.log("MergeSorted");

const mergeSorted = (arr1, arr2) => {
  const finalArray = [];
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] && arr2[i]) {

    } else if (arr1[i]) {
      console.log(arr1[i]);
    } else {
      console.log(arr2[i]);
    }
  }
  return finalArray;
};

mergeSorted([4, 6, 7, 10], [1, 3, 8, 10, 19, 21]);
