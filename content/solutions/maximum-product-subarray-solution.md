---
date: 2026-10-01T01:04:00+05:30

title: "Maximum Product Subarray - Solution"
problemUrl: "/problems/maximum-product-subarray/"
weight: 4
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Unlike maximum sum subarray where adding a negative number always decreases the cumulative sum, multiplying by a negative number can turn a very small negative value into a large positive value.

Therefore, for each element `nums[i]`, we track two running values:
1. `maxProd`: the maximum contiguous product ending at index `i`.
2. `minProd`: the minimum contiguous product ending at index `i`.

When `nums[i]` is negative, multiplying flips the maximum and minimum. Hence, we swap `maxProd` and `minProd` before computing the new bounds:
- `maxProd = Math.max(nums[i], maxProd * nums[i])`
- `minProd = Math.min(nums[i], minProd * nums[i])`

A global variable tracks the highest `maxProd` encountered throughout the single linear pass, yielding `O(n)` time complexity and `O(1)` space complexity.

### Step-by-Step Algorithm:
1. Initialize `maxProd = nums[0]`, `minProd = nums[0]`, and `globalMax = nums[0]`.
2. Iterate `i` from `1` to `nums.length - 1`:
   - If `nums[i] < 0`, swap `maxProd` and `minProd`.
   - Update `maxProd = Math.max(nums[i], maxProd * nums[i])`.
   - Update `minProd = Math.min(nums[i], minProd * nums[i])`.
   - Update `globalMax = Math.max(globalMax, maxProd)`.
3. Return `globalMax`.

## Code

```java
public static int solve(int[] nums) {
    int maxProd = nums[0];
    int minProd = nums[0];
    int globalMax = nums[0];

    for (int i = 1; i < nums.length; i = i + 1) {
        if (nums[i] < 0) {
            int temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }

        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);

        globalMax = Math.max(globalMax, maxProd);
    }

    return globalMax;
}
```
