---
title: "Bellman Ford - Solution"
problemUrl: "/problems/bellman-ford/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The **Bellman-Ford algorithm** finds the shortest path from a single source vertex to all other vertices in a weighted directed graph. Unlike Dijkstra's algorithm, it supports edges with negative weights and detects reachable negative weight cycles.

The algorithm relies on the principle of relaxation:
1. Initialize an array `dist` of size `vtces` with infinity (`100000000`), except `dist[src] = 0`.
2. Relax all edges `vtces - 1` times. In each iteration, for every edge `(u, v, wt)`, if `dist[u] != 100000000` and `dist[u] + wt < dist[v]`, update `dist[v] = dist[u] + wt`.
3. In a graph with `V` vertices without negative cycles, any shortest simple path contains at most `V - 1` edges. Thus, after `V - 1` relaxations, all shortest path distances are finalized.
4. Perform one more relaxation pass over all edges. If any distance can still be decreased, a negative weight cycle exists reachable from `src`. In that case, return `[-1]`.

### Step-by-Step Algorithm:
1. Initialize `dist` array of size `vtces` filled with `100000000`.
2. Set `dist[src] = 0`.
3. Repeat `vtces - 1` times:
   - For each edge `[u, v, wt]`:
     - If `dist[u] != 100000000` and `dist[u] + wt < dist[v]`, update `dist[v] = dist[u] + wt`.
4. Perform an additional relaxation check on each edge:
   - If `dist[u] != 100000000` and `dist[u] + wt < dist[v]`, return `new int[]{-1}`.
5. Return the `dist` array.

## Complexity Analysis

- **Time Complexity:** `O(V * E)` where `V` is the number of vertices and `E` is the number of edges. We relax all `E` edges `V - 1` times plus one cycle check.
- **Space Complexity:** `O(V)` to store the distance array.

## Code

```java
import java.util.Arrays;

class BellmanFord {
    public static int[] solve(int vtces, int[][] edges, int src) {
        int[] dist = new int[vtces];
        int INF = 100000000;
        int i = 0;
        while (i < vtces) {
            dist[i] = INF;
            i = i + 1;
        }
        dist[src] = 0;

        i = 1;
        while (i < vtces) {
            int j = 0;
            while (j < edges.length) {
                int u = edges[j][0];
                int v = edges[j][1];
                int wt = edges[j][2];
                if (dist[u] != INF && dist[u] + wt < dist[v]) {
                    dist[v] = dist[u] + wt;
                }
                j = j + 1;
            }
            i = i + 1;
        }

        int j = 0;
        while (j < edges.length) {
            int u = edges[j][0];
            int v = edges[j][1];
            int wt = edges[j][2];
            if (dist[u] != INF && dist[u] + wt < dist[v]) {
                return new int[]{-1};
            }
            j = j + 1;
        }

        return dist;
    }
}
```
