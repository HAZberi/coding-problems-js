const array = [99, 44, 23, 45, 646, 67, 98, 34, 45, 45, 45];

const mergeSort = (array) => {
    //Base Case
    if(array.length === 1) return array;

    //Split the array into two halves
    const left = [];
    const right = [];

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const sortedArray = [];
    //combine left and right array to the sorted array
    return sortedArray;
};