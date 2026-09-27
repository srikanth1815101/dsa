---
title: "Level Order (Generic Tree) - Solution"
problemUrl: "/problems/level-order-generic-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Level order traversal uses a Breadth-First Search (BFS) strategy driven by a Queue:
1. Initialize a queue with the root node.
2. While the queue is not empty:
   - Dequeue the node at the front.
   - Append its value to the traversal list.
   - Enqueue each of its children in left-to-right order.
3. This guarantees that all nodes at depth $d$ are visited before any node at depth $d + 1$.

### Step-by-Step Algorithm:
1. Parse the Euler array to construct the generic tree. If `root == null`, return an empty array.
2. Create a `Queue<Node> queue = new ArrayDeque<>()` and enqueue `root`.
3. Create a `List<Integer> resultList = new ArrayList<>()`.
4. While `queue` is not empty:
   - Poll `Node curr = queue.poll()`.
   - Add `curr.val` to `resultList`.
   - For each `child` in `curr.children`, offer `child` into `queue`.
5. Convert `resultList` to `int[]` and return it.

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
