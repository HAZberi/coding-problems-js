const { BinaryTree } = require("./BST.js");

//Populating the tree
console.log(BinaryTree.insert(9));
console.log(BinaryTree.insert(4));
console.log(BinaryTree.insert(6));
console.log(BinaryTree.insert(1));
console.log(BinaryTree.insert(20));
console.log(BinaryTree.insert(15));
console.log(BinaryTree.insert(99));
console.log(BinaryTree.insert(17));
console.log(
  "-----------------------------------------------------------------------------"
);

const sumOfAllNodes = (node) => {
  //Base case
  if (node === null) return 0;

  //Recursive Case
  return sumOfAllNodes(node.left) + node.value + sumOfAllNodes(node.right);
};

console.log(sumOfAllNodes(BinaryTree.root));
