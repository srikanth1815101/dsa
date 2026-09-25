---
title: "Any Base Subtraction - Solution"
problemUrl: "/problems/any-base-subtraction/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To subtract two base-$b$ numbers $n_1$ and $n_2$ (where $n_1 \ge n_2$), we simulate grade-school subtraction from the least significant digit to the most significant digit while maintaining a `borrow` indicator:

1. **Extract Digits**:
   Extract the rightmost digits using modulo 10:
   $$d_1 = n_1 \pmod{10}, \quad d_2 = n_2 \pmod{10}$$
   $$n_1 = \lfloor n_1 / 10 \rfloor, \quad n_2 = \lfloor n_2 / 10 \rfloor$$

2. **Evaluate Difference with Borrow**:
   $$\text{diff} = d_1 - d_2 - \text{borrow}$$
   - If $\text{diff} < 0$, we borrow from the next higher digit column. Since each column has radix $b$, a borrowed unit is worth $b$:
     $$\text{diff} = \text{diff} + b$$
     $$\text{borrow} = 1$$
   - If $\text{diff} \ge 0$, no borrow is required:
     $$\text{borrow} = 0$$

3. **Accumulate Result**:
   Place $\text{diff}$ at the appropriate decimal place:
   $$\text{ans} = \text{ans} + (\text{diff} \times \text{power})$$
   $$\text{power} = \text{power} \times 10$$

Repeat this loop while $n_1 > 0$.

### Complexity Analysis
- **Time Complexity**: $O(\log_{10} n_1)$, since $n_1$ has the greater number of digits.
- **Space Complexity**: $O(1)$, using constant auxiliary space.

---

## Code

```java
public static long solve(long n1, long n2, int b) {
    long ans = 0;
    long borrow = 0;
    long power = 1;

    while (n1 > 0) {
        long d1 = n1 % 10;
        long d2 = n2 % 10;
        n1 = n1 / 10;
        n2 = n2 / 10;

        long diff = d1 - d2 - borrow;
        if (diff < 0) {
            diff = diff + b;
            borrow = 1;
        } else {
            borrow = 0;
        }

        ans = ans + (diff * power);
        power = power * 10;
    }

    return ans;
}
```
