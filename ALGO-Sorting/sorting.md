## Sorting Data

- Sorting is one of the most important topics in computer science, since it has a direct effect on performance and efficiency.
- Larger programs and data intensive applications need better and better sorting algorithms.
- Big companies like FAANG put huge emphasis on efficient sorting mechanisms.
- Better sorting techniques are a must for scalablity.
- Sorting is a very important topic for coding interviews.
- Language native `sort()` methods depends on the implementation and might not provide an optimal solution.

### Bubble Sort

- For each pass select the current element.
- Start the inner loop with next element.(_Note: One of many techniques_) 
- Do a basic swap when current element is greater than the next element.(_Note: One of many techniques_)
- Number of Passes = (Length of Array) - 1.
- BigO = O(n^2) ===> Not efficent for average case.
- [Animated Algo](https://www.youtube.com/watch?v=18OO361--1E&ab_channel=Codearchery)

### Selection Sort

- For each pass select the lowest value.
- Set the lowest value with the current element.
- Start the inner loop with next element.
- Update the lowest value if new lowest found in the inner loop.
- Set the lowest value with next element.
- Number of Passes = (Length of Array) - 1.
- BigO = O(n^2) ===> Not efficient for average case.
- [Animated Algo](https://www.youtube.com/watch?v=R_f3PJtRqUQ&ab_channel=Codearchery)