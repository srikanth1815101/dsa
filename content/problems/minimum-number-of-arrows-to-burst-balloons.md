---
title: "Minimum Number of Arrows to Burst Balloons"
date: 2026-10-01T02:47:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Greedy"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumNumberOfArrowsToBurstBalloons/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumNumberOfArrowsToBurstBalloons/engineering"

hints:
  - "Sort the balloon intervals by their end coordinates xend."
  - "Place an arrow at the end coordinate of the first balloon; skip all subsequent balloons that start before or at this arrow position."

youtubeId: ""

solutionUrl: "/solutions/minimum-number-of-arrows-to-burst-balloons-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(1)"

examples:
  - input: "points = [[10,16],[2,8],[1,6],[7,12]]"
    output: "2"
    explanation: "First arrow at x = 6 bursts [2,8] and [1,6]. Second arrow at x = 12 bursts [10,16] and [7,12]."
  - input: "points = [[1,2],[3,4],[5,6],[7,8]]"
    output: "4"
    explanation: "None of the balloon intervals overlap, so 4 separate arrows are required."

constraints:
  - "1 <= points.length <= 10^5"
  - "points[i].length == 2"
  - "-2^31 <= xstart < xend <= 2^31 - 1"

realWorld:
  - title: "Sensor Calibration Trigger Grouping"
    description: "Minimizing hardware sync strobe pulses across overlapping sensor sampling windows."
  - title: "Batch Server Task Scheduling"
    description: "Minimizing batch job worker wakeups that can process overlapping queue execution windows."
  - title: "Laser Rangefinder Pulse Optimization"
    description: "Minimizing laser trigger shots that penetrate overlapping line-of-sight target envelopes."
weight: 108
---
<!-- All rights reserved to CSRGO DSA -->

There are some spherical balloons taped to a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose horizontal diameter stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

An arrow can be shot up **exactly vertically** from different points along the x-axis. A balloon with `[xstart, xend]` is burst by an arrow shot at `x` if `xstart <= x <= xend`. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return *the minimum number of arrows that must be shot to burst all balloons*.
