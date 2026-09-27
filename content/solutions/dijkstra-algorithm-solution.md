---
title: "Dijkstra Algorithm - Solution"
problemUrl: "/problems/dijkstra-algorithm/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Dijkstra's algorithm computes the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights using a greedy priority queue approach.

1. Represent the graph using an adjacency list storing `(neighbor, weight)` pairs.
2. Initialize an array `dist` of size `vtces` with `Integer.MAX_VALUE`, setting `dist[src] = 0`.
3. Use a min-priority queue storing pairs of `(vertex, currentDistance)`, ordered by smallest distance.
4. Insert `(src, 0)` into the priority queue.
5. While the priority queue is not empty:
   - Poll the pair `rem` with the smallest distance.
   - If `rem.wsf > dist[rem.v]`, skip this entry (a strictly better path was already recorded).
   - For every outgoing edge `(nbr, wt)` from `rem.v`:
     - If `rem.wsf + wt < dist[nbr]`:
       - Relax the edge: update `dist[nbr] = rem.wsf + wt`.
       - Push `(nbr, dist[nbr])` into the priority queue.
6. Replace any remaining `Integer.MAX_VALUE` entries in `dist` with `-1` to denote unreachable vertices.

The time complexity is $O((V + E) \log V)$ using a binary heap, and the space complexity is $O(V + E)$ for the adjacency list and priority queue.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `vtces`.
2. Populate the undirected edges with weights.
3. Allocate array `dist` of size `vtces` filled with `Integer.MAX_VALUE`. Set `dist[src] = 0`.
4. Create a min-priority queue `pq` comparing by distance `wsf`.
5. Enqueue `new Pair(src, 0)`.
6. While `!pq.isEmpty()`:
   - Poll `rem`.
   - If `rem.wsf > dist[rem.v]`, continue.
   - For each edge `edge` in `adj.get(rem.v)`:
     - Let `nbr = edge[0]` and `wt = edge[1]`.
     - If `rem.wsf + wt < dist[nbr]`:
       - Set `dist[nbr] = rem.wsf + wt`.
       - Add `new Pair(nbr, dist[nbr])` to `pq`.
7. For each index `i` from `0` to `vtces - 1`:
   - If `dist[i] == Integer.MAX_VALUE`, set `dist[i] = -1`.
8. Return `dist`.

## Code

```java
public static int[] solve(int vtces, int[][] edges, int src) {
    List<List<int[]>> adj = new ArrayList<>();
    for (int i = 0; i < vtces; i = i + 1) {
        adj.add(new ArrayList<>());
    }

    if (edges != null) {
        for (int i = 0; i < edges.length; i = i + 1) {
            int u = edges[i][0];
            int v = edges[i][1];
            int wt = edges[i][2];
            adj.get(u).add(new int[]{v, wt});
            adj.get(v).add(new int[]{u, wt});
        }
    }

    int[] dist = new int[vtces];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;

    PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.wsf, b.wsf));
    pq.add(new Pair(src, 0));

    while (!pq.isEmpty()) {
        Pair rem = pq.poll();

        if (rem.wsf > dist[rem.v]) {
            continue;
        }

        for (int i = 0; i < adj.get(rem.v).size(); i = i + 1) {
            int[] edge = adj.get(rem.v).get(i);
            int nbr = edge[0];
            int wt = edge[1];

            if (rem.wsf + wt < dist[nbr]) {
                dist[nbr] = rem.wsf + wt;
                pq.add(new Pair(nbr, dist[nbr]));
            }
        }
    }

    for (int i = 0; i < vtces; i = i + 1) {
        if (dist[i] == Integer.MAX_VALUE) {
            dist[i] = -1;
        }
    }

    return dist;
}

static class Pair {
    int v;
    int wsf;

    Pair(int v, int wsf) {
        this.v = v;
        this.wsf = wsf;
    }
}
```
