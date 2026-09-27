---
title: "Quick Sort - Solution"
problemUrl: "/problems/quick-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Quick Sort applies the divide-and-conquer strategy using an in-place partitioning scheme:

1. **Pivot Selection**: Choose an element (commonly the last element `arr[high]`) as the pivot.
2. **Partitioning**:
   - Maintain a boundary index `i = low - 1` marking the end of the subarray containing elements smaller than or equal to the pivot.
   - Scan `j` from `low` to `high - 1`. If `arr[j] <= pivot`, increment `i = i + 1` and swap `arr[i]` with `arr[j]`.
   - Finally, place the pivot into its correct resting position by swapping `arr[i + 1]` with `arr[high]`.
   - The index `pivotIndex = i + 1` is now permanently sorted.
3. **Recursive Sub-sorting**:
   - Recursively invoke `quickSort` on the left range `[low, pivotIndex - 1]`.
   - Recursively invoke `quickSort` on the right range `[pivotIndex + 1, high]`.
4. The algorithm achieves average $O(n \log n)$ time complexity and $O(\log n)$ recursive stack space.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Define the recursive helper `quickSort(arr, low, high)`:
   - If `low < high`:
     - Determine the partition index `pi = partition(arr, low, high)`.
     - Recursively call `quickSort(arr, low, pi - 1)`.
     - Recursively call `quickSort(arr, pi + 1, high)`.
3. In `partition(arr, low, high)`:
   - Select `int pivot = arr[high]`.
   - Set `int i = low - 1`.
   - Loop `j` from `low` to `high - 1`:
     - If `arr[j] <= pivot`, increment `i = i + 1` and swap `arr[i]` and `arr[j]`.
   - Swap `arr[i + 1]` and `arr[high]`.
   - Return `i + 1`.
4. Call `quickSort(arr, 0, arr.length - 1)` and return `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    quickSort(arr, 0, arr.length - 1);
    return arr;
}

private static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j = j + 1) {
        if (arr[j] <= pivot) {
            i = i + 1;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}
```
