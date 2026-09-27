---
title: "Sort 0 1 2 - Solution"
problemUrl: "/problems/sort-0-1-2/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Dutch National Flag algorithm partitions the array into four regions using three pointers (`low`, `mid`, and `high`):
- `[0 ... low - 1]`: strictly `0`s
- `[low ... mid - 1]`: strictly `1`s
- `[mid ... high]`: unexplored elements
- `[high + 1 ... n - 1]`: strictly `2`s

1. Initialize `low = 0`, `mid = 0`, and `high = n - 1`.
2. While `mid <= high`:
   - If `arr[mid] == 0`: Swap `arr[low]` and `arr[mid]`. Increment both `low = low + 1` and `mid = mid + 1`.
   - If `arr[mid] == 1`: The element is already in the middle partition. Increment `mid = mid + 1`.
   - If `arr[mid] == 2`: Swap `arr[mid]` and `arr[high]`. Decrement `high = high - 1`. Note that `mid` is not advanced because the swapped element coming from `high` has not been evaluated yet.
3. When `mid > high`, all elements have been categorized into their respective partitions in a single traversal, achieving $O(n)$ time and $O(1)$ space.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Initialize `int low = 0`, `int mid = 0`, and `int high = arr.length - 1`.
3. While `mid <= high`:
   - If `arr[mid] == 0`:
     - Swap `arr[low]` and `arr[mid]`.
     - Update `low = low + 1`.
     - Update `mid = mid + 1`.
   - Else if `arr[mid] == 1`:
     - Update `mid = mid + 1`.
   - Else:
     - Swap `arr[mid]` and `arr[high]`.
     - Update `high = high - 1`.
4. Return `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int low = 0;
    int mid = 0;
    int high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] == 0) {
            int temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low = low + 1;
            mid = mid + 1;
        } else if (arr[mid] == 1) {
            mid = mid + 1;
        } else {
            int temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high = high - 1;
        }
    }

    return arr;
}
```
