---
title: "N Queens - Solution"
problemUrl: "/problems/n-queens/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Placing $n$ queens on an $n \times n$ chessboard such that no two queens attack each other requires that no two queens share the same row, column, or diagonal.

Since each row must contain exactly one queen, we place queens row-by-row from row 0 to row $n - 1$.

### Algorithm Steps
1. Initialize an $n \times n$ board filled with `'.'`.
2. Define a helper function `placeQueens(row, board, result)`:
   - **Base Case**: If `row == n`, a valid placement of $n$ queens is found. Format the board into a list of strings and add to `result`.
   - Iterate column `col` from 0 to $n - 1$:
     - Check if placing a queen at `(row, col)` is safe:
       - Column check: No queen in `(r, col)` for $r < row$.
       - Upper-left diagonal: No queen in `(row - i, col - i)`.
       - Upper-right diagonal: No queen in `(row - i, col + i)`.
     - If safe:
       - Place queen: `board[row][col] = 'Q'`.
       - Recurse: `placeQueens(row + 1, board, result)`.
       - Backtrack: `board[row][col] = '.'`.
3. Return `result`.

### Complexity Analysis
- **Time Complexity**: $O(n!)$, as the first row has $n$ choices, second has $\le n - 2$, etc.
- **Space Complexity**: $O(n^2)$ board state and $O(n)$ recursion call stack.

---

## Code

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public static List<List<String>> solve(int n) {
    List<List<String>> result = new ArrayList<>();
    if (n <= 0) {
        return result;
    }

    char[][] board = new char[n][n];
    for (int i = 0; i < n; i = i + 1) {
        Arrays.fill(board[i], '.');
    }

    placeQueens(0, board, result);
    return result;
}

private static void placeQueens(int row, char[][] board, List<List<String>> result) {
    int n = board.length;
    if (row == n) {
        List<String> configuration = new ArrayList<>();
        for (int i = 0; i < n; i = i + 1) {
            configuration.add(new String(board[i]));
        }
        result.add(configuration);
        return;
    }

    for (int col = 0; col < n; col = col + 1) {
        if (isSafe(board, row, col)) {
            board[row][col] = 'Q';
            placeQueens(row + 1, board, result);
            board[row][col] = '.';
        }
    }
}

private static boolean isSafe(char[][] board, int row, int col) {
    int n = board.length;

    // Check vertical column above
    for (int i = 0; i < row; i = i + 1) {
        if (board[i][col] == 'Q') {
            return false;
        }
    }

    // Check upper-left diagonal
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i = i - 1, j = j - 1) {
        if (board[i][j] == 'Q') {
            return false;
        }
    }

    // Check upper-right diagonal
    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i = i - 1, j = j + 1) {
        if (board[i][j] == 'Q') {
            return false;
        }
    }

    return true;
}
```
