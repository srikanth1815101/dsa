---
title: "Binary Search - Solution"
problemUrl: "/problems/binary-search/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

**Binary Search** is a divide-and-conquer search algorithm that operates on a sorted array by repeatedly dividing the search interval in half:

1. **Initialize Interval**:
   Set `low = 0` and `high = nums.length - 1`.

2. **Halving the Range**:
   While `low <= high`:
   - Compute the midpoint safely against integer overflow:
     $$\text{mid} = \text{low} + \left\lfloor \frac{\text{high} - \text{low}}{2} \right\rfloor$$
   - If $\text{nums}[\text{mid}] == \text{target}$, return `mid`.
   - If $\text{nums}[\text{mid}] < \text{target}$, the target must reside in the right half:
     $$\text{low} = \text{mid} + 1$$
   - If $\text{nums}[\text{mid}] > \text{target}$, the target must reside in the left half:
     $$\text{high} = \text{mid} - 1$$

3. **Target Absent**:
   If `low > high`, the search space has collapsed without a match; return `-1`.

### Complexity Analysis
- **Time Complexity**: $O(\log n)$, as each comparison halves the remaining search range.
- **Space Complexity**: $O(1)$, executing iteratively in constant memory.

---

## Code

```java
public static int solve(int[] nums, int target) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int low = 0;
    int high = nums.length - 1;

    while (low <= high) {
        int mid = low + ((high - low) / 2);

        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}
```
