---
title: "Longest Increasing Subsequence"
date: 2026-09-27T20:35:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "Binary Search"]
companies: ["Microsoft", "Amazon", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LongestIncreasingSubsequence/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LongestIncreasingSubsequence/engineering"

hints:
  - "Define dp[i] as the length of the longest increasing subsequence ending at index i."
  - "For each index i, iterate through all j < i and update dp[i] = max(dp[i], dp[j] + 1) whenever nums[j] < nums[i]."

youtubeId: ""

solutionUrl: "/solutions/longest-increasing-subsequence-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [10, 9, 2, 5, 3, 7, 101, 18]"
    output: "4"
    explanation: "The longest increasing subsequence is [2, 3, 7, 101], which has length 4."
  - input: "nums = [0, 1, 0, 3, 2, 3]"
    output: "4"
    explanation: "The longest increasing subsequence is [0, 1, 2, 3], which has length 4."

constraints:
  - "0 <= nums.length <= 2500"
  - "-10^4 <= nums[i] <= 10^4"
  - "A subsequence must be strictly increasing."

realWorld:
  - title: "Network Packet Reassembly"
    description: "Reordering arrival packets into the longest strictly chronological stream to avoid retransmissions."
  - title: "Version Control Branch Tracing"
    description: "Finding the longest continuous linear sequence of commits across divergent repository history DAGs."
  - title: "Market Trend Identification"
    description: "Extracting the longest strictly positive run from volatile stock price tick data."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

A **subsequence** is a sequence derived from an array by deleting some or no elements without changing the order of the remaining elements. A sequence is strictly increasing if each element is strictly greater than its predecessor.

If the array is empty or `null`, return `0`.
