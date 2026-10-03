---
title: "Redundant Connection"
date: 2026-10-01T02:28:00+05:30
difficulty: "Medium"
topics: ["Graph", "Union Find", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RedundantConnection/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RedundantConnection/engineering"

hints:
  - "A tree with n nodes and n edges contains exactly one cycle; find the edge that creates this cycle."
  - "Use Disjoint Set Union (DSU): for each edge (u, v), if find(u) == find(v), this edge closes a cycle and is redundant."

youtubeId: ""

solutionUrl: "/solutions/redundant-connection-solution/"

timeComplexity: "O(n * alpha(n))"
spaceComplexity: "O(n)"

examples:
  - input: "edges = [[1, 2], [1, 3], [2, 3]]"
    output: "** `[2, 3]` **"
    explanation: "** Removing `[2, 3]` leaves the tree connected with vertices `{1, 2, 3}` and edges `[[1, 2], [1, 3]]`."
  - input: "edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]"
    output: "** `[1, 4]` **"
    explanation: "** Edge `[1, 4]` creates a cycle containing nodes `1, 2, 3, 4`. Removing it restores a valid tree structure."

constraints:
  - "0 <= edges.length <= 1000"
  - "edges[i].length == 2"
  - "1 <= u_i < v_i <= edges.length"
  - "There are no repeated edges."

realWorld:
  - title: "Ethernet Spanning Tree Protocol (STP)"
    description: "Detecting and disabling redundant network switch loop connections to prevent broadcast storms."
  - title: "Power Grid Ring Distribution Loop Prevention"
    description: "Identifying redundant circuit breakers creating unintended grounding loops in electrical microgrids."
  - title: "Database Schema Foreign Key Cycle Elimination"
    description: "Detecting cyclic reference constraints in relational database migrations to avoid circular deadlocks."
weight: 89
---
<!-- All rights reserved to CSRGO DSA -->

In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with `n` nodes labeled from `1` to `n`, with one additional edge added. The added edge has two different vertices chosen from `1` to `n`, and was not an edge that already existed. The resulting graph is given as a 2D array of `edges` where each `edges[i] = [u_i, v_i]` denotes an edge between nodes `u_i` and `v_i`.

Return an edge that can be removed so that the resulting graph is a tree of `n` nodes. If there are multiple answers, return the answer that occurs last in the input.
