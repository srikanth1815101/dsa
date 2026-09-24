---
title: "Fibonacci Number Triangle - Solution"
problemUrl: "/problems/fibonacci-number-triangle/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Fibonacci Number Triangle arranges consecutive numbers of the Fibonacci sequence into a triangular shape across `n` rows. The sequence begins with `F(0) = 0`, `F(1) = 1`, and each subsequent term is the sum of the preceding two terms:

$$F(k) = F(k - 1) + F(k - 2)$$

Row `i` prints `i` values. The total number of terms printed across `n` rows is:

$$\text{Total Terms} = \frac{n(n + 1)}{2}$$

By maintaining two state variables `a = 0` and `b = 1` across the outer and inner loops, each term `a` is appended to the output buffer, and the state advances via `next = a + b`, `a = b`, `b = next`. Values within each row are separated by a tab (`\t`), and each row concludes with a newline (`\n`) without trailing tabs. Using 64-bit `long` ensures overflow-free operations for all required constraints.

### Step-by-Step Algorithm:
1. Check if `n <= 0`. If true, return an empty string.
2. Initialize a `StringBuilder` and two 64-bit integers `a = 0` and `b = 1`.
3. Loop row index `i` from `1` to `n`.
4. For each row, loop column index `j` from `1` to `i`.
5. Append `a` to the `StringBuilder`.
6. Compute `next = a + b`, then update `a = b` and `b = next`.
7. If `j < i`, append a tab separator `"\t"`.
8. After finishing row `i`, append a newline `"\n"`.
9. Convert the `StringBuilder` to a `String` and return the result.

## Code

```java
public static String solve(int n) {
    if (n <= 0) {
        return "";
    }
    StringBuilder sb = new StringBuilder();
    long a = 0;
    long b = 1;
    for (int i = 1; i <= n; i = i + 1) {
        for (int j = 1; j <= i; j = j + 1) {
            sb.append(a);
            long next = a + b;
            a = b;
            b = next;
            if (j < i) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
