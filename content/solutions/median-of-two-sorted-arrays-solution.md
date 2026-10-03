---
title: "Median of Two Sorted Arrays - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/median-of-two-sorted-arrays/"
weight: 59
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The median divides the combined sorted sequence of $m + n$ elements into two equal halves (or a left half with one extra element when $m + n$ is odd).

Instead of merging the two arrays in $\mathcal{O}(m + n)$ time, we can binary search the partition point in the smaller array (ensuring $m \le n$).
Let the partition cut `nums1` into left and right parts at index $i$, and `nums2` at index $j = \frac{m + n + 1}{2} - i$.
This ensures the total number of elements on the left side of both partitions is always $\lfloor \frac{m + n + 1}{2} \rfloor$.

We define:
- `maxLeft1 = (i == 0) ? -∞ : nums1[i - 1]`
- `minRight1 = (i == m) ? +∞ : nums1[i]`
- `maxLeft2 = (j == 0) ? -∞ : nums2[j - 1]`
- `minRight2 = (j == n) ? +∞ : nums2[j]`

The partition is correct when every element on the left is less than or equal to every element on the right:
$$maxLeft1 \le minRight2 \quad \text{and} \quad maxLeft2 \le minRight1$$

- If $maxLeft1 > minRight2$, partition $i$ is too far right, so shift left (`high = i - 1`).
- If $maxLeft2 > minRight1$, partition $i$ is too far left, so shift right (`low = i + 1`).
- Once the correct partition is found:
  - If $m + n$ is odd: $\text{median} = \max(maxLeft1, maxLeft2)$.
  - If $m + n$ is even: $\text{median} = \frac{\max(maxLeft1, maxLeft2) + \min(minRight1, minRight2)}{2.0}$.

### Step-by-Step Algorithm:
1. If `nums1.length > nums2.length`, swap arguments so that binary search runs on the smaller array.
2. Initialize `low = 0` and `high = m`.
3. While `low <= high`:
   - Compute `i = (low + high) / 2`.
   - Compute `j = (m + n + 1) / 2 - i`.
   - Determine `maxLeft1`, `minRight1`, `maxLeft2`, and `minRight2` with infinity bounds for boundary edges.
   - If `maxLeft1 <= minRight2` and `maxLeft2 <= minRight1`:
     - If $(m + n) \pmod 2 == 1$, return $\max(maxLeft1, maxLeft2)$.
     - Otherwise, return $\frac{\max(maxLeft1, maxLeft2) + \min(minRight1, minRight2)}{2.0}$.
   - Else if `maxLeft1 > minRight2`:
     - Set `high = i - 1`.
   - Else:
     - Set `low = i + 1`.
4. Return `0.0`.

## Code

```java
public static double solve(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) {
        return solve(nums2, nums1);
    }

    int m = nums1.length;
    int n = nums2.length;
    int low = 0;
    int high = m;

    while (low <= high) {
        int i = (low + high) / 2;
        int j = (m + n + 1) / 2 - i;

        int maxLeft1 = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];
        int minRight1 = (i == m) ? Integer.MAX_VALUE : nums1[i];

        int maxLeft2 = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];
        int minRight2 = (j == n) ? Integer.MAX_VALUE : nums2[j];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 == 1) {
                return Math.max(maxLeft1, maxLeft2);
            } else {
                double leftMax = Math.max(maxLeft1, maxLeft2);
                double rightMin = Math.min(minRight1, minRight2);
                return (leftMax + rightMin) / 2.0;
            }
        } else if (maxLeft1 > minRight2) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }

    return 0.0;
}
```
