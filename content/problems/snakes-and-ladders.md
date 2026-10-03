---
title: "Snakes and Ladders"
date: 2026-10-01T01:43:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "Matrix"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SnakesAndLadders/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SnakesAndLadders/engineering"

hints:
  - "Flatten the Boustrophedon 2D board into a 1D array indexed from 1 to N^2."
  - "Use BFS to find the shortest path from square 1 to N^2, where each step tests dice rolls from 1 to 6 and follows ladders or snakes."

youtubeId: ""

solutionUrl: "/solutions/snakes-and-ladders-solution/"

timeComplexity: "O(N^2)"
spaceComplexity: "O(N^2)"

examples:
  - input: "board = [[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, 35, -1, -1, 13, -1], [-1, -1, -1, -1, -1, -1], [-1, 15, -1, -1, -1, -1]]"
    output: "** `4` **"
    explanation: "** - Start at square 1. - Roll dice to reach square 2, which has a ladder to square 15. - Roll dice to reach square 17, which has a snake to square 13. - Roll dice to reach square 19, ladder to 35. - Roll dice to reach square 36. Total moves = 4."
  - input: "board = [[-1, -1], [-1, 3]]"
    output: "** `1` **"
    explanation: "** From square 1, you can roll a 1 to land on square 2, taking the ladder straight to square 3, or roll directly to square 4 if available. Minimum moves = 1."

constraints:
  - "n == board.length == board[i].length"
  - "2 <= n <= 20"
  - "board[i][j]` is either `-1` or in the range `[1, n^2]`."
  - "The squares labeled `1` and `n^2` do not have any ladders or snakes."

realWorld:
  - title: "Game Engine Turn Simulation"
    description: "Computing optimal player moves and guaranteed win paths in probabilistic board games."
  - title: "Workflow Stage Shortcut Analysis"
    description: "Finding the minimum approvals needed in business process pipelines containing fast-track escalations and setbacks."
  - title: "Telecommunication Packet Hopping with Wormholes"
    description: "Optimizing packet routes across satellite networks featuring point-to-point laser links and atmospheric disruptions."
weight: 44
---
<!-- All rights reserved to CSRGO DSA -->

You are given an `n x n` integer matrix `board` where the cells are labeled from `1` to `n^2` in a Boustrophedon style starting from the bottom left of the board (i.e. `board[n - 1][0]`) and alternating direction each row:
- The bottom row is numbered from left to right.
- The next row up is numbered from right to left.
- This pattern alternates all the way to the top row.

You start on square `1` of the board. In each move, from square `curr`, do the following:
- Choose a destination square `next` with a label in the range `[curr + 1, min(curr + 6, n^2)]`.
- If `next` has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to `next`.
- The game ends when you reach square `n^2`.

A square has a snake or ladder if `board[r][c] != -1`. The destination is `board[r][c]`. You only take a snake or ladder at most once per dice roll.

Return the least number of dice rolls required to reach square `n^2`, or `-1` if it is not possible.
