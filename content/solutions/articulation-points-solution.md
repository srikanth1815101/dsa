---
title: "Articulation Points - Solution"
problemUrl: "/problems/articulation-points/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

An **articulation point** (or cut vertex) is any vertex whose deletion increases the number of connected components of the graph.

We find all articulation points in linear time using **Tarjan's DFS Algorithm**:
1. Track two timestamps for each vertex `u`:
   - `disc[u]`: Discovery time of `u` in the DFS tree.
   - `low[u]`: Lowest discovery time reachable from `u` using at most one back-edge.
2. In DFS tree rooted at vertex `u`:
   - Case 1: If `u` is the **root** of the DFS tree, `u` is an articulation point if and only if it has **two or more independent children** in the DFS tree.
   - Case 2: If `u` is **not the root**, `u` is an articulation point if it has at least one child `v` such that `low[v] >= disc[u]`. This implies that `v` (and its whole subtree) has no back-edge to any strict ancestor of `u`, so removing `u` would trap `v`'s subtree.
3. Collect all cut vertices in a `boolean[] isAP` array to avoid duplicate reporting, then collect the indices into a sorted list.

### Step-by-Step Algorithm:
1. Construct adjacency list `graph` of size `vtces`.
2. Initialize `disc` and `low` arrays filled with `-1`, and boolean array `isAP` initialized to `false`.
3. In DFS helper `dfs(u, parent)`:
   - Record `disc[u] = timer` and `low[u] = timer`.
   - Increment `timer = timer + 1`.
   - Track `children = 0`.
   - For each neighbor `v` of `u`:
     - If `v == parent`, skip.
     - If `disc[v] != -1`, update `low[u] = Math.min(low[u], disc[v])`.
     - Else:
       - Increment `children = children + 1`.
       - Recurse `dfs(v, u)`.
       - Update `low[u] = Math.min(low[u], low[v])`.
       - If `parent != -1` and `low[v] >= disc[u]`, mark `isAP[u] = true`.
   - If `parent == -1` and `children > 1`, mark `isAP[u] = true`.
4. Run DFS from all unvisited nodes.
5. Collect all `i` where `isAP[i] == true` into an array list and return.

## Complexity Analysis

- **Time Complexity:** `O(V + E)` where `V` is the number of vertices and `E` is the number of edges.
- **Space Complexity:** `O(V + E)` for the adjacency list and recursion stack.

## Code

```java
import java.util.ArrayList;
import java.util.List;

class ArticulationPoints {
    private static int timer = 0;

    private static void dfs(int u, int parent, List<List<Integer>> graph, int[] disc, int[] low, boolean[] isAP) {
        disc[u] = timer;
        low[u] = timer;
        timer = timer + 1;
        int children = 0;

        List<Integer> neighbors = graph.get(u);
        int i = 0;
        while (i < neighbors.size()) {
            int v = neighbors.get(i);
            if (v == parent) {
                i = i + 1;
                continue;
            }

            if (disc[v] != -1) {
                if (disc[v] < low[u]) {
                    low[u] = disc[v];
                }
            } else {
                children = children + 1;
                dfs(v, u, graph, disc, low, isAP);
                if (low[v] < low[u]) {
                    low[u] = low[v];
                }
                if (parent != -1 && low[v] >= disc[u]) {
                    isAP[u] = true;
                }
            }
            i = i + 1;
        }

        if (parent == -1 && children > 1) {
            isAP[u] = true;
        }
    }

    public static List<Integer> solve(int vtces, int[][] edges) {
        timer = 0;
        List<List<Integer>> graph = new ArrayList<>();
        int i = 0;
        while (i < vtces) {
            graph.add(new ArrayList<>());
            i = i + 1;
        }

        i = 0;
        while (i < edges.length) {
            int u = edges[i][0];
            int v = edges[i][1];
            graph.get(u).add(v);
            graph.get(v).add(u);
            i = i + 1;
        }

        int[] disc = new int[vtces];
        int[] low = new int[vtces];
        boolean[] isAP = new boolean[vtces];
        i = 0;
        while (i < vtces) {
            disc[i] = -1;
            low[i] = -1;
            i = i + 1;
        }

        i = 0;
        while (i < vtces) {
            if (disc[i] == -1) {
                dfs(i, -1, graph, disc, low, isAP);
            }
            i = i + 1;
        }

        List<Integer> result = new ArrayList<>();
        i = 0;
        while (i < vtces) {
            if (isAP[i]) {
                result.add(i);
            }
            i = i + 1;
        }

        return result;
    }
}
```
