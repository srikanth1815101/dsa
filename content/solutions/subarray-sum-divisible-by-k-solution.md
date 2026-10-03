---
title: "Subarray Sum Divisible by K - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/subarray-sum-divisible-by-k/"
weight: 84
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The sum of a subarray `nums[i ... j]` is given by `prefix[j] - prefix[i - 1]`. For this sum to be divisible by `k`:
$$(\text{prefix}[j] - \text{prefix}[i - 1]) \pmod k = 0 \iff \text{prefix}[j] \pmod k = \text{prefix}[i - 1] \pmod k$$

Thus, any two prefix sums sharing the same remainder modulo `k` delineate a subarray whose sum is a multiple of `k`.

1. Maintain a running prefix sum `sum`.
2. Compute the normalized remainder: `rem = (sum % k + k) % k`. Normalization is necessary because Java's `%` operator preserves the sign of negative numbers.
3. Use a frequency table `count` of size `k` to track how many times each remainder has appeared so far.
4. Initialize `count[0] = 1` to account for valid subarrays that start at index `0`.
5. For each element in `nums`:
   - Add `nums[i]` to `sum`.
   - Calculate the normalized remainder `rem`.
   - Add `count[rem]` to the total answer `ans`.
   - Increment `count[rem] = count[rem] + 1`.
6. Return `ans`.

### Step-by-Step Algorithm:
1. Handle edge cases: if `nums == null || nums.length == 0 || k <= 0`, return `0`.
2. Allocate an integer frequency array `count` of length `k`.
3. Set `count[0] = 1`.
4. Initialize `sum = 0` and `ans = 0`.
5. Loop through each number in `nums`:
   - `sum = sum + nums[i]`.
   - `rem = ((sum % k) + k) % k`.
   - `ans = ans + count[rem]`.
   - `count[rem] = count[rem] + 1`.
6. Return `ans`.

## Code

```java
public static int solve(int[] nums, int k) {
    if (nums == null || nums.length == 0 || k <= 0) {
        return 0;
    }

    int[] count = new int[k];
    count[0] = 1;

    int sum = 0;
    int ans = 0;

    for (int i = 0; i < nums.length; i = i + 1) {
        sum = sum + nums[i];
        int rem = ((sum % k) + k) % k;
        ans = ans + count[rem];
        count[rem] = count[rem] + 1;
    }

    return ans;
}
```
