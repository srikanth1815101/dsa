---
title: "Number of Islands"
date: 2024-01-14T00:00:00Z
difficulty: "Medium"
topics: ["Graph", "DFS", "BFS", "Matrix"]
companies: ["Amazon", "Google", "Facebook"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/number-of-islands"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/number-of-islands"
hints:
  - "Use DFS or BFS to explore each island completely."
  - "Mark visited cells to avoid counting the same island twice."
youtubeId: "pV2kpPD66nE"
solutionUrl: "/solutions/number-of-islands-solution/"
timeComplexity: "O(m × n)"
spaceComplexity: "O(m × n)"
examples:
  - input: "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]"
    output: "3"
    explanation: "There are three groups of connected '1's, representing three islands."
  - input: "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"1\",\"1\"]]"
    output: "1"
    explanation: "All land cells are connected, forming one island."
constraints:
  - "m == grid.length"
  - "n == grid[i].length"
  - "1 <= m, n <= 300"
  - "grid[i][j] is '0' or '1'"
realWorld:
  - title: "Geographic Information Systems"
    description: "Counting distinct land masses from satellite imagery."
  - title: "Image Segmentation"
    description: "Identifying connected regions in computer vision applications."
  - title: "Network Analysis"
    description: "Finding connected components in social or computer networks."
---

Given an `m x n` 2D binary grid `grid` which represents a map of **'1's** (land) and **'0's** (water), return the **number of islands**.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.
