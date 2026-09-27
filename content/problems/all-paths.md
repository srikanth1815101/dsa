---
title: "All Paths"
date: 2026-09-27T20:43:00+05:30
difficulty: "Medium"
topics: ["Graph", "DFS", "Backtracking"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AllPaths/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AllPaths/engineering"

hints:
  - "Use recursive depth-first search along with backtracking: mark current vertex visited, explore all unvisited neighbors, and unmark it upon backtrack."
  - "Accumulate the path string (e.g. \"u->v->...\") and when current == dest, append the path to the result list."

youtubeId: ""

solutionUrl: "/solutions/all-paths-solution/"

timeComplexity: "O(V!)"
spaceComplexity: "O(V)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 10], [1, 2, 10], [2, 3, 10], [0, 3, 40]], src = 0, dest = 3"
    output: "[\"0->1->2->3\", \"0->3\"]"
    explanation: "There are two distinct simple paths from vertex 0 to vertex 3."
  - input: "vtces = 3, edges = [[0, 1, 5], [1, 2, 5]], src = 0, dest = 2"
    output: "[\"0->1->2\"]"
    explanation: "Only a single simple path exists from 0 to 2."

constraints:
  - "1 <= vtces <= 15"
  - "0 <= edges.length <= 50"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "Paths must be simple without revisiting any vertex."

realWorld:
  - title: "Multipath Network Packet Routing"
    description: "Discovering all redundant alternative communication routes across telecommunications switches to support rapid failover."
  - title: "Autonomous GPS Route Alternative Generation"
    description: "Enumerating candidate road driving paths between an origin and destination for driver selection."
  - title: "Circuit Board Trace Verification"
    description: "Verifying all possible conduction pathways between pins on printed circuit boards."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Find and return **all simple paths** from vertex `src` to vertex `dest` using DFS and backtracking. A simple path visits each vertex at most once.

Each path should be formatted as a string with vertices joined by `->` (e.g., `"0->1->2->3"`). The returned list of paths should be sorted in ascending lexicographical order.
