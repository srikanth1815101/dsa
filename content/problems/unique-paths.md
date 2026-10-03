---
title: "Unique Paths"
date: 2026-10-01T01:50:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Mathematics", "Combinatorics"]
companies: ["Amazon", "Google", "Uber"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/UniquePaths/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/UniquePaths/engineering"

hints:
  - "At any cell (i, j), you can arrive from either (i-1, j) from above or (i, j-1) from the left."
  - "Use dynamic programming where dp[j] = dp[j] + dp[j-1], optimizing space to a single 1D array of size n."

youtubeId: ""

solutionUrl: "/solutions/unique-paths-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(n)"

examples:
  - input: "m = 3, n = 7"
    output: "28"
    explanation: "Result is 28."
  - input: "m = 3, n = 2"
    output: "3"
    explanation: "From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down"

constraints:
  - "1 <= m, n <= 100"
  - "The robot can only move either down or right at any point in time."
  - "The answer is guaranteed to be less than or equal to 2 * 10^9."
realWorld:
  - title: "Automated Guided Vehicle Grid Routing"
    description: "Counting safe monotonic transit paths for warehouse robotic rovers navigating Manhattan grid factory floors."
  - title: "VLSI Circuit Interconnect Tracing"
    description: "Evaluating routing density channels across silicon microchip logic layouts constrained to right-down routing."
  - title: "Game Map Waypoint Exploration"
    description: "Calculating traversal options for NPC movement through directional grid-based game levels."
weight: 51
---
<!-- All rights reserved to CSRGO DSA -->

There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to $2 \times 10^9$.
