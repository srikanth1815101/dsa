---
title: "Minimum Height Trees"
date: 2026-10-01T01:42:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "Topological Sort"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumHeightTrees/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumHeightTrees/engineering"

hints:
  - "The roots of minimum height trees are the centers of the graph (there are at most 2 centers)."
  - "Repeatedly trim leaf nodes (nodes with degree 1) level-by-level using BFS until 1 or 2 centroid nodes remain."

youtubeId: ""

solutionUrl: "/solutions/minimum-height-trees-solution/"

timeComplexity: "O(V)"
spaceComplexity: "O(V)"

examples:
  - input: "n = 4`, `edges = [[1, 0], [1, 2], [1, 3]]"
    output: "** `[1]` **"
    explanation: "** As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT."
  - input: "n = 6`, `edges = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]"
    output: "** `[3, 4]` **"
    explanation: "** Choosing either node 3 or node 4 as root yields trees of height 2, which is minimal."

constraints:
  - "1 <= n <= 2 * 10^4"
  - "edges.length == n - 1"
  - "0 <= ai, bi < n"
  - "ai != bi"

realWorld:
  - title: "Distributed Network Hub Placement"
    description: "Electing primary cluster coordinator nodes that minimize maximum broadcast latency to any peer in the tree."
  - title: "Content Delivery Network Ingress Centering"
    description: "Positioning edge CDN cache servers to minimize worst-case origin-to-user hop counts."
  - title: "Emergency Dispatch Facility Centroids"
    description: "Placing emergency vehicle depots at graph topological centers to minimize maximum response times."
weight: 43
---
<!-- All rights reserved to CSRGO DSA -->

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of `n` nodes labeled from `0` to `n - 1`, and an array of `n - 1` `edges` where `edges[i] = [ai, bi]` indicates that there is an undirected edge between the two nodes `ai` and `bi` in the tree, you can choose any node of the tree as the root. When you select a node `x` as the root, the result tree has height `h`. Among all possible rooted trees, those with minimum height (i.e. `min(h)`) are called **minimum height trees** (MHTs).

Return an array of all MHTs' root labels, sorted in ascending order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
