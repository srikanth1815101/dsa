---
title: "Validate BST"
date: 2026-09-27T11:19:00+05:30
difficulty: "Medium"
topics: ["BST", "DFS", "Inorder Traversal"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ValidateBST/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ValidateBST/engineering"

hints:
  - "Do not just check a node against its immediate children; every node in the left subtree must be strictly less than all its ancestors that branch to the right."
  - "Pass valid value boundaries (min and max constraints) down during a recursive DFS traversal to validate each node in O(1) time."

youtubeId: ""

solutionUrl: "/solutions/validate-bst-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [2, 1, -1, -1, 3, -1, -1]"
    output: "true"
    explanation: "Root 2 has left child 1 (< 2) and right child 3 (> 2), satisfying binary search tree properties."
  - input: "arr = [5, 1, -1, -1, 4, 3, -1, -1, 6, -1, -1]"
    output: "false"
    explanation: "Node 4 is the right child of root 5, but its left child 3 violates BST properties by being less than root 5."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Database Index Integrity Check"
    description: "Validating index tree structures on reboot following sudden power loss to detect corrupted search partitions."
  - title: "In-Memory Key-Value Storage Sanitization"
    description: "Verifying that concurrenct lock-free tree updates have not broken strict sorting invariants."
  - title: "Compiler Symbol Scope Hierarchy Verification"
    description: "Ensuring symbol lookup trees maintain strict lexical order during recursive identifier resolution."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys strictly less than the node's key.
- The right subtree of a node contains only nodes with keys strictly greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

An empty tree is considered a valid BST. Return `true` if the tree is a valid BST, and `false` otherwise.
