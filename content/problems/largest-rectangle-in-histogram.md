---
title: "Largest Rectangle in Histogram"
date: 2024-01-27T00:00:00Z
difficulty: "Hard"
topics: ["Array", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Google", "Microsoft"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/largest-rectangle-in-histogram"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/largest-rectangle-in-histogram"
hints:
  - "Use a monotonic increasing stack of indices."
  - "When you see a shorter bar, calculate areas for taller bars."
youtubeId: "zx5Sw9130L0"
solutionUrl: "/solutions/largest-rectangle-in-histogram-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
examples:
  - input: "heights = [2,1,5,6,2,3]"
    output: "10"
    explanation: "The largest rectangle spans bars of height 5 and 6 (area = 2×5 = 10)."
  - input: "heights = [2,4]"
    output: "4"
    explanation: "The largest rectangle is the single bar of height 4."
constraints:
  - "1 <= heights.length <= 10^5"
  - "0 <= heights[i] <= 10^4"
realWorld:
  - title: "Skyline Problems"
    description: "Computing maximum rectangular area under building silhouettes."
  - title: "Resource Allocation"
    description: "Finding maximum contiguous block for memory allocation."
  - title: "Image Processing"
    description: "Finding largest rectangles in binary matrices."
---

Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return the area of the **largest rectangle** in the histogram.
