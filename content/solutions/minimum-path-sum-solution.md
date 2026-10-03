---
title: "Minimum Path Sum - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/minimum-path-sum/"
weight: 53
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the minimum path sum to any cell $(i, j)$, we only need to look at the two possible predecessors from which the robot could have entered $(i, j)$:
1. From the cell above: $(i - 1, j)$.
2. From the cell to the left: $(i, j - 1)$.

The minimum path sum to reach $(i, j)$ is given by the recurrence:
$$\text{dp}[i][j] = \text{grid}[i][j] + \min(\text{dp}[i - 1][j], \text{dp}[i][j - 1])$$

Boundary conditions:
- The starting cell: $\text{dp}[0][0] = \text{grid}[0][0]$.
- The first row: can only be reached from the left: $\text{dp}[0][j] = \text{dp}[0][j - 1] + \text{grid}[0][j]$.
- The first column: can only be reached from above: $\text{dp}[i][0] = \text{dp}[i - 1][0] + \text{grid}[i][0]$.

We can compress the 2D DP table into a 1D array of size $n$, where `dp[j]` represents the minimum path sum to column $j$ in the current row.

### Step-by-Step Algorithm:
1. Handle edge cases if `grid` is null or has zero dimensions.
2. Initialize an array `dp` of size $n$.
3. Set `dp[0] = grid[0][0]`.
4. Initialize the rest of the first row: for $j$ from $1$ to $n - 1$, set `dp[j] = dp[j - 1] + grid[0][j]`.
5. For each subsequent row $i$ from $1$ to $m - 1$:
   - Update the first column: `dp[0] = dp[0] + grid[i][0]`.
   - For each column $j$ from $1$ to $n - 1$:
     - Update `dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1])`.
6. Return `dp[n - 1]`.

## Code

```java
public static int solve(int[][] grid) {
    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0;
    }

    int m = grid.length;
    int n = grid[0].length;

    int[] dp = new int[n];
    dp[0] = grid[0][0];

    for (int j = 1; j < n; j = j + 1) {
        dp[j] = dp[j - 1] + grid[0][j];
    }

    for (int i = 1; i < m; i = i + 1) {
        dp[0] = dp[0] + grid[i][0];
        for (int j = 1; j < n; j = j + 1) {
            dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
        }
    }

    return dp[n - 1];
}
```
