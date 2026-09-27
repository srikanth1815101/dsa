---
title: "Replace Sum of Larger"
date: 2026-09-27T11:14:00+05:30
difficulty: "Medium"
topics: ["BST", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReplaceSumOfLarger/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ReplaceSumOfLarger/engineering"

hints:
  - "Traverse the BST in reverse inorder (right subtree, current node, left subtree) to visit nodes in strictly descending order."
  - "Maintain a running accumulator of visited values; replace the current node's value with the accumulator before adding the node's original value to the accumulator."

youtubeId: ""

solutionUrl: "/solutions/replace-sum-of-larger-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [50, 25, -1, -1, 75, -1, -1]"
    output: "[75, 125, 0]"
    explanation: "75 is replaced with 0 (no larger node). 50 is replaced with 75. 25 is replaced with 50 + 75 = 125. Pre-order traversal is [75, 125, 0]."
  - input: "arr = [10, -1, -1]"
    output: "[0]"
    explanation: "The single node has no larger elements in the tree, so its value is replaced with 0."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "Cumulative Outperformance Metrics in Finance"
    description: "Replacing equity asset ranks with the aggregate market capitalization of all outperforming securities in a portfolio hierarchy."
  - title: "Network Tier Queuing Latency Accumulation"
    description: "Transforming priority routing trees so each router tracks the total cumulative transmission weight of all higher-priority streams."
  - title: "Competitive Leaderboard Superior Score Aggregation"
    description: "Augmenting gamer score nodes with the combined point total of all players ranked strictly above them."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary search tree (BST) serialization with `-1` denoting `null`, replace the value of each node with the sum of all node values that are strictly greater than it in the original BST.

Return the pre-order traversal of the transformed tree as an array of integers. If the tree is empty, return an empty array `[]`.
