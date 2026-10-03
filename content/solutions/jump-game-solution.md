---
title: "Jump Game - Solution"
problemUrl: "/problems/jump-game/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We maintain a variable `maxReach` tracking the furthest index reachable so far.

As we iterate `i` from `0` to `nums.length - 1`:
1. If `i > maxReach`, we have encountered an unreachable index, so return `false`.
2. Update `maxReach = Math.max(maxReach, i + nums[i])`.
3. If `maxReach >= nums.length - 1`, we can reach the end; return `true`.

Since we perform a single linear pass with constant extra memory, the time complexity is `O(n)` and space complexity is `O(1)`.

### Step-by-Step Algorithm:
1. Initialize `maxReach = 0` and `n = nums.length`.
2. Iterate index `i` from `0` to `n - 1`.
3. If `i > maxReach`, return `false`.
4. Update `maxReach = Math.max(maxReach, i + nums[i])`.
5. If `maxReach >= n - 1`, return `true`.
6. Return `true`.

## Code

```java
public static boolean solve(int[] nums) {
    int maxReach = 0;
    int n = nums.length;

    for (int i = 0; i < n; i = i + 1) {
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= n - 1) {
            return true;
        }
    }

    return true;
}
```
