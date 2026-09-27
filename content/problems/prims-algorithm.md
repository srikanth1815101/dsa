---
title: "Prim's Algorithm"
date: 2026-09-27T20:53:00+05:30
difficulty: "Medium"
topics: ["Graph", "Minimum Spanning Tree", "Heap"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PrimsAlgorithm/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PrimsAlgorithm/engineering"

hints:
  - "Prim's algorithm greedily grows a minimum spanning tree from an arbitrary starting vertex by always picking the minimum weight edge that connects an unvisited vertex to the existing tree."
  - "Maintain a min-priority queue of candidate edges. If the total number of connected vertices equals vtces, return the sum of edge weights; otherwise return -1."

youtubeId: ""

solutionUrl: "/solutions/prims-algorithm-solution/"

timeComplexity: "O((V + E) * log V)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 1], [1, 2, 2], [2, 3, 3], [0, 3, 4], [0, 2, 5]]"
    output: "6"
    explanation: "The MST edges are (0, 1, wt 1), (1, 2, wt 2), and (2, 3, wt 3). Total weight = 1 + 2 + 3 = 6."
  - input: "vtces = 3, edges = [[0, 1, 5]]"
    output: "-1"
    explanation: "Vertex 2 is disconnected and cannot be spanned, so no spanning tree exists."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt] and wt >= 0"
  - "0 <= u, v < vtces"

realWorld:
  - title: "Telecommunication Fiber Optic Cable Layout"
    description: "Laying minimum total length fiber-optic lines to connect all regional transmission centers without redundant cycles."
  - title: "Electrical Power Grid Cabling"
    description: "Designing the lowest cost high-voltage electrical grid network connecting all transformer substations."
  - title: "Municipal Water Supply Pipeline Design"
    description: "Connecting all residential districts to a primary water purification plant using minimal piping distance."
---
<!-- All rights reserved to CSRGO DSA -->

Given a connected, weighted, and undirected graph containing `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Compute and return the **total minimum weight** of a Minimum Spanning Tree (MST) using **Prim's Algorithm**.

If the graph is disconnected and a spanning tree cannot cover all vertices, return `-1`.
