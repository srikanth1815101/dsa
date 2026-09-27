---
title: "Quick Select - Solution"
problemUrl: "/problems/quick-select/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Quick Select solves the order-statistic problem by leveraging the in-place partitioning mechanics of Quick Sort:

1. **Target Index**: The $k^{\text{th}}$ smallest element corresponds to index `target = k - 1` in 0-based sorted order.
2. **Partition**: Pick a pivot (e.g., `arr[high]`) and partition `arr[low ... high]`. After partitioning, the pivot rests at index `pi`, with all smaller elements to its left and larger elements to its right.
3. **Selective Recurse**:
   - If `pi == target`, the pivot is already the exact $k^{\text{th}}$ smallest element. Return `arr[pi]`.
   - If `pi > target`, the target element lies within the left partition. Recurse only on `[low, pi - 1]`.
   - If `pi < target`, the target element lies within the right partition. Recurse only on `[pi + 1, high]`.
4. Because each step discards approximately half of the remaining elements on average, the total expected comparisons follow the geometric series $n + \frac{n}{2} + \frac{n}{4} + \dots = 2n$, resulting in an expected $O(n)$ time complexity.

### Step-by-Step Algorithm:
1. Initialize the target index `target = k - 1`.
2. Define `quickSelect(arr, low, high, target)`:
   - If `low == high`, return `arr[low]`.
   - Compute `int pi = partition(arr, low, high)`.
   - If `pi == target`, return `arr[pi]`.
   - Else if `pi > target`, return `quickSelect(arr, low, pi - 1, target)`.
   - Else, return `quickSelect(arr, pi + 1, high, target)`.
3. In `partition(arr, low, high)`:
   - Choose `int pivot = arr[high]`.
   - Set `int i = low - 1`.
   - Loop `j` from `low` to `high - 1`:
     - If `arr[j] <= pivot`, increment `i = i + 1` and swap `arr[i]` with `arr[j]`.
   - Swap `arr[i + 1]` with `arr[high]`.
   - Return `i + 1`.
4. Call `quickSelect(arr, 0, arr.length - 1, target)` and return the result.

## Code

```java
public static int solve(int[] arr, int k) {
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

private static int quickSelect(int[] arr, int low, int high, int target) {
    if (low == high) {
        return arr[low];
    }

    int pi = partition(arr, low, high);

    if (pi == target) {
        return arr[pi];
    } else if (pi > target) {
        return quickSelect(arr, low, pi - 1, target);
    } else {
        return quickSelect(arr, pi + 1, high, target);
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
