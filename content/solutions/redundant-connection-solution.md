---
title: "Redundant Connection - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/redundant-connection/"
weight: 89
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A tree with $n$ nodes contains exactly $n - 1$ edges and no cycles. The input graph has $n$ edges, which means there is exactly one cycle.

We can detect the edge creating this cycle using **Disjoint Set Union (DSU)**:
1. Initialize each node from `1` to `n` in its own set (`parent[i] = i`).
2. Iterate through each edge `[u, v]` in the input order:
   - Find the representative roots `rootU = find(u)` and `rootV = find(v)`.
   - If `rootU == rootV`, both vertices already belong to the same connected component. Adding the edge `[u, v]` therefore completes a cycle. Since we process edges in given order, this edge is the redundant edge that appeared last.
   - If `rootU != rootV`, union the two sets: `parent[rootU] = rootV`.
3. If no cycle is detected, return an empty array.

### Step-by-Step Algorithm:
1. Check for empty or null edges: if `edges == null || edges.length == 0`, return `new int[0]`.
2. Let $n = \text{edges.length}$.
3. Create `parent` array of size $n + 1$ and initialize `parent[i] = i` for $i = 1$ to $n$.
4. Define iterative `find(parent, i)` with path compression.
5. Loop through each `edge` in `edges`:
   - Let `u = edge[0]` and `v = edge[1]`.
   - Compute `rootU = find(parent, u)` and `rootV = find(parent, v)`.
   - If `rootU == rootV`, return `edge`.
   - Otherwise, set `parent[rootU] = rootV`.
6. Return `new int[0]`.

## Code

```java
private static int find(int[] parent, int i) {
    int root = i;
    while (root != parent[root]) {
        root = parent[root];
    }
    int curr = i;
    while (curr != root) {
        int nxt = parent[curr];
        parent[curr] = root;
        curr = nxt;
    }
    return root;
}

public static int[] solve(int[][] edges) {
    if (edges == null || edges.length == 0) {
        return new int[0];
    }

    int n = edges.length;
    int[] parent = new int[n + 1];
    for (int i = 1; i <= n; i = i + 1) {
        parent[i] = i;
    }

    for (int i = 0; i < edges.length; i = i + 1) {
        int u = edges[i][0];
        int v = edges[i][1];

        int rootU = find(parent, u);
        int rootV = find(parent, v);

        if (rootU == rootV) {
            return edges[i];
        }

        parent[rootU] = rootV;
    }

    return new int[0];
}
```
