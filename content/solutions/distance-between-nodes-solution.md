---
title: "Distance Between Nodes - Solution"
problemUrl: "/problems/distance-between-nodes/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the shortest distance (in edges) between two nodes `d1` and `d2` in a tree:
1. Compute the node-to-root path for `d1` (`p1`) and for `d2` (`p2`).
2. Align both paths at the root (indices `i = p1.size() - 1` and `j = p2.size() - 1`).
3. Move down both paths towards the target nodes while elements match:
   - `while (i >= 0 && j >= 0 && p1.get(i).equals(p2.get(j))) { i = i - 1; j = j - 1; }`
4. When divergence occurs, `d1` is `i + 1` edges away from the LCA, and `d2` is `j + 1` edges away from the LCA.
5. Total edge distance = `(i + 1) + (j + 1) = i + j + 2`.

### Step-by-Step Algorithm:
1. Parse the tree. If `root == null`, return -1.
2. If `d1 == d2`, return 0.
3. Obtain `p1 = getPath(root, d1)` and `p2 = getPath(root, d2)`.
4. If either path is empty, return -1.
5. Initialize `i = p1.size() - 1` and `j = p2.size() - 1`.
6. While `i >= 0 && j >= 0 && p1.get(i).equals(p2.get(j))`:
   - `i = i - 1`.
   - `j = j - 1`.
7. Return `(i + 1) + (j + 1)`.

## Code

```java
public static int solve(int[] arr, int d1, int d2) {
    if (arr.length == 0) {
        return -1;
    }

    if (d1 == d2) {
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

    return (i + 1) + (j + 1);
}
```
