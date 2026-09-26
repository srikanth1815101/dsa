---
title: "Exit Point of Matrix - Solution"
problemUrl: "/problems/exit-point-of-matrix/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks us to simulate the trajectory of a ray or particle travelling through a 2D binary grid.

### Direction Modeling
We represent the four cardinal directions as integers from $0$ to $3$:
- `0` $\to$ **East** (row change $0$, col change $+1$)
- `1` $\to$ **South** (row change $+1$, col change $0$)
- `2` $\to$ **West** (row change $0$, col change $-1$)
- `3` $\to$ **North** (row change $-1$, col change $0$)

Turning 90 degrees clockwise corresponds to:
$$\text{dir} = (\text{dir} + 1) \pmod 4$$

### Step-by-Step Simulation
1. Initialize position `i = 0`, `j = 0` and direction `dir = 0`.
2. At current cell `(i, j)`:
   - If `mat[i][j] == 1`:
     - Update direction: `dir = (dir + 1) % 4`.
     - Set `mat[i][j] = 0` to prevent redundant turns.
   - Compute proposed next coordinates:
     - `nextI = i + dr[dir]`
     - `nextJ = j + dc[dir]`
   - Boundary Check:
     - If `nextI < 0 || nextI >= r || nextJ < 0 || nextJ >= c`, the particle has exited the matrix.
     - Return the current coordinates `new int[]{i, j}`.
   - Otherwise, advance position:
     - `i = nextI`
     - `j = nextJ`

### Complexity Analysis
- **Time Complexity**: $O(r \times c)$, since each cell can have its `1` turned to `0` at most once, preventing infinite cycles.
- **Space Complexity**: $O(1)$, only constant coordinate and direction tracking variables are used.

---

## Code

```java
public static int[] solve(int[][] mat) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return new int[]{0, 0};
    }

    int r = mat.length;
    int c = mat[0].length;

    int[] dr = {0, 1, 0, -1};
    int[] dc = {1, 0, -1, 0};

    int i = 0;
    int j = 0;
    int dir = 0;

    while (true) {
        if (mat[i][j] == 1) {
            dir = (dir + 1) % 4;
            mat[i][j] = 0;
        }

        int nextI = i + dr[dir];
        int nextJ = j + dc[dir];

        if (nextI < 0 || nextI >= r || nextJ < 0 || nextJ >= c) {
            return new int[]{i, j};
        }

        i = nextI;
        j = nextJ;
    }
}
```
