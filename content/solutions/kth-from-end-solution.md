---
title: "Kth from End - Solution"
problemUrl: "/problems/kth-from-end/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To locate the `k`-th node from the end (where `k = 0` is the tail) in a single pass without knowing the list size:
1. Initialize two pointers, `slow` and `fast`, both starting at `head`.
2. Advance `fast` forward by `k` steps. At this stage, the gap between `slow` and `fast` is exactly `k` nodes.
3. Advance both `slow` and `fast` simultaneously one step at a time until `fast.next == null`.
4. When `fast` reaches the tail node, `slow` is located exactly `k` nodes behind `fast`, which corresponds directly to the `k`-th node from the end.
5. Return `slow.data`.

### Step-by-Step Algorithm:
1. Construct the singly linked list from `arr`.
2. Initialize `slow = head` and `fast = head`.
3. Loop `i` from `0` to `k - 1`:
   - `fast = fast.next`.
4. While `fast.next != null`:
   - `slow = slow.next`.
   - `fast = fast.next`.
5. Return `slow.data`.

## Code

```java
public static int solve(int[] arr, int k) {
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
    for (int i = 0; i < k; i = i + 1) {
        fast = fast.next;
    }

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow.data;
}
```
