---
title: "Minimum Path Sum"
date: 2026-10-01T01:52:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Matrix"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumPathSum/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumPathSum/engineering"

hints:
  - "The minimum cost to reach (i, j) is grid[i][j] + min(cost from top, cost from left)."
  - "You can update the grid in-place or use a 1D DP array of size n to track running column minimum sums."

youtubeId: ""

solutionUrl: "/solutions/minimum-path-sum-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(1)"

examples:
  - input: "grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]"
    output: "7"
    explanation: "Because the path 1 -> 3 -> 1 -> 1 -> 1 minimizes the sum."
  - input: "grid = [[1, 2, 3], [4, 5, 6]]"
    output: "12"
    explanation: "Result is 12."

constraints:
  - "m == grid.length"
  - "n == grid[i].length"
  - "1 <= m, n <= 200"
  - "0 <= grid[i][j] <= 200"

realWorld:
  - title: "Seam Carving Image Resizing"
    description: "Finding the lowest-energy vertical or horizontal pixel seams for content-aware image retargeting."
  - title: "Subsea Pipeline Trenching Optimization"
    description: "Minimizing excavation and structural costs when routing undersea gas pipelines through seabed terrain grids."
  - title: "Telecommunications Fiber Trench Routing"
    description: "Finding lowest-cost municipal rights-of-way for fiber optic deployment through urban utility grids."
weight: 53
---
<!-- All rights reserved to CSRGO DSA -->

Given an `m x n` `grid` filled with non-negative numbers, find a path from top-left to bottom-right, which minimizes the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.
