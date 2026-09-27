---
title: "Linearize Tree"
date: 2026-09-27T10:49:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Linked List"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LinearizeTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LinearizeTree/engineering"

hints:
  - "Recursively linearize all child subtrees first so each child becomes a single-branch chain."
  - "Remove the last child from the parent's children list and append it to the tail of the second-to-last child chain."

youtubeId: ""

solutionUrl: "/solutions/linearize-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, -1, 40, -1, -1]"
    output: "[10, 20, 50, 60, 30, 40]"
    explanation: "Subtrees are linearized so that root 10 has only one child 20, whose tail connects to 30, whose tail connects to 40."
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "[10, 20, 30]"
    explanation: "Child 30 is attached to the tail of child 20, producing the single chain 10 -> 20 -> 30."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "The linearized tree must form a single-branch chain where each node has at most 1 child."

realWorld:
  - title: "Pipeline Workflow Serialization"
    description: "Flattening parallel workflow task dependency branches into a strictly sequential execution pipeline."
  - title: "Memory Flattening for Streaming Serialization"
    description: "Converting hierarchical tree documents into sequential record streams for flat file writes."
  - title: "GPU Instruction Execution Unrolling"
    description: "Linearizing hierarchical shader compute graphs into single-lane sequential instruction streams."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, linearize the generic tree in place such that every node has at most one child (transforming the tree into a single vertical chain).

The linearized chain must preserve pre-order traversal order: for any node, all nodes in its first child's subtree must precede all nodes in its second child's subtree, and so on.

Return the sequence of node values in the linearized chain as an array. If the tree is empty, return an empty array.
