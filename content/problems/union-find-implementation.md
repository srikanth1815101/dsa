---
title: "Union Find Implementation"
date: 2026-10-01T02:26:00+05:30
difficulty: "Medium"
topics: ["Graph", "Union Find"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/UnionFindImplementation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/UnionFindImplementation/engineering"

hints:
  - "Implement Disjoint Set Union (DSU) with path compression in find() and union by rank or size."
  - "Path compression flattens the tree during find(), making subsequent operations run in nearly O(1) amortized inverse Ackermann time."

youtubeId: ""

solutionUrl: "/solutions/union-find-implementation-solution/"

timeComplexity: "O(alpha(n)) per operation"
spaceComplexity: "O(n)"

examples:
  - input: "n = 5`, `operations = [[1, 0, 1], [1, 2, 3], [2, 0, 1], [2, 0, 2], [1, 1, 2], [2, 0, 3]]"
    output: "** `[true, false, true]` **"
    explanation: "** - `[1, 0, 1]`: Connects 0 and 1. - `[1, 2, 3]`: Connects 2 and 3. - `[2, 0, 1]`: 0 and 1 are in the same component -> `true`. - `[2, 0, 2]`: 0 and 2 are disconnected -> `false`. - `[1, 1, 2]`: Connects component {0, 1} with {2, 3}. - `[2, 0, 3]`: 0 and 3 are now connected -> `true`."
  - input: "n = 3`, `operations = [[2, 0, 1], [2, 1, 2], [2, 0, 2]]"
    output: "** `[false, false, false]` **"
    explanation: "** No union operations have been performed, so every node is in its own isolated component."

constraints:
  - "1 <= n <= 10^5"
  - "0 <= operations.length <= 10^5"
  - "operations[i].length == 3"
  - "operations[i][0]` is either `1` or `2"

realWorld:
  - title: "Network Bridge Mesh Connectivity Tracking"
    description: "Managing connected bridge components in computer networks to dynamically detect split-brain isolation."
  - title: "Social Network Friend Cluster Detection"
    description: "Maintaining connected friendship circles across millions of users with near-constant time link operations."
  - title: "Image Segmentation Component Labeling"
    description: "Merging adjacent pixels with matching color thresholds into cohesive image feature regions."
weight: 87
---
<!-- All rights reserved to CSRGO DSA -->

Implement a **Disjoint Set Union (Union-Find)** data structure supporting `n` elements labeled from `0` to `n - 1`.

You are given an integer `n` and a 2D array `operations` where each element represents one of the following operations:
- `[1, u, v]`: Connect element `u` with element `v` (`union(u, v)`).
- `[2, u, v]`: Check whether element `u` and element `v` belong to the same connected component (`connected(u, v)`).

Return a boolean array containing the results of all type `2` (`connected`) queries in the order they appear.
