## LinkList Pointers

- A node in a LinkList represents a value and a pointer to the next node.
  ```js
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  ```
- The first node in the linklist is called head.
- The last node in the linklist is called tail and the its next pointer points to null.
- Initialize a linked list class as follows:

```js
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}
```

- For basic traversal => BigO(n)
