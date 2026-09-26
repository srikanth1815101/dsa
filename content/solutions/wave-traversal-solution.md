---
title: "Wave Traversal - Solution"
problemUrl: "/problems/wave-traversal/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Wave traversal visits a matrix column-by-column, alternating the vertical direction for consecutive columns:

1. **Outer Column Loop**:
   - Loop through each column $j$ from $0$ to $c - 1$.

2. **Direction Determination**:
   - If $j$ is **even** ($j \% 2 == 0$):
     - Traverse rows from top to bottom: $i = 0$ to $r - 1$.
   - If $j$ is **odd** ($j \% 2 \ne 0$):
     - Traverse rows from bottom to top: $i = r - 1$ down to $0$.

3. **Output Accumulation**:
   - Append `mat[i][j]` into the result array at index `idx`.
   - Increment `idx = idx + 1`.

### Complexity Analysis
- **Time Complexity**: $O(r \times c)$, visiting every cell in the matrix exactly once.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output array of size $r \times c$).

---

## Code

```java
public static int[] solve(int[][] mat) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return new int[0];
    }

    int r = mat.length;
    int c = mat[0].length;
    int[] result = new int[r * c];
    int idx = 0;

    for (int j = 0; j < c; j++) {
        if (j % 2 == 0) {
            for (int i = 0; i < r; i++) {
                result[idx] = mat[i][j];
                idx = idx + 1;
            }
        } else {
            for (int i = r - 1; i >= 0; i--) {
                result[idx] = mat[i][j];
                idx = idx + 1;
            }
        }
    }

    return result;
}
```
