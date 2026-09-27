---
title: "Nodes K Distance"
date: 2026-09-27T10:58:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BFS", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NodesKDistance/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NodesKDistance/engineering"

hints:
  - "Find the path from the target node to the root of the binary tree."
  - "Iterate through each ancestor on the path and search for nodes k - i levels down in the opposite child branch using a blocker node."

youtubeId: ""

solutionUrl: "/solutions/nodes-k-distance-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [50, 25, 12, -1, -1, 37, 30, -1, -1, 40, -1, -1, 75, 62, -1, -1, 87, -1, -1], target = 37, k = 1"
    output: "[30, 40, 25]"
    explanation: "Nodes at distance 1 from node 37 are its children 30 and 40, along with its parent 25."
  - input: "arr = [50, 25, -1, -1, 75, -1, -1], target = 50, k = 1"
    output: "[25, 75]"
    explanation: "Nodes at distance 1 from root 50 are its direct children 25 and 75."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "target is guaranteed to exist in the tree."
  - "0 <= k <= 1000"

realWorld:
  - title: "Network Blast Radius Fault Analysis"
    description: "Identifying all interconnected services and switches located within k network hops of a compromised host."
  - title: "Geographical Proximity Search"
    description: "Finding all facilities within k routing tiers of an epicenter distribution hub."
  - title: "Social Graph Recommendation Engine"
    description: "Recommending mutual connections exactly k degrees of separation away from an active user profile."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, an integer `target`, and an integer `k`, find all nodes in the tree that are at a distance of `k` edges away from the node with value `target`.

Return the values of all nodes at distance `k` as an array. If no such nodes exist, return an empty array `[]`.
