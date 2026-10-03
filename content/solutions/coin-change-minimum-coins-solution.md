---
title: "Coin Change (Minimum Coins) - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/coin-change-minimum-coins/"
weight: 50
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

This problem asks for the minimum count of items to reach a target sum, which is the classic Unbounded Knapsack problem. A greedy strategy (always choosing the largest denomination) fails for arbitrary coin systems (for example, with coins `[1, 3, 4]` and amount `6`, greedy picks `4 + 1 + 1 = 3` coins, whereas the optimal is `3 + 3 = 2` coins).

Therefore, dynamic programming is optimal. We define `dp[i]` as the minimum number of coins needed to make amount `i`.
- **Base Case:** `dp[0] = 0` (zero coins needed to form amount zero).
- **Recurrence:** For each sub-amount $i$ from $1$ to $\text{amount}$, and for each available coin $c$:
  $$\text{dp}[i] = \min(\text{dp}[i], \text{dp}[i - c] + 1) \quad \text{for } i \ge c$$
- If `dp[amount]` remains greater than `amount` after considering all coins, amount cannot be formed, so return `-1`.

### Step-by-Step Algorithm:
1. If `amount == 0`, return `0`.
2. Create an array `dp` of size `amount + 1`.
3. Fill `dp` with an upper-bound sentinel value `amount + 1` (since at most `amount` coins of denomination 1 could be needed).
4. Set `dp[0] = 0`.
5. Loop through every amount `i` from `1` to `amount`:
   - For each coin denomination `coin` in `coins`:
     - If `i - coin >= 0`:
       - Update `dp[i] = Math.min(dp[i], dp[i - coin] + 1)`.
6. If `dp[amount] > amount`, return `-1`. Otherwise, return `dp[amount]`.

## Code

```java
public static int solve(int[] coins, int amount) {
    if (amount < 0) {
        return -1;
    }
    if (amount == 0) {
        return 0;
    }

    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;

    for (int i = 1; i <= amount; i = i + 1) {
        for (int j = 0; j < coins.length; j = j + 1) {
            int coin = coins[j];
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    if (dp[amount] > amount) {
        return -1;
    }
    return dp[amount];
}
```
