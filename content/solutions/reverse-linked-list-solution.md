---
title: "Reverse Linked List - Solution"
problemUrl: "/problems/reverse-linked-list/"
---

## Explanation

We iterate through the list and reverse the direction of each pointer. We need three pointers:
- `prev`: The previous node (starts as null)
- `curr`: The current node being processed
- `next`: Temporary storage for the next node

At each step:
1. Save the next node
2. Reverse the current node's pointer to point to prev
3. Move prev and curr one step forward

## Code

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
```
