---
title: "Reverse Array - Solution"
problemUrl: "/problems/reverse-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The optimal way to reverse an array in-place without creating a separate array is the **Two-Pointer Technique**:

1. **Initialize Pointers**:
   Set `left = 0` (pointing to the start) and `right = arr.length - 1` (pointing to the end).

2. **Converging Swaps**:
   While `left < right`:
   - Swap `arr[left]` and `arr[right]`.
   - Increment `left = left + 1`.
   - Decrement `right = right - 1`.

3. **Termination**:
   When `left >= right`, all pairs have been swapped, and the middle element (for odd lengths) remains in its correct spot.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since we perform $\lfloor n / 2 \rfloor$ swaps, visiting each element once.
- **Space Complexity**: $O(1)$, reversing strictly in-place with a single temporary swap variable.

---

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int left = 0;
    int right = arr.length - 1;

    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left = left + 1;
        right = right - 1;
    }

    return arr;
}
```
