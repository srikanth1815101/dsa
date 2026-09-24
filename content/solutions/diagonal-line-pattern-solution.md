---
title: "Diagonal Line Pattern - Solution"
problemUrl: "/problems/diagonal-line-pattern/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce a leading diagonal line of asterisks (`*`) extending from the top-left to the bottom-right corner across `n` rows.

In a 1-indexed `n x n` grid, the principal diagonal consists of cells where the row index `i` equals the column index `j`. Therefore, on row `i`:
- Exactly `i - 1` tab characters (`\t`) precede the asterisk.
- Exactly one asterisk (`*`) is placed at column `i`.
- The row terminates immediately with a newline character (`\n`) without trailing tabs.
- A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the generated pattern characters.
2. Run an outer loop with variable `i` starting from `1` up to and including `n` to iterate through each row.
3. Compute the number of leading indentation tabs as `spaces = i - 1`.
4. Run a loop from `1` to `spaces` and append a tab character `\t` in each step.
5. Append a single asterisk `*`.
6. Append a newline character `\n` to end the current row.
7. Once all rows are processed, return the accumulated string from the `StringBuilder`.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i = i + 1) {
        int spaces = i - 1;
        for (int sp = 1; sp <= spaces; sp = sp + 1) {
            sb.append("\t");
        }
        sb.append("*");
        sb.append("\n");
    }
    return sb.toString();
}
```
