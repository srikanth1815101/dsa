---
title: "Validate Binary Search Tree - Solution"
problemUrl: "/problems/validate-binary-search-tree/"
---

## Explanation

The most elegant approach uses **inorder traversal**. A valid BST's inorder traversal produces values in strictly increasing order.

**Algorithm:**
1. Perform inorder traversal (left → root → right)
2. Keep track of the previously visited value
3. If current value ≤ previous value, it's not a valid BST
4. If we complete traversal without violations, it's valid

## Code

```java
class Solution {
    private Integer prev = null;
    
    public boolean isValidBST(TreeNode root) {
        if (root == null) return true;
        
        // Check left subtree
        if (!isValidBST(root.left)) return false;
        
        // Check current node
        if (prev != null && root.val <= prev) return false;
        prev = root.val;
        
        // Check right subtree
        return isValidBST(root.right);
    }
}
```
