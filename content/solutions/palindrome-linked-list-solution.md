---
title: "Palindrome Linked List - Solution"
problemUrl: "/problems/palindrome-linked-list/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if a linked list is a palindrome in $O(n)$ time and $O(1)$ space:
1. Find the end of the first half using slow and fast pointers.
2. Reverse the second half of the linked list in place.
3. Compare the values of the first half and the reversed second half node by node.
4. If all corresponding node values match, the list is a palindrome.

### Step-by-Step Algorithm:
1. If `arr.length <= 1`, return `true`.
2. Construct the singly linked list from `arr`.
3. Locate the middle using `slow` and `fast` pointers.
4. Reverse the sublist starting from `slow.next`.
5. Maintain two pointers: `p1 = head` and `p2 = reversedHead`.
6. Traverse while `p2 != null`:
   - If `p1.val != p2.val`, return `false`.
   - Advance `p1 = p1.next` and `p2 = p2.next`.
7. Return `true`.

## Code

```java
public static boolean solve(int[] arr) {
    if (arr.length <= 1) {
        return true;
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

    Node prev = null;
    Node current = slow.next;
    while (current != null) {
        Node nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    Node firstHalf = head;
    Node secondHalf = prev;
    while (secondHalf != null) {
        if (firstHalf.val != secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}
```
