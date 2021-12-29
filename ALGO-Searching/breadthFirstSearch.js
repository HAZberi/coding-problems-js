const { BinaryTree } = require("../DS-Trees/BST.js");

const breadthFirstSearch = (node) => {
  let currentNode = node;
  let list = [];
  let queue = []; //using a queue is important here to keep track of child nodes in order.
  queue.push(currentNode);
  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
};

const breadthFirstSearchRecursive = (queue, list = []) => {
  if (queue.length < 1) return list;
  const currentNode = queue.shift();
  list.push(currentNode.value);
  if (currentNode.left) queue.push(currentNode.left);
  if (currentNode.right) queue.push(currentNode.right);
  return breadthFirstSearchRecursive(queue, list);
};

//Insert test values in a Binary Tree

BinaryTree.insert(9);
BinaryTree.insert(4);
BinaryTree.insert(6);
BinaryTree.insert(1);
BinaryTree.insert(20);
BinaryTree.insert(15);
BinaryTree.insert(170);

// console.log(BinaryTree.lookup(20));

console.log(breadthFirstSearch(BinaryTree.root));
console.log(breadthFirstSearchRecursive([BinaryTree.root])); //initialize Queue by setting the root at function call
