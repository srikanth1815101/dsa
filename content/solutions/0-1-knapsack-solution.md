---
title: "0/1 Knapsack - Solution"
problemUrl: "/problems/0-1-knapsack/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The 0/1 Knapsack problem is the classic optimization problem where each item must either be fully included or fully excluded:

1. **State Definition**: Let `dp[w]` denote the maximum value obtainable with a knapsack capacity of `w`.
2. **Transition**: For each item with weight `wt` and value `val`:
   - We traverse capacities `w` backwards from `capacity` down to `wt`.
   - `dp[w] = Math.max(dp[w], val + dp[w - wt])`.
3. **Backward Traversal**: Iterating backwards ensures that `dp[w - wt]` contains the solution from previous items only, preventing any item from being included multiple times.
4. The maximum value for the entire capacity is found at `dp[capacity]` in $O(n \cdot \text{capacity})$ time and $O(\text{capacity})$ space.

### Step-by-Step Algorithm:
1. If `values == null || weights == null || capacity <= 0`, return `0`.
2. Let `int n = values.length`.
3. Allocate `int[] dp = new int[capacity + 1]`.
4. Loop `i` from `0` to `n - 1`:
   - Let `int val = values[i]` and `int wt = weights[i]`.
   - Loop `w` backwards from `capacity` down to `wt`:
     - `dp[w] = Math.max(dp[w], val + dp[w - wt])`.
5. Return `dp[capacity]`.

## Code

```java
public static int solve(int[] values, int[] weights, int capacity) {
    if (values == null || weights == null || capacity <= 0) {
        return 0;
    }

    int n = values.length;
    int[] dp = new int[capacity + 1];

    for (int i = 0; i < n; i = i + 1) {
        int val = values[i];
        int wt = weights[i];
        for (int w = capacity; w >= wt; w = w - 1) {
            int included = val + dp[w - wt];
            if (included > dp[w]) {
                dp[w] = included;
            }
        }
    }

    return dp[capacity];
}
```
