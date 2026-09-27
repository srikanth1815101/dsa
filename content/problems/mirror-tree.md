---
title: "Mirror Tree"
date: 2026-09-27T10:47:00+05:30
difficulty: "Easy"
topics: ["Trees", "DFS", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MirrorTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MirrorTree/engineering"

hints:
  - "Recursively mirror each child subtree first, then reverse the children list of the current node."
  - "Reversing the children of every node in a post-order traversal yields the complete mirror reflection of the tree."

youtubeId: ""

solutionUrl: "/solutions/mirror-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, -1, 30, -1, 40, -1, -1]"
    output: "[10, 40, 30, 20]"
    explanation: "Children [20, 30, 40] of root 10 are reversed to [40, 30, 20]."
  - input: "arr = [10, 20, 50, -1, 60, -1, -1, 30, -1, 40, -1, -1]"
    output: "[10, 40, 30, 20, 60, 50]"
    explanation: "Root children become [40, 30, 20], and 20's children [50, 60] become [60, 50]."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-1 denotes Euler backtracking delimiter."
  - "Result is returned as the level-order traversal of the mirrored tree."

realWorld:
  - title: "RTL (Right-to-Left) UI Layout Reflection"
    description: "Inverting hierarchical UI component trees for Arabic and Hebrew localized interfaces."
  - title: "Computer Graphics Symmetry Rendering"
    description: "Reflecting hierarchical 3D skeletal rigging across the sagittal symmetry plane."
  - title: "Geometric Decomposition Inversion"
    description: "Mirroring spatial octrees during bilateral collision mesh reflect calculations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the Euler tour traversal of a generic tree, mirror the generic tree by reversing the order of children at every node.

Return the level-order traversal of the mirrored tree as an array. If the tree is empty, return an empty array.
