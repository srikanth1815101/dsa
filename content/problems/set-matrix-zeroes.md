---
title: "Set Matrix Zeroes"
date: 2026-09-26T19:27:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Arrays", "Hashing"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SetMatrixZeroes/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SetMatrixZeroes/engineering"

hints:
  - "Rather than allocating auxiliary boolean arrays of size O(m + n), use the first row and first column of the matrix itself to store zero-marking indicators."
  - "Track whether the first row and first column themselves originally contained zeroes using two boolean flags before using them as marker storage."

youtubeId: ""

solutionUrl: "/solutions/set-matrix-zeroes-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]"
    output: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]"
    explanation: "Element at (1, 1) is 0, so row 1 and column 1 are completely set to 0."
  - input: "mat = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]"
    output: "[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]"
    explanation: "Zeroes at (0, 0) and (0, 3) cause row 0, column 0, and column 3 to be zeroed."

constraints:
  - "m == mat.length, n == mat[0].length"
  - "1 <= m, n <= 200"
  - "-2^31 <= mat[i][j] <= 2^31 - 1"

realWorld:
  - title: "Relational Null Propagation Cascades"
    description: "Propagating cascading relational database nullification across entire row and column tuples upon encountering missing foreign key records."
  - title: "Network Switch Adjacency Invalidation"
    description: "Zeroing out entire rows and columns in network switch adjacency matrices when a hardware port or crossbar junction fails."
  - title: "Camera Sensor Scanline Masking"
    description: "Masking entire row and column pixel readouts across digital camera sensors upon detecting dead photodiodes."
---
<!-- All rights reserved to CSRGO DSA -->

Given an $m \times n$ integer matrix `mat`, if an element is `0`, set its entire row and column to `0`s.

You must modify the matrix **in-place** with $O(1)$ extra space, and return the modified matrix `mat`.
