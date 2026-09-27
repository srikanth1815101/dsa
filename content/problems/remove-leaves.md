---
title: "Remove Leaves"
date: 2026-09-27T10:48:00+05:30
difficulty: "Easy"
topics: ["Trees", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveLeaves/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveLeaves/engineering"

hints:
  - "Iterate through the children of each node backwards from the last child to the first child to safely remove elements without index shift issues."
  - "Check if a child has zero children before deciding to remove it; only prune existing leaves, not nodes that become leaves after their children are removed."

youtubeId: ""

solutionUrl: "/solutions/remove-leaves-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, -1, 40, -1, -1]"
    output: "[10, 20, 30]"
    explanation: "Leaf nodes 50, 60, 70, and 40 are removed. Nodes 20 and 30 are retained since they were internal nodes."
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "[10]"
    explanation: "Leaves 20 and 30 are removed, leaving only the root 10."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "If the tree consists solely of a single leaf root node, removing leaves produces an empty tree."

realWorld:
  - title: "File Directory Empty File Pruning"
    description: "Removing zero-byte leaf files from nested directory trees before archival."
  - title: "Compiler Dead Code Elimination"
    description: "Pruning unused terminal expression leaf nodes from intermediate AST representations."
  - title: "Decision Tree Pruning"
    description: "Trimming uninformative leaf branches from decision trees to prevent machine learning overfitting."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, remove all leaf nodes from the tree and return the level-order traversal of the pruned tree.

Only the original leaf nodes (nodes with 0 children) should be removed in a single pruning pass; internal nodes that subsequently become childless must not be pruned. If the root itself is a leaf node, pruning leaves makes the tree empty, so return an empty array `[]`.
