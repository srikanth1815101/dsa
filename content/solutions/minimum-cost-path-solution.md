---
title: "Minimum Cost Path - Solution"
problemUrl: "/problems/minimum-cost-path/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the minimum path sum to travel from `(0, 0)` to `(m - 1, n - 1)` in a 2D grid moving only down and right:

1. **State Definition**: Let `dp[i][j]` represent the minimum path cost to reach cell `(i, j)` from `(0, 0)`.
2. **Base Cases**:
   - Starting cell: `dp[0][0] = grid[0][0]`.
   - First row: Can only be reached from the left: `dp[0][j] = dp[0][j - 1] + grid[0][j]`.
   - First column: Can only be reached from above: `dp[i][0] = dp[i - 1][0] + grid[i][0]`.
3. **Transition**: For any internal cell `(i, j)`:
   - One can arrive either from `(i - 1, j)` (moving down) or `(i, j - 1)` (moving right).
   - Hence, `dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])`.
4. The destination cell `dp[m - 1][n - 1]` contains the optimal overall path sum in $O(m \cdot n)$ time.

### Step-by-Step Algorithm:
1. If `grid == null || grid.length == 0 || grid[0].length == 0`, return `0`.
2. Determine `int m = grid.length` and `int n = grid[0].length`.
3. Allocate `int[][] dp = new int[m][n]`.
4. Set `dp[0][0] = grid[0][0]`.
5. Fill the first row: for `j` from `1` to `n - 1`, set `dp[0][j] = dp[0][j - 1] + grid[0][j]`.
6. Fill the first column: for `i` from `1` to `m - 1`, set `dp[i][0] = dp[i - 1][0] + grid[i][0]`.
7. Loop `i` from `1` to `m - 1`:
   - Loop `j` from `1` to `n - 1`:
     - Compute `int smaller = Math.min(dp[i - 1][j], dp[i][j - 1])`.
     - Set `dp[i][j] = grid[i][j] + smaller`.
8. Return `dp[m - 1][n - 1]`.

## Code

```java
public static int solve(int[][] grid) {
    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0;
    }

    int m = grid.length;
    int n = grid[0].length;
    int[][] dp = new int[m][n];

    dp[0][0] = grid[0][0];

    for (int j = 1; j < n; j = j + 1) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for (int i = 1; i < m; i = i + 1) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    for (int i = 1; i < m; i = i + 1) {
        for (int j = 1; j < n; j = j + 1) {
            int smaller = Math.min(dp[i - 1][j], dp[i][j - 1]);
            dp[i][j] = grid[i][j] + smaller;
        }
    }

    return dp[m - 1][n - 1];
}
```
