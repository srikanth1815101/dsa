---
title: "Traversals (Binary Tree)"
date: 2026-09-27T10:55:00+05:30
difficulty: "Easy"
topics: ["Binary Tree", "DFS", "Stack"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TraversalsBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TraversalsBinaryTree/engineering"

hints:
  - "Construct the binary tree using a state stack: state 1 adds left child, state 2 adds right child, and state 3 pops."
  - "In a recursive depth-first traversal, visit the node before children for pre-order, between left and right for in-order, and after children for post-order."

youtubeId: ""

solutionUrl: "/solutions/traversals-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [50, 25, -1, -1, 75, -1, -1]"
    output: "[[50, 25, 75], [25, 50, 75], [25, 75, 50]]"
    explanation: "Root 50 with left child 25 and right child 75 produces pre-order, in-order, and post-order sequences."
  - input: "arr = [10, 20, 30, -1, -1, -1, -1]"
    output: "[[10, 20, 30], [30, 20, 10], [30, 20, 10]]"
    explanation: "Left-skewed binary tree of 3 nodes produces the respective traversal rows."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "Output has 3 rows: row 0 is pre-order, row 1 is in-order, and row 2 is post-order."

realWorld:
  - title: "Compiler Expression Code Generation"
    description: "In-order traversal reproduces infix expressions with operator precedence, while post-order generates Reverse Polish notation."
  - title: "Database B-Tree Range Scans"
    description: "In-order traversal scans binary search trees to produce sorted record listings."
  - title: "Tree Serialization Checkpoints"
    description: "Combining pre-order and in-order traversals uniquely reconstructs binary tree structures without ambiguity."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, compute the pre-order, in-order, and post-order traversals of the binary tree.

Return a 2D integer array where:
- Row 0 contains the pre-order traversal sequence.
- Row 1 contains the in-order traversal sequence.
- Row 2 contains the post-order traversal sequence.

If the tree is empty, return an empty 2D array of dimensions `[3][0]`.
