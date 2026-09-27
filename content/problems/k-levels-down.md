---
title: "K Levels Down"
date: 2026-09-27T10:57:00+05:30
difficulty: "Easy"
topics: ["Binary Tree", "BFS", "DFS"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KLevelsDown/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KLevelsDown/engineering"

hints:
  - "Traverse the binary tree using depth-first search while passing the remaining depth k down the recursive calls."
  - "When k equals 0 at any node, record its value and do not recurse further down."

youtubeId: ""

solutionUrl: "/solutions/k-levels-down-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [50, 25, 12, -1, -1, 37, -1, -1, 75, 62, -1, -1, 87, -1, -1], k = 1"
    output: "[25, 75]"
    explanation: "Nodes at level 1 (1 edge away from root 50) from left to right are 25 and 75."
  - input: "arr = [50, 25, 12, -1, -1, 37, -1, -1, 75, 62, -1, -1, 87, -1, -1], k = 2"
    output: "[12, 37, 62, 87]"
    explanation: "Nodes at level 2 from left to right are 12, 37, 62, and 87."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes a null binary tree reference."
  - "0 <= k <= 1000"

realWorld:
  - title: "Social Network K-Degree Friend Suggestions"
    description: "Finding friend-of-a-friend contacts at exactly distance k in tree-modeled social graphs."
  - title: "Network Routing Distance Ring Broadcast"
    description: "Restricting broadcast packets strictly to nodes located at exact hop radius k."
  - title: "File Directory Tier Scanning"
    description: "Auditing all files and directories nested at an exact depth tier k from the volume root."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing a pre-order binary tree serialization with `-1` denoting `null`, and an integer `k`, find all nodes located exactly `k` levels below the root (where root is at level `0`).

Return the values of all nodes at level `k` ordered from left to right as an array. If no nodes exist at level `k`, return an empty array `[]`.
