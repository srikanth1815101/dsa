---
title: "Minimum Cost Path"
date: 2026-09-27T20:14:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Matrix"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MinimumCostPath/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MinimumCostPath/engineering"

hints:
  - "Notice that each cell (i, j) can only be entered from directly above (i - 1, j) or directly from the left (i, j - 1)."
  - "The minimum cost to reach (i, j) is grid[i][j] + min(dp[i - 1][j], dp[i][j - 1]). Fill base cases for the first row and first column."

youtubeId: ""

solutionUrl: "/solutions/minimum-cost-path-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]"
    output: "7"
    explanation: "The path 1 -> 3 -> 1 -> 1 -> 1 minimizes the sum to 7."
  - input: "grid = [[1, 2, 3], [4, 5, 6]]"
    output: "12"
    explanation: "The optimal path 1 -> 2 -> 3 -> 6 yields a total cost of 12."

constraints:
  - "1 <= grid.length, grid[0].length <= 200"
  - "0 <= grid[i][j] <= 200"
  - "Total path cost fits within standard 32-bit signed integer limits"

realWorld:
  - title: "Autonomous Robot Floor Energy Navigation"
    description: "Guiding delivery robots across weighted factory floor tiles to minimize electrical battery drain between stations."
  - title: "Telecommunication Fiber Routing Laying Costs"
    description: "Calculating the cheapest trenching path across municipal terrain cost grids for laying underground optical cable lines."
  - title: "Image Processing Seam Carving Cost Calculation"
    description: "Accumulating dynamic cumulative energy matrices to find minimal cost seams for content-aware image resizing."
---
<!-- All rights reserved to CSRGO DSA -->

Given an `m x n` grid filled with non-negative integers representing cell costs, find a path from the top-left cell `(0, 0)` to the bottom-right cell `(m - 1, n - 1)` which minimizes the sum of all cell values along the path.

You can only move either down or right at any point in time.

Return the minimum cost required to reach the bottom-right cell.
