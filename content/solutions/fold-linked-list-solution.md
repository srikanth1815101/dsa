---
title: "Fold Linked List - Solution"
problemUrl: "/problems/fold-linked-list/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To fold a linked list (reorder by interleaving nodes from both ends):
1. Find the middle node of the list using slow and fast pointers.
2. Disconnect and reverse the second half of the list.
3. Merge the two lists together by alternating nodes from the first half and the reversed second half.

### Step-by-Step Algorithm:
1. If `arr.length <= 2`, return `arr` directly.
2. Build the linked list from `arr`.
3. Locate the middle using `slow` and `fast` pointers (`fast.next != null && fast.next.next != null`).
4. Disconnect the second half: `second = slow.next; slow.next = null;`.
5. Reverse `second` using iterative pointer reversal to obtain `reversedSecond`.
6. Interleave nodes from `head` and `reversedSecond`:
   - Keep temporary pointers to `first.next` and `second.next`.
   - Set `first.next = second`.
   - Set `second.next = tempFirst`.
   - Advance `first = tempFirst` and `second = tempSecond`.
7. Traverse the folded list and copy values into a result array.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr.length <= 2) {
        return arr;
    }

    class Node {
        int val;
        Node next;
        Node(int val) {
            this.val = val;
        }
    }

    Node head = new Node(arr[0]);
    Node curr = head;
    for (int i = 1; i < arr.length; i = i + 1) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }

    Node slow = head;
    Node fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    Node second = slow.next;
    slow.next = null;

    Node prev = null;
    Node current = second;
    while (current != null) {
        Node nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    Node first = head;
    second = prev;
    while (second != null) {
        Node temp1 = first.next;
        Node temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }

    int[] result = new int[arr.length];
    curr = head;
    int idx = 0;
    while (curr != null) {
        result[idx] = curr.val;
        idx = idx + 1;
        curr = curr.next;
    }

    return result;
}
```
