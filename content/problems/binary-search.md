---
title: "Binary Search"
date: 2026-09-25T22:41:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Binary Search", "Divide and Conquer"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BinarySearch/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BinarySearch/engineering"

hints:
  - "Maintain low and high pointers that delimit the active search range."
  - "Compute the midpoint using mid = low + (high - low) / 2 to prevent integer overflow, then discard half the search space on each comparison."

youtubeId: ""

solutionUrl: "/solutions/binary-search-solution/"

timeComplexity: "O(log n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [-1, 0, 3, 5, 9, 12], target = 9"
    output: "4"
    explanation: "9 exists in nums and its index is 4."
  - input: "nums = [-1, 0, 3, 5, 9, 12], target = 2"
    output: "-1"
    explanation: "2 does not exist in nums so return -1."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^9 <= nums[i], target <= 10^9"
  - "All the integers in nums are unique and sorted in ascending order."

realWorld:
  - title: "Database B-Tree Index Traversal"
    description: "Locating row offset pointers within sorted on-disk B+ tree page nodes during SQL SELECT queries."
  - title: "Git Bisect Regression Hunting"
    description: "Binary searching git commit histories to identify the exact commit that introduced a software regression."
  - title: "Package Registry Version Resolution"
    description: "Quickly searching sorted semver version lists in package managers (like npm and Maven) to find matching semantic releases."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its 0-based index. Otherwise, return `-1`.

You must write an algorithm with $O(\log n)$ runtime complexity.

### Input Format
- An array of sorted integers `nums`.
- An integer `target` to search for.

### Output Format
- An integer representing the index of `target` in `nums`, or `-1` if absent.
