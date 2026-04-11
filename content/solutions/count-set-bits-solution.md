---
title: "Count Set Bits - Solution"
problemUrl: "/problems/count-set-bits/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

There are several ways to count set bits. The most efficient is **Kernighan's Algorithm**.

### The Logic (Kernighan's):
Subtracting 1 from a number flips all the bits after the rightmost set bit (including the bit itself).
For example:
`n = 12` (1100)
`n - 1 = 11` (1011)

When we perform a bitwise AND between `n` and `n - 1`, the rightmost set bit in `n` is turned off.
`n & (n - 1)` -> `1100 & 1011` = `1000` (8)

By repeatedly performing `n = n & (n - 1)` and counting the steps until `n` becomes 0, we can find the exact number of set bits.

### Simple Approach:
Another way is to check the last bit using `n % 2` (or `n & 1`), increment the count if it's 1, and shift the number right using `n / 2` (or `n >> 1`).

### Step-by-Step Algorithm (Kernighan's):
1. Initialize `count = 0`.
2. While `n > 0`:
    - Perform `n = n & (n - 1)`.
    - Increment `count`.
3. Return `count`.

## Code

```java
public static int solve(int n) {
    int count = 0;
    
    while (n > 0) {
        n = n & (n - 1);
        count = count + 1;
    }
    
    return count;
}
```
