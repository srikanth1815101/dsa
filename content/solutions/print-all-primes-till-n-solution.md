---
title: "Print All Primes Till N - Solution"
problemUrl: "/problems/print-all-primes-till-n/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find all prime numbers up to a given integer `N`, we can iterate through each number and perform a standard primality test.

Extending the optimal $O(\sqrt{N})$ divisibility check across a loop operating from 2 to $N$ provides an easy-to-understand $O(N \sqrt{N})$ algorithm.

### Step-by-Step Algorithm:
1. **Edge Cases**: Create an empty `ArrayList`. If `n <= 1`, return it immediately.
2. **Outer Loop**: Start a loop for `i` from 2 up to `n` to evaluate each number comprehensively.
3. **Inner Loop (Primality)**: Assume `isPrime` is true. Start a second loop `j` from 2 up to the square root of `i`.
4. If `i` is divisible by `j`, flag `isPrime = false` and break the inner loop early.
5. **Collection**: If the flag remains `true`, add `i` to the `ArrayList`.

## Code

```java
public static List<Integer> solve(int n) {
    List<Integer> primes = new ArrayList<>();
    if (n <= 1) return primes;
    
    for (int i = 2; i <= n; i++) {
        boolean isPrime = true;
        
        for (int j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.add(i);
        }
    }
    return primes;
}
```
