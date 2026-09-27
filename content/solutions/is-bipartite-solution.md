---
title: "Is Bipartite - Solution"
problemUrl: "/problems/is-bipartite/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A graph is bipartite if and only if its vertices can be colored using two colors such that no two adjacent vertices share the same color. Graph theory states that a graph is bipartite if and only if it contains no odd-length cycles.

Using Breadth-First Search (BFS) 2-coloring:
1. Construct an adjacency list representation from `edges`.
2. Maintain a `color` array of size `vtces`, initialized to `-1` (uncolored).
3. Loop through every vertex `i` from `0` to `vtces - 1`. If `color[i] == -1`, start a BFS traversal assigning `color[i] = 0`.
4. In BFS:
   - Dequeue vertex `curr`.
   - For every neighbor `nbr` of `curr`:
     - If `color[nbr] == -1` (unvisited), assign it the opposite color: `color[nbr] = 1 - color[curr]`, and enqueue `nbr`.
     - Else if `color[nbr] == color[curr]`, adjacent nodes share the same color (an odd cycle exists). Return `false`.
5. If all components are successfully colored without conflicts, return `true`.

The time complexity is $O(V + E)$ and space complexity is $O(V + E)$ for the adjacency list and queue.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `vtces`.
2. Populate the undirected edges.
3. Allocate an integer array `color` of size `vtces`, filling all entries with `-1`.
4. Loop `i` from `0` to `vtces - 1`:
   - If `color[i] == -1`:
     - If `!checkBipartiteBFS(adj, i, color)`, return `false`.
5. Return `true`.

## Code

```java
public static boolean solve(int vtces, int[][] edges) {
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

    int[] color = new int[vtces];
    Arrays.fill(color, -1);

    for (int i = 0; i < vtces; i = i + 1) {
        if (color[i] == -1) {
            boolean isBipartite = checkComponent(adj, i, color);
            if (!isBipartite) {
                return false;
            }
        }
    }

    return true;
}

private static boolean checkComponent(List<List<Integer>> adj, int src, int[] color) {
    Queue<Integer> queue = new ArrayDeque<>();
    queue.add(src);
    color[src] = 0;

    while (!queue.isEmpty()) {
        int curr = queue.poll();

        for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
            int nbr = adj.get(curr).get(i);
            if (color[nbr] == -1) {
                color[nbr] = 1 - color[curr];
                queue.add(nbr);
            } else if (color[nbr] == color[curr]) {
                return false;
            }
        }
    }

    return true;
}
```
