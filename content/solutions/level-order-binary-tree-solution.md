---
title: "Level Order (Binary Tree) - Solution"
problemUrl: "/problems/level-order-binary-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Level order traversal processes nodes level by level from root to leaves using a First-In-First-Out (FIFO) queue:
1. Initialize a queue with the root node.
2. In each iteration, remove the head of the queue, append its value to the output list, and enqueue its left and right children if they are non-null.
3. This guarantees all nodes at distance $d$ from the root are evaluated before any node at distance $d + 1$.

### Step-by-Step Algorithm:
1. If `arr.length == 0 || arr[0] == -1`, return an empty array.
2. Reconstruct the binary tree using a state-tracking stack parser.
3. Initialize `Queue<Node> queue = new ArrayDeque<>()` and enqueue `root`.
4. While `queue` is non-empty:
   - Poll `curr = queue.poll()`.
   - Add `curr.val` to `resultList`.
   - If `curr.left != null`, enqueue `curr.left`.
   - If `curr.right != null`, enqueue `curr.right`.
5. Convert `resultList` into an integer array and return.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr.length == 0 || arr[0] == -1) {
        return new int[0];
    }

    class Node {
        int val;
        Node left;
        Node right;
        Node(int val) {
            this.val = val;
        }
    }

    class Pair {
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
                Node leftNode = new Node(arr[idx]);
                top.node.left = leftNode;
                st.push(new Pair(leftNode, 1));
            }
            idx = idx + 1;
        } else if (top.state == 2) {
            top.state = 3;
            if (arr[idx] != -1) {
                Node rightNode = new Node(arr[idx]);
                top.node.right = rightNode;
                st.push(new Pair(rightNode, 1));
            }
            idx = idx + 1;
        } else {
            st.pop();
        }
    }

    List<Integer> list = new ArrayList<>();
    Queue<Node> queue = new ArrayDeque<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
        Node curr = queue.poll();
        list.add(curr.val);
        if (curr.left != null) {
            queue.offer(curr.left);
        }
        if (curr.right != null) {
            queue.offer(curr.right);
        }
    }

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
