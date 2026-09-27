---
title: "Coin Change Combination - Solution"
problemUrl: "/problems/coin-change-combination/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To count coin combinations where order does not matter (unbounded knapsack combination):

1. **State Definition**: Let `dp[j]` represent the total number of combinations that sum up to amount `j`.
2. **Order Independence**: By placing the iteration over `coins` in the outer loop, each coin denomination is only introduced once in non-decreasing order of its inclusion. This guarantees that `{2, 3}` is counted once and `{3, 2}` is never generated.
3. **Base Case**: `dp[0] = 1` because there is exactly 1 way to make an amount of `0` (by using zero coins).
4. **Transition**: For each coin `c` in `coins`:
   - Iterate `j` from `c` to `amount`.
   - `dp[j] = dp[j] + dp[j - c]`.
5. After all coins are evaluated, `dp[amount]` holds the answer in $O(n \cdot \text{amount})$ time and $O(\text{amount})$ space.

### Step-by-Step Algorithm:
1. If `coins == null || coins.length == 0 || amount < 0`, return `0`.
2. If `amount == 0`, return `1`.
3. Allocate `int[] dp = new int[amount + 1]`.
4. Set `dp[0] = 1`.
5. For each integer `c` in `coins`:
   - Loop `j` from `c` to `amount`:
     - Set `dp[j] = dp[j] + dp[j - c]`.
6. Return `dp[amount]`.

## Code

```java
public static int solve(int[] coins, int amount) {
    if (coins == null || coins.length == 0 || amount < 0) {
        return 0;
    }
    if (amount == 0) {
        return 1;
    }

    int[] dp = new int[amount + 1];
    dp[0] = 1;

    for (int i = 0; i < coins.length; i = i + 1) {
        int c = coins[i];
        for (int j = c; j <= amount; j = j + 1) {
            dp[j] = dp[j] + dp[j - c];
        }
    }

    return dp[amount];
}
```
