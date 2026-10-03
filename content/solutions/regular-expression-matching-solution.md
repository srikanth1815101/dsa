---
date: 2026-10-01T01:18:00+05:30

title: "Regular Expression Matching - Solution"
problemUrl: "/problems/regular-expression-matching/"
weight: 18
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Let `dp[i][j]` be `true` if `s[0..i - 1]` matches `p[0..j - 1]`.

Transitions:
1. **Base Case**: `dp[0][0] = true`. For `i = 0` (empty `s`), pattern tokens of the form `x*` can match empty by setting `dp[0][j] = dp[0][j - 2]`.
2. **Standard Character or `'.'`**:
   - If `p.charAt(j - 1) == s.charAt(i - 1) || p.charAt(j - 1) == '.'`:
     `dp[i][j] = dp[i - 1][j - 1]`.
3. **Preceding Repetition `'*'` (`p.charAt(j - 1) == '*'`)**:
   - Zero occurrences of preceding element `p.charAt(j - 2)`:
     `dp[i][j] = dp[i][j - 2]`.
   - One or more occurrences (if preceding character matches `s.charAt(i - 1)` or is `'.'`):
     `dp[i][j] = dp[i][j] || dp[i - 1][j]`.

This dynamic programming solution computes the table in `O(m * n)` time and `O(m * n)` space.

### Step-by-Step Algorithm:
1. Let `m = s.length()` and `n = p.length()`.
2. Create a 2D boolean array `dp` of dimensions `(m + 1) x (n + 1)`.
3. Set `dp[0][0] = true`.
4. For `j` from `2` to `n`:
   - If `p.charAt(j - 1) == '*'`:
     `dp[0][j] = dp[0][j - 2]`.
5. For `i` from `1` to `m`:
   - For `j` from `1` to `n`:
     - If `p.charAt(j - 1) == '*'`:
       - `dp[i][j] = dp[i][j - 2]`.
       - If `p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)`:
         `dp[i][j] = dp[i][j] || dp[i - 1][j]`.
     - Else if `p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)`:
       - `dp[i][j] = dp[i - 1][j - 1]`.
6. Return `dp[m][n]`.

## Code

```java
public static boolean solve(String s, String p) {
    int m = s.length();
    int n = p.length();

    boolean[][] dp = new boolean[m + 1][n + 1];
    dp[0][0] = true;

    for (int j = 2; j <= n; j = j + 1) {
        if (p.charAt(j - 1) == '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (int i = 1; i <= m; i = i + 1) {
        for (int j = 1; j <= n; j = j + 1) {
            char pc = p.charAt(j - 1);
            if (pc == '*') {
                dp[i][j] = dp[i][j - 2];
                char prevChar = p.charAt(j - 2);
                if (prevChar == '.' || prevChar == s.charAt(i - 1)) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            } else if (pc == '.' || pc == s.charAt(i - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
}
```
