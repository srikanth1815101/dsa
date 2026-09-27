---
title: "Size of Generic Tree - Solution"
problemUrl: "/problems/size-of-generic-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the size of a generic tree:
1. Parse the Euler tour array using a stack:
   - When encountering a positive value, create a new `Node`.
   - If the stack is non-empty, add this new node as a child of `stack.peek()`.
   - Push the new node onto the stack.
   - When encountering `-1`, pop the top node from the stack.
2. The size of any subtree rooted at `node` equals `1 + sum(size(child))` for all children in `node.children`.
3. The recursive base case is naturally handled: a leaf node has an empty children list, so its size is 1.

### Step-by-Step Algorithm:
1. If `arr.length == 0`, return 0.
2. Build the tree using a stack:
   - When `arr[i] != -1`, create `Node node = new Node(arr[i])`. If `stack.isEmpty()`, set `root = node`. Else, `stack.peek().children.add(node)`. Push `node`.
   - When `arr[i] == -1`, pop from stack.
3. Compute `size(root)`:
   - Initialize `count = 1`.
   - For each child in `node.children`, add `size(child)` to `count`.
   - Return `count`.

## Code

```java
public static int solve(int[] arr) {
    if (arr.length == 0) {
        return 0;
    }

    class Node {
        int val;
        List<Node> children;
        Node(int val) {
            this.val = val;
            this.children = new ArrayList<>();
        }
    }

    Stack<Node> st = new Stack<>();
    Node root = null;

    for (int i = 0; i < arr.length; i = i + 1) {
        if (arr[i] == -1) {
            if (!st.isEmpty()) {
                st.pop();
            }
        } else {
            Node node = new Node(arr[i]);
            if (st.isEmpty()) {
                root = node;
            } else {
                st.peek().children.add(node);
            }
            st.push(node);
        }
    }

    if (root == null) {
        return 0;
    }

    class TreeHelper {
        int size(Node node) {
            int total = 1;
            for (Node child : node.children) {
                total = total + size(child);
            }
            return total;
        }
    }

    TreeHelper helper = new TreeHelper();
    return helper.size(root);
}
```
