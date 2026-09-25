---
title: "Sum of Two Arrays - Solution"
problemUrl: "/problems/sum-of-two-arrays/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To add two numbers represented as digit arrays of lengths $n_1$ and $n_2$:

1. **Allocate Output Buffer**:
   The maximum possible length of the sum without an overflow carry is $n = \max(n_1, n_2)$. We allocate an array `sum` of size $n$.

2. **Right-to-Left Traversal**:
   We maintain three pointers:
   - $i = n_1 - 1$ (for `a1`)
   - $j = n_2 - 1$ (for `a2`)
   - $k = n - 1$ (for `sum`)
   And a `carry` initialized to `0`.

   While $k \ge 0$:
   $$\text{digit} = \text{carry} + (\text{if } i \ge 0 \text{ then } a_1[i] \text{ else } 0) + (\text{if } j \ge 0 \text{ then } a_2[j] \text{ else } 0)$$
   $$\text{carry} = \lfloor \text{digit} / 10 \rfloor, \quad \text{sum}[k] = \text{digit} \pmod{10}$$
   Decrement $i$, $j$, and $k$.

3. **Leading Carry Handling**:
   - If $\text{carry} > 0$ after completing all digits, create an array of size $n + 1$ with $\text{res}[0] = \text{carry}$ and copy `sum` into indices $1 \dots n$.
   - If $\text{carry} == 0$, return `sum` directly.

### Complexity Analysis
- **Time Complexity**: $O(\max(n_1, n_2))$, single pass across the larger array.
- **Space Complexity**: $O(\max(n_1, n_2))$ to store the result array.

---

## Code

```java
public static int[] solve(int[] a1, int[] a2) {
    if (a1 == null || a1.length == 0) {
        return a2 == null ? new int[0] : a2;
    }
    if (a2 == null || a2.length == 0) {
        return a1;
    }

    int n = Math.max(a1.length, a2.length);
    int[] sum = new int[n];

    int i = a1.length - 1;
    int j = a2.length - 1;
    int k = n - 1;
    int carry = 0;

    while (k >= 0) {
        int d = carry;
        if (i >= 0) {
            d = d + a1[i];
        }
        if (j >= 0) {
            d = d + a2[j];
        }

        carry = d / 10;
        sum[k] = d % 10;

        i = i - 1;
        j = j - 1;
        k = k - 1;
    }

    if (carry != 0) {
        int[] res = new int[n + 1];
        res[0] = carry;
        for (int idx = 0; idx < n; idx = idx + 1) {
            res[idx + 1] = sum[idx];
        }
        return res;
    }

    return sum;
}
```
