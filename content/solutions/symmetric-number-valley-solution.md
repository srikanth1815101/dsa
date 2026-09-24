---
title: "Symmetric Number Valley - Solution"
problemUrl: "/problems/symmetric-number-valley/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Symmetric Number Valley constructs a bilateral numeric mountain with an inward-tapering central valley spanning `n` rows.

In row `i` (from `1` to `n`):
1. The left flank prints monotonically increasing numbers from `1` through `i`, separated by tabs (`\t`).
2. When $i < n$, the central gap requires printing $2 \times (n - i)$ tab characters (`\t`) to skip over empty grid cells. The right flank then prints numbers descending from `i` down to `1`.
3. When $i = n$, the peak element $n$ is unique to the center; thus, the right side begins at $n - 1$ and descends down to $1$, separated from the apex by a single tab (`\t`).
4. Each row terminates cleanly with a newline (`\n`) without trailing tabs.

Generating all rows produces $O(n^2)$ total characters, giving an optimal time complexity of $O(n^2)$ and auxiliary space complexity of $O(n^2)$ using a `StringBuilder`.

### Step-by-Step Algorithm:
1. Validate input `n`. If `n <= 0`, return an empty string.
2. Initialize a `StringBuilder` to collect the output characters.
3. Loop row index `i` from `1` to `n`.
4. For the left flank, iterate column index `j` from `1` to `i`, appending `j`. If `j < i`, append a tab `"\t"`.
5. If `i < n`, append $2 \times (n - i)$ tabs `"\t"` for the valley gap, then iterate `j` from `i` down to `1`, appending `j` followed by a tab if `j > 1`.
6. If `i == n` and `n > 1`, append a tab `"\t"`, then iterate `j` from `n - 1` down to `1`, appending `j` followed by a tab if `j > 1`.
7. Append a newline `"\n"` at the end of row `i`.
8. Convert the `StringBuilder` to a `String` and return the result.

## Code

```java
public static String solve(int n) {
    if (n <= 0) {
        return "";
    }
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i = i + 1) {
        for (int j = 1; j <= i; j = j + 1) {
            sb.append(j);
            if (j < i) {
                sb.append("\t");
            }
        }
        if (i < n) {
            int gap = 2 * (n - i);
            for (int g = 1; g <= gap; g = g + 1) {
                sb.append("\t");
            }
            for (int j = i; j >= 1; j = j - 1) {
                sb.append(j);
                if (j > 1) {
                    sb.append("\t");
                }
            }
        } else if (n > 1) {
            sb.append("\t");
            for (int j = n - 1; j >= 1; j = j - 1) {
                sb.append(j);
                if (j > 1) {
                    sb.append("\t");
                }
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
