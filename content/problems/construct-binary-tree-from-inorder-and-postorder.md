---
title: "Construct Binary Tree from Inorder and Postorder"
date: 2026-10-01T01:26:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Divide and Conquer"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ConstructBinaryTreeFromInorderAndPostorder/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ConstructBinaryTreeFromInorderAndPostorder/engineering"

hints:
  - "The last element in postorder traversal is always the root of the subtree."
  - "Find root in inorder traversal to divide the remaining nodes into left and right subtrees, constructing right before left."

youtubeId: ""

solutionUrl: "/solutions/construct-binary-tree-from-inorder-and-postorder-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]"
    output: "** `[3, 9, 20, 15, 7]` **"
    explanation: "** The reconstructed binary tree is:"
  - input: "inorder = [-1], postorder = [-1]"
    output: "** `[-1]` **"
    explanation: "** Single node tree produces the single element."

constraints:
  - "1 <= inorder.length <= 3000"
  - "postorder.length == inorder.length"
  - "-3000 <= inorder[i], postorder[i] <= 3000"
  - "inorder` and `postorder` consist of unique values."

realWorld:
  - title: "Expression Tree Compilation"
    description: "Rebuilding algebraic and logical calculation trees from postfix RPN bytecode and infix logs."
  - title: "Organization Hierarchy Recovery"
    description: "Reconstructing enterprise reporting hierarchies from reverse topological employee logs."
  - title: "Network Routing Tree Restoration"
    description: "Reconstituting spanning tree topologies from post-visit routing table dumps."
weight: 27
---
<!-- All rights reserved to CSRGO DSA -->

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return the binary tree represented by its preorder traversal.

All elements in `inorder` and `postorder` are unique.
