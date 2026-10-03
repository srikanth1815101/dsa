---
title: "Power of Two - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/power-of-two/"
weight: 71
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks whether a given 32-bit signed integer `n` can be expressed as $2^x$ for some integer $x \ge 0$.

Powers of two in binary representation have a unique property:
- A power of two is strictly positive ($n > 0$).
- Its binary representation has exactly **one set bit** (1) and all other bits are 0 (e.g., $1 = 0001_2$, $2 = 0010_2$, $4 = 0100_2$, $8 = 1000_2$).
- Subtracting 1 from a power of two flips all the bits from the least significant set bit to the right (e.g., $8 - 1 = 7 = 0111_2$).
- Therefore, performing bitwise AND between $n$ and $n - 1$ cancels the only set bit, resulting in 0:
  $$n \ \& \ (n - 1) = 0$$

If $n \le 0$, it cannot be a power of two. In particular, $-2147483648$ (`Integer.MIN_VALUE`) has binary representation `1000...0000` where `n & (n - 1) == 0` due to two's complement underflow, so checking `n > 0` is strictly necessary.

### Step-by-Step Algorithm:
1. Check if `n > 0`. If `false`, return `false`.
2. Evaluate `(n & (n - 1)) == 0`.
3. Return `true` if the condition is met, otherwise return `false`.

## Code

```java
public static boolean solve(int n) {
    if (n <= 0) {
        return false;
    }

    return (n & (n - 1)) == 0;
}
```
