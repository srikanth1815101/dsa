---
title: "LIS (Binary Search) - Solution"
problemUrl: "/problems/lis-binary-search/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Longest Increasing Subsequence problem can be solved in optimal $O(n \log n)$ time using patience sorting with binary search.

1. Maintain an array `tails` where `tails[i]` stores the smallest tail value of all increasing subsequences of length `i + 1` discovered so far.
2. For each element `x` in `nums`, find its insertion position `left` in the current sorted prefix `tails[0...len - 1]` via binary search.
3. If `tails[mid] < x`, search the right half; otherwise, search the left half.
4. Overwrite `tails[left] = x`.
5. If `left == len`, `x` extends the longest subsequence found, so increment `len = len + 1`.
6. At the end of the array, `len` is the exact length of the longest increasing subsequence.

### Step-by-Step Algorithm:
1. If `nums == null || nums.length == 0`, return `0`.
2. Initialize array `int[] tails = new int[nums.length]` and integer `len = 0`.
3. Loop `i` from `0` to `nums.length - 1`:
   - Set `x = nums[i]`, `left = 0`, and `right = len`.
   - While `left < right`:
     - Let `mid = left + (right - left) / 2`.
     - If `tails[mid] < x`, set `left = mid + 1`; else set `right = mid`.
   - Set `tails[left] = x`.
   - If `left == len`, increment `len = len + 1`.
4. Return `len`.

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    int[] tails = new int[nums.length];
    int len = 0;

    for (int i = 0; i < nums.length; i = i + 1) {
        int x = nums[i];
        int left = 0;
        int right = len;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (tails[mid] < x) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = x;
        if (left == len) {
            len = len + 1;
        }
    }

    return len;
}
```
