---
title: "Is Graph Connected"
date: 2026-09-27T20:45:00+05:30
difficulty: "Easy"
topics: ["Graph", "BFS", "DFS"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IsGraphConnected/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IsGraphConnected/engineering"

hints:
  - "A graph is connected if and only if a traversal starting from any arbitrary vertex visits all V vertices."
  - "Start a DFS or BFS from vertex 0 with a visited array. Count the number of visited vertices; if count == vtces, return true."

youtubeId: ""

solutionUrl: "/solutions/is-graph-connected-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 7, edges = [[0, 1, 10], [2, 3, 10], [4, 5, 10], [5, 6, 10], [4, 6, 10]]"
    output: "false"
    explanation: "The graph contains 3 disconnected components, so it is not connected."
  - input: "vtces = 4, edges = [[0, 1, 10], [1, 2, 10], [2, 3, 10]]"
    output: "true"
    explanation: "All 4 vertices form a single continuous chain, making the graph fully connected."

constraints:
  - "0 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= u, v < vtces"

realWorld:
  - title: "Distributed Network Resiliency Check"
    description: "Verifying that all cloud availability zone subnets are mutually reachable through active routing links."
  - title: "Social Graph Unified Component Verification"
    description: "Confirming that an organization's internal collaboration graph forms a single connected communication network."
  - title: "Power Grid Reliability Monitoring"
    description: "Ensuring transmission substations remain connected to the primary power grid to prevent localized blackouts."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Determine whether the graph is **connected** (i.e., there is a path between every pair of vertices).

Return `true` if the graph is connected, otherwise return `false`. A graph with `0` or `1` vertex is considered connected.
