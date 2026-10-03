---
title: "Palindrome Partitioning II - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/palindrome-partitioning-ii/"
weight: 54
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We want to find the minimum number of cuts such that every partitioned piece of string $s$ is a palindrome.

Let `dp[i]` represent the minimum number of cuts required for the prefix `s[0...i]`.
To compute `dp[i]`:
1. If the entire substring `s[0...i]` is a palindrome, then $0$ cuts are needed: `dp[i] = 0`.
2. Otherwise, we can consider every valid cut point $j$ ($0 \le j < i$). If the suffix `s[j + 1...i]` is a palindrome, then we can cut right before index $j + 1$. The total cuts would be `dp[j] + 1`. We minimize this over all valid $j$:
   $$\text{dp}[i] = \min_{0 \le j < i, \text{isPal}(j + 1, i)} (\text{dp}[j] + 1)$$

To test whether any substring `s[j...i]` is a palindrome in $\mathcal{O}(1)$ time, we precompute a 2D boolean table `isPal[j][i]`:
- `isPal[j][i]` is true if `s.charAt(j) == s.charAt(i)` and either $i - j \le 2$ or `isPal[j + 1][i - 1]` is true.

### Step-by-Step Algorithm:
1. Let $n$ be the length of string $s$. If $n \le 1$, return $0$.
2. Create an array `dp` of size $n$ and a 2D boolean array `isPal` of size $n \times n$.
3. For each ending index $i$ from $0$ to $n - 1$:
   - Initialize `minCuts = i` (the worst-case maximum cuts using single-character palindromes).
   - For each starting index $j$ from $0$ to $i$:
     - Check if `s.charAt(j) == s.charAt(i)` and ($i - j \le 2$ or `isPal[j + 1][i - 1]` is true):
       - Set `isPal[j][i] = true`.
       - If $j == 0$, the prefix `s[0...i]` is already a palindrome, so `minCuts = 0`.
       - Else, update `minCuts = Math.min(minCuts, dp[j - 1] + 1)`.
   - Set `dp[i] = minCuts`.
4. Return `dp[n - 1]`.

## Code

```java
public static int solve(String s) {
    if (s == null || s.length() <= 1) {
        return 0;
    }

    int n = s.length();
    int[] dp = new int[n];
    boolean[][] isPal = new boolean[n][n];

    for (int i = 0; i < n; i = i + 1) {
        int minCuts = i;
        for (int j = 0; j <= i; j = j + 1) {
            if (s.charAt(i) == s.charAt(j) && (i - j <= 2 || isPal[j + 1][i - 1])) {
                isPal[j][i] = true;
                if (j == 0) {
                    minCuts = 0;
                } else {
                    minCuts = Math.min(minCuts, dp[j - 1] + 1);
                }
            }
        }
        dp[i] = minCuts;
    }

    return dp[n - 1];
}
```
