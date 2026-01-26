---
title: "Binary Tree Inorder Traversal"
date: 2024-01-07T00:00:00Z
difficulty: "Easy"
topics: ["Tree", "Binary Tree", "DFS"]
datastructures: ["Binary Tree", "Stack"]
companies: ["Microsoft", "Amazon", "Google"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/binary-tree-inorder-traversal"
hints:
  - "Try utilizing a Stack to simulate recursion."
  - "The order is Left -> Node -> Right."
youtubeId: "lz2k569d84A"
solutionUrl: "/solutions/binary-tree-inorder-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
examples:
  - input: "root = [1,null,2,3]"
    output: "[1,3,2]"
  - input: "root = []"
    output: "[]"
constraints:
  - "The number of nodes in the tree is in the range [0, 100]"
  - "-100 <= Node.val <= 100"
realWorld:
  - title: "Expression Trees"
    description: "Generating the infix expression from an expression tree."
  - title: "Directory Listing"
    description: "Listing files in alphabetical order in a directory structure (if stored as a BST)."
javaTemplate: |
  class Solution {
      public List<Integer> inorderTraversal(TreeNode root) {
          
      }
  }
---

Given the `root` of a binary tree, return the inorder traversal of its nodes' values.

## Approach

Inorder traversal visits nodes in the order: Left -> Root -> Right. Can be implemented recursively or iteratively using a stack.
