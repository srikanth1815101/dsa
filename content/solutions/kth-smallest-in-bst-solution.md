---
title: "Kth Smallest in BST - Solution"
problemUrl: "/problems/kth-smallest-in-bst/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the $k$-th smallest value in a Binary Search Tree (BST) efficiently:
1. Inorder traversal (left, root, right) of a valid BST visits every node in strictly increasing numerical order.
2. By executing an inorder traversal while maintaining an incremental counter `count`, the node visited when `count == k` is precisely the $k$-th smallest element.
3. Once the $k$-th node is identified, the traversal terminates early, achieving an optimal $O(h + k)$ time complexity.
4. If implemented using an explicit stack or recursion, the space complexity is bounded by the height of the tree $O(h)$.

### Step-by-Step Algorithm:
1. Reconstruct the BST from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return `-1`.
3. Initialize an integer counter `count = 0` and a result holder `kthVal = -1`.
4. Define a recursive helper function `inorder(Node node, int targetK)`:
   - If `node == null` or `count >= targetK`, return.
   - Recurse on `inorder(node.left, targetK)`.
   - Increment `count = count + 1`.
   - If `count == targetK`:
     - Set `kthVal = node.val`.
     - Return.
   - Recurse on `inorder(node.right, targetK)`.
5. Call `inorder(root, k)`.
6. Return `kthVal`.

## Code

```java
public static int solve(int[] arr, int k) {
    if (arr.length == 0 || arr[0] == -1) {
        return -1;
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

    class KthFinder {
        int count = 0;
        int result = -1;

        void search(Node node, int targetK) {
            if (node == null || count >= targetK) {
                return;
            }
            search(node.left, targetK);
            count = count + 1;
            if (count == targetK) {
                result = node.val;
                return;
            }
            search(node.right, targetK);
        }
    }

    KthFinder finder = new KthFinder();
    finder.search(root, k);
    return finder.result;
}
```
