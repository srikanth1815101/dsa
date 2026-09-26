---
title: "Exit Point of Matrix"
date: 2026-09-26T19:15:00+05:30
difficulty: "Easy"
topics: ["Matrix", "Arrays"]
companies: ["Amazon", "Samsung", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ExitPointOfMatrix/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ExitPointOfMatrix/engineering"

hints:
  - "Maintain current position (i, j) and current direction (0: East, 1: South, 2: West, 3: North)."
  - "Upon encountering a 1, turn 90 degrees clockwise ((dir + 1) % 4) and set the cell to 0 before moving. Before taking the next step, verify if it falls out of matrix bounds; if so, the current cell is the exit point."

youtubeId: ""

solutionUrl: "/solutions/exit-point-of-matrix-solution/"

timeComplexity: "O(r * c)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[0, 0, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0]]"
    output: "[1, 3]"
    explanation: "Moving East from (0, 0), hits 1 at (0, 2), turns South. Hits 1 at (3, 2), turns West. Hits 1 at (3, 0), turns North. Hits 1 at (1, 0), turns East, and exits the matrix from cell (1, 3)."
  - input: "mat = [[0, 1], [1, 0]]"
    output: "[1, 1]"
    explanation: "Moves East from (0, 0) to (0, 1), hits 1, turns South to (1, 1). Next step South exits the grid, so last valid cell is [1, 1]."

constraints:
  - "1 <= mat.length, mat[0].length <= 100"
  - "mat[i][j] is either 0 or 1"
  - "A valid exit is guaranteed to be reached"

realWorld:
  - title: "Reflective Optical Ray Tracing"
    description: "Simulating photon deflection across metamaterial microstructures where dielectric interfaces cause 90-degree internal reflections."
  - title: "AGV Warehouse Routing & Deflection"
    description: "Tracking autonomous cart navigation across warehouse floor grids with 90-degree optical turning markers."
  - title: "Network Packet Deflection Routing"
    description: "Simulating buffered packet traversal in 2D mesh network-on-chip routers where saturated nodes divert packets to orthogonal paths."
---
<!-- All rights reserved to CSRGO DSA -->

Given a binary matrix `mat` of dimensions $r \times c$ consisting of only `0`s and `1`s.

You enter the matrix at cell `(0, 0)` facing **East** (to the right). As you traverse the matrix:
- When you land on a cell with value `0`, continue moving in the **same direction**.
- When you land on a cell with value `1`, turn **90 degrees clockwise** (East $\to$ South $\to$ West $\to$ North $\to$ East), change the value of that cell to `0` (so you do not repeat the turn on re-entry), and proceed in the new direction.

Determine the **exit point** of the matrix, which is the 0-indexed coordinate `[row, col]` of the last valid cell inside the matrix before stepping outside its boundaries.
