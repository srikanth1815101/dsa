---
title: "Spiral Traversal - Solution"
problemUrl: "/problems/spiral-traversal/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Clockwise spiral traversal traces the rectangular boundaries of the matrix from the outermost shell inward.

### Boundary Pointers
We initialize four boundaries:
- `top = 0`
- `bottom = m - 1`
- `left = 0`
- `right = n - 1`

### Simulation Steps
While `top <= bottom` and `left <= right`:
1. **Traverse Top Row**:
   - Move from `left` to `right` along row `top`.
   - Increment `top = top + 1`.
2. **Traverse Right Column**:
   - Move from `top` to `bottom` along column `right`.
   - Decrement `right = right - 1`.
3. **Traverse Bottom Row**:
   - Check if `top <= bottom` (to avoid re-visiting rows in single-row segments).
   - Move from `right` down to `left` along row `bottom`.
   - Decrement `bottom = bottom - 1`.
4. **Traverse Left Column**:
   - Check if `left <= right` (to avoid re-visiting columns in single-column segments).
   - Move from `bottom` down to `top` along column `left`.
   - Increment `left = left + 1`.

### Complexity Analysis
- **Time Complexity**: $O(m \times n)$, each element is processed and placed into the result array exactly once.
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

    int top = 0;
    int bottom = m - 1;
    int left = 0;
    int right = n - 1;

    while (top <= bottom && left <= right) {
        for (int c = left; c <= right; c++) {
            result[idx] = mat[top][c];
            idx = idx + 1;
        }
        top = top + 1;

        for (int r = top; r <= bottom; r++) {
            result[idx] = mat[r][right];
            idx = idx + 1;
        }
        right = right - 1;

        if (top <= bottom) {
            for (int c = right; c >= left; c--) {
                result[idx] = mat[bottom][c];
                idx = idx + 1;
            }
            bottom = bottom - 1;
        }

        if (left <= right) {
            for (int r = bottom; r >= top; r--) {
                result[idx] = mat[r][left];
                idx = idx + 1;
            }
            left = left + 1;
        }
    }

    return result;
}
```
