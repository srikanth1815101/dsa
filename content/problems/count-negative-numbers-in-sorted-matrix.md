---
title: "Count Negative Numbers in Sorted Matrix"
date: 2026-09-26T19:44:00+05:30
difficulty: "Easy"
topics: ["Matrix", "Binary Search", "Two Pointers"]
companies: ["Google", "Amazon", "Samsung"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CountNegativeNumbersInSortedMatrix/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CountNegativeNumbersInSortedMatrix/engineering"

hints:
  - "Since both rows and columns are sorted in non-increasing order, start from an asymmetric corner such as bottom-left (m - 1, 0)."
  - "If grid[r][c] < 0, then all elements to its right in row r are also negative. Add (n - c) to count and decrement row r. Otherwise, increment column c."

youtubeId: ""

solutionUrl: "/solutions/count-negative-numbers-in-sorted-matrix-solution/"

timeComplexity: "O(m + n)"
spaceComplexity: "O(1)"

examples:
  - input: "grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]"
    output: "8"
    explanation: "There are 8 negative numbers in the matrix."
  - input: "grid = [[3, 2], [1, 0]]"
    output: "0"
    explanation: "There are no negative numbers in the matrix."

constraints:
  - "m == grid.length, n == grid[i].length"
  - "1 <= m, n <= 100"
  - "-100 <= grid[i][j] <= 100"
  - "Rows are sorted in non-increasing order"
  - title: "Financial Loss Exposure Auditing"
    description: "Counting deficit asset positions across credit-rating vs duration asset portfolios sorted descending by creditworthiness."
  - title: "Cryogenic Sensor Cold-Zone Mapping"
    description: "Tallying sub-zero measurement cells across cryogenic cooling grid sensors arranged monotonically along temperature gradients."
  - title: "RF Attenuation Dead-Zone Counting"
    description: "Counting dead-zone channels in cellular signal gain matrices sorted monotonically by transmitter distance and elevation."
---
<!-- All rights reserved to CSRGO DSA -->

Given an $m \times n$ matrix `grid` which is sorted in non-increasing order both row-wise and column-wise, return the number of **negative numbers** in `grid`.

You must design an algorithm that runs in $O(m + n)$ time complexity.
