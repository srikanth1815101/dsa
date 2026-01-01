---
title: "Solution: Climbing Stairs"
date: 2024-01-07
problemUrl: "/problems/climbing-stairs/"
---

## Approach

This is a classic Dynamic Programming problem that maps effectively to the Fibonacci sequence.

To reach step `n`, you could have come from step `n-1` (single step) or `n-2` (double step).
Therefore: `ways(n) = ways(n-1) + ways(n-2)`.

Base cases:
- Step 1: 1 way
- Step 2: 2 ways

We can optimize space by only keeping track of the last two values.

### Complexity

- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

## Code

```java
public class Solution {
    public int climbStairs(int n) {
        if (n <= 1) return 1;
        int prev = 1, curr = 1;
        for (int i = 2; i <= n; i++) {
            int temp = curr;
            curr = prev + curr;
            prev = temp;
        }
        return curr;
    }
}
```
