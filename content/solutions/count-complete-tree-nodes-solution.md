---
title: "Count Complete Tree Nodes - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/count-complete-tree-nodes/"
weight: 32
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We want to count the total number of nodes in a complete binary tree. An optimal solution must run in strictly faster than $O(N)$ time by taking advantage of the complete tree property.



For any node in a complete binary tree:
1. Compute the depth of its leftmost path (`leftHeight`) and its rightmost path (`rightHeight`).
2. If `leftHeight == rightHeight`, the subtree rooted at this node is a **perfect binary tree**. A perfect binary tree of height $h$ contains exactly $2^h - 1$ nodes. We can calculate this in $O(1)$ time without visiting every node: `(1 << leftHeight) - 1`.
3. If `leftHeight != rightHeight`, the subtree is not perfect. We compute:
   `1 + countNodes(node.left) + countNodes(node.right)`
4. In step 3, at least one of the two subtrees (left or right) is guaranteed to be a perfect binary tree of depth $h - 1$. Hence, the recursion only continues into one non-perfect subtree per level.
5. This leads to $O(\log N)$ levels of recursion, and measuring height at each level takes $O(\log N)$, yielding an overall time complexity of $O(\log^2 N)$.

### Step-by-Step Algorithm:
1. Reconstruct the complete binary tree from the pre-order serialized input array. If the array is empty or root is null (`-1`), return `0`.
2. Define a recursive helper function `count(node)`:
   - If `node == null`, return `0`.
   - Measure `leftHeight`: traverse `curr = node` along `curr.left` while `curr != null`, incrementing height.
   - Measure `rightHeight`: traverse `curr = node` along `curr.right` while `curr != null`, incrementing height.
   - If `leftHeight == rightHeight`:
     - Return `(1 << leftHeight) - 1`.
   - Else:
     - Return `1 + count(node.left) + count(node.right)`.
3. Return `count(root)`.

## Code

```java
static class Node {
    int val;
    Node left;
    Node right;

    Node(int val) {
        this.val = val;
    }
}

public static int solve(int[] arr) {
    if (arr == null || arr.length == 0 || arr[0] == -1) {
        return 0;
    }

    Node root = buildTree(arr);
    return count(root);
}

private static int count(Node node) {
    if (node == null) {
        return 0;
    }

    int lh = getLeftHeight(node);
    int rh = getRightHeight(node);

    if (lh == rh) {
        return (1 << lh) - 1;
    }

    return 1 + count(node.left) + count(node.right);
}

private static int getLeftHeight(Node node) {
    int h = 0;
    Node curr = node;
    while (curr != null) {
        h = h + 1;
        curr = curr.left;
    }
    return h;
}

private static int getRightHeight(Node node) {
    int h = 0;
    Node curr = node;
    while (curr != null) {
        h = h + 1;
        curr = curr.right;
    }
    return h;
}

private static Node buildTree(int[] arr) {
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
                Node left = new Node(arr[idx]);
                top.node.left = left;
                st.push(new Pair(left, 1));
            }
            idx = idx + 1;
        } else if (top.state == 2) {
            top.state = 3;
            if (arr[idx] != -1) {
                Node right = new Node(arr[idx]);
                top.node.right = right;
                st.push(new Pair(right, 1));
            }
            idx = idx + 1;
        } else {
            st.pop();
        }
    }
    return root;
}
```
