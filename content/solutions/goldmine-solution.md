---
title: "Goldmine - Solution"
problemUrl: "/problems/goldmine/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We use 2D Dynamic Programming solved column-by-column from right to left:

1. **State Definition**: Let `dp[i][j]` represent the maximum gold collected starting from cell `(i, j)` to any cell in the rightmost column.
2. **Base Case**: In the last column (`j = n - 1`), no further steps are possible, so `dp[i][n - 1] = grid[i][n - 1]`.
3. **Transition**: For each column `j` from `n - 2` down to `0` and each row `i` from `0` to `m - 1`:
   - Directly right: `dp[i][j + 1]` is always a valid move.
   - Diagonally up-right: `dp[i - 1][j + 1]` is valid if `i > 0`.
   - Diagonally down-right: `dp[i + 1][j + 1]` is valid if `i < m - 1`.
   - Thus, `dp[i][j] = grid[i][j] + max(valid next steps)`.
4. The answer is the maximum value across all starting rows in the first column: `max(dp[i][0])` for `0 <= i < m`.

### Step-by-Step Algorithm:
1. If `grid == null || grid.length == 0 || grid[0].length == 0`, return `0`.
2. Let `int m = grid.length` and `int n = grid[0].length`.
3. Allocate `int[][] dp = new int[m][n]`.
4. Fill the last column: for `i` from `0` to `m - 1`, set `dp[i][n - 1] = grid[i][n - 1]`.
5. Loop column `j` from `n - 2` down to `0`:
   - Loop row `i` from `0` to `m - 1`:
     - Initialize `int maxNext = dp[i][j + 1]`.
     - If `i > 0`: `maxNext = Math.max(maxNext, dp[i - 1][j + 1])`.
     - If `i < m - 1`: `maxNext = Math.max(maxNext, dp[i + 1][j + 1])`.
     - Set `dp[i][j] = grid[i][j] + maxNext`.
6. Initialize `int maxGold = dp[0][0]`.
7. For `i` from `1` to `m - 1`, set `maxGold = Math.max(maxGold, dp[i][0])`.
8. Return `maxGold`.

## Code

```java
public static int solve(int[][] grid) {
    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0;
    }

    int m = grid.length;
    int n = grid[0].length;
    int[][] dp = new int[m][n];

    for (int i = 0; i < m; i = i + 1) {
        dp[i][n - 1] = grid[i][n - 1];
    }

    for (int j = n - 2; j >= 0; j = j - 1) {
        for (int i = 0; i < m; i = i + 1) {
            int maxNext = dp[i][j + 1];
            if (i > 0) {
                maxNext = Math.max(maxNext, dp[i - 1][j + 1]);
            }
            if (i < m - 1) {
                maxNext = Math.max(maxNext, dp[i + 1][j + 1]);
            }
            dp[i][j] = grid[i][j] + maxNext;
        }
    }

    int maxGold = dp[0][0];
    for (int i = 1; i < m; i = i + 1) {
        maxGold = Math.max(maxGold, dp[i][0]);
    }

    return maxGold;
}
```
