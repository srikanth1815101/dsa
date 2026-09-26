---
title: "Spiral Traversal"
date: 2026-09-26T19:14:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Two Pointers"]
companies: ["Amazon", "Zoho", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SpiralTraversal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SpiralTraversal/engineering"

hints:
  - "Maintain four bounding pointers: top, bottom, left, and right."
  - "Traverse the four perimeter segments in order (left-to-right along top, top-to-bottom along right, right-to-left along bottom, bottom-to-top along left), shrinking the respective boundary after each segment. Remember to verify top <= bottom and left <= right before traversing bottom and left segments."

youtubeId: ""

solutionUrl: "/solutions/spiral-traversal-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    output: "[1, 2, 3, 6, 9, 8, 7, 4, 5]"
    explanation: "Traverse top row (1, 2, 3), right column (6, 9), bottom row (8, 7), left column (4), and inner cell (5)."
  - input: "mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]"
    output: "[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]"
    explanation: "Clockwise spiral path covering outer boundary first, then traversing the inner segment."

constraints:
  - "1 <= mat.length, mat[0].length <= 500"
  - "-100 <= mat[i][j] <= 100"
  - "Total elements (m * n) <= 10^5"

realWorld:
  - title: "Optical Sensor Focal Scanning"
    description: "Reading pixel charges inward in concentric rectangular shells to detect radial lens distortion or vignetting artifacts."
  - title: "Subsurface Tunnel Boring & Cavity Excavation"
    description: "Controlling automated boring machines carving rectangular subway shafts layer by layer along outer rock perimeters."
  - title: "Image Watermarking & Steganography"
    description: "Encoding encrypted metadata along spiral pixel coordinates to resist conventional block-based spectral compression."
---
<!-- All rights reserved to CSRGO DSA -->

Given an $m \times n$ matrix `mat`, return an array of all elements traversed in **clockwise spiral order**.

Starting from the top-left corner, the traversal proceeds:
1. Left to right along the top remaining row.
2. Top to bottom down the rightmost remaining column.
3. Right to left across the bottom remaining row.
4. Bottom to top up the leftmost remaining column.
5. Repeat for inner concentric layers until all cells are visited.
