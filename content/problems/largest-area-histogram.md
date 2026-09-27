---
title: "Largest Area Histogram"
date: 2026-09-27T10:05:00+05:30
difficulty: "Hard"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LargestAreaHistogram/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LargestAreaHistogram/engineering"

hints:
  - "For each bar, find the index of the first smaller bar to its left and to its right."
  - "The width of the maximal rectangle with the current bar as the shortest bar is rightIndex - leftIndex - 1."

youtubeId: ""

solutionUrl: "/solutions/largest-area-histogram-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "heights = [2, 1, 5, 6, 2, 3]"
    output: "10"
    explanation: "The largest rectangle is formed by bars at indices 2 and 3 (heights 5 and 6) with height 5 and width 2, giving area 10."
  - input: "heights = [2, 4]"
    output: "4"
    explanation: "The rectangle formed by the single bar at index 1 of height 4 and width 1 yields area 4."

constraints:
  - "1 <= heights.length <= 10^5"
  - "0 <= heights[i] <= 10^4"
  - "Width of each histogram bar is considered exactly 1."

realWorld:
  - title: "Image Processing and Bounding Boxes"
    description: "Computer vision algorithms determine maximal rectangular bounding boxes enclosing uniform pixel color patches."
  - title: "Database 2D Spatial Range Queries"
    description: "Geographic Information Systems (GIS) locate maximal unconstrained rectangular regions within terrain elevation profiles."
  - title: "Urban Planning Skyline Analysis"
    description: "Architectural visualization engines evaluate contiguous facade surface area across dense city block skylines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `heights` representing the heights of adjacent histogram bars where the width of each bar is `1`, find the area of the largest rectangle that can be formed within the histogram.

Return the maximum rectangular area possible.
