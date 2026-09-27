---
title: "Climb Stairs with Jumps - Solution"
problemUrl: "/problems/climb-stairs-with-jumps/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the number of distinct paths from stair `0` to stair `n`, we use 1D Dynamic Programming:

1. **State Definition**: Let `dp[i]` denote the number of paths from stair `i` to reach destination stair `n`.
2. **Base Case**: At the top stair `n`, we are already at the destination, which gives `dp[n] = 1`.
3. **Transition**: For any stair `i` from `n - 1` down to `0`:
   - If `arr[i] > 0`, we can take any jump of length `j` from `1` to `arr[i]`.
   - If `i + j <= n`, each choice opens up `dp[i + j]` paths.
   - Therefore, `dp[i] = sum(dp[i + j])` for all `1 <= j <= arr[i]` such that `i + j <= n`.
4. After solving backwards to index `0`, `dp[0]` holds the total number of ways to reach stair `n` starting from stair `0`.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length == 0`, return `0`.
2. Let `int n = arr.length`.
3. Create an array `int[] dp = new int[n + 1]`.
4. Initialize `dp[n] = 1`.
5. Loop `i` from `n - 1` down to `0`:
   - Loop `j` from `1` to `arr[i]`:
     - If `i + j <= n`:
       - `dp[i] = dp[i] + dp[i + j]`.
6. Return `dp[0]`.

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return 0;
    }

    int n = arr.length;
    int[] dp = new int[n + 1];
    dp[n] = 1;

    for (int i = n - 1; i >= 0; i = i - 1) {
        for (int j = 1; j <= arr[i] && i + j <= n; j = j + 1) {
            dp[i] = dp[i] + dp[i + j];
        }
    }

    return dp[0];
}
```
