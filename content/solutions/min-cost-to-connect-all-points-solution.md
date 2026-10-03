---
title: "Min Cost to Connect All Points - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/min-cost-to-connect-all-points/"
weight: 66
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the minimum total cost to connect all points such that there is a path between any pair of points. The cost between any two points is their Manhattan distance. This corresponds directly to finding the **Minimum Spanning Tree (MST)** of a complete weighted graph where each node is a point and each edge weight is the Manhattan distance between the corresponding points.

We can apply **Prim's Algorithm**:
1. Maintain an array `minCost` of size $n$, where `minCost[i]` records the minimum distance to connect node $i$ to the currently formed tree.
2. Maintain a boolean array `visited` tracking which nodes have already been added to the tree.
3. Start at an arbitrary node (e.g., node 0) with `minCost[0] = 0` and all other costs set to infinity.
4. In each iteration ($n$ times):
   - Pick the unvisited node $u$ with the smallest `minCost[u]`.
   - Mark $u$ as visited and add `minCost[u]` to `totalCost`.
   - For every other unvisited node $v$, calculate the Manhattan distance between $u$ and $v$. If this distance is smaller than the current `minCost[v]`, update `minCost[v]`.
5. After adding all $n$ nodes, `totalCost` represents the weight of the Minimum Spanning Tree.

### Step-by-Step Algorithm:
1. Let $n$ be the number of points. If $n \le 1$, return `0`.
2. Initialize `visited` boolean array of length $n$ to `false`.
3. Initialize `minCost` integer array of length $n$ with `Integer.MAX_VALUE`, and set `minCost[0] = 0`.
4. Initialize `totalCost = 0`.
5. Repeat $n$ times:
   - Find the unvisited node `u` that minimizes `minCost[u]`.
   - Mark `visited[u] = true`.
   - Add `minCost[u]` to `totalCost`.
   - For each unvisited node `v` from `0` to $n - 1$:
     - Compute `dist = |points[u][0] - points[v][0]| + |points[u][1] - points[v][1]|`.
     - If `dist < minCost[v]`, update `minCost[v] = dist`.
6. Return `totalCost`.

## Code

```java
public static int solve(int[][] points) {
    int n = points.length;
    if (n <= 1) {
        return 0;
    }

    boolean[] visited = new boolean[n];
    int[] minCost = new int[n];
    Arrays.fill(minCost, Integer.MAX_VALUE);
    minCost[0] = 0;
    int totalCost = 0;

    for (int step = 0; step < n; step = step + 1) {
        int u = -1;
        for (int i = 0; i < n; i = i + 1) {
            if (!visited[i] && (u == -1 || minCost[i] < minCost[u])) {
                u = i;
            }
        }

        visited[u] = true;
        totalCost = totalCost + minCost[u];

        for (int v = 0; v < n; v = v + 1) {
            if (!visited[v]) {
                int dist = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                if (dist < minCost[v]) {
                    minCost[v] = dist;
                }
            }
        }
    }

    return totalCost;
}
```
