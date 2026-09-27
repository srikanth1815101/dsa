---
title: "Prim's Algorithm - Solution"
problemUrl: "/problems/prims-algorithm/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Prim's algorithm finds a Minimum Spanning Tree (MST) for a weighted undirected graph by greedily growing a tree vertex by vertex.

1. If `vtces <= 1`, a spanning tree trivially requires `0` total weight.
2. Build an adjacency list representation from `edges`.
3. Maintain a min-priority queue storing tuples `(vertex, weight)` comparing by smallest weight, and a boolean array `visited` of size `vtces`.
4. Start by inserting `(0, 0)` into the priority queue.
5. While the priority queue is not empty:
   - Poll the candidate node `rem` with the lowest incident edge weight.
   - If `visited[rem.v]` is already true, skip.
   - Mark `visited[rem.v] = true`.
   - Add `rem.wt` to `totalWeight` and increment the count of connected vertices.
   - For every neighbor `(nbr, wt)` of `rem.v`, if `!visited[nbr]`, enqueue `(nbr, wt)`.
6. After processing, if `count == vtces`, return `totalWeight`. Otherwise, the graph was disconnected, so return `-1`.

The time complexity is $O((V + E) \log V)$ using a binary heap, and the space complexity is $O(V + E)$ for the adjacency list and priority queue.

### Step-by-Step Algorithm:
1. If `vtces <= 1`, return `0`.
2. Construct adjacency list `adj` of size `vtces`.
3. If `edges` is not null, populate the undirected weighted edges.
4. Allocate array `visited` of size `vtces`.
5. Create min-priority queue `pq` comparing edge weights.
6. Insert `new Pair(0, 0)` into `pq`.
7. Initialize `totalWeight = 0` and `count = 0`.
8. While `!pq.isEmpty()`:
   - Poll `rem`.
   - If `visited[rem.v]`, continue.
   - Set `visited[rem.v] = true`.
   - Set `totalWeight = totalWeight + rem.wt`.
   - Set `count = count + 1`.
   - For each edge `e` in `adj.get(rem.v)`:
     - If `!visited[e[0]]`, enqueue `new Pair(e[0], e[1])`.
9. If `count == vtces`, return `totalWeight`; else return `-1`.

## Code

```java
public static int solve(int vtces, int[][] edges) {
    if (vtces <= 1) {
        return 0;
    }

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

    boolean[] visited = new boolean[vtces];
    PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.wt, b.wt));
    pq.add(new Pair(0, 0));

    int totalWeight = 0;
    int count = 0;

    while (!pq.isEmpty()) {
        Pair rem = pq.poll();

        if (visited[rem.v]) {
            continue;
        }

        visited[rem.v] = true;
        totalWeight = totalWeight + rem.wt;
        count = count + 1;

        for (int i = 0; i < adj.get(rem.v).size(); i = i + 1) {
            int[] edge = adj.get(rem.v).get(i);
            int nbr = edge[0];
            int wt = edge[1];

            if (!visited[nbr]) {
                pq.add(new Pair(nbr, wt));
            }
        }
    }

    if (count == vtces) {
        return totalWeight;
    }

    return -1;
}

static class Pair {
    int v;
    int wt;

    Pair(int v, int wt) {
        this.v = v;
        this.wt = wt;
    }
}
```
