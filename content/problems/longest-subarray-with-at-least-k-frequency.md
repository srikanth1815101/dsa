---
title: "Longest Subarray with At Least K Frequency"
date: 2026-10-01T02:17:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sliding Window", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestSubarrayWithAtLeastKFrequency/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestSubarrayWithAtLeastKFrequency/engineering"

hints:
  - "Use a sliding window where the frequency of each element in the window is at most K (or at least K depending on problem spec)."
  - "Maintain an element frequency map; contract the window from the left whenever any frequency violates the bound."

youtubeId: ""

solutionUrl: "/solutions/longest-subarray-with-at-least-k-frequency-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [1, 2, 3, 1, 2, 3]`, `k = 2"
    output: "** `6` **"
    explanation: "** In the entire array, elements 1, 2, and 3 each appear 2 times (>= 2)."
  - input: "nums = [1, 2, 2, 1, 4, 3, 3, 3]`, `k = 2"
    output: "** `4` **"
    explanation: "** The longest valid subarray is `[1, 2, 2, 1]` with length 4 (1 and 2 each appear twice)."

constraints:
  - "0 <= nums.length <= 10^4"
  - "-10^4 <= nums[i] <= 10^4"
  - "1 <= k <= 10^4"

realWorld:
  - title: "Web Server Rate Limiter Burst Detection"
    description: "Identifying longest traffic intervals where no individual client IP exceeds K requests per time block."
  - title: "Stock Trading Signal Volatility Guard"
    description: "Finding continuous trade price sequences where no single ticker dominates more than K transaction ticks."
  - title: "Audio Waveform Amplitude Peak Analysis"
    description: "Detecting sustained audio sample windows where peak distortion events stay within safe frequency bounds."
weight: 78
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` and an integer `k`, return the **length of the longest contiguous subarray** of `nums` such that the frequency of each element in this subarray is greater than or equal to `k`.

If no such subarray exists, return `0`.
