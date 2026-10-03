---
title: "Sliding Window Median"
date: 2026-10-01T01:57:00+05:30
difficulty: "Hard"
topics: ["Heap", "Sliding Window"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SlidingWindowMedian/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SlidingWindowMedian/engineering"

hints:
  - "Maintain two heaps: a Max-Heap for the lower half and a Min-Heap for the upper half, with lazy deletion for elements falling out of the window."
  - "Balance the heaps so that the lower half has equal to or one more element than the upper half to read the median in O(1) time."

youtubeId: ""

solutionUrl: "/solutions/sliding-window-median-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"

examples:
  - input: "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3"
    output: "[1.00000, -1.00000, -1.00000, 3.00000, 5.00000, 6.00000]"
    explanation: "Window position Median"
  - input: "nums = [1, 2, 3, 4, 2, 3, 1, 4, 2], k = 3"
    output: "[2.00000, 3.00000, 3.00000, 3.00000, 2.00000, 3.00000, 2.00000]"
    explanation: "Result is [2.00000, 3.00000, 3.00000, 3.00000, 2.00000, 3.00000, 2.00000]."

constraints:
  - "1 <= k <= nums.length <= 10^5"
  - "-2^31 <= nums[i] <= 2^31 - 1"
  - "The median is the middle value in the sorted sliding window (or the mean of two middle values)."
realWorld:
  - title: "High-Frequency Algorithmic Volatility Smoothing"
    description: "Calculating real-time sliding median bid-ask spreads to filter out flash-crash microstructural anomalies."
  - title: "Sensor Signal Noise Filtering (Median Filter)"
    description: "Removing salt-and-pepper noise from digital camera sensor pixel streams using a sliding median window."
  - title: "Network Round-Trip Time Latency Tracking"
    description: "Computing rolling 99th percentile and median packet transit times in TCP congestion control estimators."
weight: 58
---
<!-- All rights reserved to CSRGO DSA -->

The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no single middle value, so the median is the mean of the two middle values.

- For example, for `arr = [2, 3, 4]`, the median is `3.0`.
- For example, for `arr = [1, 2, 3, 4]`, the median is `(2 + 3) / 2 = 2.5`.

You are given an integer array `nums` and an integer `k`. There is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return the median array for each window in the original array. Answers within $10^{-5}$ of the actual value will be accepted.
