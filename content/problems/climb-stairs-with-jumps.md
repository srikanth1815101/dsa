---
title: "Climb Stairs with Jumps"
date: 2026-09-27T20:12:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Recursion", "Greedy"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ClimbStairsWithJumps/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ClimbStairsWithJumps/engineering"

hints:
  - "Define dp[i] as the total number of distinct paths to reach the top stair n starting from stair i."
  - "From stair i, you can take any step size from 1 up to arr[i]. Sum dp[i + j] for all valid jumps where i + j <= n."

youtubeId: ""

solutionUrl: "/solutions/climb-stairs-with-jumps-solution/"

timeComplexity: "O(n * k)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 2, 0, 4, 1, 2]"
    output: "6"
    explanation: "Starting from stair 0 with target stair 6, there are 6 distinct valid jump paths leading to stair 6."
  - input: "arr = [2, 3, 0, 1]"
    output: "2"
    explanation: "The two valid paths from stair 0 to stair 4 are (0 -> 1 -> 4) and (0 -> 1 -> 2 -> 4 - blocked by 0 jump at 2, so 0 -> 2 -> dead end, leaving 2 valid sequences: 0->1->4 and 0->1->3->4)."

constraints:
  - "0 <= arr.length <= 10^4"
  - "0 <= arr[i] <= 50"
  - "The total number of paths fits within a 32-bit signed integer"

realWorld:
  - title: "Variable Packet Flight Window Routing"
    description: "Determining distinct transmission hop sequences when router buffer capacities restrict forward frame jump sizes per link."
  - title: "Robot Variable Stride Terrain Traversal"
    description: "Computing navigation paths across non-uniform stepping stones where foot-grip limits determine maximum reach from each rock."
  - title: "Compiler Basic-Block Branch Analysis"
    description: "Analyzing execution flow graphs where conditional jumps allow jumping forward across variable instruction offsets."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `arr` of size `n`, where `arr[i]` represents the maximum number of steps you can jump forward from stair `i`.

You start at stair `0` and want to reach the top at stair `n`. In each move from stair `i`, you can jump any distance `j` such that `1 <= j <= arr[i]` and `i + j <= n`.

Calculate and return the total number of distinct ways to climb from stair `0` to stair `n`.
