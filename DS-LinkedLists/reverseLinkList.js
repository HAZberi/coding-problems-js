class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //A new node can have its own class
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    //new node can be an instance of node class
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = {
        value: value,
        next: null,
      };
      const preNode = this.traverseTo(index - 1);
      const postNode = preNode.next;
      preNode.next = newNode;
      newNode.next = postNode;
      this.length++;
      return this;
    }
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      console.log(`No data found at Index: ${index} `);
    } else if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else if (index === this.length - 1) {
      const preDelNode = this.traverseTo(index - 1);
      preDelNode.next = null;
      this.length--;
    } else {
      const preDelNode = this.traverseTo(index - 1);
      const nodeToDelete = preDelNode.next;
      preDelNode.next = nodeToDelete.next;
      this.length--;
    }
  }

  traverseTo(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const arrayForLinkedList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arrayForLinkedList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arrayForLinkedList;
  }

  reverse() {
    let firstNode = this.head;
    let secondNode = firstNode.next;
    while (secondNode !== null) {
      const tempNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = tempNode;
    }
    this.head.next = null;
    this.head = firstNode;
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList.printList());
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(19);
console.log(myLinkedList.printList());
myLinkedList.insert(1, 60);
myLinkedList.insert(3, 37);
console.log(myLinkedList.printList());
myLinkedList.insert(6, 57);
myLinkedList.insert(0, 50);
console.log(myLinkedList.printList());
myLinkedList.remove(5);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
