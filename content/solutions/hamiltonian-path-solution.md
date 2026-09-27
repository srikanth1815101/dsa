---
title: "Hamiltonian Path - Solution"
problemUrl: "/problems/hamiltonian-path/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A Hamiltonian path visits every vertex of a graph exactly once. If the terminal vertex of the path has an edge connecting back to the initial start vertex `src`, it forms a Hamiltonian cycle.

1. Build an adjacency list representation from `edges`.
2. Maintain a `visited` boolean array and a count of currently visited vertices.
3. In the recursive backtracking function:
   - When `count == vtces`:
     - Check if there is a direct edge between the current vertex and the original `src`.
     - If an edge exists back to `src`, append `*` (Hamiltonian cycle); otherwise append `.` (Hamiltonian path).
     - Add the formatted string to the result list and return.
   - Otherwise, mark `visited[curr] = true`.
   - For every neighbor `nbr` of `curr`:
     - If `!visited[nbr]`:
       - Recursively explore `nbr` with `path + nbr` and `count + 1`.
   - **Backtrack**: Reset `visited[curr] = false`.
4. Sort the result lexicographically before returning.

The time complexity is $O(V!)$ in the worst case (e.g. for complete graphs), and space complexity is $O(V)$ for the recursion depth and visited tracking.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `vtces`.
2. Populate undirected edges from `edges`.
3. Create `List<String> result = new ArrayList<>()` and boolean array `visited = new boolean[vtces]`.
4. Call helper function `findHamiltonian(adj, src, src, visited, 1, "" + src, result)`:
   - If `count == vtces`:
     - Determine whether `adj.get(curr)` contains `originalSrc`.
     - If true, append `path + "*"` to `result`; else append `path + "."`.
     - Return.
   - Mark `visited[curr] = true`.
   - For each neighbor `nbr` of `curr`:
     - If `!visited[nbr]`:
       - Recursively call `findHamiltonian(adj, originalSrc, nbr, visited, count + 1, path + nbr, result)`.
   - Mark `visited[curr] = false` (backtrack).
5. Sort `result` alphabetically and return.

## Code

```java
public static List<String> solve(int vtces, int[][] edges, int src) {
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
    findHamiltonian(adj, src, src, visited, 1, "" + src, result);
    Collections.sort(result);
    return result;
}

private static void findHamiltonian(List<List<Integer>> adj, int originalSrc, int curr, boolean[] visited, int count, String path, List<String> result) {
    if (count == adj.size()) {
        boolean hasCycle = false;
        for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
            if (adj.get(curr).get(i) == originalSrc) {
                hasCycle = true;
                break;
            }
        }
        if (hasCycle) {
            result.add(path + "*");
        } else {
            result.add(path + ".");
        }
        return;
    }

    visited[curr] = true;

    for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
        int nbr = adj.get(curr).get(i);
        if (!visited[nbr]) {
            findHamiltonian(adj, originalSrc, nbr, visited, count + 1, path + nbr, result);
        }
    }

    visited[curr] = false;
}
```
