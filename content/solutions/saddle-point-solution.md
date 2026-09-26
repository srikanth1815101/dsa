---
title: "Saddle Point - Solution"
problemUrl: "/problems/saddle-point/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A saddle point is an element that is the minimum of its row and the maximum of its column.

### Algorithm Steps
1. **Iterate Through Each Row**:
   - For row $i \in [0, r - 1]$:
     - Scan across all columns $j \in [0, c - 1]$ to find the column index `colMin` of the minimum element in row $i$.
2. **Column Maximum Check**:
   - Check if the candidate `mat[i][colMin]` is the maximum element in column `colMin`.
   - Traverse all rows $k \in [0, r - 1]$:
     - If `mat[k][colMin] > mat[i][colMin]`, then `mat[i][colMin]` cannot be the column maximum; break out of the check.
3. **Early Exit**:
   - If `mat[i][colMin]` is greater than or equal to all elements in column `colMin`, it is a valid saddle point. Return `mat[i][colMin]`.
4. **Fallback**:
   - If all rows have been evaluated without finding a saddle point, return `-1`.

### Complexity Analysis
- **Time Complexity**: $O(r \times (c + r))$. Finding row minimums takes $O(c)$ per row, and verifying the column takes $O(r)$ per row, leading to $O(r \cdot c + r^2)$ overall time.
- **Space Complexity**: $O(1)$, using only scalar index and loop variables.

---

## Code

```java
public static int solve(int[][] mat) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return -1;
    }

    int r = mat.length;
    int c = mat[0].length;

    for (int i = 0; i < r; i++) {
        // Step 1: Find column of minimum element in row i
        int colMin = 0;
        for (int j = 1; j < c; j++) {
            if (mat[i][j] < mat[i][colMin]) {
                colMin = j;
            }
        }

        // Step 2: Verify if mat[i][colMin] is maximum in column colMin
        boolean isSaddle = true;
        for (int k = 0; k < r; k++) {
            if (mat[k][colMin] > mat[i][colMin]) {
                isSaddle = false;
                break;
            }
        }

        if (isSaddle) {
            return mat[i][colMin];
        }
    }

    return -1;
}
```
