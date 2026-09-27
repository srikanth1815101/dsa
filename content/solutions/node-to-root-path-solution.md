---
title: "Node to Root Path - Solution"
problemUrl: "/problems/node-to-root-path/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the path from a target node to the root in a generic tree:
1. Base check: If `node.val == data`, return a list containing `node.val`.
2. Recursive step: Iterate through all children of `node`. Recursively search for `data` in each child subtree.
3. If any child subtree search returns a non-empty path, it means `data` exists in that subtree:
   - Append `node.val` to the path.
   - Return the path to the caller immediately.
4. If none of the children find `data`, return an empty list.

### Step-by-Step Algorithm:
1. Parse the tree using a stack. If `root == null`, return an empty array.
2. In `findPath(node, data)`:
   - If `node.val == data`, create a new list `path`, add `node.val`, and return `path`.
   - For each `child` in `node.children`:
     - `childPath = findPath(child, data)`.
     - If `childPath.size() > 0`:
       - `childPath.add(node.val)`.
       - Return `childPath`.
   - Return an empty list.
3. Call `findPath(root, data)`.
4. Convert the path list into an integer array and return it.

## Code

```java
public static int[] solve(int[] arr, int data) {
    if (arr.length == 0) {
        return new int[0];
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
        return new int[0];
    }

    class PathFinder {
        List<Integer> find(Node node, int target) {
            if (node.val == target) {
                List<Integer> list = new ArrayList<>();
                list.add(node.val);
                return list;
            }

            for (Node child : node.children) {
                List<Integer> path = find(child, target);
                if (path.size() > 0) {
                    path.add(node.val);
                    return path;
                }
            }

            return new ArrayList<>();
        }
    }

    PathFinder finder = new PathFinder();
    List<Integer> path = finder.find(root, data);

    int[] result = new int[path.size()];
    for (int i = 0; i < path.size(); i = i + 1) {
        result[i] = path.get(i);
    }

    return result;
}
```
