---
title: "Divide Two Integers - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/divide-two-integers/"
weight: 75
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem requires performing integer division without using the multiplication (`*`), division (`/`), or modulo (`%`) operators, while handling potential 32-bit signed integer overflow.

Instead of subtracting the divisor linearly (which takes $\mathcal{O}(\text{dividend})$ time and times out for large numbers like $2 \cdot 10^9$), we use **binary exponential search with bit shifts**:
1. Every integer can be represented in base-2 as a sum of powers of two:
   $$\text{dividend} = \text{divisor} \cdot (c_{31} 2^{31} + c_{30} 2^{30} + \dots + c_0 2^0) + \text{remainder}$$
   where each $c_i \in \{0, 1\}$.
2. By checking from the largest power of two ($i = 31$ down to $0$), if `(a >> i) >= b` (which is equivalent to $a \ge b \cdot 2^i$), we add $2^i$ to the quotient and subtract $b \cdot 2^i$ from $a$.
3. To avoid overflow during absolute value conversion of `Integer.MIN_VALUE` ($-2^{31}$), we cast operands to 64-bit `long`.
4. Special corner case: When `dividend == Integer.MIN_VALUE` and `divisor == -1`, the quotient is $2^{31}$, which exceeds `Integer.MAX_VALUE` ($2^{31} - 1$). In this case, we return `Integer.MAX_VALUE`.

### Step-by-Step Algorithm:
1. Handle the overflow edge case: if `dividend == Integer.MIN_VALUE` and `divisor == -1`, return `Integer.MAX_VALUE`.
2. Determine the sign of the result: `boolean negative = (dividend < 0) ^ (divisor < 0)`.
3. Convert both `dividend` and `divisor` to positive 64-bit integers: `a = Math.abs((long) dividend)` and `b = Math.abs((long) divisor)`.
4. Initialize `quotient = 0`.
5. Iterate `i` from 31 down to 0:
   - If `(a >> i) >= b`:
     - Add `1 << i` to `quotient`.
     - Subtract `b << i` from `a`.
6. If `negative` is true, return `-quotient`. Otherwise, return `quotient`.

## Code

```java
public static int solve(int dividend, int divisor) {
    if (dividend == Integer.MIN_VALUE && divisor == -1) {
        return Integer.MAX_VALUE;
    }

    boolean negative = (dividend < 0) ^ (divisor < 0);

    long a = Math.abs((long) dividend);
    long b = Math.abs((long) divisor);

    int quotient = 0;

    for (int i = 31; i >= 0; i = i - 1) {
        if ((a >> i) >= b) {
            quotient = quotient + (1 << i);
            a = a - (b << i);
        }
    }

    if (negative) {
        return -quotient;
    }

    return quotient;
}
```
