---
title: "Merge Sorted Array - Solution"
problemUrl: "/problems/merge-sorted-array/"
---

## Explanation

The trick is to **merge from the back**. Since `nums1` has extra space at the end, we can fill in elements from the largest to smallest without overwriting any unprocessed elements.

**Algorithm:**
1. Use three pointers: `i` at end of valid nums1 (m-1), `j` at end of nums2 (n-1), `k` at end of nums1 (m+n-1)
2. Compare elements at `i` and `j`, place the larger one at position `k`
3. Decrement the appropriate pointers
4. Continue until all elements from nums2 are placed

## Code

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }
}
```
