---
title: "Snakes and Ladders - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/snakes-and-ladders/"
weight: 44
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We want to determine the minimum number of 6-sided dice rolls required to move from square 1 to square $N^2$ on an $N \times N$ Boustrophedon-numbered board containing snakes and ladders.



Because all dice rolls have equal cost (1 move), this is a shortest path problem in an unweighted directed graph, which can be solved via Breadth-First Search (BFS):
1. **Coordinate Conversion:** Convert any 1D square number `curr` ($1 \le curr \le N^2$) into its corresponding 2D matrix coordinates `(r, c)`:
   - Row from bottom: `rowFromBottom = (curr - 1) / n`.
   - Matrix row index: `r = n - 1 - rowFromBottom`.
   - Column index: if `rowFromBottom` is even, left-to-right: `c = (curr - 1) % n`.
   - If `rowFromBottom` is odd, right-to-left: `c = n - 1 - (curr - 1) % n`.
2. **State Transition:**
   - From each position `curr`, try all dice rolls from $1$ to $6$.
   - Let `next = curr + dice`. If `next > n * n`, stop rolling.
   - Inspect `board[r][c]`. If a snake or ladder exists (`!= -1`), transport to `board[r][c]`; otherwise, remain at `next`.
3. Use a boolean visited array of size $N^2 + 1$ to ensure each square is evaluated at most once.

### Step-by-Step Algorithm:
1. Let `n = board.length` and `target = n * n`.
2. Initialize `boolean[] visited = new boolean[target + 1]`.
3. Initialize a queue `Queue<Integer> queue` and enqueue square `1`. Mark `visited[1] = true`.
4. Initialize `moves = 0`.
5. While `!queue.isEmpty()`:
   - Let `size = queue.size()`.
   - For `s` from `0` to `size - 1`:
     - Dequeue `curr`.
     - If `curr == target`, return `moves`.
     - For `dice` from `1` to `6`:
       - `next = curr + dice`.
       - If `next > target`, break.
       - Compute row and col `(r, c)` for `next`.
       - If `board[r][c] != -1`, `dest = board[r][c]`; otherwise `dest = next`.
       - If `!visited[dest]`:
         - `visited[dest] = true`.
         - Enqueue `dest`.
   - Increment `moves = moves + 1`.
6. If the queue becomes empty without reaching `target`, return `-1`.

## Code

```java
public static int solve(int[][] board) {
    if (board == null || board.length == 0) {
        return -1;
    }

    int n = board.length;
    int target = n * n;
    boolean[] visited = new boolean[target + 1];

    Queue<Integer> queue = new ArrayDeque<>();
    queue.offer(1);
    visited[1] = true;

    int moves = 0;

    while (!queue.isEmpty()) {
        int size = queue.size();
        for (int s = 0; s < size; s = s + 1) {
            int curr = queue.poll();
            if (curr == target) {
                return moves;
            }

            for (int dice = 1; dice <= 6; dice = dice + 1) {
                int next = curr + dice;
                if (next > target) {
                    break;
                }

                int[] pos = getCoordinates(next, n);
                int r = pos[0];
                int c = pos[1];

                int dest = board[r][c] != -1 ? board[r][c] : next;
                if (!visited[dest]) {
                    visited[dest] = true;
                    queue.offer(dest);
                }
            }
        }
        moves = moves + 1;
    }

    return -1;
}

private static int[] getCoordinates(int square, int n) {
    int rowFromBottom = (square - 1) / n;
    int r = n - 1 - rowFromBottom;
    int colRemainder = (square - 1) % n;
    int c = (rowFromBottom % 2 == 0) ? colRemainder : (n - 1 - colRemainder);
    return new int[]{r, c};
}
```
