---
title: "Replace Sum of Larger - Solution"
problemUrl: "/problems/replace-sum-of-larger/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To replace each node's value with the sum of all elements strictly greater than it:
1. In a Binary Search Tree (BST), an inorder traversal (left, root, right) visits keys in strictly increasing order.
2. Conversely, a reverse inorder traversal (right, root, left) visits keys in strictly decreasing order.
3. As we traverse in reverse inorder:
   - All nodes visited prior to the current node are strictly larger than the current node.
   - Maintain a running sum accumulator initialized to `0`.
   - Store the current node's original value in a temporary variable.
   - Replace the current node's value with the accumulator.
   - Add the temporary original value to the accumulator.
   - Recurse into the left subtree.
4. After completing this reverse inorder pass, perform a standard pre-order traversal to produce the output array.

### Step-by-Step Algorithm:
1. Reconstruct the initial BST from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty array `new int[0]`.
3. Initialize a running sum tracker with `sum = 0`.
4. Define a recursive reverse inorder helper `replace(Node node)`:
   - If `node == null`, return.
   - Recurse on `replace(node.right)`.
   - Store original value: `int original = node.val`.
   - Update node value: `node.val = sum`.
   - Update running sum: `sum = sum + original`.
   - Recurse on `replace(node.left)`.
5. Call `replace(root)`.
6. Traverse the tree rooted at `root` in pre-order, collecting node values into a list.
7. Convert the list into an `int[]` array and return.

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

    class Transformer {
        int sum = 0;

        void replaceWithLarger(Node node) {
            if (node == null) {
                return;
            }
            replaceWithLarger(node.right);
            int original = node.val;
            node.val = sum;
            sum = sum + original;
            replaceWithLarger(node.left);
        }

        void preOrder(Node node, List<Integer> list) {
            if (node == null) {
                return;
            }
            list.add(node.val);
            preOrder(node.left, list);
            preOrder(node.right, list);
        }
    }

    Transformer transformer = new Transformer();
    transformer.replaceWithLarger(root);

    List<Integer> list = new ArrayList<>();
    transformer.preOrder(root, list);

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
