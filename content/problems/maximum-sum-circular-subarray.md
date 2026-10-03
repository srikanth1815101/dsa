---
title: "Maximum Sum Circular Subarray"
date: 2026-10-01T01:05:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Dynamic Programming"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumSumCircularSubarray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumSumCircularSubarray/engineering"

hints:
  - "A circular subarray either lies entirely within the array (standard Kadane's) or wraps around the boundary."
  - "A wrapping subarray's sum can be found by subtracting the minimum subarray sum from the total sum."

youtubeId: ""

solutionUrl: "/solutions/maximum-sum-circular-subarray-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, -2, 3, -2]"
    output: "3"
    explanation: "Subarray [3] has maximum sum 3."
  - input: "nums = [5, -3, 5]"
    output: "10"
    explanation: "Subarray [5, 5] wrapping around the ends has maximum sum 5 + 5 = 10."

constraints:
  - "n == nums.length"
  - "1 <= n <= 3 * 10^4"
  - "-3 * 10^4 <= nums[i] <= 3 * 10^4"

realWorld:
  - title: "Circular Ring Buffer Load Balancing"
    description: "Identifying maximal resource utilization across wrapped buffer windows in cyclic scheduler engines."
  - title: "Rotating Horizon Energy Usage"
    description: "Finding peak demand periods spanning across midnight boundary rollovers in continuous 24-hour smart meter monitoring."
  - title: "Round-Robin Service Latency Bursts"
    description: "Detecting sustained latency spikes that straddle the start and end of circular cluster worker allocations."
weight: 6
---
<!-- All rights reserved to CSRGO DSA -->

Given a **circular integer array** `nums` of length `n`, return the maximum possible sum of a non-empty **subarray** of `nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. (Formally, for a subarray `nums[i], nums[i+1], ..., nums[j]`, there does not exist `k1, k2` such that `k1 % n == k2 % n`).
