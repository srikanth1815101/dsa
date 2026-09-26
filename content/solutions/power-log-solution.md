---
title: "Power (Log) - Solution"
problemUrl: "/problems/power-log/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Binary exponentiation halves the exponent at each step:
- If $n = 0 \implies x^0 = 1$
- If $n$ is even $\implies x^n = (x^{n/2}) \times (x^{n/2})$
- If $n$ is odd $\implies x^n = x \times (x^{n/2}) \times (x^{n/2})$

Storing the subproblem result $x^{n/2}$ avoids duplicate branches, reducing recursion calls from $O(n)$ to $O(\log n)$.

### Algorithm Steps
1. **Base Case**: If `n == 0`, return `1L`.
2. Compute `half = solve(x, n / 2)`.
3. Compute `halfSq = half * half`.
4. If `n % 2 == 1`, return `x * halfSq`.
5. Else return `halfSq`.

### Complexity Analysis
- **Time Complexity**: $O(\log n)$, as exponent $n$ is halved on every recursive call.
- **Space Complexity**: $O(\log n)$ call stack frames.

---

## Code

```java
public static long solve(int x, int n) {
    if (n == 0) {
        return 1L;
    }

    long half = solve(x, n / 2);
    long halfSq = half * half;

    if (n % 2 != 0) {
        return (long) x * halfSq;
    }

    return halfSq;
}
```
