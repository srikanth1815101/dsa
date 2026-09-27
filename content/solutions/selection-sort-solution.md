---
title: "Selection Sort - Solution"
problemUrl: "/problems/selection-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Selection Sort is a comparison-based in-place sorting algorithm that maintains two partitions within the array: a sorted prefix and an unsorted suffix.

1. In each pass `i` (from `0` to `n - 2`), assume the element at index `i` is the minimum (`minIndex = i`).
2. Iterate through the unsorted portion from `j = i + 1` to `n - 1`. If an element `arr[j]` is strictly smaller than `arr[minIndex]`, update `minIndex = j`.
3. After evaluating the entire unsorted subarray, swap `arr[i]` with `arr[minIndex]` if `minIndex != i`.
4. This places the absolute smallest unsorted element into its permanent sorted position `i`. Repeating this across all `n - 1` positions sorts the entire array.
5. The algorithm performs exactly $\frac{n(n - 1)}{2}$ comparisons in all cases, yielding an $O(n^2)$ time complexity and $O(1)$ auxiliary space.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Let `int n = arr.length`.
3. Loop `i` from `0` to `n - 2`:
   - Initialize `int minIndex = i`.
   - Loop `j` from `i + 1` to `n - 1`:
     - If `arr[j] < arr[minIndex]`, set `minIndex = j`.
   - If `minIndex != i`:
     - Swap `arr[i]` and `arr[minIndex]`.
4. Return the sorted array `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int n = arr.length;
    for (int i = 0; i < n - 1; i = i + 1) {
        int minIndex = i;
        for (int j = i + 1; j < n; j = j + 1) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}
```
