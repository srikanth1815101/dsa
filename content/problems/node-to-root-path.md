---
title: "Node to Root Path"
date: 2026-09-27T10:50:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NodeToRootPath/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/NodeToRootPath/engineering"

hints:
  - "If the current node matches the target value, return a new list containing this node."
  - "Otherwise, search recursively in each child subtree; if any child returns a non-empty path, append the current node to that path and return it."

youtubeId: ""

solutionUrl: "/solutions/node-to-root-path-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(h)"

examples:
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1], data = 110"
    output: "[110, 80, 30, 10]"
    explanation: "Path starts at 110, moves to parent 80, then 30, and terminates at root 10."
  - input: "arr = [10, 20, -1, 30, -1, -1], data = 30"
    output: "[30, 10]"
    explanation: "30 is a direct child of root 10, giving path [30, 10]."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "All node values in the tree are unique."

realWorld:
  - title: "File Absolute Path Resolution"
    description: "Resolving full folder canonical paths from a target file up to the volume root directory."
  - title: "DOM Event Bubbling Propagation Path"
    description: "Constructing the exact sequence of ancestor elements that handle a dispatched event from target to document."
  - title: "Security Permission Inheritance Validation"
    description: "Traversing organizational group ownership paths from a resource node back to the root administrator account."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree and an integer `data`, find the path from the node with value `data` to the root of the tree.

Return the sequence of node values starting with `data` and ending at the root as an array. If `data` is not present in the tree, return an empty array `[]`.
