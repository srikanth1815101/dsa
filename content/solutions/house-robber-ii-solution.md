---
title: "House Robber II - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/house-robber-ii/"
weight: 49
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Because the houses are arranged circularly, the first house and the last house are adjacent. Therefore, the robber cannot rob both house $0$ and house $n - 1$.

This circular constraint partitions the problem into two mutually exclusive, linear subproblems:
1. **Subproblem 1:** Consider robbing houses in range $[0, n - 2]$ (excluding the last house).
2. **Subproblem 2:** Consider robbing houses in range $[1, n - 1]$ (excluding the first house).

Each subproblem is identical to the standard linear House Robber problem, solvable using dynamic programming with constant extra space in $\mathcal{O}(n)$ time. The overall answer is simply the maximum result between these two subproblems.

Special cases:
- If $n = 1$, only house $0$ can be robbed, yielding `nums[0]`.
- If $n = 2$, only the house with higher loot can be robbed, yielding `Math.max(nums[0], nums[1])`.

### Step-by-Step Algorithm:
1. Check base conditions:
   - If `nums.length == 0`, return `0`.
   - If `nums.length == 1`, return `nums[0]`.
   - If `nums.length == 2`, return `Math.max(nums[0], nums[1])`.
2. Define a helper method `robLinear(nums, start, end)`:
   - Initialize `prev2 = 0` and `prev1 = 0`.
   - Iterate index `i` from `start` to `end`:
     - Calculate `current = Math.max(prev1, prev2 + nums[i])`.
     - Update `prev2 = prev1`.
     - Update `prev1 = current`.
   - Return `prev1`.
3. Compute `option1 = robLinear(nums, 0, nums.length - 2)`.
4. Compute `option2 = robLinear(nums, 1, nums.length - 1)`.
5. Return `Math.max(option1, option2)`.

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    if (nums.length == 1) {
        return nums[0];
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }

    int option1 = robLinear(nums, 0, nums.length - 2);
    int option2 = robLinear(nums, 1, nums.length - 1);

    return Math.max(option1, option2);
}

private static int robLinear(int[] nums, int start, int end) {
    int prev2 = 0;
    int prev1 = 0;

    for (int i = start; i <= end; i = i + 1) {
        int current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
```
