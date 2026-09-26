---
title: "Saddle Point"
date: 2026-09-26T19:25:00+05:30
difficulty: "Easy"
topics: ["Matrix", "Arrays"]
companies: ["Goldman Sachs", "Morgan Stanley", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SaddlePoint/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SaddlePoint/engineering"

hints:
  - "Iterate row by row. For each row i, locate the minimum element and record its column index colMin."
  - "Verify if mat[i][colMin] is simultaneously the maximum value in column colMin across all rows. If it is, return it immediately. If no row produces a saddle point, return -1."

youtubeId: ""

solutionUrl: "/solutions/saddle-point-solution/"

timeComplexity: "O(r * (c + r))"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]"
    output: "41"
    explanation: "41 is the minimum in row 3 (elements are 41, 42, 43, 44) and the maximum in column 0 (elements are 11, 21, 31, 41)."
  - input: "mat = [[1, 2, 3], [4, 5, 6], [10, 8, 9]]"
    output: "8"
    explanation: "8 is the minimum in row 2 (elements are 10, 8, 9) and the maximum in column 1 (elements are 2, 5, 8)."

constraints:
  - "1 <= mat.length, mat[0].length <= 500"
  - "1 <= mat[i][j] <= 10^5"
  - "Matrix elements are distinct"

realWorld:
  - title: "Game Theory Minimax Equilibrium"
    description: "Determining pure-strategy Nash equilibrium in zero-sum games where the row player minimizes loss and column player maximizes return."
  - title: "Financial Risk Arbitrage Saddle Points"
    description: "Locating stationary asset hedging points where local downside exposure is minimal while upside covariance across assets is maximal."
  - title: "Geographical Topography Pass Detection"
    description: "Detecting mountain pass cols in digital elevation models (DEM) where altitude is minimum along a crest line but maximum across valleys."
---
<!-- All rights reserved to CSRGO DSA -->

Given an $r \times c$ matrix `mat` of distinct positive integers, find its **saddle point**.

A **saddle point** of a matrix is defined as an element that is simultaneously:
1. The **minimum** element in its row.
2. The **maximum** element in its column.

Return the value of the saddle point. If no saddle point exists, return `-1`.
