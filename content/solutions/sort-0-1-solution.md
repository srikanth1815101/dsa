---
title: "Sort 0 1 - Solution"
problemUrl: "/problems/sort-0-1/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Sorting a binary array can be solved in a single pass using the two-pointer partitioning approach:

1. Maintain two pointers:
   - `i = 0`: Represents the boundary up to which all elements are guaranteed to be `0`.
   - `j = 0`: The explorer pointer traversing through the array from left to right.
2. When `arr[j] == 1`, do nothing and simply advance `j = j + 1`.
3. When `arr[j] == 0`:
   - Swap `arr[i]` and `arr[j]`.
   - Increment `i = i + 1` to expand the partition of zeroes.
   - Increment `j = j + 1`.
4. By the time `j` reaches the end of the array, all `0`s are gathered in the range `[0, i - 1]` and all `1`s reside in `[i, n - 1]`.
5. This requires only a single traversal with $O(n)$ time and $O(1)$ auxiliary space.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Initialize pointers `int i = 0` and `int j = 0`.
3. While `j < arr.length`:
   - If `arr[j] == 0`:
     - Swap `arr[i]` and `arr[j]`.
     - Increment `i = i + 1`.
     - Increment `j = j + 1`.
   - Else:
     - Increment `j = j + 1`.
4. Return `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int i = 0;
    int j = 0;

    while (j < arr.length) {
        if (arr[j] == 0) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i = i + 1;
            j = j + 1;
        } else {
            j = j + 1;
        }
    }

    return arr;
}
```
