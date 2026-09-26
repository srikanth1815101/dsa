---
title: "Missing Number - Solution"
problemUrl: "/problems/missing-number/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the missing number from the range $[0, n]$ in $O(n)$ time and $O(1)$ space, we can leverage the **XOR Bitwise Operator**:

1. **XOR Self-Inverse Property**:
   - For any integer $x$:
     $$x \oplus x = 0$$
     $$x \oplus 0 = x$$
   - XOR is both commutative and associative, meaning the order of operations does not alter the result.

2. **Algorithm Steps**:
   - Initialize `xor = n`.
   - Iterate through the array for every index $i$ from 0 to $n-1$:
     - XOR the accumulator with both the index $i$ and the array value $\text{nums}[i]$:
       $$\text{xor} = \text{xor} \oplus i \oplus \text{nums}[i]$$
   - Every number from $0$ to $n$ that is present in the array will appear exactly twice (once as an index or the initial value $n$, and once as an element in `nums`).
   - Pairs cancel out to zero, leaving only the missing number that appeared exactly once.

3. **Advantages over Summation**:
   - Unlike the arithmetic summation formula $\frac{n(n+1)}{2}$, XOR does not accumulate large integer values and is immune to 32-bit integer overflow when $n \ge 10^5$.

### Complexity Analysis
- **Time Complexity**: $O(n)$, executing a single pass of $n$ iterations.
- **Space Complexity**: $O(1)$, using only one accumulator variable.

---

## Code

```java
public static int solve(int[] nums) {
    int n = nums.length;
    int xor = n;

    for (int i = 0; i < n; i++) {
        xor = xor ^ i ^ nums[i];
    }

    return xor;
}
```
