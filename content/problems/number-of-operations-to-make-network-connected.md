---
title: "Number of Operations to Make Network Connected"
date: 2026-10-01T02:30:00+05:30
difficulty: "Medium"
topics: ["Graph", "Union Find", "BFS"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NumberOfOperationsToMakeNetworkConnected/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NumberOfOperationsToMakeNetworkConnected/engineering"

hints:
  - "To connect n computers, at least n - 1 cables are needed; if connections.length < n - 1, return -1 immediately."
  - "Use Disjoint Set Union (DSU) or BFS to count the number of connected components c. The answer is c - 1."

youtubeId: ""

solutionUrl: "/solutions/number-of-operations-to-make-network-connected-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V)"

examples:
  - input: "n = 4, connections = [[0, 1], [0, 2], [1, 2]]"
    output: "1"
    explanation: "Remove redundant cable [1, 2] and use it to connect computer 1 to computer 3."
  - input: "n = 6, connections = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]]"
    output: "2"
    explanation: "There are redundant cables among 0, 1, 2, 3 that can bridge to isolated computers 4 and 5."

constraints:
  - "1 <= n <= 10^5"
  - "1 <= connections.length <= min(n * (n - 1) / 2, 10^5)"
  - "connections[i].length == 2; 0 <= ai, bi < n; ai != bi"
  - "There are no duplicate connections."

realWorld:
  - title: "Data Center Cable Re-routing"
    description: "Repurposing redundant server cables to connect isolated server racks during infrastructure migration."
  - title: "Disaster Relief Mesh Network Deployment"
    description: "Reallocating spare radio relay links to integrate disconnected rural emergency zones."
  - title: "Industrial IoT Sensor Grid Bridging"
    description: "Reconfiguring wireless mesh bridges to unify segregated factory automation clusters."
weight: 91
---
<!-- All rights reserved to CSRGO DSA -->

There are `n` computers numbered from `0` to `n - 1` and a set of ethernet cable connections `connections` where `connections[i] = [a, b]` connects computers `a` and `b`.

Any computer can reach any other computer directly or indirectly through intermediate computers if they belong to the same connected component.

You can extract redundant cables from cycles and re-route them between any two disconnected computers. Return the minimum number of times you need to change cables to connect all computers. If it is impossible, return `-1`.
