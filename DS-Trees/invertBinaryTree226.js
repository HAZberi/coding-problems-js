const { BinaryTree } = require("./BST");

const invertBinaryTree = (node) => {
  if (!node) return null;

  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  invertBinaryTree(node.left);
  invertBinaryTree(node.right);

  return node;
};

//Insert test values in a Binary Tree

BinaryTree.insert(9);
BinaryTree.insert(4);
BinaryTree.insert(6);
BinaryTree.insert(1);
BinaryTree.insert(20);
BinaryTree.insert(15);
BinaryTree.insert(170);

console.log(BinaryTree.root);
console.log(invertBinaryTree(BinaryTree.root));
