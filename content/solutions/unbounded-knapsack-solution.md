---
title: "Unbounded Knapsack - Solution"
problemUrl: "/problems/unbounded-knapsack/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In the Unbounded Knapsack problem, items can be selected repeatedly with infinite availability:

1. **State Definition**: Let `dp[w]` denote the maximum value achievable with a knapsack capacity of `w`.
2. **Forward Traversal**:
   - For each item `(val, wt)`, iterate capacities `w` forwards from `wt` to `capacity`.
   - `dp[w] = Math.max(dp[w], val + dp[w - wt])`.
   - Because `dp[w - wt]` already reflects decisions made in the current pass (including potentially using the same item multiple times), the forward loop naturally accommodates unlimited item repetitions.
3. The optimal value for the entire capacity is obtained at `dp[capacity]` in $O(n \cdot \text{capacity})$ time and $O(\text{capacity})$ space.

### Step-by-Step Algorithm:
1. If `values == null || weights == null || capacity <= 0`, return `0`.
2. Let `int n = values.length`.
3. Allocate `int[] dp = new int[capacity + 1]`.
4. Loop `i` from `0` to `n - 1`:
   - Let `int val = values[i]` and `int wt = weights[i]`.
   - Loop `w` from `wt` to `capacity`:
     - `int included = val + dp[w - wt]`.
     - If `included > dp[w]`:
       - `dp[w] = included`.
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
        for (int w = wt; w <= capacity; w = w + 1) {
            int included = val + dp[w - wt];
            if (included > dp[w]) {
                dp[w] = included;
            }
        }
    }

    return dp[capacity];
}
```
