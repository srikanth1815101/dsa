---
title: "Balanced Binary Tree - Solution"
problemUrl: "/problems/balanced-binary-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A binary tree is height-balanced if for every node, the height difference between its left and right subtrees is at most `1`:
1. A top-down approach that computes height separately for every node results in $O(n^2)$ time in the worst case.
2. A bottom-up post-order traversal achieves optimal $O(n)$ time by propagating failure immediately:
   - For any node `N`, first recursively check the left subtree. If it returns `-1` (indicating an unbalanced subtree), propagate `-1` upward immediately.
   - Next, recursively check the right subtree. If it returns `-1`, propagate `-1` upward immediately.
   - If both subtrees are balanced, check `Math.abs(leftHeight - rightHeight)`. If the absolute difference exceeds `1`, return `-1`.
   - Otherwise, return the height of the subtree: `Math.max(leftHeight, rightHeight) + 1`.
3. If the final recursive call on the root returns anything other than `-1`, the tree is balanced.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `true`.
3. Define the recursive function `checkBalance(Node node)`:
   - If `node == null`, return `0`.
   - Recursively evaluate `int lh = checkBalance(node.left)`.
   - If `lh == -1`, return `-1`.
   - Recursively evaluate `int rh = checkBalance(node.right)`.
   - If `rh == -1`, return `-1`.
   - If `Math.abs(lh - rh) > 1`, return `-1`.
   - Return `Math.max(lh, rh) + 1`.
4. Call `checkBalance(root)`.
5. Return `true` if the result is not equal to `-1`, else return `false`.

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

    class BalanceChecker {
        int check(Node node) {
            if (node == null) {
                return 0;
            }
            int lh = check(node.left);
            if (lh == -1) {
                return -1;
            }
            int rh = check(node.right);
            if (rh == -1) {
                return -1;
            }
            if (Math.abs(lh - rh) > 1) {
                return -1;
            }
            return Math.max(lh, rh) + 1;
        }
    }

    BalanceChecker checker = new BalanceChecker();
    return checker.check(root) != -1;
}
```
