---
title: "First Index - Solution"
problemUrl: "/problems/first-index/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the first occurrence index recursively, evaluate the element at index `idx` in pre-order before delegating to the recursive call.

### Algorithm Steps
1. Define a helper recursive function `firstIndex(arr, target, idx)`.
2. **Base Case**: If `idx == arr.length`, the target was not found in the array; return `-1`.
3. **Match Found**: If `arr[idx] == target`, return `idx` immediately.
4. **Recursive Step**: Otherwise, return `firstIndex(arr, target, idx + 1)`.
5. Call `firstIndex(arr, target, 0)` in `solve(arr, target)`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, traversing array elements from left to right until the target is found or the array ends.
- **Space Complexity**: $O(n)$ recursion call stack space in worst case.

---

## Code

```java
public static int solve(int[] arr, int target) {
    if (arr == null || arr.length == 0) {
        return -1;
    }
    return firstIndex(arr, target, 0);
}

private static int firstIndex(int[] arr, int target, int idx) {
    if (idx == arr.length) {
        return -1;
    }
    if (arr[idx] == target) {
        return idx;
    }
    return firstIndex(arr, target, idx + 1);
}
```
