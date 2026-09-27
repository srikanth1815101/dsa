---
title: "Number of Islands - Solution"
problemUrl: "/problems/number-of-islands/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Number of Islands problem can be modeled as finding the number of connected components in an undirected grid graph where each land cell `1` represents a vertex and adjacent horizontal/vertical land cells share an edge.

1. Iterate through every cell `(r, c)` in the `m x n` grid.
2. If `grid[r][c] == 1`, we have discovered an unvisited island:
   - Increment the island counter by `1`.
   - Initiate a Depth-First Search (DFS) or Breadth-First Search (BFS) starting from `(r, c)`.
   - In DFS, sink the visited land cells by marking them as `0` (or maintaining a visited array) to prevent recounting.
   - Recurse in all four cardinal directions: up `(r - 1, c)`, down `(r + 1, c)`, left `(r, c - 1)`, and right `(r, c + 1)`.
3. After scanning the entire grid, the counter holds the total count of isolated islands.

The time complexity is $O(m \times n)$ because each cell is examined at most once. The space complexity is $O(m \times n)$ in the worst case for the recursion stack.

### Step-by-Step Algorithm:
1. If `grid == null || grid.length == 0 || grid[0].length == 0`, return `0`.
2. Let `int m = grid.length` and `int n = grid[0].length`.
3. Allocate a boolean array `visited` of size `m x n` (or mutate in place).
4. Initialize `count = 0`.
5. Loop `r` from `0` to `m - 1`:
   - Loop `c` from `0` to `n - 1`:
     - If `grid[r][c] == 1 && !visited[r][c]`:
       - Increment `count = count + 1`.
       - Execute `dfs(grid, r, c, visited)`.
6. Return `count`.

## Code

```java
public static int solve(int[][] grid) {
    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0;
    }

    int m = grid.length;
    int n = grid[0].length;
    boolean[][] visited = new boolean[m][n];
    int count = 0;

    for (int i = 0; i < m; i = i + 1) {
        for (int j = 0; j < n; j = j + 1) {
            if (grid[i][j] == 1 && !visited[i][j]) {
                count = count + 1;
                dfs(grid, i, j, visited);
            }
        }
    }

    return count;
}

private static void dfs(int[][] grid, int r, int c, boolean[][] visited) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
        return;
    }
    if (grid[r][c] == 0 || visited[r][c]) {
        return;
    }

    visited[r][c] = true;

    dfs(grid, r - 1, c, visited);
    dfs(grid, r + 1, c, visited);
    dfs(grid, r, c - 1, visited);
    dfs(grid, r, c + 1, visited);
}
```
