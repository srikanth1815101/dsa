---
title: "Partition into Subsets - Solution"
problemUrl: "/problems/partition-into-subsets/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the number of ways to partition a set of `n` elements into `k` non-empty subsets, known as the Stirling numbers of the second kind: $S(n, k)$.

Consider element `n`:
1. It forms its own singleton subset: the remaining $n - 1$ elements must be partitioned into $k - 1$ non-empty subsets, giving $S(n - 1, k - 1)$ ways.
2. It joins one of the $k$ existing non-empty subsets formed by the first $n - 1$ elements: giving $k \times S(n - 1, k)$ ways.

Recurrence:
$$S(n, k) = k \times S(n - 1, k) + S(n - 1, k - 1)$$

Base cases:
- If $n = 0$, $k = 0$, or $k > n$, return `0`.
- If $k = 1$ or $k = n$, return `1`.

Using a 1D DP array traversed backwards updates the states in $O(n \times k)$ time and $O(k)$ space.

### Step-by-Step Algorithm:
1. If `n == 0 || k == 0 || k > n`, return `0L`.
2. Initialize array `long[] dp = new long[k + 1]` with `dp[1] = 1L`.
3. Loop `i` from `2` up to `n`:
   - Loop `j` backwards from `Math.min(i, k)` down to `1`:
     - Update `dp[j] = (long) j * dp[j] + dp[j - 1]`.
4. Return `dp[k]`.

## Code

```java
public static long solve(int n, int k) {
    if (n == 0 || k == 0 || k > n) {
        return 0L;
    }

    long[] dp = new long[k + 1];
    dp[1] = 1L;

    for (int i = 2; i <= n; i = i + 1) {
        for (int j = Math.min(i, k); j >= 1; j = j - 1) {
            dp[j] = (long) j * dp[j] + dp[j - 1];
        }
    }

    return dp[k];
}
```
