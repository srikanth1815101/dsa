---
title: "Sudoku Solver"
date: 2026-09-26T21:07:00+05:30
difficulty: "Hard"
topics: ["Matrix", "Backtracking", "Recursion"]
companies: ["Oracle", "Samsung", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SudokuSolver/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SudokuSolver/engineering"

hints:
  - "Scan the board to locate an empty cell marked with '.'."
  - "Try placing each digit from '1' to '9'. Check if the placement satisfies row, column, and 3x3 subgrid uniqueness constraints."
  - "If placing a digit leads to a solution, return true. Otherwise, backtrack by resetting the cell to '.' and try the next digit."

youtubeId: ""

solutionUrl: "/solutions/sudoku-solver-solution/"

timeComplexity: "O(9^(m))"
spaceComplexity: "O(1)"

examples:
  - input: "board = [[\"5\",\"3\",\".\",...]]"
    output: "true"
    explanation: "The 9x9 board is filled completely in-place with digits 1 through 9 satisfying all Sudoku constraints."

constraints:
  - "board.length == 9"
  - "board[i].length == 9"
  - "board[i][j] is a digit '1'-'9' or '.'"
  - "It is guaranteed that the input board has a unique solution."

realWorld:
  - title: "Automated Constraint Satisfaction Scheduling"
    description: "Assigning employee work shifts adhering to mutually exclusive worker and department constraints."
  - title: "SAT Solver Benchmark Problem"
    description: "Evaluating exact-cover algorithm X and Dancing Links techniques in boolean satisfiability."
  - title: "Sensor Frequency Band Allocation"
    description: "Allocating orthogonal wireless channels across spatial geographic honeycomb clusters."
---
<!-- All rights reserved to CSRGO DSA -->

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:
1. Each of the digits `1-9` must occur exactly once in each row.
2. Each of the digits `1-9` must occur exactly once in each column.
3. Each of the digits `1-9` must occur exactly once in each of the `9` `3x3` sub-boxes of the grid.

The `'.'` character indicates empty cells. The function should modify `board` in-place and return `true` when solved.
