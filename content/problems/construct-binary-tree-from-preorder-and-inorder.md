---
title: "Construct Binary Tree from Preorder and Inorder"
date: 2026-10-01T01:25:00+05:30
difficulty: "Medium"
topics: ["Binary Tree", "DFS", "Divide and Conquer"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ConstructBinaryTreeFromPreorderAndInorder/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ConstructBinaryTreeFromPreorderAndInorder/engineering"

hints:
  - "The first element in preorder traversal is always the root of the tree."
  - "Locate the root in inorder traversal using a hash map to determine the sizes of left and right subtrees."

youtubeId: ""

solutionUrl: "/solutions/construct-binary-tree-from-preorder-and-inorder-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]"
    output: "** `[9, 15, 7, 20, 3]` **"
    explanation: "** The reconstructed binary tree is:"
  - input: "preorder = [-1], inorder = [-1]"
    output: "** `[-1]` **"
    explanation: "** Single node tree produces the single element."

constraints:
  - "1 <= preorder.length <= 3000"
  - "inorder.length == preorder.length"
  - "-3000 <= preorder[i], inorder[i] <= 3000"
  - "preorder` and `inorder` consist of unique values."

realWorld:
  - title: "Abstract Syntax Tree Deserialization"
    description: "Rebuilding AST structures from serialized compiler token streams during execution."
  - title: "Database Query Plan Reconstruction"
    description: "Reconstituting hierarchical relational query execution plans from log journals."
  - title: "File System Hierarchy Hydration"
    description: "Restoring directory tree representations from indexed traversal logs."
weight: 26
---
<!-- All rights reserved to CSRGO DSA -->

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree represented by its postorder traversal.

All elements in `preorder` and `inorder` are unique.
