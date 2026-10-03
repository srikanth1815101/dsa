---
title: "Word Search"
date: 2026-09-26T21:06:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Backtracking", "DFS"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/WordSearch/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/WordSearch/engineering"

hints:
  - "Scan the board to find cells matching the first character word[0]."
  - "Perform a depth-first search in four orthogonal directions (up, down, left, right) matching character by character."
  - "Temporarily mark the current cell with a sentinel character (e.g., '#') to prevent revisiting it during the current path, then restore it upon backtracking."

youtubeId: ""

solutionUrl: "/solutions/word-search-solution/"

timeComplexity: "O(m * n * 4^L)"
spaceComplexity: "O(L)"

examples:
  - input: "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\""
    output: "true"
    explanation: "The word 'ABCCED' can be traced sequentially along adjacent cells."
  - input: "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\""
    output: "true"
    explanation: "The word 'SEE' exists along adjacent cells."

constraints:
  - "m == board.length, n == board[i].length"
  - "1 <= m, n <= 6"
  - "1 <= word.length <= 15"
  - "board and word consist of only lowercase and uppercase English letters."

realWorld:
  - title: "Boggle and Scrabble Board Word Solvers"
    description: "Validating adjacent letter tile connections on puzzle boards against lexicon dictionaries."
  - title: "DNA Sequence Motif Alignment"
    description: "Searching for exact nucleotide motif matches in 2D spatial molecular array representations."
  - title: "OCR Layout Text Reconstruction"
    description: "Reconnecting segmented character bounding boxes along spatial adjacency axes."
---
<!-- All rights reserved to CSRGO DSA -->

Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
