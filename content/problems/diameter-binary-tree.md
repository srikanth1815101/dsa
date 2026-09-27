---
title: "Diameter (Binary Tree)"
date: 2026-09-27T11:02:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Dynamic Programming"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DiameterBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DiameterBinaryTree/engineering"

hints:
  - "The diameter through any node is the sum of the heights of its left and right subtrees plus 2 (where null has height -1)."
  - "Compute tree height recursively and update a global diameter variable in post-order fashion at each node."

youtubeId: ""

solutionUrl: "/solutions/diameter-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [50, 25, 12, -1, -1, 37, -1, -1, 75, 62, -1, -1, 87, -1, -1]"
    output: "4"
    explanation: "The longest path connects leaf 12 to leaf 87 through root 50 (12 -> 25 -> 50 -> 75 -> 87), consisting of 4 edges."
  - input: "arr = [10, 20, -1, -1, 30, -1, -1]"
    output: "2"
    explanation: "The longest path is 20 -> 10 -> 30, containing 2 edges."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Network Backbone Span Analysis"
    description: "Determining the longest communication round-trip latency between any two peripheral end-stations in a spanning tree."
  - title: "Hierarchical Process IPC Routing"
    description: "Calculating maximum inter-process communication hop count across process supervision hierarchies."
  - title: "Distributed Consensus Propagation Diameter"
    description: "Finding maximum broadcast hop latency required for quorum agreement in hierarchical ledger networks."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, find the diameter of the binary tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree, measured by the number of edges along the path. This path may or may not pass through the root. If the tree is empty or contains only a single node, its diameter is `0`.
