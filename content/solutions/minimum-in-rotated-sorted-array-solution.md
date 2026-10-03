---
date: 2026-10-01T01:02:00+05:30

title: "Minimum in Rotated Sorted Array - Solution"
problemUrl: "/problems/minimum-in-rotated-sorted-array/"
weight: 2
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In a rotated sorted array of distinct elements, the minimum element corresponds to the inflection point where the rotation boundary occurs.

Comparing `nums[mid]` against `nums[high]`:
- If `nums[mid] > nums[high]`, the inflection point (and thus the minimum element) must reside strictly to the right of `mid`. Therefore, we set `low = mid + 1`.
- If `nums[mid] <= nums[high]`, the right half `[mid, high]` is sorted, which means the minimum element could be `nums[mid]` itself or lie to its left. Therefore, we preserve `mid` by setting `high = mid`.

When `low` equals `high`, the search space has converged to the unique inflection point, which is the minimum value.

### Step-by-Step Algorithm:
1. Initialize two pointers: `low = 0` and `high = nums.length - 1`.
2. While `low < high`, compute the midpoint: `mid = low + (high - low) / 2`.
3. Compare `nums[mid]` with `nums[high]`:
   - If `nums[mid] > nums[high]`, set `low = mid + 1`.
   - Otherwise, set `high = mid`.
4. Once `low == high`, return `nums[low]`.

## Code

```java
public static int solve(int[] nums) {
    int low = 0;
    int high = nums.length - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return nums[low];
}
```
