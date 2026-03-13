---
title: "Binary Search"
date: 2024-01-08T00:00:00Z
difficulty: "Easy"
topics: ["Array", "Binary Search"]
companies: ["Google", "Facebook", "Apple"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/binary-search"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/binary-search"
hints:
  - "The array is sorted—use this to eliminate half the search space."
  - "Compare the target with the middle element to decide which half to search."
youtubeId: "fDKgeENz-De"
solutionUrl: "/solutions/binary-search-solution/"
timeComplexity: "O(log n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums = [-1,0,3,5,9,12], target = 9"
    output: "4"
    explanation: "9 exists in nums at index 4."
  - input: "nums = [-1,0,3,5,9,12], target = 2"
    output: "-1"
    explanation: "2 does not exist in nums, so return -1."
constraints:
  - "1 <= nums.length <= 10^4"
  - "-10^4 < nums[i], target < 10^4"
  - "All the integers in nums are unique"
  - "nums is sorted in ascending order"
realWorld:
  - title: "Database Indexing"
    description: "Quickly locating records in sorted database indexes using B-trees."
  - title: "Dictionary Lookup"
    description: "Finding words in a dictionary by splitting the pages in half."
  - title: "Version Control"
    description: "Git bisect uses binary search to find the commit that introduced a bug."
---

Given an array of integers `nums` which is sorted in **ascending order**, and an integer `target`, write a function to search `target` in `nums`.

If `target` exists, return its **index**. Otherwise, return **-1**.

You must write an algorithm with **O(log n)** runtime complexity.
