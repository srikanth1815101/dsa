---
title: "Has Path (DFS)"
date: 2026-09-27T20:42:00+05:30
difficulty: "Easy"
topics: ["Graph", "DFS", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HasPath/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HasPath/engineering"

hints:
  - "Build an adjacency list from the given edges and maintain a visited boolean array to prevent infinite cycles."
  - "Use depth-first search starting from the src vertex. If the current vertex equals dest, return true. Otherwise, recurse on all unvisited neighbors."

youtubeId: ""

solutionUrl: "/solutions/has-path-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 7, edges = [[0, 1, 10], [1, 2, 10], [2, 3, 10], [0, 3, 40], [3, 4, 2], [4, 5, 3], [5, 6, 3], [4, 6, 8]], src = 0, dest = 6"
    output: "true"
    explanation: "A path exists from vertex 0 to vertex 6 via 0 -> 3 -> 4 -> 5 -> 6."
  - input: "vtces = 7, edges = [[0, 1, 10], [2, 3, 10], [4, 5, 10], [5, 6, 10]], src = 0, dest = 6"
    output: "false"
    explanation: "The graph is disconnected and vertex 0 cannot reach vertex 6."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= src, dest < vtces"

realWorld:
  - title: "Network Connectivity Testing (Ping Verification)"
    description: "Determining if an IP host or subnet router is reachable through an arbitrary mesh of enterprise network switches."
  - title: "Distributed Dependency Resolution"
    description: "Checking whether a software package transitively depends on another library module in build dependency graphs."
  - title: "Access Control Reachability"
    description: "Verifying whether an unauthorized security principal has an indirect delegation path to sensitive cloud IAM resources."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Given two vertices `src` and `dest`, determine whether there exists a valid path between `src` and `dest` using **Depth-First Search (DFS)**.

Return `true` if a path exists, otherwise return `false`.
