---
title: "Linearize Tree - Solution"
problemUrl: "/problems/linearize-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To linearize a generic tree in place:
1. Recursively linearize each child subtree so that every child becomes a linear chain down to its single tail node.
2. For the current node, while it has more than one child:
   - Remove the last child `last = node.children.remove(node.children.size() - 1)`.
   - Access the previous child `secondLast = node.children.get(node.children.size() - 1)`.
   - Obtain the tail node of the `secondLast` chain.
   - Attach `last` as the only child of that tail: `secondLastTail.children.add(last)`.
3. To achieve $O(n)$ time, the recursive helper can return the tail of the linearized subtree so that finding the tail is $O(1)$ instead of $O(n)$.

### Step-by-Step Algorithm:
1. Parse the tree using a stack. If `root == null`, return an empty array.
2. Define `linearize(Node node) -> Node` returning the tail:
   - If `node.children.size() == 0`, return `node`.
   - Recursively linearize all children: obtain `lastTail = linearize(lastChild)`.
   - While `node.children.size() > 1`:
     - Remove the last child: `last = node.children.remove(node.children.size() - 1)`.
     - Get second last child: `secondLast = node.children.get(node.children.size() - 1)`.
     - Get tail of `secondLast`: `secondLastTail = linearize(secondLast)`.
     - Connect: `secondLastTail.children.add(last)`.
   - Return `lastTail`.
3. Call `linearize(root)`.
4. Traverse the single chain starting from `root` and collect values into an array.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr.length == 0) {
        return new int[0];
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
        return new int[0];
    }

    class Linearizer {
        Node linearize(Node node) {
            if (node.children.size() == 0) {
                return node;
            }

            Node lastTail = linearize(node.children.get(node.children.size() - 1));

            while (node.children.size() > 1) {
                Node last = node.children.remove(node.children.size() - 1);
                Node secondLast = node.children.get(node.children.size() - 1);
                Node secondLastTail = linearize(secondLast);
                secondLastTail.children.add(last);
            }

            return lastTail;
        }
    }

    Linearizer lin = new Linearizer();
    lin.linearize(root);

    List<Integer> list = new ArrayList<>();
    Node curr = root;
    while (curr != null) {
        list.add(curr.val);
        if (curr.children.size() > 0) {
            curr = curr.children.get(0);
        } else {
            curr = null;
        }
    }

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }

    return result;
}
```
