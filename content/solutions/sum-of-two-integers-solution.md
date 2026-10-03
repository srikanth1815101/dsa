---
title: "Sum of Two Integers (No + / -) - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/sum-of-two-integers/"
weight: 76
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks us to add two integers without using arithmetic `+` or `-` operators.

At the hardware level, digital adders (such as half-adders and full-adders) compute sums using two fundamental bitwise operations:
1. **Sum without carry (XOR):**
   - $0 + 0 = 0$
   - $0 + 1 = 1$
   - $1 + 0 = 1$
   - $1 + 1 = 0$ (with carry 1)
   - This truth table is identical to the XOR operator: `a ^ b`.
2. **Carry generation (AND with left shift):**
   - A carry is produced only when both bits are $1$ ($1 + 1$).
   - This truth table corresponds to the AND operator: `a & b`.
   - The carry belongs to the next higher significance bit position, so it must be shifted left by 1: `(a & b) << 1`.

By repeatedly computing the sum without carry and the shifted carry until the carry becomes zero (`b == 0`), `a` accumulates the final addition result. In Java, 32-bit signed two's complement handles negative numbers automatically without special branching.

### Step-by-Step Algorithm:
1. While `b != 0`:
   - Compute the carry bits: `carry = (a & b) << 1`.
   - Update `a` to be the sum without carry: `a = a ^ b`.
   - Update `b` to be the carry: `b = carry`.
2. Return `a`.

## Code

```java
public static int solve(int a, int b) {
    while (b != 0) {
        int carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }

    return a;
}
```
