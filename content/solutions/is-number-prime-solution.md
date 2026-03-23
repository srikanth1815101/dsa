---
title: "Is Number Prime - Solution"
problemUrl: "/problems/is-number-prime/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if a number `n` is prime, we must verify that it has no divisors other than 1 and itself. 

**Wait, what about the algorithm?**
The most efficient common way is to check divisibility from 2 up to the square root of `n` (`√n`). 

**Why only up to √n?**
If `n = a * b` and both `a` and `b` were greater than `√n`, then `a * b` would be greater than `n`. Thus, at least one factor must be less than or equal to `√n`.

### Step-by-Step Algorithm:
1. Handle edge cases: If `n <= 1`, it's not prime.
2. Iterate from `i = 2` to `i * i <= n`.
3. For each `i`, check if `n % i == 0`.
4. If divisible, return `false`.
5. If the loop completes without finding a divisor, return `true`.

## Code

```java
public static boolean solve(int n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
```
