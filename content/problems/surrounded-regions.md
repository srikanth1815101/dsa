---
title: "Surrounded Regions"
date: 2026-10-01T02:43:00+05:30
difficulty: "Medium"
topics: ["Graph", "DFS", "BFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SurroundedRegions/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SurroundedRegions/engineering"

hints:
  - "Any 'O' on the boundary, or connected to an 'O' on the boundary, can never be captured."
  - "Use DFS from all boundary 'O' cells, temporarily marking them as '#'. Then turn all remaining 'O' into 'X', and restore '#' back to 'O'."

youtubeId: ""

solutionUrl: "/solutions/surrounded-regions-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]"
    output: "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]"
    explanation: "The 'O' at (3,1) is on the boundary so it cannot be captured. All interior 'O' cells are captured and turned into 'X'."
  - input: "board = [[\"X\"]]"
    output: "[[\"X\"]]"
    explanation: "A single 'X' cell remains unchanged."

constraints:
  - "1 <= board.length, board[i].length <= 200"
  - "board[i][j] is either 'X' or 'O'."

realWorld:
  - title: "Go Board Territory Evaluation"
    description: "Automated capturing of enclosed enemy stones completely encircled on 2D game grids."
  - title: "Image Segmentation Hole Infilling"
    description: "Filling enclosed interior void holes in binary silhouette computer vision masks."
  - title: "PCB Ground Pour Isolation"
    description: "Detecting and etching away floating copper pockets not connected to outer chassis ground planes."
weight: 104
---
<!-- All rights reserved to CSRGO DSA -->

Given an `m x n` matrix `board` containing `'X'` and `'O'`, **capture all regions** that are 4-directionally surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region. Any `'O'` that is on the border, or connected 4-directionally to an `'O'` on the border, is **not** flipped.

Return the modified `board`.
