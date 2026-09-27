---
title: "LCA (Generic Tree)"
date: 2026-09-27T10:51:00+05:30
difficulty: "Medium"
topics: ["Trees", "DFS", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LCAGenericTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LCAGenericTree/engineering"

hints:
  - "Find the node-to-root path for both target nodes d1 and d2."
  - "Iterate backwards from the root along both path lists simultaneously until the ancestor values diverge."

youtubeId: ""

solutionUrl: "/solutions/lca-generic-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1], d1 = 110, d2 = 120"
    output: "80"
    explanation: "Nodes 110 and 120 are sibling children under common parent 80, so their lowest common ancestor is 80."
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, -1, -1, 40, 100, -1, -1, -1], d1 = 70, d2 = 100"
    output: "10"
    explanation: "Nodes 70 and 100 belong to subtrees rooted at 30 and 40 respectively, so their lowest common ancestor is root 10."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "Nodes d1 and d2 are guaranteed to exist in the tree."

realWorld:
  - title: "Git Merge Base Resolution"
    description: "Finding the common ancestor commit between two branches to prepare a three-way git merge."
  - title: "Corporate Management Mediation"
    description: "Identifying the lowest-level joint executive supervisor who oversees two distinct team leads."
  - title: "DOM Common Event Delegation Root"
    description: "Determining the lowest common container element to attach shared event listeners for multiple interacting UI widgets."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, and two node values `d1` and `d2`, find and return the Lowest Common Ancestor (LCA) of `d1` and `d2`.

The Lowest Common Ancestor is the deepest node in the tree that is an ancestor to both `d1` and `d2` (where a node can be an ancestor of itself).
