---
title: "Maximum Difference Between Elements"
date: 2026-10-01T01:09:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Dynamic Programming"]
companies: ["Amazon", "Flipkart", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumDifferenceBetweenElements/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MaximumDifferenceBetweenElements/engineering"

hints:
  - "Keep track of the minimum element seen so far as you iterate through the array."
  - "For each element greater than the running minimum, compute the difference and update the maximum difference."

youtubeId: ""

solutionUrl: "/solutions/maximum-difference-between-elements-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [7, 1, 5, 4]"
    output: "4"
    explanation: "The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4."
  - input: "nums = [9, 4, 3, 2]"
    output: "-1"
    explanation: "There is no i and j such that i < j and nums[i] < nums[j]."

constraints:
  - "n == nums.length"
  - "2 <= n <= 1000"
  - "1 <= nums[i] <= 10^9"

realWorld:
  - title: "Single Transaction Profit Maximization"
    description: "Finding the maximum potential single-trade upside in intraday asset price feeds where buying precedes selling."
  - title: "Elevation Gain Tracking"
    description: "Determining the largest single upward elevation gain encountered across consecutive trail topographic elevation samples."
  - title: "System Throughput Surge Identification"
    description: "Measuring the highest instantaneous surge from a baseline minimum request rate to a subsequent operational peak."
weight: 10
---
<!-- All rights reserved to CSRGO DSA -->

Given a **0-indexed** integer array `nums` of size `n`, find the **maximum difference** between `nums[i]` and `nums[j]` (i.e., `nums[j] - nums[i]`), such that `0 <= i < j < n` and `nums[i] < nums[j]`.

Return the **maximum difference**. If no such `i` and `j` exists, return `-1`.
