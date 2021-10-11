///Tats how a linklist should look like
// const doublyLinkListInJs = {
//     head: {
//       value: 10,
//       prev: null,
//       next: {
//         value: 5,
//         prev: {
//             value: 10,
//             prev: null,
//             next: {
//                 value: 5,
//                 prev: {
//                     value: 10,
//                     prev: null,
//                     next: {
//                         value: 5,
//                         prev: {
//                             value: 10,
//                             prev: null,
//                             nex
//                         }
//                     }
//                 }
//             }
//         }
//         next: {
//           value: 16,
//           next: null,
//         },
//       },
//     },
//   };
  
  class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      //A new node can have its own class
      const newNode = {
        value: value,
        next: null,
        prev: null,
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      //new node can be an instance of node class
      const newNode = {
        value: value,
        next: null,
        prev: null,

      };
      this.head.prev = newNode;
      newNode.next = this.head;
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
          prev: null,
        };
        const preNode = this.traverseTo(index - 1);
        const postNode = preNode.next;
        newNode.prev = preNode;
        preNode.next = newNode;
        newNode.next = postNode;
        postNode.prev = newNode;
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
        node
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
  }
  
  const myLinkedList = new DoublyLinkedList(10);
  
  console.log(myLinkedList.printList());
  console.log(myLinkedList.append(5));
  myLinkedList.append(16);
  //myLinkedList.append(100);
  console.log(myLinkedList.prepend(19));
  console.log(myLinkedList.printList());
  myLinkedList.insert(1, 60);
  myLinkedList.insert(3, 37);
  console.log(myLinkedList.printList());
//   myLinkedList.insert(6, 57);
//   myLinkedList.insert(0, 50);
//   console.log(myLinkedList.printList());
//   myLinkedList.remove(5);
//   console.log(myLinkedList.printList());
  