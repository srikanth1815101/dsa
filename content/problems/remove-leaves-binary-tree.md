---
title: "Remove Leaves (Binary Tree)"
date: 2026-09-27T11:01:00+05:30
difficulty: "Easy"
topics: ["Binary Tree", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveLeavesBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveLeavesBinaryTree/engineering"

hints:
  - "Use a post-order traversal pattern so child nodes are inspected and pruned before their parent determines its own status."
  - "If a node has neither left nor right children, return null to detach it from its parent."

youtubeId: ""

solutionUrl: "/solutions/remove-leaves-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [50, 25, 12, -1, -1, 37, -1, -1, 75, 62, -1, -1, 87, -1, -1]"
    output: "[50, 25, 75]"
    explanation: "Leaves 12, 37, 62, and 87 are pruned, leaving parent nodes 25 and 75 attached to root 50."
  - input: "arr = [10, -1, -1]"
    output: "[]"
    explanation: "The single root node is itself a leaf, so pruning leaves produces an empty tree."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "DOM Tree Dead-Element Pruning"
    description: "Stripping empty terminal DOM nodes or trailing empty elements from web application UI hierarchies."
  - title: "Cache Hierarchy Eviction"
    description: "Removing depleted leaf-tier cache buckets in hierarchical memory architectures."
  - title: "Decision Tree Overfitting Pruning"
    description: "Pruning terminal low-confidence leaf branches in classification decision trees to avoid statistical overfitting."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, remove all leaf nodes (nodes with neither left nor right children) from the binary tree.

Return the pre-order traversal of the modified tree as an array of integers. If the root node itself is a leaf and gets removed, return an empty array `[]`.
