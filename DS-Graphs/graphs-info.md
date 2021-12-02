# GRAPHS DATA STRUCTURE

- In Graphs, there are _vertices/nodes_ which contains data, _vertices/nodes_ are connected with _edges_ to form a network.
- Graphs are basically a superset of Trees and LinkList or any DS(Data Structure) with connected nodes.
- Any kind of network is basically a form of Graphs.

## Types of Graphs

### Directed Graph

- Direction pointer is known and nodes can only be accessed in a specified direction.
- Example: One-way streets in Downtown core.

### Undirected Graph

- There is no pointer direction and nodes are connected in a bi-directional Manner.
- Example: Highway between two cities.

### Weighted Graph

- In weighted graphs _edges_ have priority weight.
- Example: Shortest path to the destination, where length of the road is priority between nodes.

### Unweighted Graph

- Unweighted graphs does not have any priority weight asscociated with _edges_.

### Cyclic Graph

- A cyclic graph is one where it is possible to return back to the starting node.
- Example: Node traversal can complete a cycle.

### Acyclic Graph

- An Acyclic graph is the one where it is impossible to return back to the starting node.
- Example: Node traversal can not complete a cycle.

_Note: Graphs usually exist in a combination of types defined above._

## Graph Implementation Types

_Note: Garphs can be implemented using objects or arrays or with a combination of both._

### Basic Edge List Implementation

`const graph = [[0, 2], [2, 3], [2, 1] [1, 3]];` _unweighted implementation_

### Basic Adjacent List Implementation

`const graph = [[2], [2, 3], [0, 3, 1], [1, 2]]` _unweighted implementation_

### Basic Adjacency Matrix Implementation

`const graph = [ [0, 0, 1, 0], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0] ]` _unweighted implementation_
`const graph = { 0: [0, 0, 1, 0], 1: [0, 0, 1, 1], 2: [1, 1, 0, 1], 3: [0, 1, 1, 0] }` _unweighted implementation_
