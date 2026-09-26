---
title: "Word Search - Solution"
problemUrl: "/problems/word-search/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks whether a sequence of letters matching `word` can be found through adjacent horizontal and vertical moves without revisiting cells.

### Algorithm Steps
1. Loop over every cell `(r, c)` in `board`:
   - If `board[r][c] == word.charAt(0)`:
     - If `dfs(board, word, r, c, 0)` returns `true`, return `true`.
2. In `dfs(board, word, r, c, idx)`:
   - **Base Case**: If `idx == word.length()`, all characters have matched: return `true`.
   - **Boundary & Mismatch Check**:
     - If `r < 0 || c < 0 || r >= m || c >= n || board[r][c] != word.charAt(idx)`: return `false`.
   - **Mark Cell**:
     - `char temp = board[r][c]`.
     - `board[r][c] = '#'`.
   - **Explore 4 Directions**:
     - `boolean found = dfs(board, word, r - 1, c, idx + 1) || dfs(board, word, r + 1, c, idx + 1) || dfs(board, word, r, c - 1, idx + 1) || dfs(board, word, r, c + 1, idx + 1)`.
   - **Backtrack**:
     - `board[r][c] = temp`.
   - Return `found`.
3. If no starting cell succeeds, return `false`.

### Complexity Analysis
- **Time Complexity**: $O(m \times n \times 4^L)$, where $L$ is the length of `word`.
- **Space Complexity**: $O(L)$ call stack depth for matching word characters.

---

## Code

```java
public static boolean solve(char[][] board, String word) {
    if (board == null || board.length == 0 || word == null) {
        return false;
    }

    int m = board.length;
    int n = board[0].length;

    for (int r = 0; r < m; r = r + 1) {
        for (int c = 0; c < n; c = c + 1) {
            if (board[r][c] == word.charAt(0)) {
                if (dfs(board, word, r, c, 0)) {
                    return true;
                }
            }
        }
    }

    return false;
}

private static boolean dfs(char[][] board, String word, int r, int c, int idx) {
    if (idx == word.length()) {
        return true;
    }

    int m = board.length;
    int n = board[0].length;

    if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] != word.charAt(idx)) {
        return false;
    }

    char temp = board[r][c];
    board[r][c] = '#';

    boolean found = dfs(board, word, r - 1, c, idx + 1)
                 || dfs(board, word, r + 1, c, idx + 1)
                 || dfs(board, word, r, c - 1, idx + 1)
                 || dfs(board, word, r, c + 1, idx + 1);

    board[r][c] = temp;
    return found;
}
```
