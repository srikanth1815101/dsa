---
title: "Rotting Oranges - Solution"
problemUrl: "/problems/rotting-oranges/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

This problem can be modeled as finding the shortest path in an unweighted grid from multiple sources simultaneously, which is solved using Multi-source Breadth-First Search (BFS).

1. First, scan the grid to count all fresh oranges and enqueue all initially rotten oranges `(r, c)` into a BFS queue.
2. If there are no fresh oranges initially, return `0` immediately.
3. Process the queue level by level (where each level represents 1 minute). For each rotten orange, inspect its 4 cardinal neighbors. If a neighbor is fresh (`1`), infect it by setting `grid[nr][nc] = 2`, decrement the fresh orange counter, and enqueue the newly rotten cell.
4. After BFS completes, if the fresh orange counter is `0`, return the elapsed minutes; otherwise return `-1`.

### Step-by-Step Algorithm:
1. Initialize a queue for cell coordinates and a counter `fresh = 0`.
2. Traverse the grid: enqueue cells with value `2` and increment `fresh` for cells with value `1`.
3. If `fresh == 0`, return `0`.
4. Initialize `minutes = 0`.
5. While the queue is not empty and `fresh > 0`, increment `minutes = minutes + 1` and process all nodes currently in the queue.
6. For each node, check all 4 adjacent neighbors; if neighbor is `1`, mark as `2`, decrement `fresh = fresh - 1`, and enqueue neighbor.
7. Return `fresh == 0 ? minutes : -1`.

## Code

```java
public static int solve(int[][] grid) {
    int m = grid.length;
    int n = grid[0].length;
    Queue<int[]> queue = new ArrayDeque<>();
    int fresh = 0;

    for (int r = 0; r < m; r = r + 1) {
        for (int c = 0; c < n; c = c + 1) {
            if (grid[r][c] == 2) {
                queue.offer(new int[]{r, c});
            } else if (grid[r][c] == 1) {
                fresh = fresh + 1;
            }
        }
    }

    if (fresh == 0) {
        return 0;
    }

    int minutes = 0;
    int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    while (!queue.isEmpty() && fresh > 0) {
        int size = queue.size();
        minutes = minutes + 1;
        for (int i = 0; i < size; i = i + 1) {
            int[] curr = queue.poll();
            int r = curr[0];
            int c = curr[1];
            for (int d = 0; d < 4; d = d + 1) {
                int nr = r + dirs[d][0];
                int nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2;
                    fresh = fresh - 1;
                    queue.offer(new int[]{nr, nc});
                }
            }
        }
    }

    if (fresh == 0) {
        return minutes;
    }
    return -1;
}
```
