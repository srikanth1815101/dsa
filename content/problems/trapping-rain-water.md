---
title: "Trapping Rain Water"
date: 2026-09-26T19:00:00+05:30
difficulty: "Hard"
topics: ["Arrays", "Two Pointers", "Stack"]
companies: ["Goldman Sachs", "Google", "Flipkart"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TrappingRainWater/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TrappingRainWater/engineering"

hints:
  - "The amount of water trapped directly above any column i is determined by: Math.min(leftMax, rightMax) - height[i]."
  - "Use a two-pointer approach starting from both ends. Maintain leftMax and rightMax, and always advance the pointer associated with the smaller boundary inward to trap water in O(1) space."

youtubeId: ""

solutionUrl: "/solutions/trapping-rain-water-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]"
    output: "6"
    explanation: "The elevation map traps a total of 6 units of rainwater."
  - input: "height = [4, 2, 0, 3, 2, 5]"
    output: "9"
    explanation: "The elevation map traps a total of 9 units of rainwater."

constraints:
  - "n == height.length"
  - "1 <= n <= 10^5"
  - "0 <= height[i] <= 10^5"

realWorld:
  - title: "Hydrological Topographic Retention"
    description: "Modeling rainwater basin storage and flood water retention across digital elevation models (DEM)."
  - title: "Architectural Roof Drainage Modeling"
    description: "Calculating stormwater ponding risk and pooling capacity on complex non-planar industrial roof structures."
  - title: "Additive Manufacturing SLA Resin Pooling"
    description: "Simulating uncurated photopolymer resin trap cavities during stereolithography 3D print operations."
---
<!-- All rights reserved to CSRGO DSA -->

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.
