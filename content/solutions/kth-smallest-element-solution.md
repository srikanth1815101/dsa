---
title: "Kth Smallest Element - Solution"
problemUrl: "/problems/kth-smallest-element/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the $k^{\text{th}}$ smallest element in $O(n \log k)$ time without full array sorting, we use a **Max-Heap (Priority Queue)** of fixed capacity $k$:

1. **Max-Heap Invariant**:
   - In a max-heap (`Collections.reverseOrder()`), the largest element among its members is always positioned at the root (`peek()`).
   - If we maintain a max-heap holding the $k$ smallest elements encountered so far, the root of the heap is the maximum of those $k$ values — which is precisely the $k^{\text{th}}$ smallest element overall.

2. **Algorithm Execution**:
   - Initialize an empty max-heap `maxHeap`.
   - Process each element in `nums`:
     - Add `nums[i]` to `maxHeap`.
     - Whenever the size of `maxHeap` exceeds $k$, remove the root (`maxHeap.poll()`). This operation discards the largest element from the current top-$k$ smallest collection.
   - Once all elements have been processed, the heap retains the $k$ smallest elements. Return `maxHeap.peek()`.

### Complexity Analysis
- **Time Complexity**: $O(n \log k)$, since inserting into or polling from a heap of size at most $k+1$ takes $O(\log k)$ time across $n$ elements.
- **Space Complexity**: $O(k)$, required to maintain up to $k+1$ elements in the priority queue.

---

## Code

```java
public static int solve(int[] nums, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

    for (int i = 0; i < nums.length; i++) {
        maxHeap.offer(nums[i]);

        if (maxHeap.size() > k) {
            maxHeap.poll();
        }
    }

    return maxHeap.peek();
}
```
