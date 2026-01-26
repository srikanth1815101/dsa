---
title: "Climbing Stairs - Solution"
problemUrl: "/problems/climbing-stairs/"
---

## Explanation

This is a classic **dynamic programming** problem that follows the Fibonacci sequence pattern.

**Intuition:** To reach step `n`, you can either:
- Take 1 step from step `n-1`, OR
- Take 2 steps from step `n-2`

So `ways(n) = ways(n-1) + ways(n-2)`

Base cases: `ways(1) = 1`, `ways(2) = 2`

We optimize space by only keeping track of the last two values instead of the entire array.

## Code

```java
class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        int a = 1, b = 2;
        for (int i = 3; i <= n; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}
```
