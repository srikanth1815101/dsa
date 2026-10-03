---
title: "Morris Inorder Traversal - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/morris-inorder-traversal/"
weight: 28
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Standard recursive or iterative tree traversals consume $O(H)$ auxiliary memory, where $H$ is the tree height. Morris Traversal achieves inorder traversal in $O(1)$ auxiliary space by creating temporary threaded links from a node's in-order predecessor back to the current node.



In an in-order traversal (`Left -> Root -> Right`), after processing the entire left subtree of a node `curr`, the next node to visit is `curr`.
1. The rightmost node in `curr`'s left subtree is called its **inorder predecessor**.
2. If `curr.left` is null, `curr` has no left subtree. We can immediately visit `curr` and move to `curr.right`.
3. If `curr.left` exists, we find the predecessor (`pred`):
   - If `pred.right` is null, we establish a temporary thread by setting `pred.right = curr`, then move `curr = curr.left`.
   - If `pred.right == curr`, the thread already exists, meaning we have completed visiting the left subtree. We break the thread by setting `pred.right = null`, record `curr.val` in our traversal, and move `curr = curr.right`.

### Step-by-Step Algorithm:
1. Reconstruct the tree from the input pre-order serialized array `arr`. If the array is empty or root is null (`-1`), return an empty array.
2. Initialize an empty list `inorder` and a pointer `curr = root`.
3. While `curr != null`:
   - If `curr.left == null`:
     - Append `curr.val` to `inorder`.
     - Advance `curr = curr.right`.
   - Else:
     - Find the rightmost node `pred` in `curr.left`: start at `pred = curr.left` and advance while `pred.right != null && pred.right != curr`.
     - If `pred.right == null`:
       - Create thread: `pred.right = curr`.
       - Move left: `curr = curr.left`.
     - Else (`pred.right == curr`):
       - Remove thread: `pred.right = null`.
       - Append `curr.val` to `inorder`.
       - Move right: `curr = curr.right`.
4. Convert `inorder` to an integer array and return it.

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

public static int[] solve(int[] arr) {
    if (arr == null || arr.length == 0 || arr[0] == -1) {
        return new int[0];
    }

    Node root = buildTree(arr);
    List<Integer> inorder = new ArrayList<>();
    Node curr = root;

    while (curr != null) {
        if (curr.left == null) {
            inorder.add(curr.val);
            curr = curr.right;
        } else {
            Node pred = curr.left;
            while (pred.right != null && pred.right != curr) {
                pred = pred.right;
            }

            if (pred.right == null) {
                pred.right = curr;
                curr = curr.left;
            } else {
                pred.right = null;
                inorder.add(curr.val);
                curr = curr.right;
            }
        }
    }

    int[] result = new int[inorder.size()];
    for (int i = 0; i < inorder.size(); i = i + 1) {
        result[i] = inorder.get(i);
    }
    return result;
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
