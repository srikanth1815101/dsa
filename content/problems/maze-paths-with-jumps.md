---
title: "Maze Paths with Jumps"
date: 2026-09-26T20:54:00+05:30
difficulty: "Medium"
topics: ["Recursion", "Backtracking", "Dynamic Programming"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MazePathsWithJumps/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MazePathsWithJumps/engineering"

hints:
  - "In a cell (sr, sc), loop over possible horizontal jump lengths (ms = 1 to dc - sc), vertical jump lengths (ms = 1 to dr - sr), and diagonal jump lengths (ms = 1 to min(dr - sr, dc - sc))."
  - "Format moves with direction letter followed by move size, e.g. 'h1', 'v2', 'd1'."

youtubeId: ""

solutionUrl: "/solutions/maze-paths-with-jumps-solution/"

timeComplexity: "O(3^(dr + dc))"
spaceComplexity: "O(dr + dc)"

examples:
  - input: "sr = 1, sc = 1, dr = 2, dc = 2"
    output: "[\"h1v1\", \"v1h1\", \"d1\"]"
    explanation: "Reach (2,2) via horizontal then vertical, vertical then horizontal, or a single diagonal jump."
  - input: "sr = 1, sc = 1, dr = 1, dc = 1"
    output: "[\"\"]"
    explanation: "Already at destination."

constraints:
  - "1 <= sr <= dr <= 4"
  - "1 <= sc <= dc <= 4"

realWorld:
  - title: "Queen / Bishop Move Generation in Chess Engines"
    description: "Enumerating multi-square ray attacks across orthogonal and diagonal board lines."
  - title: "Agile Drone Trajectory Optimization"
    description: "Evaluating variable-length jump steps across waypoint lattices with diagonal transition corridors."
  - title: "Dynamic Routing over Multi-Hop Networks"
    description: "Exploring leapfrog shortcut links to optimize network packet transit hops."
---
<!-- All rights reserved to CSRGO DSA -->

Given the source row `sr`, source column `sc`, destination row `dr`, and destination column `dc` of a grid, find and return all possible paths to travel from `(sr, sc)` to `(dr, dc)` allowing multi-step jumps.

From any cell `(r, c)`, you can make:
1. **Horizontal moves (`h<step>`)**: move `step` units right to `(r, c + step)` for `1 <= step <= dc - c`.
2. **Vertical moves (`v<step>`)**: move `step` units down to `(r + step, c)` for `1 <= step <= dr - r`.
3. **Diagonal moves (`d<step>`)**: move `step` units diagonally down-right to `(r + step, c + step)` for `1 <= step <= min(dr - r, dc - c)`.
