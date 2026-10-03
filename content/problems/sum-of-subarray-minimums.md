---
title: "Sum of Subarray Minimums"
date: 2026-10-01T02:37:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SumOfSubarrayMinimums/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SumOfSubarrayMinimums/engineering"

hints:
  - "Instead of generating all subarrays, find the contribution of each element arr[i] as the minimum of some subarrays."
  - "Use monotonic stacks to find the distance to the previous smaller element on the left and the next smaller or equal element on the right."

youtubeId: ""

solutionUrl: "/solutions/sum-of-subarray-minimums-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 1, 2, 4]"
    output: "17"
    explanation: "Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1. Sum is 17."
  - input: "arr = [11, 81, 94, 43, 3]"
    output: "444"
    explanation: "Calculating minimums across all contiguous subarrays and taking modulo 10^9 + 7 yields 444."

constraints:
  - "1 <= arr.length <= 3 * 10^4"
  - "1 <= arr[i] <= 3 * 10^4"
  - "The result must be returned modulo 10^9 + 7."

realWorld:
  - title: "Sensor Telemetry Baseline Aggregation"
    description: "Computing continuous baseline noise floors across all sliding sensor diagnostic windows."
  - title: "Financial Downside Risk Estimation"
    description: "Calculating cumulative minimum capital drawdown across all variable-duration investment horizons."
  - title: "Supply Chain Bottleneck Analysis"
    description: "Determining minimum throughput rates across all contiguous stages in multi-tier logistics pipelines."
weight: 98
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`.

Since the answer may be large, return the answer **modulo** `10^9 + 7` (`1000000007`).
