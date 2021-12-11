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
- For a nearly sorted array insertion sort is the fasted and best.
- BigO (Best Case) = O(n) | BigO (Worst Case) = O(n^2)
- [Animated Algo](https://www.youtube.com/watch?v=uMqVuEEWJv4&ab_channel=Codearchery)
