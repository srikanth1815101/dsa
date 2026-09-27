---
title: "Number of Provinces"
date: 2026-09-27T21:03:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Facebook"]
topics: ["Graph", "Union Find", "DFS"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NumberOfProvinces/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NumberOfProvinces/engineering"
hints:
  - "This problem is equivalent to counting the number of connected components in an undirected graph."
  - "You can use Depth-First Search (DFS), Breadth-First Search (BFS), or Disjoint Set Union (Union-Find)."
  - "Iterate through each city from 0 to n - 1. If it has not been visited yet, trigger a traversal to mark all reachable cities and increment the province count."
youtubeId: ""
solutionUrl: "/solutions/number-of-provinces-solution/"
timeComplexity: "O(n^2)"
spaceComplexity: "O(n)"
examples:
  - input: |
      isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
    output: |
      2
    explanation: "Cities 0 and 1 form 1 province, and city 2 forms another province. Total = 2."
  - input: |
      isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    output: |
      3
    explanation: "No cities are connected to each other. Each city forms its own province."
constraints:
  - "1 <= n <= 200"
  - "n == isConnected.length"
  - "n == isConnected[i].length"
  - "isConnected[i][j] is 1 or 0."
  - "isConnected[i][i] == 1"
  - "isConnected[i][j] == isConnected[j][i]"
realWorld:
  - title: "Social Network Isolated Community Clustering"
    description: "Detecting distinct isolated friend clusters or disconnected social groups within a network."
  - title: "Distributed Database Cluster Partitioning"
    description: "Determining network partition boundaries and independent server quorum clusters."
  - title: "Epidemiological Regional Quarantine Zones"
    description: "Partitioning municipal travel networks into isolated quarantine bubbles during infection containment."
---

<!-- All rights reserved to CSRGO DSA -->

There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `i-th` city and the `j-th` city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return the total **number of provinces**.
