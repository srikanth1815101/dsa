---
title: "Network Delay Time - Solution"
problemUrl: "/problems/network-delay-time/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the minimum time required for a signal sent from node `k` to reach every other node in a directed network with positive weights.

This corresponds to running **Dijkstra's Algorithm** from starting node `k`:
1. The shortest time to reach any node `v` from `k` is the single-source shortest path distance `dist[v]`.
2. The total time for all nodes to receive the signal is the maximum over all shortest path distances: `max(dist[1], dist[2], ..., dist[n])`.
3. If any node `v` cannot be reached from `k`, then `dist[v] == INF`, meaning not all nodes can receive the signal, so we return `-1`.

### Step-by-Step Algorithm:
1. Construct adjacency list `graph` of size `n + 1` where each node points to `(neighbor, weight)` pairs.
2. Initialize `dist` array of size `n + 1` filled with `Integer.MAX_VALUE`, and set `dist[k] = 0`.
3. Push `(k, 0)` into a min-priority queue ordered by path distance.
4. While the priority queue is not empty:
   - Poll `(u, d)`.
   - If `d > dist[u]`, continue.
   - For each neighbor `(v, wt)` of `u`:
     - If `dist[u] + wt < dist[v]`:
       - Update `dist[v] = dist[u] + wt`.
       - Enqueue `(v, dist[v])`.
5. Iterate through all nodes `1` to `n`:
   - If any `dist[i] == Integer.MAX_VALUE`, return `-1`.
   - Track `maxDist = Math.max(maxDist, dist[i])`.
6. Return `maxDist`.

## Complexity Analysis

- **Time Complexity:** `O(E log V)` where `V = n` is the number of nodes and `E` is the number of directed links in `times`.
- **Space Complexity:** `O(V + E)` for the adjacency list, distance array, and priority queue.

## Code

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

class NetworkDelayTime {
    public static int solve(int[][] times, int n, int k) {
        List<List<int[]>> graph = new ArrayList<>();
        int i = 0;
        while (i <= n) {
            graph.add(new ArrayList<>());
            i = i + 1;
        }

        i = 0;
        while (i < times.length) {
            int u = times[i][0];
            int v = times[i][1];
            int w = times[i][2];
            graph.get(u).add(new int[]{v, w});
            i = i + 1;
        }

        int[] dist = new int[n + 1];
        int INF = Integer.MAX_VALUE;
        i = 0;
        while (i <= n) {
            dist[i] = INF;
            i = i + 1;
        }
        dist[k] = 0;

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[1], b[1]));
        pq.add(new int[]{k, 0});

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int u = curr[0];
            int d = curr[1];

            if (d > dist[u]) {
                continue;
            }

            List<int[]> neighbors = graph.get(u);
            int j = 0;
            while (j < neighbors.size()) {
                int[] edge = neighbors.get(j);
                int v = edge[0];
                int wt = edge[1];

                if (dist[u] + wt < dist[v]) {
                    dist[v] = dist[u] + wt;
                    pq.add(new int[]{v, dist[v]});
                }
                j = j + 1;
            }
        }

        int maxTime = 0;
        i = 1;
        while (i <= n) {
            if (dist[i] == INF) {
                return -1;
            }
            if (dist[i] > maxTime) {
                maxTime = dist[i];
            }
            i = i + 1;
        }

        return maxTime;
    }
}
```
