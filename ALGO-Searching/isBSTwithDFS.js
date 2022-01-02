class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Create A Random Tree with Node class
const createThreeLevelBinaryTree = (arr) => {
  const tree = new Node(arr[0] || null);
  tree.left = new Node(arr[1] || null);
  tree.right = new Node(arr[2] || null);
  tree.left.left = new Node(arr[3] || null);
  tree.left.right = new Node(arr[4] || null);
  tree.right.left = new Node(arr[5] || null);
  tree.right.right = new Node(arr[6] || null);
  return tree;
};

const isBST = (root) => {
  const list = inorderTraversal(root);
  return isSorted(list);
};

const inorderTraversal = (node, list = []) => {
  if (node === null) return list;

  if (node.left) {
    inorderTraversal(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    inorderTraversal(node.right, list);
  }
  return list;
};

const isSorted = (list) => {
  console.log(list);
  if (list.length < 2) return true;
  for (let i = 0; i < list.length; i++) {
    if (list[i - 1] >= list[i]) return false;
  }
  return true;
};

const tree = createThreeLevelBinaryTree([9, 4, 20, 1, 6, 20, 30]);

console.log(isBST(tree));
