---
title: "Number of Islands"
date: 2026-09-27T20:46:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "DFS"]
companies: ["Amazon", "Walmart", "Meta"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NumberOfIslands/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NumberOfIslands/engineering"

hints:
  - "Iterate through each cell in the 2D grid. Whenever you encounter a land cell (1), increment your island counter."
  - "Trigger a DFS or BFS traversal from that cell to sink/visit all 4-directionally adjacent connected land cells."

youtubeId: ""

solutionUrl: "/solutions/number-of-islands-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "grid = [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]]"
    output: "1"
    explanation: "All connected 1s form a single contiguous land mass surrounded by 0s."
  - input: "grid = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]]"
    output: "3"
    explanation: "There are three distinct disconnected islands."

constraints:
  - "1 <= grid.length, grid[0].length <= 300"
  - "grid[i][j] is either 0 (water) or 1 (land)."
  - "Land connections are only formed 4-directionally (up, down, left, right)."

realWorld:
  - title: "Geospatial Satellite Topography Extraction"
    description: "Detecting distinct continents, islands, and bodies of water in rasterized satellite imaging feeds."
  - title: "Medical Diagnostic Tumor Segment Isolation"
    description: "Segmenting isolated dense abnormal tissue clusters from background tissue in MRI scan grids."
  - title: "Robotics Grid Map Obstacle Clustering"
    description: "Clustering LIDAR sensor point grids into discrete solid obstacle objects for mobile robot path planning."
---
<!-- All rights reserved to CSRGO DSA -->

Given an `m x n` 2D binary grid `grid` which represents a map of `1`s (land) and `0`s (water), return the total **number of islands**.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically (4 directions). You may assume all four edges of the grid are completely surrounded by water.
