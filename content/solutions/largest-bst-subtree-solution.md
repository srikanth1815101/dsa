---
title: "Largest BST Subtree - Solution"
problemUrl: "/problems/largest-bst-subtree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the largest BST subtree in $O(n)$ time, perform a bottom-up post-order depth-first traversal where each subtree returns a state summary:
1. Each node requires four pieces of information from its subtrees:
   - Whether the subtree is a valid BST (`isBST`).
   - The size of the largest BST within this subtree (`size`).
   - The minimum value in the subtree (`min`).
   - The maximum value in the subtree (`max`).
2. For a `null` node (base case):
   - `isBST = true`
   - `size = 0`
   - `min = Long.MAX_VALUE`
   - `max = Long.MIN_VALUE`
3. For an internal node `N`:
   - It forms a valid BST if and only if `left.isBST`, `right.isBST`, `N.val > left.max`, and `N.val < right.min`.
   - If valid, its BST size is `left.size + right.size + 1`, its minimum is `Math.min((long)N.val, left.min)`, and its maximum is `Math.max((long)N.val, right.max)`.
   - If invalid, `isBST = false`, and its largest contained BST size is `Math.max(left.size, right.size)`.
4. Returning these aggregate summaries ensures every node is examined in $O(1)$ time, yielding an optimal $O(n)$ total complexity.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `0`.
3. Define a helper container class `SubtreeInfo` with fields: `boolean isBST`, `int size`, `long min`, `long max`.
4. Define a recursive helper function `evaluate(Node node)`:
   - If `node == null`, return `new SubtreeInfo(true, 0, Long.MAX_VALUE, Long.MIN_VALUE)`.
   - Compute `SubtreeInfo left = evaluate(node.left)`.
   - Compute `SubtreeInfo right = evaluate(node.right)`.
   - Check if `left.isBST && right.isBST && node.val > left.max && node.val < right.min`:
     - If true, return `new SubtreeInfo(true, left.size + right.size + 1, Math.min((long)node.val, left.min), Math.max((long)node.val, right.max))`.
     - Otherwise, return `new SubtreeInfo(false, Math.max(left.size, right.size), 0, 0)`.
5. Call `SubtreeInfo result = evaluate(root)`.
6. Return `result.size`.

## Code

```java
public static int solve(int[] arr) {
    if (arr.length == 0 || arr[0] == -1) {
        return 0;
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

    class SubtreeInfo {
        boolean isBST;
        int size;
        long min;
        long max;
        SubtreeInfo(boolean isBST, int size, long min, long max) {
            this.isBST = isBST;
            this.size = size;
            this.min = min;
            this.max = max;
        }
    }

    class BSTEvaluator {
        SubtreeInfo evaluate(Node node) {
            if (node == null) {
                return new SubtreeInfo(true, 0, Long.MAX_VALUE, Long.MIN_VALUE);
            }

            SubtreeInfo left = evaluate(node.left);
            SubtreeInfo right = evaluate(node.right);

            if (left.isBST && right.isBST && node.val > left.max && node.val < right.min) {
                long currentMin = Math.min((long) node.val, left.min);
                long currentMax = Math.max((long) node.val, right.max);
                int currentSize = left.size + right.size + 1;
                return new SubtreeInfo(true, currentSize, currentMin, currentMax);
            }

            int bestSize = Math.max(left.size, right.size);
            return new SubtreeInfo(false, bestSize, 0, 0);
        }
    }

    BSTEvaluator evaluator = new BSTEvaluator();
    SubtreeInfo info = evaluator.evaluate(root);
    return info.size;
}
```
