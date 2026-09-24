---
title: "Hollow Diamond Pattern - Solution"
problemUrl: "/problems/hollow-diamond-pattern/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce a hollow diamond pattern of asterisks (`*`) surrounded by outer star blocks, across `n` rows for an odd integer `n`.

Each row is segmented into three components:
- Left block of stars: `stars` count.
- Central hollow aperture: `spaces` count of tab characters (`\t`).
- Right block of stars: `stars` count.

Starting values are `stars = n / 2 + 1` and `spaces = 1`. In the top half of the diamond (up to row `n / 2`), `stars` decreases by `1` and `spaces` increases by `2`. In the bottom half, `stars` increases by `1` and `spaces` decreases by `2`.
A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the pattern characters.
2. Initialize variable `stars = n / 2 + 1` and variable `spaces = 1`.
3. Loop with variable `i` from `1` up to and including `n` to iterate through each row.
4. Append `stars` stars on the left, with each star followed by a tab `\t`.
5. Append `spaces` tabs for the central gap.
6. Append `stars` stars on the right: append each `*`, and if it is not the last star in the row, append a tab `\t`.
7. Append a newline character `\n` at the end of the row.
8. If `i <= n / 2`, update `stars = stars - 1` and `spaces = spaces + 2`; otherwise update `stars = stars + 1` and `spaces = spaces - 2`.
9. Once all rows are processed, return the accumulated string from the `StringBuilder`.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    int stars = n / 2 + 1;
    int spaces = 1;
    for (int i = 1; i <= n; i = i + 1) {
        for (int j = 1; j <= stars; j = j + 1) {
            sb.append("*");
            sb.append("\t");
        }
        for (int j = 1; j <= spaces; j = j + 1) {
            sb.append("\t");
        }
        for (int j = 1; j <= stars; j = j + 1) {
            sb.append("*");
            if (j < stars) {
                sb.append("\t");
            }
        }
        sb.append("\n");
        if (i <= n / 2) {
            stars = stars - 1;
            spaces = spaces + 2;
        } else {
            stars = stars + 1;
            spaces = spaces - 2;
        }
    }
    return sb.toString();
}
```
