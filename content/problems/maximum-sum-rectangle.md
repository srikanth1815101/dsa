---
title: "Maximum Sum Rectangle"
date: 2026-09-26T19:43:00+05:30
difficulty: "Hard"
topics: ["Matrix", "Dynamic Programming", "Prefix Sum"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MaximumSumRectangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MaximumSumRectangle/engineering"

hints:
  - "Reduce the 2D problem to 1D Kadane's algorithm by fixing the left and right column boundaries."
  - "For every pair of left and right columns, maintain a running 1D row-sum array temp of size R, where temp[i] is the sum of row i between the left and right columns. Run Kadane's algorithm on temp to find the maximum submatrix sum."

youtubeId: ""

solutionUrl: "/solutions/maximum-sum-rectangle-solution/"

timeComplexity: "O(C^2 * R)"
spaceComplexity: "O(R)"

examples:
  - input: "mat = [[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]]"
    output: "29"
    explanation: "The contiguous submatrix bounded by rows [1, 3] and columns [1, 3] yields sum (-3+4+2) + (8+10+1) + (-1+1+7) = 29."
  - input: "mat = [[-1, -2], [-3, -4]]"
    output: "-1"
    explanation: "When all values are negative, the single largest element [-1] is the maximum sum rectangle."

constraints:
  - "1 <= mat.length, mat[0].length <= 300"
  - "-10^5 <= mat[i][j] <= 10^5"

realWorld:
  - title: "Agricultural Soil Fertility Zone Mapping"
    description: "Identifying contiguous rectangular land parcels maximizing aggregated agricultural yield based on 2D soil nutrient sensor grids."
  - title: "Microprocessor Thermal Hotspot Localization"
    description: "Detecting the rectangular die region generating peak accumulated heat dissipation to position cooling heat sinks."
  - title: "Financial Market Spatial-Temporal Arbitrage"
    description: "Finding contiguous sub-intervals across multi-asset cross-covariance matrices yielding maximal net profit margins."
---
<!-- All rights reserved to CSRGO DSA -->

Given a 2D integer matrix `mat` of dimensions $R \times C$, find and return the **maximum sum of a contiguous rectangular submatrix**.

The submatrix must be rectangular, non-empty, and bounded by two horizontal rows and two vertical columns.
