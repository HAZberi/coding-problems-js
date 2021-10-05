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

  set(key, value){
      this.data[this._hash(key)] = [key, value]
  }

  get(key){
      return this.data[this._hash(key)][1];
  }

  print(){
      console.log(this.data);
  }
}

const myHashTable = new HashTable(10);

myHashTable.print()

myHashTable.set("grapes", 10000);
myHashTable.set("apples", 1000);
console.log(myHashTable.get("apples"));

myHashTable.print()
