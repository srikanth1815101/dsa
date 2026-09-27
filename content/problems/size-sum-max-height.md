---
title: "Size Sum Max Height"
date: 2026-09-27T10:54:00+05:30
difficulty: "Easy"
topics: ["Trees", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SizeSumMaxHeight/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SizeSumMaxHeight/engineering"

hints:
  - "Maintain accumulator variables for size, sum, maximum value, and tree height as you traverse the tree."
  - "At each node, aggregate the child subtree metrics to return [size, sum, max, height] in a single post-order pass."

youtubeId: ""

solutionUrl: "/solutions/size-sum-max-height-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]"
    output: "[12, 780, 120, 3]"
    explanation: "Tree has 12 nodes, total sum 780, max value 120, and height 3 in terms of edges."
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "[3, 60, 30, 1]"
    explanation: "3 nodes, sum 10 + 20 + 30 = 60, max 30, and height 1."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "Output array format is [size, sum, max, height]."

realWorld:
  - title: "Filesystem Volume Telemetry Audit"
    description: "Collecting folder statistics including file count, total byte allocation, maximum file size, and deepest subfolder nesting in a single disk scan."
  - title: "Corporate Payroll Analysis"
    description: "Computing total employee count, aggregate salary sum, top executive salary, and organizational management tiers."
  - title: "Compiler Symbol Table Metrics"
    description: "Computing scope depth, identifier count, and maximum nesting complexity in an abstract syntax tree pass."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, compute the size, sum of values, maximum node value, and height (in terms of edges) of the tree in a single traversal.

Return the results as an array of 4 integers:
`[size, sum, max, height]`

If the tree is empty, return `[0, 0, 0, -1]`.
