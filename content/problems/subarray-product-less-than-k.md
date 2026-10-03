---
title: "Subarray Product Less Than K"
date: 2026-10-01T02:18:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sliding Window", "Two Pointers"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubarrayProductLessThanK/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubarrayProductLessThanK/engineering"

hints:
  - "If k <= 1, no product of positive integers can be strictly less than k, so return 0."
  - "Maintain a sliding window multiplying elements; when product >= k, divide by nums[left++]; add (right - left + 1) to count."

youtubeId: ""

solutionUrl: "/solutions/subarray-product-less-than-k-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [10,5,2,6]`, `k = 100"
    output: "** `8` **"
    explanation: "** The 8 subarrays that have product less than 100 are: `[10]`, `[5]`, `[2]`, `[6]`, `[10, 5]`, `[5, 2]`, `[2, 6]`, `[5, 2, 6]`. Note that `[10, 5, 2]` is not included since the product of 100 is not strictly less than k."
  - input: "nums = [1,2,3]`, `k = 0"
    output: "** `0`"
    explanation: "Result is ** `0`."

constraints:
  - "1 <= nums.length <= 3 * 10^4"
  - "1 <= nums[i] <= 1000"
  - "0 <= k <= 10^6"

realWorld:
  - title: "Financial Risk Exposure Thresholding"
    description: "Counting sliding time periods where cumulative portfolio volatility risk multipliers stay safely below regulatory limits."
  - title: "Chemical Reactor Reaction Acceleration Limits"
    description: "Monitoring consecutive reaction stage rate multipliers to ensure compound thermal pressure does not exceed vessel ratings."
  - title: "Network Transmission Amplification Bounds"
    description: "Validating multi-hop optical amplifier gain products along signal paths to prevent receiver overload."
weight: 79
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums` and an integer `k`, return the *number of contiguous subarrays where the product of all the elements in the subarray is strictly less than* `k`.
