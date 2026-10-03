---
title: "Surrounded Regions - Solution"
problemUrl: "/problems/surrounded-regions/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

An 'O' cell cannot be captured if it is on the border or connected 4-directionally to a border 'O'.

1. **Mark Border-Connected Regions**: Iterate through the boundary of the board (first and last rows, first and last columns). Whenever an `'O'` is encountered, trigger DFS to traverse all reachable `'O'` cells and temporarily mark them as `'#'`.
2. **Capture Enclosed Regions**: Iterate through all cells of the board:
   - If a cell is `'O'`, it was not reachable from any border, so it is surrounded; flip it to `'X'`.
   - If a cell is `'#'`, it is border-connected; restore it to `'O'`.
3. Return the modified `board`.

### Step-by-Step Algorithm:
1. Scan the outer perimeter (rows `0` and `m - 1`, cols `0` and `n - 1`).
2. For each boundary cell where `board[r][c] == 'O'`, invoke DFS to flip it and all connected `'O'`s to `'#'`.
3. Iterate through every cell `(r, c)` of the board:
4. If `board[r][c] == 'O'`, set `board[r][c] = 'X'`.
5. If `board[r][c] == '#'`, restore `board[r][c] = 'O'`.
6. Return `board`.

## Code

```java
public static char[][] solve(char[][] board) {
    if (board.length == 0 || board[0].length == 0) {
        return board;
    }

    int m = board.length;
    int n = board[0].length;

    for (int r = 0; r < m; r = r + 1) {
        if (board[r][0] == 'O') {
            dfs(board, r, 0, m, n);
        }
        if (board[r][n - 1] == 'O') {
            dfs(board, r, n - 1, m, n);
        }
    }

    for (int c = 0; c < n; c = c + 1) {
        if (board[0][c] == 'O') {
            dfs(board, 0, c, m, n);
        }
        if (board[m - 1][c] == 'O') {
            dfs(board, m - 1, c, m, n);
        }
    }

    for (int r = 0; r < m; r = r + 1) {
        for (int c = 0; c < n; c = c + 1) {
            if (board[r][c] == 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] == '#') {
                board[r][c] = 'O';
            }
        }
    }

    return board;
}

private static void dfs(char[][] board, int r, int c, int m, int n) {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] != 'O') {
        return;
    }
    board[r][c] = '#';
    dfs(board, r - 1, c, m, n);
    dfs(board, r + 1, c, m, n);
    dfs(board, r, c - 1, m, n);
    dfs(board, r, c + 1, m, n);
}
```
