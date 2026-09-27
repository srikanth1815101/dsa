---
title: "Dijkstra Algorithm"
date: 2026-09-27T20:52:00+05:30
difficulty: "Medium"
topics: ["Graph", "Shortest Path", "Heap"]
companies: ["Amazon", "Google", "Uber"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DijkstraAlgorithm/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DijkstraAlgorithm/engineering"

hints:
  - "Maintain a min-priority queue storing (vertex, weight-so-far) pairs prioritized by smallest accumulated weight."
  - "Initialize distance array with infinity (-1 for unreachable) and dist[src] = 0. Extract the minimum distance vertex greedily and relax adjacent unvisited edges."

youtubeId: ""

solutionUrl: "/solutions/dijkstra-algorithm-solution/"

timeComplexity: "O((V + E) * log V)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 10], [1, 2, 20], [0, 2, 40], [2, 3, 30]], src = 0"
    output: "[0, 10, 30, 60]"
    explanation: "Shortest paths from 0: to 0 is 0; to 1 is 10; to 2 is 10+20=30; to 3 is 30+30=60."
  - input: "vtces = 3, edges = [[0, 1, 5]], src = 0"
    output: "[0, 5, -1]"
    explanation: "Vertex 2 is unreachable from source 0, so its distance is -1."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt] and wt >= 0"
  - "0 <= src < vtces"

realWorld:
  - title: "Rideshare Navigation Route Planning"
    description: "Computing minimum travel time routes across urban road intersection networks with non-negative traffic weights."
  - title: "OSPF Interior Gateway Routing Protocol"
    description: "Determining optimal packet forwarding paths across autonomous system routers based on link metric costs."
  - title: "Airline Flight Path Optimization"
    description: "Finding cheapest multi-city connecting flight paths with fuel and airport transit charges."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with non-negative edge weights containing `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Given a source vertex `src`, compute the shortest path distance from `src` to all vertices in the graph using **Dijkstra's Algorithm**.

Return an integer array `dist` of length `vtces` where `dist[i]` is the minimum distance from `src` to vertex `i`. If a vertex `i` is unreachable from `src`, set `dist[i] = -1`.
