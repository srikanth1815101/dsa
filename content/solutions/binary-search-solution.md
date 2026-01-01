---
title: "Solution: Binary Search"
date: 2024-01-04
problemUrl: "/problems/binary-search/"
---

## Approach

The generic binary search algorithm runs in logarithmic time by dividing the search interval in half at each step.

1. Initialize `left` to 0 and `right` to `nums.length - 1`.
2. While `left <= right`:
    - Calculate `mid` as `left + (right - left) / 2`.
    - If `nums[mid] == target`, return `mid`.
    - If `nums[mid] < target`, move to the right half (`left = mid + 1`).
    - If `nums[mid] > target`, move to the left half (`right = mid - 1`).
3. If target is not found, return `-1`.

### Complexity

- **Time Complexity**: O(log n)
- **Space Complexity**: O(1)

## Code

```java
public class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}
```
