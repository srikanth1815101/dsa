---
title: "All Nodes Distance K in Binary Tree"
date: 2026-10-01T01:30:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "BFS", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/AllNodesDistanceKInBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/AllNodesDistanceKInBinaryTree/engineering"

hints:
  - "Build an undirected adjacency graph or add parent pointers to each tree node using a BFS or DFS traversal."
  - "From the target node, run a breadth-first search up to depth K while maintaining a visited set to avoid backtracking."

youtubeId: ""

solutionUrl: "/solutions/all-nodes-distance-k-in-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 5, 6, -1, -1, 2, 7, -1, -1, 4, -1, -1, 1, 0, -1, -1, 8, -1, -1]`, `target = 5`, `k = 2"
    output: "** `[1, 4, 7]` **"
    explanation: "** The binary tree has root `3`. Node `5` has left child `6` and right child `2` (which has children `7` and `4`). Root `3` has right child `1` (which has children `0` and `8`). The nodes at distance `2` from node `5` are `7`, `4`, and `1`. Sorted in ascending order: `[1, 4, 7]`."
  - input: "arr = [1, -1, -1]`, `target = 1`, `k = 3"
    output: "** `[]` **"
    explanation: "** There are no nodes at distance 3 from node 1."

constraints:
  - "The number of nodes in the tree is in the range `[1, 500]`."
  - "0 <= Node.val <= 500"
  - "All values `Node.val` are unique."
  - "target` is the value of one of the nodes in the tree."

realWorld:
  - title: "Social Network Friend Degree Suggestions"
    description: "Finding all users exactly K connection hops away from a seed profile in an organizational graph."
  - title: "Distributed Cache Invalidation Rings"
    description: "Broadcasting cache invalidation packets to nodes located exactly K hops from the origin node."
  - title: "Cellular Tower Proximity Alerting"
    description: "Targeting emergency broadcast cell stations situated exactly K routing hops from an incident epicenter."
weight: 31
---
<!-- All rights reserved to CSRGO DSA -->

Given the root of a binary tree represented by its pre-order serialized array (where `-1` denotes a null node), the value of a target node `target`, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node, sorted in ascending order.

The distance between two nodes in a tree is the number of edges on the path connecting them.
