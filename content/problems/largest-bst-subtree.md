---
title: "Largest BST Subtree"
date: 2026-09-27T11:05:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BST", "Dynamic Programming"]
companies: ["Amazon", "Google", "DE Shaw"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LargestBSTSubtree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LargestBSTSubtree/engineering"

hints:
  - "A subtree is a valid BST if both left and right subtrees are valid BSTs, and node.val > max(leftSubtree) and node.val < min(rightSubtree)."
  - "Return a composite tuple (isBST, size, min, max) from each node in post-order so the parent can validate itself in O(1) time."

youtubeId: ""

solutionUrl: "/solutions/largest-bst-subtree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 5, 1, -1, -1, 8, -1, -1, 15, -1, 7, -1, -1]"
    output: "3"
    explanation: "Subtree rooted at node 5 (nodes 1, 5, 8) forms a valid BST with 3 nodes. The entire tree is not a BST because 7 < 10 appears in the right subtree."
  - input: "arr = [50, 25, 12, -1, -1, 37, -1, -1, 75, 62, -1, -1, 87, -1, -1]"
    output: "7"
    explanation: "The entire binary tree satisfies binary search tree properties everywhere, so the largest BST subtree has size 7."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Database Corrupted B-Tree Index Recovery"
    description: "Locating the largest uncorrupted, ordered search partition inside a partially damaged in-memory index file."
  - title: "Hierarchical Cache Sanitization"
    description: "Extracting the maximal contiguous subtree that satisfies binary search ordering invariants for high-speed range queries."
  - title: "Symbol Table Verification in Compilers"
    description: "Verifying the maximum valid scope subtree conforming to lexicographical key retrieval properties."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, find the size (number of nodes) of the largest subtree that is a valid Binary Search Tree (BST).

A subtree of a binary tree refers to any node along with all of its descendants. A valid BST requires that for every node, all values in its left subtree are strictly less than the node's value, and all values in its right subtree are strictly greater than the node's value. If the tree is empty, return `0`.
