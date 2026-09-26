---
title: "Reverse Array"
date: 2026-09-25T22:18:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ReverseArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ReverseArray/engineering"

hints:
  - "Use two pointers initialized at the first (index 0) and last (index n - 1) elements of the array."
  - "Swap the elements at both pointers, then move the left pointer forward and the right pointer backward until they meet."

youtubeId: ""

solutionUrl: "/solutions/reverse-array-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 3, 4, 5]"
    output: "[5, 4, 3, 2, 1]"
    explanation: "Elements are swapped from outside in: 1 swaps with 5, 2 swaps with 4, and middle element 3 stays in place."
  - input: "arr = [10, 20, 30, 40]"
    output: "[40, 30, 20, 10]"
    explanation: "10 swaps with 40, and 20 swaps with 30, producing the reversed array."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "The reversal must be performed in-place with O(1) auxiliary memory."

realWorld:
  - title: "Undo/Redo History Stacks"
    description: "Inverting chronological event streams to replay user actions in reverse sequence during rollbacks."
  - title: "Audio & Media Playback"
    description: "Reversing audio sample buffers for DJ scratching, backward audio analysis, and video reverse-play pipelines."
  - title: "Endianness Byte Swapping"
    description: "Reversing byte arrays in network protocols to convert between Little-Endian and Big-Endian byte orders."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, reverse its elements in-place and return the reversed array.
