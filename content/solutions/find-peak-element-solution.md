---
date: 2026-10-01T01:03:00+05:30

title: "Find Peak Element - Solution"
problemUrl: "/problems/find-peak-element/"
weight: 3
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks to locate any local peak in `O(log n)` time. Because `nums[-1] = nums[n] = -∞`, any local ascent guarantees that a peak exists in that direction.

At any index `mid`:
- If `nums[mid] < nums[mid + 1]`, the values are rising. Following this upward slope guarantees encountering at least one peak (even if values rise all the way to `nums[n - 1]`, since `nums[n] = -∞`). Therefore, we set `low = mid + 1`.
- If `nums[mid] > nums[mid + 1]`, the values are falling. A peak must exist at `mid` or to its left. Therefore, we set `high = mid`.

By repeatedly halving the search space, the two pointers `low` and `high` converge on a local maximum, satisfying the `O(log n)` requirement with `O(1)` memory.

### Step-by-Step Algorithm:
1. Initialize two pointers: `low = 0` and `high = nums.length - 1`.
2. While `low < high`, calculate `mid = low + (high - low) / 2`.
3. Compare `nums[mid]` with `nums[mid + 1]`:
   - If `nums[mid] < nums[mid + 1]`, search the right half: `low = mid + 1`.
   - Otherwise, search the left half including `mid`: `high = mid`.
4. When `low == high`, return `low`.

## Code

```java
public static int solve(int[] nums) {
    int low = 0;
    int high = nums.length - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}
```
