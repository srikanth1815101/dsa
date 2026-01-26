---
title: "Rotting Oranges - Solution"
problemUrl: "/problems/rotting-oranges/"
---

## Explanation

This is a **multi-source BFS** problem. All rotten oranges spread simultaneously, so we start BFS from all of them at once.

**Algorithm:**
1. Add all rotten oranges to a queue and count fresh oranges
2. Process the queue level by level (each level = 1 minute)
3. For each rotten orange, rot its fresh neighbors and add them to the queue
4. Track minutes elapsed and remaining fresh oranges
5. Return minutes if all fresh oranges are rotten, otherwise -1

## Code

```java
class Solution {
    public int orangesRotting(int[][] grid) {
        Queue<int[]> queue = new LinkedList<>();
        int fresh = 0;
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 2) queue.offer(new int[]{i, j});
                else if (grid[i][j] == 1) fresh++;
            }
        }
        
        if (fresh == 0) return 0;
        
        int[][] dirs = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        int minutes = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] curr = queue.poll();
                for (int[] d : dirs) {
                    int r = curr[0] + d[0], c = curr[1] + d[1];
                    if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] == 1) {
                        grid[r][c] = 2;
                        fresh--;
                        queue.offer(new int[]{r, c});
                    }
                }
            }
            minutes++;
        }
        
        return fresh == 0 ? minutes - 1 : -1;
    }
}
```
