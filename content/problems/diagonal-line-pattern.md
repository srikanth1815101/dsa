---
title: "Diagonal Line Pattern"
date: 2026-09-24T22:58:53+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Accenture"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DiagonalLinePattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DiagonalLinePattern/engineering"

hints:
  - "Notice that in each row i (from 1 to n), the star appears at column index i, which means there are (i - 1) leading tab characters."
  - "For each row, print (i - 1) tabs (\t) followed by a single star (*), then append a newline (\n) without any trailing tab or whitespace."

youtubeId: ""

solutionUrl: "/solutions/diagonal-line-pattern-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 3"
    output: "*\n\t*\n\t\t*\n"
    explanation: "For n = 3, row 1 has 0 leading tabs and 1 star, row 2 has 1 leading tab and 1 star, and row 3 has 2 leading tabs and 1 star. Each row ends with a newline."
  - input: "n = 1"
    output: "*\n"
    explanation: "For n = 1, there is a single row with 0 leading tabs and 1 star terminated by a newline."

constraints:
  - "1 <= n <= 100"
  - "n is an integer"
  - "Each row terminates with a newline (\n) with no trailing whitespace or tab"

realWorld:
  - title: "Main Diagonal Matrix Traversal"
    description: "Linear algebra engines and spreadsheet processors isolate the principal trace diagonal of 2D grids using coordinate match logic."
  - title: "Terminal Cascading Ladders"
    description: "Build tools and CLI task runners draw descending process steps and diagonal transition lines across multi-step execution logs."
  - title: "Raycasting Slope Tracing"
    description: "Game engines and raytracers step through uniform spatial voxel grids along 45-degree angle vectors by incrementing horizontal and vertical strides equally."
---

<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, generate a diagonal line pattern of asterisks (`*`) from the top-left to the bottom-right corner across `n` rows.

In this pattern:
- The pattern spans `n` rows and `n` logical columns.
- The `i`-th row (where `1 <= i <= n`) begins with `i - 1` tab characters (`\t`) followed by a single asterisk (`*`).
- Every row (including the final row) must end with a newline character (`\n`).
- There must be no trailing tab or whitespace after the star on any row.
