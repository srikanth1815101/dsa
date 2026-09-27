---
title: "Remove First - Solution"
problemUrl: "/problems/remove-first/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Removing the first element of a singly linked list is an $O(1)$ constant time operation:
1. If the list is empty (`head == null`), no removal is possible, so an empty array is returned.
2. If `head.next == null` (single node), removing it leaves an empty list.
3. Otherwise, advancing `head = head.next` disconnects the old head node from the list.
4. Finally, traverse from the updated `head` and populate an integer array of size `arr.length - 1`.

### Step-by-Step Algorithm:
1. If `arr.length <= 1`, return an empty integer array.
2. Construct the singly linked list from `arr`.
3. Advance `head = head.next`.
4. Initialize an array of size `arr.length - 1`.
5. Traverse from `head` and populate the array elements sequentially.
6. Return the array.

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

    head = head.next;

    int[] result = new int[arr.length - 1];
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
