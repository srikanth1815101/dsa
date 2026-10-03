---
title: "Articulation Points"
date: 2026-09-27T21:02:00+05:30
draft: false
difficulty: "Hard"
companies: ["Amazon", "Google", "Microsoft"]
topics: ["Graph", "DFS"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ArticulationPoints/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ArticulationPoints/engineering"
hints:
  - "An articulation point (or cut vertex) in an undirected graph is a vertex whose removal increases the number of connected components."
  - "Use Tarjan's algorithm with discovery times disc[] and low-link values low[]."
  - "A root node in the DFS tree is an articulation point if it has 2 or more children. A non-root node u is an articulation point if it has a child v such that low[v] >= disc[u]."
youtubeId: ""
solutionUrl: "/solutions/articulation-points-solution/"
timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"
examples:
  - input: |
      vtces = 5
      edges = [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4]]
    output: |
      [1, 3]
    explanation: "Removing vertex 1 disconnects {0, 2} from {3, 4}. Removing vertex 3 isolates vertex 4."
  - input: |
      vtces = 4
      edges = [[0, 1], [1, 2], [2, 3]]
    output: |
      [1, 2]
    explanation: "In a 4-node line graph, the interior nodes 1 and 2 are cut vertices."
constraints:
  - "1 <= vtces <= 10^5"
  - "0 <= edges.length <= 2 * 10^5"
  - "edges[i].length == 2"
  - "0 <= edges[i][0], edges[i][1] < vtces"
  - title: "Critical Network Gateway Router Identification"
    description: "Telecom infrastructure monitoring detects gateway switches whose failure partitions autonomous network subnets."
  - title: "Power Transmission Central Substation Vulnerability Analysis"
    description: "Electrical grid vulnerability simulations identify single substations whose failure creates cascading blackout islands."
  - title: "Military Logistics Chokepoint Defense"
    description: "Supply chain resilience analysis identifies junction hubs whose disruption would strand forward supply depots."
---
<!-- All rights reserved to CSRGO DSA -->

Given an undirected connected graph with `vtces` vertices numbered `0` to `vtces - 1` and an array `edges` where `edges[i] = [u, v]` represents an undirected edge between `u` and `v`.

Find all **articulation points** (or cut vertices) in the graph. An articulation point is a vertex whose removal (along with all its incident edges) increases the number of connected components.

Return a list of all articulation points sorted in ascending numerical order. If the graph contains no articulation points, return an empty list `[]`.
