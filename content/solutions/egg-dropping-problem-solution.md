---
title: "Egg Dropping Problem - Solution"
problemUrl: "/problems/egg-dropping-problem/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The classic Egg Dropping problem asks for the minimum drops in the worst case to find the critical floor among `n` floors using `k` eggs.

Rather than computing $f(\text{eggs}, \text{floors})$ directly in $O(k \cdot n^2)$ or $O(k \cdot n \log n)$, we can invert the state definition:
**Let `dp[m][e]` denote the maximum number of floors we can definitively test using `m` moves and `e` eggs.**

1. **State Transition**:
   When dropping an egg from an optimal floor:
   - If the egg breaks, we have $m - 1$ moves and $e - 1$ eggs to explore the floors below: `dp[m - 1][e - 1]`.
   - If the egg does not break, we have $m - 1$ moves and $e$ eggs to explore the floors above: `dp[m - 1][e]`.
   - Together with the tested floor itself ($1$), we get:
     $$dp[m][e] = dp[m - 1][e - 1] + dp[m - 1][e] + 1$$
2. **Space Optimization**:
   Notice that row $m$ depends only on row $m - 1$. We can maintain a single 1D array of size $k + 1$ traversed backwards:
   $$dp[e] = dp[e - 1] + dp[e] + 1$$
3. We increment $m$ step by step until $dp[k] \ge n$. The number of steps $m$ is bounded by $O(k \log n)$, requiring only $O(k)$ memory.

### Step-by-Step Algorithm:
1. If `k <= 0 || n <= 0`, return `0`.
2. If `k == 1`, return `n` (must test sequentially).
3. If `n == 1`, return `1`.
4. Initialize a 1D array `dp` of size `k + 1` filled with `0`.
5. Initialize `moves = 0`.
6. While `dp[k] < n`:
   - Increment `moves = moves + 1`.
   - Traverse `e` backwards from `k` down to `1`:
     - Update `dp[e] = dp[e - 1] + dp[e] + 1`.
7. Return `moves`.

## Code

```java
public static int solve(int k, int n) {
    if (k <= 0 || n <= 0) {
        return 0;
    }
    if (k == 1) {
        return n;
    }
    if (n == 1) {
        return 1;
    }

    int[] dp = new int[k + 1];
    int moves = 0;

    while (dp[k] < n) {
        moves = moves + 1;
        for (int e = k; e >= 1; e = e - 1) {
            dp[e] = dp[e - 1] + dp[e] + 1;
        }
    }

    return moves;
}
```
