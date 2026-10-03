---
title: "Find Duplicate Number"
date: 2026-09-26T18:58:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Two Pointers", "Bit Manipulation"]
companies: ["Amazon", "LinkedIn", "Uber"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FindDuplicateNumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FindDuplicateNumber/engineering"

hints:
  - "Think of the array as a functional directed graph or linked list where nums[i] represents a pointer to index nums[i]."
  - "Since values are bounded in [1, n], index 0 is never pointed to. Apply Floyd's Tortoise and Hare cycle detection algorithm to find the entry point of the cycle in O(n) time and O(1) space without modifying the array."

youtubeId: ""

solutionUrl: "/solutions/find-duplicate-number-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 3, 4, 2, 2]"
    output: "2"
    explanation: "2 is the number that is duplicated."
  - input: "nums = [3, 1, 3, 4, 2]"
    output: "3"
    explanation: "3 is the number that is duplicated."

constraints:
  - "1 <= n <= 10^5"
  - "nums.length == n + 1"
  - "1 <= nums[i] <= n"
  - "All the integers in nums appear only once except for precisely one integer which appears two or more times."
  - title: "Memory Allocation Cycle Detection"
    description: "Detecting circular pointer referencing in managed runtime memory managers without mutating object headers."
  - title: "Data Pipeline Circular Loop Isolation"
    description: "Identifying cyclic loops in workflow task dependency graphs when invalid circular tasks are configured."
  - title: "Network Routing Hop Loop Prevention"
    description: "Finding duplicate redirect loops in dynamic routing tables across packet forwarding nodes."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return this repeated number.

You must solve the problem **without modifying** the array `nums` and uses only constant extra space.
