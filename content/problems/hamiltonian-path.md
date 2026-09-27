---
title: "Hamiltonian Path"
date: 2026-09-27T20:47:00+05:30
difficulty: "Medium"
topics: ["Graph", "Backtracking", "DFS"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HamiltonianPath/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HamiltonianPath/engineering"

hints:
  - "Use backtracking with a visited set or boolean array, tracking the number of vertices visited along the path."
  - "When the path contains all vtces vertices, check if the last vertex shares an edge with the starting vertex: append '*' if a closing edge exists (Hamiltonian Cycle), otherwise append '.' (Hamiltonian Path)."

youtubeId: ""

solutionUrl: "/solutions/hamiltonian-path-solution/"

timeComplexity: "O(V!)"
spaceComplexity: "O(V)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 0, 1]], src = 0"
    output: "[\"0123*\", \"0321*\"]"
    explanation: "Both paths visit all 4 vertices and have an edge from the end back to the start, forming Hamiltonian cycles."
  - input: "vtces = 4, edges = [[0, 1, 1], [1, 2, 1], [2, 3, 1]], src = 0"
    output: "[\"0123.\"]"
    explanation: "The path visits all 4 vertices but vertex 3 does not connect back to 0, forming a Hamiltonian path."

constraints:
  - "1 <= vtces <= 10"
  - "0 <= edges.length <= 45"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= src < vtces"

realWorld:
  - title: "Travelling Salesperson Tour Construction"
    description: "Determining closed delivery rounds that visit every customer city exactly once before returning to the distribution hub."
  - title: "DNA Fragment Assembly (Eulerian vs Hamiltonian)"
    description: "Reconstructing full genome nucleotide sequences by ordering overlapping read fragments."
  - title: "Circuit Board Drilling Path Optimization"
    description: "Minimizing drill head movement time by finding a single contiguous path visiting every hole position."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

Given a starting vertex `src`, find and return all **Hamiltonian Paths** and **Hamiltonian Cycles** starting from `src`.

- A **Hamiltonian Path** visits every vertex in the graph exactly once. Append `.` to the path representation (e.g., `0123.`).
- A **Hamiltonian Cycle** is a Hamiltonian Path where the last vertex also shares an edge back to the starting vertex `src`. Append `*` to the path representation (e.g., `0123*`).

Return all valid paths sorted in ascending lexicographical order.
