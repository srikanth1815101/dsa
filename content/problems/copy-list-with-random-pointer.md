---
title: "Copy List with Random Pointer"
date: 2026-09-27T10:41:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Hashing"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CopyListWithRandomPointer/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CopyListWithRandomPointer/engineering"

hints:
  - "Create a deep copy of each node and interleave it directly next to its original node in the list."
  - "Assign random pointers for cloned nodes using original.random.next, then decouple the cloned list from the original list."

youtubeId: ""

solutionUrl: "/solutions/copy-list-with-random-pointer-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [[7, -1], [13, 0], [11, 4], [10, 2], [1, 0]]"
    output: "[[7, -1], [13, 0], [11, 4], [10, 2], [1, 0]]"
    explanation: "Each node's value and random index are cloned into an independent deep copy."
  - input: "arr = [[1, 1], [2, 1]]"
    output: "[[1, 1], [2, 1]]"
    explanation: "Node 0 points to node 1 as random, and node 1 points to itself as random."

constraints:
  - "0 <= arr.length <= 1000"
  - "-10^4 <= Node.val <= 10^4"
  - "Node.random is -1 or points to a valid 0-indexed node in the list."

realWorld:
  - title: "Object Graph Serialization & Cloning"
    description: "Deep copying cyclic object graphs in memory with cross-referencing arbitrary object pointers."
  - title: "Virtual Machine State Checkpointing"
    description: "Snapshotting complex heap pointer topologies without breaking interdependent cross-references."
  - title: "DOM Tree Duplication"
    description: "Cloning web browser DOM fragments containing arbitrary event target listeners and cross-element references."
---
<!-- All rights reserved to CSRGO DSA -->

A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

The input is represented by an array `arr` where each element is a pair `[val, randomIndex]`. `randomIndex` is the 0-based index of the node that the random pointer points to, or `-1` if it does not point to any node.

Return the deep copy of the linked list as a 2D array of pairs `[val, randomIndex]`.
