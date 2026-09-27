---
title: "Remove Leaves (Binary Tree) - Solution"
problemUrl: "/problems/remove-leaves-binary-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To remove all leaf nodes from a binary tree:
1. Pruning leaves requires distinguishing between nodes that were originally leaves and intermediate nodes whose children have been pruned.
2. If `node == null`, return `null`.
3. If both `node.left == null` and `node.right == null`, this node is a leaf, so return `null` to detach it from its parent.
4. Otherwise, recursively update the left and right pointers:
   - `node.left = removeLeaves(node.left)`
   - `node.right = removeLeaves(node.right)`
5. Return the modified `node`.
6. Once transformed, collect and return the pre-order traversal of the pruned binary tree.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty array.
3. Define the recursive pruning function `removeLeaves(Node node)`:
   - If `node == null`, return `null`.
   - If `node.left == null` and `node.right == null`, return `null`.
   - Set `node.left = removeLeaves(node.left)`.
   - Set `node.right = removeLeaves(node.right)`.
   - Return `node`.
4. Call `root = removeLeaves(root)`.
5. If `root == null`, return an empty array `new int[0]`.
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

    class Pruner {
        Node removeLeaves(Node node) {
            if (node == null) {
                return null;
            }
            if (node.left == null && node.right == null) {
                return null;
            }
            node.left = removeLeaves(node.left);
            node.right = removeLeaves(node.right);
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

    Pruner pruner = new Pruner();
    root = pruner.removeLeaves(root);

    if (root == null) {
        return new int[0];
    }

    List<Integer> list = new ArrayList<>();
    pruner.preOrder(root, list);

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
