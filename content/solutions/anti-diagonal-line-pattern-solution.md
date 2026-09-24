---
title: "Anti-Diagonal Line Pattern - Solution"
problemUrl: "/problems/anti-diagonal-line-pattern/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce a counter-diagonal (anti-diagonal) line of asterisks (`*`) extending from the top-right to the bottom-left corner across `n` rows.

In a 1-indexed `n x n` matrix, the secondary diagonal comprises elements where `i + j = n + 1`, meaning the column index for row `i` is `j = n - i + 1`. Therefore, for each row `i`:
- Exactly `n - i` tab characters (`\t`) precede the asterisk.
- Exactly one asterisk (`*`) is placed at column `n - i + 1`.
- The row terminates immediately with a newline character (`\n`) without trailing whitespace.
- A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the generated pattern characters.
2. Run an outer loop with variable `i` starting from `1` up to and including `n` to iterate through each row.
3. Compute the number of leading indentation tabs as `spaces = n - i`.
4. Run a loop from `1` to `spaces` and append a tab character `\t` in each step.
5. Append a single asterisk `*`.
6. Append a newline character `\n` to end the current row.
7. Once all rows are processed, return the accumulated string from the `StringBuilder`.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i = i + 1) {
        int spaces = n - i;
        for (int sp = 1; sp <= spaces; sp = sp + 1) {
            sb.append("\t");
        }
        sb.append("*");
        sb.append("\n");
    }
    return sb.toString();
}
```
