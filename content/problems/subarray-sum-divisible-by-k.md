---
title: "Subarray Sum Divisible by K"
date: 2026-10-01T02:23:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Prefix Sum", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubarraySumDivisibleByK/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubarraySumDivisibleByK/engineering"

hints:
  - "Two prefix sums with the same remainder when divided by k have a difference that is divisible by k."
  - "Maintain a hash map or remainder array tracking frequencies of (prefixSum % k + k) % k and accumulate count combinations."

youtubeId: ""

solutionUrl: "/solutions/subarray-sum-divisible-by-k-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(k)"

examples:
  - input: "nums = [4, 5, 0, -2, -3, 1]`, `k = 5"
    output: "** `7` **"
    explanation: "** There are 7 subarrays with a sum divisible by k = 5: `[4, 5, 0, -2, -3, 1]`, `[5]`, `[5, 0]`, `[5, 0, -2, -3]`, `[0]`, `[0, -2, -3]`, `[-2, -3]`"
  - input: "nums = [5]`, `k = 9"
    output: "** `0` **"
    explanation: "** The only non-empty subarray is `[5]`, and 5 is not divisible by 9."

constraints:
  - "0 <= nums.length <= 3 * 10^4"
  - "-10^4 <= nums[i] <= 10^4"
  - "2 <= k <= 10^4"

realWorld:
  - title: "Load Balancer Round-Robin Job Distribution"
    description: "Finding continuous time slots where total workload requests partition evenly across k worker cluster pools."
  - title: "Memory Block Alignment Verification"
    description: "Identifying contiguous memory allocations whose aggregate byte size aligns cleanly with k-byte cache lines."
  - title: "Shift Scheduling in Manufacturing"
    description: "Finding manufacturing sequences where total assembly labor hours distribute evenly across k working shifts."
weight: 84
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` and an integer `k`, return the total number of non-empty subarrays that have a sum divisible by `k`.

A **subarray** is a contiguous part of an array.
