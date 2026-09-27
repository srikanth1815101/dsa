---
title: "Left Cloned Tree"
date: 2026-09-27T11:00:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LeftClonedTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LeftClonedTree/engineering"

hints:
  - "Recursively clone both the left and right subtrees first (post-order traversal pattern)."
  - "Create a duplicate node with the current node's value and insert it between the current node and its cloned left subtree."

youtubeId: ""

solutionUrl: "/solutions/left-cloned-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [50, 25, -1, -1, 75, -1, -1]"
    output: "[50, 50, 25, 25, 75, 75]"
    explanation: "Every node in the tree is duplicated and inserted as its own left child. The pre-order traversal of the resulting tree produces [50, 50, 25, 25, 75, 75]."
  - input: "arr = [10, -1, -1]"
    output: "[10, 10]"
    explanation: "A single root node 10 is duplicated as its left child, giving pre-order traversal [10, 10]."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Shadow State Replication in Simulation Systems"
    description: "Creating synchronous shadow clones of each entity hierarchy node to track preceding state frames in physics simulations."
  - title: "Compiler AST Intercept Insertion"
    description: "Duplicating syntax tree operand nodes to inject instrumentation and profiling hooks directly adjacent to execution points."
  - title: "Undo/Redo History Graph Duplication"
    description: "Duplicating active tree branch vertices to create rollback snapshots before speculative mutations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, transform the binary tree such that for every node, a duplicate node with identical value is inserted as its left child.

The original left child of the node becomes the left child of the newly created duplicate node, while the right child of the original node remains unchanged. Return the pre-order traversal of the transformed tree as an array of integers. If the tree is empty, return an empty array `[]`.
