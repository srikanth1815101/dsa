---
title: "LIS (Binary Search)"
date: 2026-09-27T20:36:00+05:30
difficulty: "Hard"
topics: ["Dynamic Programming", "Arrays", "Binary Search"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LISBinarySearch/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LISBinarySearch/engineering"

hints:
  - "Maintain a tails array where tails[i] stores the smallest tail among all increasing subsequences of length i + 1."
  - "Use binary search to find the insertion point of each element; if larger than all tails, append it; otherwise overwrite the first tail >= x."

youtubeId: ""

solutionUrl: "/solutions/lis-binary-search-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [10, 9, 2, 5, 3, 7, 101, 18]"
    output: "4"
    explanation: "The longest increasing subsequence is [2, 3, 7, 101], yielding length 4."
  - input: "nums = [7, 7, 7, 7, 7, 7, 7]"
    output: "1"
    explanation: "Since all elements are identical, the strictly increasing subsequence length is 1."

constraints:
  - "0 <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"
  - "Must achieve O(n log n) runtime performance."

realWorld:
  - title: "High-Frequency Stock Stream Analysis"
    description: "Detecting sustained positive pricing runs across high-throughput market tick feeds."
  - title: "Streaming Protocol Packet Sequencing"
    description: "Rebuilding ordered data packets in memory with minimal buffering latency."
  - title: "Nested Layout / Box Stacking"
    description: "Computing maximum nestable dimensions for 2D UI elements or packing containers."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums`, return the length of the longest strictly increasing subsequence using an optimal **$O(n \log n)$** binary search (patience sorting) approach.

A **subsequence** is a sequence derived from an array by deleting some or no elements without changing the order of the remaining elements. A sequence is strictly increasing if every element is strictly greater than the preceding element.

If the array is empty or `null`, return `0`.
