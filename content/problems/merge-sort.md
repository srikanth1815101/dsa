---
title: "Merge Sort"
date: 2026-09-27T19:51:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Divide and Conquer"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeSort/engineering"

hints:
  - "Recursively divide the array into two equal halves at the midpoint until each subarray contains a single element or is empty."
  - "Merge the two sorted halves back together by comparing their smallest remaining elements using two pointers."

youtubeId: ""

solutionUrl: "/solutions/merge-sort-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [38, 27, 43, 3, 9, 82, 10]"
    output: "[3, 9, 10, 27, 38, 43, 82]"
    explanation: "The array is recursively halved down to single elements and merged back in ascending order."
  - input: "arr = [10, -1, 2, 5, 0, 6, 4]"
    output: "[-1, 0, 2, 4, 5, 6, 10]"
    explanation: "Negative and positive numbers are ordered non-decreasingly with guaranteed O(n log n) runtime."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "All values fit within 32-bit signed integer limits"

realWorld:
  - title: "External Sort for Massive Datasets"
    description: "Sorting terabytes of database logs or search indices that cannot fit into RAM by running disk-based multi-way merge passes."
  - title: "Stable Record Sorting in Relational Engines"
    description: "Preserving the original secondary ordering of rows when ordering database query results by primary sorting keys."
  - title: "E-Commerce Inversion Count and Recommendations"
    description: "Counting preference inversions during the merge step to calculate recommendation similarity distances between customer purchase profiles."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, sort the array in ascending order using the Merge Sort algorithm.

Merge Sort is an archetypal divide-and-conquer algorithm. It recursively splits the input array into two halves, recursively sorts each half, and then merges the two sorted subarrays into a single consolidated, sorted array.

Return the sorted array.
