---
title: "Climbing Stairs - Solution"
problemUrl: "/problems/climbing-stairs/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the number of distinct ways to climb `n` stairs when only 1 or 2 steps are allowed at each move:

1. **State Definition**: Let `dp[i]` denote the number of ways to reach stair `i`.
2. **Transition**: To arrive at step `i`, one could have arrived from:
   - Step `i - 1` by taking a single step of size 1.
   - Step `i - 2` by taking a double step of size 2.
   Therefore, `dp[i] = dp[i - 1] + dp[i - 2]`.
3. **Base Cases**:
   - For `n = 1`, there is only 1 way: `(1)`.
   - For `n = 2`, there are 2 ways: `(1 + 1)` or `(2)`.
4. **Space Optimization**: Because `dp[i]` depends strictly on the preceding two values, we only need to maintain two variables (`first` and `second`) instead of allocating an entire array, optimizing auxiliary space to $O(1)$.

### Step-by-Step Algorithm:
1. If `n <= 2`, return `n`.
2. Initialize `int first = 1` and `int second = 2`.
3. Loop `i` from `3` to `n`:
   - Compute `int third = first + second`.
   - Update `first = second`.
   - Update `second = third`.
4. Return `second`.

## Code

```java
public static int solve(int n) {
    if (n <= 2) {
        return n;
    }

    int first = 1;
    int second = 2;

    for (int i = 3; i <= n; i = i + 1) {
        int third = first + second;
        first = second;
        second = third;
    }

    return second;
}
```
