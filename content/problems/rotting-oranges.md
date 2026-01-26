---
title: "Rotting Oranges"
date: 2024-01-15T00:00:00Z
difficulty: "Medium"
topics: ["Graph", "BFS", "Matrix"]
companies: ["Amazon", "Microsoft", "Google"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/rotting-oranges"
hints:
  - "Use multi-source BFS starting from all rotten oranges simultaneously."
  - "Track elapsed time by processing level by level."
youtubeId: "y704fEOx0s0"
solutionUrl: "/solutions/rotting-oranges-solution/"
timeComplexity: "O(m × n)"
spaceComplexity: "O(m × n)"
examples:
  - input: "grid = [[2,1,1],[1,1,0],[0,1,1]]"
    output: "4"
    explanation: "Each minute, adjacent fresh oranges rot. After 4 minutes, all oranges are rotten."
  - input: "grid = [[2,1,1],[0,1,1],[1,0,1]]"
    output: "-1"
    explanation: "The bottom-left orange cannot be reached, so it will never rot."
constraints:
  - "m == grid.length"
  - "n == grid[i].length"
  - "1 <= m, n <= 10"
  - "grid[i][j] is 0, 1, or 2"
realWorld:
  - title: "Epidemic Modeling"
    description: "Simulating disease spread across a population grid."
  - title: "Fire Spread Simulation"
    description: "Modeling how fire propagates through a forest over time."
  - title: "Network Outage Propagation"
    description: "Calculating how failures cascade through connected systems."
---

You are given an `m x n` grid where each cell can have one of three values:
- `0` representing an empty cell
- `1` representing a fresh orange
- `2` representing a rotten orange

Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return the **minimum number of minutes** that must elapse until no cell has a fresh orange. If this is impossible, return **-1**.
