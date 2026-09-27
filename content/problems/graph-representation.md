---
title: "Graph Representation"
date: 2026-09-27T20:41:00+05:30
difficulty: "Easy"
topics: ["Graph", "Adjacency List"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GraphRepresentation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GraphRepresentation/engineering"

hints:
  - "Use an array or list of lists where index u contains all connected neighbors v along with edge weights."
  - "Because the graph is undirected, add the forward edge (u -> v, wt) and reverse edge (v -> u, wt)."

youtubeId: ""

solutionUrl: "/solutions/graph-representation-solution/"

timeComplexity: "O(V + E log E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 4, edges = [[0, 1, 10], [1, 2, 20], [2, 3, 30], [0, 3, 40]]"
    output: "[[[1, 10], [3, 40]], [[0, 10], [2, 20]], [[1, 20], [3, 30]], [[0, 40], [2, 30]]]"
    explanation: "For each vertex from 0 to 3, its adjacent neighbors and edge weights are listed sorted by neighbor index."
  - input: "vtces = 3, edges = [[0, 1, 5], [1, 2, 7]]"
    output: "[[[1, 5]], [[0, 5], [2, 7]], [[1, 7]]]"
    explanation: "Vertex 0 connects to 1 (wt 5), vertex 1 connects to 0 (wt 5) and 2 (wt 7), and vertex 2 connects to 1 (wt 7)."

constraints:
  - "1 <= vtces <= 100"
  - "0 <= edges.length <= 1000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= u, v < vtces, u != v, and wt >= 0"

realWorld:
  - title: "Social Network Friend Relationships"
    description: "Modeling bi-directional friendships in social graphs using sparse adjacency lists for rapid friend-of-friend lookups."
  - title: "Autonomous Vehicle Road Navigation"
    description: "Representing intersections and roadway segments with distance weights in route navigation systems."
  - title: "Telecommunication Mesh Network Routing"
    description: "Maintaining adjacency connection topologies across cellular towers and fiber-optic relay stations."
---
<!-- All rights reserved to CSRGO DSA -->

Given the total number of vertices `vtces` (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` representing weighted undirected edges, where each edge is given as `[u, v, wt]`.

Construct and return the **adjacency list representation** of the graph. For consistent output, the adjacent edges for each vertex should be ordered in ascending order of neighbor vertex ID.
