---
title: "Factorial - Solution"
problemUrl: "/problems/factorial-solution/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Factorial is defined recursively:
- $0! = 1$
- $n! = n \times (n - 1)!$ for $n \ge 1$

### Algorithm Steps
1. **Base Case**: If `n == 0` or `n == 1`, return `1L`.
2. **Recursive Step**: Return `n * solve(n - 1)`.
3. Use `long` return type to support $n$ up to 20 without integer overflow ($20! \approx 2.43 \times 10^{18} < 2^{63} - 1$).

### Complexity Analysis
- **Time Complexity**: $O(n)$, executing $n$ recursive multiplications.
- **Space Complexity**: $O(n)$ recursion call stack depth.

---

## Code

```java
public static long solve(int n) {
    if (n <= 1) {
        return 1L;
    }
    return (long) n * solve(n - 1);
}
```
