---
title: "Network Delay Time"
date: 2026-09-27T21:04:00+05:30
draft: false
difficulty: "Medium"
companies: ["Amazon", "Google", "Uber"]
topics: ["Graph", "Shortest Path", "Heap"]
learningPath: "Advanced"
starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NetworkDelayTime/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NetworkDelayTime/engineering"
hints:
  - "The time it takes for all nodes to receive the signal is the maximum of the shortest travel times from source node k to all other nodes."
  - "Since edge weights (travel times) are non-negative, Dijkstra's algorithm with a priority queue is optimal."
  - "If any node remains unreachable after running Dijkstra, return -1. Otherwise, return the maximum distance in the shortest path array."
youtubeId: ""
solutionUrl: "/solutions/network-delay-time-solution/"
timeComplexity: "O(E log V)"
spaceComplexity: "O(V + E)"
examples:
  - input: |
      times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]]
      n = 4
      k = 2
    output: |
      2
    explanation: "Signal sent from node 2: reaches node 1 at t=1, node 3 at t=1, and node 4 at t=1+1=2. All nodes receive the signal by time 2."
  - input: |
      times = [[1, 2, 1]]
      n = 2
      k = 1
    output: |
      1
    explanation: "Signal travels from 1 to 2 in 1 unit of time."

constraints:
  - "1 <= k <= n <= 100"
  - "1 <= times.length <= 6000"
  - "1 <= ui, vi <= n; ui != vi; 0 <= wi <= 100"
  - "All the pairs (ui, vi) are unique."
realWorld:
  - title: "Distributed Cluster Heartbeat Propagation"
    description: "Determining the maximum round-trip or broadcast latency for cluster state consensus heartbeats across server nodes."
  - title: "Financial Market Ticker Multicast Distribution"
    description: "Measuring worst-case latency for financial trade quote updates broadcast to all exchange trading desks."
  - title: "Emergency Broadcast Siren Activation"
    description: "Calculating maximum signal travel delay across relay stations to ensure simultaneous warning siren soundings."
---

<!-- All rights reserved to CSRGO DSA -->

You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = [ui, vi, wi]`, where `ui` is the source node, `vi` is the target node, and `wi` is the time it takes for a signal to travel from source to target.

We will send a signal from a given node `k`. Return the **minimum time** it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.
