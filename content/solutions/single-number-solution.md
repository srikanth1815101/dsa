---
title: "Single Number - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/single-number/"
weight: 68
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks us to find the unique element in an array where every other element appears exactly twice. We are required to do this in $\mathcal{O}(n)$ time and $\mathcal{O}(1)$ additional space.

This problem is solved using the properties of the **bitwise XOR (`^`) operator**:
1. **Self-inverse:** $a \oplus a = 0$. Any number XORed with itself cancels out to 0.
2. **Identity element:** $a \oplus 0 = a$. Any number XORed with 0 remains unchanged.
3. **Commutativity and Associativity:** The order in which XOR operations are applied does not affect the outcome:
   $$a \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = b$$

If we XOR all the numbers in the array together:
- Every pair of duplicate numbers cancels out to $0$.
- The only element appearing once XORed with $0$ will remain as the final value.

### Step-by-Step Algorithm:
1. Initialize a variable `result = 0`.
2. Iterate through each element in `nums`.
3. Compute `result = result ^ nums[i]`.
4. After examining all elements, return `result`.

## Code

```java
public static int solve(int[] nums) {
    int result = 0;

    for (int i = 0; i < nums.length; i = i + 1) {
        result = result ^ nums[i];
    }

    return result;
}
```
