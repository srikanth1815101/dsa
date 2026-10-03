---
title: "Design Tic Tac Toe"
date: 2026-10-01T02:50:00+05:30
difficulty: "Medium"
topics: ["Design", "Arrays", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignTicTacToe/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignTicTacToe/engineering"

hints:
  - "Instead of inspecting the whole board after each move, maintain counters for each row, column, diagonal, and anti-diagonal."
  - "Player 1 increments counters by +1 and Player 2 decrements counters by -1 (or uses separate trackers)."

youtubeId: ""

solutionUrl: "/solutions/design-tic-tac-toe-solution/"

timeComplexity: "O(1) per move"
spaceComplexity: "O(n)"

examples:
  - input: "n = 3, moves = [[0,0,1],[0,2,2],[2,2,1],[1,1,2],[2,0,1],[1,0,2],[2,1,1]]"
    output: "[0, 0, 0, 0, 0, 0, 1]"
    explanation: "Player 1 wins on the 7th move by completing the bottom row (row 2)."
  - input: "n = 2, moves = [[0,0,1],[0,1,2],[1,1,1]]"
    output: "[0, 0, 1]"
    explanation: "Player 1 wins on the diagonal [(0,0), (1,1)]."

constraints:
  - "2 <= n <= 100"
  - "moves[i].length == 3"
  - "0 <= row, col < n"
  - "player is either 1 or 2."
  - "Every move is placed on an empty cell."

realWorld:
  - title: "Online Multiplayer Game State Validation"
    description: "Instant O(1) win-condition detection in server-side turn-based board game arbiters."
  - title: "Financial Candlestick Alignment Detection"
    description: "Tracking multi-series linear patterns across matrix dimension axes in technical analysis."
  - title: "Embedded Industrial Controller Interlock"
    description: "Monitoring continuous axis sensor triggers along orthogonal matrix inspection lines."
weight: 111
---
<!-- All rights reserved to CSRGO DSA -->

Design a Tic-tac-toe game that is played on an `n x n` grid between two players.

A move is guaranteed to be valid and is placed on an empty cell. Once a winning condition is reached, the winner is returned.

Implement the `solve` function that accepts `n` (the board dimensions) and `moves` (an array where `moves[i] = [row, col, player]`), and returns an array where each element is:
- `0` if no player has won after the move,
- `1` if Player 1 wins after the move,
- `2` if Player 2 wins after the move.
