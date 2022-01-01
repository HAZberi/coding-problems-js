class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Create A Random Tree with Node class
const createTwoLevelBinaryTree = (arr) => {
  const tree = new Node(arr[0] || null);
  tree.left = new Node(arr[1] || null);
  tree.right = new Node(arr[2] || null);
  tree.left.left = new Node(arr[3] || null);
  tree.left.right = new Node(arr[4] || null);
  tree.right.left = new Node(arr[5] || null);
  tree.right.right = new Node(arr[6] || null);
  return tree;
};

console.log(createTwoLevelBinaryTree([9,4,20,1,6,15,20]));
