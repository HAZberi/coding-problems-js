const createThreeLevelBinaryTree = require('./utils/threeLevelBinaryTree'); 

const isBST = (root) => { //works only for lesser and greater values.
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
  if (list.length < 2) return true;
  for (let i = 1; i < list.length; i++) {
    if (list[i - 1] >= list[i]) return false;
  }
  return true;
};

const tree = createThreeLevelBinaryTree([9, 4, 20, 2, 8, 19, 30]);

console.log(isBST(tree));
