---
title: "Search in 2D Matrix - Solution"
problemUrl: "/problems/search-in-2d-matrix/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Because each row is sorted and the first element of row $i + 1$ is strictly greater than the last element of row $i$, the matrix elements strictly increase in row-major order:
$$\text{mat}[0][0] \le \text{mat}[0][1] \le \dots \le \text{mat}[0][n-1] < \text{mat}[1][0] \le \dots \le \text{mat}[m-1][n-1]$$

This allows us to view the $m \times n$ matrix as a flattened 1D sorted array of length $N = m \times n$.

### 1D to 2D Index Mapping
For any 1D index $k \in [0, m \times n - 1]$:
- Row index: $r = k / n$
- Column index: $c = k \% n$

### Binary Search Algorithm
1. Initialize search range `left = 0` and `right = m * n - 1`.
2. While `left <= right`:
   - Compute midpoint: `mid = left + (right - left) / 2`.
   - Access element: `midVal = mat[mid / n][mid % n]`.
   - If `midVal == target`, return `true`.
   - If `midVal < target`, narrow search to right half: `left = mid + 1`.
   - If `midVal > target`, narrow search to left half: `right = mid - 1`.
3. If loop finishes without finding `target`, return `false`.

### Complexity Analysis
- **Time Complexity**: $O(\log(m \times n))$, identical to a standard binary search over $m \times n$ elements.
- **Space Complexity**: $O(1)$, only tracking scalar boundary indices.

---

## Code

```java
public static boolean solve(int[][] mat, int target) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return false;
    }

    int m = mat.length;
    int n = mat[0].length;

    int left = 0;
    int right = m * n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        int row = mid / n;
        int col = mid % n;
        int midVal = mat[row][col];

        if (midVal == target) {
            return true;
        } else if (midVal < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}
```
