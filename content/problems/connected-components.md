---
title: "Connected Components"
date: 2026-09-27T20:44:00+05:30
difficulty: "Medium"
topics: ["Graph", "DFS", "Union Find"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ConnectedComponents/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ConnectedComponents/engineering"

hints:
  - "Maintain a global visited boolean array across all vertices from 0 to vtces - 1."
  - "Whenever an unvisited vertex is encountered, launch a DFS traversal to collect all mutually reachable vertices in that component."

youtubeId: ""

solutionUrl: "/solutions/connected-components-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 7, edges = [[0, 1, 10], [2, 3, 10], [4, 5, 10], [5, 6, 10], [4, 6, 10]]"
    output: "[[0, 1], [2, 3], [4, 5, 6]]"
    explanation: "The vertices form three distinct connected subgraphs: {0, 1}, {2, 3}, and {4, 5, 6}."
  - input: "vtces = 4, edges = [[0, 1, 1], [2, 3, 1]]"
    output: "[[0, 1], [2, 3]]"
    explanation: "The graph partitions into two disjoint connected components: [0, 1] and [2, 3]."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "Graph is undirected and can contain disconnected vertices."

realWorld:
  - title: "Social Network Community Detection"
    description: "Partitioning users into isolated communication clusters or disconnected friend groups."
  - title: "Distributed Datacenter Partition Isolation"
    description: "Detecting network split-brain partitions across geographically distributed server racks."
  - title: "Image Processing Connected Region Labeling"
    description: "Grouping contiguous foreground pixels into independent detected object blobs in computer vision."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Find and return **all connected components** of the graph.

Each connected component should be a list of vertex IDs sorted in ascending order. The components themselves should also be ordered by the first vertex of each component.
