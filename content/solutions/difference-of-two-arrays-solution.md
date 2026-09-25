---
title: "Difference of Two Arrays - Solution"
problemUrl: "/problems/difference-of-two-arrays/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To subtract array $a_2$ from array $a_1$ where $a_1 \ge a_2$:

1. **Allocate Output Buffer**:
   Since $a_1 \ge a_2$, the difference will have at most $n = a_1.\text{length}$ digits. Allocate an array `diff` of size $n$.

2. **Column-Wise Subtraction with Borrow**:
   Initialize pointers at the end of both arrays:
   - $i = a_1.\text{length} - 1$
   - $j = a_2.\text{length} - 1$
   - $k = n - 1$
   And `borrow = 0`.

   While $k \ge 0$:
   $$\text{val} = a_1[i] - \text{borrow} - (\text{if } j \ge 0 \text{ then } a_2[j] \text{ else } 0)$$
   - If $\text{val} < 0$, we borrow from the next column:
     $$\text{val} = \text{val} + 10$$
     $$\text{borrow} = 1$$
   - Else:
     $$\text{borrow} = 0$$
   Assign $\text{diff}[k] = \text{val}$ and decrement $i, j, k$.

3. **Strip Leading Zeros**:
   Scan from left to find the first non-zero digit index `start`. If all digits are zero, preserve the single zero `[0]`. Copy elements from `start` to $n - 1$ into the return array.

### Complexity Analysis
- **Time Complexity**: $O(a_1.\text{length})$, single pass across the arrays plus a linear scan to trim leading zeros.
- **Space Complexity**: $O(a_1.\text{length})$ for the difference array.

---

## Code

```java
public static int[] solve(int[] a1, int[] a2) {
    if (a1 == null || a1.length == 0) {
        return new int[]{0};
    }
    if (a2 == null || a2.length == 0) {
        return a1;
    }

    int n = a1.length;
    int[] diff = new int[n];

    int i = a1.length - 1;
    int j = a2.length - 1;
    int k = n - 1;
    int borrow = 0;

    while (k >= 0) {
        int d = a1[i] - borrow;
        if (j >= 0) {
            d = d - a2[j];
        }

        if (d < 0) {
            d = d + 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        diff[k] = d;

        i = i - 1;
        j = j - 1;
        k = k - 1;
    }

    int start = 0;
    while (start < n - 1 && diff[start] == 0) {
        start = start + 1;
    }

    if (start == 0) {
        return diff;
    }

    int[] res = new int[n - start];
    for (int idx = 0; idx < res.length; idx = idx + 1) {
        res[idx] = diff[start + idx];
    }
    return res;
}
```
