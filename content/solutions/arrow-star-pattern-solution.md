---
title: "Arrow Star Pattern - Solution"
problemUrl: "/problems/arrow-star-pattern/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Arrow Star Pattern produces a rightward-pointing arrow across `n` rows, where `n` is an odd integer with middle row:

$$\text{mid} = \frac{n}{2} + 1$$

The structure consists of two distinct components:
1. **Shaft & Tip (Middle Row $i = \text{mid}$)**: Spans all $n$ columns from left to right, containing $n$ stars separated by tabs (`\t`) with no leading tabs.
2. **Arrowhead Barbs ($i \ne \text{mid}$)**: Begins after $(\text{mid} - 1)$ leading tabs. The number of stars $k$ is symmetrical about the middle row:

$$k = \begin{cases} i & \text{if } i < \text{mid} \\ n - i + 1 & \text{if } i > \text{mid} \end{cases}$$

Adjacent stars in every row are separated by a tab (`\t`), and every row concludes with a newline (`\n`) without trailing tabs. Using a `StringBuilder` provides optimal $O(n^2)$ time and $O(n^2)$ space complexity.

### Step-by-Step Algorithm:
1. Validate input `n`. If `n <= 0` or `n % 2 == 0`, return an empty string.
2. Compute `mid = n / 2 + 1` and initialize a `StringBuilder`.
3. Loop through row index `i` from `1` to `n`.
4. If `i == mid`, iterate `st` from `1` to `n`, appending `"*"`, and a tab `"\t"` if `st < n`.
5. Otherwise, append `(mid - 1)` leading tabs `"\t"`. Compute `k = (i < mid) ? i : (n - i + 1)`, then iterate `st` from `1` to `k`, appending `"*"`, and a tab `"\t"` if `st < k`.
6. Append a newline `"\n"` at the end of row `i`.
7. Convert the `StringBuilder` to a `String` and return it.

## Code

```java
public static String solve(int n) {
    if (n <= 0 || n % 2 == 0) {
        return "";
    }
    StringBuilder sb = new StringBuilder();
    int mid = (n / 2) + 1;
    for (int i = 1; i <= n; i = i + 1) {
        if (i == mid) {
            for (int st = 1; st <= n; st = st + 1) {
                sb.append("*");
                if (st < n) {
                    sb.append("\t");
                }
            }
        } else {
            for (int sp = 1; sp <= mid - 1; sp = sp + 1) {
                sb.append("\t");
            }
            int k = (i < mid) ? i : (n - i + 1);
            for (int st = 1; st <= k; st = st + 1) {
                sb.append("*");
                if (st < k) {
                    sb.append("\t");
                }
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
