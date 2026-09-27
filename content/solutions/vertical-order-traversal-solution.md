---
title: "Vertical Order Traversal - Solution"
problemUrl: "/problems/vertical-order-traversal/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Vertical order traversal groups binary tree nodes by their horizontal column index, ordered from top to bottom:
1. Assign horizontal coordinates where the root is at column `0`.
2. A left child decrements the column by `1` (`col - 1`), while a right child increments the column by `1` (`col + 1`).
3. To naturally maintain the top-to-bottom ordering of nodes within each column, perform a Breadth-First Search (BFS) level-order traversal using a queue storing pairs of `(Node, col)`.
4. Group node values into a hash map indexed by column coordinate, simultaneously tracking the minimum and maximum column indices observed.
5. After BFS completes, iterate from `minCol` to `maxCol`, extracting the ordered lists from the map into a 2D integer array.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty 2D array `new int[0][0]`.
3. Create a map `Map<Integer, List<Integer>> columnMap = new HashMap<>()` and initialize `minCol = 0`, `maxCol = 0`.
4. Initialize a BFS queue storing `(Node, col)` pairs, and enqueue `(root, 0)`.
5. While the queue is not empty:
   - Dequeue the front pair `(curr, col)`.
   - Add `curr.val` to the list mapped to `col` in `columnMap`.
   - Update `minCol = Math.min(minCol, col)` and `maxCol = Math.max(maxCol, col)`.
   - If `curr.left != null`, enqueue `(curr.left, col - 1)`.
   - If `curr.right != null`, enqueue `(curr.right, col + 1)`.
6. Construct a 2D array `int[][] result` of size `maxCol - minCol + 1`.
7. For each column from `minCol` to `maxCol`, convert its list of integers into an `int[]` and populate `result`.
8. Return `result`.

## Code

```java
public static int[][] solve(int[] arr) {
    if (arr.length == 0 || arr[0] == -1) {
        return new int[0][0];
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

    Map<Integer, List<Integer>> map = new HashMap<>();
    Queue<ColPair> queue = new LinkedList<>();
    queue.offer(new ColPair(root, 0));

    int minCol = 0;
    int maxCol = 0;

    while (!queue.isEmpty()) {
        ColPair curr = queue.poll();
        int c = curr.col;
        if (!map.containsKey(c)) {
            map.put(c, new ArrayList<>());
        }
        map.get(c).add(curr.node.val);

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
    int[][] result = new int[totalCols][];

    for (int col = minCol; col <= maxCol; col = col + 1) {
        List<Integer> list = map.get(col);
        int[] colArr = new int[list.size()];
        for (int i = 0; i < list.size(); i = i + 1) {
            colArr[i] = list.get(i);
        }
        result[col - minCol] = colArr;
    }

    return result;
}
```
