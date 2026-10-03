---
title: "Flatten Binary Tree to Linked List - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/flatten-binary-tree-to-linked-list/"
weight: 29
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We need to flatten a binary tree into a right-skewed linked list in-place such that nodes follow the preorder traversal order (`Root -> Left -> Right`) with all left pointers nullified.



Consider the preorder traversal order: `1 -> 2 -> 3 -> 4 -> 5 -> 6`.
1. If we traverse the tree in reverse preorder (`Right -> Left -> Root`), at each step, we can link the current node's `right` pointer to the previously processed node `prev`, set `left` to `null`, and update `prev = curr`.
2. Alternatively, using Morris-like pointer manipulation:
   - For every node `curr`, if it has a left child:
     - Find the rightmost node of the left subtree (`predecessor`).
     - Attach `curr.right` to `predecessor.right`.
     - Move `curr.left` to `curr.right` and nullify `curr.left`.
   - Move `curr = curr.right`.
3. In both approaches, the resulting tree forms a continuous linked list linked through `right` pointers whose node sequence matches the preorder sequence.

### Step-by-Step Algorithm:
1. Reconstruct the tree from the preorder array `arr`. If `arr` is empty or root is `-1`, return an empty array `new int[0]`.
2. Initialize `curr = root`.
3. While `curr != null`:
   - If `curr.left != null`:
     - Locate the rightmost node `pred = curr.left`.
     - While `pred.right != null`, advance `pred = pred.right`.
     - Connect original right branch: `pred.right = curr.right`.
     - Shift left branch to right: `curr.right = curr.left`.
     - Nullify left: `curr.left = null`.
   - Advance `curr = curr.right`.
4. Traverse the flattened right-skewed list from `root`, collecting all node values into an array list.
5. Convert the list into an integer array and return it.

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
    Node curr = root;

    while (curr != null) {
        if (curr.left != null) {
            Node pred = curr.left;
            while (pred.right != null) {
                pred = pred.right;
            }
            pred.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }

    List<Integer> list = new ArrayList<>();
    Node temp = root;
    while (temp != null) {
        list.add(temp.val);
        temp = temp.right;
    }

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
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
