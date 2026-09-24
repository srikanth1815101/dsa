---
title: "Mirrored Right Triangle - Solution"
problemUrl: "/problems/mirrored-right-triangle/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce a right-aligned (mirrored) right-angled triangle pattern of asterisks (`*`) of height `n`.

For any row `i` (from `1` to `n`):
- The row requires `n - i` leading tab characters (`\t`) to achieve the rightward alignment.
- Following the leading tabs, the row contains `i` asterisks (`*`), with adjacent stars separated by a tab (`\t`).
- The row terminates with a newline character (`\n`) without trailing tabs.
- Using a `StringBuilder`, the whole pattern is constructed efficiently in `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the pattern characters.
2. Loop with variable `i` from `1` up to and including `n` to iterate through each row.
3. Compute the number of leading indentation tabs as `spaces = n - i`.
4. Run a loop from `1` to `spaces` and append a tab character `\t` in each iteration.
5. Run a loop from `1` to `i` to append stars: append `*`, and if the current star is not the last star in the row, append a tab delimiter `\t`.
6. Append a newline character `\n` at the conclusion of row `i`.
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
        for (int st = 1; st <= i; st = st + 1) {
            sb.append("*");
            if (st < i) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
