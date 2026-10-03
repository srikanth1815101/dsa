---
title: "XOR of All Subarrays - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/xor-of-all-subarrays/"
weight: 74
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the XOR sum of all contiguous subarray XOR values. A brute-force approach generates $\mathcal{O}(n^2)$ subarrays, which is too slow for $n = 10^5$.

Instead of evaluating subarrays individually, we analyze **how many times each element `nums[i]` appears** across all subarrays:
- The element at index `i` (0-indexed) can be chosen as part of any subarray starting at an index from $0$ to $i$ (there are $i + 1$ choices) and ending at an index from $i$ to $n - 1$ (there are $n - i$ choices).
- Hence, `nums[i]` appears in exactly:
  $$\text{frequency}(i) = (i + 1) \cdot (n - i) \text{ subarrays}$$

Because $x \oplus x = 0$:
- If $\text{frequency}(i)$ is **even**, `nums[i]` cancels out completely to `0`.
- If $\text{frequency}(i)$ is **odd**, `nums[i]` contributes `nums[i]` once to the total XOR sum.

Now, consider the parity of $(i + 1) \cdot (n - i)$:
1. **When $n$ is even:**
   - One of $(i + 1)$ and $(n - i)$ will be even and the other will be odd.
   - Therefore, their product is always **even** for every index $i$.
   - Every element appears an even number of times, so the total XOR sum is always **0**.
2. **When $n$ is odd:**
   - The product $(i + 1) \cdot (n - i)$ is odd if and only if both factors are odd.
   - This occurs precisely when $(i + 1)$ is odd, which means $i$ is **even** ($i = 0, 2, 4, \dots$).
   - Therefore, only elements at **even indices** contribute to the total XOR sum.

### Step-by-Step Algorithm:
1. Let $n$ be the length of `nums`.
2. If $n$ is even (`n % 2 == 0`), return `0`.
3. Initialize `result = 0`.
4. Iterate through `nums` at even indices `i = 0, 2, 4, ...` up to $n - 1$:
   - Compute `result = result ^ nums[i]`.
5. Return `result`.

## Code

```java
public static int solve(int[] nums) {
    int n = nums.length;
    if (n % 2 == 0) {
        return 0;
    }

    int result = 0;
    for (int i = 0; i < n; i = i + 2) {
        result = result ^ nums[i];
    }

    return result;
}
```
