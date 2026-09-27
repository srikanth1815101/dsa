---
title: "Kruskal Algorithm - Solution"
problemUrl: "/problems/kruskal-algorithm/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

**Kruskal's algorithm** is a greedy algorithm to find a Minimum Spanning Tree (MST) of a connected, undirected, weighted graph:
1. Sort all edges in non-decreasing order of their weights.
2. Maintain a Disjoint Set Union (DSU) data structure initialized with each vertex in its own component.
3. Iterate through each sorted edge `(u, v, wt)`:
   - Find the root representatives of `u` and `v`.
   - If `find(u) != find(v)`, adding this edge does not form a cycle.
   - Union the two components, add `wt` to the running total MST cost, and increment the count of selected edges.
4. Stop once `V - 1` edges have been selected or all edges have been evaluated.

### Step-by-Step Algorithm:
1. Sort `edges` based on the weight `edge[2]` ascending.
2. Initialize `parent` array where `parent[i] = i` and `rank` array where `rank[i] = 0` for all `0 <= i < vtces`.
3. Implement `find(i)` with path compression.
4. Implement `union(u, v)` with union by rank: returns `true` if merged, `false` if `u` and `v` were already connected.
5. Initialize `totalWeight = 0` and `edgesCount = 0`.
6. For each edge `[u, v, wt]` in sorted edges:
   - If `union(u, v)` succeeds:
     - `totalWeight = totalWeight + wt`.
     - `edgesCount = edgesCount + 1`.
     - If `edgesCount == vtces - 1`, break early.
7. Return `totalWeight`.

## Complexity Analysis

- **Time Complexity:** `O(E log E)` for sorting the edges. DSU operations run in almost linear time `O(E * alpha(V))`.
- **Space Complexity:** `O(V)` to store the DSU parent and rank arrays.

## Code

```java
import java.util.Arrays;

class KruskalAlgorithm {
    static class DSU {
        int[] parent;
        int[] rank;

        DSU(int n) {
            parent = new int[n];
            rank = new int[n];
            int i = 0;
            while (i < n) {
                parent[i] = i;
                rank[i] = 0;
                i = i + 1;
            }
        }

        int find(int i) {
            if (parent[i] == i) {
                return i;
            }
            parent[i] = find(parent[i]);
            return parent[i];
        }

        boolean union(int u, int v) {
            int rootU = find(u);
            int rootV = find(v);
            if (rootU == rootV) {
                return false;
            }
            if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else {
                parent[rootV] = rootU;
                rank[rootU] = rank[rootU] + 1;
            }
            return true;
        }
    }

    public static int solve(int vtces, int[][] edges) {
        Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));

        DSU dsu = new DSU(vtces);
        int totalWeight = 0;
        int edgesCount = 0;

        int i = 0;
        while (i < edges.length) {
            int u = edges[i][0];
            int v = edges[i][1];
            int wt = edges[i][2];

            if (dsu.union(u, v)) {
                totalWeight = totalWeight + wt;
                edgesCount = edgesCount + 1;
                if (edgesCount == vtces - 1) {
                    break;
                }
            }
            i = i + 1;
        }

        return totalWeight;
    }
}
```
