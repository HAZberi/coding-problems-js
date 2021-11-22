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
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return JSON.stringify(this.root);
  }
  lookup(value) {
    if (this.root === null) {
      return false;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value === currentNode.value) {
          return JSON.stringify(currentNode);
        }
      }
    }
    return false;
  }
  remove(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    let parentNode = null; //Tip: to track parent node initilize it as null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) {
          if(parentNode === null){
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value){
              parentNode.right = currentNode.right;
            }
          }
        } else {
          if(parentNode === null){
            this.root = currentNode.left;
          } else {
            
          }
        }
      } else return false;
    }
  }
}

const myBST = new BinarySearchTree();
console.log(myBST.insert(9));
console.log(myBST.insert(4));
console.log(myBST.insert(6));
console.log(myBST.insert(1));
console.log(myBST.insert(20));
console.log(myBST.insert(15));
console.log(myBST.insert(170));
console.log(
  "-----------------------------------------------------------------------------"
);
console.log(myBST.lookup(170));
console.log(myBST.lookup(4));
console.log(myBST.lookup(20));
console.log(myBST.lookup(9));
console.log(myBST.lookup(90));

const traverse = (node) => {
  //start with a simple node without pointers
  const tree = { value: node.value };
  //set the pointer to left node
  tree.left = node.left !== null ? traverse(node.left) : null;
  //set the pointer to right node
  tree.right = node.right !== null ? traverse(node.right) : null;
  //reutrn the node once left and right pointers are found/returned
  return tree;
};
