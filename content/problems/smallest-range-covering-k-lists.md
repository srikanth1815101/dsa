---
title: "Smallest Range Covering K Lists"
date: 2026-10-01T02:00:00+05:30
difficulty: "Hard"
topics: ["Arrays", "Heap", "Sliding Window"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SmallestRangeCoveringKLists/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SmallestRangeCoveringKLists/engineering"

hints:
  - "Use a Min-Heap containing the first element from each of the K lists, tracking the current maximum element among them."
  - "Repeatedly pop the minimum element to update the smallest range [min, max], and insert the next element from the popped list into the heap."

youtubeId: ""

solutionUrl: "/solutions/smallest-range-covering-k-lists-solution/"

timeComplexity: "O(N log k)"
spaceComplexity: "O(k)"

examples:
  - input: "nums = [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]"
    output: "[20, 24]"
    explanation: "List 1: [4, 10, 15, 24, 26], 24 is in range [20, 24]. List 2: [0, 9, 12, 20], 20 is in range [20, 24]. List 3: [5, 18, 22, 30], 22 is in range [20, 24]."
  - input: "nums = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]"
    output: "[1, 1]"
    explanation: "Result is [1, 1]."

constraints:
  - "nums.length == k"
  - "1 <= k <= 3500"
  - "1 <= nums[i].length <= 50"
  - "-10^5 <= nums[i][j] <= 10^5"

realWorld:
  - title: "Distributed Log Timestamp Alignment"
    description: "Finding the tightest observation time window that captures log messages from all K microservice nodes."
  - title: "Multi-Sensor Sensor Fusion Calibration"
    description: "Finding the smallest sensor reading span that encompasses simultaneous measurements across diverse telemetry channels."
  - title: "Multi-Carrier Frequency Intermodulation Testing"
    description: "Finding the narrowest frequency band encompassing carrier signals across K communication transmitters."
weight: 61
---
<!-- All rights reserved to CSRGO DSA -->

You have `k` lists of sorted integers in **non-decreasing order**. Find the **smallest range** that includes at least one number from each of the `k` lists.

We define the range `[a, b]` is smaller than range `[c, d]` if `b - a < d - c` or `a < c` if `b - a == d - c`.
