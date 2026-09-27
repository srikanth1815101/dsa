---
title: "Merge Overlapping Intervals"
date: 2026-09-27T10:12:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Greedy"]
companies: ["Google", "Facebook", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeOverlappingIntervals/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MergeOverlappingIntervals/engineering"

hints:
  - "Sort the intervals primarily based on their starting times."
  - "Iterate through the sorted intervals; merge the current interval with the previous one if its start time is less than or equal to the previous interval's end time."

youtubeId: ""

solutionUrl: "/solutions/merge-overlapping-intervals-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]"
    output: "[[1, 6], [8, 10], [15, 18]]"
    explanation: "Intervals [1, 3] and [2, 6] overlap, merging into [1, 6]."
  - input: "intervals = [[1, 4], [4, 5]]"
    output: "[[1, 5]]"
    explanation: "Intervals [1, 4] and [4, 5] touch at boundary 4, merging into [1, 5]."

constraints:
  - "1 <= intervals.length <= 10^5"
  - "intervals[i].length == 2"
  - "0 <= start_i <= end_i <= 10^9"

realWorld:
  - title: "Calendar Appointment Scheduling"
    description: "Calendar platforms consolidate overlapping meeting slots into unified busy blocks."
  - title: "Memory Allocation Coalescing"
    description: "Operating system memory managers merge adjacent or overlapping freed memory blocks into contiguous chunks."
  - title: "Video Stream Buffer Segmenting"
    description: "Media players coalesce fragmented downloaded byte-range chunks into contiguous playback segments."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals.

Two intervals overlap if the start time of one is less than or equal to the end time of the other. Return an array of the non-overlapping intervals that cover all intervals in the input.
