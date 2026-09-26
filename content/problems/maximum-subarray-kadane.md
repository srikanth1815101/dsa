---
title: "Maximum Subarray (Kadane)"
date: 2026-09-26T18:48:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Dynamic Programming", "Divide and Conquer"]
companies: ["Amazon", "Microsoft", "Oracle"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MaximumSubarrayKadane/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MaximumSubarrayKadane/engineering"

hints:
  - "How can you decide whether to extend an existing contiguous subarray or start a new subarray beginning at the current element?"
  - "Kadane's Algorithm maintains a running current sum: currentSum = Math.max(nums[i], currentSum + nums[i]). Update the maximum sum encountered at each step."

youtubeId: ""

solutionUrl: "/solutions/maximum-subarray-kadane-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]"
    output: "6"
    explanation: "The contiguous subarray [4, -1, 2, 1] has the largest sum 6."
  - input: "nums = [5, 4, -1, 7, 8]"
    output: "23"
    explanation: "The contiguous subarray [5, 4, -1, 7, 8] has the largest sum 23."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"

realWorld:
  - title: "Financial Yield Interval Optimization"
    description: "Detecting the most lucrative continuous investment window across fluctuating daily stock returns."
  - title: "Computer Vision Signal Streak Detection"
    description: "Identifying the brightest contiguous scanline segment within 1D linear sensor image data."
  - title: "Network Bandwidth Peak Analysis"
    description: "Locating the continuous time interval that achieved the maximum cumulative data throughput burst."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A **subarray** is a contiguous part of an array.
