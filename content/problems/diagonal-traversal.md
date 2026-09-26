---
title: "Diagonal Traversal"
date: 2026-09-26T19:24:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Arrays"]
companies: ["Amazon", "Microsoft", "Samsung"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DiagonalTraversal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DiagonalTraversal/engineering"

hints:
  - "Notice that all elements on any anti-diagonal share the exact same index sum: row + col = d, where d ranges from 0 to m + n - 2."
  - "Alternate direction based on diagonal parity: if d is even, traverse upwards (row decreases, column increases); if d is odd, traverse downwards (row increases, column decreases)."

youtubeId: ""

solutionUrl: "/solutions/diagonal-traversal-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    output: "[1, 2, 4, 7, 5, 3, 6, 8, 9]"
    explanation: "Traversing diagonal sums d from 0 to 4 with alternating upward and downward directions."
  - input: "mat = [[1, 2], [3, 4]]"
    output: "[1, 2, 3, 4]"
    explanation: "d=0 (up): 1; d=1 (down): 2, 3; d=2 (up): 4."

constraints:
  - "m == mat.length, n == mat[i].length"
  - "1 <= m, n <= 500"
  - "1 <= m * n <= 10^5"
  - "-10^5 <= mat[i][j] <= 10^5"

realWorld:
  - title: "JPEG Zigzag Frequency Quantization"
    description: "Scanning 8x8 DCT transform frequency blocks in diagonal zigzag order to group trailing high-frequency zero coefficients for Huffman entropy coding."
  - title: "HEVC Video Transform Residual Serialization"
    description: "Serializing 2D residual transform matrices into linear streams for context-adaptive binary arithmetic coding (CABAC)."
  - title: "Bioinformatics Wavefront Parallelism"
    description: "Scheduling diagonal anti-diagonal wavefront computation passes in Smith-Waterman or Needleman-Wunsch genomic sequence alignment."
---
<!-- All rights reserved to CSRGO DSA -->

Given an $m \times n$ matrix `mat`, return an array of all the elements of the matrix traversed in **diagonal zigzag order**.

In diagonal traversal, diagonals run from bottom-left to top-right and vice versa:
- Diagonals with **even index sum** ($r + c = 0, 2, 4, \dots$) are traversed **upwards** (bottom-left to top-right).
- Diagonals with **odd index sum** ($r + c = 1, 3, 5, \dots$) are traversed **downwards** (top-right to bottom-left).
