---
title: "Path to Leaf - Solution"
problemUrl: "/problems/path-to-leaf/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find all root-to-leaf paths whose path sum lies within `[low, high]`, perform a depth-first traversal from the root down to each leaf:
1. Reconstruct the binary tree from the pre-order serialized array.
2. Carry along two parameters during traversal: the running path string formatted with visited node values, and the running arithmetic sum.
3. Upon reaching a leaf node (a node where both `left == null` and `right == null`), compute the final sum including the leaf node's value. If this sum satisfies `low <= totalSum <= high`, append the complete path string to the results list.
4. Continue the depth-first search down both left and right subtrees to ensure all qualifying paths are visited in left-to-right order.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty array.
3. Initialize an empty list of strings `resultList`.
4. Define a recursive helper function `findPaths(Node node, String path, int sum, int low, int high, List<String> list)`:
   - If `node == null`, return.
   - If `node.left == null` and `node.right == null`:
     - Calculate `int totalSum = sum + node.val`.
     - If `totalSum >= low` and `totalSum <= high`, add `path + node.val` to `list`.
     - Return.
   - Recurse on `node.left` with updated path `path + node.val + " "` and updated sum `sum + node.val`.
   - Recurse on `node.right` with updated path `path + node.val + " "` and updated sum `sum + node.val`.
5. Call `findPaths(root, "", 0, low, high, resultList)`.
6. Convert `resultList` into a `String[]` array and return.

## Code

```java
public static String[] solve(int[] arr, int low, int high) {
    if (arr.length == 0 || arr[0] == -1) {
        return new String[0];
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

    class Helper {
        void findPaths(Node node, String path, int sum, int lowBound, int highBound, List<String> list) {
            if (node == null) {
                return;
            }
            if (node.left == null && node.right == null) {
                int totalSum = sum + node.val;
                if (totalSum >= lowBound && totalSum <= highBound) {
                    list.add(path + node.val);
                }
                return;
            }
            findPaths(node.left, path + node.val + " ", sum + node.val, lowBound, highBound, list);
            findPaths(node.right, path + node.val + " ", sum + node.val, lowBound, highBound, list);
        }
    }

    List<String> resultList = new ArrayList<>();
    Helper helper = new Helper();
    helper.findPaths(root, "", 0, low, high, resultList);

    String[] result = new String[resultList.size()];
    for (int i = 0; i < resultList.size(); i = i + 1) {
        result[i] = resultList.get(i);
    }

    return result;
}
```
