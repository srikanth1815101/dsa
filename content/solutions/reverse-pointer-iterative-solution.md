---
title: "Reverse Pointer Iterative - Solution"
problemUrl: "/problems/reverse-pointer-iterative/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Reversing a singly linked list iteratively by manipulating pointers runs in optimal $O(n)$ time and $O(1)$ auxiliary space:
1. Initialize `prev = null` and `curr = head`.
2. While `curr != null`:
   - Store the next node in a temporary reference: `next = curr.next`.
   - Reverse the current node's pointer: `curr.next = prev`.
   - Move `prev` forward: `prev = curr`.
   - Move `curr` forward: `curr = next`.
3. When `curr` becomes `null`, `prev` points to the new head of the reversed list.
4. Traverse from `prev` to populate and return an array of size `arr.length`.

### Step-by-Step Algorithm:
1. If `arr.length <= 1`, return `arr`.
2. Construct the singly linked list from `arr`.
3. Set `Node prev = null` and `Node curr = head`.
4. While `curr != null`:
   - `Node next = curr.next`.
   - `curr.next = prev`.
   - `prev = curr`.
   - `curr = next`.
5. Update `head = prev`.
6. Traverse from `head` and copy values into an array of size `arr.length`.
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

    Node prev = null;
    Node curr = head;
    while (curr != null) {
        Node next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;

    int[] result = new int[arr.length];
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
