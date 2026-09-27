---
title: "Validate BST - Solution"
problemUrl: "/problems/validate-bst/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Validating a Binary Search Tree (BST) requires verifying that every node satisfies the ordering invariant with respect to all its ancestors, not just its immediate parent:
1. Every node in the left subtree must be strictly less than the current node's value.
2. Every node in the right subtree must be strictly greater than the current node's value.
3. Propagate valid numerical bounds `[min, max]` down the tree:
   - For the root, the valid range is `(-infinity, +infinity)`.
   - When branching to the left child, the upper bound is narrowed to `node.val` (valid range becomes `[min, node.val)`).
   - When branching to the right child, the lower bound is narrowed to `node.val` (valid range becomes `(node.val, max]`).
4. If any node's value falls outside its inherited bounds, the tree is immediately declared invalid.
5. This recursive traversal validates the entire tree in optimal $O(n)$ time.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `true`.
3. Define a recursive helper function `isValidBST(Node node, Long minBound, Long maxBound)`:
   - If `node == null`, return `true`.
   - If `minBound != null && node.val <= minBound`, return `false`.
   - If `maxBound != null && node.val >= maxBound`, return `false`.
   - Recursively evaluate `isValidBST(node.left, minBound, (long)node.val)` and `isValidBST(node.right, (long)node.val, maxBound)`.
   - Return `true` only if both subtrees are valid.
4. Call `isValidBST(root, null, null)`.
5. Return the boolean result.

## Code

```java
public static boolean solve(int[] arr) {
    if (arr.length == 0 || arr[0] == -1) {
        return true;
    }

    class Node {
        int val;
        Node left;
        Node right;
        Node(int val) {
            this.val = val;
        }
    }

    class Pair {
        Node node;
        int state;
        Pair(Node node, int state) {
            this.node = node;
            this.state = state;
        }
    }

    Stack<Pair> st = new Stack<>();
    Node root = new Node(arr[0]);
    st.push(new Pair(root, 1));
    int idx = 1;

    while (!st.isEmpty() && idx < arr.length) {
        Pair top = st.peek();
        if (top.state == 1) {
            top.state = 2;
            if (arr[idx] != -1) {
                Node leftNode = new Node(arr[idx]);
                top.node.left = leftNode;
                st.push(new Pair(leftNode, 1));
            }
            idx = idx + 1;
        } else if (top.state == 2) {
            top.state = 3;
            if (arr[idx] != -1) {
                Node rightNode = new Node(arr[idx]);
                top.node.right = rightNode;
                st.push(new Pair(rightNode, 1));
            }
            idx = idx + 1;
        } else {
            st.pop();
        }
    }

    class Validator {
        boolean check(Node node, Long min, Long max) {
            if (node == null) {
                return true;
            }
            if (min != null && node.val <= min) {
                return false;
            }
            if (max != null && node.val >= max) {
                return false;
            }
            return check(node.left, min, (long) node.val) && check(node.right, (long) node.val, max);
        }
    }

    Validator validator = new Validator();
    return validator.check(root, null, null);
}
```
