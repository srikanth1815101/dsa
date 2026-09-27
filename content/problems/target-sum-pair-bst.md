---
title: "Target Sum Pair (BST)"
date: 2026-09-27T11:17:00+05:30
difficulty: "Easy"
topics: ["BST", "Two Pointers", "Hashing"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TargetSumPairBST/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TargetSumPairBST/engineering"

hints:
  - "An inorder traversal of a BST produces node values in strictly sorted ascending order."
  - "Extract the sorted list of values and apply the standard two-pointer technique from opposite ends to find if any pair sums to target."

youtubeId: ""

solutionUrl: "/solutions/target-sum-pair-bst-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [5, 3, 2, -1, -1, 4, -1, -1, 6, -1, 7, -1, -1], target = 9"
    output: "true"
    explanation: "Nodes 2 and 7 (or 3 and 6, 4 and 5) sum to 9, so the method returns true."
  - input: "arr = [5, 3, 2, -1, -1, 4, -1, -1, 6, -1, 7, -1, -1], target = 28"
    output: "false"
    explanation: "No pair of distinct nodes in the tree sums to 28."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val, target <= 10^4"

realWorld:
  - title: "Financial Ledger Complementary Transaction Pairing"
    description: "Finding dual offsetting debits and credits in an in-memory sorted accounting tree matching a reconciliation clearing target."
  - title: "Resource Capacity Bilateral Allocation"
    description: "Pairing two complementary compute instances from a balanced capacity hierarchy to hit a target workload quota."
  - title: "Autonomous Vehicle Dual-Waypoint Battery Budgeting"
    description: "Validating whether two candidate charging station stops sum exactly to a designated electrical capacity reserve."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary search tree (BST) serialization with `-1` denoting `null`, and an integer `target`, determine whether there exist two distinct elements in the BST whose values sum up to `target`.

Return `true` if such a pair exists, and `false` otherwise. If the tree contains fewer than two nodes, return `false`.
