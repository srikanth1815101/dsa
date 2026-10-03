---
title: "Bellman Ford"
date: 2026-09-27T20:58:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Uber"]
topics: ["Graph", "Shortest Path", "Dynamic Programming"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BellmanFord/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BellmanFord/engineering"
hints:
  - "Bellman-Ford finds shortest paths from a single source even when edges have negative weights."
  - "Relax all edges vtces - 1 times. If an edge can still be relaxed on the vtces-th iteration, a negative weight cycle exists."
  - "If a negative cycle reachable from src is detected, return new int[]{-1}."
youtubeId: ""
solutionUrl: "/solutions/bellman-ford-solution/"
timeComplexity: "O(V * E)"
spaceComplexity: "O(V)"
examples:
  - input: |
      vtces = 4
      edges = [[0, 1, 4], [0, 2, 5], [1, 3, 2], [2, 1, -2], [2, 3, 4]]
      src = 0
    output: |
      [0, 3, 5, 5]
    explanation: "Shortest paths from 0: dist[0]=0, dist[1]=3 (0->2->1), dist[2]=5 (0->2), dist[3]=5 (0->2->1->3)."
  - input: |
      vtces = 3
      edges = [[0, 1, 1], [1, 2, -2], [2, 0, -1]]
      src = 0
    output: |
      [-1]
    explanation: "The cycle 0 -> 1 -> 2 -> 0 has total weight 1 + (-2) + (-1) = -2 < 0. Since a negative cycle exists, return [-1]."
constraints:
  - "1 <= vtces <= 500"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3"
  - "0 <= edges[i][0], edges[i][1] < vtces"
  - title: "Distance-Vector Routing Protocols"
    description: "Network routing protocols like Routing Information Protocol (RIP) use Bellman-Ford to compute distributed routing tables."
  - title: "Currency Arbitrage Detection"
    description: "Financial trading engines detect profitable currency arbitrage loops by transforming exchange rates into negative log weights."
  - title: "Traffic Network Congestion Routing with Toll Credits"
    description: "Calculating lowest cost freight routes where certain highway corridors offer fuel rebates or negative cost transit credits."
---
<!-- All rights reserved to CSRGO DSA -->

Given a directed weighted graph with `vtces` vertices numbered `0` to `vtces - 1`, a list of `edges` where `edges[i] = [u, v, wt]` represents a directed edge from vertex `u` to vertex `v` with weight `wt`, and a source vertex `src`.

Compute the shortest path distance from `src` to all vertices:
- If a **negative weight cycle** is reachable from `src`, return `[-1]`.
- For any unreachable vertex, its distance should be `100000000` (`10^8`).
- Otherwise, return an array of size `vtces` containing the shortest distances from `src` to each vertex.
