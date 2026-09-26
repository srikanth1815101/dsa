---
title: "Flood Fill"
date: 2026-09-26T20:57:00+05:30
difficulty: "Medium"
topics: ["Matrix", "BFS", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FloodFill/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FloodFill/engineering"

hints:
  - "From any open cell (0), explore 4 directions: top ('t'), left ('l'), down ('d'), right ('r')."
  - "Mark the current cell visited before recursing, and unmark it (backtrack) when returning to allow other valid paths."

youtubeId: ""

solutionUrl: "/solutions/flood-fill-solution/"

timeComplexity: "O(4^(n * m))"
spaceComplexity: "O(n * m)"

examples:
  - input: "maze = [[0, 0, 0], [1, 0, 1], [0, 0, 0]]"
    output: "[\"rddr\", \"rrdd\"]"
    explanation: "Two paths from (0,0) to (2,2) avoiding obstacle cells with value 1."
  - input: "maze = [[0, 1], [1, 0]]"
    output: "[]"
    explanation: "All routes to destination are blocked by obstacles."

constraints:
  - "1 <= maze.length, maze[0].length <= 6"
  - "maze[i][j] is either 0 (open) or 1 (obstacle)"

realWorld:
  - title: "Robotic Maze Navigation"
    description: "Finding obstacle-free exploration paths for automated guided vehicles in factories."
  - title: "Circuit Board Trace Autorouting"
    description: "Routing printed copper traces around component keep-out barrier zones."
  - title: "Game Engine AI Pathfinding"
    description: "Simulating grid map navigation pathways for non-player characters."
---
<!-- All rights reserved to CSRGO DSA -->

Given an `n x m` grid `maze` where `0` represents an open cell and `1` represents an obstacle, find and return all possible paths to travel from the top-left cell `(0, 0)` to the bottom-right cell `(n - 1, m - 1)`.

From any cell `(r, c)`, you can move in 4 directions:
- **Top (`t`)**: `(r - 1, c)`
- **Left (`l`)**: `(r, c - 1)`
- **Down (`d`)**: `(r + 1, c)`
- **Right (`r`)**: `(r, c + 1)`

You cannot step on cells with value `1`, move outside the boundaries, or revisit a cell already on the current path.
