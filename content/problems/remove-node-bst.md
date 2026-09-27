---
title: "Remove Node (BST)"
date: 2026-09-27T11:13:00+05:30
difficulty: "Medium"
topics: ["BST", "Binary Search", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveNodeBST/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveNodeBST/engineering"

hints:
  - "Locate the target node using BST search properties: navigate left if target is smaller, right if larger."
  - "When deleting a node with two children, replace its value with the maximum value from its left subtree (inorder predecessor) and recursively delete that duplicate leaf."

youtubeId: ""

solutionUrl: "/solutions/remove-node-bst-solution/"

timeComplexity: "O(h)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [5, 3, 2, -1, -1, 4, -1, -1, 6, -1, 7, -1, -1], val = 3"
    output: "[5, 2, 4, 6, 7]"
    explanation: "Node 3 with two children 2 and 4 is replaced by its inorder predecessor 2, leaving the updated BST with pre-order [5, 2, 4, 6, 7]."
  - input: "arr = [5, 3, -1, -1, 6, -1, -1], val = 5"
    output: "[3, 6]"
    explanation: "Deleting root 5 replaces it with its left child 3 (or successor 6), leaving children re-linked."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val, val <= 10^4"

realWorld:
  - title: "Database Index Record Deletion"
    description: "Removing an index pointer record from a database B-Tree index partition maintaining binary search order."
  - title: "Session Eviction in Authentication Trees"
    description: "Invalidating and pruning expired authentication tokens stored in an in-memory binary search session cache."
  - title: "Priority Task Cancellation"
    description: "Pruning scheduled task nodes from a deadline-ordered binary search tree upon external cancellation signals."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary search tree (BST) serialization with `-1` denoting `null`, and an integer `val` representing the key to delete, remove the node with the given key from the BST while preserving its binary search tree properties.

Return the pre-order traversal of the updated BST as an array of integers. If the key does not exist in the BST, return the original tree unchanged. If the entire tree becomes empty, return an empty array `[]`.
