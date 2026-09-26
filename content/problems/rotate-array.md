---
title: "Rotate Array"
date: 2026-09-25T22:21:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateArray/engineering"

hints:
  - "Normalize rotation count k using modulo arithmetic: k = k % n; if k < 0, add n."
  - "Use the 3-reversal algorithm: reverse the first (n - k) elements, reverse the remaining k elements, then reverse the whole array."

youtubeId: ""

solutionUrl: "/solutions/rotate-array-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 3, 4, 5], k = 2"
    output: "[4, 5, 1, 2, 3]"
    explanation: "Rotating right by 2 shifts elements at the end to the front: [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3]."
  - input: "arr = [1, 2, 3, 4, 5, 6, 7], k = 3"
    output: "[5, 6, 7, 1, 2, 3, 4]"
    explanation: "Rotating right by 3 places the last 3 elements [5, 6, 7] at the front."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i], k <= 10^9"
  - "Rotate in-place with O(1) extra space; negative k values represent left rotations."

realWorld:
  - title: "Circular Ring Buffers"
    description: "Shifting read/write heads in low-latency ring buffers for real-time sensor streams and network queues."
  - title: "Image Carousel UI Rotation"
    description: "Cycling product display tiles in mobile and e-commerce web carousel animations."
  - title: "CPU Scheduler Time-Slice Rotation"
    description: "Reordering ready queues in round-robin operating system kernel schedulers."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` and an integer `k`, rotate the array `k` steps to the right. If `k` is negative, rotate the array `|k|` steps to the left. The rotation must be performed in-place with $O(1)$ extra memory, and return the modified array `arr`.
