---
title: "Unique Paths - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/unique-paths/"
weight: 51
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To reach the cell $(i, j)$ from the starting point $(0, 0)$, the robot can only arrive from either:
1. The cell directly above $(i - 1, j)$ by moving down.
2. The cell directly to the left $(i, j - 1)$ by moving right.

Therefore, the number of unique paths to reach $(i, j)$ satisfies the recurrence relation:
$$\text{dp}[i][j] = \text{dp}[i - 1][j] + \text{dp}[i][j - 1]$$

For any cell in the first row or first column, there is only $1$ way to reach it (moving only right or only down). Thus:
$$\text{dp}[0][j] = 1, \quad \text{dp}[i][0] = 1$$

Since each row's values depend only on the current row and the previous row, we can optimize the space complexity from $\mathcal{O}(m \cdot n)$ to $\mathcal{O}(n)$ using a single 1D array.

### Step-by-Step Algorithm:
1. Initialize a 1D array `dp` of size `n` with all entries set to `1` (representing the base case for the first row).
2. For each row `i` from `1` to `m - 1`:
   - For each column `j` from `1` to `n - 1`:
     - Update `dp[j] = dp[j] + dp[j - 1]`.
3. Return `dp[n - 1]`, which stores the total unique paths to the bottom-right corner.

## Code

```java
public static int solve(int m, int n) {
    if (m <= 0 || n <= 0) {
        return 0;
    }

    int[] dp = new int[n];
    Arrays.fill(dp, 1);

    for (int i = 1; i < m; i = i + 1) {
        for (int j = 1; j < n; j = j + 1) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n - 1];
}
```
