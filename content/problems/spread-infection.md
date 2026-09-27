---
title: "Spread Infection"
date: 2026-09-27T20:51:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "Multi-source BFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SpreadInfection/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SpreadInfection/engineering"

hints:
  - "Model the disease transmission as a breadth-first search (BFS) where each edge transition represents 1 unit of elapsed time."
  - "Queue elements store (vertex, time). At time t = 1, src is infected. Only count vertices whose arrival time is <= t."

youtubeId: ""

solutionUrl: "/solutions/spread-infection-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "vtces = 7, edges = [[0, 1, 10], [1, 2, 10], [2, 3, 10], [0, 3, 10], [3, 4, 10], [4, 5, 10], [5, 6, 10], [4, 6, 10]], src = 6, t = 3"
    output: "4"
    explanation: "At t=1 vertex 6 is infected; at t=2 vertices 4 and 5 are infected; at t=3 vertex 3 is infected. Total count is 4."
  - input: "vtces = 3, edges = [[0, 1, 1], [1, 2, 1]], src = 0, t = 1"
    output: "1"
    explanation: "Within 1 unit of time, only the source patient 0 is infected."

constraints:
  - "1 <= vtces <= 1000"
  - "0 <= edges.length <= 5000"
  - "edges[i].length == 3 where edges[i] = [u, v, wt]"
  - "0 <= src < vtces and 1 <= t <= 1000"

realWorld:
  - title: "Epidemiological Contact Tracing Simulation"
    description: "Modeling infectious virus outbreak propagation across social contact networks over discrete daily transmission intervals."
  - title: "Malware Worm Infection Containment"
    description: "Estimating zero-day worm propagation across corporate local network subnets before isolation firewalls activate."
  - title: "Viral Social Media Trend Diffusion"
    description: "Tracking information diffusion rate across social influence graphs within initial launch time horizons."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an undirected graph with `vtces` vertices (labeled from `0` to `vtces - 1`) and a 2D integer array `edges` where each edge is represented as `[u, v, wt]`.

A person at vertex `src` becomes infected with a virus at time unit `t = 1`. In each subsequent time unit, an infected person transmits the infection to all of their direct uninfected neighbors.

Given a time threshold `t`, find and return the **total number of people who will be infected** at or before time `t`.
