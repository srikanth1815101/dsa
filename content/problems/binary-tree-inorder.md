---
title: "Binary Tree Inorder Traversal"
date: 2024-01-08T10:00:00Z
difficulty: "Easy"
topics: ["Tree", "Binary Tree", "DFS"]
datastructures: ["Binary Tree", "Stack"]
companies: ["Microsoft", "Amazon", "Google"]
starterCode: "/dsa/files/BinaryTreeInorder.java"
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
javaTemplate: |
  public class Solution {
      public List<Integer> inorderTraversal(TreeNode root) {
          // Your code here
          return new ArrayList<>();
      }
  }
---

Given the `root` of a binary tree, return the inorder traversal of its nodes' values.

## Approach

Inorder traversal visits nodes in the order: Left -> Root -> Right. Can be implemented recursively or iteratively using a stack.
