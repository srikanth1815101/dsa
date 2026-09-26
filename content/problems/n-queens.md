---
title: "N Queens"
date: 2026-09-26T20:59:00+05:30
difficulty: "Hard"
topics: ["Backtracking", "Recursion", "Matrix"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/NQueens/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/NQueens/engineering"

hints:
  - "Place queens row by row. At each row, iterate over all columns and check if placing a queen is safe."
  - "A placement is safe if no other queen exists in the same column, upper-left diagonal, or upper-right diagonal."

youtubeId: ""

solutionUrl: "/solutions/n-queens-solution/"

timeComplexity: "O(n!)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 4"
    output: "[[ \".Q..\", \"...Q\", \"Q...\", \"..Q.\" ], [ \"..Q.\", \"Q...\", \"...Q\", \".Q..\" ]]"
    explanation: "Two distinct 4-queens board configurations."
  - input: "n = 1"
    output: "[[\"Q\"]]"
    explanation: "Single queen on a 1x1 board."

constraints:
  - "1 <= n <= 9"

realWorld:
  - title: "VLSI Circuit Parallel Crossbar Allocation"
    description: "Assigning non-interfering communication channels across chip routing arrays."
  - title: "Cellular Tower Frequency Assignment"
    description: "Allocating orthogonal radio channels to avoid co-channel geographic interference."
  - title: "Constraint Satisfaction Problem (CSP) Solvers"
    description: "Benchmarking backtracking search and constraint propagation heuristics."
---
<!-- All rights reserved to CSRGO DSA -->

The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return all distinct solutions to the **n-queens puzzle**. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.
