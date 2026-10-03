---
title: "Jump Game II"
date: 2026-10-01T02:45:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Greedy", "Dynamic Programming"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/JumpGameII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/JumpGameII/engineering"

hints:
  - "Think of this as a BFS on an array, where each jump defines a level/range."
  - "Greedily extend the current jump boundary to the maximum reachable index among all reachable positions."

youtubeId: ""

solutionUrl: "/solutions/jump-game-ii-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [2,3,1,1,4]"
    output: "2"
    explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index. The minimum number of jumps is 2."
  - input: "nums = [2,3,0,1,4]"
    output: "2"
    explanation: "Jump 1 step to index 1, then jump 3 steps to the last index."

constraints:
  - "1 <= nums.length <= 10^4"
  - "0 <= nums[i] <= 1000"
  - "It is guaranteed that you can reach nums[n - 1]."

realWorld:
  - title: "Multi-hop Satellite Data Relay"
    description: "Minimizing satellite forwarding hops required to transmit high-throughput telemetry to ground stations."
  - title: "Public Transit Transfer Minimization"
    description: "Calculating the minimum number of bus/train transfers across route service stops."
  - title: "High-Frequency Packet Routing"
    description: "Minimizing core switch hops along optical cross-connect paths to decrease latency."
weight: 106
---
<!-- All rights reserved to CSRGO DSA -->

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:
- `0 <= j <= nums[i]` and
- `i + j < n`

Return *the minimum number of jumps to reach* `nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.
