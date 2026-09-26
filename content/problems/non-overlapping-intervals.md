---
title: "Non Overlapping Intervals"
date: 2026-09-26T19:07:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Greedy"]
companies: ["Google", "Amazon", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/NonOverlappingIntervals/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/NonOverlappingIntervals/engineering"

hints:
  - "Minimizing the number of removed intervals is equivalent to maximizing the number of mutually compatible intervals you can retain."
  - "Sort the intervals by their end times. Greedily pick the interval that finishes earliest; this leaves the maximum possible remaining window for future intervals. Whenever a subsequent interval starts before the current interval ends, increment your removal count."

youtubeId: ""

solutionUrl: "/solutions/non-overlapping-intervals-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(1)"

examples:
  - input: "intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]"
    output: "1"
    explanation: "[1, 3] can be removed and the remaining intervals [1, 2], [2, 3], and [3, 4] are non-overlapping."
  - input: "intervals = [[1, 2], [1, 2], [1, 2]]"
    output: "2"
    explanation: "Two [1, 2] intervals must be removed to leave a single non-overlapping interval."

constraints:
  - "1 <= intervals.length <= 10^5"
  - "intervals[i].length == 2"
  - "-5 * 10^4 <= start_i < end_i <= 5 * 10^4"

realWorld:
  - title: "Single-Core CPU Job Scheduling"
    description: "Maximizing the number of non-preemptive batch computation jobs executed on a shared worker node without execution overlaps."
  - title: "Conference Hall Booking Optimization"
    description: "Accepting the maximal number of non-conflicting event reservations for an auditorium venue."
  - title: "Satellite Downlink Frequency Reservation"
    description: "Resolving overlapping telemetry download window requests to minimize dropped satellite transmission passes."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of intervals `intervals` where `intervals[i] = [start_i, end_i]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which touch at a single point (such as `[1, 2]` and `[2, 3]`) are non-overlapping.
