---
title: "Height of Generic Tree"
date: 2026-09-27T10:44:00+05:30
difficulty: "Easy"
topics: ["Trees", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HeightOfGenericTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HeightOfGenericTree/engineering"

hints:
  - "The height of a tree in terms of edges is defined as the maximum height among all its children subtrees plus 1."
  - "Initialize the maximum child height to -1 so that a leaf node with zero children evaluates to height 0."

youtubeId: ""

solutionUrl: "/solutions/height-of-generic-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]"
    output: "3"
    explanation: "The longest path from root 10 to a deepest leaf node (110 or 120) has 3 edges: 10 -> 30 -> 80 -> 110."
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "1"
    explanation: "Root 10 connects directly to leaves 20 and 30 with 1 edge."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 indicates an Euler traversal pop operation."
  - "Height is measured in terms of edges (a single node has height 0)."

realWorld:
  - title: "Corporate Hierarchy Depth Analysis"
    description: "Determining maximum managerial layers from executive management down to individual contributors."
  - title: "Compiler Parse Tree Depth Checking"
    description: "Validating recursive syntax depth to protect compilers against stack overflow on nested expressions."
  - title: "File Directory Max Path Resolution"
    description: "Measuring maximum nested subfolder depth to enforce OS file path limits."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, calculate and return the height of the tree in terms of edges.

The height in terms of edges is defined as the number of edges on the longest path from the root to any leaf node. A single node tree has height `0`. If the tree is empty, return `-1`.
