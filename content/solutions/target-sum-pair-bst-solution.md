---
title: "Target Sum Pair (BST) - Solution"
problemUrl: "/problems/target-sum-pair-bst/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine whether two distinct nodes in a BST sum to `target`:
1. An inorder traversal of a Binary Search Tree (BST) visits nodes in strictly ascending sorted order.
2. Collecting all values into an ordered list transforms the problem into the classic Two-Sum on a sorted array:
   - Place two pointers: `left = 0` at the beginning and `right = list.size() - 1` at the end.
   - If `list.get(left) + list.get(right) == target`, a valid pair is found; return `true`.
   - If the sum is strictly less than `target`, increment `left = left + 1` to increase the pair sum.
   - If the sum is strictly greater than `target`, decrement `right = right - 1` to decrease the pair sum.
3. If `left >= right`, no two distinct elements can sum to `target`; return `false`.

### Step-by-Step Algorithm:
1. Reconstruct the BST from the pre-order serialized array using the state-stack parsing technique.
2. If `arr.length <= 1` or `arr[0] == -1`, return `false`.
3. Initialize an empty list of integers `sortedList`.
4. Perform an inorder traversal (left, root, right) and append each node value to `sortedList`.
5. Initialize two pointers: `int left = 0` and `int right = sortedList.size() - 1`.
6. While `left < right`:
   - Compute `int currentSum = sortedList.get(left) + sortedList.get(right)`.
   - If `currentSum == target`, return `true`.
   - If `currentSum < target`, increment `left = left + 1`.
   - If `currentSum > target`, decrement `right = right - 1`.
7. Return `false`.

## Code

```java
public static boolean solve(int[] arr, int target) {
    if (arr.length <= 1 || arr[0] == -1) {
        return false;
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

    class InorderCollector {
        void inorder(Node node, List<Integer> list) {
            if (node == null) {
                return;
            }
            inorder(node.left, list);
            list.add(node.val);
            inorder(node.right, list);
        }
    }

    List<Integer> sortedList = new ArrayList<>();
    InorderCollector collector = new InorderCollector();
    collector.inorder(root, sortedList);

    int left = 0;
    int right = sortedList.size() - 1;

    while (left < right) {
        int currentSum = sortedList.get(left) + sortedList.get(right);
        if (currentSum == target) {
            return true;
        }
        if (currentSum < target) {
            left = left + 1;
        } else {
            right = right - 1;
        }
    }

    return false;
}
```
