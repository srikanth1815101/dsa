---
title: "Hollow Rhombus Pattern - Solution"
problemUrl: "/problems/hollow-rhombus-pattern/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce a hollow diamond (rhombus outline) pattern of asterisks (`*`) across `n` rows for an odd integer `n`.

In each row `i`:
- The central column is `mid = (n / 2) + 1`.
- The horizontal offset from the center is `dist = (i <= mid) ? (i - 1) : (n - i)`.
- The left boundary star is at `col1 = mid - dist`.
- The right boundary star is at `col2 = mid + dist`.
- If `col1 == col2` (apex rows), only a single asterisk is rendered at `col1`.
- Otherwise, the row prints `col1 - 1` leading tabs, the first star, `col2 - col1` inner tabs, and the second star.
- A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the pattern characters.
2. Calculate the middle column index as `mid = (n / 2) + 1`.
3. Run an outer loop with variable `i` from `1` up to and including `n` to iterate through each row.
4. Calculate the distance from center as `dist = (i <= mid) ? (i - 1) : (n - i)`.
5. Compute the boundary columns: `col1 = mid - dist` and `col2 = mid + dist`.
6. Append `col1 - 1` leading tabs (`\t`), then append a star `*`.
7. If `col1 != col2`, append `col2 - col1` tabs (`\t`) followed by the second star `*`.
8. Append a newline character `\n` to conclude row `i`.
9. Once all rows are processed, return the accumulated string from the `StringBuilder`.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    int mid = (n / 2) + 1;
    for (int i = 1; i <= n; i = i + 1) {
        int dist = (i <= mid) ? (i - 1) : (n - i);
        int col1 = mid - dist;
        int col2 = mid + dist;
        for (int sp = 1; sp < col1; sp = sp + 1) {
            sb.append("\t");
        }
        sb.append("*");
        if (col1 != col2) {
            for (int sp = 1; sp <= col2 - col1; sp = sp + 1) {
                sb.append("\t");
            }
            sb.append("*");
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
