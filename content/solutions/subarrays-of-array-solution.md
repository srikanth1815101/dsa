---
title: "Subarrays of Array - Solution"
problemUrl: "/problems/subarrays-of-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A **subarray** is a contiguous slice of an array. For an array of size $n$, the total number of non-empty contiguous subarrays is:

$$\frac{n(n + 1)}{2}$$

We generate all subarrays systematically using three nested loops:

1. **Start Index $i$**:
   Iterate $i$ from `0` to $n - 1$.
2. **End Index $j$**:
   Iterate $j$ from $i$ to $n - 1$.
3. **Collect Elements**:
   Iterate $k$ from $i$ to $j$:
   - Append `arr[k]`.
   - Append a tab (`\t`) between adjacent elements if $k < j$.
   - Append a newline (`\n`) after concluding the subarray at index $j$.

### Complexity Analysis
- **Time Complexity**: $O(n^3)$, since there are $O(n^2)$ subarrays and each subarray takes $O(n)$ time to copy on average.
- **Space Complexity**: $O(n^3)$ auxiliary space to store the concatenated string of all subarrays.

---

## Code

```java
public static String solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return "";
    }

    StringBuilder sb = new StringBuilder();
    int n = arr.length;

    for (int i = 0; i < n; i = i + 1) {
        for (int j = i; j < n; j = j + 1) {
            for (int k = i; k <= j; k = k + 1) {
                sb.append(arr[k]);
                if (k < j) {
                    sb.append("\t");
                }
            }
            sb.append("\n");
        }
    }

    return sb.toString();
}
```
