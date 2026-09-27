---
title: "Level Order (Generic Tree)"
date: 2026-09-27T10:46:00+05:30
difficulty: "Medium"
topics: ["Trees", "BFS", "Queue"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LevelOrderGenericTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LevelOrderGenericTree/engineering"

hints:
  - "Use a First-In-First-Out (FIFO) queue initialized with the root node."
  - "Repeatedly dequeue the front node, record its value, and enqueue all its children from left to right."

youtubeId: ""

solutionUrl: "/solutions/level-order-generic-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "[10, 20, 30]"
    explanation: "Level 0 has root 10. Level 1 has children 20 and 30, visited left to right."
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]"
    output: "[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]"
    explanation: "Nodes are visited level by level from top to bottom and left to right within each level."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "All node values are integers."

realWorld:
  - title: "Organizational Hierarchy Level Broadcasting"
    description: "Sending notifications tier by tier starting with executives, then directors, then managers."
  - title: "Network Broadcast Flood Routing"
    description: "Broadcasting packets across peer-to-peer network hops in radial concentric tiers."
  - title: "DOM Level-Synchronous Layout Rendering"
    description: "CSS layout calculation passes calculating geometry level by level from root viewport container."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, return the level-order traversal (breadth-first search) of the tree as an array.

Nodes on the same level should appear from left to right, and higher levels must precede lower levels. If the tree is empty, return an empty array.
