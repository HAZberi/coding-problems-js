class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                break;
            }
            currentNode = currentNode.left;
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                break;
            }
            currentNode = currentNode.right;
        }
      }
    }
    return JSON.stringify(this.root);
  }
  lookup(value) {}
  remove() {}
}

const myBST = new BinarySearchTree();
console.log(myBST.insert(9));
console.log(myBST.insert(4));
console.log(myBST.insert(6));
console.log(myBST.insert(1));
console.log(myBST.insert(20));
console.log(myBST.insert(15));
console.log(myBST.insert(170));


const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left !== null ? traverse(node.left) : null;
  tree.right = node.right !== null ? traverse(node.right) : null;
  return tree;
};
