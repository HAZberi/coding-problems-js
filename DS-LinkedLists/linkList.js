///Tats how a linklist should look like
const linkListInJs = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

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
      const postNode = this.traverseTo(index);
      if (preNode && postNode) {
        preNode.next = newNode;
        newNode.next = postNode;
        this.length++;
      }
      return this;
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
