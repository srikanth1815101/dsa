---
title: "Floyd Warshall"
date: 2026-09-27T20:59:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Microsoft"]
topics: ["Graph", "Shortest Path", "Dynamic Programming"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FloydWarshall/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FloydWarshall/engineering"
hints:
  - "Floyd-Warshall is an all-pairs shortest path dynamic programming algorithm."
  - "Iterate through each intermediate vertex k from 0 to n - 1, and update matrix[i][j] = min(matrix[i][j], matrix[i][k] + matrix[k][j])."
  - "Convert -1 to a sufficiently large infinity value during relaxation to prevent integer overflow, then convert back to -1 for unreachable pairs."
youtubeId: ""
solutionUrl: "/solutions/floyd-warshall-solution/"
timeComplexity: "O(V^3)"
spaceComplexity: "O(1) auxiliary"
examples:
  - input: |
      matrix = [
        [0, 2, -1, -1],
        [1, 0, 3, -1],
        [-1, -1, 0, -1],
        [3, 5, 4, 0]
      ]
    output: |
      [
        [0, 2, 5, -1],
        [1, 0, 3, -1],
        [-1, -1, 0, -1],
        [3, 5, 4, 0]
      ]
    explanation: "For vertex pair (0, 2), going via 1 gives cost 2 + 3 = 5 instead of unreachable (-1)."
  - input: |
      matrix = [
        [0, 25],
        [-1, 0]
      ]
    output: |
      [
        [0, 25],
        [-1, 0]
      ]
    explanation: "No intermediate paths exist to improve distances."
constraints:
  - "1 <= matrix.length <= 100"
  - "matrix.length == matrix[i].length"
  - "-1 <= matrix[i][j] <= 1000"
  - "matrix[i][i] == 0"
realWorld:
  - title: "All-Pairs Transit Matrix Calculation"
    description: "Metropolitan transit authorities precalculate transit commute matrices across all city station pairs for real-time ticketing."
  - title: "Peer-to-Peer Distributed Network Routing Tables"
    description: "Overlay network routing layers broadcast and solve all-pairs network hop tables to optimize message delivery across nodes."
  - title: "Transitive Closure Computation in Knowledge Graphs"
    description: "Deducing indirect relationship links and semantic reachability across dense ontological entity graphs."
---
<!-- All rights reserved to CSRGO DSA -->

The problem is to find the **all-pairs shortest path** in a given directed graph with `n` vertices labeled from `0` to `n - 1`. The graph is represented by an adjacency matrix `matrix` of size `n x n` where:
- `matrix[i][j]` denotes the weight of the directed edge from vertex `i` to vertex `j`.
- If there is no direct edge between vertex `i` and vertex `j`, then `matrix[i][j] = -1`.
- If `i == j`, `matrix[i][j] = 0`.

Update and return the matrix such that `matrix[i][j]` represents the shortest path from vertex `i` to vertex `j`. If vertex `j` is unreachable from vertex `i`, `matrix[i][j]` should remain `-1`.
