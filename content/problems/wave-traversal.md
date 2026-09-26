---
title: "Wave Traversal"
date: 2026-09-26T19:13:00+05:30
difficulty: "Easy"
topics: ["Matrix", "Arrays", "Sorting"]
companies: ["Amazon", "Flipkart", "Zoho"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/WaveTraversal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/WaveTraversal/engineering"

hints:
  - "Iterate through the matrix column by column from column index 0 to c - 1."
  - "For even columns (col % 2 == 0), iterate rows from top to bottom (0 to r - 1). For odd columns (col % 2 != 0), iterate rows from bottom to top (r - 1 down to 0)."

youtubeId: ""

solutionUrl: "/solutions/wave-traversal-solution/"

timeComplexity: "O(r * c)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    output: "[1, 4, 7, 8, 5, 2, 3, 6, 9]"
    explanation: "Column 0 goes down: 1, 4, 7. Column 1 goes up: 8, 5, 2. Column 2 goes down: 3, 6, 9."
  - input: "mat = [[1, 2], [3, 4], [5, 6], [7, 8]]"
    output: "[1, 3, 5, 7, 8, 6, 4, 2]"
    explanation: "Column 0 goes down: 1, 3, 5, 7. Column 1 goes up: 8, 6, 4, 2."

constraints:
  - "1 <= mat.length, mat[0].length <= 500"
  - "-10^4 <= mat[i][j] <= 10^4"
  - "Total elements (r * c) <= 2.5 * 10^5"

realWorld:
  - title: "Sensor Array Serpentine Scanning"
    description: "Guiding automated measurement probes across a 2D sensory surface continuously without skipping back to row zero."
  - title: "Robotic Turf Care & Coverage Paths"
    description: "Directing autonomous lawnmowers and agricultural drones in alternating column swaths to minimize sharp turns."
  - title: "Raster Display Back-and-Forth Sweeps"
    description: "Sweeping optical display or lithography printheads bidirectionally across alternating scan columns to reduce mechanical retrace delay."
---
<!-- All rights reserved to CSRGO DSA -->

Given a 2D integer matrix `mat` with $r$ rows and $c$ columns, return an array of its elements traversed in **wave order** (column-by-column sinusoidal wave).

In wave traversal:
- For **even-indexed columns** ($0, 2, 4, \dots$), traverse elements from **top to bottom** (from row $0$ to row $r - 1$).
- For **odd-indexed columns** ($1, 3, 5, \dots$), traverse elements from **bottom to top** (from row $r - 1$ down to row $0$).
