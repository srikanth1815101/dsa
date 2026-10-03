---
title: "House Robber II"
date: 2026-10-01T01:48:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays"]
companies: ["Amazon", "Google", "Flipkart"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/HouseRobberII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/HouseRobberII/engineering"

hints:
  - "Since the houses form a circle, the first and last houses are adjacent and cannot both be robbed."
  - "Decompose into two standard House Robber subproblems: one from index 0 to n-2, and another from index 1 to n-1; return the maximum."

youtubeId: ""

solutionUrl: "/solutions/house-robber-ii-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [2, 3, 2]"
    output: "3"
    explanation: "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses in a circle."
  - input: "nums = [1, 2, 3, 1]"
    output: "4"
    explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4."

constraints:
  - "1 <= nums.length <= 100"
  - "0 <= nums[i] <= 1000"
  - "Houses are arranged in a circle, so the first and last houses are neighbors."
realWorld:
  - title: "Circular Highway Billboard Campaign"
    description: "Placing advertising billboards along a ring highway while preventing adjacent competitive branding conflicts."
  - title: "Round-Robin Task Power Modulation"
    description: "Throttling cyclic batch worker jobs in a ring queue to prevent consecutive high-draw battery drains."
  - title: "Ring Network Repeater Amplification"
    description: "Activating optical signal amplifiers in a metro ring network without causing adjacent cross-phase distortion."
weight: 49
---
<!-- All rights reserved to CSRGO DSA -->

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle**. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
