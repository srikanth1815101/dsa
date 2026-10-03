---
title: "Longest Subarray with At Least K Frequency - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/longest-subarray-with-at-least-k-frequency/"
weight: 78
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the maximum length of a contiguous subarray such that every element occurring within that subarray has a frequency of at least `k`.

A direct brute force would check all $\mathcal{O}(n^2)$ subarrays, which is too slow. Instead, we use a **Divide and Conquer** strategy:
1. Consider the current window `nums[start...end]`. If the window size `end - start` is less than `k`, no valid subarray can exist within it, so return `0`.
2. Count the frequencies of all numbers in `nums[start...end]`.
3. If an element $x$ appears fewer than $k$ times in `nums[start...end]`, it can **never** be part of any valid subarray within this range.
4. Therefore, any valid subarray must lie entirely to the left or entirely to the right of occurrences of $x$.
5. We find the first element at index `mid` where `count[nums[mid]] < k`, skip any consecutive elements with counts less than $k$ up to `midNext`, and recursively search in both `[start, mid]` and `[midNext, end]`.
6. If all elements in `nums[start...end]` have frequency $\ge k$, the entire subarray is valid, and its length `end - start` is returned.

### Step-by-Step Algorithm:
1. Handle base cases: if `nums == null || nums.length < k || k <= 0`, return `0`.
2. Define a recursive helper function `helper(nums, start, end, k)`:
   - If `end - start < k`, return `0`.
   - Build a frequency map for elements in `nums[start...end]`.
   - Iterate through the elements from `start` to `end`:
     - If `count.get(nums[mid]) < k`:
       - Advance a pointer `midNext = mid + 1` past all adjacent elements with frequency $< k$.
       - Recursively compute `leftMax = helper(nums, start, mid, k)`.
       - Recursively compute `rightMax = helper(nums, midNext, end, k)`.
       - Return `Math.max(leftMax, rightMax)`.
   - If the loop finishes without finding any invalid element, return `end - start`.
3. Call `helper(nums, 0, nums.length, k)` and return the result.

## Code

```java
public static int solve(int[] nums, int k) {
    if (nums == null || nums.length < k || k <= 0) {
        return 0;
    }

    return helper(nums, 0, nums.length, k);
}

private static int helper(int[] nums, int start, int end, int k) {
    if (end - start < k) {
        return 0;
    }

    Map<Integer, Integer> counts = new HashMap<>();
    for (int i = start; i < end; i = i + 1) {
        counts.put(nums[i], counts.getOrDefault(nums[i], 0) + 1);
    }

    for (int mid = start; mid < end; mid = mid + 1) {
        if (counts.get(nums[mid]) < k) {
            int midNext = mid + 1;
            while (midNext < end && counts.get(nums[midNext]) < k) {
                midNext = midNext + 1;
            }

            int leftMax = helper(nums, start, mid, k);
            int rightMax = helper(nums, midNext, end, k);

            if (leftMax > rightMax) {
                return leftMax;
            }
            return rightMax;
        }
    }

    return end - start;
}
```
