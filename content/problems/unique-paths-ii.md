---
title: "Unique Paths II"
date: 2026-10-01T01:51:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Matrix"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/UniquePathsII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/UniquePathsII/engineering"

hints:
  - "If a grid cell contains an obstacle, set its paths to 0 since no path can traverse it."
  - "For all other cells, transition using dp[j] = dp[j] + dp[j-1], taking care of the first row and column initialization."

youtubeId: ""

solutionUrl: "/solutions/unique-paths-ii-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(n)"

examples:
  - input: "obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]"
    output: "2"
    explanation: "There is one obstacle in the middle of the 3x3 grid above. There are two ways to reach the bottom-right corner: 1. Right -> Right -> Down -> Down 2. Down -> Down -> Right -> Right"
  - input: "obstacleGrid = [[0, 1], [0, 0]]"
    output: "1"
    explanation: "Result is 1."

constraints:
  - "m == obstacleGrid.length"
  - "n == obstacleGrid[i].length"
  - "1 <= m, n <= 100"
  - "obstacleGrid[i][j]` is `0` or `1`."

realWorld:
  - title: "Warehouse Robotics Obstacle Avoidance"
    description: "Finding transit routes for autonomous forklifts around dynamic pallet storage obstructions."
  - title: "PCB Trace Routing with Exclusion Zones"
    description: "Computing allowable copper trace pathways on printed circuit boards avoiding drill holes and heatsinks."
  - title: "Urban Flood Evacuation Route Mapping"
    description: "Determining viable downtown street paths navigating around inundated intersections during storm surges."
weight: 52
---
<!-- All rights reserved to CSRGO DSA -->

You are given an `m x n` integer array `obstacleGrid`. There is a robot initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `obstacleGrid`. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to $2 \times 10^9$.
