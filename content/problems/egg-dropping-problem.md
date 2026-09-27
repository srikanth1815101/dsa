---
title: "Egg Dropping Problem"
date: 2026-09-27T20:40:00+05:30
difficulty: "Hard"
topics: ["Dynamic Programming", "Mathematics", "Binary Search"]
companies: ["Google", "Amazon", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/EggDroppingProblem/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/EggDroppingProblem/engineering"

hints:
  - "Instead of finding the minimum moves for given floors, invert the problem: what is the maximum number of floors you can check with m moves and k eggs?"
  - "The recurrence is dp[m][k] = dp[m - 1][k - 1] + dp[m - 1][k] + 1. Stop when dp[m][k] >= n."

youtubeId: ""

solutionUrl: "/solutions/egg-dropping-problem-solution/"

timeComplexity: "O(k * log n)"
spaceComplexity: "O(k)"

examples:
  - input: "k = 1, n = 2"
    output: "2"
    explanation: "With 1 egg, we must test each floor sequentially from 1 to 2, requiring 2 drops in the worst case."
  - input: "k = 2, n = 6"
    output: "3"
    explanation: "Drop from floor 3. If it breaks, test floors 1 and 2 with the second egg. If not, drop from floor 5. Worst case moves = 3."

constraints:
  - "1 <= k <= 100"
  - "1 <= n <= 10^4"
  - "An egg that survives a drop can be used again."

realWorld:
  - title: "Hardware Stress Threshold Testing"
    description: "Finding the maximum thermal or voltage load a physical semiconductor component can sustain using limited test chips."
  - title: "Network Rate Limiting Boundary Discovery"
    description: "Probing upstream API throughput capacity without triggering catastrophic circuit breaker trips using exponential inquiry bounds."
  - title: "Aerospace Structural Material Failure Profiling"
    description: "Determining structural rupture tolerances for expensive physical prototype airframe components."
---
<!-- All rights reserved to CSRGO DSA -->

You are given `k` identical eggs and a building with `n` floors labeled from `1` to `n`.

There exists a floor `f` where `0 <= f <= n` such that any egg dropped from a floor higher than `f` will break, and any egg dropped from or below floor `f` will not break.

In each move, you may take an unbroken egg and drop it from any floor `x` ($1 \le x \le n$). If the egg breaks, you cannot use it again. If the egg does not break, you may reuse it in subsequent moves.

Return the **minimum number of moves** that you need to determine with certainty what the value of `f` is.
