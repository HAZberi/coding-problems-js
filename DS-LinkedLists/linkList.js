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
  append(value){
      const newNode = {
          value: value,
          next: null,
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
  }
  prepend(value){
      const newNode = {
          value: value,
          next: this.head,
      }
      this.head = newNode;
      this.length++
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(19);
console.log(myLinkedList);
