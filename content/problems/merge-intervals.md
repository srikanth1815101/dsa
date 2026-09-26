---
title: "Merge Intervals"
date: 2026-09-26T19:05:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Greedy"]
companies: ["Google", "Facebook", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MergeIntervals/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MergeIntervals/engineering"

hints:
  - "Sorting intervals by their starting points makes overlapping intervals adjacent."
  - "Iterate through the sorted intervals. If the current interval overlaps with the previous one (i.e. current.start <= prev.end), merge them by updating prev.end = Math.max(prev.end, current.end). Otherwise, append the current interval to the result list."

youtubeId: ""

solutionUrl: "/solutions/merge-intervals-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]"
    output: "[[1, 6], [8, 10], [15, 18]]"
    explanation: "Since intervals [1, 3] and [2, 6] overlap, they merge into [1, 6]."
  - input: "intervals = [[1, 4], [4, 5]]"
    output: "[[1, 5]]"
    explanation: "Intervals [1, 4] and [4, 5] touch at boundary 4 and are merged."

constraints:
  - "1 <= intervals.length <= 10^4"
  - "intervals[i].length == 2"
  - "0 <= start_i <= end_i <= 10^4"

realWorld:
  - title: "Calendar Meeting Schedule Consolidation"
    description: "Merging overlapping event bookings to derive continuous occupied and free booking windows."
  - title: "File Chunk Download Assembly"
    description: "Consolidating contiguous and overlapping byte range chunks during parallel multi-part file downloads."
  - title: "Virtual Memory Allocation Defragmentation"
    description: "Merging contiguous and overlapping virtual address descriptors into unified virtual memory blocks."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
