---
title: "DP on Trees (Max Independent Set)"
date: 2026-10-01T01:55:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Trees", "DFS"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DpOnTreesMaxIndependentSet/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DpOnTreesMaxIndependentSet/engineering"

hints:
  - "For each node, compute two values: max independent set including current node, and max independent set excluding current node."
  - "If current node is included, children cannot be included. If current node is excluded, children may be included or excluded (take max)."

youtubeId: ""

solutionUrl: "/solutions/dp-on-trees-max-independent-set-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "n = 4, edges = [[0, 1], [0, 2], [0, 3]], weights = [10, 2, 3, 4]"
    output: "10"
    explanation: "Selecting root node 0 yields weight 10, whereas selecting leaves 1, 2, and 3 yields weight 2 + 3 + 4 = 9. The maximum weight is 10."
  - input: "n = 4, edges = [[0, 1], [0, 2], [0, 3]], weights = [1, 5, 5, 5]"
    output: "15"
    explanation: "Selecting leaves 1, 2, and 3 yields weight 5 + 5 + 5 = 15, which is greater than choosing root 0 (weight 1)."

constraints:
  - "1 <= n <= 10^5"
  - "edges.length == n - 1"
  - "edges[i].length == 2"
  - "0 <= edges[i][0], edges[i][1] < n"

realWorld:
  - title: "Corporate Executive Bonus Ring Fencing"
    description: "Selecting company executives for independent audit committee bonuses such that no direct reporting lines overlap."
  - title: "Wireless Sensor Network Cluster Head Election"
    description: "Electing non-interfering aggregator nodes in a hierarchical sensor tree to minimize radio collision."
  - title: "Database Distributed Lock Scheduling"
    description: "Acquiring non-conflicting table locks in a hierarchical schema catalog without deadlock."
weight: 56
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected tree of `n` nodes labeled from `0` to `n - 1`, represented by a 2D array `edges` where `edges[i] = [u, v]`, and an array `weights` where `weights[i]` represents the non-negative weight of node `i`.

An **independent set** of a tree is a subset of nodes such that no two nodes in the subset are connected by an edge.

Return the **maximum total weight** among all independent sets of the tree.
