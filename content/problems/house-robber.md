---
title: "House Robber"
date: 2026-10-01T01:47:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays"]
companies: ["Amazon", "Google", "Flipkart"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/HouseRobber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/HouseRobber/engineering"

hints:
  - "Use dynamic programming: at house i, you either rob house i and add it to max from i-2, or skip house i and keep max from i-1."
  - "Optimize space to O(1) by maintaining two variables for the previous two house values: rob = max(prev1, prev2 + nums[i])."

youtubeId: ""

solutionUrl: "/solutions/house-robber-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 2, 3, 1]"
    output: "4"
    explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4."
  - input: "nums = [2, 7, 9, 3, 1]"
    output: "12"
    explanation: "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12."

constraints:
  - "1 <= nums.length <= 100"
  - "0 <= nums[i] <= 400"
  - "Adjacent houses have connected security systems and cannot both be broken into on the same night."
realWorld:
  - title: "Non-Adjacent Marketing Banner Scheduling"
    description: "Selecting display advertising slots on a page timeline without triggering ad fatigue penalties between consecutive slots."
  - title: "Processor Thermal Cooldown Scheduling"
    description: "Scheduling high-temperature compute cycles on server cores with alternating cooldown periods to avoid throttling."
  - title: "Cell Tower Frequency Channel Allocation"
    description: "Assigning broadcast transmission power across adjacent cellular cells to maximize signal without cross-channel interference."
weight: 48
---
<!-- All rights reserved to CSRGO DSA -->

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
