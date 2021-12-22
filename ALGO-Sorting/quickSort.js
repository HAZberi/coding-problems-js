const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 4];

//Item from left and Item from right are mere start and end indices only.
const quickSort = (array, itemFromLeft, itemFromRight) => {
    //Declare the key variables
    // const length = array.length;
    let pivot;
    //An index value where end or start our partition
    let partitionIndex;

    if(itemFromLeft < itemFromRight){
        pivot = itemFromRight;
        partitionIndex = partition(array, pivot, itemFromLeft, itemFromRight);

        //sort the left and right parted arrays
        quickSort(array, itemFromLeft, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, itemFromRight);
    }

    return array;
}

//Comparision happens 
const partition = (array, pivot, itemFromLeft, itemFromRight) => {
    let pivotValue = array[pivot];
    let partitionIndex = itemFromLeft;
    //Start from left item and increment till right item crosses left item
    for(let i = itemFromLeft; i < itemFromRight; i++){
        if(array[i] < pivotValue){
            const temp = array[i];
            array[i] = array[partitionIndex];
            array[partitionIndex] = temp;
            partitionIndex++;
        }
    }
    const temp = array[itemFromRight];
    array[itemFromRight] = array[partitionIndex];
    array[partitionIndex] = temp;

    return partitionIndex;
}

console.log(quickSort(numbers, 0, numbers.length - 1));