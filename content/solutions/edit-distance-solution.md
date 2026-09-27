---
title: "Edit Distance - Solution"
problemUrl: "/problems/edit-distance/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The edit distance (Levenshtein distance) between two strings `word1` and `word2` is the minimum number of insertions, deletions, and character replacements required to transform `word1` into `word2`.

Using 2D dynamic programming:
1. Define `dp[i][j]` as the edit distance between `word1[0...i - 1]` and `word2[0...j - 1]`.
2. Base cases:
   - `dp[i][0] = i` (deleting all `i` characters of `word1`).
   - `dp[0][j] = j` (inserting all `j` characters of `word2`).
3. For each pair `(i, j)`:
   - If characters match (`word1.charAt(i - 1) == word2.charAt(j - 1)`), no new operation is needed: `dp[i][j] = dp[i - 1][j - 1]`.
   - If characters differ, take $1 + \min$ of:
     - Delete from `word1`: `dp[i - 1][j]`
     - Insert into `word1`: `dp[i][j - 1]`
     - Replace character: `dp[i - 1][j - 1]`

This yields $O(m \times n)$ time and $O(m \times n)$ space complexity.

### Step-by-Step Algorithm:
1. If `word1 == null || word2 == null`, return `0`.
2. Let `m = word1.length()` and `n = word2.length()`.
3. Create `int[][] dp = new int[m + 1][n + 1]`.
4. Initialize `dp[i][0] = i` for all `0 <= i <= m`, and `dp[0][j] = j` for all `0 <= j <= n`.
5. Loop `i` from `1` to `m`:
   - Loop `j` from `1` to `n`:
     - If `word1.charAt(i - 1) == word2.charAt(j - 1)`:
       - Set `dp[i][j] = dp[i - 1][j - 1]`.
     - Else:
       - Set `dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]))`.
6. Return `dp[m][n]`.

## Code

```java
public static int solve(String word1, String word2) {
    if (word1 == null || word2 == null) {
        return 0;
    }

    int m = word1.length();
    int n = word2.length();
    int[][] dp = new int[m + 1][n + 1];

    for (int i = 0; i <= m; i = i + 1) {
        dp[i][0] = i;
    }
    for (int j = 0; j <= n; j = j + 1) {
        dp[0][j] = j;
    }

    for (int i = 1; i <= m; i = i + 1) {
        for (int j = 1; j <= n; j = j + 1) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int deleteCost = dp[i - 1][j];
                int insertCost = dp[i][j - 1];
                int replaceCost = dp[i - 1][j - 1];
                dp[i][j] = 1 + Math.min(deleteCost, Math.min(insertCost, replaceCost));
            }
        }
    }

    return dp[m][n];
}
```
