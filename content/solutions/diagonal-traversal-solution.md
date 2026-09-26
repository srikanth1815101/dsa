---
title: "Diagonal Traversal - Solution"
problemUrl: "/problems/diagonal-traversal/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Every anti-diagonal line in an $m \times n$ matrix is defined by a constant sum $d = r + c$, where:
$$0 \le d \le m + n - 2$$

For each diagonal $d$:
1. **Even Diagonals ($d \% 2 == 0$) — Upward Traversal**:
   - The traversal moves upwards: row $r$ decreases while column $c$ increases.
   - The starting row must satisfy $r \le m - 1$ and $c = d - r \ge 0$, which implies $r \le d$. Thus:
     $$r_{\text{start}} = \min(d, m - 1)$$
   - The ending row must satisfy $c = d - r < n$, so $r \ge d - n + 1$. Thus:
     $$r_{\text{end}} = \max(0, d - n + 1)$$
   - Decrement $r$ from $r_{\text{start}}$ down to $r_{\text{end}}$, recording `mat[r][d - r]`.

2. **Odd Diagonals ($d \% 2 \ne 0$) — Downward Traversal**:
   - The traversal moves downwards: row $r$ increases while column $c$ decreases.
   - The starting row must satisfy $r \ge 0$ and $c = d - r < n$, so $r \ge d - n + 1$. Thus:
     $$r_{\text{start}} = \max(0, d - n + 1)$$
   - The ending row must satisfy $r \le m - 1$ and $d - r \ge 0$. Thus:
     $$r_{\text{end}} = \min(d, m - 1)$$
   - Increment $r$ from $r_{\text{start}}$ up to $r_{\text{end}}$, recording `mat[r][d - r]`.

### Complexity Analysis
- **Time Complexity**: $O(m \times n)$, every matrix cell is visited exactly once.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output array of size $m \times n$).

---

## Code

```java
public static int[] solve(int[][] mat) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return new int[0];
    }

    int m = mat.length;
    int n = mat[0].length;
    int[] result = new int[m * n];
    int idx = 0;

    int totalDiagonals = m + n - 1;

    for (int d = 0; d < totalDiagonals; d++) {
        if (d % 2 == 0) {
            // Upward direction: r decreases from min(d, m - 1) to max(0, d - n + 1)
            int rStart = d < m - 1 ? d : m - 1;
            int rEnd = d - n + 1 > 0 ? d - n + 1 : 0;
            for (int r = rStart; r >= rEnd; r--) {
                result[idx] = mat[r][d - r];
                idx = idx + 1;
            }
        } else {
            // Downward direction: r increases from max(0, d - n + 1) to min(d, m - 1)
            int rStart = d - n + 1 > 0 ? d - n + 1 : 0;
            int rEnd = d < m - 1 ? d : m - 1;
            for (int r = rStart; r <= rEnd; r++) {
                result[idx] = mat[r][d - r];
                idx = idx + 1;
            }
        }
    }

    return result;
}
```
