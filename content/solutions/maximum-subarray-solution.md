---
title: "Solution: Maximum Subarray"
date: 2024-01-06
problemUrl: "/problems/maximum-subarray/"
---

## Approach

**Kadane's Algorithm** is the optimal way to solve this.
The idea is to iterate through the array and calculate the maximum sum ending at each position.
`currentMax = max(nums[i], currentMax + nums[i])`
`globalMax = max(globalMax, currentMax)`

### Complexity

- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

## Code

```java
public class Solution {
    public int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
}
```
