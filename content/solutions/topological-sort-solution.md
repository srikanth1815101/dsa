---
title: "Topological Sort - Solution"
problemUrl: "/problems/topological-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Topological sorting arranges the vertices of a Directed Acyclic Graph (DAG) into a linear sequence such that for every directed edge `u -> v`, vertex `u` appears before vertex `v`.

We can solve this problem using **Kahn's Algorithm** (BFS with in-degrees):
1. Compute the in-degree (number of incoming edges) for every vertex in the graph.
2. Initialize a queue with all vertices that have an in-degree of `0` (vertices with no dependencies).
3. While the queue is not empty:
   - Dequeue a vertex `curr` and append it to our topological ordering result array.
   - For each outgoing neighbor `nbr` of `curr`, decrement its in-degree by 1.
   - If `nbr`'s in-degree reaches `0`, enqueue it.
4. When all reachable vertices are processed, return the resulting ordering array.

### Step-by-Step Algorithm:
1. Construct an adjacency list representation of the directed graph and an `inDegree` array of size `vtces`.
2. For each directed edge `[u, v]`, add `v` to `adj.get(u)` and increment `inDegree[v] = inDegree[v] + 1`.
3. Add all vertices with `inDegree[i] == 0` into a queue.
4. Maintain an index pointer `idx = 0` for the result array `order` of size `vtces`.
5. While the queue is not empty:
   - Poll vertex `u` from queue.
   - Set `order[idx] = u` and increment `idx = idx + 1`.
   - For each neighbor `v` of `u`:
     - Decrement `inDegree[v] = inDegree[v] - 1`.
     - If `inDegree[v] == 0`, add `v` to queue.
6. Return `order`.

## Complexity Analysis

- **Time Complexity:** `O(V + E)` where `V` is the number of vertices and `E` is the number of directed edges. Every vertex and edge is visited at most once.
- **Space Complexity:** `O(V + E)` for the adjacency list, queue, and in-degree array.

## Code

```java
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

class TopologicalSort {
    public static int[] solve(int vtces, int[][] edges) {
        List<List<Integer>> graph = new ArrayList<>();
        int i = 0;
        while (i < vtces) {
            graph.add(new ArrayList<>());
            i = i + 1;
        }

        int[] inDegree = new int[vtces];
        i = 0;
        while (i < edges.length) {
            int u = edges[i][0];
            int v = edges[i][1];
            graph.get(u).add(v);
            inDegree[v] = inDegree[v] + 1;
            i = i + 1;
        }

        Queue<Integer> queue = new ArrayDeque<>();
        i = 0;
        while (i < vtces) {
            if (inDegree[i] == 0) {
                queue.add(i);
            }
            i = i + 1;
        }

        int[] result = new int[vtces];
        int idx = 0;

        while (!queue.isEmpty()) {
            int curr = queue.poll();
            result[idx] = curr;
            idx = idx + 1;

            List<Integer> neighbors = graph.get(curr);
            int j = 0;
            while (j < neighbors.size()) {
                int neighbor = neighbors.get(j);
                inDegree[neighbor] = inDegree[neighbor] - 1;
                if (inDegree[neighbor] == 0) {
                    queue.add(neighbor);
                }
                j = j + 1;
            }
        }

        return result;
    }
}
```
