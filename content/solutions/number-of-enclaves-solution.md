---
title: "Number of Enclaves - Solution"
problemUrl: "/problems/number-of-enclaves/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Any land cell that can reach the grid boundary cannot be an enclave.

Instead of testing each cell independently, we start from all land cells situated along the outer boundary (top row, bottom row, left column, right column) and flood-fill (using DFS or BFS) through all connected land cells, marking them as visited (e.g. changing `1` to `0`).

After eliminating all boundary-connected land, any remaining `1` in the grid is strictly interior and completely enclosed. A simple linear scan counting remaining `1` cells gives the exact answer.

### Step-by-Step Algorithm:
1. Traverse all boundary cells: row `0`, row `m - 1`, column `0`, column `n - 1`.
2. For each boundary cell where `grid[r][c] == 1`, run DFS to convert the entire connected component to `0`.
3. Initialize `enclaves = 0`.
4. Traverse the entire grid from `r = 0` to `m - 1` and `c = 0` to `n - 1`: if `grid[r][c] == 1`, increment `enclaves = enclaves + 1`.
5. Return `enclaves`.

## Code

```java
public static int solve(int[][] grid) {
    int m = grid.length;
    int n = grid[0].length;

    for (int r = 0; r < m; r = r + 1) {
        if (grid[r][0] == 1) {
            dfs(grid, r, 0, m, n);
        }
        if (grid[r][n - 1] == 1) {
            dfs(grid, r, n - 1, m, n);
        }
    }

    for (int c = 0; c < n; c = c + 1) {
        if (grid[0][c] == 1) {
            dfs(grid, 0, c, m, n);
        }
        if (grid[m - 1][c] == 1) {
            dfs(grid, m - 1, c, m, n);
        }
    }

    int enclaves = 0;
    for (int r = 0; r < m; r = r + 1) {
        for (int c = 0; c < n; c = c + 1) {
            if (grid[r][c] == 1) {
                enclaves = enclaves + 1;
            }
        }
    }

    return enclaves;
}

private static void dfs(int[][] grid, int r, int c, int m, int n) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] != 1) {
        return;
    }
    grid[r][c] = 0;
    dfs(grid, r - 1, c, m, n);
    dfs(grid, r + 1, c, m, n);
    dfs(grid, r, c - 1, m, n);
    dfs(grid, r, c + 1, m, n);
}
```
