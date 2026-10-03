---
title: "Pascal's Triangle"
date: 2026-10-01T01:08:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Dynamic Programming", "Mathematics"]
companies: ["Amazon", "Apple", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PascalsTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PascalsTriangle/engineering"

hints:
  - "Each number in the triangle is the sum of the two numbers directly above it in the previous row."
  - "The first and last values of each row are always 1."

youtubeId: ""

solutionUrl: "/solutions/pascals-triangle-solution/"

timeComplexity: "O(numRows^2)"
spaceComplexity: "O(numRows^2)"

examples:
  - input: "numRows = 5"
    output: "[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]"
    explanation: "Each row begins and ends with 1, with intermediate values derived from the sum of the adjacent pair in the row above."
  - input: "numRows = 1"
    output: "[[1]]"
    explanation: "A single row Pascal's triangle contains only [1]."

constraints:
  - "1 <= numRows <= 30"
  - "Each row begins and ends with the value 1."
  - "Intermediate elements are calculated as row[i][j] = row[i-1][j-1] + row[i-1][j]."

realWorld:
  - title: "Binomial Probability Tables"
    description: "Precomputing combinatorial coefficients nCr for rapid lookup in discrete probabilistic simulations."
  - title: "Bezier Spline Evaluation"
    description: "Deriving Bernstein basis polynomials for curve and surface tessellation in geometric rendering pipelines."
  - title: "Error Correcting Code Matrices"
    description: "Constructing parity generator generator polynomials in forward error correction transmissions."
weight: 9
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `numRows`, return the first `numRows` of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it.
