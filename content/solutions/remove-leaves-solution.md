---
title: "Remove Leaves - Solution"
problemUrl: "/problems/remove-leaves/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To remove all leaf nodes from a generic tree:
1. Pruning must be done top-down before child removal cascades. A node checks each of its children:
   - If `child.children.size() == 0`, that child is an original leaf and is removed from the parent's children list.
   - If `child.children.size() > 0`, that child is an internal node, so we keep it and recursively invoke `removeLeaves(child)`.
2. Iterate backwards from `node.children.size() - 1` down to `0` so removing an element from the list does not affect subsequent index lookups.
3. If the root node itself is a leaf (has 0 children initially), removing leaves results in an empty tree.

### Step-by-Step Algorithm:
1. If `arr.length == 0`, return an empty array.
2. Build the tree using a stack. If `root == null`, return an empty array.
3. If `root.children.size() == 0`, the root is a leaf; return an empty array.
4. Define `removeLeaves(node)`:
   - For `i` from `node.children.size() - 1` down to `0`:
     - Let `child = node.children.get(i)`.
     - If `child.children.size() == 0`, remove `child` at index `i`.
   - For each remaining `child` in `node.children`, recursively call `removeLeaves(child)`.
5. Call `removeLeaves(root)`.
6. Return the level-order traversal of the pruned tree.

## Code

```java
public static int[] solve(int[] arr) {
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

    if (root == null || root.children.size() == 0) {
        return new int[0];
    }

    class PruneHelper {
        void removeLeaves(Node node) {
            for (int i = node.children.size() - 1; i >= 0; i = i - 1) {
                Node child = node.children.get(i);
                if (child.children.size() == 0) {
                    node.children.remove(i);
                }
            }
            for (Node child : node.children) {
                removeLeaves(child);
            }
        }
    }

    PruneHelper helper = new PruneHelper();
    helper.removeLeaves(root);

    List<Integer> list = new ArrayList<>();
    Queue<Node> queue = new ArrayDeque<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
        Node curr = queue.poll();
        list.add(curr.val);
        for (Node child : curr.children) {
            queue.offer(child);
        }
    }

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
