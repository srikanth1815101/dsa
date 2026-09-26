---
title: "Search in Sorted 2D Matrix"
date: 2026-09-26T19:26:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Binary Search"]
companies: ["Oracle", "Amazon", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SearchInSorted2DMatrix/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SearchInSorted2DMatrix/engineering"

hints:
  - "Start the search from an asymmetric corner where the two available moves provide opposite directional feedback: top-right (0, n - 1) or bottom-left (m - 1, 0)."
  - "From the top-right corner, moving left decreases the value, while moving down increases the value. Compare mat[i][j] with target to eliminate an entire row or column at each step."

youtubeId: ""

solutionUrl: "/solutions/search-in-sorted-2d-matrix-solution/"

timeComplexity: "O(m + n)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5"
    output: "true"
    explanation: "Starting at top-right (15), moves left past 11, 7, 4, moves down to 5, and finds the target."
  - input: "mat = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 20"
    output: "false"
    explanation: "20 does not appear in the matrix."

constraints:
  - "m == mat.length, n == mat[i].length"
  - "1 <= m, n <= 500"
  - "-10^9 <= mat[i][j], target <= 10^9"
  - "Elements in each row are sorted in ascending order"
  - "Elements in each column are sorted in ascending order"

realWorld:
  - title: "Database 2D B-Tree Composite Lookups"
    description: "Filtering record candidate sets in 2D indexed tables where attributes are monotonically ordered along both dimension keys."
  - title: "Semiconductor Thermal Anomaly Localization"
    description: "Tracking hotspot temperatures on continuous multi-sensor semiconductor wafer heatmaps sorted along spatial gradient axes."
  - title: "Multi-Attribute Financial Risk Screening"
    description: "Searching mortgage bond portfolios pre-sorted by credit score rows and loan-to-value column ratios."
---
<!-- All rights reserved to CSRGO DSA -->

Write an efficient algorithm that searches for a value `target` in an $m \times n$ integer matrix `mat`. This matrix has the following properties:
- Integers in each row are sorted in ascending order from left to right.
- Integers in each column are sorted in ascending order from top to bottom.

Return `true` if `target` exists in `mat`, otherwise return `false`.
