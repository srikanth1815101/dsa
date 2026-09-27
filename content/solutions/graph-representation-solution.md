---
title: "Graph Representation - Solution"
problemUrl: "/problems/graph-representation/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Graphs can be stored in memory using an **adjacency list**, which stores an array or list of size `V`, where each entry `u` contains a list of incident edges.

For an undirected graph:
1. Each edge `[u, v, wt]` represents two directed connections: an edge from `u` to `v` with weight `wt`, and an edge from `v` to `u` with weight `wt`.
2. Storing edges as an adjacency list is space-efficient, requiring $O(V + E)$ auxiliary memory compared to $O(V^2)$ for an adjacency matrix.
3. To produce a deterministic and ordered output, we sort the neighbor lists for each vertex in ascending order of neighbor ID.

### Step-by-Step Algorithm:
1. Initialize a list `adj` of size `vtces` containing empty lists.
2. If `edges` is null, return `adj`.
3. Loop `i` from `0` to `edges.length - 1`:
   - Extract `u = edges[i][0]`, `v = edges[i][1]`, and `wt = edges[i][2]`.
   - Add `new int[]{v, wt}` to `adj.get(u)`.
   - Add `new int[]{u, wt}` to `adj.get(v)`.
4. For each vertex list in `adj`, sort its elements in ascending order based on neighbor index `a[0]`.
5. Return `adj`.

## Code

```java
public static List<List<int[]>> solve(int vtces, int[][] edges) {
    List<List<int[]>> adj = new ArrayList<>();
    for (int i = 0; i < vtces; i = i + 1) {
        adj.add(new ArrayList<>());
    }

    if (edges == null) {
        return adj;
    }

    for (int i = 0; i < edges.length; i = i + 1) {
        int u = edges[i][0];
        int v = edges[i][1];
        int wt = edges[i][2];

        adj.get(u).add(new int[]{v, wt});
        adj.get(v).add(new int[]{u, wt});
    }

    for (int i = 0; i < vtces; i = i + 1) {
        adj.get(i).sort((a, b) -> Integer.compare(a[0], b[0]));
    }

    return adj;
}
```
