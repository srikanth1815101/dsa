---
title: "Inverted Mirrored Triangle - Solution"
problemUrl: "/problems/inverted-mirrored-triangle/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce an inverted mirrored right-angled triangle pattern of asterisks (`*`) of height `n`.

For any row `i` (from `1` to `n`):
- The row requires `i - 1` leading tab characters (`\t`) to indent the row from the left margin.
- After the leading indentation tabs, the row contains `n - i + 1` asterisks (`*`), with adjacent stars delimited by a tab (`\t`).
- Each row terminates with a newline character (`\n`) without trailing whitespace.
- A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the generated pattern characters.
2. Loop with variable `i` from `1` up to and including `n` to iterate through each row.
3. Compute the number of leading indentation tabs as `spaces = i - 1`, and the number of stars as `stars = n - i + 1`.
4. Run a loop from `1` to `spaces` and append a tab delimiter `\t` in each step.
5. Run a loop from `1` to `stars`: append `*`, and if the current star is not the last star in the row, append a tab delimiter `\t`.
6. Append a newline character `\n` at the completion of row `i`.
7. Once all rows are processed, return the accumulated string from the `StringBuilder`.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i = i + 1) {
        int spaces = i - 1;
        int stars = n - i + 1;
        for (int sp = 1; sp <= spaces; sp = sp + 1) {
            sb.append("\t");
        }
        for (int st = 1; st <= stars; st = st + 1) {
            sb.append("*");
            if (st < stars) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
