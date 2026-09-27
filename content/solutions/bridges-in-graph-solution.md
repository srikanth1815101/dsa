---
title: "Bridges in Graph - Solution"
problemUrl: "/problems/bridges-in-graph/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A **bridge** is an edge in an undirected graph whose removal disconnects the graph. We find all bridges using **Tarjan's Bridge-Finding Algorithm** based on Depth-First Search (DFS):

1. Maintain two tracking arrays:
   - `disc[u]`: Discovery time of vertex `u` during DFS.
   - `low[u]`: Lowest discovery time reachable from vertex `u` via its subtree and at most one back-edge.
2. Maintain a global `time` counter initialized to `0`.
3. For every neighbor `v` of current vertex `u`:
   - If `v` is the direct parent of `u` in the DFS tree, skip it.
   - If `v` is already visited (`disc[v] != -1`), it is a back-edge: update `low[u] = Math.min(low[u], disc[v])`.
   - If `v` is unvisited:
     - Recursively call DFS on `v`.
     - After returning, update `low[u] = Math.min(low[u], low[v])`.
     - If `low[v] > disc[u]`, then the subtree rooted at `v` has no back-edge to `u` or any ancestor of `u`. Therefore, edge `(u, v)` is a **bridge**.
4. Normalize each bridge pair such that `min(u, v)` comes before `max(u, v)` and sort the bridges list.

### Step-by-Step Algorithm:
1. Construct adjacency list `graph` of size `vtces`.
2. Initialize `disc` and `low` arrays filled with `-1`.
3. Call `dfs(0, -1)` on the connected graph.
4. In DFS:
   - Set `disc[u] = time` and `low[u] = time`.
   - Increment `time = time + 1`.
   - For each neighbor `v`:
     - If `v == parent`, continue.
     - If `disc[v] != -1`, update `low[u] = Math.min(low[u], disc[v])`.
     - Else:
       - Recurse `dfs(v, u)`.
       - Update `low[u] = Math.min(low[u], low[v])`.
       - If `low[v] > disc[u]`, add `[Math.min(u, v), Math.max(u, v)]` to the bridge list.
5. Sort the bridge list lexicographically and return it.

## Complexity Analysis

- **Time Complexity:** `O(V + E)` for the DFS traversal plus `O(B log B)` to sort the `B <= E` bridges.
- **Space Complexity:** `O(V + E)` for the adjacency list and DFS recursion stack.

## Code

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class BridgesInGraph {
    private static int timer = 0;

    private static void dfs(int u, int parent, List<List<Integer>> graph, int[] disc, int[] low, List<List<Integer>> bridges) {
        disc[u] = timer;
        low[u] = timer;
        timer = timer + 1;

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
                dfs(v, u, graph, disc, low, bridges);
                if (low[v] < low[u]) {
                    low[u] = low[v];
                }
                if (low[v] > disc[u]) {
                    List<Integer> bridge = new ArrayList<>();
                    if (u < v) {
                        bridge.add(u);
                        bridge.add(v);
                    } else {
                        bridge.add(v);
                        bridge.add(u);
                    }
                    bridges.add(bridge);
                }
            }
            i = i + 1;
        }
    }

    public static List<List<Integer>> solve(int vtces, int[][] edges) {
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
        i = 0;
        while (i < vtces) {
            disc[i] = -1;
            low[i] = -1;
            i = i + 1;
        }

        List<List<Integer>> bridges = new ArrayList<>();
        i = 0;
        while (i < vtces) {
            if (disc[i] == -1) {
                dfs(i, -1, graph, disc, low, bridges);
            }
            i = i + 1;
        }

        Collections.sort(bridges, (a, b) -> {
            if (!a.get(0).equals(b.get(0))) {
                return Integer.compare(a.get(0), b.get(0));
            }
            return Integer.compare(a.get(1), b.get(1));
        });

        return bridges;
    }
}
```
