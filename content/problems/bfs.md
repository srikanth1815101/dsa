---
title: "BFS"
date: 2026-09-27T20:48:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "Queue"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BFS/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BFS/engineering"

hints:
  - "Maintain a queue storing pairs of (vertex, path-so-far). Initially enqueue (src, String.valueOf(src))."
  - "Use a visited array upon removal: if visited, skip; otherwise mark visited, record vertex@pathSoFar, and enqueue all unvisited neighbors in sorted order."

youtubeId: ""

solutionUrl: "/solutions/bfs-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 10], [1, 2, 10], [2, 3, 10], [0, 3, 40]], src = 0"
    output: "[\"0@0\", \"1@01\", \"3@03\", \"2@012\"]"
    explanation: "BFS explores vertex 0, followed by level-1 neighbors 1 and 3, then level-2 neighbor 2 via path 01."
  - input: "vtces = 3, edges = [[0, 1, 5], [1, 2, 5]], src = 0"
    output: "[\"0@0\", \"1@01\", \"2@012\"]"
    explanation: "Linear traversal visits 0, then 1, then 2."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= src < vtces"

realWorld:
  - title: "Shortest Unweighted Network Hop Routing"
    description: "Finding minimum packet forwarding hops across network routers using breadth-first wave expansion."
  - title: "Social Network Degree-of-Separation Search"
    description: "Discovering first, second, and third-degree connections in professional social graphs."
  - title: "Web Crawler Frontier Traversal"
    description: "Crawling interconnected web pages level-by-level starting from seed URLs using FIFO request queues."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Given a starting vertex `src`, perform **Breadth-First Search (BFS)** traversal on the component reachable from `src`.

Each visited node must be formatted as `vertex@pathSoFar` (for example, `"0@0"`, `"1@01"`). To ensure deterministic results, unvisited neighbors of any node must be explored in ascending numerical order.

Return the list of formatted strings in the exact order they are visited.
