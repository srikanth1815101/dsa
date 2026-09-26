---
title: "All Indices - Solution"
problemUrl: "/problems/all-indices/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The challenge of returning an array of exact size recursively is that the total count of matches is unknown until the entire array has been examined.

By maintaining a `count` variable as an argument:
1. When traversing forward (pre-order), increment `count` whenever `arr[idx] == target`.
2. When the base case `idx == arr.length` is reached, `count` holds the exact number of occurrences. Allocate `new int[count]`.
3. Returning backward (post-order), if `arr[idx] == target`, place `idx` at position `count` of the newly created array.

### Algorithm Steps
1. Define `allIndices(arr, target, idx, count)`:
   - **Base Case**: If `idx == arr.length`, return `new int[count]`.
   - If `arr[idx] == target`:
     - Call `res = allIndices(arr, target, idx + 1, count + 1)`.
     - Assign `res[count] = idx`.
     - Return `res`.
   - Else:
     - Return `allIndices(arr, target, idx + 1, count)`.
2. In `solve(arr, target)`, return `allIndices(arr, target, 0, 0)`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, visiting each element of `arr` once.
- **Space Complexity**: $O(n)$ call stack depth plus $O(k)$ for the output array where $k \le n$.

---

## Code

```java
public static int[] solve(int[] arr, int target) {
    if (arr == null || arr.length == 0) {
        return new int[0];
    }
    return allIndices(arr, target, 0, 0);
}

private static int[] allIndices(int[] arr, int target, int idx, int count) {
    if (idx == arr.length) {
        return new int[count];
    }

    if (arr[idx] == target) {
        int[] res = allIndices(arr, target, idx + 1, count + 1);
        res[count] = idx;
        return res;
    } else {
        return allIndices(arr, target, idx + 1, count);
    }
}
```
