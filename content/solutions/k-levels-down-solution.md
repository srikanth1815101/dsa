---
title: "K Levels Down - Solution"
problemUrl: "/problems/k-levels-down/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find all nodes located `k` levels below the root:
1. Reconstruct the binary tree from the pre-order array.
2. If `node == null || k < 0`, terminate that path.
3. If `k == 0`, the current node is at the desired level: append `node.val` to our result list and return.
4. Recursively query the left child with `k - 1`, and then the right child with `k - 1` to ensure left-to-right order.

### Step-by-Step Algorithm:
1. If `arr.length == 0 || arr[0] == -1 || k < 0`, return an empty array.
2. Build the tree with the state stack parser.
3. Define `kLevelsDown(node, k)`:
   - If `node == null || k < 0`, return.
   - If `k == 0`, add `node.val` to `list` and return.
   - `kLevelsDown(node.left, k - 1)`.
   - `kLevelsDown(node.right, k - 1)`.
4. Call `kLevelsDown(root, k)`.
5. Convert `list` to `int[]` and return.

## Code

```java
public static int[] solve(int[] arr, int k) {
    if (arr.length == 0 || arr[0] == -1 || k < 0) {
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

    class LevelHelper {
        void findKDown(Node node, int depth) {
            if (node == null || depth < 0) {
                return;
            }
            if (depth == 0) {
                list.add(node.val);
                return;
            }
            findKDown(node.left, depth - 1);
            findKDown(node.right, depth - 1);
        }
    }

    LevelHelper helper = new LevelHelper();
    helper.findKDown(root, k);

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
