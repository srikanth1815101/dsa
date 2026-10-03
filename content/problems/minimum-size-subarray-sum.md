---
title: "Minimum Size Subarray Sum"
date: 2026-10-01T02:19:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sliding Window", "Two Pointers"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumSizeSubarraySum/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumSizeSubarraySum/engineering"

hints:
  - "Use a sliding window with left and right pointers, keeping a running sum of elements in the window."
  - "Expand right; when sum >= target, update minimum length (right - left + 1) and contract left pointer."

youtubeId: ""

solutionUrl: "/solutions/minimum-size-subarray-sum-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "target = 7`, `nums = [2,3,1,2,4,3]"
    output: "** `2` **"
    explanation: "** The subarray `[4,3]` has the minimal length under the problem constraint."
  - input: "target = 4`, `nums = [1,4,4]"
    output: "** `1`"
    explanation: "Result is ** `1`."

constraints:
  - "1 <= target <= 10^9"
  - "0 <= nums.length <= 10^5"
  - "1 <= nums[i] <= 10^4"

realWorld:
  - title: "E-Commerce Free Shipping Cart Sizing"
    description: "Finding the smallest contiguous sequence of items in a shopping queue that unlocks a free shipping spending tier."
  - title: "Energy Grid Peak Load Shedding"
    description: "Identifying the shortest consecutive hours of factory production downtime needed to reduce electricity usage by a target threshold."
  - title: "Log Analyzer Anomaly Windowing"
    description: "Pinpointing the smallest log duration accumulating a target volume of security authentication alerts."
weight: 80
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of positive integers `nums` and a positive integer `target`, return the **minimal length** of a contiguous subarray `[nums_l, nums_{l+1}, ..., nums_{r-1}, nums_r]` of which the sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.
