const createThreeLevelBinaryTree = require("./utils/threeLevelBinaryTree");

const isBST = (root) => {
  //works only for lesser and greater values.
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



//Best and the most efficient method of Validating a BST ====> LEETCODE 98 certified. 
const isBSTSol = (node, min = null, max = null) => {
  if (node === null) return true;
  if (min !== null && node.value <= min) return false; //Hint: Checks right subtree

  if (max !== null && node.value >= max) return false; //Hint: Checks left subtree

  if (
    !isBSTSol(node.left, min, node.value) ||
    !isBSTSol(node.right, node.value, max)
  )
    return false;

  return true;
};

const tree = createThreeLevelBinaryTree([9, 2, 20, 2, 8, 9, 30]);

console.log(isBST(tree));

console.log(isBSTSol(tree));
