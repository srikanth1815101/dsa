---
title: "Radix Sort"
date: 2026-09-27T19:55:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RadixSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RadixSort/engineering"

hints:
  - "Identify the maximum value in the array to determine the total number of significant digit places to process."
  - "Perform a stable counting sort pass on each digit position (least significant digit to most significant digit) using exponent exp = 1, 10, 100, etc."

youtubeId: ""

solutionUrl: "/solutions/radix-sort-solution/"

timeComplexity: "O(d * (n + b))"
spaceComplexity: "O(n + b)"

examples:
  - input: "arr = [170, 45, 75, 90, 802, 24, 2, 66]"
    output: "[2, 24, 45, 66, 75, 90, 170, 802]"
    explanation: "Numbers are sorted by least significant digit up to the most significant digit in successive stable passes."
  - input: "arr = [329, 457, 657, 839, 436, 720, 355]"
    output: "[329, 355, 436, 457, 657, 720, 839]"
    explanation: "All 3-digit keys are ordered non-decreasingly across units, tens, and hundreds passes."

constraints:
  - "0 <= arr.length <= 10^5"
  - "0 <= arr[i] <= 10^9"
  - "Input array consists of non-negative 32-bit signed integers"

realWorld:
  - title: "Fixed-Length Suffix Array Construction"
    description: "Sorting fixed-length substrings and cyclic shifts in linear time during genomic sequence alignment pipelines."
  - title: "Large Scale IP Routing Tables"
    description: "Sorting 32-bit IPv4 network addresses byte-by-byte in four linear passes for fast prefix lookup tables in routers."
  - title: "GPU High-Throughput Key Sorting"
    description: "Executing warp-level parallel radix sort passes on GPU hardware for million-particle graphics simulations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of non-negative integers `arr`, sort the array in ascending order using the Radix Sort algorithm.

Radix sort is a non-comparative sorting algorithm. It sorts integers by processing individual digits from the least significant digit (LSD) to the most significant digit (MSD), using a stable sub-sorting algorithm such as Counting Sort for each digit place.

Return the sorted array.
