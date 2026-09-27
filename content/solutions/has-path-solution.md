---
title: "Has Path (DFS) - Solution"
problemUrl: "/problems/has-path/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if a path exists between `src` and `dest` in an undirected graph, we can use recursive **Depth-First Search (DFS)**.

1. First, build an adjacency list representing the graph. For every edge `[u, v, wt]`, add `v` to `u`'s list and `u` to `v`'s list.
2. Initialize a boolean array `visited` of size `vtces` to prevent exploring cycles and infinite recursion.
3. In the DFS function:
   - If the current vertex equals `dest`, a path exists, so return `true`.
   - Mark the current vertex as `visited[current] = true`.
   - For every neighbor `nbr` of the current vertex, if `!visited[nbr]`, recursively invoke DFS. If any recursive call returns `true`, immediately propagate `true` upward.
4. If all accessible neighbors have been traversed without reaching `dest`, return `false`.

The time complexity is $O(V + E)$ since each vertex and edge is traversed at most once. The space complexity is $O(V + E)$ for the adjacency list and recursion call stack.

### Step-by-Step Algorithm:
1. If `src == dest`, return `true`.
2. Construct an adjacency list `adj` of size `vtces`.
3. If `edges` is not null, populate both endpoints for each edge.
4. Allocate a boolean array `visited` of size `vtces`.
5. Call helper function `dfs(adj, src, dest, visited)`:
   - If `src == dest`, return `true`.
   - Set `visited[src] = true`.
   - For each neighbor `nbr` in `adj.get(src)`:
     - If `!visited[nbr]`:
       - If `dfs(adj, nbr, dest, visited)` is `true`, return `true`.
6. Return `false`.

## Code

```java
public static boolean solve(int vtces, int[][] edges, int src, int dest) {
    if (src == dest) {
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
    return dfs(adj, src, dest, visited);
}

private static boolean dfs(List<List<Integer>> adj, int curr, int dest, boolean[] visited) {
    if (curr == dest) {
        return true;
    }

    visited[curr] = true;

    for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
        int nbr = adj.get(curr).get(i);
        if (!visited[nbr]) {
            boolean hasPath = dfs(adj, nbr, dest, visited);
            if (hasPath) {
                return true;
            }
        }
    }

    return false;
}
```
