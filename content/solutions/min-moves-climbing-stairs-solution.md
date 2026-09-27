---
title: "Min Moves Climbing Stairs - Solution"
problemUrl: "/problems/min-moves-climbing-stairs/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We use 1D Dynamic Programming to find the minimum jumps to reach destination stair `n`:

1. **State Definition**: Let `dp[i]` represent the minimum moves to reach stair `n` starting from stair `i`. Initialize all positions to `Integer.MAX_VALUE` (or use `Integer[]` where `null` signifies unreachable).
2. **Base Case**: At destination stair `n`, we need `0` moves, so `dp[n] = 0`.
3. **Transition**: For each stair `i` from `n - 1` down to `0`:
   - If `arr[i] > 0`:
     - Scan all reachable next stairs `i + j` where `1 <= j <= arr[i]` and `i + j <= n`.
     - Find `min = Math.min(min, dp[i + j])` across all valid states that are reachable (`dp[i + j] != Integer.MAX_VALUE`).
     - If a valid next state was found, `dp[i] = min + 1`.
4. If `dp[0]` remains `Integer.MAX_VALUE`, destination stair `n` is unreachable from stair `0`, so we return `-1`. Otherwise, return `dp[0]`.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length == 0`, return `0`.
2. Let `int n = arr.length`.
3. Allocate `int[] dp = new int[n + 1]`.
4. Initialize `dp[0]` through `dp[n - 1]` with `Integer.MAX_VALUE`. Set `dp[n] = 0`.
5. Loop `i` from `n - 1` down to `0`:
   - If `arr[i] > 0`:
     - Initialize `int min = Integer.MAX_VALUE`.
     - Loop `j` from `1` to `arr[i]`:
       - If `i + j <= n`:
         - If `dp[i + j] < min`:
           - `min = dp[i + j]`.
     - If `min != Integer.MAX_VALUE`:
       - `dp[i] = min + 1`.
6. Return `dp[0] == Integer.MAX_VALUE ? -1 : dp[0]`.

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return 0;
    }

    int n = arr.length;
    int[] dp = new int[n + 1];
    for (int i = 0; i < n; i = i + 1) {
        dp[i] = Integer.MAX_VALUE;
    }
    dp[n] = 0;

    for (int i = n - 1; i >= 0; i = i - 1) {
        if (arr[i] > 0) {
            int min = Integer.MAX_VALUE;
            for (int j = 1; j <= arr[i] && i + j <= n; j = j + 1) {
                if (dp[i + j] < min) {
                    min = dp[i + j];
                }
            }
            if (min != Integer.MAX_VALUE) {
                dp[i] = min + 1;
            }
        }
    }

    if (dp[0] == Integer.MAX_VALUE) {
        return -1;
    }
    return dp[0];
}
```
