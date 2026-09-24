---
title: "Diamond Star Pattern - Solution"
problemUrl: "/problems/diamond-star-pattern/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce a symmetrical diamond star pattern of height `n`, where `n` is an odd integer.

The pattern has two distinct phases:
- It begins at row `1` with `n / 2` leading tabs and `1` star.
- Up to the midpoint row `(n / 2) + 1`, each consecutive row reduces its leading tabs by `1` and increases its star count by `2`.
- After passing the midpoint row, the trend reverses: leading tabs increase by `1` and the star count decreases by `2` until reaching the final row.
- Inside each row, stars are separated by a tab (`\t`), and the row terminates with a newline (`\n`).
- A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the generated pattern characters.
2. Initialize variable `spaces = n / 2` for leading indentation tabs, and variable `stars = 1` for the star count.
3. Run an outer loop with variable `i` from `1` up to and including `n` to iterate through each row.
4. Run a loop from `1` to `spaces` and append a tab character `\t` in each step.
5. Run a loop from `1` to `stars`: append `*`, and if the current star is not the last star in the row, append a tab delimiter `\t`.
6. Append a newline character `\n` at the completion of row `i`.
7. Update `spaces` and `stars`: if `i <= n / 2`, set `spaces = spaces - 1` and `stars = stars + 2`; otherwise set `spaces = spaces + 1` and `stars = stars - 2`.
8. Once all rows are processed, return the accumulated string from the `StringBuilder`.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    int spaces = n / 2;
    int stars = 1;
    for (int i = 1; i <= n; i = i + 1) {
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
        if (i <= n / 2) {
            spaces = spaces - 1;
            stars = stars + 2;
        } else {
            spaces = spaces + 1;
            stars = stars - 2;
        }
    }
    return sb.toString();
}
```
