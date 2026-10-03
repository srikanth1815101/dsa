---
title: "Shortest Bridge - Solution"
problemUrl: "/problems/shortest-bridge/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Because there are exactly two islands, we solve this in two phases:
1. **DFS to Identify the First Island**: Scan the matrix until we encounter the first `1`. Use Depth-First Search (DFS) to traverse the entire first island, painting its cells with value `2` and adding each cell to a multi-source BFS queue.
2. **BFS for Shortest Path**: Expand outward layer by layer from all cells of the first island using BFS. When an adjacent cell is `0`, mark it as visited (`2`) and enqueue it. The first time we reach a cell with value `1`, it must belong to the second island. The number of BFS layers traversed equals the minimum flips needed.

### Step-by-Step Algorithm:
1. Scan the grid for the first cell containing `1`.
2. Use DFS from this cell to mark all cells in the first island as `2` and push their coordinates into a BFS queue.
3. Initialize `steps = 0`.
4. Perform BFS level-by-level: for each cell in the queue, inspect 4 adjacent neighbors.
5. If a neighbor is `1`, return `steps` immediately.
6. If a neighbor is `0`, mark as `2` and enqueue.
7. Increment `steps = steps + 1` after exhausting each level.

## Code

```java
public static int solve(int[][] grid) {
    int n = grid.length;
    Queue<int[]> queue = new ArrayDeque<>();
    boolean found = false;

    for (int r = 0; r < n && !found; r = r + 1) {
        for (int c = 0; c < n && !found; c = c + 1) {
            if (grid[r][c] == 1) {
                dfs(grid, r, c, n, queue);
                found = true;
            }
        }
    }

    int steps = 0;
    int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    while (!queue.isEmpty()) {
        int size = queue.size();
        for (int i = 0; i < size; i = i + 1) {
            int[] curr = queue.poll();
            int r = curr[0];
            int c = curr[1];
            for (int d = 0; d < 4; d = d + 1) {
                int nr = r + dirs[d][0];
                int nc = c + dirs[d][1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                    if (grid[nr][nc] == 1) {
                        return steps;
                    }
                    if (grid[nr][nc] == 0) {
                        grid[nr][nc] = 2;
                        queue.offer(new int[]{nr, nc});
                    }
                }
            }
        }
        steps = steps + 1;
    }

    return steps;
}

private static void dfs(int[][] grid, int r, int c, int n, Queue<int[]> queue) {
    if (r < 0 || r >= n || c < 0 || c >= n || grid[r][c] != 1) {
        return;
    }
    grid[r][c] = 2;
    queue.offer(new int[]{r, c});
    dfs(grid, r - 1, c, n, queue);
    dfs(grid, r + 1, c, n, queue);
    dfs(grid, r, c - 1, n, queue);
    dfs(grid, r, c + 1, n, queue);
}
```
