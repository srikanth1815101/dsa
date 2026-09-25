---
title: "Ceil and Floor - Solution"
problemUrl: "/problems/ceil-and-floor/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the ceil and floor of `target` in $O(\log n)$ time, we use a single binary search pass:

1. **Variables**:
   - Initialize `low = 0`, `high = nums.length - 1`.
   - Initialize `ceil = -1`, `floor = -1`.

2. **Binary Search Traversal**:
   - Compute `mid = low + ((high - low) / 2)`.
   - **Exact Match**:
     If $\text{nums}[\text{mid}] == \text{target}$, the element is both its own ceil and floor:
     $$\text{ceil} = \text{nums}[\text{mid}], \quad \text{floor} = \text{nums}[\text{mid}]$$
     We can terminate immediately.
   - **Mid Element is Smaller**:
     If $\text{nums}[\text{mid}] < \text{target}$, $\text{nums}[\text{mid}]$ is a valid candidate for floor. We store $\text{floor} = \text{nums}[\text{mid}]$ and search the right half:
     $$\text{low} = \text{mid} + 1$$
   - **Mid Element is Greater**:
     If $\text{nums}[\text{mid}] > \text{target}$, $\text{nums}[\text{mid}]$ is a valid candidate for ceil. We store $\text{ceil} = \text{nums}[\text{mid}]$ and search the left half:
     $$\text{high} = \text{mid} - 1$$

3. **Termination**:
   - Return `new int[]{ceil, floor}`.
   - If `target` is smaller than all elements, `floor` remains `-1`.
   - If `target` is greater than all elements, `ceil` remains `-1`.

### Complexity Analysis
- **Time Complexity**: $O(\log n)$, as the search space is halved in each step.
- **Space Complexity**: $O(1)$, requiring only pointer and candidate variables.

---

## Code

```java
public static int[] solve(int[] nums, int target) {
    if (nums == null || nums.length == 0) {
        return new int[]{-1, -1};
    }

    int low = 0;
    int high = nums.length - 1;
    int ceil = -1;
    int floor = -1;

    while (low <= high) {
        int mid = low + ((high - low) / 2);

        if (nums[mid] == target) {
            ceil = nums[mid];
            floor = nums[mid];
            break;
        } else if (nums[mid] < target) {
            floor = nums[mid];
            low = mid + 1;
        } else {
            ceil = nums[mid];
            high = mid - 1;
        }
    }

    return new int[]{ceil, floor};
}
```
