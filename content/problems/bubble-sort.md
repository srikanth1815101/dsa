---
title: "Bubble Sort"
date: 2026-09-27T11:30:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Sorting"]
companies: ["TCS", "Infosys", "Amazon"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BubbleSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BubbleSort/engineering"

hints:
  - "Compare adjacent elements in each pass, swapping them if the left element is strictly greater than the right."
  - "After each iteration i, the i largest elements will have bubbled up to their correct final positions at the end of the array."

youtubeId: ""

solutionUrl: "/solutions/bubble-sort-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [64, 34, 25, 12, 22, 11, 90]"
    output: "[11, 12, 22, 25, 34, 64, 90]"
    explanation: "Adjacent comparisons bubble up larger elements to the right until the entire array is sorted."
  - input: "arr = [5, 1, 4, 2, 8]"
    output: "[1, 2, 4, 5, 8]"
    explanation: "Array sorted into non-decreasing order."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Educational Algorithm Visualization"
    description: "Demonstrating fundamental quadratic-time comparison sorting mechanics in computer science curriculums."
  - title: "Near-Sorted Micro-Array Verification"
    description: "Quickly certifying sorted order with early termination flags across tiny in-memory telemetry buffers."
  - title: "Embedded Firmware Low-Footprint Sorting"
    description: "In-place array ordering under zero auxiliary heap allocation constraints in legacy microcontroller firmware."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, sort the array in ascending order using the Bubble Sort algorithm.

Return the sorted array.
