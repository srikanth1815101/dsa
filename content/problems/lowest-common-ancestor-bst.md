---
title: "Lowest Common Ancestor of a BST"
date: 2024-01-19T00:00:00Z
difficulty: "Medium"
topics: ["Tree", "Binary Search Tree", "DFS"]
companies: ["Amazon", "Facebook", "Microsoft"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/lowest-common-ancestor-bst"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/lowest-common-ancestor-bst"
hints:
  - "Use the BST property: left subtree has smaller values, right has larger."
  - "If both nodes are smaller than root, LCA is in left subtree; if both larger, it's in right."
youtubeId: "gs2LMfuOR9k"
solutionUrl: "/solutions/lowest-common-ancestor-bst-solution/"
timeComplexity: "O(h)"
spaceComplexity: "O(1)"
examples:
  - input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8"
    output: "6"
    explanation: "Node 2 is in left subtree, node 8 is in right subtree of 6. So LCA is 6."
  - input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4"
    output: "2"
    explanation: "Node 4 is in the subtree of node 2. The LCA is 2 itself."
constraints:
  - "The number of nodes is in the range [2, 10^5]"
  - "-10^9 <= Node.val <= 10^9"
  - "All Node.val are unique"
  - "p != q"
  - "p and q will exist in the BST"
realWorld:
  - title: "Organizational Hierarchy"
    description: "Finding the common manager of two employees in a company tree."
  - title: "Version Control"
    description: "Git uses LCA to find merge bases for branches."
  - title: "Taxonomy Classification"
    description: "Finding the common ancestor of two species in biological classification."
---

Given a **binary search tree (BST)**, find the **lowest common ancestor (LCA)** node of two given nodes in the BST.

According to the definition of LCA: "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**)."
