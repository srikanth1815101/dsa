---
title: "Traversals (Generic Tree) - Solution"
problemUrl: "/problems/traversals-generic-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Traversals systematically visit each node in a generic tree:
1. Pre-order: Visit the current node upon entering its subtree (Euler visit in), before traversing any child subtrees.
2. Post-order: Visit the current node upon exiting its subtree (Euler visit out), after all child subtrees have finished processing.

### Step-by-Step Algorithm:
1. Parse the tree using a stack. If `root == null`, return `new int[2][0]`.
2. Initialize two lists: `pre` and `post`.
3. In recursive traversal `traverse(node)`:
   - Add `node.val` to `pre`.
   - For each `child` in `node.children`, recursively call `traverse(child)`.
   - Add `node.val` to `post`.
4. Copy `pre` into `result[0]` and `post` into `result[1]`.
5. Return `result`.

## Code

```java
public static int[][] solve(int[] arr) {
    if (arr.length == 0) {
        return new int[2][0];
    }

    class Node {
        int val;
        List<Node> children;
        Node(int val) {
            this.val = val;
            this.children = new ArrayList<>();
        }
    }

    Stack<Node> st = new Stack<>();
    Node root = null;

    for (int i = 0; i < arr.length; i = i + 1) {
        if (arr[i] == -1) {
            if (!st.isEmpty()) {
                st.pop();
            }
        } else {
            Node node = new Node(arr[i]);
            if (st.isEmpty()) {
                root = node;
            } else {
                st.peek().children.add(node);
            }
            st.push(node);
        }
    }

    if (root == null) {
        return new int[2][0];
    }

    List<Integer> preList = new ArrayList<>();
    List<Integer> postList = new ArrayList<>();

    class TraversalHelper {
        void traverse(Node node) {
            preList.add(node.val);
            for (Node child : node.children) {
                traverse(child);
            }
            postList.add(node.val);
        }
    }

    TraversalHelper helper = new TraversalHelper();
    helper.traverse(root);

    int n = preList.size();
    int[][] result = new int[2][n];
    for (int i = 0; i < n; i = i + 1) {
        result[0][i] = preList.get(i);
        result[1][i] = postList.get(i);
    }

    return result;
}
```
