---
title: "Binary Tree Cameras - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/binary-tree-cameras/"
weight: 30
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We want to place the minimum number of cameras on binary tree nodes such that every node in the tree is monitored by either itself, its parent, or one of its children.



To minimize the total number of cameras, we should avoid placing cameras on leaf nodes. A camera on a leaf can cover at most the leaf and its parent (2 nodes), whereas placing a camera on the leaf's parent covers the parent, its children, and potentially its grandparent (up to 4 nodes).
Therefore, a greedy bottom-up post-order traversal (`Left -> Right -> Root`) is optimal:
1. Define three states for any node:
   - `0`: Node is **not covered** (needs a camera).
   - `1`: Node **has a camera**.
   - `2`: Node is **covered** (without a camera).
2. Base Case: A null node does not need coverage and has no camera, so it is treated as already covered (`state 2`).
3. Recursive Step:
   - If either child returns `0` (uncovered), the current node **must** place a camera: increment camera count and return `1`.
   - If either child returns `1` (has a camera), the current node is already covered by that child: return `2`.
   - Otherwise, both children are covered (`state 2`), so the current node does not have a camera and is not yet covered by its parent: return `0`.
4. Root Check: After the recursion terminates, if the root itself is in state `0` (uncovered), an additional camera must be installed at the root.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the input pre-order array. If the array is empty or the root is null (`-1`), return `0`.
2. Initialize a mutable integer array `cameras` of size 1 with `0`.
3. Implement a recursive function `dfs(node, cameras)` returning an integer state:
   - If `node == null`, return `2`.
   - Compute `leftState = dfs(node.left, cameras)`.
   - Compute `rightState = dfs(node.right, cameras)`.
   - If `leftState == 0 || rightState == 0`:
     - Place a camera: `cameras[0] = cameras[0] + 1`.
     - Return `1`.
   - If `leftState == 1 || rightState == 1`:
     - Return `2`.
   - Return `0`.
4. Call `rootState = dfs(root, cameras)`.
5. If `rootState == 0`, increment `cameras[0] = cameras[0] + 1`.
6. Return `cameras[0]`.

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
    int[] cameras = new int[1];
    int rootState = dfs(root, cameras);

    if (rootState == 0) {
        cameras[0] = cameras[0] + 1;
    }

    return cameras[0];
}

private static int dfs(Node node, int[] cameras) {
    if (node == null) {
        return 2;
    }

    int left = dfs(node.left, cameras);
    int right = dfs(node.right, cameras);

    if (left == 0 || right == 0) {
        cameras[0] = cameras[0] + 1;
        return 1;
    }

    if (left == 1 || right == 1) {
        return 2;
    }

    return 0;
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
