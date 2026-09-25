---
title: "Any Base to Decimal - Solution"
problemUrl: "/problems/any-base-to-decimal/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To convert a number $n$ written in base $b$ to base 10 (decimal):

1. **Extract Least Significant Digit**:
   The number $n$ stores its base-$b$ digits in standard base-10 digit positions, so we extract the rightmost digit using:
   $$\text{rem} = n \pmod{10}$$

2. **Multiply by Positional Base Weight**:
   Each digit position represents an increasing power of base $b$ ($b^0, b^1, b^2, \dots$):
   $$\text{ans} = \text{ans} + (\text{rem} \times \text{power})$$
   $$\text{power} = \text{power} \times b$$

3. **Truncate Digit**:
   $$n = \lfloor n / 10 \rfloor$$

This loop terminates when $n = 0$.

### Complexity Analysis
- **Time Complexity**: $O(\log_{10} n)$, since the number of digits in $n$ is proportional to $\log_{10} n$.
- **Space Complexity**: $O(1)$, using constant auxiliary space.

### Edge Cases
- When $n = 0$, the loop does not run and correctly returns `0`.

---

## Code

```java
public static int solve(long n, int b) {
    long ans = 0;
    long power = 1;

    while (n > 0) {
        long rem = n % 10;
        n = n / 10;
        ans = ans + (rem * power);
        power = power * b;
    }

    return (int) ans;
}
```
