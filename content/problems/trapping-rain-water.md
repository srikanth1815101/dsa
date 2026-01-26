---
title: "Trapping Rain Water"
date: 2024-01-23T00:00:00Z
difficulty: "Hard"
topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack"]
companies: ["Amazon", "Google", "Bloomberg"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/trapping-rain-water"
hints:
  - "Water at each position = min(maxLeft, maxRight) - height."
  - "Use two pointers from both ends to avoid extra space."
youtubeId: "ZI2z5pq0TqA"
solutionUrl: "/solutions/trapping-rain-water-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]"
    output: "6"
    explanation: "Water is trapped at indices 2, 4, 5, 6 (total = 6 units)."
  - input: "height = [4,2,0,3,2,5]"
    output: "9"
    explanation: "Water fills the gaps between bars."
constraints:
  - "n == height.length"
  - "1 <= n <= 2 × 10^4"
  - "0 <= height[i] <= 10^5"
realWorld:
  - title: "Urban Planning"
    description: "Calculating water retention in city landscapes for flood management."
  - title: "Resource Pooling"
    description: "Computing available space between resource peaks."
  - title: "Histogram Analysis"
    description: "Finding container capacity in industrial storage systems."
---

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.
