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
  insert(value) {}
  lookup(value) {}
  remove() {}
}

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left !== null ? traverse(node.left) : null;
  tree.right = node.right !== null ? traverse(node.right) : null;
  return tree;
};
