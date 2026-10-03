---
title: "Max Consecutive Ones III - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/max-consecutive-ones-iii/"
weight: 81
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the longest subarray containing at most `k` zeros, which corresponds to the longest segment of `1`s obtainable after flipping at most `k` `0`s.

This can be solved efficiently with a **Two-Pointer Sliding Window**:
1. Maintain two pointers `left` and `right`, both initially positioned at index `0`.
2. Keep a count of the number of zeros encountered in the current window: `zeroCount = 0`.
3. Iterate `right` across the array:
   - If `nums[right] == 0`, increment `zeroCount = zeroCount + 1`.
   - If `zeroCount > k`, the current window is invalid. Advance `left` until `zeroCount <= k`:
     - If `nums[left] == 0`, decrement `zeroCount = zeroCount - 1`.
     - Increment `left = left + 1`.
   - Update `maxLen = Math.max(maxLen, right - left + 1)`.
4. Return `maxLen`.

### Step-by-Step Algorithm:
1. Check for empty or null array: if `nums == null || nums.length == 0`, return `0`.
2. Initialize `left = 0`, `zeroCount = 0`, and `maxLen = 0`.
3. Loop `right` from `0` to `nums.length - 1`:
   - If `nums[right] == 0`, set `zeroCount = zeroCount + 1`.
   - While `zeroCount > k`:
     - If `nums[left] == 0`, set `zeroCount = zeroCount - 1`.
     - Set `left = left + 1`.
   - Compute `currentLen = right - left + 1`.
   - If `currentLen > maxLen`, set `maxLen = currentLen`.
4. Return `maxLen`.

## Code

```java
public static int solve(int[] nums, int k) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    int left = 0;
    int zeroCount = 0;
    int maxLen = 0;

    for (int right = 0; right < nums.length; right = right + 1) {
        if (nums[right] == 0) {
            zeroCount = zeroCount + 1;
        }

        while (zeroCount > k) {
            if (nums[left] == 0) {
                zeroCount = zeroCount - 1;
            }
            left = left + 1;
        }

        int currentLen = right - left + 1;
        if (currentLen > maxLen) {
            maxLen = currentLen;
        }
    }

    return maxLen;
}
```
