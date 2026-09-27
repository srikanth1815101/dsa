---
title: "Left Cloned Tree - Solution"
problemUrl: "/problems/left-cloned-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To transform a binary tree into a left-cloned tree, each node must duplicate itself as its own left child while preserving the hierarchy of all existing descendants:
1. Use post-order recursion: first recursively transform the left subtree and right subtree of the current node.
2. Let the returned root of the transformed left subtree be `lcr` and right subtree be `rcr`.
3. Instantiate a new node with the current node's value (`new Node(node.val)`).
4. Point this new clone's `left` reference to `lcr`, and set its `right` reference to `null`.
5. Update the current node's `left` reference to point to the new clone, and set its `right` reference to `rcr`.
6. Return the current node.
7. Finally, perform a standard pre-order traversal on the transformed tree to produce the final array of values.

### Step-by-Step Algorithm:
1. Reconstruct the original binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty array.
3. Define the recursive function `createLeftClone(Node node)`:
   - If `node == null`, return `null`.
   - Recursively clone left subtree: `Node lcr = createLeftClone(node.left)`.
   - Recursively clone right subtree: `Node rcr = createLeftClone(node.right)`.
   - Create clone node: `Node clone = new Node(node.val)`.
   - Attach subtrees: `clone.left = lcr`, `clone.right = null`.
   - Attach clone to current node: `node.left = clone`, `node.right = rcr`.
   - Return `node`.
4. Call `createLeftClone(root)`.
5. Perform a pre-order traversal on `root` and collect all node values into a list.
6. Convert the list into an `int[]` array and return.

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

    class TreeTransformer {
        Node createLeftClone(Node node) {
            if (node == null) {
                return null;
            }
            Node lcr = createLeftClone(node.left);
            Node rcr = createLeftClone(node.right);
            Node clone = new Node(node.val);
            clone.left = lcr;
            clone.right = null;
            node.left = clone;
            node.right = rcr;
            return node;
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

    TreeTransformer transformer = new TreeTransformer();
    transformer.createLeftClone(root);

    List<Integer> list = new ArrayList<>();
    transformer.preOrder(root, list);

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
