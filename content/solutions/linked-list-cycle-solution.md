---
title: "Linked List Cycle - Solution"
problemUrl: "/problems/linked-list-cycle/"
---

## Explanation

We use **Floyd's Cycle Detection Algorithm** (also known as the tortoise and hare algorithm). The idea is to use two pointers moving at different speeds:

- **Slow pointer** moves one step at a time
- **Fast pointer** moves two steps at a time

If there's a cycle, the fast pointer will eventually catch up to the slow pointer inside the cycle. If there's no cycle, the fast pointer will reach the end (null).

## Code

```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null) return false;
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}
```
