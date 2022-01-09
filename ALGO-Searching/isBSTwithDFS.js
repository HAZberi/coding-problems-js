const createThreeLevelBinaryTree = require("./utils/threeLevelBinaryTree");

const isBST = (root) => {
  //works for unique values.
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
//works for only unique values.
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

//Valid BST
//          9
//   4              20
//1     6       15      170

//Invalid BST
//          9
//   4              20
//1     6       8      170


const tree = createThreeLevelBinaryTree([9, 4, 20, 1, 6, 15, 170]);

console.log(isBST(tree));

console.log(isBSTSol(tree));

//Can you modify isBSTSol to accomodate non-unique values?
//Can you optimize isBST to use less memory?