---
title: "Add Node (BST) - Solution"
problemUrl: "/problems/add-node-bst/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Inserting a new key into a Binary Search Tree (BST) maintains the fundamental invariant that for any node `N`, all values in its left subtree are smaller than `N.val` and all values in its right subtree are larger than `N.val`:
1. If the current node reference is `null`, create and return a new `Node(val)`.
2. If `val < node.val`, recursively insert into the left child: `node.left = insert(node.left, val)`.
3. If `val > node.val`, recursively insert into the right child: `node.right = insert(node.right, val)`.
4. Return the unmodified `node` back to its caller.
5. Once the node is inserted, perform a standard pre-order traversal on the updated tree to generate the output array.

### Step-by-Step Algorithm:
1. Reconstruct the initial BST from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, create a single root node with value `val`.
3. Define the recursive insertion function `insert(Node node, int value)`:
   - If `node == null`, return `new Node(value)`.
   - If `value < node.val`, set `node.left = insert(node.left, value)`.
   - Else if `value > node.val`, set `node.right = insert(node.right, value)`.
   - Return `node`.
4. Call `root = insert(root, val)`.
5. Perform a pre-order traversal on `root` and collect all node values into a list.
6. Convert the list into an `int[]` array and return.

## Code

```java
public static int[] solve(int[] arr, int val) {
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

    Node root = null;
    if (arr.length > 0 && arr[0] != -1) {
        Stack<Pair> st = new Stack<>();
        root = new Node(arr[0]);
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
    }

    class BSTInserter {
        Node insert(Node node, int value) {
            if (node == null) {
                return new Node(value);
            }
            if (value < node.val) {
                node.left = insert(node.left, value);
            } else if (value > node.val) {
                node.right = insert(node.right, value);
            }
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

    BSTInserter inserter = new BSTInserter();
    root = inserter.insert(root, val);

    List<Integer> list = new ArrayList<>();
    inserter.preOrder(root, list);

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
