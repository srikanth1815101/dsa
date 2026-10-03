---
title: "Number of Provinces (Union Find)"
date: 2026-10-01T02:27:00+05:30
difficulty: "Medium"
topics: ["Graph", "Union Find", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NumberOfProvinces/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NumberOfProvinces/engineering"

hints:
  - "Model the cities and bidirectional roads as an undirected graph, where each connected component represents one province."
  - "Use Disjoint Set Union (DSU) to efficiently merge connected components and count the number of disjoint sets."

youtubeId: ""

solutionUrl: "/solutions/number-of-provinces-union-find-solution/"

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
weight: 88
---
<!-- All rights reserved to CSRGO DSA -->

There are `n` cities. Some of them are connected directly, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` binary matrix `isConnected` where `isConnected[i][j] = 1` if the `i`th city and the `j`th city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return the total number of **provinces** using the Disjoint Set Union (Union Find) approach.
