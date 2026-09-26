---
title: "Shell Rotate - Solution"
problemUrl: "/problems/shell-rotate/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The rotation of a 2D matrix shell can be solved by reducing it to a 1D array rotation:

### 1. Extract Shell to 1D Array
For shell $s$ (1-indexed):
- `minr = s - 1`, `minc = s - 1`
- `maxr = n - s`, `maxc = m - s`
- Number of elements in the shell:
  $$\text{sz} = 2 \times (\text{maxr} - \text{minr} + 1) + 2 \times (\text{maxc} - \text{minc} + 1) - 4$$

We collect elements into array `oneD` of length `sz` in 4 segments:
1. **Left wall**: `(i, minc)` for $i$ from `minr` to `maxr`.
2. **Bottom wall**: `(maxr, j)` for $j$ from `minc + 1` to `maxc`.
3. **Right wall**: `(i, maxc)` for $i$ from `maxr - 1` down to `minr`.
4. **Top wall**: `(minr, j)` for $j$ from `maxc - 1` down to `minc + 1`.

### 2. Rotate the 1D Array
To rotate `oneD` by `r` positions:
- Normalize $r$:
  $$r = ((r \pmod{\text{sz}}) + \text{sz}) \pmod{\text{sz}}$$
- Use the 3-reversal algorithm:
  - Reverse subarray from index $0$ to $\text{sz} - 1 - r$.
  - Reverse subarray from index $\text{sz} - r$ to $\text{sz} - 1$.
  - Reverse the entire array from index $0$ to $\text{sz} - 1$.

### 3. Fill the Rotated Elements Back
Iterate through the 4 walls in the exact same sequence and copy elements from `oneD` back into `mat`.

### Complexity Analysis
- **Time Complexity**: $O(m + n)$, as the perimeter of any shell contains at most $2(m + n)$ cells.
- **Space Complexity**: $O(m + n)$, auxiliary buffer for the 1D shell array.

---

## Code

```java
public static int[][] solve(int[][] mat, int s, int r) {
    if (mat == null || mat.length == 0) {
        return mat;
    }

    int[] oneD = extractShell(mat, s);
    rotate(oneD, r);
    fillShell(mat, s, oneD);

    return mat;
}

private static int[] extractShell(int[][] mat, int s) {
    int n = mat.length;
    int m = mat[0].length;
    int minr = s - 1;
    int minc = s - 1;
    int maxr = n - s;
    int maxc = m - s;

    int sz = 2 * (maxr - minr + 1) + 2 * (maxc - minc + 1) - 4;
    int[] oneD = new int[sz];
    int idx = 0;

    // Left wall
    for (int i = minr; i <= maxr; i++) {
        oneD[idx] = mat[i][minc];
        idx = idx + 1;
    }
    // Bottom wall
    for (int j = minc + 1; j <= maxc; j++) {
        oneD[idx] = mat[maxr][j];
        idx = idx + 1;
    }
    // Right wall
    for (int i = maxr - 1; i >= minr; i--) {
        oneD[idx] = mat[i][maxc];
        idx = idx + 1;
    }
    // Top wall
    for (int j = maxc - 1; j >= minc + 1; j--) {
        oneD[idx] = mat[minr][j];
        idx = idx + 1;
    }

    return oneD;
}

private static void rotate(int[] a, int r) {
    int n = a.length;
    if (n <= 1) {
        return;
    }
    r = ((r % n) + n) % n;
    reverse(a, 0, n - 1 - r);
    reverse(a, n - r, n - 1);
    reverse(a, 0, n - 1);
}

private static void reverse(int[] a, int left, int right) {
    while (left < right) {
        int temp = a[left];
        a[left] = a[right];
        a[right] = temp;
        left = left + 1;
        right = right - 1;
    }
}

private static void fillShell(int[][] mat, int s, int[] oneD) {
    int n = mat.length;
    int m = mat[0].length;
    int minr = s - 1;
    int minc = s - 1;
    int maxr = n - s;
    int maxc = m - s;

    int idx = 0;

    // Left wall
    for (int i = minr; i <= maxr; i++) {
        mat[i][minc] = oneD[idx];
        idx = idx + 1;
    }
    // Bottom wall
    for (int j = minc + 1; j <= maxc; j++) {
        mat[maxr][j] = oneD[idx];
        idx = idx + 1;
    }
    // Right wall
    for (int i = maxr - 1; i >= minr; i--) {
        mat[i][maxc] = oneD[idx];
        idx = idx + 1;
    }
    // Top wall
    for (int j = maxc - 1; j >= minc + 1; j--) {
        mat[minr][j] = oneD[idx];
        idx = idx + 1;
    }
}
```
