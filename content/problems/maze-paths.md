---
title: "Maze Paths"
date: 2026-09-26T20:53:00+05:30
difficulty: "Medium"
topics: ["Recursion", "Backtracking", "Dynamic Programming"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MazePaths/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MazePaths/engineering"

hints:
  - "At each cell (sr, sc), you have two choices: move horizontal (sc + 1) or vertical (sr + 1)."
  - "The base case is reaching (dr, dc), which yields [\"\"]. If coordinates exceed bounds, return []."

youtubeId: ""

solutionUrl: "/solutions/maze-paths-solution/"

timeComplexity: "O(2^(dr + dc))"
spaceComplexity: "O(2^(dr + dc))"

examples:
  - input: "sr = 1, sc = 1, dr = 2, dc = 2"
    output: "[\"hv\", \"vh\"]"
    explanation: "Two valid paths: right then down ('hv'), or down then right ('vh')."
  - input: "sr = 1, sc = 1, dr = 1, dc = 1"
    output: "[\"\"]"
    explanation: "Source is destination; 1 empty path."

constraints:
  - "1 <= sr <= dr <= 5"
  - "1 <= sc <= dc <= 5"

realWorld:
  - title: "Autonomous Grid Rover Navigation"
    description: "Enumerating strictly forward-moving traversal trajectories through warehouse grid cells."
  - title: "VLSI Circuit Routing Channels"
    description: "Determining Manhattan routing paths for interconnect wires between chip terminals."
  - title: "Dynamic State Lattice Path Planning"
    description: "Analyzing monotone lattice paths in grid graph connectivity engines."
---
<!-- All rights reserved to CSRGO DSA -->

Given the source row `sr`, source column `sc`, destination row `dr`, and destination column `dc` of a grid, find and return all possible paths to travel from `(sr, sc)` to `(dr, dc)`.

From any cell `(r, c)`, you can only move:
1. **Horizontal (`h`)**: to `(r, c + 1)`
2. **Vertical (`v`)**: to `(r + 1, c)`
