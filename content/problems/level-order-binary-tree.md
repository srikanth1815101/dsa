---
title: "Level Order (Binary Tree)"
date: 2026-09-27T10:56:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BFS", "Queue"]
companies: ["Microsoft", "Amazon", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LevelOrderBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LevelOrderBinaryTree/engineering"

hints:
  - "Use a FIFO Queue initialized with the root of the binary tree."
  - "At each step, dequeue the front node, record its value, and enqueue its non-null left and right children in order."

youtubeId: ""

solutionUrl: "/solutions/level-order-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [50, 25, 12, -1, -1, 37, -1, -1, 75, 62, -1, -1, 87, -1, -1]"
    output: "[50, 25, 75, 12, 37, 62, 87]"
    explanation: "Nodes are visited level by level: [50], then [25, 75], then [12, 37, 62, 87]."
  - input: "arr = [10, 20, -1, -1, 30, -1, -1]"
    output: "[10, 20, 30]"
    explanation: "Level 0 has 10, Level 1 has 20 and 30."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "Nodes on each level appear from left to right."

realWorld:
  - title: "Network Hierarchical Broadcast Routing"
    description: "Broadcasting packets across binary router distribution subnets level by level."
  - title: "Huffman Encoding Tree Transmission"
    description: "Serializing prefix tree code tables in level order for compact header storage."
  - title: "Heap Array Serialization"
    description: "Mapping pointer-based binary trees into flat array representations for cache-optimized heap operations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, compute the level-order traversal of the binary tree.

Return the sequence of node values in level-order (breadth-first search) as an array. If the tree is empty, return an empty array.
