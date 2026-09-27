---
title: "Coin Change Permutation - Solution"
problemUrl: "/problems/coin-change-permutation/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

When coin order matters, we iterate over amounts in the outer loop and coins in the inner loop:

1. **State Definition**: Let `dp[amt]` denote the total number of ordered permutations that sum up to `amt`.
2. **Order Sensitivity**: By iterating over target sums `amt` from `1` to `amount` and considering each coin as the potential last coin chosen, all permutations of different coin orderings are naturally accounted for.
3. **Base Case**: `dp[0] = 1`, as there is exactly 1 empty permutation to reach a sum of `0`.
4. **Transition**: For each target sum `amt` from `1` to `amount`:
   - For each coin `c` in `coins`:
     - If `amt >= c`:
       - `dp[amt] = dp[amt] + dp[amt - c]`.
5. The answer resides in `dp[amount]` in $O(n \cdot \text{amount})$ time and $O(\text{amount})$ auxiliary space.

### Step-by-Step Algorithm:
1. If `coins == null || coins.length == 0 || amount < 0`, return `0`.
2. If `amount == 0`, return `1`.
3. Allocate `int[] dp = new int[amount + 1]`.
4. Set `dp[0] = 1`.
5. Loop `amt` from `1` to `amount`:
   - For each coin `c` in `coins`:
     - If `amt >= c`:
       - `dp[amt] = dp[amt] + dp[amt - c]`.
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

    for (int amt = 1; amt <= amount; amt = amt + 1) {
        for (int i = 0; i < coins.length; i = i + 1) {
            int c = coins[i];
            if (amt >= c) {
                dp[amt] = dp[amt] + dp[amt - c];
            }
        }
    }

    return dp[amount];
}
```
