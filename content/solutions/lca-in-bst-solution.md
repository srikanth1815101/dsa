---
title: "LCA in BST - Solution"
problemUrl: "/problems/lca-in-bst/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Binary Search Tree (BST) property allows finding the Lowest Common Ancestor (LCA) in $O(h)$ time without exploring unnecessary subtrees:
1. Start traversing from the root node `curr`.
2. If both `d1` and `d2` are strictly smaller than `curr.val`, then both targets reside entirely in the left subtree, so advance `curr = curr.left`.
3. If both `d1` and `d2` are strictly greater than `curr.val`, then both targets reside entirely in the right subtree, so advance `curr = curr.right`.
4. Otherwise, the paths to `d1` and `d2` diverge at `curr` (or `curr` equals one of the values), meaning `curr` is the lowest common ancestor.
5. This iterative walk requires $O(1)$ auxiliary space beyond the tree representation.

### Step-by-Step Algorithm:
1. Reconstruct the BST from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `-1`.
3. Initialize `Node curr = root`.
4. While `curr != null`:
   - If `d1 < curr.val` and `d2 < curr.val`, advance `curr = curr.left`.
   - Else if `d1 > curr.val` and `d2 > curr.val`, advance `curr = curr.right`.
   - Else return `curr.val`.
5. Return `-1` if no ancestor is found.

## Code

```java
public static int solve(int[] arr, int d1, int d2) {
    if (arr.length == 0 || arr[0] == -1) {
        return -1;
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

    Node curr = root;
    while (curr != null) {
        if (d1 < curr.val && d2 < curr.val) {
            curr = curr.left;
        } else if (d1 > curr.val && d2 > curr.val) {
            curr = curr.right;
        } else {
            return curr.val;
        }
    }

    return -1;
}
```
