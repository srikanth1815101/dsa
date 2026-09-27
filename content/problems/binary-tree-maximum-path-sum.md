---
title: "Binary Tree Maximum Path Sum"
date: 2026-09-27T11:06:00+05:30
difficulty: "Hard"
topics: ["Binary Tree", "DFS", "Dynamic Programming"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BinaryTreeMaximumPathSum/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BinaryTreeMaximumPathSum/engineering"

hints:
  - "At each node, the maximum path that turns at that node has sum node.val + max(0, leftGain) + max(0, rightGain)."
  - "The function returning to the parent can only extend one branch: return node.val + max(0, max(leftGain, rightGain))."

youtubeId: ""

solutionUrl: "/solutions/binary-tree-maximum-path-sum-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [1, 2, -1, -1, 3, -1, -1]"
    output: "6"
    explanation: "The optimal path connects 2 -> 1 -> 3 with path sum 2 + 1 + 3 = 6."
  - input: "arr = [-10, 9, -1, -1, 20, 15, -1, -1, 7, -1, -1]"
    output: "42"
    explanation: "The optimal path connects 15 -> 20 -> 7, giving a sum of 15 + 20 + 7 = 42."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-1000 <= node.val <= 1000"

realWorld:
  - title: "Financial Arbitrage Route Optimization"
    description: "Determining the sequence of interconnected transactions across financial ledger routing trees that yields maximum cumulative profit."
  - title: "Semiconductor Clock Distribution Optimization"
    description: "Finding the maximum signal-gain transmission chain across silicon clock tree distribution networks."
  - title: "Pipeline Throughput Maximization"
    description: "Identifying the highest continuous volumetric capacity flow path through hierarchical fluid conduits."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, find the maximum path sum of any non-empty path in the tree.

A path is a sequence of nodes where each pair of adjacent nodes has an edge connecting them, and each node appears in the sequence at most once. The path does not necessarily need to pass through the root. Return the maximum sum of values along any valid path.
