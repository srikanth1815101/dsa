---
title: "Maximum of Minimum for Every Window"
date: 2026-10-01T01:22:00+05:30
difficulty: "Hard"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Google", "Flipkart"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumOfMinimumForEveryWindow/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumOfMinimumForEveryWindow/engineering"

hints:
  - "Find the previous smaller and next smaller element for each index using a monotonic increasing stack."
  - "Each element is the minimum in a window of size (next_smaller - prev_smaller - 1); update the answers accordingly."

youtubeId: ""

solutionUrl: "/solutions/maximum-of-minimum-for-every-window-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 50, 10, 70, 30]"
    output: "** `[70, 30, 20, 10, 10, 10, 10]` **"
    explanation: "** - Windows of size 1: min elements are `[10, 20, 30, 50, 10, 70, 30]`, max is `70`. - Windows of size 2: min elements are `[10, 20, 30, 10, 10, 30]`, max is `30`. - Windows of size 3: min elements are `[10, 20, 10, 10, 10]`, max is `20`. - Windows of size 4 to 7: max of minimums is `10`."
  - input: "arr = [10, 20, 30]"
    output: "** `[30, 20, 10]` **"
    explanation: "** - Size 1: max of `[10, 20, 30]` is `30`. - Size 2: min of `[10, 20]` is 10, min of `[20, 30]` is 20, max is `20`. - Size 3: min of entire array is `10`."

constraints:
  - "1 <= arr.length <= 10^5"
  - "1 <= arr[i] <= 10^9"
  - "Window sizes k range from 1 to arr.length inclusive."
realWorld:
  - title: "Stock Price Volatility Windows"
    description: "Calculating sliding boundary risk guarantees across variable time horizons for algorithmic trading."
  - title: "Sensor Minimum Range Analysis"
    description: "Determining peak guaranteed minimum sensor readings across varying sampling intervals."
  - title: "Bandwidth QoS Window Guarantees"
    description: "Identifying the highest guaranteed throughput minimum for every observation period."
weight: 23
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `arr` of size `n`, find the maximum of the minimums of every possible window size in the array, for window sizes ranging from `1` to `n`.

Specifically, for each window size `k` (where `1 <= k <= n`), consider all contiguous subarrays of length `k`. Determine the minimum element in each subarray, and then find the maximum among these minimum values.

Return an array `ans` of length `n` where `ans[i]` represents the maximum of minimums for window size `i + 1`.
