class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      console.log(`${node} already exists`);
      return false;
    }
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this.adjacentList;
  }
  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
      console.log(`${node1} or ${node2} doesnot exist.`);
      return false;
    }
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this.adjacentList;
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ", ";
      }
      console.log(`${node} ---> ${connections}`);
    }
  }
}

const myGraph = new Graph();
