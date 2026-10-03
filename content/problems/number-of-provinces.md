---
title: "Number of Provinces"
date: 2026-09-27T21:03:00+05:30
difficulty: "Medium"
topics: ["Graph", "Union Find", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NumberOfProvinces/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NumberOfProvinces/engineering"

hints:
  - "Model the cities and roads as an undirected graph, where each connected component represents one province."
  - "Use standard Depth-First Search (DFS) or Breadth-First Search (BFS) starting from each unvisited city to traverse and mark its entire province."

youtubeId: ""

solutionUrl: "/solutions/number-of-provinces-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n)"

examples:
  - input: "isConnected = [[1,1,0],[1,1,0],[0,0,1]]"
    output: "2"
    explanation: "City 0 and city 1 form one connected province, while city 2 forms another separate province."
  - input: "isConnected = [[1,0,0],[0,1,0],[0,0,1]]"
    output: "3"
    explanation: "No cities are connected to each other, so each city forms its own isolated province."

constraints:
  - "1 <= n <= 200 (where n == isConnected.length == isConnected[i].length)"
  - "isConnected[i][j] is 1 or 0"
  - "isConnected[i][i] == 1"
  - "isConnected[i][j] == isConnected[j][i]"

realWorld:
  - title: "Telecommunications Regional Grid Partitioning"
    description: "Identifying isolated telecom cell clusters in regional cellular networks following fiber cable cuts."
  - title: "Social Community Detection"
    description: "Discovering isolated user discussion groups in corporate collaboration platforms."
  - title: "Epidemic Contact Tracing Rings"
    description: "Mapping disconnected geographical infection clusters to target isolated quarantine interventions."
weight: 146
---
<!-- All rights reserved to CSRGO DSA -->

There are `n` cities. Some of them are connected directly, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` binary matrix `isConnected` where `isConnected[i][j] = 1` if the `i`th city and the `j`th city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return the total number of **provinces**.
