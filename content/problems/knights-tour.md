---
title: "Knight's Tour"
date: 2026-09-26T21:00:00+05:30
difficulty: "Hard"
topics: ["Backtracking", "Matrix", "Graph"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KnightsTour/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KnightsTour/engineering"

hints:
  - "The knight has 8 possible moves from any square (r, c)."
  - "Use backtracking: mark the current square with move number, try all 8 moves recursively, and unmark (reset to 0) if no branch succeeds."

youtubeId: ""

solutionUrl: "/solutions/knights-tour-solution/"

timeComplexity: "O(8^(n^2))"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 5, r = 0, c = 0"
    output: "[[1, ...], ...]"
    explanation: "A 5x5 board marked with sequential numbers 1 to 25 representing the knight's valid visit sequence."
  - input: "n = 1, r = 0, c = 0"
    output: "[[1]]"
    explanation: "1x1 board with single cell visited at move 1."

constraints:
  - "1 <= n <= 6"
  - "0 <= r, c < n"

realWorld:
  - title: "Hamiltonian Path in Grid Graphs"
    description: "Finding full vertex coverage paths visiting every network device without repeats."
  - title: "PCB Drill Head Motion Optimization"
    description: "Scheduling robotic hole-punch drill routes to minimize travel distance across board pads."
  - title: "Game Engine Board Puzzle Solvers"
    description: "Automated solution verification for spatial logic and tile traversal challenges."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n` representing the size of an `n x n` chessboard and a starting position `(r, c)`, find a knight's tour that visits every square of the board exactly once.

A knight can make 8 standard L-shaped moves:
- `(r - 2, c + 1)`
- `(r - 1, c + 2)`
- `(r + 1, c + 2)`
- `(r + 2, c + 1)`
- `(r + 2, c - 1)`
- `(r + 1, c - 2)`
- `(r - 1, c - 2)`
- `(r - 2, c - 1)`

Return an `n x n` grid where cell `[i][j]` contains the 1-based move number (`1` to `n * n`). If no tour is possible, return an empty 2D array.
