---
title: "Shortest Path in Binary Matrix"
date: 2026-10-01T02:06:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "Matrix"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ShortestPathInBinaryMatrix/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ShortestPathInBinaryMatrix/engineering"

hints:
  - "Use 8-directional Breadth-First Search (BFS) starting from cell (0, 0) to guarantee finding the shortest path in unweighted grids."
  - "Mark cells as visited or set grid[r][c] = 1 upon adding to the BFS queue to avoid redundant traversals."

youtubeId: ""

solutionUrl: "/solutions/shortest-path-in-binary-matrix-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "grid = [[0,1],[1,0]]"
    output: "** `2` **"
    explanation: "** The path is `(0, 0) -> (1, 1)`. Total cells visited = 2."
  - input: "grid = [[0,0,0],[1,1,0],[1,1,0]]"
    output: "** `4` **"
    explanation: "** The shortest path is `(0, 0) -> (0, 1) -> (1, 2) -> (2, 2)`. Total cells visited = 4."

constraints:
  - "n == grid.length"
  - "n == grid[i].length"
  - "1 <= n <= 100"
  - "grid[i][j]` is `0` or `1`."

realWorld:
  - title: "Robotic Warehouse Path Planning"
    description: "Navigating autonomous guided vehicles through obstacle grids with diagonal turning capabilities."
  - title: "Video Game Unit NavMesh Pathfinding"
    description: "Finding the quickest path for 8-directional player units around trees and terrain barriers."
  - title: "Emergency Evacuation Routing"
    description: "Calculating the fastest exit route through smoke-free corridors in smart building emergency management systems."
weight: 67
---
<!-- All rights reserved to CSRGO DSA -->

Given an `n x n` binary matrix `grid`, return the length of the **shortest clear path** in the matrix. If there is no clear path, return `-1`.

A **clear path** in a binary matrix is a path from the **top-left** cell `(0, 0)` to the **bottom-right** cell `(n - 1, n - 1)` such that:
- All the visited cells of the path are `0`.
- All adjacent cells of the path are **8-directionally** connected (i.e., they are different and share an edge or a corner).

The **length of a clear path** is the number of visited cells of this path.
