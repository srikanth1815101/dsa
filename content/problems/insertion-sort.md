---
title: "Insertion Sort"
date: 2026-09-27T19:50:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Sorting"]
companies: ["TCS", "Amazon", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/InsertionSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/InsertionSort/engineering"

hints:
  - "Iterate through the array starting from index 1, picking the current element as a key."
  - "Shift elements of the already sorted prefix that are greater than key one position to the right, then insert key into its correct vacant spot."

youtubeId: ""

solutionUrl: "/solutions/insertion-sort-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [12, 11, 13, 5, 6]"
    output: "[5, 6, 11, 12, 13]"
    explanation: "Each element is progressively inserted into its correct place within the preceding sorted portion of the array."
  - input: "arr = [31, 41, 59, 26, 41, 58]"
    output: "[26, 31, 41, 41, 58, 59]"
    explanation: "Duplicate values maintain their relative order as elements are shifted and inserted."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i] <= 10^9"
  - "Array values fit within 32-bit signed integer limits"

realWorld:
  - title: "Online Real-Time Streaming Ingestion"
    description: "Inserting streaming transaction data or telemetry ticks into a continuously sorted buffer with O(n) adaptive complexity when incoming items are already close to order."
  - title: "Small Subarray Hybrid Sorting"
    description: "Serving as the base-case cutoff sorting routine in industrial hybrid algorithms like TimSort and Dual-Pivot Quicksort for arrays of length under 16-32."
  - title: "Card Hand Game Rendering"
    description: "Maintaining a player's ordered hand in card gaming interfaces by shifting existing cards right to insert a newly dealt card at its rank position."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, sort the array in ascending order using the Insertion Sort algorithm.

Insertion sort operates similarly to sorting playing cards in your hand. The array is conceptually split into a sorted section and an unsorted section. Values from the unsorted portion are picked one by one and inserted at the appropriate position within the sorted subarray by shifting greater elements to the right.

Return the sorted array.
