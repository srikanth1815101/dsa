---
title: "Height of Generic Tree - Solution"
problemUrl: "/problems/height-of-generic-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The height of a generic tree measured in edges represents the longest downward path from the root node to any leaf:
1. Base case: A leaf node has no children. Its height in terms of edges is 0.
2. Recursive step: For any node with children, compute the maximum height across all of its children subtrees (`maxChildHeight`).
3. The height of the current node is `maxChildHeight + 1`.
4. Initializing `maxChildHeight = -1` handles leaf nodes automatically because `-1 + 1 = 0`.

### Step-by-Step Algorithm:
1. If `arr.length == 0`, return -1.
2. Build the tree using a stack parser. If `root == null`, return -1.
3. Define `height(node)`:
   - Initialize `maxHeight = -1`.
   - For each `child` in `node.children`:
     - `ch = height(child)`.
     - `maxHeight = Math.max(maxHeight, ch)`.
   - Return `maxHeight + 1`.
4. Return `height(root)`.

## Code

```java
public static int solve(int[] arr) {
    if (arr.length == 0) {
        return -1;
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
        return -1;
    }

    class TreeHelper {
        int height(Node node) {
            int maxChildHeight = -1;
            for (Node child : node.children) {
                int ch = height(child);
                if (ch > maxChildHeight) {
                    maxChildHeight = ch;
                }
            }
            return maxChildHeight + 1;
        }
    }

    TreeHelper helper = new TreeHelper();
    return helper.height(root);
}
```
