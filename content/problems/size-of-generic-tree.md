---
title: "Size of Generic Tree"
date: 2026-09-27T10:43:00+05:30
difficulty: "Easy"
topics: ["Trees", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SizeOfGenericTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SizeOfGenericTree/engineering"

hints:
  - "The total size of a generic tree rooted at any node is 1 plus the sum of sizes of all its children subtrees."
  - "Use a depth-first recursive traversal where each child subtree returns its size to its parent."

youtubeId: ""

solutionUrl: "/solutions/size-of-generic-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]"
    output: "12"
    explanation: "The generic tree consists of 12 distinct nodes across 4 levels."
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "3"
    explanation: "The root 10 has two children: 20 and 30, giving a total of 3 nodes."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 represents a backtrack indicator during Euler traversal construction."
  - "All node values are positive integers."

realWorld:
  - title: "File System Folder Hierarchy Sizing"
    description: "Counting total directory and file nodes in hierarchical storage volumes."
  - title: "Organizational Chart Personnel Count"
    description: "Calculating total workforce headcounts across multi-level corporate reporting trees."
  - title: "HTML DOM Element Counting"
    description: "Determining total layout DOM nodes rendered on an active web page."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree (n-ary tree), where `-1` represents a backtrack delimiter, calculate and return the total number of nodes (size) in the generic tree.

If the tree is empty, return `0`.
