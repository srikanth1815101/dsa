---
title: "First and Last Index"
date: 2026-09-25T22:45:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Binary Search"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FirstAndLastIndex/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FirstAndLastIndex/engineering"

hints:
  - "Run binary search twice: once to find the leftmost boundary (first index) and once to find the rightmost boundary (last index)."
  - "When a match is found during the first index search, record the index and continue searching towards the left (high = mid - 1). For the last index, record the index and continue searching towards the right (low = mid + 1)."

youtubeId: ""

solutionUrl: "/solutions/first-and-last-index-solution/"

timeComplexity: "O(log n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [5, 7, 7, 8, 8, 10], target = 8"
    output: "[3, 4]"
    explanation: "8 appears first at index 3 and last at index 4."
  - input: "nums = [5, 7, 7, 8, 8, 10], target = 6"
    output: "[-1, -1]"
    explanation: "6 does not exist in nums so return [-1, -1]."

constraints:
  - "0 <= nums.length <= 10^5"
  - "-10^9 <= nums[i], target <= 10^9"
  - "nums is sorted in non-decreasing order."

realWorld:
  - title: "Log Telemetry Timestamp Range Query"
    description: "Pinpointing the first and last occurrence of event timestamps in an append-only time-series server log."
  - title: "Stock Exchange Order Book Boundary Search"
    description: "Determining the slice of active limit orders placed at an exact price tick in a sorted order book."
  - title: "Genomic Sequence Boundary Tagging"
    description: "Locating the start and end offsets of repeated nucleotide or biomarker patterns within sorted chromosome sequence indices."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with $O(\log n)$ runtime complexity.

### Input Format
- An array of integers `nums` sorted in non-decreasing order.
- An integer `target`.

### Output Format
- An integer array of size 2 containing `[firstIndex, lastIndex]`, or `[-1, -1]` if `target` is not found.
