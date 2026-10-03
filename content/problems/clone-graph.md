---
title: "Clone Graph"
date: 2026-10-01T01:39:00+05:30
difficulty: "Medium"
topics: ["Graph", "DFS", "BFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CloneGraph/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CloneGraph/engineering"

hints:
  - "Use a hash map to map each original node to its newly cloned counterpart."
  - "Traverse the graph using BFS or DFS; for every neighbor, clone it if not visited and add the clone to current clone's neighbors list."

youtubeId: ""

solutionUrl: "/solutions/clone-graph-solution/"

timeComplexity: "O(V + E)"
spaceComplexity: "O(V)"

examples:
  - input: "adjList = [[2, 4], [1, 3], [2, 4], [1, 3]]"
    output: "** `[[2, 4], [1, 3], [2, 4], [1, 3]]` **"
    explanation: "** There are 4 nodes in the graph: - Node 1's neighbors are 2 and 4. - Node 2's neighbors are 1 and 3. - Node 3's neighbors are 2 and 4. - Node 4's neighbors are 1 and 3. The cloned graph has identical structure with newly instantiated nodes."
  - input: "adjList = [[]]"
    output: "** `[[]]` **"
    explanation: "** The graph has one isolated node with no neighbors."

constraints:
  - "The number of nodes in the graph is in the range `[0, 100]`."
  - "1 <= Node.val <= 100"
  - "Node.val` is unique for each node."
  - "There are no repeated edges and no self-loops in the graph."

realWorld:
  - title: "Object Graph Deep Copying"
    description: "Creating deep cloned memory snapshots of complex interrelated data structures in runtime state machines."
  - title: "Microservice Topology Snapshotting"
    description: "Duplicating running microservice dependency graphs to simulate failure cascade scenarios in staging."
  - title: "Neural Network Architecture Duplication"
    description: "Cloning computational layer DAGs for parallel mutation during genetic architecture search."
weight: 40
---
<!-- All rights reserved to CSRGO DSA -->

Given a reference of a node in a **connected** undirected graph, return a **deep copy** (clone) of the graph.

Each node in the graph contains a value `val` (an integer from `1` to `n`) and a list of its neighbors.

In the array representation, the graph is represented as an adjacency list where each sub-array `adjList[i]` contains the 1-based indices of the neighbors of node `i + 1`.

Return the adjacency list of the deep-cloned graph.
