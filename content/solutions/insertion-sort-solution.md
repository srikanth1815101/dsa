---
title: "Insertion Sort - Solution"
problemUrl: "/problems/insertion-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Insertion Sort builds the final sorted array one element at a time. It iterates over the array from left to right, maintaining a sorted prefix:

1. For each index `i` from `1` to `n - 1`, store `arr[i]` into a temporary variable `key`.
2. Compare `key` against elements in the sorted prefix (indices `j = i - 1` down to `0`).
3. Whenever an element `arr[j]` is strictly greater than `key`, shift it one position to the right (`arr[j + 1] = arr[j]`).
4. Decrement `j = j - 1` and continue shifting until encountering an element less than or equal to `key` (or reaching the start of the array).
5. Place `key` into the empty spot at `arr[j + 1]`.
6. This sorting algorithm is stable and adaptive: if the array is already sorted, it completes in linear $O(n)$ time with zero shifts.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Let `int n = arr.length`.
3. Loop `i` from `1` to `n - 1`:
   - Store `int key = arr[i]`.
   - Initialize `int j = i - 1`.
   - While `j >= 0` and `arr[j] > key`:
     - Set `arr[j + 1] = arr[j]`.
     - Update `j = j - 1`.
   - Place `arr[j + 1] = key`.
4. Return `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int n = arr.length;
    for (int i = 1; i < n; i = i + 1) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}
```
