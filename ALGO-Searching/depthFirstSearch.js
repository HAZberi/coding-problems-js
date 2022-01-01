const { BinaryTree } = require("../DS-Trees/BST");

//Insert test values in a Binary Tree

BinaryTree.insert(9);
BinaryTree.insert(4);
BinaryTree.insert(6);
BinaryTree.insert(1);
BinaryTree.insert(20);
BinaryTree.insert(15);
BinaryTree.insert(170);

// console.log(BinaryTree.lookup(20));

const inorderDepthFirstSearch = (node, list = []) => {
  if (node === null) return list;
  if (node.left) {
    inorderDepthFirstSearch(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    inorderDepthFirstSearch(node.right, list);
  }
  return list;
};

const preorderDepthFirstSearch = (node, list = []) => {
  if (node === null) return list;
  list.push(node.value);
  if (node.left) {
    preorderDepthFirstSearch(node.left, list);
  }
  if (node.right) {
    preorderDepthFirstSearch(node.right, list);
  }
  return list;
};

const postorderDepthFirstSearch = (node, list = []) => {
  if (node === null) return list;
  if (node.left) {
    postorderDepthFirstSearch(node.left, list);
  }
  if (node.right) {
    postorderDepthFirstSearch(node.right, list);
  }
  list.push(node.value);
  return list;
};

console.log(inorderDepthFirstSearch(BinaryTree.root));
console.log(preorderDepthFirstSearch(BinaryTree.root));
console.log(postorderDepthFirstSearch(BinaryTree.root));

//en    //de
//3     //1
//2     //2
//1     //3
