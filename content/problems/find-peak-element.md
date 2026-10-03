---
title: "Find Peak Element"
date: 2026-10-01T01:02:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Binary Search", "Divide and Conquer"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FindPeakElement/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FindPeakElement/engineering"

hints:
  - "Observe that if nums[mid] < nums[mid + 1], you are on an ascending slope, so at least one peak must exist to the right."
  - "Conversely, if nums[mid] > nums[mid + 1], a peak must exist at mid or to the left."

youtubeId: ""

solutionUrl: "/solutions/find-peak-element-solution/"

timeComplexity: "O(log n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 2, 3, 1]"
    output: "2"
    explanation: "3 is a peak element and your function should return the index number 2."
  - input: "nums = [1, 2, 1, 3, 5, 6, 4]"
    output: "5"
    explanation: "Your function can return either index 1 (where value is 2) or index 5 (where value is 6)."

constraints:
  - "1 <= nums.length <= 1000"
  - "-2^31 <= nums[i] <= 2^31 - 1"
  - "nums[i] != nums[i + 1] for all valid i"

realWorld:
  - title: "Signal Amplitude Peak Detection"
    description: "Identifying maximal signal transmission bursts or frequency resonances in raw digital signal processing streams."
  - title: "Stock Volatility Local Highs"
    description: "Detecting local maximums in high-frequency trading market feeds to identify sudden resistance and reversal zones."
  - title: "Sensor Thermal Spikes"
    description: "Locating localized heat spikes across high-density server rack sensors in datacenter telemetry management."
weight: 3
---
<!-- All rights reserved to CSRGO DSA -->

A peak element is an element that is strictly greater than its neighbors.

Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.

You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in `O(log n)` time.
