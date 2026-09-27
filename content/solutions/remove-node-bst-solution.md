---
title: "Remove Node (BST) - Solution"
problemUrl: "/problems/remove-node-bst/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Deleting a node from a Binary Search Tree (BST) requires maintaining the BST invariant across all cases:
1. Search for the target value:
   - If `val < node.val`, recurse on `node.left`.
   - If `val > node.val`, recurse on `node.right`.
2. Once the target node is located (`node.val == val`):
   - **Case 1 (Leaf Node)**: If `node.left == null` and `node.right == null`, return `null`.
   - **Case 2 (Single Child)**: If `node.left == null`, return `node.right`. If `node.right == null`, return `node.left`.
   - **Case 3 (Two Children)**: Find the maximum value in the left subtree (the inorder predecessor). Replace `node.val` with this maximum value, then recursively delete that duplicate value from `node.left`.
3. Perform a pre-order traversal on the updated tree to return the final serialized array.

### Step-by-Step Algorithm:
1. Reconstruct the initial BST from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty array `new int[0]`.
3. Define helper `findMax(Node node)` that iterates rightward down `node` to find its largest value.
4. Define the recursive deletion function `delete(Node node, int target)`:
   - If `node == null`, return `null`.
   - If `target < node.val`, set `node.left = delete(node.left, target)`.
   - Else if `target > node.val`, set `node.right = delete(node.right, target)`.
   - Else (node found):
     - If `node.left == null`, return `node.right`.
     - If `node.right == null`, return `node.left`.
     - Find `int maxVal = findMax(node.left)`.
     - Set `node.val = maxVal`.
     - Set `node.left = delete(node.left, maxVal)`.
   - Return `node`.
5. Call `root = delete(root, val)`.
6. If `root == null`, return an empty array `new int[0]`.
7. Traverse the tree rooted at `root` in pre-order, collecting node values into a list.
8. Convert the list into an `int[]` array and return.

## Code

```java
public static int[] solve(int[] arr, int val) {
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

    class BSTDeleter {
        int findMax(Node node) {
            Node curr = node;
            while (curr.right != null) {
                curr = curr.right;
            }
            return curr.val;
        }

        Node delete(Node node, int target) {
            if (node == null) {
                return null;
            }
            if (target < node.val) {
                node.left = delete(node.left, target);
            } else if (target > node.val) {
                node.right = delete(node.right, target);
            } else {
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null) {
                    return node.left;
                }
                int maxVal = findMax(node.left);
                node.val = maxVal;
                node.left = delete(node.left, maxVal);
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

    BSTDeleter deleter = new BSTDeleter();
    root = deleter.delete(root, val);

    if (root == null) {
        return new int[0];
    }

    List<Integer> list = new ArrayList<>();
    deleter.preOrder(root, list);

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
