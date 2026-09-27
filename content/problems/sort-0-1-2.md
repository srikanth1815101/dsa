---
title: "Sort 0 1 2"
date: 2026-09-27T19:57:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Two Pointers"]
companies: ["Adobe", "Amazon", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Sort012/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Sort012/engineering"

hints:
  - "Maintain three pointers: low marking the boundary for 0s, mid exploring the array, and high marking the boundary for 2s."
  - "If arr[mid] == 0, swap with arr[low] and advance both low and mid. If arr[mid] == 1, advance mid. If arr[mid] == 2, swap with arr[high] and decrement high without advancing mid."

youtubeId: ""

solutionUrl: "/solutions/sort-0-1-2-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [2, 0, 2, 1, 1, 0]"
    output: "[0, 0, 1, 1, 2, 2]"
    explanation: "The elements are partitioned into 0s, 1s, and 2s in-place in a single pass."
  - input: "arr = [2, 0, 1]"
    output: "[0, 1, 2]"
    explanation: "The three distinct values are sorted in ascending order."

constraints:
  - "0 <= arr.length <= 10^5"
  - "arr[i] is either 0, 1, or 2"
  - "Must sort the array in-place using O(1) auxiliary space"

realWorld:
  - title: "Tri-Color Flag Memory Partitioning"
    description: "Partitioning heap-allocated memory blocks into three distinct allocation categories (free, semi-reserved, committed) in garbage collectors."
  - title: "Priority Queue Tri-Band Traffic Shaping"
    description: "Classifying and buffering network traffic packets into Low (0), Medium (1), and High (2) priority QoS egress queues."
  - title: "RGB Image Color Quantization"
    description: "Sorting pixel color channels into distinct threshold bands during image compression and dithering passes."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array `arr` containing `n` integers where each element is either `0`, `1`, or `2`, sort the array in-place so that all `0`s come first, followed by all `1`s, and all `2`s come last.

You must solve this problem without using any library sort function and achieve an in-place single-pass $O(n)$ time complexity using the Dutch National Flag algorithm.

Return the sorted array.
