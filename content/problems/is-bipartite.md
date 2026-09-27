---
title: "Is Bipartite"
date: 2026-09-27T20:50:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "DFS"]
companies: ["Amazon", "Samsung", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IsBipartite/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IsBipartite/engineering"

hints:
  - "A graph is bipartite if and only if it does not contain any odd-length cycle (i.e. it is 2-colorable)."
  - "Maintain a color/level array initialized to -1. During BFS, alternate colors (0 and 1) between adjacent vertices. If an already visited neighbor shares the same color, return false."

youtubeId: ""

solutionUrl: "/solutions/is-bipartite-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 0, 1]]"
    output: "true"
    explanation: "Vertices can be partitioned into set A = {0, 2} and set B = {1, 3} with no intra-set edges."
  - input: "vtces = 3, edges = [[0, 1, 1], [1, 2, 1], [0, 2, 1]]"
    output: "false"
    explanation: "The vertices form an odd cycle of length 3, which cannot be 2-colored."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= u, v < vtces"

realWorld:
  - title: "Two-Sided Marketplace Matching"
    description: "Modeling buyers and sellers or drivers and riders where interactions only occur between opposing sets."
  - title: "Compiler Register Allocation Conflict Graphs"
    description: "Determining whether CPU registers can be divided into two conflict-free execution bank partitions."
  - title: "Medical Blood Type Donor Compatibility"
    description: "Verifying reciprocal match feasibility in donor-recipient exchange graphs without circular intra-group dependencies."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Determine whether the graph is **bipartite**. A graph is bipartite if its vertices can be partitioned into two independent sets $A$ and $B$ such that every edge in the graph connects a vertex in $A$ to a vertex in $B$.

Return `true` if the graph is bipartite, otherwise return `false`.
