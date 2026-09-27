---
title: "BFS - Solution"
problemUrl: "/problems/bfs/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Breadth-First Search (BFS) traverses a graph level by level in order of distance from the source vertex.

1. Build an adjacency list representation from `edges`, sorting each neighbor list in ascending order to guarantee a deterministic traversal.
2. Maintain a FIFO queue containing elements of type `(vertex, pathSoFar)` and a boolean array `visited` of size `vtces`.
3. Initially enqueue `(src, "" + src)`.
4. While the queue is not empty:
   - Dequeue the front element `(curr, psf)`.
   - If `visited[curr]` is already true, continue (skip processing to prevent redundant work or cycles).
   - Mark `visited[curr] = true`.
   - Append `curr + "@" + psf` to the result list.
   - For every neighbor `nbr` of `curr`, if `!visited[nbr]`, enqueue `(nbr, psf + nbr)`.
5. Return the resulting list of strings.

The time complexity is $O(V + E)$ since each vertex is removed from the queue once and each edge is inspected at most twice. The space complexity is $O(V + E)$ for the adjacency list and queue.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `vtces`.
2. Populate the undirected edges and sort each neighbor list in ascending order.
3. Create a queue `queue` storing `(vertex, psf)` pairs.
4. Add `(src, "" + src)` into `queue`.
5. Allocate a boolean array `visited` of size `vtces` and an output list `result`.
6. While `!queue.isEmpty()`:
   - Poll front pair `rem`.
   - If `visited[rem.v]`, continue.
   - Set `visited[rem.v] = true`.
   - Add `rem.v + "@" + rem.psf` to `result`.
   - For each neighbor `nbr` in `adj.get(rem.v)`:
     - If `!visited[nbr]`, enqueue `(nbr, rem.psf + nbr)`.
7. Return `result`.

## Code

```java
public static List<String> solve(int vtces, int[][] edges, int src) {
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

    for (int i = 0; i < vtces; i = i + 1) {
        Collections.sort(adj.get(i));
    }

    List<String> result = new ArrayList<>();
    boolean[] visited = new boolean[vtces];
    Queue<Pair> queue = new ArrayDeque<>();
    queue.add(new Pair(src, "" + src));

    while (!queue.isEmpty()) {
        Pair rem = queue.poll();

        if (visited[rem.v]) {
            continue;
        }

        visited[rem.v] = true;
        result.add(rem.v + "@" + rem.psf);

        for (int i = 0; i < adj.get(rem.v).size(); i = i + 1) {
            int nbr = adj.get(rem.v).get(i);
            if (!visited[nbr]) {
                queue.add(new Pair(nbr, rem.psf + nbr));
            }
        }
    }

    return result;
}

static class Pair {
    int v;
    String psf;

    Pair(int v, String psf) {
        this.v = v;
        this.psf = psf;
    }
}
```
