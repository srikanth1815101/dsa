---
title: "Path with Maximum Probability"
date: 2026-10-01T01:46:00+05:30
difficulty: "Medium"
topics: ["Graph", "Shortest Path", "Heap"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PathWithMaximumProbability/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PathWithMaximumProbability/engineering"

hints:
  - "Modify Dijkstra's algorithm using a Max-Heap to track the path with the highest accumulated probability."
  - "Multiply probabilities along edges; since probabilities are <= 1, multiplication is monotonic and Dijkstra's greedy choice holds."

youtubeId: ""

solutionUrl: "/solutions/path-with-maximum-probability-solution/"

timeComplexity: "O(E log V)"
spaceComplexity: "O(V + E)"

examples:
  - input: "n = 3, edges = [[0, 1], [1, 2], [0, 2]], succProb = [0.5, 0.5, 0.2], startNode = 0, endNode = 2"
    output: "0.25000"
    explanation: "There are two paths from 0 to 2: - Path 0 -> 2 has probability 0.2 - Path 0 -> 1 -> 2 has probability 0.5 * 0.5 = 0.25 The maximum probability is 0.25."
  - input: "n = 3, edges = [[0, 1], [1, 2], [0, 2]], succProb = [0.5, 0.5, 0.3], startNode = 0, endNode = 2"
    output: "0.30000"
    explanation: "Result is 0.30000."

constraints:
  - "2 <= n <= 10^4"
  - "0 <= edges.length <= 2 * 10^4"
  - "edges[i].length == 2"
  - "0 <= a, b < n"

realWorld:
  - title: "Mission-Critical Telemetry Routing"
    description: "Routing spacecraft telemetry packets through satellite networks along the route with maximum link reliability."
  - title: "High-Frequency Trading Wire Pathways"
    description: "Selecting microwave transmission lines that offer the highest probability of zero packet corruption."
  - title: "Medical Drone Organ Delivery Navigation"
    description: "Navigating medical drones through atmospheric turbulence corridors to maximize mission success probability."
weight: 47
---
<!-- All rights reserved to CSRGO DSA -->

You are given an undirected weighted graph of `n` nodes (0-indexed), represented by an edge list where `edges[i] = [a, b]` is an undirected edge connecting the nodes `a` and `b` with a probability of success of traversing that edge `succProb[i]`.

Given two nodes `startNode` and `endNode`, find the path with the maximum probability of success to go from `startNode` to `endNode`.

If there is no path from `startNode` to `endNode`, return `0.0`.
