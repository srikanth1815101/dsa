---
title: "Bridges in Graph"
date: 2026-09-27T21:01:00+05:30
draft: false
difficulty: "Hard"
companies: ["Amazon", "Google", "Microsoft"]
topics: ["Graph", "DFS"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BridgesInGraph/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BridgesInGraph/engineering"
hints:
  - "An edge in an undirected graph is a bridge (or critical connection) if its removal increases the number of connected components."
  - "Use Tarjan's algorithm with discovery times disc[] and lowest reachable ancestor times low[]."
  - "During DFS traversal from parent u to child v: if low[v] > disc[u], then edge (u, v) is a bridge because there is no back-edge from the subtree of v to u or any ancestor of u."
youtubeId: ""
solutionUrl: "/solutions/bridges-in-graph-solution/"
timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"
examples:
  - input: |
      vtces = 4
      edges = [[0, 1], [1, 2], [2, 0], [1, 3]]
    output: |
      [[1, 3]]
    explanation: "Removing edge [1, 3] disconnects vertex 3 from the rest of the graph."
  - input: |
      vtces = 2
      edges = [[0, 1]]
    output: |
      [[0, 1]]
    explanation: "Removing [0, 1] splits the 2-vertex graph into 2 separate components."
constraints:
  - "2 <= vtces <= 10^5"
  - "1 <= edges.length <= 10^5"
  - "edges[i].length == 2"
  - "0 <= edges[i][0], edges[i][1] < vtces"
  - title: "Telecommunication Single Point of Failure (SPOF)"
    description: "Telecom infrastructure engineers detect critical transmission links whose interruption would sever regional communication grids."
  - title: "Critical Road and Bridge Evacuation Corridors"
    description: "Transportation disaster planning systems identify bridges whose structural collapse would isolate municipal neighborhoods."
  - title: "Server Mesh Gateway Interconnects"
    description: "Cloud network topology checkers ensure high-availability routing by detecting non-redundant cross-datacenter fiber connections."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected connected graph with `vtces` vertices numbered `0` to `vtces - 1` and an array `edges` where `edges[i] = [u, v]` represents an undirected edge between `u` and `v`.

Find all **bridges** in the graph. A bridge (or critical connection) is an edge whose removal increases the number of connected components in the graph.

Return the list of bridges. Each bridge should be represented as a pair `[u, v]` with `u < v`, and the list should be sorted lexicographically.
