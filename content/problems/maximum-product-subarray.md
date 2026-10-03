---
title: "Maximum Product Subarray"
date: 2026-10-01T01:03:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Dynamic Programming"]
companies: ["Amazon", "DE Shaw", "Flipkart"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumProductSubarray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumProductSubarray/engineering"

hints:
  - "Notice that multiplying by a negative number flips the signs, turning a minimum negative product into a maximum positive product."
  - "Maintain both the current running maximum and the current running minimum at each position."

youtubeId: ""

solutionUrl: "/solutions/maximum-product-subarray-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [2, 3, -2, 4]"
    output: "6"
    explanation: "[2, 3] has the largest product 6."
  - input: "nums = [-2, 0, -1]"
    output: "0"
    explanation: "The result cannot be 2, because [-2, -1] is not a continuous subarray."

constraints:
  - "1 <= nums.length <= 2 * 10^4"
  - "-10 <= nums[i] <= 10"
  - "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer"

realWorld:
  - title: "Cumulative Rate Multipliers"
    description: "Determining the highest yielding consecutive return interval across volatile foreign currency exchange fluctuations."
  - title: "Signal Gain Optimization"
    description: "Finding the continuous amplifier stage chain that yields maximum cumulative gain while handling phase-inverting attenuations."
  - title: "Financial Growth Sequences"
    description: "Evaluating peak compounding investment intervals where period returns alternate between gains and losses."
weight: 4
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums`, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a **32-bit** integer.

A **subarray** is a contiguous subsequence of the array.
