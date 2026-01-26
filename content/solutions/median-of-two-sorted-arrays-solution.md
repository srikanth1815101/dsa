---
title: "Median of Two Sorted Arrays - Solution"
problemUrl: "/problems/median-of-two-sorted-arrays/"
---

## Explanation

The key insight is to **partition both arrays** such that all elements in the left half are smaller than all elements in the right half. We use binary search on the smaller array to find the correct partition point.

**Algorithm:**
1. Ensure nums1 is the smaller array (for efficiency)
2. Binary search for partition in nums1; derive partition in nums2
3. Check if partition is valid: max of left ≤ min of right
4. If valid, compute median from the four boundary elements
5. Adjust binary search bounds based on partition validity

## Code

```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length, n = nums2.length;
        int left = 0, right = m;
        
        while (left <= right) {
            int i = (left + right) / 2;
            int j = (m + n + 1) / 2 - i;
            
            int maxLeft1 = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];
            int minRight1 = (i == m) ? Integer.MAX_VALUE : nums1[i];
            int maxLeft2 = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];
            int minRight2 = (j == n) ? Integer.MAX_VALUE : nums2[j];
            
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
                }
                return Math.max(maxLeft1, maxLeft2);
            } else if (maxLeft1 > minRight2) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }
        return 0.0;
    }
}
```
