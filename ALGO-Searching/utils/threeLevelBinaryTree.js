class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Create A Random Tree with Node class
const createThreeLevelBinaryTree = (arr) => {
  const tree = arr[0] ? new Node(arr[0]) : null;
  tree.left = arr[1] ? new Node(arr[1]) : null;
  tree.right = arr[2] ? new Node(arr[2]) : null;
  tree.left.left = arr[3] ? new Node(arr[3]) : null;
  tree.left.right = arr[4] ? new Node(arr[4]) : null;
//   tree.right?.left = arr[5] ? new Node(arr[5]) : null;
//   tree.right?.right = arr[6] ? new Node(arr[6]) : null;
  return tree;
};

module.exports = createThreeLevelBinaryTree;
