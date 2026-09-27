---
title: "Middle of Linked List - Solution"
problemUrl: "/problems/middle-of-linked-list/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Using the two-pointer technique (often called the tortoise and hare algorithm), we can find the middle node of a linked list in a single pass:
1. Initialize two pointers, `slow` and `fast`, both starting at `head`.
2. In each iteration, advance `slow` by one node (`slow = slow.next`) and `fast` by two nodes (`fast = fast.next.next`).
3. When `fast` reaches the end of the list (`fast == null` or `fast.next == null`), `slow` has traversed exactly half the distance, landing directly on the middle node (or second middle node for even lengths).
4. Return `slow.data`.

### Step-by-Step Algorithm:
1. Construct the singly linked list from `arr`.
2. Initialize `slow = head` and `fast = head`.
3. While `fast != null && fast.next != null`:
   - Advance `slow = slow.next`.
   - Advance `fast = fast.next.next`.
4. Return `slow.data`.

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length == 0) {
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

    Node slow = head;
    Node fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}
```
