---
title: "Diameter (Binary Tree) - Solution"
problemUrl: "/problems/diameter-binary-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The diameter of a binary tree is the longest path between any two nodes, measured by number of edges:
1. At any node `N`, the longest path passing through `N` is formed by connecting its deepest descendant in the left subtree to its deepest descendant in the right subtree.
2. In terms of edge-based heights where a null node has height `-1`:
   - The diameter through node `N` equals `leftHeight + rightHeight + 2`.
3. In a single bottom-up recursive traversal:
   - For each node, recursively compute the heights of its left and right subtrees.
   - Calculate the candidate diameter passing through this node and update a global maximum.
   - Return `Math.max(leftHeight, rightHeight) + 1` as the height of the current subtree to its parent.
4. This visits every node exactly once, achieving optimal $O(n)$ time complexity.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `0`.
3. Initialize a variable `maxDiameter = 0`.
4. Define a recursive helper function `calculateHeight(Node node)`:
   - If `node == null`, return `-1`.
   - Recursively compute `int lh = calculateHeight(node.left)`.
   - Recursively compute `int rh = calculateHeight(node.right)`.
   - Calculate candidate diameter `int candidate = lh + rh + 2`.
   - Update `maxDiameter = Math.max(maxDiameter, candidate)`.
   - Return `Math.max(lh, rh) + 1`.
5. Call `calculateHeight(root)`.
6. Return `maxDiameter`.

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

    class HeightCalculator {
        int maxDiameter = 0;

        int calculateHeight(Node node) {
            if (node == null) {
                return -1;
            }
            int lh = calculateHeight(node.left);
            int rh = calculateHeight(node.right);
            int candidate = lh + rh + 2;
            if (candidate > maxDiameter) {
                maxDiameter = candidate;
            }
            return Math.max(lh, rh) + 1;
        }
    }

    HeightCalculator calculator = new HeightCalculator();
    calculator.calculateHeight(root);
    return calculator.maxDiameter;
}
```
