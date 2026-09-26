---
title: "Last Index - Solution"
problemUrl: "/problems/last-index/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the last index recursively, we leverage **post-order** traversal:
1. Search the suffix of the array (`idx + 1` to `end`) first.
2. If the target is found in the suffix, that returned index is definitively the last occurrence.
3. If not found in the suffix (returns `-1`), check if `arr[idx] == target`. If so, return `idx`.
4. Otherwise, return `-1`.

### Algorithm Steps
1. Define a helper recursive function `lastIndex(arr, target, idx)`.
2. **Base Case**: If `idx == arr.length`, return `-1`.
3. **Recursive Call**: Compute `lastInRest = lastIndex(arr, target, idx + 1)`.
4. **Post-order Check**:
   - If `lastInRest != -1`, return `lastInRest`.
   - Else if `arr[idx] == target`, return `idx`.
   - Else return `-1`.
5. Call `lastIndex(arr, target, 0)` in `solve(arr, target)`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, traversing all array elements.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
public static int solve(int[] arr, int target) {
    if (arr == null || arr.length == 0) {
        return -1;
    }
    return lastIndex(arr, target, 0);
}

private static int lastIndex(int[] arr, int target, int idx) {
    if (idx == arr.length) {
        return -1;
    }

    int lastInRest = lastIndex(arr, target, idx + 1);

    if (lastInRest != -1) {
        return lastInRest;
    }

    if (arr[idx] == target) {
        return idx;
    }

    return -1;
}
```
