---
title: "Largest Rectangle in Binary Matrix"
date: 2026-10-01T02:38:00+05:30
difficulty: "Hard"
topics: ["Matrix", "Stack", "Dynamic Programming"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LargestRectangleInBinaryMatrix/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LargestRectangleInBinaryMatrix/engineering"

hints:
  - "Convert each row into a histogram problem: height[j] represents the number of consecutive '1's ending at row i in column j."
  - "For each row's histogram, use a monotonic stack to find the largest rectangular area in O(C) time."

youtubeId: ""

solutionUrl: "/solutions/largest-rectangle-in-binary-matrix-solution/"

timeComplexity: "O(R * C)"
spaceComplexity: "O(C)"

examples:
  - input: "matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]"
    output: "6"
    explanation: "The maximal rectangle is formed by rows 1 and 2, columns 2 through 4, giving area 2 * 3 = 6."
  - input: "matrix = [[\"0\"]]"
    output: "0"
    explanation: "There are no '1's in the matrix, so the maximal rectangle area is 0."

constraints:
  - "1 <= matrix.length <= 200"
  - "1 <= matrix[i].length <= 200"
  - "matrix[i][j] is either '0' or '1'."

realWorld:
  - title: "Silicon Wafer Defect Analysis"
    description: "Identifying the maximal contiguous defect-free rectangular zone on semiconductor silicon wafers."
  - title: "Computer Vision Object Bounding"
    description: "Locating maximal rectangular regions of interest within binary segmented visual masks."
  - title: "Architectural Space Planning"
    description: "Computing maximum continuous unobstructed floor area from 2D architectural occupancy grids."
weight: 99
---
<!-- All rights reserved to CSRGO DSA -->

Given a 2D binary matrix `matrix` filled with `'0'`s and `'1'`s, find the largest rectangle containing only `'1'`s and return its area.
