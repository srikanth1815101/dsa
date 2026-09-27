---
title: "Binary Tree Maximum Path Sum - Solution"
problemUrl: "/problems/binary-tree-maximum-path-sum/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the maximum path sum in a binary tree:
1. Every path has a unique "highest" node (the turnaround apex of the path).
2. For any node `N` acting as the apex of a path:
   - The path can extend downwards into the left child with maximum contribution `leftGain = Math.max(0, maxGain(N.left))`.
   - The path can extend downwards into the right child with maximum contribution `rightGain = Math.max(0, maxGain(N.right))`.
   - Clamping negative subtree contributions to `0` ensures we drop subtrees that decrease the sum.
   - The maximum path sum turning at node `N` is `N.val + leftGain + rightGain`.
3. To continue extending upward toward `N`'s parent, the path can choose at most one downward child:
   - It returns `N.val + Math.max(leftGain, rightGain)` to its parent.
4. Throughout the post-order depth-first traversal, maintain a global maximum initialized to the smallest integer value.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `0`.
3. Initialize `maxSum = Integer.MIN_VALUE`.
4. Define a recursive helper function `maxGain(Node node)`:
   - If `node == null`, return `0`.
   - Compute `int leftGain = Math.max(0, maxGain(node.left))`.
   - Compute `int rightGain = Math.max(0, maxGain(node.right))`.
   - Calculate candidate turnaround path sum: `int currentPath = node.val + leftGain + rightGain`.
   - Update `maxSum = Math.max(maxSum, currentPath)`.
   - Return `node.val + Math.max(leftGain, rightGain)`.
5. Call `maxGain(root)`.
6. Return `maxSum`.

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

    class PathSummer {
        int maxSum = Integer.MIN_VALUE;

        int maxGain(Node node) {
            if (node == null) {
                return 0;
            }
            int leftGain = Math.max(0, maxGain(node.left));
            int rightGain = Math.max(0, maxGain(node.right));
            int currentPath = node.val + leftGain + rightGain;
            if (currentPath > maxSum) {
                maxSum = currentPath;
            }
            return node.val + Math.max(leftGain, rightGain);
        }
    }

    PathSummer summer = new PathSummer();
    summer.maxGain(root);
    return summer.maxSum;
}
```
