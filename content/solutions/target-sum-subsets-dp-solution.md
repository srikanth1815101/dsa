---
title: "Target Sum Subsets (DP) - Solution"
problemUrl: "/problems/target-sum-subsets-dp/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Subset Sum problem can be solved using a 2D boolean Dynamic Programming table:

1. **State Definition**: Let `dp[i][j]` be a boolean indicating whether a subset of the first `i` elements (`arr[0 ... i - 1]`) can sum up to `j`.
2. **Base Cases**:
   - `dp[i][0] = true` for all `0 <= i <= n`, because a target sum of `0` is always possible using the empty subset.
   - `dp[0][j] = false` for all `1 <= j <= target`, because no non-zero sum can be formed from an empty array.
3. **Transition**: For each element `arr[i - 1]` and each target sum `j`:
   - If we exclude `arr[i - 1]`, we inherit the result from previous elements: `dp[i - 1][j]`.
   - If we include `arr[i - 1]` (valid when `j >= arr[i - 1]`), we check if the remaining sum `j - arr[i - 1]` could be formed: `dp[i - 1][j - arr[i - 1]]`.
   - Therefore, `dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]]`.
4. The cell `dp[n][target]` gives the final boolean result in $O(n \cdot \text{target})$ time.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length == 0 || target < 0`, return `false`.
2. If `target == 0`, return `true`.
3. Let `int n = arr.length`.
4. Allocate `boolean[][] dp = new boolean[n + 1][target + 1]`.
5. For `i` from `0` to `n`, set `dp[i][0] = true`.
6. Loop `i` from `1` to `n`:
   - Let `int val = arr[i - 1]`.
   - Loop `j` from `1` to `target`:
     - If `dp[i - 1][j]`:
       - `dp[i][j] = true`.
     - Else if `j >= val`:
       - `dp[i][j] = dp[i - 1][j - val]`.
7. Return `dp[n][target]`.

## Code

```java
public static boolean solve(int[] arr, int target) {
    if (arr == null || arr.length == 0 || target < 0) {
        return false;
    }
    if (target == 0) {
        return true;
    }

    int n = arr.length;
    boolean[][] dp = new boolean[n + 1][target + 1];

    for (int i = 0; i <= n; i = i + 1) {
        dp[i][0] = true;
    }

    for (int i = 1; i <= n; i = i + 1) {
        int val = arr[i - 1];
        for (int j = 1; j <= target; j = j + 1) {
            if (dp[i - 1][j]) {
                dp[i][j] = true;
            } else if (j >= val) {
                dp[i][j] = dp[i - 1][j - val];
            }
        }
    }

    return dp[n][target];
}
```
