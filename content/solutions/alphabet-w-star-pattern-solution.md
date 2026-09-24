---
title: "Alphabet W Star Pattern - Solution"
problemUrl: "/problems/alphabet-w-star-pattern/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Alphabet W Star Pattern prints an uppercase letter `W` within an $n \times n$ matrix, where $n$ is an odd integer with middle row:

$$\text{mid} = \frac{n}{2} + 1$$

The structure contains two components:
1. **Vertical Boundary Pillars**: Every row prints a star at the outer boundaries: column $j = 1$ and column $j = n$.
2. **Lower Central Inverted V**: For rows in the lower half where $i \ge \text{mid}$, stars are placed along the main diagonal ($j = i$) and anti-diagonal ($i + j = n + 1$). At the waist ($i = \text{mid}$), these two diagonals converge at the center point $(i, \text{mid})$.

Each cell is separated from the next by a tab character (`\t`), and the row concludes after column $n$ with a newline (`\n`). Generating the pattern requires scanning all $n \times n$ cells, giving an optimal time complexity of $O(n^2)$ and auxiliary space complexity of $O(n^2)$ using a `StringBuilder`.

### Step-by-Step Algorithm:
1. Check if `n <= 0` or `n % 2 == 0`. If true, return an empty string.
2. Compute `mid = n / 2 + 1` and initialize a `StringBuilder`.
3. Loop through row index `i` from `1` to `n`.
4. Loop through column index `j` from `1` to `n`.
5. Check if cell $(i, j)$ satisfies any of the following:
   - $j = 1$ or $j = n$ (outer pillars)
   - $i \ge \text{mid}$ and $(j = i \text{ or } i + j = n + 1)$ (inner inverted V)
6. If the condition holds, append `"*"`.
7. If $j < n$, append a tab delimiter `"\t"`.
8. After finishing column $n$, append a newline `"\n"`.
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
        for (int j = 1; j <= n; j = j + 1) {
            boolean isStar = false;
            if (j == 1 || j == n) {
                isStar = true;
            } else if (i >= mid && (j == i || i + j == n + 1)) {
                isStar = true;
            }
            if (isStar) {
                sb.append("*");
            }
            if (j < n) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
