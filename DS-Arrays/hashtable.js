class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    if (!this.data[address]) {
      return;
    }
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        return this.data[address][i][1];
      }
    }
  }

  print() {
    console.log(this.data);
  }
}

const myHashTable = new HashTable(40);

myHashTable.print();

myHashTable.set("grapes", 10000);
myHashTable.set("pineapple", 40000);
myHashTable.set("apples", 1000);
console.log(myHashTable.get("pineapple"));
console.log(myHashTable.get("grapes"));

myHashTable.print();
