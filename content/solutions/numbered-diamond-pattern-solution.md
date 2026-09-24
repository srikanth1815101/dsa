---
title: "Numbered Diamond Pattern - Solution"
problemUrl: "/problems/numbered-diamond-pattern/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Numbered Diamond Pattern displays a concentric numeric diamond over an odd number of rows `n`.

Let the middle row index be:

$$\text{mid} = \frac{n}{2} + 1$$

For each row `i` (from `1` to `n`), the effective radius `r` of the row is:

$$r = \begin{cases} i & \text{if } i \le \text{mid} \\ n - i + 1 & \text{if } i > \text{mid} \end{cases}$$

For a given radius `r`:
1. The row has $(\text{mid} - r)$ leading tab spaces.
2. The row contains $2r - 1$ values.
3. The values start at $r$, increase by $1$ until reaching the row apex $2r - 1$, and then decrease by $1$ back down to $r$.
4. Adjacent values in the row are separated by a tab (`\t`), and the row terminates with a newline (`\n`).

Since the total number of characters generated across $n$ rows is proportional to $n^2$, using a `StringBuilder` yields optimal $O(n^2)$ time complexity and $O(n^2)$ space complexity.

### Step-by-Step Algorithm:
1. Validate input `n`. If `n <= 0` or `n % 2 == 0`, return an empty string.
2. Initialize a `StringBuilder` to collect the pattern.
3. Compute `mid = n / 2 + 1`.
4. Loop through row index `i` from `1` to `n`.
5. Compute `r = (i <= mid) ? i : (n - i + 1)`.
6. Append `(mid - r)` leading tab characters `"\t"`.
7. Initialize a value variable `val = r`.
8. Loop a column counter `j` from `1` to `2 * r - 1`.
9. Append `val` to the `StringBuilder`.
10. If `j < r`, update `val = val + 1`. Otherwise, update `val = val - 1`.
11. If `j < 2 * r - 1`, append a tab delimiter `"\t"`.
12. After the column loop, append a newline `"\n"`.
13. Convert the `StringBuilder` to a `String` and return it.

## Code

```java
public static String solve(int n) {
    if (n <= 0 || n % 2 == 0) {
        return "";
    }
    StringBuilder sb = new StringBuilder();
    int mid = (n / 2) + 1;
    for (int i = 1; i <= n; i = i + 1) {
        int r = (i <= mid) ? i : (n - i + 1);
        for (int sp = 1; sp <= mid - r; sp = sp + 1) {
            sb.append("\t");
        }
        int val = r;
        int count = 2 * r - 1;
        for (int j = 1; j <= count; j = j + 1) {
            sb.append(val);
            if (j < r) {
                val = val + 1;
            } else {
                val = val - 1;
            }
            if (j < count) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
