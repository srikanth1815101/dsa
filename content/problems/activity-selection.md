---
title: "Activity Selection"
date: 2026-10-01T01:34:00+05:30
difficulty: "Medium"
topics: ["Greedy", "Sorting"]
companies: ["Amazon", "Google", "Morgan Stanley"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ActivitySelection/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ActivitySelection/engineering"

hints:
  - "Sort all activities by their finish times in ascending order."
  - "Iterate through the sorted activities and pick each activity whose start time is greater than or equal to the finish time of the last chosen activity."

youtubeId: ""

solutionUrl: "/solutions/activity-selection-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(1)"

examples:
  - input: "start = [1, 3, 2, 5], end = [2, 4, 3, 6]"
    output: "** `3` **"
    explanation: "** A person can perform at most three activities: 1. Activity with interval `[1, 2]` 2. Activity with interval `[3, 4]` 3. Activity with interval `[5, 6]` Or intervals `[1, 2]`, `[2, 3]`, and `[5, 6]`."
  - input: "start = [1, 3, 0, 5, 8, 5], end = [2, 4, 6, 7, 9, 9]"
    output: "** `4` **"
    explanation: "** The maximum set of activities is `[1, 2]`, `[3, 4]`, `[5, 7]`, and `[8, 9]`."

constraints:
  - "1 <= start.length <= 10^5"
  - "end.length == start.length"
  - "0 <= start[i] < end[i] <= 10^9"

realWorld:
  - title: "Conference Room Booking Optimization"
    description: "Scheduling the maximum non-overlapping corporate meetings in a single conference hall."
  - title: "Single-Threaded Task Execution"
    description: "Maximizing discrete job completion count on a dedicated single-threaded real-time processor."
  - title: "Telescope Observation Time Allocation"
    description: "Maximizing astronomical observations scheduled on a shared single-lens observatory telescope."
weight: 35
---
<!-- All rights reserved to CSRGO DSA -->

Given `n` activities with their start and end times, select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.

An activity can start at the exact same moment that the previous activity finishes (i.e., if activity A ends at time `t`, activity B can start at time `t`).

Return the maximum number of activities that can be selected.
