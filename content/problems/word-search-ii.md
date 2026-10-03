---
title: "Word Search II"
date: 2026-10-01T02:33:00+05:30
difficulty: "Hard"
topics: ["Trie", "Backtracking", "Matrix"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WordSearchII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WordSearchII/engineering"

hints:
  - "Build a Trie of all dictionary words so common prefixes are searched simultaneously across the board."
  - "Run backtracking DFS from each board cell; prune branches early when the current board sequence is not in the Trie."

youtubeId: ""

solutionUrl: "/solutions/word-search-ii-solution/"

timeComplexity: "O(M * N * 4^L)"
spaceComplexity: "O(Total characters in words)"

examples:
  - input: "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]"
    output: "[\"eat\", \"oath\"]"
    explanation: "Words 'eat' and 'oath' can be formed by sequentially adjacent characters on the grid."
  - input: "board = [[\"a\",\"b\"],[\"c\",\"d\"]], words = [\"abcb\"]"
    output: "[]"
    explanation: "No cell can be used more than once in forming a word."

constraints:
  - "m == board.length, n == board[i].length; 1 <= m, n <= 12"
  - "board[i][j] is a lowercase English letter."
  - "1 <= words.length <= 3 * 10^4; 1 <= words[i].length <= 10"
  - "All words[i] are unique."

realWorld:
  - title: "Boggle Game Word Discovery Engines"
    description: "Finding all valid English dictionary words on 2D letter grids in mobile puzzle games."
  - title: "Bioinformatics 2D Sequence Motif Discovery"
    description: "Locating spatial target peptide sequences on micro-array hybridization chips."
  - title: "Document OCR Matrix Cross-Referencing"
    description: "Validating multi-directional text sequences extracted from low-resolution table images."
weight: 94
---
<!-- All rights reserved to CSRGO DSA -->

Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
