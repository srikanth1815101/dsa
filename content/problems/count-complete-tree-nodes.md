---
title: "Count Complete Tree Nodes"
date: 2026-10-01T01:31:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "Binary Search", "DFS"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CountCompleteTreeNodes/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CountCompleteTreeNodes/engineering"

hints:
  - "Compare the left depth and right depth of the tree. If they are equal, the left subtree is a full binary tree with (2^h - 1) nodes."
  - "If left depth exceeds right depth, the right subtree is full with depth (h - 1); recurse on left and right subtrees in O(log^2 n) time."

youtubeId: ""

solutionUrl: "/solutions/count-complete-tree-nodes-solution/"

timeComplexity: "O(log^2 n)"
spaceComplexity: "O(log n)"

examples:
  - input: "arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, -1]"
    output: "** `6` **"
    explanation: "** The binary tree has 6 nodes:"
  - input: "arr = []"
    output: "** `0` **"
    explanation: "** An empty tree has 0 nodes."

constraints:
  - "The number of nodes in the tree is in the range `[0, 5 * 10^4]`."
  - "0 <= Node.val <= 5 * 10^4"
  - "The input array is a valid pre-order serialization of a complete binary tree."

realWorld:
  - title: "Binary Heap Array Sizing"
    description: "Determining the exact populated element count in complete binary heap structures without linear scans."
  - title: "Storage Allocation Tree Auditing"
    description: "Verifying chunk occupancy in block storage log trees with logarithmic probe operations."
  - title: "Distributed Actor Tree Registry"
    description: "Counting active worker actors registered in a hierarchically balanced cluster topology."
weight: 32
---
<!-- All rights reserved to CSRGO DSA -->

Given the root of a **complete** binary tree represented by its pre-order serialized array (where `-1` denotes a null node), return the number of nodes in the tree.

According to Wikipedia, every level in a complete binary tree, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between `1` and `2^h` nodes inclusive at the last level `h`.

Design an algorithm that runs in less than $O(N)$ time complexity.
