---
title: "Sliding Window Maximum - Solution"
problemUrl: "/problems/sliding-window-maximum/"
---

## Explanation

We use a **monotonic decreasing deque** to efficiently track the maximum in each window. The deque stores indices (not values) of potential maximums.

**Key properties:**
1. Elements in deque are in decreasing order of their values
2. The front of deque is always the maximum for current window
3. We remove indices outside the window from front
4. We remove smaller elements from back before adding new element

## Code

```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] result = new int[nums.length - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        
        for (int i = 0; i < nums.length; i++) {
            // Remove indices outside window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            
            // Remove smaller elements (they can never be max)
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
            
            // Record max for completed window
            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }
        
        return result;
    }
}
```
