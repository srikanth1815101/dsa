---
date: 2026-10-01T01:01:00+05:30

title: "Search in Rotated Sorted Array - Solution"
problemUrl: "/problems/search-in-rotated-sorted-array/"
weight: 1
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In a standard binary search, the array is entirely sorted. When an array is rotated at an unknown pivot, dividing it at any index `mid` still guarantees that at least one of the two halves (`[low, mid]` or `[mid, high]`) is completely sorted.

By inspecting `nums[low]` and `nums[mid]`:
- If `nums[low] <= nums[mid]`, the left half is monotonically increasing. We can verify whether `target` falls in `[nums[low], nums[mid])`. If yes, we search the left half; otherwise, we search the right half.
- If `nums[low] > nums[mid]`, the right half (`[mid, high]`) must be strictly sorted. We verify whether `target` falls in `(nums[mid], nums[high]]`. If yes, we search the right half; otherwise, we search the left half.

This eliminates half of the remaining search space at every step, yielding `O(log n)` time complexity and `O(1)` auxiliary space.

### Step-by-Step Algorithm:
1. Initialize two pointers: `low = 0` and `high = nums.length - 1`.
2. While `low <= high`, compute the midpoint: `mid = low + (high - low) / 2`.
3. If `nums[mid] == target`, immediately return `mid`.
4. Check if the left half `[low, mid]` is sorted by evaluating `nums[low] <= nums[mid]`:
   - If `nums[low] <= target` and `target < nums[mid]`, narrow search to `high = mid - 1`.
   - Otherwise, narrow search to `low = mid + 1`.
5. If the left half is not sorted, the right half `[mid, high]` must be sorted:
   - If `nums[mid] < target` and `target <= nums[high]`, narrow search to `low = mid + 1`.
   - Otherwise, narrow search to `high = mid - 1`.
6. If the loop terminates without finding `target`, return `-1`.

## Code

```java
public static int solve(int[] nums, int target) {
    int low = 0;
    int high = nums.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target) {
            return mid;
        }

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}
```
