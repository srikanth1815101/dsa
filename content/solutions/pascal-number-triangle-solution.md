---
title: "Pascal Number Triangle - Solution"
problemUrl: "/problems/pascal-number-triangle/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Pascal's Triangle represents binomial coefficients $\binom{i}{k}$, where $i$ denotes the 0-indexed row number ($0 \le i < n$) and $k$ denotes the 0-indexed column position ($0 \le k \le i$).

Each term can be computed directly from the previous term in $O(1)$ time without computing full factorials using the recurrence relation:

$$\binom{i}{k} = \binom{i}{k - 1} \times \frac{i - k + 1}{k}$$

Starting with $\binom{i}{0} = 1$, each consecutive term for $k = 1, 2, \dots, i$ is derived using 64-bit integer arithmetic to prevent intermediate multiplication overflow:

$$\text{val} = \frac{\text{val} \times (i - k + 1)}{k}$$

Values on the same row are separated by a tab (`\t`), and the row ends with a newline (`\n`) without trailing tabs. Using a `StringBuilder` ensures optimal $O(n^2)$ time and $O(n^2)$ space complexity.

### Step-by-Step Algorithm:
1. Check if `n <= 0`. If true, return an empty string.
2. Initialize a `StringBuilder` to accumulate output characters.
3. Loop 0-indexed row index `i` from `0` to `n - 1`.
4. Initialize 64-bit variable `val = 1`.
5. Loop 0-indexed column index `k` from `0` to `i`.
6. Append `val` to the `StringBuilder`.
7. Update `val = val * (i - k) / (k + 1)` for the next column.
8. If `k < i`, append a tab separator `"\t"`.
9. After completing row `i`, append a newline `"\n"`.
10. Convert the `StringBuilder` to a `String` and return the result.

## Code

```java
public static String solve(int n) {
    if (n <= 0) {
        return "";
    }
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < n; i = i + 1) {
        long val = 1;
        for (int k = 0; k <= i; k = k + 1) {
            sb.append(val);
            val = val * (i - k) / (k + 1);
            if (k < i) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
