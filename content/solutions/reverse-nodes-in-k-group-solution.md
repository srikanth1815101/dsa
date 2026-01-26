---
title: "Reverse Nodes in k-Group - Solution"
problemUrl: "/problems/reverse-nodes-in-k-group/"
---

## Explanation

We solve this recursively:
1. First, count if there are at least k nodes
2. If yes, reverse the first k nodes
3. Recursively process the rest and connect

**Reversal within group:** We reverse k nodes in place, then the last node of the reversed group points to the result of recursively processing the rest.

## Code

```java
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        // Count if we have k nodes
        ListNode curr = head;
        int count = 0;
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }
        
        // If less than k nodes, return as is
        if (count < k) return head;
        
        // Reverse k nodes
        ListNode prev = reverseKGroup(curr, k);  // Recurse first
        while (count-- > 0) {
            ListNode next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        
        return prev;
    }
}
```
