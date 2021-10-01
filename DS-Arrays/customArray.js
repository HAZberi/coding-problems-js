class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    if (this.data[index]) return this.data[index];
    return undefined;
  }

  push(item) {
    this.length++;
    this.data[this.length - 1] = item;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("!");
newArray.push("how");
newArray.push("you");
newArray.push("are");
console.log(newArray.get(0));
console.log(newArray);
console.log(newArray.length);
console.log(newArray);
newArray.delete(2);
newArray.delete(1);
newArray.delete(0);
console.log(newArray.length);
console.log(newArray);
newArray.push("nice")
console.log(newArray.length);
console.log(newArray);