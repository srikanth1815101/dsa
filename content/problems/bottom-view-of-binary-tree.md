---
title: "Bottom View of Binary Tree"
date: 2026-09-27T11:10:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BFS", "Hashing"]
companies: ["Amazon", "Flipkart", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BottomViewOfBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BottomViewOfBinaryTree/engineering"

hints:
  - "Use Breadth-First Search (BFS) with horizontal distance column coordinates."
  - "Overwrite the value for a column whenever a new node at that column is processed, ensuring the lowest node persists."

youtubeId: ""

solutionUrl: "/solutions/bottom-view-of-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [20, 8, 5, -1, -1, 3, 10, -1, -1, 14, -1, -1, 22, -1, 25, -1, -1]"
    output: "[5, 10, 3, 14, 25]"
    explanation: "Nodes 5, 10, 3, 14, and 25 are the lowest visible nodes across columns -2, -1, 0, 1, and 2 respectively."
  - input: "arr = [1, 2, -1, -1, 3, -1, -1]"
    output: "[2, 1, 3]"
    explanation: "The three nodes occupy columns -1, 0, and 1, all visible from below."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Subsurface Geophysical Stratification"
    description: "Determining the lowest detectable geologic boundary layer across vertical seismic survey soundings."
  - title: "Ground-Level Canopy Occlusion Profiling"
    description: "Tracking lowest tree canopy boundaries facing ground-based forestry sensors."
  - title: "Under-chassis Automotive Sonar Scanning"
    description: "Detecting the lowest clearance boundaries of vehicular undercarriage assemblies."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, return the bottom view of the binary tree as an array of integers.

The bottom view of a binary tree is the set of nodes visible when looking at the tree from underneath. If multiple nodes exist at the same horizontal distance (column coordinate), the one positioned at the deepest level (or visited last during level-order traversal) is visible. The output array must be sorted by column coordinate from leftmost to rightmost. If the tree is empty, return an empty array `[]`.
