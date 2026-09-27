---
title: "Diameter of Generic Tree - Solution"
problemUrl: "/problems/diameter-of-generic-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The diameter of a generic tree is the length of the longest simple path between any two nodes:
1. The longest path between two nodes in a subtree either passes through the current node or lies entirely within one of its children's subtrees.
2. For any node, the longest path passing through it is formed by connecting its two deepest child subtrees:
   - Let `h1` be the greatest height among its children.
   - Let `h2` be the second greatest height among its children.
   - The path length through this node is `h1 + h2 + 2`.
3. We update a global `maxDiameter` variable at every node during a post-order height calculation traversal.

### Step-by-Step Algorithm:
1. Parse the tree. If `root == null || root.children.size() == 0`, return 0.
2. Initialize `maxDiameter = 0`.
3. Define recursive function `calculateHeight(Node node) -> int`:
   - Initialize `deepest = -1` and `secondDeepest = -1`.
   - For each `child` in `node.children`:
     - `ch = calculateHeight(child)`.
     - If `ch > deepest`: `secondDeepest = deepest; deepest = ch;`.
     - Else if `ch > secondDeepest`: `secondDeepest = ch;`.
   - If `deepest != -1 && secondDeepest != -1`:
     - `candidate = deepest + secondDeepest + 2`.
     - If `candidate > maxDiameter`: `maxDiameter = candidate`.
   - Else if `deepest != -1`:
     - `candidate = deepest + 1`.
     - If `candidate > maxDiameter`: `maxDiameter = candidate`.
   - Return `deepest + 1`.
4. Call `calculateHeight(root)` and return `maxDiameter`.

## Code

```java
public static int solve(int[] arr) {
    if (arr.length <= 1) {
        return 0;
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

    if (root == null || root.children.size() == 0) {
        return 0;
    }

    class DiameterCalculator {
        int maxDiameter = 0;

        int compute(Node node) {
            int d1 = -1;
            int d2 = -1;

            for (Node child : node.children) {
                int ch = compute(child);
                if (ch > d1) {
                    d2 = d1;
                    d1 = ch;
                } else if (ch > d2) {
                    d2 = ch;
                }
            }

            int candidate = 0;
            if (d1 != -1 && d2 != -1) {
                candidate = d1 + d2 + 2;
            } else if (d1 != -1) {
                candidate = d1 + 1;
            }

            if (candidate > maxDiameter) {
                maxDiameter = candidate;
            }

            return d1 + 1;
        }
    }

    DiameterCalculator calc = new DiameterCalculator();
    calc.compute(root);
    return calc.maxDiameter;
}
```
