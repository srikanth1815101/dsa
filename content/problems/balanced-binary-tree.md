---
title: "Balanced Binary Tree"
date: 2026-09-27T11:04:00+05:30
difficulty: "Easy"
topics: ["Binary Tree", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BalancedBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BalancedBinaryTree/engineering"

hints:
  - "A binary tree is height-balanced if for every node, the heights of its left and right subtrees differ by at most 1."
  - "Use a bottom-up post-order DFS where a subtree returns -1 immediately if it is unbalanced, avoiding redundant top-down re-computations."

youtubeId: ""

solutionUrl: "/solutions/balanced-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [3, 9, -1, -1, 20, 15, -1, -1, 7, -1, -1]"
    output: "true"
    explanation: "At every node, the depth difference between left and right subtrees is at most 1, so the tree is height-balanced."
  - input: "arr = [1, 2, 3, 4, -1, -1, 4, -1, -1, 3, -1, -1, 2, -1, -1]"
    output: "false"
    explanation: "The left subtree has height 3 while the right subtree has height 1; the difference 3 - 1 = 2 > 1 violates balance."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Database B-Tree Index Rebalancing"
    description: "Verifying whether an in-memory index partition meets AVL height-invariance invariants before triggering node rotations."
  - title: "Distributed Partition Topology Verification"
    description: "Ensuring worker hierarchy replication trees do not develop lopsided routing chains causing hot spots."
  - title: "Audio Synthesis Signal Graph Verification"
    description: "Validating that audio mixing routing graphs maintain balanced pipeline latencies across symmetric channels."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, determine if the binary tree is height-balanced.

A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than one. An empty tree is considered balanced. Return `true` if the tree is balanced, and `false` otherwise.
