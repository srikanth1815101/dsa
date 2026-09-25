---
title: "Decimal to Any Base - Solution"
problemUrl: "/problems/decimal-to-any-base/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To convert a decimal integer $n$ into a target base $b$, we perform standard base-conversion using repeated division and modulus arithmetic:

1. **Extract Remainder**:
   $$\text{rem} = n \pmod{b}$$
   This remainder represents the current least significant digit in base $b$.

2. **Accumulate Value**:
   To place the digit in its correct position without using string operations, we scale it by powers of 10:
   $$\text{ans} = \text{ans} + (\text{rem} \times \text{power})$$
   $$\text{power} = \text{power} \times 10$$

3. **Divide Number**:
   $$n = \lfloor n / b \rfloor$$

This loop terminates when $n = 0$.

### Complexity Analysis
- **Time Complexity**: $O(\log_b n)$, because with each step $n$ is reduced by a factor of $b$.
- **Space Complexity**: $O(1)$, requiring only a constant number of scalar tracking variables.

### Edge Cases
- When $n = 0$, the loop does not execute, correctly returning `0`.

---

## Code

```java
public static long solve(int n, int b) {
    long ans = 0;
    long power = 1;

    while (n > 0) {
        int rem = n % b;
        n = n / b;
        ans = ans + (rem * power);
        power = power * 10;
    }

    return ans;
}
```
