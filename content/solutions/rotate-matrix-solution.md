---
title: "Rotate Matrix - Solution"
problemUrl: "/problems/rotate-matrix/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Rotating an $n \times n$ matrix clockwise by 90 degrees transforms cell coordinate $(i, j)$ to $(j, n - 1 - i)$.

Direct in-place rotation can be decomposed into two clean geometric steps:

1. **Matrix Transpose**:
   - Reflect the matrix across its main diagonal: swap each element at $(i, j)$ with $(j, i)$ for all $i < j$.
   - This transforms $(i, j)$ into $(j, i)$.

2. **Horizontal Row Reversal**:
   - Reverse the elements of every row horizontally: swap $(j, k)$ with $(j, n - 1 - k)$.
   - This transforms $(j, i)$ into $(j, n - 1 - i)$, which matches the desired 90-degree clockwise rotation.

Both operations modify the array in-place, achieving optimal $O(1)$ auxiliary space complexity.

### Complexity Analysis
- **Time Complexity**: $O(n^2)$, visiting each element of the $n \times n$ matrix a constant number of times.
- **Space Complexity**: $O(1)$, performing swaps entirely in-place with a single scalar temporary variable.

---

## Code

```java
public static int[][] solve(int[][] mat) {
    if (mat == null || mat.length <= 1) {
        return mat;
    }

    int n = mat.length;

    // Step 1: Transpose matrix (swap mat[i][j] with mat[j][i])
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    // Step 2: Reverse each row
    for (int i = 0; i < n; i++) {
        int left = 0;
        int right = n - 1;
        while (left < right) {
            int temp = mat[i][left];
            mat[i][left] = mat[i][right];
            mat[i][right] = temp;
            left = left + 1;
            right = right - 1;
        }
    }

    return mat;
}
```
