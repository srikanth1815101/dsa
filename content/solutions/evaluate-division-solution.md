---
title: "Evaluate Division - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/evaluate-division/"
weight: 45
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem can be modeled as finding a path in a directed, weighted graph.
Each variable represents a node in the graph. An equation `Ai / Bi = val` translates to two directed edges:
1. An edge from node `Ai` to node `Bi` with weight `val`.
2. An edge from node `Bi` to node `Ai` with weight `1.0 / val`.

To answer a query `Cj / Dj = ?`:
1. If either `Cj` or `Dj` has never been seen in any equation, the answer cannot be determined, so return `-1.0`.
2. If `Cj` equals `Dj`, the answer is `1.0` (as long as `Cj` exists in the graph).
3. Otherwise, search for a path from node `Cj` to node `Dj` using Breadth-First Search (BFS) or Depth-First Search (DFS). The product of edge weights along the path gives the quotient `Cj / Dj`.
4. If no path exists between `Cj` and `Dj`, return `-1.0`.

### Step-by-Step Algorithm:
1. Build an adjacency list representation of the graph using a `Map<String, Map<String, Double>>`.
2. Iterate through each equation `[u, v]` and its corresponding value `val`:
   - Add directed edge from `u` to `v` with multiplier `val`.
   - Add directed edge from `v` to `u` with multiplier `1.0 / val`.
3. Initialize an answer array `ans` of size equal to the number of queries.
4. For each query `[start, target]`:
   - If either `start` or `target` is not present in the graph, set the answer to `-1.0`.
   - If `start` equals `target`, set the answer to `1.0`.
   - Otherwise, initiate a Breadth-First Search:
     - Use a queue storing pairs of `(currentNode, currentProduct)` and a visited set of variable names.
     - Add `(start, 1.0)` to the queue and mark `start` as visited.
     - While the queue is not empty:
       - Dequeue the front element.
       - If `currentNode` equals `target`, record `currentProduct` as the answer for this query and stop searching.
       - For each neighbor and edge weight of `currentNode`:
         - If neighbor has not been visited, mark it visited and enqueue `(neighbor, currentProduct * weight)`.
     - If the queue becomes empty without reaching `target`, set the answer to `-1.0`.
5. Return the array `ans`.

## Code

```java
static class Edge {
    String node;
    double weight;

    Edge(String node, double weight) {
        this.node = node;
        this.weight = weight;
    }
}

public static double[] solve(String[][] equations, double[] values, String[][] queries) {
    Map<String, Map<String, Double>> graph = new HashMap<>();

    for (int i = 0; i < equations.length; i = i + 1) {
        String u = equations[i][0];
        String v = equations[i][1];
        double val = values[i];

        if (!graph.containsKey(u)) {
            graph.put(u, new HashMap<>());
        }
        if (!graph.containsKey(v)) {
            graph.put(v, new HashMap<>());
        }

        graph.get(u).put(v, val);
        graph.get(v).put(u, 1.0 / val);
    }

    double[] results = new double[queries.length];

    for (int i = 0; i < queries.length; i = i + 1) {
        String start = queries[i][0];
        String end = queries[i][1];

        if (!graph.containsKey(start) || !graph.containsKey(end)) {
            results[i] = -1.0;
        } else if (start.equals(end)) {
            results[i] = 1.0;
        } else {
            results[i] = bfs(graph, start, end);
        }
    }

    return results;
}

private static double bfs(Map<String, Map<String, Double>> graph, String start, String target) {
    Queue<Edge> queue = new ArrayDeque<>();
    Set<String> visited = new HashSet<>();

    queue.add(new Edge(start, 1.0));
    visited.add(start);

    while (!queue.isEmpty()) {
        Edge current = queue.poll();

        if (current.node.equals(target)) {
            return current.weight;
        }

        Map<String, Double> neighbors = graph.get(current.node);
        if (neighbors != null) {
            for (Map.Entry<String, Double> entry : neighbors.entrySet()) {
                String nextNode = entry.getKey();
                double nextWeight = entry.getValue();

                if (!visited.contains(nextNode)) {
                    visited.add(nextNode);
                    queue.add(new Edge(nextNode, current.weight * nextWeight));
                }
            }
        }
    }

    return -1.0;
}
```
