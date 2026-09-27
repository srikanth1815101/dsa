---
title: "Selection Sort"
date: 2026-09-27T19:48:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Sorting"]
companies: ["TCS", "Infosys", "Amazon"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SelectionSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SelectionSort/engineering"

hints:
  - "In each iteration i, find the index of the minimum element in the unsorted suffix starting from index i to n - 1."
  - "Swap the located minimum element with the element currently residing at index i."

youtubeId: ""

solutionUrl: "/solutions/selection-sort-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [64, 25, 12, 22, 11]"
    output: "[11, 12, 22, 25, 64]"
    explanation: "In each step, the smallest remaining element is selected and placed at its correct sorted position."
  - input: "arr = [29, 10, 14, 37, 13]"
    output: "[10, 13, 14, 29, 37]"
    explanation: "The elements are rearranged in non-decreasing order using repeated minimum selection."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i] <= 10^9"
  - "All input elements fit within standard 32-bit signed integer boundaries"

realWorld:
  - title: "Flash Memory Wear-Leveling Writes"
    description: "Minimizing total write cycles on EEPROM/flash memory blocks where write operations are costly and selection sort guarantees at most O(n) total memory swaps."
  - title: "Scoreboard Rank Selection"
    description: "Extracting the top-k guaranteed minimum or maximum ranked contestants sequentially from small in-memory tournament logs."
  - title: "Resource-Constrained Device Sorting"
    description: "Sorting hardware sensor registers in deeply embedded systems requiring predictable, minimal data movement with zero dynamic heap allocation."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, sort the array in ascending order using the Selection Sort algorithm.

The algorithm segments the list into two parts: a sorted subarray built from left to right, and a remaining unsorted subarray. In every iteration, the smallest element from the unsorted subarray is identified and swapped into its final position at the boundary of the sorted subarray.

Return the sorted array.
