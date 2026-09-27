---
title: "LCA in BST"
date: 2026-09-27T11:15:00+05:30
difficulty: "Easy"
topics: ["BST", "Binary Search", "Recursion"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LCAInBST/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LCAInBST/engineering"

hints:
  - "Take advantage of the sorted BST property: if both values are strictly smaller than the current node, the LCA lies in the left subtree."
  - "If both values are strictly larger than the current node, the LCA lies in the right subtree; otherwise, the current node is the lowest common ancestor where the search paths diverge."

youtubeId: ""

solutionUrl: "/solutions/lca-in-bst-solution/"

timeComplexity: "O(h)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [6, 2, 0, -1, -1, 4, 3, -1, -1, 5, -1, -1, 8, 7, -1, -1, 9, -1, -1], d1 = 2, d2 = 8"
    output: "6"
    explanation: "Node 2 is in the left subtree and node 8 is in the right subtree of root 6, making 6 their lowest common ancestor."
  - input: "arr = [6, 2, 0, -1, -1, 4, 3, -1, -1, 5, -1, -1, 8, 7, -1, -1, 9, -1, -1], d1 = 2, d2 = 4"
    output: "2"
    explanation: "Because a node is allowed to be an ancestor of itself, node 2 is the LCA of 2 and 4."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val, d1, d2 <= 10^4"
  - "d1 and d2 are guaranteed to exist in the BST."

realWorld:
  - title: "IP Subnet Route Summarization"
    description: "Finding the most specific common subnet prefix shared by two destination host IP addresses in a binary search prefix tree."
  - title: "Organizational Hierarchy Reporting Nexus"
    description: "Determining the lowest common managerial tier overseeing two functional team members in a binary management structure."
  - title: "File Directory Common Mount Point Resolution"
    description: "Identifying the deepest shared parent directory namespace between two relative resource paths."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary search tree (BST) serialization with `-1` denoting `null`, and two values `d1` and `d2` that exist in the tree, find the Lowest Common Ancestor (LCA) node's value.

The lowest common ancestor between two nodes `d1` and `d2` is defined as the lowest node in the tree that has both `d1` and `d2` as descendants (where a node is allowed to be a descendant of itself).
