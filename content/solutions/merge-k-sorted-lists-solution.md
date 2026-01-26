---
title: "Merge k Sorted Lists - Solution"
problemUrl: "/problems/merge-k-sorted-lists/"
---

## Explanation

The most efficient approach uses a **min-heap (priority queue)**. We always extract the smallest element from the heads of all k lists.

**Algorithm:**
1. Add the head of each non-empty list to a min-heap
2. Extract the minimum node and add it to the result
3. If the extracted node has a next node, add it to the heap
4. Repeat until the heap is empty

The heap size is at most k, so each extraction/insertion is O(log k). With n total nodes, complexity is O(n log k).

## Code

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
        
        for (ListNode node : lists) {
            if (node != null) pq.offer(node);
        }
        
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            curr.next = node;
            curr = curr.next;
            if (node.next != null) {
                pq.offer(node.next);
            }
        }
        
        return dummy.next;
    }
}
```
