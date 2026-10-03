---
title: "Clone Graph - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/clone-graph/"
weight: 40
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given a reference node of a connected undirected graph represented by an adjacency list, create an independent, deep copy of the entire graph and return its adjacency representation.



To create an exact duplicate of a cyclic graph without falling into infinite loops:
1. Every original node must be mapped to a corresponding cloned node.
2. A hash map `clonedMap` mapping `originalNode -> clonedNode` serves two purposes:
   - It acts as a `visited` set to prevent infinite cycles.
   - It provides instant access to already-instantiated cloned copies.
3. We can traverse the graph using DFS or BFS:
   - For every node, if it has not yet been cloned, instantiate a new clone node and register it in the map.
   - For every neighbor of the current node, recursively clone the neighbor (or retrieve it from the map if already cloned) and append it to the current clone's list of neighbors.

### Step-by-Step Algorithm:
1. Check if the input adjacency list is empty. If so, return an empty 2D array `new int[0][0]`.
2. Let $N$ be the number of nodes (`adjList.length`). If $N == 1$ and `adjList[0].length == 0`, return `new int[][]{{}}`.
3. Construct the original graph objects `Node` for each index from `1` to $N$.
4. Initialize a hash map `Map<Node, Node> visited = new HashMap<>()`.
5. Implement a `dfs(Node node)` function:
   - If `node == null`, return `null`.
   - If `visited.containsKey(node)`, return `visited.get(node)`.
   - Create a clone: `Node clone = new Node(node.val)`.
   - Record `visited.put(node, clone)`.
   - For each neighbor of `node`:
     - Add `dfs(neighbor)` to `clone.neighbors`.
   - Return `clone`.
6. Start DFS from node 1.
7. Reconstruct and return the adjacency list representation of the cloned graph.

## Code

```java
static class Node {
    int val;
    List<Node> neighbors;

    Node(int val) {
        this.val = val;
        this.neighbors = new ArrayList<>();
    }
}

public static int[][] solve(int[][] adjList) {
    if (adjList == null || adjList.length == 0) {
        return new int[0][0];
    }

    int n = adjList.length;
    if (n == 1 && adjList[0].length == 0) {
        return new int[][]{{}};
    }

    Node[] nodes = new Node[n + 1];
    for (int i = 1; i <= n; i = i + 1) {
        nodes[i] = new Node(i);
    }

    for (int i = 0; i < n; i = i + 1) {
        int u = i + 1;
        for (int j = 0; j < adjList[i].length; j = j + 1) {
            int v = adjList[i][j];
            nodes[u].neighbors.add(nodes[v]);
        }
    }

    Map<Node, Node> visited = new HashMap<>();
    dfs(nodes[1], visited);

    int[][] result = new int[n][];
    for (int i = 1; i <= n; i = i + 1) {
        Node cloned = visited.get(nodes[i]);
        result[i - 1] = new int[cloned.neighbors.size()];
        for (int j = 0; j < cloned.neighbors.size(); j = j + 1) {
            result[i - 1][j] = cloned.neighbors.get(j).val;
        }
    }

    return result;
}

private static Node dfs(Node node, Map<Node, Node> visited) {
    if (node == null) {
        return null;
    }
    if (visited.containsKey(node)) {
        return visited.get(node);
    }

    Node clone = new Node(node.val);
    visited.put(node, clone);

    for (int i = 0; i < node.neighbors.size(); i = i + 1) {
        Node neighbor = node.neighbors.get(i);
        clone.neighbors.add(dfs(neighbor, visited));
    }

    return clone;
}
```
