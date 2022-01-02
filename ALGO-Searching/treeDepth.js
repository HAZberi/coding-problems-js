const createThreeLevelBinaryTree = require("./utils/threeLevelBinaryTree");

const findMax = (a, b) => {
    return (a >= b) ? a : b;
}
const treeDepthWithRecursion = (node) => {
  if (!node) return 0;

  let height = findMax(treeDepthWithRecursion(node.left), treeDepthWithRecursion(node.right)) + 1;

  return height;
};

const tree = createThreeLevelBinaryTree([9, 4, 20, 1, 6, 15, 45]);
// tree.left.right.left = 50;
console.log(tree);

console.log(treeDepthWithRecursion(tree));
