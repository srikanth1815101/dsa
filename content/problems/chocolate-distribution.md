---
title: "Chocolate Distribution"
date: 2026-09-26T19:08:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Sorting", "Sliding Window"]
companies: ["Amazon", "Flipkart", "Paytm"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ChocolateDistribution/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ChocolateDistribution/engineering"

hints:
  - "Sort the packets array so that packets with comparable quantities are positioned adjacent to one another."
  - "Slide a window of size m across the sorted array. For each window starting at index i, the difference is nums[i + m - 1] - nums[i]. Return the minimum difference found across all windows."

youtubeId: ""

solutionUrl: "/solutions/chocolate-distribution-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [7, 3, 2, 4, 9, 12, 56], m = 3"
    output: "2"
    explanation: "Packets allocated are 2, 3, and 4. The difference between maximum (4) and minimum (2) is 2."
  - input: "nums = [3, 4, 1, 9, 56, 7, 9, 12], m = 5"
    output: "6"
    explanation: "Packets allocated are 3, 4, 7, 9, and 9. The difference between maximum (9) and minimum (3) is 6."

constraints:
  - "1 <= m <= nums.length <= 10^5"
  - "1 <= nums[i] <= 10^9"

realWorld:
  - title: "Compute Task Fairness Balancing"
    description: "Distributing batched tasks of varying CPU execution cycles among m worker pods to minimize load discrepancy."
  - title: "Resource Allocation Disparity Minimization"
    description: "Apportioning varying inventory bundles across recipient departments while ensuring fair, equitable distribution."
  - title: "Network Bandwidth Slicing"
    description: "Partitioning discrete radio frequency bands among active clients to minimize throughput variance."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array `nums` of positive integers representing the number of chocolates in different packets, and an integer `m` representing the number of children.

Every child must receive exactly one packet.

Distribute chocolate packets such that the difference between the maximum number of chocolates given to a child and the minimum number of chocolates given to a child is minimized. Return this minimum difference.
