---
title: "Size Sum Max Height - Solution"
problemUrl: "/problems/size-sum-max-height/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

All four core metrics can be computed together in a single recursive depth-first traversal:
1. `size`: $1 + \sum \text{child.size}$
2. `sum`: $\text{node.val} + \sum \text{child.sum}$
3. `max`: $\max(\text{node.val}, \max_{\text{children}}(\text{child.max}))$
4. `height`: $1 + \max_{\text{children}}(\text{child.height})$, with leaf child height initialized to $-1$.

### Step-by-Step Algorithm:
1. Parse the tree. If `root == null`, return `new int[]{0, 0, 0, -1}`.
2. Define a helper returning an array of 4 integers `[size, sum, max, height]`:
   - Initialize `size = 1`, `sum = node.val`, `max = node.val`, and `maxChildH = -1`.
   - For each child in `node.children`:
     - `childMetrics = evaluate(child)`.
     - `size = size + childMetrics[0]`.
     - `sum = sum + childMetrics[1]`.
     - If `childMetrics[2] > max`, update `max = childMetrics[2]`.
     - If `childMetrics[3] > maxChildH`, update `maxChildH = childMetrics[3]`.
   - Return `new int[]{size, sum, max, maxChildH + 1}`.
3. Call `evaluate(root)` and return the result.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr.length == 0) {
        return new int[]{0, 0, 0, -1};
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
        return new int[]{0, 0, 0, -1};
    }

    class MetricsHelper {
        int[] compute(Node node) {
            int sz = 1;
            int sm = node.val;
            int mx = node.val;
            int maxChildH = -1;

            for (Node child : node.children) {
                int[] cm = compute(child);
                sz = sz + cm[0];
                sm = sm + cm[1];
                if (cm[2] > mx) {
                    mx = cm[2];
                }
                if (cm[3] > maxChildH) {
                    maxChildH = cm[3];
                }
            }

            return new int[]{sz, sm, mx, maxChildH + 1};
        }
    }

    MetricsHelper helper = new MetricsHelper();
    return helper.compute(root);
}
```
