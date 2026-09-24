---
title: "Pinwheel Star Pattern - Solution"
problemUrl: "/problems/pinwheel-star-pattern/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Pinwheel Star Pattern displays a 4-blade rotary figure with central coordinates:

$$\text{mid} = \frac{n}{2} + 1$$

A star is placed at cell $(i, j)$ if any of the following rotational conditions hold:
1. $i = \text{mid}$ (horizontal central spine)
2. $j = \text{mid}$ (vertical central spine)
3. $i = 1 \text{ and } j \le \text{mid}$ (top-left arm)
4. $j = n \text{ and } i \le \text{mid}$ (top-right arm)
5. $j = 1 \text{ and } i \ge \text{mid}$ (bottom-left arm)
6. $i = n \text{ and } j \ge \text{mid}$ (bottom-right arm)

To prevent trailing tab characters, the last column printed for row $i$ is:

$$\text{lastCol} = \begin{cases} \text{mid} & \text{if } i > \text{mid} \text{ and } i < n \\ n & \text{otherwise} \end{cases}$$

Using a `StringBuilder` provides linear output construction proportional to total characters generated, giving time complexity $O(n^2)$ and auxiliary space $O(n^2)$.

### Step-by-Step Algorithm:
1. Validate input `n`. If `n <= 0` or `n % 2 == 0`, return an empty string.
2. Compute `mid = n / 2 + 1` and initialize a `StringBuilder`.
3. Loop row index `i` from `1` to `n`.
4. Determine `lastCol = (i > mid && i < n) ? mid : n`.
5. Loop column index `j` from `1` to `lastCol`.
6. Check if cell $(i, j)$ matches any of the 6 pinwheel conditions. If so, append `"*"`.
7. If $j < \text{lastCol}$, append a tab delimiter `"\t"`.
8. After finishing row $i$, append a newline `"\n"`.
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
        int lastCol = n;
        if (i > mid && i < n) {
            lastCol = mid;
        }
        for (int j = 1; j <= lastCol; j = j + 1) {
            boolean isStar = false;
            if (i == mid || j == mid) {
                isStar = true;
            } else if (i == 1 && j <= mid) {
                isStar = true;
            } else if (j == n && i <= mid) {
                isStar = true;
            } else if (j == 1 && i >= mid) {
                isStar = true;
            } else if (i == n && j >= mid) {
                isStar = true;
            }
            if (isStar) {
                sb.append("*");
            }
            if (j < lastCol) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
