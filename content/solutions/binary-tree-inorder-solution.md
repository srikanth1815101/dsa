---
title: "Solution: Binary Tree Inorder Traversal"
date: 2024-01-08
problemUrl: "/problems/binary-tree-inorder/"
---

## Approach

Inorder traversal follows the pattern: **Left -> Node -> Right**.

### Recursive Approach
This is the most straightforward. We define a helper function that:
1. Calls itself on the left child.
2. Adds the current node's value.
3. Calls itself on the right child.

### Iterative Approach
Use a Stack to simulate the recursion:
1. Push all left nodes onto the stack until null.
2. Pop a node, add to result.
3. Move to its right child and repeat step 1.

### Complexity

- **Time Complexity**: O(n) (visit every node once)
- **Space Complexity**: O(n) (recursion stack)

## Code

```java
public class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        helper(root, res);
        return res;
    }

    private void helper(TreeNode root, List<Integer> res) {
        if (root == null) return;
        helper(root.left, res);
        res.add(root.val);
        helper(root.right, res);
    }
}
```
