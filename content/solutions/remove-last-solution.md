---
title: "Remove Last - Solution"
problemUrl: "/problems/remove-last/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To remove the last element of a singly linked list:
1. If the list is empty or contains only one node, the resulting list is empty, so we return an empty array.
2. Otherwise, we traverse the list to find the second-to-last node (the node whose `next.next == null`).
3. We set `secondLast.next = null` to disconnect the tail node.
4. Finally, we traverse from `head` and populate an integer array of size `arr.length - 1`.

### Step-by-Step Algorithm:
1. If `arr.length <= 1`, return an empty integer array.
2. Construct the singly linked list from `arr`.
3. Traverse using pointer `curr` until `curr.next.next == null`.
4. Set `curr.next = null`.
5. Initialize an array of size `arr.length - 1`.
6. Traverse from `head` and populate the array sequentially.
7. Return the array.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return new int[0];
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

    Node curr = head;
    while (curr.next.next != null) {
        curr = curr.next;
    }
    curr.next = null;

    int[] result = new int[arr.length - 1];
    Node temp = head;
    int idx = 0;
    while (temp != null) {
        result[idx] = temp.data;
        idx = idx + 1;
        temp = temp.next;
    }

    return result;
}
```
