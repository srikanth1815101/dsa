---
title: "Matrix Chain Multiplication - Solution"
problemUrl: "/problems/matrix-chain-multiplication/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Matrix Chain Multiplication problem is a classic dynamic programming problem solved using interval DP.

Given $n - 1$ matrices $A_1, A_2, \ldots, A_{n-1}$ where matrix $A_i$ has dimensions `arr[i - 1] x arr[i]`:

1. **State Definition**: Let `dp[i][j]` be the minimum scalar operations required to multiply matrices from index `i` through `j`.
2. **Base Cases**: `dp[i][i] = 0` for all $1 \le i < n$ because a single matrix requires zero multiplications.
3. **Transition**: For a subchain of length `len` from `i` to `j` (where `j = i + len - 1`), choose a partition point `k` between `i` and `j - 1` that splits the chain into $(A_i \dots A_k)$ and $(A_{k+1} \dots A_j)$:
   $$\text{cost} = dp[i][k] + dp[k + 1][j] + arr[i - 1] \times arr[k] \times arr[j]$$
   We minimize this cost across all possible values of $k$.

The time complexity is $O(n^3)$ due to three nested loops (chain length, start index, split point), and space complexity is $O(n^2)$ for the DP matrix.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 2`, return `0`.
2. Let `int n = arr.length`. Create a 2D integer array `dp` of size `n x n`.
3. Loop chain length `len` from `2` to `n - 1`:
   - Loop starting index `i` from `1` to `n - len`:
     - Set ending index `j = i + len - 1`.
     - Initialize `dp[i][j] = Integer.MAX_VALUE`.
     - Loop split point `k` from `i` to `j - 1`:
       - Calculate `cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]`.
       - If `cost < dp[i][j]`, update `dp[i][j] = cost`.
4. Return `dp[1][n - 1]`.

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length <= 2) {
        return 0;
    }

    int n = arr.length;
    int[][] dp = new int[n][n];

    for (int len = 2; len < n; len = len + 1) {
        for (int i = 1; i <= n - len; i = i + 1) {
            int j = i + len - 1;
            dp[i][j] = Integer.MAX_VALUE;

            for (int k = i; k < j; k = k + 1) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }

    return dp[1][n - 1];
}
```
