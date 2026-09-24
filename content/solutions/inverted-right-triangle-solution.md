---
title: "Inverted Right Triangle - Solution"
problemUrl: "/problems/inverted-right-triangle/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The goal is to generate an inverted right-angled triangle pattern of asterisks (`*`) having `n` rows. The first row begins with `n` stars, and each subsequent row decrements the star count by one until the final row contains exactly one star.

To ensure character-accurate formatting:
- For any row `i` (from `1` to `n`), the total number of stars in that row is `n - i + 1`.
- Adjacent stars in the same row are separated by a tab (`\t`).
- Each row terminates with a newline character (`\n`), without any trailing tab or whitespace.
- A `StringBuilder` accumulates all characters in optimal `O(n^2)` time.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` instance to accumulate the generated pattern characters.
2. Run an outer loop with variable `i` starting from `1` up to and including `n` to represent each row.
3. Compute the number of stars for the current row as `starsCount = n - i + 1`.
4. Run an inner loop with variable `j` starting from `1` up to and including `starsCount`.
5. In each iteration of the inner loop, append the character `*`. If `j` is strictly less than `starsCount`, append a tab delimiter `\t`.
6. After completing the inner loop for row `i`, append a newline character `\n`.
7. Once the outer loop completes, convert the `StringBuilder` to a `String` and return it.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= n; i = i + 1) {
        int starsCount = n - i + 1;
        for (int j = 1; j <= starsCount; j = j + 1) {
            sb.append("*");
            if (j < starsCount) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }
    return sb.toString();
}
```
