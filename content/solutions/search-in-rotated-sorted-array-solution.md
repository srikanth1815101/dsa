---
title: "Search in Rotated Sorted Array - Solution"
problemUrl: "/problems/search-in-rotated-sorted-array/"
---

## Explanation

Even though the array is rotated, **one half is always sorted**. We use this property in our modified binary search.

**Algorithm:**
1. Find the middle element
2. Determine which half is sorted (compare `nums[left]` with `nums[mid]`)
3. Check if target lies in the sorted half
4. If yes, search that half; otherwise search the other half
5. Repeat until found or search space is exhausted

## Code

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) return mid;
            
            // Left half is sorted
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // Right half is sorted
            else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
}
```
