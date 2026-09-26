---
title: "Flood Fill - Solution"
problemUrl: "/problems/flood-fill/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Flood fill on a maze with obstacles uses recursive Depth-First Search with **backtracking**.
To avoid infinite cycles between adjacent cells, cells along the current search branch are marked visited, then unmarked upon return.

### Algorithm Steps
1. Validate inputs: if `maze` is null or `maze[0][0] == 1`, return empty list.
2. Initialize `visited = new boolean[n][m]` and `result = new ArrayList<>()`.
3. In `floodfill(maze, r, c, psf, visited, result)`:
   - **Boundary & Obstacle Check**:
     If `r < 0 || c < 0 || r >= n || c >= m || maze[r][c] == 1 || visited[r][c]`, return.
   - **Destination Check**:
     If `r == n - 1 && c == m - 1`, add `psf` to `result` and return.
   - **Mark**: Set `visited[r][c] = true`.
   - **Explore 4 directions**:
     - Top: `floodfill(maze, r - 1, c, psf + "t", visited, result)`
     - Left: `floodfill(maze, r, c - 1, psf + "l", visited, result)`
     - Down: `floodfill(maze, r + 1, c, psf + "d", visited, result)`
     - Right: `floodfill(maze, r, c + 1, psf + "r", visited, result)`
   - **Backtrack**: Reset `visited[r][c] = false`.
4. Return `result`.

### Complexity Analysis
- **Time Complexity**: $O(4^{n \times m})$ in the worst case where every cell branches in 4 directions.
- **Space Complexity**: $O(n \times m)$ recursion call stack and boolean visited array.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(int[][] maze) {
    List<String> result = new ArrayList<>();
    if (maze == null || maze.length == 0 || maze[0].length == 0 || maze[0][0] == 1) {
        return result;
    }

    int n = maze.length;
    int m = maze[0].length;
    boolean[][] visited = new boolean[n][m];

    floodfill(maze, 0, 0, "", visited, result);
    return result;
}

private static void floodfill(int[][] maze, int r, int c, String psf, boolean[][] visited, List<String> result) {
    int n = maze.length;
    int m = maze[0].length;

    if (r < 0 || c < 0 || r >= n || c >= m || maze[r][c] == 1 || visited[r][c]) {
        return;
    }

    if (r == n - 1 && c == m - 1) {
        result.add(psf);
        return;
    }

    visited[r][c] = true;

    floodfill(maze, r - 1, c, psf + "t", visited, result);
    floodfill(maze, r, c - 1, psf + "l", visited, result);
    floodfill(maze, r + 1, c, psf + "d", visited, result);
    floodfill(maze, r, c + 1, psf + "r", visited, result);

    visited[r][c] = false;
}
```
