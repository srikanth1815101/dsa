---
title: "Binary Search - Solution"
problemUrl: "/problems/binary-search/"
---

## Explanation

Binary search works by repeatedly dividing the search interval in half. We maintain two pointers, `left` and `right`, representing the current search range.

**Algorithm:**
1. Calculate the middle index: `mid = left + (right - left) / 2`
2. If `nums[mid] == target`, return `mid`
3. If `nums[mid] < target`, search the right half: `left = mid + 1`
4. If `nums[mid] > target`, search the left half: `right = mid - 1`
5. Repeat until `left > right`

## Code

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}
```
