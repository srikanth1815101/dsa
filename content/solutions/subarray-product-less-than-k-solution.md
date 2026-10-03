---
title: "Subarray Product Less Than K - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/subarray-product-less-than-k/"
weight: 79
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the count of contiguous subarrays whose product of elements is strictly less than `k`. All array elements are positive integers ($nums[i] \ge 1$).

Because all numbers are positive, extending a subarray to the right strictly non-decreases (and usually increases) the product, which allows for a **Sliding Window** approach:
1. If $k \le 1$, because all elements are positive integers ($nums[i] \ge 1$), the minimum possible product of any non-empty subarray is at least $1$. Hence, no subarray can have a product strictly less than $k$, so we immediately return `0`.
2. Maintain a running product `product = 1` and a window $[left, right]$ starting at `left = 0`.
3. Expand `right` from `0` to `nums.length - 1`, multiplying `product` by `nums[right]`.
4. While `product >= k` and `left <= right`, shrink the window from the left by dividing `product` by `nums[left]` and incrementing `left`.
5. Once `product < k`, every subarray ending at `right` and starting at any index from `left` to `right` has a product strictly less than `k`.
   - The number of such valid subarrays ending at `right` is exactly `right - left + 1`.
6. Accumulate `count = count + (right - left + 1)` across all `right` positions.

### Step-by-Step Algorithm:
1. If `k <= 1 || nums == null || nums.length == 0`, return `0`.
2. Initialize `product = 1`, `count = 0`, and `left = 0`.
3. Iterate `right` from `0` to `nums.length - 1`:
   - Multiply `product = product * nums[right]`.
   - While `product >= k && left <= right`:
     - Divide `product = product / nums[left]`.
     - Increment `left = left + 1`.
   - Add `right - left + 1` to `count`.
4. Return `count`.

## Code

```java
public static int solve(int[] nums, int k) {
    if (k <= 1 || nums == null || nums.length == 0) {
        return 0;
    }

    int product = 1;
    int count = 0;
    int left = 0;

    for (int right = 0; right < nums.length; right = right + 1) {
        product = product * nums[right];

        while (product >= k && left <= right) {
            product = product / nums[left];
            left = left + 1;
        }

        count = count + (right - left + 1);
    }

    return count;
}
```
