---
title: "Mirror Tree - Solution"
problemUrl: "/problems/mirror-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To mirror a generic tree:
1. For each node in the tree, recursively mirror all of its child subtrees.
2. Reverse the `children` list of the current node so that the leftmost child becomes the rightmost child and vice versa.
3. Once mirrored, perform a level-order (BFS) traversal of the tree to extract the node values into an array.

### Step-by-Step Algorithm:
1. If the input array is empty, return an empty array.
2. Build the generic tree from the Euler array using a stack.
3. In `mirror(node)`:
   - For each `child` in `node.children`, call `mirror(child)`.
   - Reverse `node.children` in place using two pointers.
4. Call `mirror(root)`.
5. Run standard queue-based BFS to collect values level by level and return the resulting array.

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

    if (root == null) {
        return new int[0];
    }

    class MirrorHelper {
        void mirror(Node node) {
            for (Node child : node.children) {
                mirror(child);
            }
            int left = 0;
            int right = node.children.size() - 1;
            while (left < right) {
                Node temp = node.children.get(left);
                node.children.set(left, node.children.get(right));
                node.children.set(right, temp);
                left = left + 1;
                right = right - 1;
            }
        }
    }

    MirrorHelper helper = new MirrorHelper();
    helper.mirror(root);

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
