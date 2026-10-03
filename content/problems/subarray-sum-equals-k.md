---
title: "Subarray Sum Equals K"
date: 2026-10-01T01:04:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Prefix Sum", "Hashing"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubarraySumEqualsK/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SubarraySumEqualsK/engineering"

hints:
  - "Recall that the sum of subarray nums[i..j] is prefixSum[j] - prefixSum[i - 1]."
  - "Use a hash map to store frequencies of previously seen prefix sums to look up how many times prefixSum - k occurred."

youtubeId: ""

solutionUrl: "/solutions/subarray-sum-equals-k-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [1, 1, 1], k = 2"
    output: "2"
    explanation: "Subarrays [1, 1] at index (0, 1) and index (1, 2) each sum to 2."
  - input: "nums = [1, 2, 3], k = 3"
    output: "2"
    explanation: "[1, 2] and [3] both sum to 3."

constraints:
  - "1 <= nums.length <= 2 * 10^4"
  - "-1000 <= nums[i] <= 1000"
  - "-10^7 <= k <= 10^7"

realWorld:
  - title: "Account Balance Anomaly Detection"
    description: "Finding transaction sequences that total an exact target discrepancy in automated bank reconciliation audit logs."
  - title: "Network Bandwidth Budget Bursts"
    description: "Counting time intervals where total data consumption matches a specific provisioned bandwidth quota tier."
  - title: "Sensor Target Threshold Triggering"
    description: "Detecting continuous temporal reading intervals whose net cumulative variance equals a target alarm calibration value."
weight: 5
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

A **subarray** is a contiguous non-empty sequence of elements within an array.
