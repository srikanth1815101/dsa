---
title: "Container With Most Water"
date: 2026-09-26T19:01:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Two Pointers", "Greedy"]
companies: ["Amazon", "Facebook", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ContainerWithMostWater/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ContainerWithMostWater/engineering"

hints:
  - "The capacity of a container formed between indices left and right is: Math.min(height[left], height[right]) * (right - left)."
  - "Start with the widest container (left = 0, right = n - 1). The area is constrained by the shorter line; moving the taller line inward cannot increase the capacity. Therefore, always advance the shorter line inward."

youtubeId: ""

solutionUrl: "/solutions/container-with-most-water-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]"
    output: "49"
    explanation: "The vertical lines at index 1 (height 8) and index 8 (height 7) enclose a container of width 7 and height min(8, 7) = 7, giving area 7 * 7 = 49."
  - input: "height = [1, 1]"
    output: "1"
    explanation: "Width is 1 and height is 1, yielding maximum area 1 * 1 = 1."

constraints:
  - "n == height.length"
  - "2 <= n <= 10^5"
  - "0 <= height[i] <= 10^4"

realWorld:
  - title: "Hydraulic Reservoir Siting"
    description: "Determining the optimal pair of canyon retaining dams along a river to maximize reservoir retention volume."
  - title: "Solar Array Shading Optimization"
    description: "Selecting optimal boundary roof parapet coordinates to maximize unshaded sunlight collector area."
  - title: "Spectrometry Peak Integration"
    description: "Enclosing the maximum area under curve between telemetry signal peak bounds in liquid chromatography."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the $i^{\text{th}}$ line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
