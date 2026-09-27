---
title: "Print in Range"
date: 2026-09-27T11:16:00+05:30
difficulty: "Easy"
topics: ["BST", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PrintInRange/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PrintInRange/engineering"

hints:
  - "Take advantage of BST ordering: only recurse into the left child if the range's lower bound is strictly less than the node's value."
  - "Similarly, only explore the right child if the range's upper bound is strictly greater than the node's value, visiting matching nodes in sorted inorder sequence."

youtubeId: ""

solutionUrl: "/solutions/print-in-range-solution/"

timeComplexity: "O(k + h)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [50, 25, 12, -1, -1, 37, 30, -1, -1, 40, -1, -1, 75, 62, -1, -1, 87, -1, -1], low = 20, high = 65"
    output: "[25, 30, 37, 40, 50, 62]"
    explanation: "Nodes falling within [20, 65] in sorted order are 25, 30, 37, 40, 50, and 62."
  - input: "arr = [10, 5, -1, -1, 15, -1, -1], low = 7, high = 15"
    output: "[10, 15]"
    explanation: "Nodes in range [7, 15] are 10 and 15."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val, low, high <= 10^4"
  - "low <= high"

realWorld:
  - title: "Database Range Query Filtering"
    description: "Executing SELECT * WHERE id BETWEEN low AND high against an in-memory B-Tree index partition."
  - title: "Chronological Telemetry Event Windowing"
    description: "Streaming sensor log records stamped with Unix epoch timestamps falling within a designated diagnostic timeframe."
  - title: "E-Commerce Price Filter Slicing"
    description: "Retrieving catalog inventory items within a customer's specified minimum and maximum price boundary."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary search tree (BST) serialization with `-1` denoting `null`, and two integers `low` and `high`, return all node values that fall in the inclusive range `[low, high]` in ascending sorted order.

Return the result as an array of integers. If the tree is empty or no nodes fall within the specified range, return an empty array `[]`.
