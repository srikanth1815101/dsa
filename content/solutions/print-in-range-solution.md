---
title: "Print in Range - Solution"
problemUrl: "/problems/print-in-range/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find all nodes within a range `[low, high]` in sorted order, utilize a pruned inorder traversal:
1. Because a standard inorder traversal of a BST visits keys in strictly increasing order, performing inorder traversal produces the result in naturally sorted sequence.
2. We can prune search paths using the BST property:
   - Only visit the left subtree if `low < node.val`, because if `node.val <= low`, no node in the left subtree can be within `[low, high]`.
   - If `node.val >= low` and `node.val <= high`, add `node.val` to the result collection.
   - Only visit the right subtree if `high > node.val`, because if `node.val >= high`, no node in the right subtree can be within `[low, high]`.
3. This pruning ensures we only explore subtrees containing candidate keys, running in $O(k + h)$ time where $k$ is the number of matching elements.

### Step-by-Step Algorithm:
1. Reconstruct the BST from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length == 0` or `arr[0] == -1`, return an empty array `new int[0]`.
3. Initialize an empty list of integers `resultList`.
4. Define a recursive helper function `collectRange(Node node, int low, int high, List<Integer> list)`:
   - If `node == null`, return.
   - If `low < node.val`, call `collectRange(node.left, low, high, list)`.
   - If `node.val >= low` and `node.val <= high`, add `node.val` to `list`.
   - If `high > node.val`, call `collectRange(node.right, low, high, list)`.
5. Call `collectRange(root, low, high, resultList)`.
6. Convert `resultList` into an `int[]` array and return.

## Code

```java
public static int[] solve(int[] arr, int low, int high) {
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

    class RangeCollector {
        void collect(Node node, int lowBound, int highBound, List<Integer> list) {
            if (node == null) {
                return;
            }
            if (lowBound < node.val) {
                collect(node.left, lowBound, highBound, list);
            }
            if (node.val >= lowBound && node.val <= highBound) {
                list.add(node.val);
            }
            if (highBound > node.val) {
                collect(node.right, lowBound, highBound, list);
            }
        }
    }

    List<Integer> resultList = new ArrayList<>();
    RangeCollector collector = new RangeCollector();
    collector.collect(root, low, high, resultList);

    int[] result = new int[resultList.size()];
    for (int i = 0; i < resultList.size(); i = i + 1) {
        result[i] = resultList.get(i);
    }

    return result;
}
```
