---
title: "Path to Leaf"
date: 2026-09-27T10:59:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PathToLeaf/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PathToLeaf/engineering"

hints:
  - "Traverse recursively down the tree maintaining both the accumulated path string and the running sum."
  - "When a leaf node is encountered (both left and right children null), check whether the total sum falls within [low, high]."

youtubeId: ""

solutionUrl: "/solutions/path-to-leaf-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [50, 25, 12, -1, -1, 37, 30, -1, -1, -1, 75, 62, -1, -1, 87, -1, -1], low = 100, high = 200"
    output: "[\"50 25 37 30\", \"50 75 62\"]"
    explanation: "Path 50 -> 25 -> 37 -> 30 has sum 142 and path 50 -> 75 -> 62 has sum 187, both falling within [100, 200]."
  - input: "arr = [50, 25, -1, -1, 75, -1, -1], low = 70, high = 80"
    output: "[\"50 25\"]"
    explanation: "Leaf path 50 -> 25 yields sum 75, within [70, 80], whereas 50 -> 75 yields sum 125."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= low <= high <= 10^4"
  - "-1000 <= node.val <= 1000"

realWorld:
  - title: "Budget-Constrained Supply Route Discovery"
    description: "Filtering logistics distribution branches from a central depot to fulfillment terminals whose aggregate transit cost fits within budget bounds."
  - title: "Network Transmission Latency Bounds"
    description: "Validating network communication paths from origin server to edge leaf nodes that fall within acceptable quality-of-service latency thresholds."
  - title: "Game Engine Decision Tree Branching"
    description: "Evaluating decision tree narrative outcomes whose combined resource impact satisfies game difficulty constraints."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, and two integers `low` and `high`, find all root-to-leaf paths whose sum of node values lies in the range `[low, high]` (inclusive).

Each path should be formatted as a string of space-separated node values from root to leaf (e.g., `"50 25 12"`). Return all qualifying paths in an array in left-to-right (depth-first) order. If no path satisfies the condition or the tree is empty, return an empty array `[]`.
