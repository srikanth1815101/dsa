---
title: "Sliding Window Maximum - Solution"
problemUrl: "/problems/sliding-window-maximum/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the maximum in every sliding window of size `k` in $O(n)$ time, we use a monotonic double-ended queue (deque) that stores array indices.

The deque maintains indices such that their corresponding values in `nums` are in strictly decreasing order. For each index `i`:
1. If the index at the front of the deque is out of the bounds of the current window (i.e. `< i - k + 1`), we remove it from the front.
2. While the deque is non-empty and the value at the index at the rear of the deque is less than or equal to `nums[i]`, we remove it from the rear because `nums[i]` is both newer and larger.
3. We add `i` to the rear of the deque.
4. Once `i >= k - 1`, the maximum for the current window is at the front of the deque, so we record `nums[deque.peekFirst()]`.

Since every element is added and removed from the deque at most once, the total time complexity is $O(n)$.

### Step-by-Step Algorithm:
1. If `nums.length == 0` or `k <= 0`, return an empty array.
2. Initialize an integer array `result` of size `nums.length - k + 1`.
3. Initialize an `ArrayDeque<Integer>` to store indices.
4. For each index `i` from `0` to `nums.length - 1`:
   - While `!deque.isEmpty()` and `deque.peekFirst() < i - k + 1`, remove the first element.
   - While `!deque.isEmpty()` and `nums[deque.peekLast()] <= nums[i]`, remove the last element.
   - Add `i` to the end of the deque.
   - If `i >= k - 1`, assign `result[i - k + 1] = nums[deque.peekFirst()]`.
5. Return `result`.

## Code

```java
public static int[] solve(int[] nums, int k) {
    if (nums == null || nums.length == 0 || k <= 0) {
        return new int[0];
    }
    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> deque = new ArrayDeque<>();
    for (int i = 0; i < n; i = i + 1) {
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {
            deque.pollLast();
        }
        deque.offerLast(i);
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    return result;
}
```
