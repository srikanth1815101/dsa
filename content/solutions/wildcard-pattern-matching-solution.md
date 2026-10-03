---
date: 2026-10-01T01:17:00+05:30

title: "Wildcard Pattern Matching - Solution"
problemUrl: "/problems/wildcard-pattern-matching/"
weight: 17
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Let `dp[i][j]` be `true` if prefix `s[0..i - 1]` matches pattern prefix `p[0..j - 1]`.

Transitions:
1. **Base Case**: `dp[0][0] = true` (empty string matches empty pattern). For empty `s` (`i = 0`), `dp[0][j] = dp[0][j - 1]` if `p.charAt(j - 1) == '*'`.
2. **Character match or `'?'`**:
   - If `p.charAt(j - 1) == '?' || p.charAt(j - 1) == s.charAt(i - 1)`:
     `dp[i][j] = dp[i - 1][j - 1]`.
3. **Wildcard `'*'`**:
   - `'*'` can match empty sequence (`dp[i][j - 1]`) OR match one/more characters (`dp[i - 1][j]`):
     `dp[i][j] = dp[i][j - 1] || dp[i - 1][j]`.

Since each row `i` only depends on the previous row `i - 1`, we can optimize space to `O(n)` using two boolean arrays `dp` and `next`, where `n = p.length()`. The time complexity is `O(m * n)`.

### Step-by-Step Algorithm:
1. Let `m = s.length()` and `n = p.length()`.
2. Initialize a boolean array `prev` of size `n + 1`.
3. Set `prev[0] = true`.
4. For `j` from `1` to `n`:
   - If `p.charAt(j - 1) == '*'`, set `prev[j] = prev[j - 1]`.
5. For `i` from `1` to `m`:
   - Initialize a boolean array `curr` of size `n + 1`.
   - Set `curr[0] = false`.
   - For `j` from `1` to `n`:
     - If `p.charAt(j - 1) == '*'`:
       `curr[j] = curr[j - 1] || prev[j]`.
     - Else if `p.charAt(j - 1) == '?' || p.charAt(j - 1) == s.charAt(i - 1)`:
       `curr[j] = prev[j - 1]`.
   - Update `prev = curr`.
6. Return `prev[n]`.

## Code

```java
public static boolean solve(String s, String p) {
    int m = s.length();
    int n = p.length();

    boolean[] prev = new boolean[n + 1];
    prev[0] = true;

    for (int j = 1; j <= n; j = j + 1) {
        if (p.charAt(j - 1) == '*') {
            prev[j] = prev[j - 1];
        }
    }

    for (int i = 1; i <= m; i = i + 1) {
        boolean[] curr = new boolean[n + 1];
        curr[0] = false;

        for (int j = 1; j <= n; j = j + 1) {
            char pc = p.charAt(j - 1);
            if (pc == '*') {
                curr[j] = curr[j - 1] || prev[j];
            } else if (pc == '?' || pc == s.charAt(i - 1)) {
                curr[j] = prev[j - 1];
            }
        }

        prev = curr;
    }

    return prev[n];
}
```
