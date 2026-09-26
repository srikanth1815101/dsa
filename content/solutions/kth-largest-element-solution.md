---
title: "Kth Largest Element - Solution"
problemUrl: "/problems/kth-largest-element/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the $k^{\text{th}}$ largest element efficiently without sorting the entire array, we use a **Min-Heap (Priority Queue)** of fixed capacity $k$:

1. **Min-Heap Invariant**:
   - A min-heap always maintains the smallest of its contained elements at the root (`peek()`).
   - If we maintain a min-heap that contains the $k$ largest elements seen so far, the root of the heap is precisely the smallest of those $k$ elements — which is the $k^{\text{th}}$ largest element overall.

2. **Algorithm Steps**:
   - Initialize an empty min-heap `minHeap`.
   - Iterate through every number in `nums`:
     - Insert `nums[i]` into `minHeap`.
     - If the size of `minHeap` exceeds $k$, remove the root (`minHeap.poll()`). This discards the smallest element from consideration.
   - After processing all $n$ numbers, the heap retains exactly the $k$ largest elements. Return `minHeap.peek()`.

### Complexity Analysis
- **Time Complexity**: $O(n \log k)$, since each insertion and extraction operation on a heap of size at most $k+1$ takes $O(\log k)$ time.
- **Space Complexity**: $O(k)$, required to store at most $k+1$ elements in the priority queue.

---

## Code

```java
public static int solve(int[] nums, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>(k);

    for (int i = 0; i < nums.length; i++) {
        minHeap.offer(nums[i]);

        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }

    return minHeap.peek();
}
```
