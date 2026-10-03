---
title: "Single Number II - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/single-number-ii/"
weight: 69
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the unique element in an array where every other element appears exactly three times, subject to $\mathcal{O}(n)$ time and $\mathcal{O}(1)$ extra space constraints.

Because numbers appear three times, simple bitwise XOR does not immediately work since three duplicates do not cancel to zero ($x \oplus x \oplus x = x$). Instead, we can design a finite state machine for each bit position modulo 3:
- A bit can appear 0 times, 1 time, or 2 times.
- When it appears a 3rd time, the count resets to 0.

To track counts up to 2, we need two bits:
- `ones`: Holds bits that have appeared $1 \pmod 3$ times.
- `twos`: Holds bits that have appeared $2 \pmod 3$ times.

When a new number `num` is processed:
1. `ones = (ones ^ num) & ~twos`: The bit is toggled into `ones`, unless it was already recorded in `twos` (which would mean it reached 3 and should reset).
2. `twos = (twos ^ num) & ~ones`: The bit is toggled into `twos`, unless it is currently kept in `ones`.

After iterating through all numbers:
- Bits belonging to elements that appeared three times will transition: $0 \to 1 \to 2 \to 0$.
- Bits belonging to the single element will transition: $0 \to 1$ and end up in `ones`.
- Therefore, `ones` holds the single number.

### Step-by-Step Algorithm:
1. Initialize two integer variables `ones = 0` and `twos = 0`.
2. Iterate through each integer `num` in `nums`:
   - Update `ones = (ones ^ num) & ~twos`.
   - Update `twos = (twos ^ num) & ~ones`.
3. Return `ones`.

## Code

```java
public static int solve(int[] nums) {
    int ones = 0;
    int twos = 0;

    for (int i = 0; i < nums.length; i = i + 1) {
        int num = nums[i];
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }

    return ones;
}
```
