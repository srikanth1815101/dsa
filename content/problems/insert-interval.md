---
title: "Insert Interval"
date: 2026-09-26T19:06:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Greedy"]
companies: ["Google", "Facebook", "LinkedIn"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InsertInterval/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InsertInterval/engineering"

hints:
  - "Since intervals is already sorted, you can divide the problem into three linear phases: intervals before newInterval, intervals overlapping newInterval, and intervals after newInterval."
  - "In the second phase, merge all overlapping intervals into newInterval by iteratively updating newInterval[0] = Math.min(newInterval[0], intervals[i][0]) and newInterval[1] = Math.max(newInterval[1], intervals[i][1])."

youtubeId: ""

solutionUrl: "/solutions/insert-interval-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "intervals = [[1, 3], [6, 9]], newInterval = [2, 5]"
    output: "[[1, 5], [6, 9]]"
    explanation: "Because newInterval [2, 5] overlaps with [1, 3], they merge into [1, 5]."
  - input: "intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]"
    output: "[[1, 2], [3, 10], [12, 16]]"
    explanation: "The new interval [4, 8] overlaps with [3, 5], [6, 7], and [8, 10], consolidating them into [3, 10]."

constraints:
  - "0 <= intervals.length <= 10^4"
  - "intervals[i].length == 2"
  - "0 <= start_i <= end_i <= 10^5"
  - "intervals is sorted by start_i in ascending order."
  - "newInterval.length == 2"
  - "0 <= start <= end <= 10^5"

realWorld:
  - title: "Calendar Dynamic Schedule Inset"
    description: "Inserting high-priority meeting blocks into pre-sorted attendee schedules and coalescing resulting conflict time windows."
  - title: "Video Stream Frame GOP Infill"
    description: "Inserting missing audio and video frame chunks into ordered continuous streaming media containers."
  - title: "Database Extent Allocation"
    description: "Inserting newly reserved contiguous memory range extents into an extant B-tree index catalog."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start_i, end_i]` sorted in ascending order by $start_i$. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by $start_i$ and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after the insertion.
