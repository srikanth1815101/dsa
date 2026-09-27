---
title: "Spread Infection - Solution"
problemUrl: "/problems/spread-infection/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The disease transmission spreads level-by-level across unweighted hops where each hop takes exactly 1 unit of time. This can be solved directly using Breadth-First Search (BFS).

1. Construct an adjacency list representation from `edges`.
2. Maintain an integer array `visited` where `visited[i]` stores the time unit at which vertex `i` caught the infection (initialized to `0`, meaning uninfected).
3. Initialize a queue of `(vertex, time)` pairs, and enqueue `(src, 1)`.
4. While the queue is not empty:
   - Dequeue `rem`.
   - If `visited[rem.v] > 0`: vertex was already reached at an earlier or equal time; skip.
   - If `rem.time > t`: infection time exceeds the allowed threshold `t`; break/skip further exploration from this branch.
   - Record `visited[rem.v] = rem.time` and increment the infected count.
   - For every neighbor `nbr` of `rem.v`, if `visited[nbr] == 0`, enqueue `(nbr, rem.time + 1)`.
5. Return the accumulated count of infected individuals.

The time complexity is $O(V + E)$ since each vertex is processed at most once and each edge is examined at most twice. The space complexity is $O(V + E)$ for the adjacency list and queue.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `vtces`.
2. Populate the undirected graph connections from `edges`.
3. Create an integer array `visited` of size `vtces` and an integer `count = 0`.
4. Create a queue `queue` storing `(vertex, time)` pairs.
5. Enqueue `new Pair(src, 1)`.
6. While `!queue.isEmpty()`:
   - Poll `rem`.
   - If `visited[rem.v] > 0`, continue.
   - Set `visited[rem.v] = rem.time`.
   - If `rem.time > t`, break.
   - Increment `count = count + 1`.
   - For each neighbor `nbr` in `adj.get(rem.v)`:
     - If `visited[nbr] == 0`, enqueue `new Pair(nbr, rem.time + 1)`.
7. Return `count`.

## Code

```java
public static int solve(int vtces, int[][] edges, int src, int t) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < vtces; i = i + 1) {
        adj.add(new ArrayList<>());
    }

    if (edges != null) {
        for (int i = 0; i < edges.length; i = i + 1) {
            int u = edges[i][0];
            int v = edges[i][1];
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
    }

    int[] visited = new int[vtces];
    Queue<Pair> queue = new ArrayDeque<>();
    queue.add(new Pair(src, 1));
    int count = 0;

    while (!queue.isEmpty()) {
        Pair rem = queue.poll();

        if (visited[rem.v] > 0) {
            continue;
        }

        visited[rem.v] = rem.time;

        if (rem.time > t) {
            break;
        }

        count = count + 1;

        for (int i = 0; i < adj.get(rem.v).size(); i = i + 1) {
            int nbr = adj.get(rem.v).get(i);
            if (visited[nbr] == 0) {
                queue.add(new Pair(nbr, rem.time + 1));
            }
        }
    }

    return count;
}

static class Pair {
    int v;
    int time;

    Pair(int v, int time) {
        this.v = v;
        this.time = time;
    }
}
```
