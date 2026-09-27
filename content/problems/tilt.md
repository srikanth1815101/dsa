---
title: "Tilt"
date: 2026-09-27T11:03:00+05:30
difficulty: "Easy"
topics: ["Binary Tree", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Tilt/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/Tilt/engineering"

hints:
  - "The tilt of an individual node equals the absolute difference between the sum of values in its left subtree and right subtree."
  - "Use a bottom-up post-order traversal that returns the sum of node values in the current subtree while accumulating each node's tilt into a global sum."

youtubeId: ""

solutionUrl: "/solutions/tilt-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [1, 2, -1, -1, 3, -1, -1]"
    output: "1"
    explanation: "Tilt of node 2 = 0, tilt of node 3 = 0, tilt of root 1 = |2 - 3| = 1. Total tree tilt = 1."
  - input: "arr = [4, 2, 3, -1, -1, 5, -1, -1, 9, -1, 7, -1, -1]"
    output: "15"
    explanation: "Tilts: node 3 = 0, node 5 = 0, node 7 = 0, node 2 = |3 - 5| = 2, node 9 = |0 - 7| = 7, root 4 = |(3+5+2) - (9+7)| = |10 - 16| = 6. Total tilt = 15."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "-1000 <= node.val <= 1000"

realWorld:
  - title: "Cluster Load Imbalance Auditing"
    description: "Quantifying aggregate processing load disparity between mirrored worker partitions in a distributed computing tree."
  - title: "Financial Portfolio Exposure Skew"
    description: "Assessing hierarchical portfolio allocation skewness between defensive and aggressive asset branches."
  - title: "Hydraulic Network Flow Asymmetry"
    description: "Measuring total flow volume divergence between dual-branch fluid distribution piping topologies."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, find the total tilt of the binary tree.

The tilt of a tree node is the absolute difference between the sum of all values in its left subtree and the sum of all values in its right subtree. Null nodes have a tilt of `0`. The tilt of the whole tree is defined as the sum of all nodes' tilts.
