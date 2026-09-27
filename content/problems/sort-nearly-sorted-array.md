---
title: "Sort Nearly Sorted Array"
date: 2026-09-27T11:25:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Heap", "Sorting"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SortNearlySortedArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SortNearlySortedArray/engineering"

hints:
  - "Since each element is at most k positions away from its sorted slot, the minimum element for any position must be within the next k + 1 elements."
  - "Maintain a min-heap of size at most k + 1. Poll the smallest element to place into the sorted array, then push the next available element."

youtubeId: ""

solutionUrl: "/solutions/sort-nearly-sorted-array-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"

examples:
  - input: "arr = [2, 6, 3, 12, 56, 8], k = 3"
    output: "[2, 3, 6, 8, 12, 56]"
    explanation: "Each element is within 3 positions of its final sorted position. The sorted array is [2, 3, 6, 8, 12, 56]."
  - input: "arr = [6, 5, 3, 2, 8, 10, 9], k = 3"
    output: "[2, 3, 5, 6, 8, 9, 10]"
    explanation: "Sorting the k-sorted array yields [2, 3, 5, 6, 8, 9, 10]."

constraints:
  - "1 <= arr.length <= 10^5"
  - "0 <= k < arr.length"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Time-Drifting Event Stream Ingestion"
    description: "Sorting high-throughput telemetry records arriving with slight network latency jitter bounded by k seconds."
  - title: "Audio Frame Jitter Buffer Smoothing"
    description: "Reordering slightly scrambled VoIP packet sequences within an allowable jitter window."
  - title: "Distributed Database Commit Log Merging"
    description: "Sequencing raft log transactions where timestamp skews are bounded within small sliding intervals."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of $n$ elements where each element is at most $k$ positions away from its target position in the sorted array, sort the array completely.

Your algorithm should run in $O(n \log k)$ time and use $O(k)$ auxiliary space.
