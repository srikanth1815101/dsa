---
title: "Get Value - Solution"
problemUrl: "/problems/get-value/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To retrieve the value stored at 0-based index `idx` in a singly linked list:
1. Verify that `idx` is within the valid range `[0, arr.length - 1]`. If not, return `-1`.
2. Construct the singly linked list from `arr`.
3. Traverse the list from `head` using a pointer `curr` for exactly `idx` steps.
4. Return `curr.data`.

### Step-by-Step Algorithm:
1. Check if `idx < 0` or `idx >= arr.length`; if so, return `-1`.
2. Construct the singly linked list from `arr`.
3. Initialize `curr = head`.
4. Loop `i` from `0` up to `idx - 1`:
   - Advance `curr = curr.next`.
5. Return `curr.data`.

## Code

```java
public static int solve(int[] arr, int idx) {
    if (arr == null || idx < 0 || idx >= arr.length) {
        return -1;
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
    for (int i = 0; i < idx; i = i + 1) {
        curr = curr.next;
    }

    return curr.data;
}
```
