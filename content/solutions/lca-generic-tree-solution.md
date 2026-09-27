---
title: "LCA (Generic Tree) - Solution"
problemUrl: "/problems/lca-generic-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the Lowest Common Ancestor (LCA) in a generic tree:
1. Find the node-to-root path for node `d1` (`path1 = [d1, ..., root]`).
2. Find the node-to-root path for node `d2` (`path2 = [d2, ..., root]`).
3. Set pointers `i = path1.size() - 1` and `j = path2.size() - 1`, both starting at the root node.
4. Decrement both pointers simultaneously as long as `path1.get(i) == path2.get(j)`.
5. When they diverge, the last common node before divergence (`path1.get(i + 1)`) is the LCA.

### Step-by-Step Algorithm:
1. Parse the tree using a stack. If `root == null`, return -1.
2. Helper `nodeToRootPath(node, data)` finds the path from `data` to `root`.
3. Compute `path1 = nodeToRootPath(root, d1)` and `path2 = nodeToRootPath(root, d2)`.
4. If either path is empty, return -1.
5. Set `i = path1.size() - 1` and `j = path2.size() - 1`.
6. While `i >= 0 && j >= 0 && path1.get(i).equals(path2.get(j))`:
   - Decrement `i`.
   - Decrement `j`.
7. Return `path1.get(i + 1)`.

## Code

```java
public static int solve(int[] arr, int d1, int d2) {
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

    class PathHelper {
        List<Integer> getPath(Node node, int target) {
            if (node.val == target) {
                List<Integer> list = new ArrayList<>();
                list.add(node.val);
                return list;
            }
            for (Node child : node.children) {
                List<Integer> path = getPath(child, target);
                if (path.size() > 0) {
                    path.add(node.val);
                    return path;
                }
            }
            return new ArrayList<>();
        }
    }

    PathHelper helper = new PathHelper();
    List<Integer> p1 = helper.getPath(root, d1);
    List<Integer> p2 = helper.getPath(root, d2);

    if (p1.size() == 0 || p2.size() == 0) {
        return -1;
    }

    int i = p1.size() - 1;
    int j = p2.size() - 1;

    while (i >= 0 && j >= 0 && p1.get(i).equals(p2.get(j))) {
        i = i - 1;
        j = j - 1;
    }

    return p1.get(i + 1);
}
```
