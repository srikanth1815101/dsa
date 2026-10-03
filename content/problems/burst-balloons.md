---
title: "Burst Balloons"
date: 2026-10-01T01:54:00+05:30
difficulty: "Hard"
topics: ["Dynamic Programming", "Divide and Conquer"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/BurstBalloons/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/BurstBalloons/engineering"

hints:
  - "Think backwards: instead of choosing which balloon to burst first, choose which balloon k to burst LAST in the subarray (i, j)."
  - "When balloon k is burst last, its neighbors are nums[i] and nums[j], giving coins = nums[i] * nums[k] * nums[j] + dp[i][k] + dp[k][j]."

youtubeId: ""

solutionUrl: "/solutions/burst-balloons-solution/"

timeComplexity: "O(n^3)"
spaceComplexity: "O(n^2)"

examples:
  - input: "nums = [3, 1, 5, 8]"
    output: "167"
    explanation: "nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> [] coins = 3*1*5 + 3*5*8 + 1*3*8 + 1*8*1 = 15 + 120 + 24 + 8 = 167"
  - input: "nums = [1, 5]"
    output: "10"
    explanation: "nums = [1, 5] --> [5] --> [] coins = 1*1*5 + 1*5*1 = 5 + 5 = 10"

constraints:
  - "n == nums.length"
  - "1 <= n <= 300"
  - "0 <= nums[i] <= 100"

realWorld:
  - title: "Semiconductor Wafer Laser Slicing"
    description: "Sequencing laser cutting order across microchip dies to minimize heat stress deformation on neighboring dies."
  - title: "Resource Decommissioning in Cloud Infrastructure"
    description: "Optimizing shutdown sequences for interconnected virtual machines to maximize energy recapture bonuses."
  - title: "Demolition Sequencing for High-Rise Structures"
    description: "Determining structural pillar detonation order to maximize gravitational collapse efficiency."
weight: 55
---
<!-- All rights reserved to CSRGO DSA -->

You are given `n` balloons, indexed from `0` to `n - 1`. Each balloon is painted with a number on it represented by an array `nums`. You are asked to burst all the balloons.

If you burst the $i^{th}$ balloon, you will get `nums[i - 1] * nums[i] * nums[i + 1]` coins. If `i - 1` or `i + 1` goes out of bounds of the array, then treat it as if there is a balloon with a `1` painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.
