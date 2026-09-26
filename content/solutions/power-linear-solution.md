---
title: "Power (Linear) - Solution"
problemUrl: "/problems/power-linear/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Computing $x^n$ linearly follows the identity:
- $x^0 = 1$
- $x^n = x \times x^{n - 1}$ for $n > 0$

### Algorithm Steps
1. **Base Case**: If `n == 0`, return `1L`.
2. **Recursive Call**: Recursively evaluate `solve(x, n - 1)`.
3. **Combine**: Return `x * solve(x, n - 1)`.
4. Cast to `long` to avoid integer overflow.

### Complexity Analysis
- **Time Complexity**: $O(n)$, executing $n$ recursive multiplications.
- **Space Complexity**: $O(n)$ stack depth for recursion.

---

## Code

```java
public static long solve(int x, int n) {
    if (n == 0) {
        return 1L;
    }
    return (long) x * solve(x, n - 1);
}
```
