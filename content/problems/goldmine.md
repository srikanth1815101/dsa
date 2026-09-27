---
title: "Goldmine"
date: 2026-09-27T20:15:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Matrix"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Goldmine/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Goldmine/engineering"

hints:
  - "The miner starts at any row in the first column and moves rightward one column at a time until reaching the last column."
  - "Compute maximum collectible gold from right to left column-by-column. For cell (i, j), look at (i - 1, j + 1), (i, j + 1), and (i + 1, j + 1)."

youtubeId: ""

solutionUrl: "/solutions/goldmine-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "grid = [[1, 3, 3], [2, 1, 4], [0, 6, 4]]"
    output: "12"
    explanation: "Path: (1, 0) -> (2, 1) -> (2, 2) collects 2 + 6 + 4 = 12 gold."
  - input: "grid = [[1, 3, 1, 5], [2, 2, 4, 1], [5, 0, 2, 3], [0, 6, 1, 2]]"
    output: "16"
    explanation: "Starting at (2, 0) and moving diagonally: 5 -> 6 -> 2 -> 3 collects maximum gold 16."

constraints:
  - "1 <= grid.length, grid[0].length <= 200"
  - "0 <= grid[i][j] <= 10^4"
  - "Total gold collected fits within standard 32-bit signed integer limits"

realWorld:
  - title: "Subsurface Mineral Extraction Planning"
    description: "Maximizing borehole ore excavation yields where drilling rigs advance strictly forward across angled subterranean strata."
  - title: "Financial Multi-Period Portfolio Optimization"
    description: "Choosing asset transition paths across successive trading quarters where switches are bounded by adjacent risk tiers."
  - title: "Robotic Aerial Wind-Assisted Navigation"
    description: "Guiding automated drones across crosswind airspace grids to harvest maximum tailwind energy while advancing downwind."
---
<!-- All rights reserved to CSRGO DSA -->

Given a 2D grid `grid` of size `m x n` representing a goldmine where each cell contains a non-negative amount of gold, a miner starts at any cell in the first column (`j = 0`) and moves toward the last column (`j = n - 1`).

From cell `(i, j)`, the miner can only move to:
1. `(i - 1, j + 1)`: diagonally up-right
2. `(i, j + 1)`: directly right
3. `(i + 1, j + 1)`: diagonally down-right

Return the maximum amount of gold the miner can collect upon reaching the last column.
