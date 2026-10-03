---
title: "Shortest Path in Binary Matrix - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/shortest-path-in-binary-matrix/"
weight: 67
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the minimum number of cells on a path from the top-left cell `(0, 0)` to the bottom-right cell `(n - 1, n - 1)` in an `n x n` grid where all cells along the path have value `0`. We can move in any of the 8 directions (horizontal, vertical, and diagonal).

Because all edge weights are uniform (each step costs 1 cell), **Breadth-First Search (BFS)** is guaranteed to find the shortest path in the fewest number of steps:
1. If the starting cell `grid[0][0]` or the destination cell `grid[n - 1][n - 1]` contains `1`, no clear path can exist, so immediately return `-1`.
2. If `n == 1` and `grid[0][0] == 0`, the start is already the destination, so the answer is `1`.
3. Use a queue of coordinates `(row, col, distance)` initialized with `(0, 0, 1)` and mark `grid[0][0]` as visited (`1`) to prevent re-visiting.
4. In each step of BFS, pop the front cell `(r, c, dist)`.
   - If `r == n - 1` and `c == n - 1`, we have reached the destination, so return `dist`.
   - Iterate over all 8 directional offsets `(dr, dc)`.
   - If a neighbor `(r + dr, c + dc)` is inside bounds and its value is `0`:
     - Mark it visited by setting `grid[nr][nc] = 1`.
     - Enqueue `(nr, nc, dist + 1)`.
5. If the queue becomes empty without reaching `(n - 1, n - 1)`, return `-1`.

### Step-by-Step Algorithm:
1. Let $n$ be the grid dimension `grid.length`.
2. Check if `grid[0][0] != 0` or `grid[n - 1][n - 1] != 0`. If true, return `-1`.
3. If $n == 1$, return `1`.
4. Initialize a `Queue<int[]>` and enqueue `[0, 0, 1]` (representing row 0, col 0, distance 1).
5. Mark `grid[0][0] = 1`.
6. Define the 8 movement vectors: `(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)`.
7. While the queue is not empty:
   - Poll `curr = queue.poll()`.
   - Let `r = curr[0]`, `c = curr[1]`, `dist = curr[2]`.
   - If `r == n - 1 && c == n - 1`, return `dist`.
   - For each direction `[dr, dc]`:
     - Calculate `nr = r + dr` and `nc = c + dc`.
     - If `nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 0`:
       - Set `grid[nr][nc] = 1`.
       - Add `[nr, nc, dist + 1]` to the queue.
8. If BFS completes without reaching the goal, return `-1`.

## Code

```java
public static int solve(int[][] grid) {
    int n = grid.length;
    if (grid[0][0] != 0 || grid[n - 1][n - 1] != 0) {
        return -1;
    }

    if (n == 1) {
        return 1;
    }

    Queue<int[]> queue = new ArrayDeque<>();
    queue.add(new int[]{0, 0, 1});
    grid[0][0] = 1;

    int[][] dirs = {
        {-1, -1}, {-1, 0}, {-1, 1},
        {0, -1},           {0, 1},
        {1, -1},  {1, 0},  {1, 1}
    };

    while (!queue.isEmpty()) {
        int[] curr = queue.poll();
        int r = curr[0];
        int c = curr[1];
        int dist = curr[2];

        if (r == n - 1 && c == n - 1) {
            return dist;
        }

        for (int i = 0; i < dirs.length; i = i + 1) {
            int nr = r + dirs[i][0];
            int nc = c + dirs[i][1];

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 0) {
                grid[nr][nc] = 1;
                queue.add(new int[]{nr, nc, dist + 1});
            }
        }
    }

    return -1;
}
```
