---
title: "Reverse Data Iterative - Solution"
problemUrl: "/problems/reverse-data-iterative/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In the iterative data-reversal algorithm for singly linked lists:
1. Two pointer indices are initialized: `left = 0` and `right = arr.length - 1`.
2. While `left < right`:
   - Retrieve the node at index `left` using a linear traversal helper `getNodeAt(left)`.
   - Retrieve the node at index `right` using `getNodeAt(right)`.
   - Swap the `data` values of the two nodes.
   - Increment `left = left + 1` and decrement `right = right - 1`.
3. The linked list structure and next pointers remain entirely unchanged, while the node data is reversed.
4. Traverse the list from `head` and populate an integer array of size `arr.length`.

### Step-by-Step Algorithm:
1. If `arr.length <= 1`, return `arr`.
2. Construct the singly linked list from `arr`.
3. Implement `getNodeAt(Node head, int idx)` that traverses `idx` steps from `head` and returns that node.
4. Set `left = 0` and `right = arr.length - 1`.
5. While `left < right`:
   - `Node nodeL = getNodeAt(head, left)`.
   - `Node nodeR = getNodeAt(head, right)`.
   - Swap `nodeL.data` and `nodeR.data`.
   - Set `left = left + 1`.
   - Set `right = right - 1`.
6. Traverse from `head` and copy the data values into an integer array.
7. Return the array.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr == null ? new int[0] : arr;
    }

    class Node {
        int data;
        Node next;
        Node(int d) {
            this.data = d;
        }
    }

    Node head = null;
    Node tail = null;
    for (int i = 0; i < arr.length; i = i + 1) {
        Node node = new Node(arr[i]);
        if (head == null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }

    int left = 0;
    int right = arr.length - 1;
    while (left < right) {
        Node nodeL = head;
        for (int i = 0; i < left; i = i + 1) {
            nodeL = nodeL.next;
        }

        Node nodeR = head;
        for (int i = 0; i < right; i = i + 1) {
            nodeR = nodeR.next;
        }

        int temp = nodeL.data;
        nodeL.data = nodeR.data;
        nodeR.data = temp;

        left = left + 1;
        right = right - 1;
    }

    int[] result = new int[arr.length];
    Node curr = head;
    int idx = 0;
    while (curr != null) {
        result[idx] = curr.data;
        idx = idx + 1;
        curr = curr.next;
    }

    return result;
}
```
