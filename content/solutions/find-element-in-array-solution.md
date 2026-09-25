---
title: "Find Element in Array - Solution"
problemUrl: "/problems/find-element-in-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Since the array is unsorted, the most direct and optimal algorithm without preprocessing is **linear search**:

1. **Array Traversal**:
   Iterate sequentially from index `0` up to `arr.length - 1`.
2. **Comparison**:
   At each index `i`, check whether `arr[i] == d`.
   - If equal, immediately return `i` (ensuring the first occurrence is returned).
3. **Not Found**:
   If the loop finishes without finding `d`, return `-1`.

### Complexity Analysis
- **Time Complexity**: $O(n)$ in the worst case (when $d$ is at the end or absent) and $O(1)$ in the best case (when $d$ is at index 0).
- **Space Complexity**: $O(1)$, as search is performed in place using a single loop counter.

---

## Code

```java
public static int solve(int[] arr, int d) {
    if (arr == null) {
        return -1;
    }

    for (int i = 0; i < arr.length; i = i + 1) {
        if (arr[i] == d) {
            return i;
        }
    }

    return -1;
}
```
