---
title: "Unique Paths II - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/unique-paths-ii/"
weight: 52
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

This problem extends the standard Unique Paths problem with the addition of static obstacles.

If a cell $(i, j)$ contains an obstacle (`obstacleGrid[i][j] == 1`), the robot cannot enter it, which means the number of paths reaching this cell is $0$.
Otherwise, the robot can reach $(i, j)$ from either $(i - 1, j)$ (from above) or $(i, j - 1)$ (from the left):
$$\text{dp}[j] = \begin{cases} 0 & \text{if } \text{obstacleGrid}[i][j] = 1 \\ \text{dp}[j] + \text{dp}[j - 1] & \text{otherwise} \end{cases}$$

Special edge cases:
- If the starting cell $(0, 0)$ or target cell $(m - 1, n - 1)$ has an obstacle, the robot cannot complete the journey, so return $0$.
- Using a 1D DP array of size $n$, space is optimized to $\mathcal{O}(n)$.

### Step-by-Step Algorithm:
1. Check if `obstacleGrid[0][0] == 1` or the grid is empty. If so, return `0`.
2. Initialize an array `dp` of size `n` with all zeros.
3. Set `dp[0] = 1`.
4. Iterate row by row for `i` from `0` to `m - 1`:
   - For `j` from `0` to `n - 1`:
     - If `obstacleGrid[i][j] == 1`, set `dp[j] = 0`.
     - Else if `j > 0`, update `dp[j] = dp[j] + dp[j - 1]`.
5. Return `dp[n - 1]`.

## Code

```java
public static int solve(int[][] obstacleGrid) {
    if (obstacleGrid == null || obstacleGrid.length == 0 || obstacleGrid[0].length == 0) {
        return 0;
    }

    int m = obstacleGrid.length;
    int n = obstacleGrid[0].length;

    if (obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) {
        return 0;
    }

    int[] dp = new int[n];
    dp[0] = 1;

    for (int i = 0; i < m; i = i + 1) {
        for (int j = 0; j < n; j = j + 1) {
            if (obstacleGrid[i][j] == 1) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] = dp[j] + dp[j - 1];
            }
        }
    }

    return dp[n - 1];
}
```
