---
title: "Reconstruct Itinerary - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/reconstruct-itinerary/"
weight: 46
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks us to find an Eulerian path in a directed graph where airports are nodes and tickets are directed edges. An Eulerian path traverses every directed edge exactly once.

Key considerations:
1. The path must start at `"JFK"`.
2. All edges must be visited once.
3. When multiple edges leave an airport, we greedily pick the destination with the smallest lexicographical order.
4. Greedy exploration can get trapped in a dead end if we visit a sub-loop later. Hierholzer's algorithm elegantly overcomes this by performing a post-order Depth-First Search: when a vertex has no more outgoing edges, it is pushed onto the itinerary in reverse order. After completing the traversal, reversing the collected nodes yields the full Eulerian trail.

To ensure smallest lexical order, each airport's outgoing flights are stored in a min-heap (`PriorityQueue<String>`), allowing us to always poll the lexicographically smallest neighbor first.

### Step-by-Step Algorithm:
1. Create an adjacency list `Map<String, PriorityQueue<String>> graph` mapping each departure airport to a priority queue of destinations.
2. For each ticket `[from, to]`:
   - Insert `to` into the priority queue of `from`.
3. Create a result list `route` to store the reconstructed route in reverse order.
4. Define a recursive helper function `dfs(airport)`:
   - While `airport` has destinations remaining in its priority queue:
     - Poll the smallest destination `nextAirport`.
     - Recursively call `dfs(nextAirport)`.
   - After exhausting all outgoing flights from `airport`, append `airport` to `route`.
5. Start the traversal by calling `dfs("JFK")`.
6. Reverse the list `route` and convert it into a string array.
7. Return the resulting itinerary.

## Code

```java
public static String[] solve(String[][] tickets) {
    Map<String, PriorityQueue<String>> graph = new HashMap<>();

    for (int i = 0; i < tickets.length; i = i + 1) {
        String from = tickets[i][0];
        String to = tickets[i][1];

        if (!graph.containsKey(from)) {
            graph.put(from, new PriorityQueue<>());
        }
        graph.get(from).offer(to);
    }

    List<String> route = new ArrayList<>();
    dfs("JFK", graph, route);

    Collections.reverse(route);
    return route.toArray(new String[0]);
}

private static void dfs(String airport, Map<String, PriorityQueue<String>> graph, List<String> route) {
    PriorityQueue<String> neighbors = graph.get(airport);
    while (neighbors != null && !neighbors.isEmpty()) {
        String next = neighbors.poll();
        dfs(next, graph, route);
    }
    route.add(airport);
}
```
