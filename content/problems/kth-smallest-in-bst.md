---
title: "Kth Smallest in BST"
date: 2026-09-27T11:18:00+05:30
difficulty: "Medium"
topics: ["BST", "DFS", "Inorder Traversal"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KthSmallestInBST/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KthSmallestInBST/engineering"

hints:
  - "An inorder traversal (left, root, right) of a binary search tree visits nodes in strictly increasing sorted order."
  - "Track a counter during the traversal and terminate early as soon as the k-th node is encountered."

youtubeId: ""

solutionUrl: "/solutions/kth-smallest-in-bst-solution/"

timeComplexity: "O(h + k)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [3, 1, -1, 2, -1, -1, 4, -1, -1], k = 1"
    output: "1"
    explanation: "Sorted order of node values is [1, 2, 3, 4]. The 1st smallest element is 1."
  - input: "arr = [5, 3, 2, 1, -1, -1, -1, 4, -1, -1, 6, -1, -1], k = 3"
    output: "3"
    explanation: "Sorted order is [1, 2, 3, 4, 5, 6]. The 3rd smallest element is 3."

constraints:
  - "1 <= k <= n <= 10^5"
  - "arr represents a valid serialized BST."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Database K-th Percentile Rank Queries"
    description: "Determining cutoff benchmark values at the k-th rank position in indexed financial transactions."
  - title: "High-Frequency Order Book Rank Matching"
    description: "Finding the k-th best available bid price from an in-memory binary search order book."
  - title: "Distributed Job Priority Scheduling"
    description: "Selecting the k-th highest-priority queued task for worker dispatch in a real-time cluster."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary search tree (BST) serialization with `-1` denoting `null`, and an integer `k` (1-indexed), find the `k`-th smallest element in the BST.

Return the integer value of the `k`-th smallest node. The value `k` is guaranteed to be within the range `1 <= k <= n` where `n` is the number of nodes in the tree.
