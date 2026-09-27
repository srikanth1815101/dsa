---
title: "Min Moves Climbing Stairs"
date: 2026-09-27T20:13:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MinMovesClimbingStairs/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MinMovesClimbingStairs/engineering"

hints:
  - "Use a dp array of size n + 1 where dp[i] represents the minimum jumps required to reach stair n from stair i."
  - "From stair i, query the minimum value among dp[i + j] for all valid jumps 1 <= j <= arr[i]. If reachable, dp[i] = 1 + min."

youtubeId: ""

solutionUrl: "/solutions/min-moves-climbing-stairs-solution/"

timeComplexity: "O(n * k)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 2, 4, 2, 0, 2, 3, 1, 2, 2]"
    output: "4"
    explanation: "One optimal route of 4 jumps is: stair 0 -> stair 2 -> stair 6 -> stair 8 -> stair 10."
  - input: "arr = [1, 1, 1, 4, 9, 8, 1, 1, 1, 0, 1]"
    output: "5"
    explanation: "Reaching the destination stair 11 requires a minimum of 5 moves."

constraints:
  - "0 <= arr.length <= 10^4"
  - "0 <= arr[i] <= 50"
  - "Return -1 if it is impossible to reach stair n from stair 0"

realWorld:
  - title: "Shortest Hop Packet Delivery"
    description: "Finding the minimal number of store-and-forward routing hops across constrained-range ad-hoc wireless transceivers."
  - title: "Automated Guided Vehicle Battery Efficiency"
    description: "Minimizing acceleration/deceleration cycles for warehouse robots navigating across discrete recharging grid pads."
  - title: "Compiler Basic Block Jump Minimization"
    description: "Minimizing intermediate branch instructions to reduce instruction cache misses in generated assembly code."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `arr` of size `n`, where `arr[i]` represents the maximum number of steps you can jump forward from stair `i`.

You start at stair `0` and want to reach the top at stair `n`. In each move from stair `i`, you can jump any distance `j` such that `1 <= j <= arr[i]` and `i + j <= n`.

Determine the minimum number of moves required to climb from stair `0` to stair `n`. If it is impossible to reach the destination, return `-1`.
