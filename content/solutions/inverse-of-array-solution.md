---
title: "Inverse of Array - Solution"
problemUrl: "/problems/inverse-of-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The **inverse** of a permutation array maps each element's value to its original index:

$$\text{inv}[\text{arr}[i]] = i$$

### Algorithm
1. Allocate a new integer array `inv` of length $n = \text{arr.length}$.
2. Iterate through each index $i$ from `0` to $n - 1$:
   - Extract $v = \text{arr}[i]$.
   - Assign $\text{inv}[v] = i$.
3. Return `inv`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since we iterate through the array once and perform an $O(1)$ direct array index assignment per element.
- **Space Complexity**: $O(n)$ to store the inverted permutation array.

---

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null) {
        return null;
    }

    int n = arr.length;
    int[] inv = new int[n];

    for (int i = 0; i < n; i = i + 1) {
        int v = arr[i];
        inv[v] = i;
    }

    return inv;
}
```
