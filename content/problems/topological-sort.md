---
title: "Topological Sort"
date: 2026-09-27T20:54:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "DE Shaw"]
topics: ["Graph", "DFS", "BFS"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TopologicalSort/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/TopologicalSort/engineering"
hints:
  - "Topological sorting for a Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v."
  - "You can use Kahn's Algorithm (BFS based on in-degrees) or a DFS post-order traversal using a stack."
  - "In Kahn's Algorithm, compute the in-degree of every vertex. Vertices with 0 in-degree can be placed first in the ordering."
youtubeId: ""
solutionUrl: "/solutions/topological-sort-solution/"
timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"
examples:
  - input: |
      vtces = 6
      edges = [[5, 2], [5, 0], [4, 0], [4, 1], [2, 3], [3, 1]]
    output: |
      [4, 5, 0, 2, 3, 1]
    explanation: "A valid topological ordering where every directed edge u -> v has u appearing before v."
  - input: |
      vtces = 4
      edges = [[0, 1], [0, 2], [1, 3], [2, 3]]
    output: |
      [0, 1, 2, 3]
    explanation: "0 must precede 1 and 2, and both must precede 3. [0, 1, 2, 3] is a valid topological ordering."
constraints:
  - "1 <= vtces <= 10^5"
  - "0 <= edges.length <= 2 * 10^5"
  - "edges[i].length == 2"
  - "0 <= edges[i][0], edges[i][1] < vtces"
  - title: "Build System Dependency Resolution"
    description: "Compilers and build orchestrators like Maven, Gradle, or Make sequence compilation steps according to dependency DAGs."
  - title: "Workflow Pipeline Orchestration"
    description: "Data engineering frameworks like Apache Airflow schedule interconnected tasks ensuring prerequisite upstream jobs complete."
  - title: "Database Schema Migration Order"
    description: "Determining table creation and foreign key constraint application order during database schema deployments."
---
<!-- All rights reserved to CSRGO DSA -->

Given a Directed Acyclic Graph (DAG) with `vtces` vertices numbered from `0` to `vtces - 1` and a list of directed `edges` where `edges[i] = [u, v]` represents a directed edge from vertex `u` to vertex `v`.

Return any valid **Topological Sort** order of the vertices as an array of integers.

A topological sort of a directed graph is a linear ordering of its vertices such that for every directed edge `u -> v`, vertex `u` appears before vertex `v` in the ordering.
