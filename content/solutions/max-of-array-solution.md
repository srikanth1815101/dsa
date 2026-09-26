---
title: "Max of Array - Solution"
problemUrl: "/problems/max-of-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Finding the maximum element of an array recursively compares the current element against the maximum of the rest of the array.

### Algorithm Steps
1. Define a helper recursive function `maxOfArray(arr, idx)`.
2. **Base Case**: If `idx == arr.length - 1`, return `arr[idx]`.
3. **Recursive Step**: Recursively find the maximum from the remaining elements: `restMax = maxOfArray(arr, idx + 1)`.
4. **Combine**: Return `Math.max(arr[idx], restMax)`.
5. Invoke `maxOfArray(arr, 0)` in `solve(arr)`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, examining each element once.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        throw new IllegalArgumentException("Array must not be empty");
    }
    return maxOfArray(arr, 0);
}

private static int maxOfArray(int[] arr, int idx) {
    if (idx == arr.length - 1) {
        return arr[idx];
    }
    int restMax = maxOfArray(arr, idx + 1);
    return Math.max(arr[idx], restMax);
}
```
