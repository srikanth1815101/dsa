---
title: "House Robber - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/house-robber/"
weight: 48
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

This problem is a classic dynamic programming problem. At each house $i$, the robber has two choices:
1. **Rob house $i$:** If house $i$ is robbed, house $i - 1$ cannot be robbed. The total loot would be `nums[i]` plus the maximum loot obtainable from houses up to $i - 2$.
2. **Skip house $i$:** The total loot would be the maximum loot obtainable up to house $i - 1$.

Thus, the recurrence relation is:
$$\text{dp}[i] = \max(\text{dp}[i - 1], \text{dp}[i - 2] + \text{nums}[i])$$

Notice that computing $\text{dp}[i]$ only requires the results of the previous two states: $\text{dp}[i - 1]$ and $\text{dp}[i - 2]$. Therefore, we can optimize space from $\mathcal{O}(n)$ to $\mathcal{O}(1)$ by maintaining two scalar variables, `prev2` and `prev1`.

### Step-by-Step Algorithm:
1. Handle edge cases:
   - If `nums` is null or empty, return `0`.
   - If `nums.length == 1`, return `nums[0]`.
2. Initialize two variables:
   - `prev2 = 0`: represents the maximum loot up to two houses prior.
   - `prev1 = 0`: represents the maximum loot up to the immediately preceding house.
3. Iterate through each value `val` in `nums`:
   - Calculate `currentMax = Math.max(prev1, prev2 + val)`.
   - Update `prev2 = prev1`.
   - Update `prev1 = currentMax`.
4. Return `prev1`, which holds the maximum money that can be robbed across all houses.

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    if (nums.length == 1) {
        return nums[0];
    }

    int prev2 = 0;
    int prev1 = 0;

    for (int i = 0; i < nums.length; i = i + 1) {
        int current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
```
