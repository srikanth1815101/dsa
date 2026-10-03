---
title: "Burst Balloons - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/burst-balloons/"
weight: 55
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The challenge with forward thinking (choosing which balloon to burst first) is that bursting balloon $i$ merges the adjacent balloons $i - 1$ and $i + 1$, making subproblems dependent on previous choices.

To overcome this, we use **reverse thinking**: instead of asking which balloon is burst first, we ask **which balloon $k$ is burst LAST** in a subarray range `[left, right]`.
Because balloon $k$ is the last balloon to burst in `[left, right]`, the balloons immediately adjacent to it when it bursts are guaranteed to be the boundary balloons `val[left - 1]` and `val[right + 1]`.
Furthermore, bursting balloon $k$ last naturally splits the range into two completely independent subproblems:
1. Bursting all balloons in `[left, k - 1]`.
2. Bursting all balloons in `[k + 1, right]`.

The recurrence relation is:
$$\text{dp}[left][right] = \max_{left \le k \le right} (\text{dp}[left][k - 1] + val[left - 1] \cdot val[k] \cdot val[right + 1] + \text{dp}[k + 1][right])$$

We pad the array with $1$ on both ends, creating an array `val` of length $n + 2$.

### Step-by-Step Algorithm:
1. Handle edge cases where `nums` is null or empty by returning $0$.
2. Create an expanded array `val` of size $n + 2$:
   - Set `val[0] = 1` and `val[n + 1] = 1`.
   - Copy `nums` into `val[1...n]`.
3. Create a 2D array `dp` of size $(n + 2) \times (n + 2)$.
4. Iterate interval length `len` from $1$ to $n$:
   - For each `left` boundary from $1$ to $n - len + 1$:
     - Calculate `right = left + len - 1`.
     - For each possible choice `k` from `left` to `right` as the last balloon to burst:
       - Calculate `coins = dp[left][k - 1] + val[left - 1] * val[k] * val[right + 1] + dp[k + 1][right]`.
       - Update `dp[left][right] = Math.max(dp[left][right], coins)`.
5. Return `dp[1][n]`.

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    int n = nums.length;
    int[] val = new int[n + 2];
    val[0] = 1;
    val[n + 1] = 1;
    for (int i = 0; i < n; i = i + 1) {
        val[i + 1] = nums[i];
    }

    int[][] dp = new int[n + 2][n + 2];

    for (int len = 1; len <= n; len = len + 1) {
        for (int left = 1; left <= n - len + 1; left = left + 1) {
            int right = left + len - 1;
            for (int k = left; k <= right; k = k + 1) {
                int coins = dp[left][k - 1] + val[left - 1] * val[k] * val[right + 1] + dp[k + 1][right];
                dp[left][right] = Math.max(dp[left][right], coins);
            }
        }
    }

    return dp[1][n];
}
```
