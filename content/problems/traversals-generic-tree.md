---
title: "Traversals (Generic Tree)"
date: 2026-09-27T10:45:00+05:30
difficulty: "Easy"
topics: ["Trees", "DFS", "BFS"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TraversalsGenericTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TraversalsGenericTree/engineering"

hints:
  - "In pre-order traversal, record the node's value before recursively traversing any of its children."
  - "In post-order traversal, recursively traverse all children first, and record the node's value upon returning."

youtubeId: ""

solutionUrl: "/solutions/traversals-generic-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "[[10, 20, 30], [20, 30, 10]]"
    explanation: "Pre-order traversal visits root before children: [10, 20, 30]. Post-order visits children before root: [20, 30, 10]."
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, -1, -1]"
    output: "[[10, 20, 50, 60, 30], [50, 60, 20, 30, 10]]"
    explanation: "Pre-order outputs [10, 20, 50, 60, 30] and post-order outputs [50, 60, 20, 30, 10]."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "Output consists of two rows: row 0 is pre-order and row 1 is post-order."

realWorld:
  - title: "Compiler Abstract Syntax Tree Traversal"
    description: "Evaluating expression trees top-down (pre-order) for type-checking and bottom-up (post-order) for code generation."
  - title: "File Directory Size Aggregation"
    description: "Post-order traversal computes folder disk consumption by accumulating child directory sizes before parent updates."
  - title: "DOM Event Propagation Phases"
    description: "Modeling browser event capture (pre-order top-down) and event bubbling (post-order bottom-up) sequences."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, compute both the pre-order and post-order traversals of the tree.

Return a 2D integer array where:
- Row 0 contains the pre-order traversal sequence.
- Row 1 contains the post-order traversal sequence.

If the tree is empty, return an empty 2D array of size `[2][0]`.
