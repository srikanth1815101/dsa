---
title: "Solution: Reverse Linked List"
date: 2024-01-02
problemUrl: "/problems/reverse-linked-list/"
---

## Approach

Use the iterative method with three pointers: `prev`, `curr`, and `next`.
1. Save `next = curr.next`.
2. Reverse link `curr.next = prev`.
3. Move `prev = curr`.
4. Move `curr = next`.

### Complexity

- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

## Code

```java
public class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }
}
```
