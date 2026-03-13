---
title: "Validate Binary Search Tree"
date: 2024-01-13T00:00:00Z
difficulty: "Medium"
topics: ["Tree", "Binary Search Tree", "DFS"]
companies: ["Amazon", "Microsoft", "Facebook"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/validate-binary-search-tree"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/validate-binary-search-tree"
hints:
  - "A BST's inorder traversal produces values in strictly increasing order."
  - "Alternatively, pass min/max bounds during recursive traversal."
youtubeId: "s6ATEkipzow"
solutionUrl: "/solutions/validate-binary-search-tree-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
examples:
  - input: "root = [2,1,3]"
    output: "true"
    explanation: "Left child 1 < root 2, right child 3 > root 2. Valid BST."
  - input: "root = [5,1,4,null,null,3,6]"
    output: "false"
    explanation: "The right child 4 is less than root 5, but 3 in left subtree of 4 is also < 5, violating BST property."
constraints:
  - "The number of nodes is in the range [1, 10^4]"
  - "-2^31 <= Node.val <= 2^31 - 1"
realWorld:
  - title: "Database Indexing"
    description: "Validating B-tree structure integrity after insertions."
  - title: "File System Organization"
    description: "Ensuring directory hierarchies maintain proper ordering."
  - title: "Search Engine Optimization"
    description: "Verifying search tree structures for efficient lookups."
---

Given the `root` of a binary tree, determine if it is a **valid binary search tree (BST)**.

A **valid BST** is defined as follows:
- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.
