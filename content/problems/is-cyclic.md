---
title: "Is Cyclic"
date: 2026-09-27T20:49:00+05:30
difficulty: "Medium"
topics: ["Graph", "DFS", "Topological Sort"]
companies: ["Amazon", "Adobe", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IsCyclic/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IsCyclic/engineering"

hints:
  - "Iterate across all vertices from 0 to vtces - 1 to handle disconnected components."
  - "Using BFS, if a vertex dequeued from the queue has already been marked as visited, a cycle must exist."

youtubeId: ""

solutionUrl: "/solutions/is-cyclic-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 10], [1, 2, 10], [2, 3, 10], [0, 3, 40]]"
    output: "true"
    explanation: "The vertices 0, 1, 2, 3 form a closed loop (cycle)."
  - input: "vtces = 4, edges = [[0, 1, 10], [1, 2, 10], [2, 3, 10]]"
    output: "false"
    explanation: "The graph is a tree (linear chain) and contains no cycles."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= u, v < vtces"

realWorld:
  - title: "Operating System Deadlock Detection"
    description: "Detecting circular resource allocation dependencies in OS resource allocation graphs."
  - title: "Financial Transaction Ring Laundering Analysis"
    description: "Detecting circular fund transfers between shell companies in fraud investigation graphs."
  - title: "Network Bridge Loop Prevention (Spanning Tree Protocol)"
    description: "Identifying redundant bridge loops in Layer-2 ethernet networks to prevent broadcast storms."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Determine whether the graph contains any **cycle**.

Return `true` if at least one cycle exists in any connected component, otherwise return `false`.
