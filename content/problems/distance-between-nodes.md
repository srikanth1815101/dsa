---
title: "Distance Between Nodes"
date: 2026-09-27T10:52:00+05:30
difficulty: "Medium"
topics: ["Trees", "DFS", "BFS"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DistanceBetweenNodes/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DistanceBetweenNodes/engineering"

hints:
  - "Find the node-to-root path for both target nodes d1 and d2."
  - "Find the LCA by tracing both paths backwards from the root; the distance is the sum of path lengths from each node to their lowest common ancestor."

youtubeId: ""

solutionUrl: "/solutions/distance-between-nodes-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1], d1 = 110, d2 = 120"
    output: "2"
    explanation: "Both nodes share parent 80; the path 110 -> 80 -> 120 consists of 2 edges."
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1], d1 = 70, d2 = 110"
    output: "3"
    explanation: "Path is 70 -> 30 -> 80 -> 110, which consists of 3 edges."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "Nodes d1 and d2 are guaranteed to exist in the tree."

realWorld:
  - title: "Network Router Hop Count Calculation"
    description: "Determining the number of router hops required to transmit packets between two LAN hosts via their shared gateway."
  - title: "Phylogenetic Evolutionary Distance"
    description: "Measuring mutation distance between biological taxa across evolutionary phylogenetic trees."
  - title: "Filesystem Relative Path Computation"
    description: "Calculating the number of directory traversal steps (cd .. / cd folder) between two filesystem resources."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, and two node values `d1` and `d2`, calculate and return the distance (number of edges) between `d1` and `d2`.

The distance between any node and itself is `0`.
