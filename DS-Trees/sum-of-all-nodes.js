const BinarySearchTree = require("./BST.js");

//Populating the tree
console.log(BinarySearchTree.insert(9));
console.log(BinarySearchTree.insert(4));
console.log(BinarySearchTree.insert(6));
console.log(BinarySearchTree.insert(1));
console.log(BinarySearchTree.insert(20));
console.log(BinarySearchTree.insert(15));
console.log(BinarySearchTree.insert(99));
console.log(BinarySearchTree.insert(17));
console.log(
  "-----------------------------------------------------------------------------"
);

const sumOfAllNodes = (node) => {
  //Base case
  if (node === null) return 0;

  //Recursive Case
  return sumOfAllNodes(node.left) + node.value + sumOfAllNodes(node.right);
};

console.log(sumOfAllNodes(BinarySearchTree.root));
