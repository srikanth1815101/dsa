---
title: "Lowest Common Ancestor of a BST - Solution"
problemUrl: "/problems/lowest-common-ancestor-bst/"
---

## Explanation

The BST property makes this problem simpler than finding LCA in a general binary tree. We leverage the fact that all left descendants are smaller and all right descendants are larger.

**Algorithm:**
1. Start at the root
2. If both `p` and `q` are smaller than current node, go left
3. If both are larger than current node, go right
4. Otherwise, current node is the LCA (they split between left and right subtrees)

This gives us O(h) time where h is the height of the tree.

## Code

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            } else if (p.val > root.val && q.val > root.val) {
                root = root.right;
            } else {
                return root;
            }
        }
        return null;
    }
}
```
