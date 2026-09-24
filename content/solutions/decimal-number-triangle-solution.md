---
title: "Decimal Number Triangle - Solution"
problemUrl: "/problems/decimal-number-triangle/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Decimal Number Triangle (Floyd's Triangle) arranges sequentially increasing decimal numbers into a right-angled triangle structure across `n` rows. 

Row `i` (from `1` to `n`) requires printing exactly `i` numbers. The total number of integers printed across all `n` rows is the $n$-th triangular number:

$$\text{Total Numbers} = \frac{n(n + 1)}{2}$$

By maintaining a running counter initialized to `1`, each cell increments the counter after printing. Consecutive values within the same row are delimited by a tab (`\t`), and the row terminates with a newline (`\n`) without trailing tabs. Using a `StringBuilder` provides linear output construction proportional to total characters generated, giving time complexity $O(n^2)$ and auxiliary space $O(n^2)$.

### Step-by-Step Algorithm:
1. Validate input `n`. If `n <= 0`, return an empty string.
2. Initialize a `StringBuilder` and a counter variable `current` starting at `1`.
3. Loop row index `i` from `1` to `n`.
4. For each row, loop column index `j` from `1` to `i`.
5. Append `current` to the `StringBuilder`, then increment `current = current + 1`.
6. If `j < i`, append a tab separator `"\t"`.
7. After the inner loop finishes for row `i`, append a newline `"\n"`.
8. Convert the `StringBuilder` to a `String` and return the result.

## Code

```java
public static String solve(int n) {
    if (n <= 0) {
        return "";
    }
    StringBuilder sb = new StringBuilder();
    int current = 1;
    for (int i = 1; i <= n; i = i + 1) {
        for (int j = 1; j <= i; j = j + 1) {
            sb.append(current);
            current = current + 1;
            if (j < i) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
