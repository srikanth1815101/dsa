---
title: "Number of Enclaves"
date: 2026-10-01T02:42:00+05:30
difficulty: "Medium"
topics: ["Graph", "DFS", "BFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NumberOfEnclaves/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NumberOfEnclaves/engineering"

hints:
  - "Any land cell (1) that is connected to the boundary of the grid can walk off the boundary."
  - "Flood fill (DFS or BFS) starting from all boundary land cells to turn them into water (0), then count the remaining 1s."

youtubeId: ""

solutionUrl: "/solutions/number-of-enclaves-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]"
    output: "3"
    explanation: "There are three 1s that are enclosed and cannot walk off the boundary. The 1 at (1,0) is directly on the boundary."
  - input: "grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]"
    output: "0"
    explanation: "All 1s are connected to the top boundary at (0,1) and (0,2), so none are enclosed."

constraints:
  - "1 <= grid.length, grid[i].length <= 500"
  - "grid[i][j] is either 0 or 1."
  - "0 represents sea and 1 represents land."

realWorld:
  - title: "Hydrological Flood Basin Isolation"
    description: "Identifying interior dry land basins completely walled off from natural coastal drainage channels."
  - title: "Microchip Thermal Hotspot Trapping"
    description: "Locating interior thermal emission areas without a direct conductive path to edge heat sinks."
  - title: "Autonomous Robot Containment Zones"
    description: "Detecting sealed indoor floorplan zones where roving vacuum units cannot escape to perimeter exits."
weight: 103
---
<!-- All rights reserved to CSRGO DSA -->

You are given an `m x n` binary matrix `grid`, where `0` represents a sea cell and `1` represents a land cell.

A **move** consists of walking from one land cell to another adjacent (**4-directionally**) land cell or walking off the boundary of the grid.

Return *the number of land cells in `grid` for which we cannot walk off the boundary of the grid in any number of moves*.
