---
title: "Knight's Tour - Solution"
problemUrl: "/problems/knights-tour/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Knight's Tour is a Hamiltonian path problem on a knight's move graph.

From square `(r, c)`, the knight has 8 potential jump offsets:
`(-2, 1), (-1, 2), (1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1)`.

### Algorithm Steps
1. Initialize an $n \times n$ array `chess` filled with zeros.
2. In `tour(chess, r, c, move)`:
   - If `move == n * n`:
     - Set `chess[r][c] = move`.
     - Return `true`.
   - Set `chess[r][c] = move`.
   - For each of the 8 knight moves `(nr, nc)`:
     - If `nr >= 0 && nc >= 0 && nr < n && nc < n && chess[nr][nc] == 0`:
       - If `tour(chess, nr, nc, move + 1)` returns `true`:
         - Return `true`.
   - Backtrack: reset `chess[r][c] = 0`.
   - Return `false`.
3. If `tour` returns `true`, return `chess`; else return `new int[0][0]`.

### Complexity Analysis
- **Time Complexity**: $O(8^{n^2})$, worst-case exponential branching.
- **Space Complexity**: $O(n^2)$ recursion call stack and board array.

---

## Code

```java
public static int[][] solve(int n, int r, int c) {
    if (n <= 0 || r < 0 || c < 0 || r >= n || c >= n) {
        return new int[0][0];
    }

    int[][] chess = new int[n][n];
    if (findTour(chess, r, c, 1)) {
        return chess;
    }

    return new int[0][0];
}

private static final int[] DR = {-2, -1, 1, 2, 2, 1, -1, -2};
private static final int[] DC = {1, 2, 2, 1, -1, -2, -2, -1};

private static boolean findTour(int[][] chess, int r, int c, int move) {
    int n = chess.length;
    chess[r][c] = move;

    if (move == n * n) {
        return true;
    }

    for (int i = 0; i < 8; i = i + 1) {
        int nr = r + DR[i];
        int nc = c + DC[i];

        if (nr >= 0 && nc >= 0 && nr < n && nc < n && chess[nr][nc] == 0) {
            if (findTour(chess, nr, nc, move + 1)) {
                return true;
            }
        }
    }

    chess[r][c] = 0;
    return false;
}
```
