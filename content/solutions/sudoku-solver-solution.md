---
title: "Sudoku Solver - Solution"
problemUrl: "/problems/sudoku-solver/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Sudoku Solver fills empty cells using recursive backtracking.

### Algorithm Steps
1. Scan the 9x9 board row by row and column by column to locate the first empty cell marked with `'.'`.
2. If no empty cells remain, the board is completely solved: return `true`.
3. For the empty cell `(r, c)`, attempt each digit `d` from `'1'` to `'9'`:
   - Check if `d` is valid at `(r, c)`:
     - Row check: `d` must not appear in row `r`.
     - Column check: `d` must not appear in column `c`.
     - Subgrid check: `d` must not appear in the 3x3 block containing `(r, c)`.
   - If valid:
     - Place digit: `board[r][c] = d`.
     - Recurse: if `solve(board)` returns `true`, return `true`.
     - Backtrack: reset `board[r][c] = '.'`.
4. If no digit from `'1'` to `'9'` can be placed, return `false`.

### Complexity Analysis
- **Time Complexity**: $O(9^m)$, where $m$ is the number of empty cells (at most 81). In practice, constraint propagation prunes most combinations immediately.
- **Space Complexity**: $O(m)$ recursion call stack space.

---

## Code

```java
public static boolean solve(char[][] board) {
    if (board == null || board.length != 9 || board[0].length != 9) {
        return false;
    }

    for (int r = 0; r < 9; r = r + 1) {
        for (int c = 0; c < 9; c = c + 1) {
            if (board[r][c] == '.') {
                for (char d = '1'; d <= '9'; d = (char) (d + 1)) {
                    if (isValid(board, r, c, d)) {
                        board[r][c] = d;

                        if (solve(board)) {
                            return true;
                        }

                        board[r][c] = '.';
                    }
                }
                return false;
            }
        }
    }

    return true;
}

private static boolean isValid(char[][] board, int row, int col, char c) {
    int startRow = 3 * (row / 3);
    int startCol = 3 * (col / 3);

    for (int i = 0; i < 9; i = i + 1) {
        if (board[row][i] == c) {
            return false;
        }
        if (board[i][col] == c) {
            return false;
        }
        int blockR = startRow + (i / 3);
        int blockC = startCol + (i % 3);
        if (board[blockR][blockC] == c) {
            return false;
        }
    }

    return true;
}
```
