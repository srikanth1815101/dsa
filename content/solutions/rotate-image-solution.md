---
title: "Rotate Image - Solution"
problemUrl: "/problems/rotate-image/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Rotating an $n \times n$ matrix 90 degrees counter-clockwise maps coordinate $(i, j)$ to $(n - 1 - j, i)$.

This geometric rotation can be performed in-place using two linear operations:

1. **Matrix Transpose**:
   - Swap `mat[i][j]` with `mat[j][i]` for all $i < j$.
   - This maps cell $(i, j)$ to $(j, i)$.

2. **Vertical Column Reversal**:
   - Reverse each column vertically: swap `mat[top][j]` with `mat[bottom][j]` for all $j \in [0, n - 1]$.
   - This maps cell $(j, i)$ to $(n - 1 - j, i)$, completing the 90-degree counter-clockwise rotation.

### Complexity Analysis
- **Time Complexity**: $O(n^2)$, visiting each element of the $n \times n$ matrix twice (once during transpose and once during vertical column reversal).
- **Space Complexity**: $O(1)$ auxiliary space, performing in-place variable swaps.

---

## Code

```java
public static int[][] solve(int[][] mat) {
    if (mat == null || mat.length <= 1) {
        return mat;
    }

    int n = mat.length;

    // Step 1: Transpose matrix
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    // Step 2: Reverse each column vertically
    for (int j = 0; j < n; j++) {
        int top = 0;
        int bottom = n - 1;
        while (top < bottom) {
            int temp = mat[top][j];
            mat[top][j] = mat[bottom][j];
            mat[bottom][j] = temp;
            top = top + 1;
            bottom = bottom - 1;
        }
    }

    return mat;
}
```
