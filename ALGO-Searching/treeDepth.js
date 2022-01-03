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

//queue 
// queue gets 1st node
//current level number of nodes = 0
//start outer loop 
// current level number of nodes = size of queue
// height + 1 
//Start loop 
// shift value from queue and set to current node
// if left node exist -> add node to the queue 
// if right node exist -> add node to the queue
// current level nodes - 1; because we popped one node off when we remove the current node from the queue.

//2nd approach 


