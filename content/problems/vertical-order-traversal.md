---
title: "Vertical Order Traversal"
date: 2026-09-27T11:08:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BFS", "Hashing"]
companies: ["Amazon", "Facebook", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/VerticalOrderTraversal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/VerticalOrderTraversal/engineering"

hints:
  - "Assign horizontal distance coordinates: root is at column 0, left children decrease column by 1, and right children increase column by 1."
  - "Use a breadth-first search (BFS) queue so nodes naturally arrive ordered from top level to bottom level within each column."

youtubeId: ""

solutionUrl: "/solutions/vertical-order-traversal-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 9, -1, -1, 20, 15, -1, -1, 7, -1, -1]"
    output: "[[9], [3, 15], [20], [7]]"
    explanation: "Column -1 contains [9], column 0 contains [3, 15], column 1 contains [20], and column 2 contains [7]."
  - input: "arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1]"
    output: "[[4], [2], [1, 5, 6], [3], [7]]"
    explanation: "Nodes 5 and 6 both fall on column 0, yielding top-to-bottom order [1, 5, 6]."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-10^4 <= node.val <= 10^4"

realWorld:
  - title: "GUI Layout Vertical Alignment Scanning"
    description: "Grouping interface components into vertical raster columns based on relative spatial offsets."
  - title: "Geographical Point-of-Interest Columnar Indexing"
    description: "Aggregating geospatial entities across discrete longitudinal vertical bands."
  - title: "Ray Tracing Vertical Slice Projections"
    description: "Projecting three-dimensional volumetric voxel hierarchies onto two-dimensional vertical sensor scanlines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, return the vertical order traversal of the binary tree's node values.

For each node at coordinate `(row, col)`, its left child is positioned at `(row + 1, col - 1)` and its right child is at `(row + 1, col + 1)`. The root node is located at `(0, 0)`. The vertical order traversal progresses from the leftmost column to the rightmost column. Within each column, nodes are ordered from top to bottom (row by row). Return the result as a 2D array of integers. If the tree is empty, return an empty 2D array `[]`.
