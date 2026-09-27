---
title: "Is Cyclic - Solution"
problemUrl: "/problems/is-cyclic/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In an undirected graph, a cycle occurs if there is a back-edge leading to an already visited vertex (other than the immediate parent).

Using **Breadth-First Search (BFS)**:
1. Construct an adjacency list representation from `edges`.
2. Maintain a global `visited` boolean array initialized to `false`.
3. Loop through every vertex `i` from `0` to `vtces - 1`. If `!visited[i]`, start a BFS traversal from `i`.
4. In BFS:
   - When a vertex `curr` is dequeued:
     - If `visited[curr]` is already true, it means `curr` was reached via another independent path from the same component, proving the existence of a cycle. Return `true`.
     - Otherwise, set `visited[curr] = true`.
     - For every neighbor `nbr` of `curr`, if `!visited[nbr]`, add `nbr` to the queue.
5. If all components are processed without discovering a cycle, return `false`.

The time complexity is $O(V + E)$ and space complexity is $O(V + E)$ for the adjacency list and queue.

### Step-by-Step Algorithm:
1. Initialize an adjacency list `adj` of size `vtces`.
2. Populate the undirected edges.
3. Allocate a boolean array `visited` of size `vtces`.
4. Loop `i` from `0` to `vtces - 1`:
   - If `!visited[i]`:
     - If `isComponentCyclic(adj, i, visited)`, return `true`.
5. Return `false`.

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

    boolean[] visited = new boolean[vtces];

    for (int i = 0; i < vtces; i = i + 1) {
        if (!visited[i]) {
            boolean cycle = isCyclicBFS(adj, i, visited);
            if (cycle) {
                return true;
            }
        }
    }

    return false;
}

private static boolean isCyclicBFS(List<List<Integer>> adj, int src, boolean[] visited) {
    Queue<Integer> queue = new ArrayDeque<>();
    queue.add(src);

    while (!queue.isEmpty()) {
        int curr = queue.poll();

        if (visited[curr]) {
            return true;
        }

        visited[curr] = true;

        for (int i = 0; i < adj.get(curr).size(); i = i + 1) {
            int nbr = adj.get(curr).get(i);
            if (!visited[nbr]) {
                queue.add(nbr);
            }
        }
    }

    return false;
}
```
