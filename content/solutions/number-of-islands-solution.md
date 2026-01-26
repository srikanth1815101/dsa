---
title: "Number of Islands - Solution"
problemUrl: "/problems/number-of-islands/"
---

## Explanation

This is a classic **graph traversal** problem. We iterate through each cell, and when we find a land cell ('1'), we:
1. Increment our island count
2. Use DFS/BFS to mark all connected land cells as visited (by changing them to '0')

This ensures each island is counted exactly once.

**Algorithm:**
1. Iterate through all cells in the grid
2. When we find '1', increment count and start DFS
3. DFS explores all 4 directions, marking visited cells as '0'
4. Return the total count

## Code

```java
class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    dfs(grid, i, j);
                    count++;
                }
            }
        }
        return count;
    }
    
    private void dfs(char[][] grid, int i, int j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != '1') {
            return;
        }
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
}
```
