---
title: "Two Sum"
date: 2026-09-25T22:52:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Hashing", "Two Pointers"]
companies: ["Amazon", "Google", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TwoSum/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TwoSum/engineering"

hints:
  - "A brute force approach checks all pairs in O(n^2) time. Can you use extra space to check if each element's complement already exists?"
  - "Use a hash map to store each number and its index. As you iterate through the array, look up if (target - nums[i]) exists in the map."

youtubeId: ""

solutionUrl: "/solutions/two-sum-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [2, 7, 11, 15], target = 9"
    output: "[0, 1]"
    explanation: "nums[0] + nums[1] == 2 + 7 == 9, so return [0, 1]."
  - input: "nums = [3, 2, 4], target = 6"
    output: "[1, 2]"
    explanation: "nums[1] + nums[2] == 2 + 4 == 6, so return [1, 2]."

constraints:
  - "2 <= nums.length <= 10^5"
  - "-10^9 <= nums[i], target <= 10^9"
  - "You may assume that each input would have at most one valid solution, and you may not use the same element twice."

realWorld:
  - title: "Financial Ledger Reconciliation"
    description: "Matching offsetting debit and credit transactions that sum to a specific target balance."
  - title: "E-Commerce Promotional Pairing"
    description: "Identifying two cart items whose combined prices qualify exactly for a bundle coupon."
  - title: "Network Packet Payload Packing"
    description: "Selecting two independent data chunks whose combined byte size maximizes MTU frame utilization without fragmentation."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums` and an integer `target`, return the 0-based indices of the two numbers such that they add up to `target`.

You may not use the same element twice. If no valid pair exists, return `[-1, -1]`.

### Input Format
- An integer array `nums`.
- An integer `target`.

### Output Format
- An integer array of size 2 containing the 0-based indices `[index1, index2]`, or `[-1, -1]` if no solution exists.
