---
title: "All Paths - Solution"
problemUrl: "/problems/all-paths/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find all simple paths between two vertices in an undirected graph, we employ **Depth-First Search (DFS) with Backtracking**.

1. Construct an adjacency list representation of the graph.
2. Maintain a `visited` boolean array to prevent cycles.
3. In the recursive helper:
   - When the current node equals `dest`, record the current accumulated path string into the output list.
   - Otherwise, mark `visited[curr] = true`.
   - Iterate through every neighbor `nbr` of `curr`. If `!visited[nbr]`, recurse by appending `nbr` to the path string.
   - **Backtracking Step**: Reset `visited[curr] = false` after exploring all neighbor branches to permit other independent paths to reuse this vertex.
4. Sort the resulting list of paths lexicographically for consistency.

The worst-case time complexity is $O(V!)$ when the graph is a complete graph, and space complexity is $O(V)$ for the recursion call stack and path tracking.

### Step-by-Step Algorithm:
1. Initialize adjacency list `adj` of size `vtces`.
2. Populate undirected edges from `edges` array into `adj`.
3. Create an empty list of strings `result` and a boolean array `visited` of size `vtces`.
4. Call helper function `findPaths(adj, src, dest, visited, "" + src, result)`:
   - If `src == dest`, add current path to `result` and return.
   - Set `visited[src] = true`.
   - For each neighbor `nbr` in `adj.get(src)`:
     - If `!visited[nbr]`:
       - Recursively call `findPaths(adj, nbr, dest, visited, path + "->" + nbr, result)`.
   - Set `visited[src] = false` (backtrack).
5. Sort `result` alphabetically and return.

## Code

```java
public static List<String> solve(int vtces, int[][] edges, int src, int dest) {
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

    List<String> result = new ArrayList<>();
    boolean[] visited = new boolean[vtces];
    findPaths(adj, src, dest, visited, "" + src, result);
    Collections.sort(result);
    return result;
}

private static void findPaths(List<List<Integer>> adj, int curr, int dest, boolean[] visited, String path, List<String> result) {
    if (curr == dest) {
        result.add(path);
        return;
    }

    visited[curr] = true;

    for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
        int nbr = adj.get(curr).get(i);
        if (!visited[nbr]) {
            findPaths(adj, nbr, dest, visited, path + "->" + nbr, result);
        }
    }

    visited[curr] = false;
}
```
