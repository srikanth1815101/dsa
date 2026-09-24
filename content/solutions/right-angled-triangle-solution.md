---
title: "Right Angled Triangle - Solution"
problemUrl: "/problems/right-angled-triangle/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The objective is to produce a right-angled triangle pattern with `n` rows. The row index `i` runs from `1` through `n`. For any given row `i`, the row must contain exactly `i` asterisks (`*`).

To ensure proper formatting:
- Adjacent stars in the same row are separated by a tab (`\t`).
- The last star in any row is immediately followed by a newline (`\n`), without any trailing tab or space.
- A `StringBuilder` accumulates the characters efficiently in `O(n^2)` time without unnecessary string allocations.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the generated pattern characters.
2. Run an outer loop with variable `i` starting from `1` up to and including `n` to represent each row.
3. Run an inner loop with variable `j` starting from `1` up to and including `i` to append the stars for row `i`.
4. In each inner iteration, append the character `*`. If `j` is strictly less than `i`, append a tab delimiter `\t`.
5. After completing the inner loop for row `i`, append a newline character `\n`.
6. Once the outer loop completes, convert the `StringBuilder` to a `String` and return it.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i = i + 1) {
        for (int j = 1; j <= i; j = j + 1) {
            sb.append("*");
            if (j < i) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
