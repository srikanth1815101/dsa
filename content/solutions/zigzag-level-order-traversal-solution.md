---
title: "Zigzag Level Order Traversal - Solution"
problemUrl: "/problems/zigzag-level-order-traversal/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Zigzag level order traversal processes a binary tree level by level while alternating the traversal direction between left-to-right and right-to-left:
1. Reconstruct the binary tree from the pre-order serialized input array.
2. Employ a Breadth-First Search (BFS) level-order traversal using a FIFO queue.
3. For each level:
   - Determine the number of nodes currently residing in the queue (`levelSize = queue.size()`).
   - Collect all node values at the current depth into a list.
   - Enqueue the left and right children of each processed node to prepare for the subsequent level.
   - If the level index is odd (1, 3, 5, ...), reverse the collected list of values.
4. Append each level's array of values to the final result.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty 2D array `new int[0][0]`.
3. Initialize a FIFO `Queue<Node> queue = new LinkedList<>()` and enqueue `root`.
4. Initialize a list of integer arrays `List<int[]> levels = new ArrayList<>()` and a level counter `int levelIdx = 0`.
5. While `!queue.isEmpty()`:
   - Determine `int size = queue.size()`.
   - Create a list `List<Integer> currentLevel = new ArrayList<>()`.
   - Loop `i` from `0` to `size - 1`:
     - Dequeue `Node curr = queue.poll()`.
     - Add `curr.val` to `currentLevel`.
     - If `curr.left != null`, enqueue `curr.left`.
     - If `curr.right != null`, enqueue `curr.right`.
   - If `levelIdx % 2 != 0`, reverse `currentLevel`.
   - Convert `currentLevel` to an `int[]` array and add to `levels`.
   - Increment `levelIdx = levelIdx + 1`.
6. Convert `levels` into a 2D array `int[][]` and return.

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

    Queue<Node> queue = new LinkedList<>();
    queue.offer(root);
    List<int[]> levels = new ArrayList<>();
    int levelIdx = 0;

    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> currentLevel = new ArrayList<>();

        for (int i = 0; i < size; i = i + 1) {
            Node curr = queue.poll();
            currentLevel.add(curr.val);
            if (curr.left != null) {
                queue.offer(curr.left);
            }
            if (curr.right != null) {
                queue.offer(curr.right);
            }
        }

        if (levelIdx % 2 != 0) {
            Collections.reverse(currentLevel);
        }

        int[] levelArr = new int[currentLevel.size()];
        for (int i = 0; i < currentLevel.size(); i = i + 1) {
            levelArr[i] = currentLevel.get(i);
        }
        levels.add(levelArr);
        levelIdx = levelIdx + 1;
    }

    int[][] result = new int[levels.size()][];
    for (int i = 0; i < levels.size(); i = i + 1) {
        result[i] = levels.get(i);
    }

    return result;
}
```
