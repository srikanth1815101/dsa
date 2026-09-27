---
title: "Bubble Sort - Solution"
problemUrl: "/problems/bubble-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Bubble Sort works by repeatedly stepping through the list, comparing adjacent pairs of elements, and swapping them if they are in the wrong order:
1. In pass `1`, adjacent comparisons compare index `0` and `1`, `1` and `2`, ..., up to `n - 2` and `n - 1`. The largest element bubbles up to index `n - 1`.
2. In pass `i` (from `1` to `n - 1`), compare adjacent pairs up to `n - 1 - i`.
3. If in any pass no swaps occur, the array is already completely sorted, allowing early termination.
4. The algorithm sorts in place using $O(1)$ auxiliary memory.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Determine `int n = arr.length`.
3. Loop `i` from `0` to `n - 2`:
   - Initialize `boolean swapped = false`.
   - Loop `j` from `0` to `n - 2 - i`:
     - If `arr[j] > arr[j + 1]`:
       - Swap `arr[j]` and `arr[j + 1]`.
       - Set `swapped = true`.
   - If `!swapped`, break early as the array is already sorted.
4. Return `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int n = arr.length;
    for (int i = 0; i < n - 1; i = i + 1) {
        boolean swapped = false;
        for (int j = 0; j < n - 1 - i; j = j + 1) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return arr;
}
```

## Complexity Analysis

- **Time Complexity:** $O(n^2)$ worst-case and average-case when the array is reverse sorted or randomly ordered. In the best-case (already sorted array with early termination flag), time complexity is $O(n)$.
- **Space Complexity:** $O(1)$ auxiliary memory as sorting is performed in-place.
