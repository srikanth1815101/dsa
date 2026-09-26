---
title: "Search in Sorted 2D Matrix - Solution"
problemUrl: "/problems/search-in-sorted-2d-matrix/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A naive scan examines all $m \times n$ cells in $O(m \times n)$ time. We can do much better by leveraging the 2D sorted invariant using the **Staircase Search algorithm**.

### Key Observation
If we stand at the **top-right corner** `(0, n - 1)`:
- All elements to its **left** are strictly smaller (because rows are sorted ascendingly).
- All elements **below** it are strictly larger (because columns are sorted ascendingly).

This asymmetry gives us a clear decision boundary at every step:
1. If `mat[i][j] == target`: Target found, return `true`.
2. If `mat[i][j] > target`:
   - Since every element in column $j$ below row $i$ is even larger than `mat[i][j]`, target cannot possibly exist in column $j$.
   - Eliminate column $j$: move left by setting `j = j - 1`.
3. If `mat[i][j] < target`:
   - Since every element in row $i$ to the left of column $j$ is even smaller than `mat[i][j]`, target cannot possibly exist in row $i$.
   - Eliminate row $i$: move down by setting `i = i + 1`.

If the indices step out of bounds ($i \ge m$ or $j < 0$), the target is not present in the matrix. Return `false`.

### Complexity Analysis
- **Time Complexity**: $O(m + n)$. In the worst case, we make at most $m$ downward moves and $n$ leftward moves before terminating.
- **Space Complexity**: $O(1)$, requiring only two pointer indices.

---

## Code

```java
public static boolean solve(int[][] mat, int target) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return false;
    }

    int m = mat.length;
    int n = mat[0].length;

    int i = 0;
    int j = n - 1;

    while (i < m && j >= 0) {
        if (mat[i][j] == target) {
            return true;
        } else if (mat[i][j] > target) {
            j = j - 1;
        } else {
            i = i + 1;
        }
    }

    return false;
}
```
