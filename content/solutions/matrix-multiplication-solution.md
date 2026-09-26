---
title: "Matrix Multiplication - Solution"
problemUrl: "/problems/matrix-multiplication/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Matrix multiplication between matrix $A$ (dimension $r_1 \times c_1$) and matrix $B$ (dimension $r_2 \times c_2$) requires that the inner dimensions agree: $c_1 = r_2$.

The resulting matrix $C$ has dimensions $r_1 \times c_2$.

### Mathematical Formulation
Each element in the product matrix is the inner dot product of row $i$ of matrix $A$ with column $j$ of matrix $B$:
$$C[i][j] = \sum_{k=0}^{c_1-1} A[i][k] \cdot B[k][j]$$

### Algorithm Steps
1. **Dimension Compatibility**:
   - Check if $c_1 == r_2$. If not, return an empty matrix `new int[0][0]`.
2. **Allocation**:
   - Initialize product matrix $C$ with dimensions $r_1 \times c_2$.
3. **Triple Loop Traversal**:
   - Outer loop $i$ iterates through all rows of $A$ ($0 \le i < r_1$).
   - Middle loop $j$ iterates through all columns of $B$ ($0 \le j < c_2$).
   - Inner loop $k$ accumulates the dot product ($0 \le k < c_1$):
     $$C[i][j] = C[i][j] + A[i][k] \times B[k][j]$$
4. **Return Result**:
   - Return $C$.

### Complexity Analysis
- **Time Complexity**: $O(r_1 \times c_1 \times c_2)$, since each of the $r_1 \times c_2$ entries requires $c_1$ multiplication-addition steps.
- **Space Complexity**: $O(1)$ auxiliary memory (ignoring the output matrix of size $r_1 \times c_2$).

---

## Code

```java
public static int[][] solve(int[][] mat1, int[][] mat2) {
    if (mat1 == null || mat2 == null || mat1.length == 0 || mat2.length == 0) {
        return new int[0][0];
    }

    int r1 = mat1.length;
    int c1 = mat1[0].length;
    int r2 = mat2.length;
    int c2 = mat2[0].length;

    if (c1 != r2) {
        return new int[0][0];
    }

    int[][] result = new int[r1][c2];

    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            for (int k = 0; k < c1; k++) {
                result[i][j] = result[i][j] + mat1[i][k] * mat2[k][j];
            }
        }
    }

    return result;
}
```
