---
title: "Minimum Size Subarray Sum - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/minimum-size-subarray-sum/"
weight: 80
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the minimum length of a contiguous subarray of positive integers whose sum is at least `target`.

Because all elements in `nums` are strictly positive ($nums[i] \ge 1$), adding an element to the right strictly increases the window sum, and removing an element from the left strictly decreases the window sum. This monotonic property enables a **Two-Pointer Sliding Window**:
1. Maintain two pointers `left` and `right`, both starting at `0`, along with a running sum `sum = 0` and the minimum length found so far `minLen = Integer.MAX_VALUE`.
2. Expand the window by advancing `right` and adding `nums[right]` to `sum`.
3. Whenever `sum >= target`:
   - A valid subarray is found with length `right - left + 1`.
   - Update `minLen = Math.min(minLen, right - left + 1)`.
   - Contract the window from the left by subtracting `nums[left]` and incrementing `left`.
   - Repeat this contraction until `sum < target`.
4. After examining the entire array, if `minLen` was never updated (meaning the total array sum is less than `target`), return `0`. Otherwise, return `minLen`.

### Step-by-Step Algorithm:
1. Check base conditions: if `nums == null || nums.length == 0 || target <= 0`, return `0`.
2. Initialize `minLen = Integer.MAX_VALUE`, `sum = 0`, and `left = 0`.
3. Iterate `right` from `0` to `nums.length - 1`:
   - Add `nums[right]` to `sum`.
   - While `sum >= target`:
     - Let `currentLen = right - left + 1`.
     - If `currentLen < minLen`, update `minLen = currentLen`.
     - Subtract `nums[left]` from `sum`.
     - Increment `left = left + 1`.
4. If `minLen == Integer.MAX_VALUE`, return `0`.
5. Return `minLen`.

## Code

```java
public static int solve(int target, int[] nums) {
    if (nums == null || nums.length == 0 || target <= 0) {
        return 0;
    }

    int minLen = Integer.MAX_VALUE;
    int sum = 0;
    int left = 0;

    for (int right = 0; right < nums.length; right = right + 1) {
        sum = sum + nums[right];

        while (sum >= target) {
            int currentLen = right - left + 1;
            if (currentLen < minLen) {
                minLen = currentLen;
            }
            sum = sum - nums[left];
            left = left + 1;
        }
    }

    if (minLen == Integer.MAX_VALUE) {
        return 0;
    }

    return minLen;
}
```
