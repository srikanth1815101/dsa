---
title: "Target Sum Subsets (DP)"
date: 2026-09-27T20:16:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TargetSumSubsetsDP/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TargetSumSubsetsDP/engineering"

hints:
  - "Build a 2D boolean DP table dp[n + 1][target + 1] where dp[i][j] indicates whether sum j can be formed using a subset of the first i elements."
  - "For each element, either exclude it (inheriting dp[i - 1][j]) or include it (checking dp[i - 1][j - arr[i - 1]] when j >= arr[i - 1])."

youtubeId: ""

solutionUrl: "/solutions/target-sum-subsets-dp-solution/"

timeComplexity: "O(n * target)"
spaceComplexity: "O(n * target)"

examples:
  - input: "arr = [4, 2, 7, 1, 3], target = 10"
    output: "true"
    explanation: "The subset [7, 3] or [4, 2, 1, 3] sums to 10, so true is returned."
  - input: "arr = [1, 2, 3, 7], target = 6"
    output: "true"
    explanation: "The subset [1, 2, 3] sums to 6."

constraints:
  - "1 <= arr.length <= 100"
  - "1 <= arr[i] <= 1000"
  - "1 <= target <= 10^4"

realWorld:
  - title: "Financial Transaction Settlement Balancing"
    description: "Determining if a batch of incoming clearing debits can perfectly offset a specific targeted credit settlement obligation."
  - title: "Cloud Compute Resource Capacity Allocation"
    description: "Verifying whether available server instance core capacities can be packaged to meet a dedicated customer VM reservation."
  - title: "Cargo Container Payload Balancing"
    description: "Checking whether a selection of shipping container weights can achieve exact balanced aircraft hold weight thresholds."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of positive integers `arr` and a positive integer `target`, determine whether there exists a subset of the array whose elements sum up exactly to `target`.

You should solve this using Dynamic Programming in $O(n \cdot \text{target})$ time complexity.

Return `true` if such a subset exists, or `false` otherwise.
