---
title: "Set Matrix Zeroes - Solution"
problemUrl: "/problems/set-matrix-zeroes/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The naive approach creates auxiliary arrays or copies the matrix, requiring $O(m \times n)$ or $O(m + n)$ space. To achieve true $O(1)$ auxiliary space, we store row and column zero-markers inside the matrix itself.

### Using First Row & First Column as Storage
We use `mat[0][j]` to mark if column $j$ should be zeroed, and `mat[i][0]` to mark if row $i$ should be zeroed. Because `mat[0][0]` overlaps both row 0 and column 0, we reserve two dedicated boolean variables:
- `firstRowZero`: records whether row $0$ initially contains any zero.
- `firstColZero`: records whether column $0$ initially contains any zero.

### Algorithm Steps
1. **Record First Row & Column Status**:
   - Check if any cell in row $0$ is zero (`mat[0][j] == 0`).
   - Check if any cell in column $0$ is zero (`mat[i][0] == 0`).

2. **Mark Remaining Cells**:
   - For every $i \in [1, m - 1]$ and $j \in [1, n - 1]$:
     - If `mat[i][j] == 0`, mark its row header `mat[i][0] = 0` and column header `mat[0][j] = 0`.

3. **Apply Marks to Matrix Body**:
   - For every $i \in [1, m - 1]$ and $j \in [1, n - 1]$:
     - If `mat[i][0] == 0 || mat[0][j] == 0`, set `mat[i][j] = 0`.

4. **Zero First Row and Column if Needed**:
   - If `firstRowZero` is true, set all elements in row $0$ to $0$.
   - If `firstColZero` is true, set all elements in column $0$ to $0$.

### Complexity Analysis
- **Time Complexity**: $O(m \times n)$, requiring two linear passes over all matrix elements.
- **Space Complexity**: $O(1)$ auxiliary memory, operating completely in-place.

---

## Code

```java
public static int[][] solve(int[][] mat) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return mat;
    }

    int m = mat.length;
    int n = mat[0].length;

    boolean firstRowZero = false;
    boolean firstColZero = false;

    // Check if first row has any zeroes
    for (int j = 0; j < n; j++) {
        if (mat[0][j] == 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if first column has any zeroes
    for (int i = 0; i < m; i++) {
        if (mat[i][0] == 0) {
            firstColZero = true;
            break;
        }
    }

    // Use first row and column as marker storage
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (mat[i][j] == 0) {
                mat[i][0] = 0;
                mat[0][j] = 0;
            }
        }
    }

    // Zero out cells based on markers
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (mat[i][0] == 0 || mat[0][j] == 0) {
                mat[i][j] = 0;
            }
        }
    }

    // Zero out first row if needed
    if (firstRowZero) {
        for (int j = 0; j < n; j++) {
            mat[0][j] = 0;
        }
    }

    // Zero out first column if needed
    if (firstColZero) {
        for (int i = 0; i < m; i++) {
            mat[i][0] = 0;
        }
    }

    return mat;
}
```
