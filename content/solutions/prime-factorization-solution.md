---
title: "Prime Factorization - Solution"
problemUrl: "/problems/prime-factorization/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The prime factorization of a number `n` is the set of prime numbers that multiply together to give `n`. 

The most efficient algorithm involves checking for divisibility starting from the smallest prime number, `2`.
1. While `n` is divisible by `2`, record `2` and divide `n` by `2`.
2. Move to the next odd number and repeat.
3. We only need to check divisors up to the square root of `n`. This is because if `n` has a factor larger than `sqrt(n)`, it must also have a factor smaller than `sqrt(n)` that we would have already found.
4. If after divided by all potential factors up to `sqrt(n)`, `n` is still greater than `1`, it means the remaining `n` is itself a prime factor.

### Step-by-Step Algorithm:
1. Initialize an empty list called `factors`.
2. Start a loop with divisor `d = 2`.
3. Continue the loop while `d * d <= n`:
    - While `n % d == 0`:
        - Add `d` to the `factors` list.
        - Update `n = n / d`.
    - Increment `d` by `1`.
4. After the loop, if `n` is greater than `1`, add the current value of `n` to the `factors` list.
5. Return the `factors` list.

## Code

```java
public static List<Integer> solve(int n) {
    List<Integer> factors = new ArrayList<>();
    
    for (int div = 2; div * div <= n; div = div + 1) {
        while (n % div == 0) {
            n = n / div;
            factors.add(div);
        }
    }
    
    if (n != 1) {
        factors.add(n);
    }
    
    return factors;
}
```
