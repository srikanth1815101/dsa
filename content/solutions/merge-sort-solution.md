---
title: "Merge Sort - Solution"
problemUrl: "/problems/merge-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Merge Sort utilizes the divide-and-conquer strategy to sort an array in deterministic $O(n \log n)$ time:

1. **Divide**: Calculate the middle index `mid = left + (right - left) / 2` and divide the current range into `[left, mid]` and `[mid + 1, right]`.
2. **Conquer**: Recursively call `mergeSort` on both sub-ranges until reaching the base condition where `left >= right` (a subarray of size 0 or 1 is inherently sorted).
3. **Combine (Merge)**:
   - Allocate an auxiliary array to temporarily store the merged elements.
   - Maintain two pointers starting at the beginning of each sorted half (`i = left` and `j = mid + 1`).
   - In each step, append the smaller element between `arr[i]` and `arr[j]` into the auxiliary array.
   - When one subarray is exhausted, copy all remaining elements from the other subarray into the auxiliary array.
   - Copy the sorted auxiliary elements back into `arr[left ... right]`.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Allocate a temporary buffer `int[] temp = new int[arr.length]`.
3. Invoke `sort(arr, temp, 0, arr.length - 1)`:
   - If `left >= right`, return.
   - Compute `int mid = left + (right - left) / 2`.
   - Recursively call `sort(arr, temp, left, mid)`.
   - Recursively call `sort(arr, temp, mid + 1, right)`.
   - Call `merge(arr, temp, left, mid, right)`:
     - Set pointers `i = left`, `j = mid + 1`, and `k = left`.
     - While `i <= mid` and `j <= right`:
       - If `arr[i] <= arr[j]`, place `temp[k] = arr[i]` and increment `i`.
       - Else, place `temp[k] = arr[j]` and increment `j`.
       - Increment `k`.
     - Copy remaining elements from left half, if any.
     - Copy remaining elements from right half, if any.
     - Copy elements from `temp` back to `arr` between indices `left` and `right`.
4. Return `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int[] temp = new int[arr.length];
    mergeSort(arr, temp, 0, arr.length - 1);
    return arr;
}

private static void mergeSort(int[] arr, int[] temp, int left, int right) {
    if (left >= right) {
        return;
    }

    int mid = left + (right - left) / 2;
    mergeSort(arr, temp, left, mid);
    mergeSort(arr, temp, mid + 1, right);
    merge(arr, temp, left, mid, right);
}

private static void merge(int[] arr, int[] temp, int left, int mid, int right) {
    int i = left;
    int j = mid + 1;
    int k = left;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k] = arr[i];
            i = i + 1;
        } else {
            temp[k] = arr[j];
            j = j + 1;
        }
        k = k + 1;
    }

    while (i <= mid) {
        temp[k] = arr[i];
        i = i + 1;
        k = k + 1;
    }

    while (j <= right) {
        temp[k] = arr[j];
        j = j + 1;
        k = k + 1;
    }

    for (int idx = left; idx <= right; idx = idx + 1) {
        arr[idx] = temp[idx];
    }
}
```
