---
title: "Solution: Merge Sorted Arrays"
date: 2024-01-05
problemUrl: "/problems/merge-sorted-arrays/"
---

## Approach

Since both arrays are sorted, we can use a **Two Pointer** (actually Three Pointer) approach starting from the **end**.
`p1` points to the last element of valid `nums1`.
`p2` points to the last element of `nums2`.
`p` points to the end of `nums1` (total capacity).

Compare `nums1[p1]` and `nums2[p2]` and place the larger at `nums1[p]`. Decrement pointers.

### Complexity

- **Time Complexity**: O(m + n)
- **Space Complexity**: O(1) (in-place)

## Code

```java
public class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;
        
        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }
        
        // If elements remain in p2, copy them
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    }
}
```
