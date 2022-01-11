const createThreeLevelBinaryTree = require("./utils/threeLevelBinaryTree");

const findMax = (a, b) => {
  return a >= b ? a : b;
};
const treeDepthWithRecursion = (node) => {
  if (!node) return 0;

  let height = 1;

  height =
    height +
    findMax(
      treeDepthWithRecursion(node.left),
      treeDepthWithRecursion(node.right)
    );

  return height;
};

const treeDepthWithIteration = (node) => {
  //Initialize BFS queue,
  //Track number of nodes in each level
  //Track each level
  let queue = [];
  let currLevelNodes = 0;
  let level = 0;

  queue.push(node);

  //First loop level, increment level if there are any in nodes current level.
  while (true) {
    currLevelNodes = queue.length;
    if (currLevelNodes === 0) return level;
    level += 1;

    //Second loop, dequeue one node and add its children to the queue.
    //Keep the loop running until all the nodes in the current level are traversed.
    //In each iteration decrement one node. HINT each iteration represents one node traversal.
    while (currLevelNodes > 0) {
      const currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      currLevelNodes -= 1;
    }
  }
};

const tree = createThreeLevelBinaryTree([9, 4, 20, null, null, 15, 170]);
// tree.left.right.left = 50;
//console.log(tree);

console.log(treeDepthWithRecursion(tree));
console.log(treeDepthWithIteration(tree));

//Psuedo Code BrainStroming for treedepth with iteration
//queue
// queue gets 1st node
//current level number of nodes = 0
//start outer loop
// current level number of nodes = size of queue
// if no nodes in current level return height
// height + 1
//Start loop
// shift value from queue and set to current node/ dequeue one node
// if left node exist -> add node to the queue
// if right node exist -> add node to the queue
// current level nodes - 1; because we popped one node off when we remove the current node from the queue.
