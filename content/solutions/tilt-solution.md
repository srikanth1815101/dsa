---
title: "Tilt - Solution"
problemUrl: "/problems/tilt/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The tilt of each node is the absolute difference between the sum of its left subtree values and the sum of its right subtree values:
1. A naive approach calculating subtree sums from scratch at every node takes $O(n^2)$ time.
2. An optimal $O(n)$ bottom-up post-order traversal computes the sum of node values in each subtree and immediately calculates the node's tilt:
   - For any node `N`, first recursively compute `leftSum` and `rightSum`.
   - The tilt of node `N` is `Math.abs(leftSum - rightSum)`.
   - Add this tilt to an accumulated global total `totalTilt`.
   - Return `leftSum + rightSum + N.val` to the parent caller.
3. If the input array is empty or the tree has no nodes, return `0`.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `0`.
3. Initialize a variable `totalTilt = 0`.
4. Define a recursive helper function `calculateSum(Node node)`:
   - If `node == null`, return `0`.
   - Compute `int leftSum = calculateSum(node.left)`.
   - Compute `int rightSum = calculateSum(node.right)`.
   - Calculate node tilt: `int nodeTilt = Math.abs(leftSum - rightSum)`.
   - Accumulate tilt: `totalTilt = totalTilt + nodeTilt`.
   - Return subtree sum: `leftSum + rightSum + node.val`.
5. Call `calculateSum(root)`.
6. Return `totalTilt`.

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

    class TiltCalculator {
        int totalTilt = 0;

        int calculateSum(Node node) {
            if (node == null) {
                return 0;
            }
            int leftSum = calculateSum(node.left);
            int rightSum = calculateSum(node.right);
            int nodeTilt = Math.abs(leftSum - rightSum);
            totalTilt = totalTilt + nodeTilt;
            return leftSum + rightSum + node.val;
        }
    }

    TiltCalculator calculator = new TiltCalculator();
    calculator.calculateSum(root);
    return calculator.totalTilt;
}
```
