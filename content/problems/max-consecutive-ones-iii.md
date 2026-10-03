---
title: "Max Consecutive Ones III"
date: 2026-10-01T02:20:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sliding Window"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaxConsecutiveOnesIII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaxConsecutiveOnesIII/engineering"

hints:
  - "Rephrase: find the longest subarray containing at most k zeros."
  - "Expand right pointer; if nums[right] == 0, decrement k. While k < 0, if nums[left] == 0 increment k, then increment left."

youtubeId: ""

solutionUrl: "/solutions/max-consecutive-ones-iii-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1,1,1,0,0,0,1,1,1,1,0]`, `k = 2"
    output: "** `6` **"
    explanation: "** Flipping the 0s at indices 5 and 10 gives `[1,1,1,0,0,1,1,1,1,1,1]`, producing 6 consecutive 1s from index 5 to index 10."
  - input: "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]`, `k = 3"
    output: "** `10` **"
    explanation: "** Flipping 0s at indices 5, 9, and 12/13 gives a longest segment of 10 consecutive 1s."

constraints:
  - "0 <= nums.length <= 10^5"
  - "nums[i]` is either `0` or `1"
  - "0 <= k <= nums.length"

realWorld:
  - title: "Fault-Tolerant Network Streaming Buffer"
    description: "Maximizing uninterrupted multimedia streaming duration allowing up to k dropped packet frames."
  - title: "Hardware Circuit Signal Continuity"
    description: "Measuring longest stable high-logic pulse durations permitting up to k transient clock jitter glitches."
  - title: "Quality Control in Continuous Manufacturing"
    description: "Finding longest conveyor belt production runs tolerating at most k minor surface cosmetic defects."
weight: 81
---
<!-- All rights reserved to CSRGO DSA -->

Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`s in the array if you can flip at most `k` `0`s to `1`s.
