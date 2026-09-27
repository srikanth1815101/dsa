---
title: "Add Node (BST)"
date: 2026-09-27T11:12:00+05:30
difficulty: "Easy"
topics: ["BST", "Binary Search", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddNodeBST/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddNodeBST/engineering"

hints:
  - "Compare the target value with the current node: if smaller, recurse left; if larger, recurse right."
  - "When a null child pointer is reached, instantiate and attach the new node at that position."

youtubeId: ""

solutionUrl: "/solutions/add-node-bst-solution/"

timeComplexity: "O(h)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [4, 2, 1, -1, -1, 3, -1, -1, 7, -1, -1], val = 5"
    output: "[4, 2, 1, 3, 7, 5]"
    explanation: "Inserting 5 navigates right of 4, then left of 7, creating a new left child of 7. Pre-order traversal is [4, 2, 1, 3, 7, 5]."
  - input: "arr = [], val = 5"
    output: "[5]"
    explanation: "Inserting into an empty tree creates a new root node with value 5."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val, val <= 10^4"
  - "val does not already exist in the BST."

realWorld:
  - title: "Database Index Insertion"
    description: "Inserting new primary key records into an in-memory B-Tree index partition maintaining binary search order."
  - title: "Real-Time Leaderboard Score Ingestion"
    description: "Inserting incoming gamer scores into a sorted ranking tree for low-latency percentile queries."
  - title: "Dynamic IP Routing Table Updates"
    description: "Adding new destination subnet prefix records to a longest-prefix-match binary search lookup tree."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary search tree (BST) serialization with `-1` denoting `null`, and an integer `val` to insert into the tree, insert the value into the BST such that the binary search tree property is preserved.

Return the pre-order traversal of the BST after the insertion as an array of integers. If the tree is initially empty, the newly inserted value becomes the root node.
