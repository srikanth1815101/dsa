---
title: "Minimum Height Trees - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/minimum-height-trees/"
weight: 43
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

For a tree of $N$ nodes, find all centroids (roots that minimize tree height). A tree can have either 1 or 2 centroids.



Consider trimming the outer leaves of the tree layer by layer, analogous to peeling an onion:
1. Leaf nodes (nodes with degree 1) can never be centroids of an MHT unless the entire tree consists of 1 or 2 nodes.
2. In each iteration, identify all current leaves, remove them, and decrement the degrees of their adjacent neighbors.
3. This creates a new set of leaves. Repeat this trimming process until at most 2 nodes remain.
4. The remaining 1 or 2 nodes are the exact centroids that minimize the tree's height.

### Step-by-Step Algorithm:
1. If `n == 1`, return `new int[]{0}`.
2. Build an adjacency list `List<Set<Integer>> adj` and degree array `degrees` of size `n`.
3. For each edge `[u, v]`, add `v` to `adj.get(u)`, `u` to `adj.get(v)`, and increment degrees of `u` and `v`.
4. Initialize a queue `leaves` and enqueue all nodes with `degrees[i] == 1`.
5. Maintain `remainingNodes = n`.
6. While `remainingNodes > 2`:
   - Let `leafCount = leaves.size()`.
   - `remainingNodes = remainingNodes - leafCount`.
   - For `k` from `0` to `leafCount - 1`:
     - Dequeue leaf `curr`.
     - For each neighbor `nbr` of `curr`:
       - `adj.get(nbr).remove(curr)`.
       - Decrement `degrees[nbr] = degrees[nbr] - 1`.
       - If `degrees[nbr] == 1`, enqueue `nbr`.
7. Collect all elements remaining in `leaves` into an array, sort them in ascending order, and return.

## Code

```java
public static int[] solve(int n, int[][] edges) {
    if (n <= 0) {
        return new int[0];
    }
    if (n == 1) {
        return new int[]{0};
    }

    List<Set<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < n; i = i + 1) {
        adj.add(new HashSet<>());
    }

    int[] degrees = new int[n];
    for (int i = 0; i < edges.length; i = i + 1) {
        int u = edges[i][0];
        int v = edges[i][1];
        adj.get(u).add(v);
        adj.get(v).add(u);
        degrees[u] = degrees[u] + 1;
        degrees[v] = degrees[v] + 1;
    }

    Queue<Integer> leaves = new ArrayDeque<>();
    for (int i = 0; i < n; i = i + 1) {
        if (degrees[i] == 1) {
            leaves.offer(i);
        }
    }

    int remaining = n;
    while (remaining > 2) {
        int size = leaves.size();
        remaining = remaining - size;
        for (int s = 0; s < size; s = s + 1) {
            int leaf = leaves.poll();
            for (int nbr : adj.get(leaf)) {
                adj.get(nbr).remove(leaf);
                degrees[nbr] = degrees[nbr] - 1;
                if (degrees[nbr] == 1) {
                    leaves.offer(nbr);
                }
            }
        }
    }

    int[] result = new int[leaves.size()];
    int idx = 0;
    while (!leaves.isEmpty()) {
        result[idx] = leaves.poll();
        idx = idx + 1;
    }
    Arrays.sort(result);
    return result;
}
```
