---
title: "Is Number Prime - Solution"
problemUrl: "/problems/is-number-prime/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if a number `n` is prime, we evaluate if it has any divisors other than 1 and itself. The optimal mathematical approach is checking divisibility up to the square root of `n` ($\sqrt{N}$).

If $N = a \times b$ and both $a$ and $b$ were strictly greater than $\sqrt{N}$, their product would exceed $N$. Thus, if a divisor exists, at least one must be less than or equal to $\sqrt{N}$.

### Step-by-Step Algorithm:
1. **Edge Cases**: If `n <= 1`, it cannot be prime.
2. **Loop Definition**: Start a loop from `i = 2` and continue while `i * i <= n`.
3. **Divisibility Check**: Use the modulo operator to determine if `n % i == 0`.
4. If it divides evenly, return `false`.
5. If the loop completes without returning, it means no divisors exist, so return `true`.

## Code

```java
public static boolean solve(int n) {
    if (n <= 1) return false;
    
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
```
