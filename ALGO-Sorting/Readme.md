## Sorting Data

- Sorting is one of the most important topics in computer science, since it has a direct effect on performance and efficiency.
- Larger programs and data intensive applications need better and better sorting algorithms.
- Big companies like FAANG put huge emphasis on efficient sorting mechanisms.
- Better sorting techniques are a must for scalablity.
- Sorting is a very important topic for coding interviews.
- Language native `sort()` methods depends on the implementation and might not provide an optimal solution.

### Bubble Sort

- For each pass select the current element.
- Start the inner loop with next element.
- Do a basic swap when current element is greater than the next element.(_Note: Swapping Adjacent Elements Only_)
- Number of Passes = (Length of Array) - 1.
- BigO = O(n^2) ===> Not efficent for average case.
- [Animated Algo](https://www.youtube.com/watch?v=18OO361--1E&ab_channel=Codearchery)

### Selection Sort

- For each pass select the lowest value index.
- Set the lowest value index with the current element.
- Start the inner loop with next element.
- Update the lowest value index if new lowest found in the inner loop. (_Note: Find the lowest in each Pass_)
- Swap current element in outer loop with lowest value. (_NOTE: Simple Swap Algo_)
- Number of Passes = (Length of Array) - 1.
- BigO = O(n^2) ===> Not efficient for average case.
- [Animated Algo](https://www.youtube.com/watch?v=R_f3PJtRqUQ&ab_channel=Codearchery)

### Difference Between Selection Sort and Bubble Sort

Bubble sort operates by repeatedly swapping the adjacent elements if they are in the wrong order while the selection sort sorts an array by repeatedly finding the minimum element from the unsorted part and placing that at the beginning of the array.

### Insertion Sort

- Pick the first element and compare it with the current element. If the current element is smaller than the first element, unshift current element.
- Assume left side of the current index is sorted and right is unsorted.
- Find the location on the left side of the current index where current element should be moved to keep left sorted. (_NOTE: Use inner loop to iterate left sorted part_)
- Use splice array method for deleting and insertion at index. (_NOTE: Keeping track of index is important_)
- Insertion Sort is better than Bubble and Selection sort because the best case complexity is O(n).
- For a nearly sorted array insertion sort is efficient and considered best.
- BigO (Best Case) = O(n) | BigO (Worst Case) = O(n^2)
- [Animated Algo](https://www.youtube.com/watch?v=uMqVuEEWJv4&ab_channel=Codearchery)

### Merge Sort

- Merge sort implementation algo as follows:
  - Base case: if array size is 1 then just return the array.
  - split the array into two halves i.e. left, right
  - Merge Function: takes two sub array and set left and right pointers. Compare the pointer values and add lesser value to the new array. Advance the pointers and keep adding lesser values until you reach end of any array(left or right). Copy the remaining elements of the unfinished array to the new array and return the return the array.
  - Recursive case: return the Merge Function that merges left and right arrays. Or it can be said, return the Merge Function that calls merge sort function on left sub array and right sub array as the arguments.
  ```js
  merge(mergeSort(left), mergeSort(right))
  ```
- Merge sort use divide and conquer technique. So list is divided into halves recursive until one element and then merge individual list by maintaining the order.
- Merge sort is a lot more efficient than Bubble and Selection sort but not necessary than insertion sort's best case.
- BigO = n log n, but the space complexity is O(n) instead of O(1).
- [Merge Sort Explaination](https://www.youtube.com/watch?v=1sdEchFsL0Y&ab_channel=AaronJack)

### Quick Sort*

- Quick sort can be implemented in a variety of ways but the main idea is to select the pivot and find its correct location in the sorted array. 
- Quick sort implementation algo as follows:
  - Pick a random pivot.
  - Move the pivot at the end of the array.
  - Identify the correct index for the pivot. Assume the correct index as the start of the array.
  - Starting looking the array from first element. Wherever element is less than the pivot, swap the element with elemenet at correct index. Then increment correct index.
  - Once all the comparisons are complete, swap the element at the end of the array with correct index and return the correct index.
  - Then we divide the array into left and right and repeat the process.
- BigO = (n (log n)) in best and average cases, however in worst case its (n^2) which can happen if the pivot is smallest or the largest.
- Space Complexity of Quick Sort is O(n (log n)), better than merge sort.
- [Quick Sort Visual Explanation / Alternate Approach](https://www.youtube.com/watch?v=Hoixgm4-P4M&ab_channel=MichaelSambol) 

### Heap Sort 

- In Heap sort, heap is basically is an ordered binary tree and max heap is where the parent is greater than child.
- The most direct competitor of quicksort is heapsort. Heapsort is typically somewhat slower than quicksort, but the worst-case running time is always Θ(nlogn). Quicksort is usually faster, though there remains the chance of worst case performance except in the introsort variant, which switches to heapsort when a bad case is detected. If it is known in advance that heapsort is going to be necessary, using it directly will be faster than waiting for introsort to switch to it. 
- [Heap Sort Explanation](https://www.youtube.com/watch?v=2DmK_H7IdTo&ab_channel=MichaelSambol)

### Can we beat O(n log n)?

- Sorting requires comparisions to be made, whether using nested loop or divide n counquer techniques.
- So, Its mathmatically impossible to beat O(n log n). 
- Although there are *Non-comaprison sorting* algorithims. The most popular ones are as follows:
  - Counting Sort
  - Radix Sort
  - Bucket Sort
- Counting Sort and Radix sort are only useful for fixed length intergers. If that's the case, then its possible to beat O(n log n).
- So if there are numbers in a fixed range then *Non-comaprsion sorts* might be faster. 

### How to think about sorting when solving a real life problem

- #### Sort 10 schools around your house by distance.
  Insertion Sort
    - For a small data set, insertion sort is a good option. Its easier to code and the space complexity is O(1).
- #### eBay sorts listing by current Bid amount.
  Radix or Counting Sort
    - Current bid amount is usually in a fixed range of integers like ($1 - $100). So in such cases Radix or Counting Sort provide best Time and Space Complexity.
- #### Sport scores on ESPN.
  Quick Sort
    - There are a variety of formats and different types of scoring mechanisms, so quick sort is a good option. Provides better space complexity than other algos. 
- #### Massive database (can't fit all into memory) needs to sort through past year's user data.
  Merge Sort
    - Lots of data, so data might be skewed. We dont have to worry about space in this case because sorting will take place externally(on external machine) anyways.
- #### Almost sorted Udemy review data needs to update and add 2 new reviews.
  Insertion Sort 
    - For any pre-sorted lists, Insertion sort is usually preferred with best case O(n)-Time and O(1)-Space 
- #### Temperature records for the past 50 years in Canada.
  Quick Sort OR Radix/Counting Sort 
    - If the temperatures are only integers like -32 to 40. Then Radix and Counting Sort is good.
    - if temperatures are in decimals than Quick sort would be a better option.
- #### Large user name database needs to be sorted. Data is very random.
  Merge Sort / Quick Sort
    - If space is not the issue then merge sort is a better option. 
    - If space is limited and its possible to pick a better pivot, quick sort can also be helpful. 
- #### You want to teach sorting for the first time
  Bubble Sort and Selection Sort. 
    - Easier implementation for beginners.