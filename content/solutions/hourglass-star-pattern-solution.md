---
title: "Hourglass Star Pattern - Solution"
problemUrl: "/problems/hourglass-star-pattern/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Hourglass Star Pattern represents an authentic hourglass spanning an odd number of rows `n`.

Let the central waist row be:

$$\text{mid} = \frac{n}{2} + 1$$

The structure is divided into three distinct segments:
1. **Top Lid (Row 1)**: A solid horizontal boundary containing $n$ stars separated by tabs (`\t`).
2. **Hollow Upper Bulb ($2 \le i \le \text{mid}$)**: 
   - For $2 \le i < \text{mid}$, each row has $i - 1$ leading tabs, a star at column $i$, $(n - 2i + 1)$ gap tabs, and a star at column $n - i + 1$.
   - At $i = \text{mid}$, the waist consists of $\text{mid} - 1$ leading tabs and a single star.
3. **Solid Lower Bulb ($\text{mid} + 1 \le i \le n$)**: 
   - A filled pyramid representing fallen sand. Each row has $n - i$ leading tabs followed by $2(i - \text{mid}) + 1$ stars separated by tabs.

Using a `StringBuilder` guarantees linear performance with time complexity $O(n^2)$ and auxiliary space $O(n^2)$.

### Step-by-Step Algorithm:
1. Validate input `n`. If `n <= 0` or `n % 2 == 0`, return an empty string.
2. Compute `mid = n / 2 + 1` and initialize a `StringBuilder`.
3. Loop through row index `i` from `1` to `n`.
4. If `i == 1`: append `n` stars separated by tabs.
5. Else if `i < mid`: append `i - 1` leading tabs, append `"*"`, append $(n - 2i + 1)$ tabs, and append `"*"`.
6. Else if `i == mid`: append `mid - 1` leading tabs and append `"*"`.
7. Else ($i > \text{mid}$): append $n - i$ leading tabs, then append $2(i - \text{mid}) + 1$ stars separated by tabs.
8. Append a newline `"\n"` at the end of each row.
9. Convert the `StringBuilder` to a `String` and return the result.

## Code

```java
public static String solve(int n) {
    if (n <= 0 || n % 2 == 0) {
        return "";
    }
    StringBuilder sb = new StringBuilder();
    int mid = (n / 2) + 1;
    for (int i = 1; i <= n; i = i + 1) {
        if (i == 1) {
            for (int j = 1; j <= n; j = j + 1) {
                sb.append("*");
                if (j < n) {
                    sb.append("\t");
                }
            }
        } else if (i < mid) {
            for (int sp = 1; sp <= i - 1; sp = sp + 1) {
                sb.append("\t");
            }
            sb.append("*");
            int gap = n - 2 * i + 1;
            for (int sp = 1; sp <= gap; sp = sp + 1) {
                sb.append("\t");
            }
            sb.append("*");
        } else if (i == mid) {
            for (int sp = 1; sp <= mid - 1; sp = sp + 1) {
                sb.append("\t");
            }
            sb.append("*");
        } else {
            for (int sp = 1; sp <= n - i; sp = sp + 1) {
                sb.append("\t");
            }
            int stars = 2 * (i - mid) + 1;
            for (int st = 1; st <= stars; st = st + 1) {
                sb.append("*");
                if (st < stars) {
                    sb.append("\t");
                }
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
