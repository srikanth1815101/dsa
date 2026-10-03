---
title: "Flatten Binary Tree to Linked List"
date: 2026-10-01T01:28:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Linked List"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FlattenBinaryTreeToLinkedList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FlattenBinaryTreeToLinkedList/engineering"

hints:
  - "Perform a reverse postorder traversal (right, left, root) keeping track of previously visited node as next pointer."
  - "Alternatively, for each node with a left child, find its in-order predecessor, link predecessor's right to current right, and move left child to right."

youtubeId: ""

solutionUrl: "/solutions/flatten-binary-tree-to-linked-list-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [1, 2, 3, -1, -1, 4, -1, -1, 5, -1, 6, -1, -1]"
    output: "** `[1, 2, 3, 4, 5, 6]` **"
    explanation: "** The original binary tree:"
  - input: "arr = []"
    output: "** `[]` **"
    explanation: "** An empty tree flattens into an empty sequence."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-100 <= arr[i] <= 100"
  - "The input array is a valid pre-order serialization of a binary tree."

realWorld:
  - title: "Hierarchical UI Menu Linearization"
    description: "Flattening nested drill-down menus into a linear scrollable list for mobile interfaces."
  - title: "Task Dependency Sequencing"
    description: "Converting hierarchical subtask trees into a linear sequential execution pipeline."
  - title: "Composite Document Serialization"
    description: "Serializing nested document elements into a linear single-stream print layout."
weight: 29
---
<!-- All rights reserved to CSRGO DSA -->

Given the root of a binary tree represented by its pre-order serialized array (with `-1` indicating null nodes), flatten the tree into a "linked list" in-place:

- The "linked list" should use the same tree node structure where the `right` child pointer points to the next node in the list and the `left` child pointer is always null.
- The "linked list" sequence corresponds precisely to the preorder traversal of the original binary tree.

Return an array containing the sequence of node values in the flattened linked list.
