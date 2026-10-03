---
title: "Design Tic Tac Toe - Solution"
problemUrl: "/problems/design-tic-tac-toe/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To evaluate win conditions in `O(1)` per move without checking the entire `n x n` grid:
We use integer counters:
- `rows[n]`: net score for each row.
- `cols[n]`: net score for each col.
- `diag`: net score for the main diagonal (`row == col`).
- `antiDiag`: net score for the anti-diagonal (`row + col == n - 1`).

Player 1 adds `+1` and Player 2 adds `-1`.
When a move is made by `player` at `(r, c)`:
- `toAdd = (player == 1) ? 1 : -1`.
- Update `rows[r]`, `cols[c]`, and conditionally `diag` and `antiDiag`.
- If the absolute value of any updated counter equals `n`, the current `player` has won.

This gives strictly `O(1)` time per move and `O(n)` space.

### Step-by-Step Algorithm:
1. Initialize arrays `rows = new int[n]`, `cols = new int[n]`, and integers `diag = 0`, `antiDiag = 0`.
2. Initialize `winner = 0` and result array `ans` of length `moves.length`.
3. Iterate each move `[r, c, player]`:
4. If `winner != 0`, record `ans[i] = winner` and continue.
5. Let `toAdd = (player == 1) ? 1 : -1`.
6. Update `rows[r] = rows[r] + toAdd` and `cols[c] = cols[c] + toAdd`.
7. If `r == c`, update `diag = diag + toAdd`.
8. If `r + c == n - 1`, update `antiDiag = antiDiag + toAdd`.
9. If `Math.abs(rows[r]) == n || Math.abs(cols[c]) == n || Math.abs(diag) == n || Math.abs(antiDiag) == n`, set `winner = player`.
10. Set `ans[i] = winner`.
11. Return `ans`.

## Code

```java
public static int[] solve(int n, int[][] moves) {
    int[] rows = new int[n];
    int[] cols = new int[n];
    int diag = 0;
    int antiDiag = 0;
    int winner = 0;

    int[] result = new int[moves.length];

    for (int i = 0; i < moves.length; i = i + 1) {
        if (winner != 0) {
            result[i] = winner;
            continue;
        }

        int r = moves[i][0];
        int c = moves[i][1];
        int player = moves[i][2];
        int toAdd;
        if (player == 1) {
            toAdd = 1;
        } else {
            toAdd = -1;
        }

        rows[r] = rows[r] + toAdd;
        cols[c] = cols[c] + toAdd;

        if (r == c) {
            diag = diag + toAdd;
        }
        if (r + c == n - 1) {
            antiDiag = antiDiag + toAdd;
        }

        if (Math.abs(rows[r]) == n || Math.abs(cols[c]) == n || Math.abs(diag) == n || Math.abs(antiDiag) == n) {
            winner = player;
        }

        result[i] = winner;
    }

    return result;
}
```
