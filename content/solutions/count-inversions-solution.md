---
date: 2026-10-01T01:07:00+05:30

title: "Count Inversions - Solution"
problemUrl: "/problems/count-inversions/"
weight: 7
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The brute-force method checks every pair `(i, j)` in `O(n^2)` time. To optimize this to `O(n log n)`, we adapt the divide-and-conquer **Merge Sort** algorithm.

During the merge step of two sorted subarrays `left = arr[low..mid]` and `right = arr[mid+1..high]`:
- If `arr[i] <= arr[j]`, `arr[i]` is correctly placed without creating an inversion.
- If `arr[i] > arr[j]`, since the left subarray is sorted, every element from index `i` up to `mid` is also strictly greater than `arr[j]`.
- Thus, `arr[j]` forms exactly `(mid - i + 1)` inversions with all remaining elements of the left half.

By accumulating these counts recursively across all division levels, the total inversions are computed in `O(n log n)` time and `O(n)` auxiliary space.

### Step-by-Step Algorithm:
1. Create a helper method `mergeSortAndCount(arr, temp, low, high)`.
2. Base case: If `low >= high`, return `0`.
3. Compute `mid = low + (high - low) / 2`.
4. Recursively count inversions in the left half: `mergeSortAndCount(arr, temp, low, mid)`.
5. Recursively count inversions in the right half: `mergeSortAndCount(arr, temp, mid + 1, high)`.
6. Count split inversions during the merge step:
   - Maintain pointers `i = low`, `j = mid + 1`, and `k = low`.
   - While `i <= mid` and `j <= high`:
     - If `arr[i] <= arr[j]`, place `temp[k] = arr[i]` and advance `i`.
     - Otherwise, place `temp[k] = arr[j]`, accumulate `(mid - i + 1)` inversions, and advance `j`.
   - Copy remaining elements from both halves into `temp`.
   - Copy `temp[low..high]` back to `arr[low..high]`.
7. Return the sum of all inversions.

## Code

```java
public static long solve(long[] arr) {
    long[] temp = new long[arr.length];
    return mergeSort(arr, temp, 0, arr.length - 1);
}

private static long mergeSort(long[] arr, long[] temp, int low, int high) {
    long count = 0;
    if (low < high) {
        int mid = low + (high - low) / 2;

        count = count + mergeSort(arr, temp, low, mid);
        count = count + mergeSort(arr, temp, mid + 1, high);
        count = count + merge(arr, temp, low, mid, high);
    }
    return count;
}

private static long merge(long[] arr, long[] temp, int low, int mid, int high) {
    int i = low;
    int j = mid + 1;
    int k = low;
    long invCount = 0;

    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            temp[k] = arr[i];
            i = i + 1;
        } else {
            temp[k] = arr[j];
            invCount = invCount + (mid - i + 1);
            j = j + 1;
        }
        k = k + 1;
    }

    while (i <= mid) {
        temp[k] = arr[i];
        i = i + 1;
        k = k + 1;
    }

    while (j <= high) {
        temp[k] = arr[j];
        j = j + 1;
        k = k + 1;
    }

    for (int idx = low; idx <= high; idx = idx + 1) {
        arr[idx] = temp[idx];
    }

    return invCount;
}
```
