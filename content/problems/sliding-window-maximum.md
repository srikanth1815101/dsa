---
title: "Sliding Window Maximum"
date: 2026-09-27T10:06:00+05:30
difficulty: "Hard"
topics: ["Arrays", "Sliding Window", "Monotonic Stack"]
companies: ["Amazon", "Google", "Directi"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SlidingWindowMaximum/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SlidingWindowMaximum/engineering"

hints:
  - "Maintain a double-ended queue (deque) storing indices of array elements in monotonically decreasing order of their values."
  - "Before adding a new index, remove indices from the front that fall outside the current window and indices from the back whose values are smaller than the current element."

youtubeId: ""

solutionUrl: "/solutions/sliding-window-maximum-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(k)"

examples:
  - input: "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3"
    output: "[3, 3, 5, 5, 6, 7]"
    explanation: "Windows of size 3 are [1, 3, -1] -> 3, [3, -1, -3] -> 3, [-1, -3, 5] -> 5, [-3, 5, 3] -> 5, [5, 3, 6] -> 6, [3, 6, 7] -> 7."
  - input: "nums = [1], k = 1"
    output: "[1]"
    explanation: "There is only one window of size 1 with maximum 1."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"
  - "1 <= k <= nums.length"

realWorld:
  - title: "Network Bandwidth Peak Monitoring"
    description: "Cloud telemetry metrics track peak packet transmission spikes across sliding 5-minute time windows."
  - title: "Financial Moving Highs"
    description: "Stock charting engines calculate moving peak resistance levels over historical intervals."
  - title: "IoT Sensor Anomaly Detection"
    description: "Industrial heat and pressure sensors alert operators when moving peak thresholds are consistently exceeded."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums` and a sliding window of size `k` that moves from the leftmost element to the rightmost element one step at a time, find the maximum value in each sliding window.

Return an array containing the maximum value for each contiguous sliding window of size `k`.
