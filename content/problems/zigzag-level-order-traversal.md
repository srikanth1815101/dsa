---
title: "Zigzag Level Order Traversal"
date: 2026-09-27T11:11:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BFS", "Queue"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ZigzagLevelOrderTraversal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ZigzagLevelOrderTraversal/engineering"

hints:
  - "Perform a breadth-first search (BFS) level-order traversal while tracking the current level index."
  - "Reverse the order of nodes for odd levels (or use a double-ended deque) to alternate traversal direction between left-to-right and right-to-left."

youtubeId: ""

solutionUrl: "/solutions/zigzag-level-order-traversal-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 9, -1, -1, 20, 15, -1, -1, 7, -1, -1]"
    output: "[[3], [20, 9], [15, 7]]"
    explanation: "Level 0 runs left-to-right [3], level 1 alternates right-to-left [20, 9], and level 2 resumes left-to-right [15, 7]."
  - input: "arr = [1, -1, -1]"
    output: "[[1]]"
    explanation: "Single node tree has only level 0, producing [[1]]."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-1000 <= node.val <= 1000"

realWorld:
  - title: "Raster Display Serpent Scanlines"
    description: "Reading CRT/LED framebuffer scanline memory in alternating boustrophedon patterns to minimize display flicker."
  - title: "Warehouse Autonomous Forklift Pick Paths"
    description: "Routing automated warehouse picker vehicles across aisle tiers in alternating directional sweeps."
  - title: "Printing Press Ribbon Traversal"
    description: "Guiding continuous inkjet printer head sweeps across substrate tiers in alternating left and right passes."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, return the zigzag level order traversal of its nodes' values.

Traverse nodes level by level, alternating directions: from left to right for the first level, right to left for the next level, and continuing to alternate between each subsequent level. Return the result as a 2D array of integers. If the tree is empty, return an empty 2D array `[]`.
