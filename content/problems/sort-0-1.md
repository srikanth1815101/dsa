---
title: "Sort 0 1"
date: 2026-09-27T19:56:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Sort01/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Sort01/engineering"

hints:
  - "Use a two-pointer partitioning technique where pointer i tracks the boundary for 0s and pointer j scans the array."
  - "Whenever arr[j] == 0, swap arr[i] with arr[j] and advance pointer i so that all zeros collect on the left."

youtubeId: ""

solutionUrl: "/solutions/sort-0-1-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [0, 1, 0, 1, 1, 0, 0, 1]"
    output: "[0, 0, 0, 0, 1, 1, 1, 1]"
    explanation: "All 0s are partitioned to the left side and all 1s to the right side in a single linear pass."
  - input: "arr = [1, 1, 0, 0, 1, 0]"
    output: "[0, 0, 0, 1, 1, 1]"
    explanation: "The binary array is sorted in-place in ascending order."

constraints:
  - "0 <= arr.length <= 10^5"
  - "arr[i] is either 0 or 1"
  - "Sorting must be performed in-place with O(1) auxiliary space"

realWorld:
  - title: "Binary Flag Segregation in Memory"
    description: "Segregating active worker threads from idle threads in thread pool scheduling arrays without auxiliary buffers."
  - title: "Network Packet Prioritization"
    description: "Partitioning expedited forwarding network frames (0) from best-effort frames (1) in router ingress buffers."
  - title: "Image Binary Thresholding Cleanup"
    description: "Grouping foreground and background bitmask flags across 1D scanned pixel scanlines in computer vision preprocessing."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array `arr` containing only `0`s and `1`s, sort the array in-place in ascending order such that all `0`s appear before all `1`s.

You should achieve this in a single pass with $O(n)$ time complexity and $O(1)$ extra space.

Return the sorted array.
