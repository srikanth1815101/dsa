---
title: "Flatten Multilevel Doubly Linked List"
date: 2026-10-01T01:20:00+05:30
difficulty: "Medium"
topics: ["Linked List", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FlattenMultilevelDoublyLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FlattenMultilevelDoublyLinkedList/engineering"

hints:
  - "Use depth-first search or a stack to traverse child pointers before advancing to next siblings."
  - "When splicing a child list, connect the parent to child head and link the child tail to parent's original next node."

youtubeId: ""

solutionUrl: "/solutions/flatten-multilevel-doubly-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "nodes = [[1, -1], [2, -1], [3, 6], [4, -1], [5, -1], [6, -1], [7, -1], [8, 10], [9, -1], [10, -1], [11, -1], [12, -1]]"
    output: "** `[1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]` **"
    explanation: "** Node 3 has child node at index 6 (value 7), and node 8 has child node at index 10 (value 11). Flattening in depth-first order produces the single-level list."
  - input: "nodes = [[1, 2], [2, -1], [3, -1]]"
    output: "** `[1, 3, 2]` **"
    explanation: "** Node 1 has child node at index 2 (value 3). Traversal visits 1, then child 3, then next node 2."

constraints:
  - "0 <= nodes.length <= 1000"
  - "-10^5 <= val <= 10^5"
  - "childIndex` is `-1` or a valid 0-based index in `nodes"

realWorld:
  - title: "DOM Document Flattening"
    description: "Serializing nested HTML and XML node hierarchies into a linear stream for transmission."
  - title: "File System Directory Walkers"
    description: "Converting hierarchical directory trees into a flat linear sequence of files for indexing."
  - title: "GUI Widget Tree Layout"
    description: "Unfolding hierarchical container widgets into a sequential paint order queue during rendering."
weight: 21
---
<!-- All rights reserved to CSRGO DSA -->

You are given a doubly linked list, where in addition to the next and previous pointers, each node has a child pointer, which may or may not point to a separate doubly linked list. These child lists may also have one or more children of their own, and so on, to produce a multilevel data structure.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. The nodes in the child list should appear after the current node and before the next node in the parent list.

In the array representation, each node is given as a pair `[val, childIndex]`, where `childIndex` is the index of the child node in the list, or `-1` if there is no child.
