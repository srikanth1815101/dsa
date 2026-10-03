---
title: "Shortest Bridge"
date: 2026-10-01T02:41:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ShortestBridge/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ShortestBridge/engineering"

hints:
  - "Use DFS to find all cells of the first island, mark them as visited (e.g. change value to 2), and add all its coordinates to a queue."
  - "Run a multi-source BFS expanding outwards from the first island until you reach a cell with value 1 (the second island)."

youtubeId: ""

solutionUrl: "/solutions/shortest-bridge-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "grid = [[0,1],[1,0]]"
    output: "1"
    explanation: "Flip the water cell at (0,0) or (1,1) to connect the two diagonal islands."
  - input: "grid = [[0,1,0],[0,0,0],[0,0,1]]"
    output: "2"
    explanation: "Flipping two water cells connects the top island to the bottom-right island."

constraints:
  - "2 <= grid.length == grid[i].length <= 100"
  - "grid[i][j] is either 0 or 1."
  - "There are exactly two separate islands in grid."

realWorld:
  - title: "Subsea Telecom Cable Routing"
    description: "Calculating minimum cable length needed to connect two separate offshore island fiber networks."
  - title: "Semiconductor Circuit Bridging"
    description: "Identifying the shortest conductive jumper required to link two disconnected power domains on a chip layout."
  - title: "Archipelago Causeway Construction"
    description: "Determining the minimum landfill distance needed to bridge two separate neighboring islands."
weight: 102
---
<!-- All rights reserved to CSRGO DSA -->

You are given an `n x n` binary matrix `grid` where `1` represents land and `0` represents water.

An **island** is a 4-directionally connected group of `1`s not connected to any other `1`s. There are **exactly two islands** in `grid`.

You may change `0`s to `1`s to connect the two islands to form **one island**.

Return *the smallest number of `0`s you must flip to connect the two islands*.
