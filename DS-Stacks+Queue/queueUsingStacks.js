//last or back stack    //first or front stack
//3                     //1
//2                     //2
//1                     //3

class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }
  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.first.length === 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Hassaan"));
console.log(myQueue.enqueue("Aamir"));
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.enqueue("Osman"));
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.enqueue("Butt"));
console.log(myQueue.peek());
