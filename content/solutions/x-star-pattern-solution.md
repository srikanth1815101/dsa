---
title: "X Star Pattern - Solution"
problemUrl: "/problems/x-star-pattern/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce an `X` pattern of asterisks (`*`) across `n` rows and `n` columns, where `n` is an odd integer.

The pattern is formed by two intersecting diagonal lines:
- The main diagonal satisfies `i == j`.
- The anti-diagonal satisfies `i + j == n + 1`.

For any row `i`:
- The rightmost star appears at `lastCol = Math.max(i, n - i + 1)`.
- For columns `j` from `1` up to `lastCol - 1`: if position `(i, j)` is on either diagonal, append `*\t`; otherwise append `\t`.
- At column `lastCol`, append a single `*` without a trailing tab.
- At row `(n / 2) + 1` (the exact center), both diagonals meet at the same column, resulting in a single asterisk.
- A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the generated pattern characters.
2. Run an outer loop with variable `i` from `1` up to and including `n` to iterate through each row.
3. Determine the rightmost star column for row `i` as `lastCol = Math.max(i, n - i + 1)`.
4. Run an inner loop with variable `j` from `1` up to `lastCol - 1`: if `i == j` or `i + j == n + 1`, append `*\t`; otherwise append `\t`.
5. At column `lastCol`, append a single asterisk `*`.
6. Append a newline character `\n` to conclude row `i`.
7. Once all rows are processed, return the accumulated string from the `StringBuilder`.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i = i + 1) {
        int lastCol = Math.max(i, n - i + 1);
        for (int j = 1; j < lastCol; j = j + 1) {
            if (i == j || i + j == n + 1) {
                sb.append("*\t");
            } else {
                sb.append("\t");
            }
        }
        sb.append("*");
        sb.append("\n");
    }
    return sb.toString();
}
```
