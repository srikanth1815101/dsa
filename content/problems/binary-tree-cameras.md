---
title: "Binary Tree Cameras"
date: 2026-10-01T01:29:00+05:30
difficulty: "Hard"
topics: ["Binary Tree", "Greedy", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/BinaryTreeCameras/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/BinaryTreeCameras/engineering"

hints:
  - "Use bottom-up post-order traversal with greedy state tracking: uncovered (0), covered with camera (1), covered without camera (2)."
  - "If either child is uncovered, place a camera at current node. If either child has a camera, current node is covered without a camera."

youtubeId: ""

solutionUrl: "/solutions/binary-tree-cameras-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [0, 0, 0, -1, -1, 0, -1, -1, -1]"
    output: "** `1` **"
    explanation: "** One camera placed on the parent of the leaves can monitor all nodes."
  - input: "arr = [0, 0, 0, -1, -1, -1, -1]"
    output: "** `2` **"
    explanation: "** Two cameras are required to monitor all nodes of this tree."

constraints:
  - "The number of nodes in the tree is in the range `[1, 1000]`."
  - "Node values are `0`."
  - "The input array is a valid pre-order serialization of a binary tree."

realWorld:
  - title: "Surveillance Facility Coverage"
    description: "Minimizing security camera deployments to provide complete line-of-sight monitoring in buildings."
  - title: "IoT Sensor Gateway Placement"
    description: "Optimizing wireless hub positions to ensure full telemetry reception with minimal hardware cost."
  - title: "Network Packet Sniffer Deployment"
    description: "Deploying packet inspectors across network switch fabrics to cover all routing paths with minimum cost."
weight: 30
---
<!-- All rights reserved to CSRGO DSA -->

You are given the root of a binary tree represented by its pre-order serialized array (where `-1` represents a null node). We install cameras on the tree nodes.

Each camera at a node can monitor its parent, itself, and its immediate children.

Return the minimum number of cameras needed to monitor all nodes of the tree.
