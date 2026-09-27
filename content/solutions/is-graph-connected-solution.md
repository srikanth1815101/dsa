---
title: "Is Graph Connected - Solution"
problemUrl: "/problems/is-graph-connected/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

An undirected graph is connected if and only if there is a path between every pair of vertices. This means the graph must consist of exactly one connected component containing all $V$ vertices.

1. If `vtces <= 1`, the graph is trivially connected, so return `true`.
2. Construct an adjacency list for the undirected graph from `edges`.
3. Launch a single **Depth-First Search (DFS)** starting from vertex `0`.
4. Maintain a `visited` boolean array. Each time DFS visits a vertex, increment a counter.
5. After the DFS concludes, check if the visited count equals `vtces`. If all vertices were reached, return `true`; otherwise return `false`.

The time complexity is $O(V + E)$ since each vertex and edge is examined at most once during traversal. The space complexity is $O(V + E)$ for the adjacency list and recursion stack.

### Step-by-Step Algorithm:
1. If `vtces <= 1`, return `true`.
2. Initialize an adjacency list `adj` of size `vtces`.
3. If `edges` is not null, populate the undirected connections.
4. Allocate a boolean array `visited` of size `vtces`.
5. Run `dfs(adj, 0, visited)`.
6. Loop `i` from `0` to `vtces - 1`:
   - If `!visited[i]`, return `false`.
7. Return `true`.

## Code

```java
public static boolean solve(int vtces, int[][] edges) {
    if (vtces <= 1) {
        return true;
    }

    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < vtces; i = i + 1) {
        adj.add(new ArrayList<>());
    }

    if (edges != null) {
        for (int i = 0; i < edges.length; i = i + 1) {
            int u = edges[i][0];
            int v = edges[i][1];
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
    }

    boolean[] visited = new boolean[vtces];
    dfs(adj, 0, visited);

    for (int i = 0; i < vtces; i = i + 1) {
        if (!visited[i]) {
            return false;
        }
    }

    return true;
}

private static void dfs(List<List<Integer>> adj, int curr, boolean[] visited) {
    visited[curr] = true;

    for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
        int nbr = adj.get(curr).get(i);
        if (!visited[nbr]) {
            dfs(adj, nbr, visited);
        }
    }
}
```
