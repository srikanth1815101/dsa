---
title: "Number of Operations to Make Network Connected - Solution"
problemUrl: "/problems/number-of-operations-to-make-network-connected/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To connect `n` computers into a single connected network, at least `n - 1` cables are mathematically required. If `connections.length < n - 1`, we cannot connect all computers regardless of re-routing, so we return `-1`.

If there are enough cables, we can use Disjoint Set Union (DSU) with path compression or a graph traversal (BFS/DFS) to count the number of separate connected components `c`. Every redundant cable can connect two previously disjoint components. Thus, exactly `c - 1` operations are needed.

### Step-by-Step Algorithm:
1. Check if `connections.length < n - 1`. If true, return `-1`.
2. Initialize a Disjoint Set Union (DSU) structure of size `n` with each node being its own parent.
3. Initialize `components = n`.
4. Iterate through each connection `[u, v]`: if `find(u) != find(v)`, perform `union(u, v)` and decrement `components = components - 1`.
5. Return `components - 1`.

## Code

```java
public static int solve(int n, int[][] connections) {
    if (connections.length < n - 1) {
        return -1;
    }

    int[] parent = new int[n];
    for (int i = 0; i < n; i = i + 1) {
        parent[i] = i;
    }

    int components = n;
    for (int i = 0; i < connections.length; i = i + 1) {
        int rootU = find(parent, connections[i][0]);
        int rootV = find(parent, connections[i][1]);

        if (rootU != rootV) {
            parent[rootU] = rootV;
            components = components - 1;
        }
    }

    return components - 1;
}

private static int find(int[] parent, int i) {
    if (parent[i] == i) {
        return i;
    }
    parent[i] = find(parent, parent[i]);
    return parent[i];
}
```
