---
date: 2026-10-01T01:08:00+05:30

title: "Next Permutation - Solution"
problemUrl: "/problems/next-permutation/"
weight: 8
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the immediate lexicographical successor of an array, we must make the smallest possible increase in value starting from the rightmost digits:

1. **Find the pivot**: Scan from right to left to locate the first index `i` where `nums[i] < nums[i + 1]`. The suffix `nums[i + 1..n - 1]` is in descending order and cannot form a larger permutation on its own.
2. **Find the successor**: If such an index `i` exists, scan from the end towards the left to find the first element `nums[j]` that is strictly greater than `nums[i]`. Swap `nums[i]` with `nums[j]`.
3. **Reverse the suffix**: Because the suffix `nums[i + 1..n - 1]` was in descending order, swapping leaves it still in descending order. Reversing this suffix transforms it into ascending order, yielding the minimum possible suffix value.
4. If no such `i` exists (the entire array is non-increasing), reverse the entire array to produce the smallest ascending arrangement.

This in-place transformation operates in `O(n)` time and `O(1)` additional memory.

### Step-by-Step Algorithm:
1. Scan from right to left: set `i = nums.length - 2` and decrement `i` while `i >= 0` and `nums[i] >= nums[i + 1]`.
2. If `i >= 0`:
   - Find the element to swap: set `j = nums.length - 1` and decrement `j` while `nums[j] <= nums[i]`.
   - Swap `nums[i]` and `nums[j]`.
3. Reverse the subarray from index `i + 1` to `nums.length - 1`.
4. Return `nums`.

## Code

```java
public static int[] solve(int[] nums) {
    int i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i = i - 1;
    }

    if (i >= 0) {
        int j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j = j - 1;
        }
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    int left = i + 1;
    int right = nums.length - 1;
    while (left < right) {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left = left + 1;
        right = right - 1;
    }

    return nums;
}
```
