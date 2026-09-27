---
title: "Quick Sort"
date: 2026-09-27T19:52:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Divide and Conquer"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/QuickSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/QuickSort/engineering"

hints:
  - "Choose a pivot element and partition the array such that all items strictly less than or equal to the pivot sit on its left and larger items sit on its right."
  - "Recursively apply the same partitioning routine to the left and right subarrays around the settled pivot index."

youtubeId: ""

solutionUrl: "/solutions/quick-sort-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(log n)"

examples:
  - input: "arr = [10, 80, 30, 90, 40, 50, 70]"
    output: "[10, 30, 40, 50, 70, 80, 90]"
    explanation: "Elements are partitioned around pivots and sorted recursively in-place."
  - input: "arr = [4, 1, 3, 9, 7]"
    output: "[1, 3, 4, 7, 9]"
    explanation: "The array is ordered non-decreasingly with average O(n log n) efficiency."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "All elements fit within 32-bit signed integer limits"

realWorld:
  - title: "In-Memory Standard Library Sorts"
    description: "Powering language primitive sorting functions (such as C++ std::sort and Java's Dual-Pivot Quicksort) due to optimal CPU cache locality and zero heap allocations."
  - title: "Large Scale Key-Value Database Compaction"
    description: "Sorting write-ahead memory tables (MemTables) before serializing structured SSTables to disk in storage engines like RocksDB."
  - title: "Distributed Network Packet Scheduling"
    description: "Ordering network priority queues based on arrival timestamps with minimal memory overhead in edge routers."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, sort the array in ascending order using the Quick Sort algorithm.

Quick Sort is an efficient, comparison-based divide-and-conquer algorithm. It selects an element as a pivot, partitions the surrounding array such that elements smaller than the pivot move to the left and larger elements move to the right, and then recursively sorts the resulting sub-segments.

Return the sorted array.
