---
title: "Kruskal Algorithm"
date: 2026-09-27T21:00:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Microsoft"]
topics: ["Graph", "Minimum Spanning Tree", "Union Find"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KruskalAlgorithm/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KruskalAlgorithm/engineering"
hints:
  - "Kruskal's Algorithm finds a Minimum Spanning Tree (MST) using a greedy strategy with Disjoint Set Union (DSU / Union-Find)."
  - "Sort all edges in non-decreasing order of their weights."
  - "Iterate through sorted edges: if the endpoints belong to different connected components, unite them and add the edge weight to the total cost."
youtubeId: ""
solutionUrl: "/solutions/kruskal-algorithm-solution/"
timeComplexity: "O(E log E + E * alpha(V))"
spaceComplexity: "O(V)"
examples:
  - input: |
      vtces = 4
      edges = [[0, 1, 10], [0, 2, 6], [0, 3, 5], [1, 3, 15], [2, 3, 4]]
    output: |
      19
    explanation: "Sorted edges: (2, 3, 4), (0, 3, 5), (0, 2, 6 - forms cycle), (0, 1, 10). Edges chosen: (2,3), (0,3), (0,1) with total weight 4 + 5 + 10 = 19."
  - input: |
      vtces = 3
      edges = [[0, 1, 5], [1, 2, 3], [0, 2, 1]]
    output: |
      4
    explanation: "Select edges (0, 2, 1) and (1, 2, 3) with total weight 1 + 3 = 4."
constraints:
  - "1 <= vtces <= 10^5"
  - "0 <= edges.length <= 2 * 10^5"
  - "edges[i].length == 3"
  - "0 <= edges[i][0], edges[i][1] < vtces"
  - "1 <= edges[i][2] <= 10^5"
realWorld:
  - title: "Telecom Network Trunk Optimization"
    description: "Telecom infrastructure architects deploy minimum length fiber backbones connecting all telecommunication central hubs."
  - title: "Electrical Microgrid Power Distribution"
    description: "Power utility planners optimize high-voltage distribution lines between electrical substations with minimal cabling cost."
  - title: "Hierarchical Cluster Analysis in Machine Learning"
    description: "Single-linkage agglomerative clustering constructs minimum spanning trees to cluster high-dimensional feature datasets."
---

<!-- All rights reserved to CSRGO DSA -->

Given an undirected weighted connected graph with `vtces` vertices numbered `0` to `vtces - 1` and a list of `edges` where `edges[i] = [u, v, wt]` represents an undirected edge between vertex `u` and vertex `v` with weight `wt`.

Find the sum of the weights of the edges in a **Minimum Spanning Tree (MST)** of the graph using **Kruskal's Algorithm**.
