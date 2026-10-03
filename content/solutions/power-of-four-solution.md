---
title: "Power of Four - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/power-of-four/"
weight: 72
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

An integer `n` is a power of four ($n = 4^x$ for $x \ge 0$) if and only if it satisfies three conditions:
1. $n > 0$: Powers of four are strictly positive.
2. $(n \ \& \ (n - 1)) == 0$: Since $4^x = (2^2)^x = 2^{2x}$, every power of four is also a power of two, which means it has exactly one set bit in its binary representation.
3. The single set bit must be located at an **even bit position** (0, 2, 4, ..., 30). For example:
   - $4^0 = 1 = 2^0$ (bit 0)
   - $4^1 = 4 = 2^2$ (bit 2)
   - $4^2 = 16 = 2^4$ (bit 4)
   - In contrast, $2 = 2^1$ (bit 1) and $8 = 2^3$ (bit 3) have their set bit at odd positions.

To check if the set bit is at an even position in constant time:
- Consider the 32-bit hexadecimal mask `0x55555555` = `01010101010101010101010101010101` in binary.
- This mask has `1`s at all even bit positions and `0`s at all odd bit positions.
- Therefore, `(n & 0x55555555) != 0` confirms that the set bit is at an even index.

### Step-by-Step Algorithm:
1. Check if `n <= 0`. If so, return `false`.
2. Check if `(n & (n - 1)) != 0`. If so, it is not a power of two, so return `false`.
3. Check if `(n & 0x55555555) != 0`. If so, return `true`.
4. Otherwise, return `false`.

## Code

```java
public static boolean solve(int n) {
    if (n <= 0) {
        return false;
    }

    if ((n & (n - 1)) != 0) {
        return false;
    }

    return (n & 0x55555555) != 0;
}
```
