---
title: "Longest Common Subsequence - Solution"
problemUrl: "/problems/longest-common-subsequence/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Longest Common Subsequence (LCS) problem can be solved by comparing prefixes of both strings using 2D dynamic programming.

Let `dp[i][j]` represent the length of the longest common subsequence between `text1[0...i - 1]` and `text2[0...j - 1]`.

1. **State Transition**:
   - If `text1.charAt(i - 1) == text2.charAt(j - 1)`, the character contributes to the common subsequence: `dp[i][j] = 1 + dp[i - 1][j - 1]`.
   - If the characters differ, the optimal answer must come from either omitting `text1.charAt(i - 1)` or omitting `text2.charAt(j - 1)`: `dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])`.
2. **Base Cases**: When either string prefix has length 0, the LCS length is 0 (`dp[i][0] = 0`, `dp[0][j] = 0`).

The overall time complexity is $O(m \times n)$ and space complexity is $O(m \times n)$, where $m$ and $n$ are the string lengths.

### Step-by-Step Algorithm:
1. If either string is null or empty, return `0`.
2. Let `int m = text1.length()` and `int n = text2.length()`.
3. Allocate a 2D integer array `dp` of dimensions `(m + 1) x (n + 1)`.
4. Iterate `i` from `1` to `m`:
   - Iterate `j` from `1` to `n`:
     - If `text1.charAt(i - 1) == text2.charAt(j - 1)`:
       - Set `dp[i][j] = 1 + dp[i - 1][j - 1]`.
     - Otherwise:
       - Set `dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])`.
5. Return `dp[m][n]`.

## Code

```java
public static int solve(String text1, String text2) {
    if (text1 == null || text2 == null || text1.isEmpty() || text2.isEmpty()) {
        return 0;
    }

    int m = text1.length();
    int n = text2.length();
    int[][] dp = new int[m + 1][n + 1];

    for (int i = 1; i <= m; i = i + 1) {
        for (int j = 1; j <= n; j = j + 1) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}
```
