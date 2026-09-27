---
title: "Diameter of Generic Tree"
date: 2026-09-27T10:53:00+05:30
difficulty: "Medium"
topics: ["Trees", "DFS", "Dynamic Programming"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DiameterOfGenericTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DiameterOfGenericTree/engineering"

hints:
  - "At each node, find the highest and second highest depths among all its children subtrees."
  - "The maximum candidate diameter passing through any node equals the sum of its two deepest child subtree heights plus 2."

youtubeId: ""

solutionUrl: "/solutions/diameter-of-generic-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]"
    output: "5"
    explanation: "The longest simple path between any two nodes in the tree is between 50 (or 60) and 110 (or 120), containing 5 edges."
  - input: "arr = [10, 20, -1, 30, -1, -1]"
    output: "2"
    explanation: "The longest path is 20 -> 10 -> 30, which has 2 edges."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "Diameter is measured as the maximum number of edges between any two nodes."

realWorld:
  - title: "Network Backbone Bottleneck Analysis"
    description: "Determining the longest communication latency path between any two edge routers across a tree network."
  - title: "Distributed Consensus Round Trip Estimation"
    description: "Calculating maximum packet propagation diameter across master-slave distributed computing topologies."
  - title: "Circuit Routing Critical Path Delay"
    description: "Measuring maximum propagation delay along hierarchical logic clock distribution trees."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, calculate and return the diameter of the generic tree.

The diameter is defined as the maximum number of edges between any two nodes in the tree. If the tree has fewer than 2 nodes, its diameter is `0`.
