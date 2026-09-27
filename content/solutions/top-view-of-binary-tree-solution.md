---
title: "Top View of Binary Tree - Solution"
problemUrl: "/problems/top-view-of-binary-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The top view of a binary tree contains the highest (top-most) node for each horizontal coordinate:
1. Associate each node with a horizontal coordinate `col`, where `root` is at `0`, left children decrease by `1`, and right children increase by `1`.
2. Perform a Breadth-First Search (BFS) level-order traversal:
   - Because BFS visits nodes level by level from top to bottom, the first time a column index is encountered, that node is guaranteed to be the topmost visible node at that column.
   - Any subsequently visited nodes sharing that column coordinate are positioned at greater depths and are occluded from the top view.
3. Record the first observed node for each column in a hash map and track `minCol` and `maxCol`.
4. Finally, iterate from `minCol` to `maxCol` and extract the values in left-to-right order into an integer array.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty array `new int[0]`.
3. Create a map `Map<Integer, Integer> topViewMap = new HashMap<>()` and initialize `minCol = 0`, `maxCol = 0`.
4. Initialize a BFS queue of `(Node, col)` pairs, and enqueue `(root, 0)`.
5. While the queue is not empty:
   - Dequeue `(curr, col)`.
   - If `!topViewMap.containsKey(col)`, insert `topViewMap.put(col, curr.node.val)`.
   - Update `minCol = Math.min(minCol, col)` and `maxCol = Math.max(maxCol, col)`.
   - If `curr.node.left != null`, enqueue `(curr.node.left, col - 1)`.
   - If `curr.node.right != null`, enqueue `(curr.node.right, col + 1)`.
6. Allocate an array `int[] result` of length `maxCol - minCol + 1`.
7. Iterate `col` from `minCol` to `maxCol`, assigning `result[col - minCol] = topViewMap.get(col)`.
8. Return `result`.

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

    class ColPair {
        Node node;
        int col;
        ColPair(Node node, int col) {
            this.node = node;
            this.col = col;
        }
    }

    Map<Integer, Integer> map = new HashMap<>();
    Queue<ColPair> queue = new LinkedList<>();
    queue.offer(new ColPair(root, 0));

    int minCol = 0;
    int maxCol = 0;

    while (!queue.isEmpty()) {
        ColPair curr = queue.poll();
        int c = curr.col;
        if (!map.containsKey(c)) {
            map.put(c, curr.node.val);
        }

        if (c < minCol) {
            minCol = c;
        }
        if (c > maxCol) {
            maxCol = c;
        }

        if (curr.node.left != null) {
            queue.offer(new ColPair(curr.node.left, c - 1));
        }
        if (curr.node.right != null) {
            queue.offer(new ColPair(curr.node.right, c + 1));
        }
    }

    int totalCols = maxCol - minCol + 1;
    int[] result = new int[totalCols];

    for (int col = minCol; col <= maxCol; col = col + 1) {
        result[col - minCol] = map.get(col);
    }

    return result;
}
```
