---
title: "First and Last Index - Solution"
problemUrl: "/problems/first-and-last-index/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find both the starting and ending positions of a target element in $O(\log n)$ time, we perform **two separate modified binary searches**:

1. **Find First Index (Leftmost Occurrence)**:
   - When $\text{nums}[\text{mid}] == \text{target}$, record $\text{mid}$ as a potential first index, but do not terminate. Instead, continue searching to the left by updating:
     $$\text{high} = \text{mid} - 1$$
   - If $\text{nums}[\text{mid}] < \text{target}$, update $\text{low} = \text{mid} + 1$.
   - If $\text{nums}[\text{mid}] > \text{target}$, update $\text{high} = \text{mid} - 1$.

2. **Find Last Index (Rightmost Occurrence)**:
   - When $\text{nums}[\text{mid}] == \text{target}$, record $\text{mid}$ as a potential last index, and continue searching to the right by updating:
     $$\text{low} = \text{mid} + 1$$
   - If $\text{nums}[\text{mid}] < \text{target}$, update $\text{low} = \text{mid} + 1$.
   - If $\text{nums}[\text{mid}] > \text{target}$, update $\text{high} = \text{mid} - 1$.

3. **Return Boundary Pair**:
   - Combine both findings into `[firstIndex, lastIndex]`.
   - If the element was never found in either pass, the corresponding variable remains `-1`, naturally returning `[-1, -1]`.

### Complexity Analysis
- **Time Complexity**: $O(\log n)$, as we perform two independent logarithmic binary search traversals.
- **Space Complexity**: $O(1)$, operating with a fixed number of pointer variables.

---

## Code

```java
public static int[] solve(int[] nums, int target) {
    int first = findFirst(nums, target);
    int last = findLast(nums, target);
    return new int[]{first, last};
}

private static int findFirst(int[] nums, int target) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int low = 0;
    int high = nums.length - 1;
    int ans = -1;

    while (low <= high) {
        int mid = low + ((high - low) / 2);

        if (nums[mid] == target) {
            ans = mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
}

private static int findLast(int[] nums, int target) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int low = 0;
    int high = nums.length - 1;
    int ans = -1;

    while (low <= high) {
        int mid = low + ((high - low) / 2);

        if (nums[mid] == target) {
            ans = mid;
            low = mid + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
}
```
