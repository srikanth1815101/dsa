---
title: "Top View of Binary Tree"
date: 2026-09-27T11:09:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BFS", "Hashing"]
companies: ["Amazon", "Walmart", "Flipkart"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TopViewOfBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TopViewOfBinaryTree/engineering"

hints:
  - "Use Breadth-First Search (BFS) level-order traversal so that higher nodes in each column are processed before lower nodes."
  - "Store the value of each column coordinate only when that column is first visited, naturally capturing the top-most visible node."

youtubeId: ""

solutionUrl: "/solutions/top-view-of-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1]"
    output: "[4, 2, 1, 3, 7]"
    explanation: "Viewing the tree from the top, node 4 occupies column -2, 2 occupies -1, 1 occupies 0 (occluding 5 and 6), 3 occupies 1, and 7 occupies 2."
  - input: "arr = [1, 2, -1, -1, 3, -1, -1]"
    output: "[2, 1, 3]"
    explanation: "The three nodes occupy columns -1, 0, and 1 respectively, all visible from the top."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Satellite Aerial Skyline Surveying"
    description: "Determining the visible urban roofline silhouettes occluding lower architectural structures when viewed directly overhead."
  - title: "LiDAR Point Cloud Horizon Profiling"
    description: "Computing top surface boundaries of canopy layers in autonomous vehicle navigation mapping."
  - title: "Circuit Board Component Footprint Detection"
    description: "Extracting unobstructed surface components along vertical visual cross-sections in automated optical inspection."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, return the top view of the binary tree as an array of integers.

The top view of a binary tree is the set of nodes visible when the tree is viewed from above. A node `X` is visible in the top view if it is the topmost node at its horizontal distance (column coordinate). The columns must be sorted from leftmost to rightmost. If the tree is empty, return an empty array `[]`.
