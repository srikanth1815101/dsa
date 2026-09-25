---
title: "Any Base Addition - Solution"
problemUrl: "/problems/any-base-addition/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To add two numbers $n_1$ and $n_2$ directly in base $b$, we simulate elementary grade-school addition column by column starting from the least significant digit:

1. **Extract Digits**:
   Extract the rightmost digits using decimal modulo:
   $$d_1 = n_1 \pmod{10}, \quad d_2 = n_2 \pmod{10}$$
   Reduce both numbers by dividing by 10:
   $$n_1 = \lfloor n_1 / 10 \rfloor, \quad n_2 = \lfloor n_2 / 10 \rfloor$$

2. **Compute Column Sum & Carry**:
   Combine the extracted digits with any incoming carry:
   $$\text{sum} = d_1 + d_2 + \text{carry}$$
   In base $b$, the current column digit is:
   $$\text{rem} = \text{sum} \pmod{b}$$
   And the carry passed to the next column is:
   $$\text{carry} = \lfloor \text{sum} / b \rfloor$$

3. **Accumulate Result**:
   Place $\text{rem}$ in the output using a power-of-10 positional multiplier:
   $$\text{ans} = \text{ans} + (\text{rem} \times \text{power})$$
   $$\text{power} = \text{power} \times 10$$

Repeat this loop while $n_1 > 0$, $n_2 > 0$, or $\text{carry} > 0$.

### Complexity Analysis
- **Time Complexity**: $O(\max(\log_{10} n_1, \log_{10} n_2))$, since the number of iterations equals the maximum number of digits in the operands plus at most one carry digit.
- **Space Complexity**: $O(1)$, requiring only a constant number of tracking variables.

---

## Code

```java
public static long solve(long n1, long n2, int b) {
    long ans = 0;
    long carry = 0;
    long power = 1;

    while (n1 > 0 || n2 > 0 || carry > 0) {
        long d1 = n1 % 10;
        long d2 = n2 % 10;
        n1 = n1 / 10;
        n2 = n2 / 10;

        long sum = d1 + d2 + carry;
        carry = sum / b;
        long rem = sum % b;

        ans = ans + (rem * power);
        power = power * 10;
    }

    return ans;
}
```
