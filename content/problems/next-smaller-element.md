---
title: "Next Smaller Element"
date: 2026-10-01T02:36:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Adobe", "Flipkart"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NextSmallerElement/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NextSmallerElement/engineering"

hints:
  - "A brute-force comparison takes O(n^2) time; consider using a monotonic stack to process elements in a single pass."
  - "Traverse the array from right to left while maintaining a monotonic stack of values that are candidate smaller elements."

youtubeId: ""

solutionUrl: "/solutions/next-smaller-element-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [4, 5, 2, 10, 8]"
    output: "[2, 2, -1, 8, -1]"
    explanation: "For 4 the next smaller is 2; for 5 it is 2; for 2 no smaller element exists to its right (-1); for 10 it is 8; for 8 none exists (-1)."
  - input: "nums = [3, 2, 1]"
    output: "[2, 1, -1]"
    explanation: "For 3 the next smaller is 2; for 2 the next smaller is 1; for 1 none exists (-1)."

constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^9 <= nums[i] <= 10^9"
  - "The returned array must have the exact same length as nums."

realWorld:
  - title: "Financial Order Book Depth"
    description: "Locating the immediate lower bid price tier in high-frequency trading matching engines."
  - title: "Browser Layout Engine Sizing"
    description: "Finding the boundary of enclosing text and container elements during DOM reflow calculation."
  - title: "Geographical Watershed Modeling"
    description: "Tracing downhill rainwater runoff by determining the adjacent lower elevation cell in topological grids."
weight: 97
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `nums`, find the next smaller element for each element in the array.

The **next smaller element** of an element `nums[i]` is the first element to its right that is strictly smaller than `nums[i]`. If no smaller element exists to the right of `nums[i]`, output `-1` for that element.

Return an array containing the next smaller element for each position.
