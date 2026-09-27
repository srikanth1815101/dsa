---
title: "Longest Increasing Subsequence - Solution"
problemUrl: "/problems/longest-increasing-subsequence/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the length of the longest strictly increasing subsequence in an integer array `nums`.

Using dynamic programming:
1. Define `dp[i]` as the length of the longest strictly increasing subsequence ending at index `i`.
2. For each element `nums[i]`, iterate over all preceding indices `j < i`. If `nums[j] < nums[i]`, then `nums[i]` can extend the subsequence ending at `j`, meaning `dp[i] = Math.max(dp[i], dp[j] + 1)`.
3. The overall answer is the maximum value found across all `dp[i]`.

This achieves $O(n^2)$ time complexity and $O(n)$ space complexity.

### Step-by-Step Algorithm:
1. If `nums == null || nums.length == 0`, return `0`.
2. Let `int n = nums.length`, initialize `int[] dp = new int[n]`, and set `overallMax = 1`.
3. Loop `i` from `0` to `n - 1`:
   - Initialize `dp[i] = 1`.
   - Loop `j` from `0` to `i - 1`:
     - If `nums[j] < nums[i]` and `dp[j] + 1 > dp[i]`, update `dp[i] = dp[j] + 1`.
   - If `dp[i] > overallMax`, update `overallMax = dp[i]`.
4. Return `overallMax`.

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    int n = nums.length;
    int[] dp = new int[n];
    int overallMax = 1;

    for (int i = 0; i < n; i = i + 1) {
        dp[i] = 1;
        for (int j = 0; j < i; j = j + 1) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                }
            }
        }
        if (dp[i] > overallMax) {
            overallMax = dp[i];
        }
    }

    return overallMax;
}
```
