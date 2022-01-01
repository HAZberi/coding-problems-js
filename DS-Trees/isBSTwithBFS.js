const { BinaryTree } = require("./BST");

//Insert test values in a Binary Tree

BinaryTree.insert(9);
BinaryTree.insert(4);
BinaryTree.insert(6);
console.log(BinaryTree.insert(9));
BinaryTree.insert(20);
BinaryTree.insert(15);
BinaryTree.insert(170);

// console.log(BinaryTree.lookup(20));

//          9
//   4              20
//1     6       15      170

//Ineffective approch - But according to the course recommendation. 
//Attempt based on Breadth First Search. Doesn't seem to solve the problem.
const validateBST = (node) => {
  //output will true or false
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.left) {
      queue.push(currentNode.left);
      if (currentNode.left.value > currentNode.value) return false;
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
      if (currentNode.right.value < currentNode.value) return false;
    }
  }
  return true;
};

console.log(validateBST(BinaryTree.root));
