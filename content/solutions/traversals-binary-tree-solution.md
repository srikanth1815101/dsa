---
title: "Traversals (Binary Tree) - Solution"
problemUrl: "/problems/traversals-binary-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Binary tree traversals categorize node visits relative to their left and right subtrees:
1. Pre-order: Visit the current node, then traverse the left subtree, then the right subtree.
2. In-order: Traverse the left subtree, visit the current node, then traverse the right subtree.
3. Post-order: Traverse the left subtree, traverse the right subtree, then visit the current node.

### Step-by-Step Algorithm:
1. Construct the binary tree using a Pair stack where each stack element tracks `(node, state)`.
   - `state == 1`: process left child from `arr[idx++]`. If not -1, set `node.left` and push new pair with state 1. Else `node.left = null`. Increment state to 2.
   - `state == 2`: process right child from `arr[idx++]`. If not -1, set `node.right` and push new pair with state 1. Else `node.right = null`. Increment state to 3.
   - `state == 3`: pop from stack.
2. Run a recursive DFS `traverse(node)`:
   - Add `node.val` to `pre`.
   - Recursively visit `node.left`.
   - Add `node.val` to `in`.
   - Recursively visit `node.right`.
   - Add `node.val` to `post`.
3. Assemble the lists into a 2D array of size `[3][n]` and return.

## Code

```java
public static int[][] solve(int[] arr) {
    if (arr.length == 0 || arr[0] == -1) {
        return new int[3][0];
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

    List<Integer> preList = new ArrayList<>();
    List<Integer> inList = new ArrayList<>();
    List<Integer> postList = new ArrayList<>();

    class TraversalHelper {
        void dfs(Node node) {
            if (node == null) {
                return;
            }
            preList.add(node.val);
            dfs(node.left);
            inList.add(node.val);
            dfs(node.right);
            postList.add(node.val);
        }
    }

    TraversalHelper helper = new TraversalHelper();
    helper.dfs(root);

    int n = preList.size();
    int[][] result = new int[3][n];
    for (int i = 0; i < n; i = i + 1) {
        result[0][i] = preList.get(i);
        result[1][i] = inList.get(i);
        result[2][i] = postList.get(i);
    }

    return result;
}
```
